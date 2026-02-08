let modifiersGlobal = [
  {
    "name": "Soldier04_IsSupporting",
    "realName": "Support",
    "aim": "Other",
    "desc": "When a Supported allied unit attacks any target, the Silvermane Cannoneer will immediately launch a Follow-Up ATK on the target.",
    "type": "Provide Support",
    "perma": true
  },
  {
    "name": "Soldier04_AttachModifier",
    "realName": "Reinforced",
    "aim": "Other",
    "desc": "Supported by Silvermane Cannoneer.",
    "type": "Support Target",
    "perma": true
  },
  {
    "name": "Soldier04_EnhanceAttachModifier",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1638600472\">Standard_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1592948509\">Standard_AttackRatioDown</a>",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "ATK -#1[i]%.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"493386269\">Standard_AttackDeltaUp</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-313217188\">Standard_AttackDeltaDown</a>",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "ATK -#1[i].",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-640702816\">Standard_DefenceRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1908508133\">Standard_DefenceDeltaUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-725625020\">Standard_DefenceDeltaDown</a>",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF -#1[i].",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2083575949\">Standard_AllDamageAddedRatio</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-543542238\">Standard_CriticalChanceUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-424299549\">Standard_CriticalChanceDown</a>",
    "realName": "CRIT Rate Reduction",
    "aim": "Debuff",
    "desc": "CRIT Rate -#1[i]%.",
    "type": "CRIT Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"365398491\">Standard_CriticalDamageUp</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"909057422\">Standard_CriticalDamageDown</a>",
    "realName": "CRIT DMG Reduction",
    "aim": "Debuff",
    "desc": "CRIT DMG -#1[i]%.",
    "type": "CRIT DMG Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "DMG dealt -#1[i]%.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1777684731\">Standard_AllDamageTypeAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2082176038\">Standard_PhysicalAddedRatio</a>",
    "realName": "Physical DMG Boost",
    "aim": "Buff",
    "desc": "Physical DMG dealt +#1[i]%.",
    "type": "Physical DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"396974031\">Standard_FireAddedRatio</a>",
    "realName": "Fire DMG Boost",
    "aim": "Buff",
    "desc": "Fire DMG dealt +#1[i]%.",
    "type": "Fire DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-107089616\">Standard_IceAddedRatio</a>",
    "realName": "Ice DMG Boost",
    "aim": "Buff",
    "desc": "Ice DMG dealt +#1[i]%.",
    "type": "Ice DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1568131025\">Standard_ThunderAddedRatio</a>",
    "realName": "Lightning DMG Boost",
    "aim": "Buff",
    "desc": "Lightning DMG dealt +#1[i]%.",
    "type": "Lightning DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"443833545\">Standard_WindAddedRatio</a>",
    "realName": "Wind DMG Boost",
    "aim": "Buff",
    "desc": "Wind DMG dealt +#1[i]%.",
    "type": "Wind DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"881315694\">Standard_QuantumAddedRatio</a>",
    "realName": "Quantum DMG Boost",
    "aim": "Buff",
    "desc": "Quantum DMG dealt +#1[i]%.",
    "type": "Quantum DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-589529710\">Standard_ImaginaryAddedRatio</a>",
    "realName": "Imaginary DMG Boost",
    "aim": "Buff",
    "desc": "Imaginary DMG dealt +#1[i]%.",
    "type": "Imaginary DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1897838297\">Standard_AllDamageTypeResistance</a>",
    "realName": "All-Type RES Boost",
    "aim": "Buff",
    "desc": "All-Type RES +#1[i]%.",
    "type": "All-Type RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"395693382\">Standard_PhysicalResistance</a>",
    "realName": "Physical RES Boost",
    "aim": "Buff",
    "desc": "Physical RES +#1[i]%.",
    "type": "Physical RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1103107279\">Standard_FireResistance</a>",
    "realName": "Fire RES Boost",
    "aim": "Buff",
    "desc": "Fire RES +#1[i]%.",
    "type": "Fire RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1811570484\">Standard_IceResistance</a>",
    "realName": "Ice RES Boost",
    "aim": "Buff",
    "desc": "Ice RES +#1[i]%.",
    "type": "Ice RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1519562059\">Standard_ThunderResistance</a>",
    "realName": "Lightning RES Boost",
    "aim": "Buff",
    "desc": "Lightning RES +#1[i]%.",
    "type": "Lightning RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1512979021\">Standard_WindResistance</a>",
    "realName": "Wind RES Boost",
    "aim": "Buff",
    "desc": "Wind RES +#1[i]%.",
    "type": "Wind RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"337755598\">Standard_QuantumResistance</a>",
    "realName": "Quantum RES Boost",
    "aim": "Buff",
    "desc": "Quantum RES +#1[i]%.",
    "type": "Quantum RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-698350622\">Standard_ImaginaryResistance</a>",
    "realName": "Imaginary RES Boost",
    "aim": "Buff",
    "desc": "Imaginary RES +#1[i]%.",
    "type": "Imaginary RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2158881\">Standard_PhysicalPenetrate</a>",
    "realName": "Physical RES PEN",
    "aim": "Buff",
    "desc": "Physical RES PEN +#1[i]%.",
    "type": "Physical RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"801781618\">Standard_FirePenetrate</a>",
    "realName": "Fire RES PEN",
    "aim": "Buff",
    "desc": "Fire RES PEN +#1[i]%.",
    "type": "Fire RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-415729513\">Standard_IcePenetrate</a>",
    "realName": "Ice RES PEN",
    "aim": "Buff",
    "desc": "Ice RES PEN +#1[i]%.",
    "type": "Ice RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"288500000\">Standard_ThunderPenetrate</a>",
    "realName": "Lightning RES PEN",
    "aim": "Buff",
    "desc": "Lightning RES PEN +#1[i]%.",
    "type": "Lightning RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-885249768\">Standard_WindPenetrate</a>",
    "realName": "Wind RES PEN",
    "aim": "Buff",
    "desc": "Wind RES PEN +#1[i]%.",
    "type": "Wind RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"618971177\">Standard_QuantumPenetrate</a>",
    "realName": "Quantum RES PEN",
    "aim": "Buff",
    "desc": "Quantum RES PEN +#1[i]%.",
    "type": "Quantum RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1394259979\">Standard_ImaginaryPenetrate</a>",
    "realName": "Imaginary RES PEN",
    "aim": "Buff",
    "desc": "Imaginary RES PEN +#1[i]%.",
    "type": "Imaginary RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-43160834\">Standard_AllDamageTypeTakenRatio</a>",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-109354427\">Standard_PhysicalTakenRatio</a>",
    "realName": "Physical Vulnerability",
    "aim": "Debuff",
    "desc": "Physical DMG taken +#1[i]%.",
    "type": "Physical Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1249803144\">Standard_FireTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"255191535\">Standard_IceTakenRatio</a>",
    "realName": "Ice Vulnerability",
    "aim": "Debuff",
    "desc": "Ice DMG taken +#1[i]%.",
    "type": "Ice Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"109685826\">Standard_ThunderTakenRatio</a>",
    "realName": "Lightning Vulnerability",
    "aim": "Debuff",
    "desc": "Lightning DMG taken +#1[i]%.",
    "type": "Lightning Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1944536666\">Standard_WindTakenRatio</a>",
    "realName": "Wind Vulnerability",
    "aim": "Debuff",
    "desc": "Wind DMG taken +#1[i]%.",
    "type": "Wind Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"60101517\">Standard_QuantumTakenRatio</a>",
    "realName": "Quantum Vulnerability",
    "aim": "Debuff",
    "desc": "Quantum DMG taken +#1[i]%.",
    "type": "Quantum Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"991543017\">Standard_ImaginaryTakenRatio</a>",
    "realName": "Imaginary Vulnerability",
    "aim": "Debuff",
    "desc": "Imaginary DMG taken +#1[i]%.",
    "type": "Imaginary Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"370516022\">Standard_PhysicalAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1252318641\">Standard_FireAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"213964956\">Standard_IceAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-119299315\">Standard_ThunderAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1173787861\">Standard_WindAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-48968594\">Standard_QuantumAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"179551098\">Standard_ImaginaryAbsorb</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1910965732\">Standard_StanceBreakAddedRatio</a>",
    "realName": "Weakness Break Efficiency Boost",
    "aim": "Buff",
    "desc": "Increases Weakness Break Efficiency by #1[i]%.",
    "type": "Weakness Break Efficiency Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1821874088\">Standard_StanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-797089541\">Standard_StanceBreakResistanceAll</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1260087139\">Standard_StanceBreakTakenRatio</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1567140260\">Standard_FireStanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-525185247\">Standard_IceStanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2091317506\">Standard_ThunderStanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"921927174\">Standard_WindStanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-107751281\">Standard_QuantumStanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"22618651\">Standard_ImaginaryStanceBreakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2036544920\">Standard_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1325963283\">Standard_SpeedDown</a>",
    "realName": "Speed Reduction",
    "aim": "Debuff",
    "desc": "SPD -#1[i].",
    "type": "Speed Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-776411742\">Standard_HealRatioUp</a>",
    "realName": "Outgoing Healing Boost",
    "aim": "Buff",
    "desc": "Outgoing Healing +#1[i]%.",
    "type": "Outgoing Healing Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"954433891\">Standard_HealRatioDown</a>",
    "realName": "Outgoing Healing Reduction",
    "aim": "Debuff",
    "desc": "Outgoing Healing -#1[i]%.",
    "type": "Outgoing Healing Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2022562475\">Standard_HealTakenRatioUp</a>",
    "realName": "Incoming Healing Boost",
    "aim": "Buff",
    "desc": "Incoming Healing +#1[i]%.",
    "type": "Incoming Healing Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-647756354\">Standard_HealTakenRatioDown</a>",
    "realName": "Incoming Healing Reduction",
    "aim": "Debuff",
    "desc": "Incoming Healing -#1[i]%.",
    "type": "Incoming Healing Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"879494395\">Standard_StatusProbability</a>",
    "realName": "Effect Hit Rate Boost",
    "aim": "Buff",
    "desc": "Effect Hit Rate +#1[i]%.",
    "type": "Effect Hit Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1990889700\">Standard_StatusResistanceUp</a>",
    "realName": "Effect RES Boost",
    "aim": "Buff",
    "desc": "Effect RES +#1[i]%.",
    "type": "Effect RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1533265365\">Standard_SPRatioUp</a>",
    "realName": "Energy Regeneration Rate Boost",
    "aim": "Buff",
    "desc": "Increases Energy Regeneration Rate by #1[i]%.",
    "type": "Energy Regeneration Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2108411860\">Standard_SPRatioDown</a>",
    "realName": "Energy Regeneration Rate Reduction",
    "aim": "Debuff",
    "desc": "Decreases Energy Regeneration Rate by #1[i]%.",
    "type": "Energy Regeneration Rate Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"4474377\">Standard_StatusResistanceDown</a>",
    "realName": "Effect RES Reduction",
    "aim": "Debuff",
    "desc": "Effect RES -#1[i]%.",
    "type": "Effect RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"541957737\">Standard_AllDamageTypeResistanceDown</a>",
    "realName": "All-Type RES Reduction",
    "aim": "Debuff",
    "desc": "All-Type DMG RES -#1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1887078258\">Standard_PhysicalResistanceDown</a>",
    "realName": "Physical RES Reduction",
    "aim": "Debuff",
    "desc": "Physical RES -#1[i]%.",
    "type": "Physical RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1537044997\">Standard_FireResistanceDown</a>",
    "realName": "Fire RES Reduction",
    "aim": "Debuff",
    "desc": "Fire RES -#1[i]%.",
    "type": "Fire RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1969217848\">Standard_IceResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1410888443\">Standard_ThunderResistanceDown</a>",
    "realName": "Lightning RES Reduction",
    "aim": "Debuff",
    "desc": "Lightning RES -#1[i]%.",
    "type": "Lightning RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-192876579\">Standard_WindResistanceDown</a>",
    "realName": "Wind RES Reduction",
    "aim": "Debuff",
    "desc": "Wind RES -#1[i]%.",
    "type": "Wind RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"533883510\">Standard_QuantumResistanceDown</a>",
    "realName": "Quantum RES Reduction",
    "aim": "Debuff",
    "desc": "Quantum RES -#1[i]%.",
    "type": "Quantum RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1176142950\">Standard_ImaginaryResistanceDown</a>",
    "realName": "Imaginary RES Reduction",
    "aim": "Debuff",
    "desc": "Imaginary RES -#1[i]%.",
    "type": "Imaginary RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1147160586\">Standard_DOT_Bleed</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the start of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1156628335\">Standard_HOT_HPByMaxHP</a>",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2090146765\">Standard_HOT_SP</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_ShowValue"
    ]
  },
  {
    "name": "Standard_Block_Turn",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "DMG Immunity",
    "perma": false
  },
  {
    "name": "Standard_Block_Count",
    "realName": "DMG Immunity",
    "aim": "Buff",
    "desc": "Immune to DMG from a certain number of attacks.",
    "type": "DMG Immunity",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>",
    "realName": "Taunt",
    "aim": "Debuff",
    "desc": "Can only select %CasterName as the target to attack.",
    "type": "Taunt",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1162946172\">Standard_CTRL_Stun</a>",
    "realName": "Stunned",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns.",
    "type": "Stunned",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>",
    "realName": "Frozen",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
    "type": "Frozen",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>",
    "realName": "Imprisonment",
    "aim": "Debuff",
    "desc": "Action is delayed and SPD is reduced.",
    "type": "Imprisonment",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-475439782\">Standard_BAN_Heal</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1445032651\">Standard_BAN_Silence</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"815559009\">Standard_Stealth</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>",
    "realName": "Self-Destruct",
    "aim": "Other",
    "desc": "When the summoner is defeated, the summoned objects will also be defeated.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1797420881\">Standard_Protect_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1788719875\">Standard_Protect_AbilityRetarget</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1797970053\">Standard_Element_Bleed</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-130814791\">Standard_Element_Frozen</a>",
    "realName": "Frozen",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
    "type": "Frozen",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1852685234\">Standard_Element_Burn</a>",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the beginning of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1979618180\">Standard_Element_Electric</a>",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the beginning of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-838929203\">Standard_Element_Confine</a>",
    "realName": "Imprisonment",
    "aim": "Debuff",
    "desc": "Action is delayed and SPD is reduced.",
    "type": "Imprisonment",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>",
    "realName": "Entanglement",
    "aim": "Debuff",
    "desc": "Action delayed and receives Additional Quantum DMG at the start of the next turn.\\nThis Additional DMG is increased when Entangled enemies are attacked. This effect can stack up to 5 times.",
    "type": "Entanglement",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>",
    "realName": "Entanglement",
    "aim": "Debuff",
    "desc": "Action delayed and receives Additional Quantum DMG at the start of the next turn.\\nThis Additional DMG is increased when Entangled enemies are attacked. This effect can stack up to 5 times.",
    "type": "Entanglement",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>",
    "realName": "Dominated",
    "aim": "Debuff",
    "desc": "Makes a single target unable to take action. Target will use Basic ATK to attack a random ally of theirs. If an ability is cast on the target to remove a debuff, the Dominated status will be removed first.",
    "type": "Dominated",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>",
    "realName": "Prana-Siphoned",
    "aim": "Debuff",
    "desc": "Decreases Maximum Restorable HP by #1[i]%.",
    "type": "Prana-Siphoned",
    "perma": false,
    "params": [
      "MDF_DirtyHPRatio"
    ]
  },
  {
    "name": "MLevel_PunkLord_01_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "Enemy Fire DMG taken +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_PunkLord_02_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "Enemy Wind DMG taken +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_PunkLord_03_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "Enemy Lightning DMG taken +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_PunkLord_04_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "DMG taken by enemies afflicted with Weakness Break +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_PunkLord_05_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "Enemy Physical DMG taken +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_PunkLord_06_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "Enemy Quantum DMG taken +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_PunkLord_07_Sub",
    "realName": "Plasticized Shell",
    "aim": "Debuff",
    "desc": "Enemy Ice DMG taken +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"396468451\">LC_20000_Main</a>",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_CriticalChance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-926441489\">LC_20004_Main</a>",
    "realName": "Effect Hit Rate Boost",
    "aim": "Buff",
    "desc": "Effect Hit Rate +#1[i]%.",
    "type": "Effect Hit Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_StatusProbability"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-892055160\">LC_20007_AttackAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1556228019\">LC_20014_SpeedAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1690247274\">LC_20016_CriticalChance</a>",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalChance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1847667722\">LC_20019_Sub</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i].",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_SpeedDelta"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1720319946\">LC_20020_Sub</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-59377763\">LC_21005_AttackAddedRatio</a>",
    "realName": "Mischievous",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to 3 stacks.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"90221710\">LC_21010_DamageAddedRatio</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "#SkillEquip_P2_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1118663317\">LC_21015_Sub</a>",
    "realName": "Ensnarement",
    "aim": "Debuff",
    "desc": "DEF -#1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DefenceDown"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1639337319\">LC_21019_Sub</a>",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalChance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1496959259\">LC_21020_Sub</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-531007870\">LC_21023_Sub</a>",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageReduce"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1208434319\">LC_21024_Sub</a>",
    "realName": "SPD Boost, and DMG Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%, and DMG dealt by #2[i]%.",
    "type": "SPD and DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_SpeedAddedRatio",
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"232669200\">LC_21025_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1358976474\">LC_21027_Sub</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_AttackAddedRatio",
      "#SkillEquip_P3_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-149255462\">LC_21032_Bonus1</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-166033081\">LC_21032_Bonus2</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-182810700\">LC_21032_Bonus3</a>",
    "realName": "Energy Regeneration Rate Boost",
    "aim": "Buff",
    "desc": "Increases Energy Regeneration Rate by #1[i]%.",
    "type": "Energy Regeneration Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_SPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-651116041\">LC_23000_DamageAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-66885584\">LC_23002_Effect</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-491630213\">LC_23003_TriggerCD</a>",
    "realName": "Heir",
    "aim": "Other",
    "desc": "Heir's Skill Point regeneration effect cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-756547598\">LC_23003_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1485539064\">LC_23006_DOT</a>",
    "realName": "Erode",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the beginning of each turn for a certain number of turns.",
    "type": "Erode",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1036917801\">LC_23006_SpeedAddedRatio</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[f1]%, up to #2[i] stack(s).",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "#SkillEquip_P4_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1558750701\">LC_23008_SpeedDeltaAddedRatio</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedDeltaAdd"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1249262228\">LC_23009_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-374895026\">LC_23010_Sub</a>",
    "realName": "Somnus Corpus",
    "aim": "Buff",
    "desc": "Increases DMG dealt by the next Follow-Up ATK by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillEquip_P3_InsertDamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"274994789\">LC_23011_Sub2</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1089873720\">LC_23012_Sub</a>",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalChance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2096438896\">LC_23016_Enhance</a>",
    "realName": "Tame",
    "aim": "Debuff",
    "desc": "Each stack of Tame increases CRIT DMG dealt by allies to this unit by #1[i]%, up to #2[i] stack(s).",
    "type": "The received CRIT DMG increases",
    "perma": false,
    "params": [
      "#SkillEquip_P3_CriticalDamage",
      "#SkillEquip_P4_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"844192795\">LC_24000_AttackAddedRatio</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_AttackAddedRatio",
      "#SkillEquip_P2_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"410951674\">LC_24000_DamageAddedRatio</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"545736558\">LC_24001_AttackAddedRatio</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P4_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1791888969\">LC_24002_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1571582832\">Relic_104_CriticalDamage</a>",
    "realName": "Hunter of Glacial Forest",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_104_4_P1_CriticalDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-686777299\">Relic_105_Sub</a>",
    "realName": "Champion of Streetwise Boxing",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillRelic_105_4_P1_AttackAddedRatio",
      "#SkillRelic_105_4_P2_Maxlayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2026250788\">Relic_107_FireDamageAddRatio</a>",
    "realName": "Firesmith of Lava-Forging",
    "aim": "Buff",
    "desc": "The next attack's Fire DMG increases by #1[i]%.",
    "type": "Fire DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_107_4_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1034849217\">Relic_109_Sub</a>",
    "realName": "Band of Sizzling Thunder",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillRelic_109_4_P1_AttackAddedRatio"
    ]
  },
  {
    "name": "MonsterPower_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1105433913\">MLevel_Stage20123201_LevelAllDamageReduce</a>",
    "realName": "Wildfire Reinforcements",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_2013110_Modifier_Sub",
    "realName": "Thermic Field",
    "aim": "Debuff",
    "desc": "Fire DMG taken by enemies increases #1[i]%",
    "type": "Thermic Infirmity",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_2013111_Modifier_Storm",
    "realName": "Blizzard Blast",
    "aim": "Buff",
    "desc": "Enemies deal #1[i]% increased Ice DMG",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"344912821\">MLevel_Stage2013201_UnWeakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeResistance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1551674831\">MLevel_Stage2013202</a>",
    "realName": "Fragmentum Energy Surge",
    "aim": "Buff",
    "desc": "ATK +#1[i]% and DEF +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio",
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1532514750\">MLevel_Stage20132_NatashaMission_FrozenResistance</a>",
    "realName": "Blizzard Immunity",
    "aim": "Buff",
    "desc": "Cannot be Frozen.",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_LevelPlaneEnviAbility_2020012_Modifier_Sub",
    "realName": "Ambrosial Arbor's Grace",
    "aim": "Buff",
    "desc": "With Ambrosial Arbor's Grace, DMG taken decreases by #1[i]% and SPD increases by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DamageTypeResistance",
      "MDF_SpeedAddedRatio"
    ]
  },
  {
    "name": "MLevel_LevelPlaneEnviAbility_2020013_Modifier_Sub",
    "realName": "Ambrosial Arbor's Grace",
    "aim": "Buff",
    "desc": "With Ambrosial Arbor's Grace, DMG taken decreases by #1[i]% and SPD increases by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DamageTypeResistance",
      "MDF_SpeedAddedRatio"
    ]
  },
  {
    "name": "BoxingGym_DefDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF -#1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "DefDownValue"
    ]
  },
  {
    "name": "BoxingGym_UltraAbilityDamageBonus",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG by #1[i]%, up to 2 stacks.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "UltraSkillDamageValue"
    ]
  },
  {
    "name": "BoxingGym_Shield_AddShieldGetBonus_DamageBuff",
    "realName": "Overbreathing",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]%, up to 6 stacks.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "_SkillDamageValue"
    ]
  },
  {
    "name": "BoxingGym_Shield_AddShieldGetBonus_DamageBuff_FinalBuff",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "_AddDamageValue"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999001_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999002_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999003_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999004_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999005_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999006_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999007_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999012_Modifier",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999013_Modifier",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999016_Modifier",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999017_Modifier_AttackUp_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AttRatio",
      "#ADF_2",
      "MDF_CurrentAttRatio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999017_Modifier_DefenseUp_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DffRatio",
      "#ADF_2",
      "MDF_CurrentDffRatio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999017_Modifier_SpeedUp_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_SpeedDelta",
      "#ADF_2",
      "MDF_CurrentSpeedDelta"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999019_Modifier_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999020_Modifier_Sub",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_StageAbility_3999022_Modifier_Sub",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999024_Modifier_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "MLevel_WB_StageAbility_3999024_Modifier_Debuff01",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999024_Modifier_Debuff02",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999024_Modifier_Debuff03",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_3999025_Modifier_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_StageAbility_3999027_Modifier_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MLevel_WB_StageAbility_Mechanism_BurnReduce_Modifier",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MLevel_WB_AllDamageAdd",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_AllDamageReSet",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_PowerBoss_HealHP",
    "realName": "Endless Marching",
    "aim": "Other",
    "desc": "undefined",
    "type": "Endless Marching",
    "perma": true
  },
  {
    "name": "MLevel_WB_PowerBoss_RemoveHeal",
    "realName": "Endless Marching is dispelled",
    "aim": "Other",
    "desc": "undefined",
    "type": "Endless Marching is dispelled",
    "perma": true
  },
  {
    "name": "MLevel_WB_PowerBoss_Slow",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_PowerBoss_RemoveATKSlow",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_Snow_LoseHP",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "LoseHP_Value"
    ]
  },
  {
    "name": "ADV_StageAbility_3002003",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "LoseHP_Value"
    ]
  },
  {
    "name": "StageAbility_3999043",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_3999044",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_3999045",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_WB_StageAbility_3999036_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "StageAbility_3999046",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "0"
    ]
  },
  {
    "name": "MLevel_WB_3990801",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Ratio"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Target",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_40232_TargetingBailu",
    "realName": "Aggravate",
    "aim": "Other",
    "desc": "Bailu becomes the target for incoming enemy attacks.",
    "type": "Aggravate",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1767296958\">MLevel_RougeSpecialStage01_UnWeakResistance</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeResistance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-359434846\">MLevel_RougeSpecialStage02</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_HPRatio",
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1293097583\">MLevel_RougeSpecialStage02_1_Attack</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-342657227\">MLevel_RougeSpecialStage03</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1642131353\">MLevel_RougeSpecialStage03_1_Speed</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_SpeedAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-460100560\">MLevel_RougeSpecialStage04</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Turn",
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1273587047\">MLevel_RougeSpecialStage04_1_Attack</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-443322941\">MLevel_RougeSpecialStage05</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1091695268\">MLevel_RougeSpecialStage05_1_Attack</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-426545322\">MLevel_RougeSpecialStage06</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-409767703\">MLevel_RougeSpecialStage07</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-258769132\">MLevel_RougeSpecialStage08</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_StanceBreakTakenRatio",
      "MDF_ActionDelayRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1409382141\">MLevel_RougeSpecialStage06_1_BlockDamage</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2140377444\">Monster_RogueElite_DamageUp</a>",
    "realName": "Berserk",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2068031350\">Monster_RogueBoss_DamageUp</a>",
    "realName": "Berserk",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-91116970\">Monster_Standard_Enhance</a>",
    "realName": "Enhance",
    "aim": "Other",
    "desc": "The false projection produced by compromised codes receives a massive boost in combat strength.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1526690424\">Monster_Standard_Strange</a>",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_631002_Modifier_Sub2",
    "realName": "Four-Leaf Clover Brooch",
    "aim": "Debuff",
    "desc": "SPD -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631006_Modifier_Sub2",
    "realName": "CPU",
    "aim": "Buff",
    "desc": "Max HP +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631006_Modifier_Sub3",
    "realName": "CPU",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631006_Modifier_Sub4",
    "realName": "CPU",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631006_Modifier_Sub5",
    "realName": "CPU",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631006_Modifier_Sub6",
    "realName": "CPU",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631006_Modifier_Sub7",
    "realName": "CPU",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631004_Modifier_Sub2",
    "realName": "Robe of The Beauty",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_631007_Modifier_Sub2",
    "realName": "Jellyfish",
    "aim": "Debuff",
    "desc": "ATK -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_631012_Modifier_Sub",
    "realName": "Record from Beyond the Sky",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except for DoT until after being attacked.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_631012_Modifier_Sub2",
    "realName": "Record from Beyond the Sky",
    "aim": "Buff",
    "desc": "Immune to debuffs.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_631027_Modifier_Sub",
    "realName": "Obliteration Wick Trimmer",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_631028_Modifier_Sub",
    "realName": "Parasitized",
    "aim": "Other",
    "desc": "ATK increases by #1[i]%, but the character will lose HP equal to #2[i]% of their current HP at the start of every turn. When this character is knocked down, this status will be transferred to a random character.",
    "type": "Parasitized",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_631029_Modifier_Sub",
    "realName": "Black Forest Cuckoo Clock",
    "aim": "Debuff",
    "desc": "Significantly increases the chance of being attacked by enemies.",
    "type": "Aggro Chance Boost",
    "perma": true
  },
  {
    "name": "StageAbility_631030_Modifier_Sub",
    "realName": "Punklorde Mentality",
    "aim": "Debuff",
    "desc": "Implanted new Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "StageAbility_612032_Modifier_Sub3",
    "realName": "Segregation Shield",
    "aim": "Buff",
    "desc": "A type of Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "StageAbility_612032_Modifier_Sub2",
    "realName": "Segregation Shield",
    "aim": "Buff",
    "desc": "When the character gains other Shields, this Shield's effect increases by a certain amount.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Standard_Protect_Shield_Rogue_Cunhu",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce the Shielded character's HP.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "MLevel_Super_Ice_Rogue",
    "realName": "Dissociation",
    "aim": "Debuff",
    "desc": "Targets are considered as Frozen and cannot take action for a certain number of turns. When this effect is dispelled, the targets will take Ice Additional DMG equal to #1[i]% of their Max HP.",
    "type": "Dissociation",
    "perma": false,
    "params": [
      "SuperIce_Damageratio"
    ]
  },
  {
    "name": "MLevel_StageAbility_612132_Modifier_Sub3",
    "realName": "Perfect Experience: Reticence",
    "aim": "Other",
    "desc": "Attacked for #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "StageAbility_612145_Modifier_Sub2",
    "realName": "Ultimate Experience: Shudder",
    "aim": "Debuff",
    "desc": "Implanted with Ice Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_612146_Modifier_Sub2",
    "realName": "Ultimate Experience: Maverick",
    "aim": "Debuff",
    "desc": "SPD -#1[i]%.",
    "type": "Slow",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612641_Modifier_Sub2",
    "realName": "Just Keep on Crying!",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%, lasting until the end of the next action.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612642_Modifier_Sub2",
    "realName": "The Hourglass Kindergarten",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[i]%, lasting until the end of the next action.",
    "type": "ATK Reduction",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612656_Modifier_Sub2",
    "realName": "Platinum Age",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": "DEF Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612657_Modifier_Sub2",
    "realName": "Clockwork Apple",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "RogueBonusModifier_Halo",
    "realName": "Critical Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%, stacking up to #3[i] time(s). This can be inherited by an ally at the beginning of the next turn. All stacks will be removed if any ally is attacked.",
    "type": "Critical Boost",
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2",
      "_MaxLayer"
    ]
  },
  {
    "name": "MLevel_StageAbility_61243201_Modifier_Sub2",
    "realName": "Sovereign Skybreaker",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%, lasting until the next attack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_61245701_Modifier_AttackUp",
    "realName": "Arrow Shades Bow",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], lasting until the start of the next turn.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "RiseAttack"
    ]
  },
  {
    "name": "RogueBonusModifier_Rage",
    "realName": "Grit",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, and DEF by #2[i]%, stacking up to #3[i] time(s).",
    "type": "Grit",
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2",
      "ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_612141_Modifier_Sub2",
    "realName": "Ultimate Experience: Dizziness",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_61244301_Modifier_Continues_ATK_Bonus",
    "realName": "Mistwraith Pursuit",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "ADF_1",
      "_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_61244501_Modifier_Sub",
    "realName": "Borisin Chase",
    "aim": "Other",
    "desc": "#1[i] turns have passed.",
    "type": null,
    "perma": true,
    "params": [
      "TurnCounter"
    ]
  },
  {
    "name": "StageAbility_61244502_Modifier_Sub",
    "realName": "Borisin Chase",
    "aim": "Other",
    "desc": "#1[i] turns have passed.",
    "type": null,
    "perma": true,
    "params": [
      "TurnCounter"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1245339581\">Special_Rogue_Shield</a>",
    "realName": "Amber",
    "aim": "Buff",
    "desc": "When a Shielded character receives DMG that exceeds the Shield value, the excess DMG becomes invalid. This effect is removed after 1 activation.",
    "type": "Amber",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"94764098\">RogueBattleevent122_Levelup2_1</a>",
    "realName": "Confusion",
    "aim": "Debuff",
    "desc": "When the target is afflicted with Weakness Break, every stack of Confusion deals DMG equal to #1[i]% of all current DoT effects. Consumes 1 stack of this effect. This effect can stack up to 5 time(s).",
    "type": "Confusion",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"77986479\">RogueBattleevent122_Levelup2_2</a>",
    "realName": "Devoid",
    "aim": "Debuff",
    "desc": "Each stack reduces Toughness regeneration by #1[i]%, stacking up to 5 times.",
    "type": "Devoid",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-369007412\">RogueBattleevent123_LevelUp2</a>",
    "realName": "Subduing Evils",
    "aim": "Buff",
    "desc": "Can consume 1 stack of this effect to resist a debuff for 1 time, and then restore HP equal to #1[i]% of Max HP. This effect can stack up to #2[i] time(s).",
    "type": "Subduing Evils",
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-630773715\">RogueBattleevent124_Levelup1</a>",
    "realName": "Light-Hunting Celestial Arrow",
    "aim": "Buff",
    "desc": "CRIT DMG increases by an amount equal to #1[i]% of CRIT Rate. Gains one extra turn after defeating an enemy. This effect cannot trigger repeatedly.",
    "type": "Light-Hunting Celestial Arrow",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"132537613\">RogueBattleevent125_Levelup2</a>",
    "realName": "Entropic Retribution",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%. At the beginning of each turn, receives Fire Additional DMG equal to #2[i]% of the total HP currently lost by all allies.",
    "type": "Entropic Retribution",
    "perma": false,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MLevel_Rogue_DOTTakenUp",
    "realName": "Suspicion",
    "aim": "Debuff",
    "desc": "Each stack increases DoT taken by #1[i]%, stacking up to #2[i] time(s), of which #3[i] stack(s) will be lost at the end of the turn.",
    "type": null,
    "perma": true,
    "params": [
      "ValuePerLayer",
      "_MaxLayer",
      "_LayerLost"
    ]
  },
  {
    "name": "MLevel_Rogue_Bubble",
    "realName": "Dewdrop",
    "aim": "Other",
    "desc": "Breaks down after launching attacks. Deals Additional DMG to enemy targets based on the value of the Charge. The current Charge is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "Bubble_Amount_All"
    ]
  },
  {
    "name": "MLevel_StageAbility_612343_Modifier",
    "realName": "Candlelight Radiance",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612354_Modifier_Sub2",
    "realName": "Peril Parry",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": "DEF Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612356_Modifier_Sub2",
    "realName": "Force Victoire",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612154_Modifier_Sub2",
    "realName": "Experience: Pain & Suffering",
    "aim": "Debuff",
    "desc": "The next attack's CRIT Rate increases by 100%.",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_612332_Modifier_AttackDelta",
    "realName": "All Abundance in One Mind",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AttackDelta"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2074175810\">RogueBattleevent121_Levelup2</a>",
    "realName": "Eonian River",
    "aim": "Other",
    "desc": "When debuffed, the duration of this debuff doubles.",
    "type": "Eonian River",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-740499460\">RogueBattleevent126_LevelUp1_1</a>",
    "realName": "Sensory Pursuit",
    "aim": "Debuff",
    "desc": "Each stack increases Follow-Up ATK DMG taken by #1[i]%.",
    "type": "Sensory Pursuit",
    "perma": false,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1571353533\">RogueBattleevent123_HPAddRatio</a>",
    "realName": "Path Resonance: Abundance",
    "aim": "Buff",
    "desc": "Max HP +#1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_631021_Modifier_Sub2",
    "realName": "Mysterious Code",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_631022_Modifier_Sub2",
    "realName": "Mysterious Code",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2090953429\">RogueBattleevent121_Levelup1</a>",
    "realName": "Resonance Formation: Total Recall",
    "aim": "Debuff",
    "desc": "Chance to resist Frozen -#1[i]%.",
    "type": "Frozen RES decreased",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_61245401_Modifier_Sub",
    "realName": "Constellation Surge",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_Egg_Base_Rogue_Show",
    "realName": "Spores",
    "aim": "Other",
    "desc": "#1[i] Spore(s) remaining. Number of Spores that can be spread is #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "Egg_Count_Show",
      "Egg_Father_Count_Temp_Show"
    ]
  },
  {
    "name": "MLevel_StageAbility_612746_Modifier_Sub",
    "realName": "Catalyst",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "MLevel_StageAbility_612745_Modifier_Sub",
    "realName": "Intersegmental Membrane",
    "aim": "Buff",
    "desc": "Each stack decreases DMG received by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Mitigation",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_06",
    "realName": "Ice Vulnerability",
    "aim": "Debuff",
    "desc": "Ice DMG taken +#1[i]%.",
    "type": "Ice Vulnerability",
    "perma": false,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_07",
    "realName": "Quantum Vulnerability",
    "aim": "Debuff",
    "desc": "Quantum DMG taken +#1[i]%.",
    "type": "Quantum Vulnerability",
    "perma": false,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_08",
    "realName": "Lightning Vulnerability",
    "aim": "Debuff",
    "desc": "Lightning DMG taken +#1[i]%.",
    "type": "Lightning Vulnerability",
    "perma": false,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_09",
    "realName": "Wind Vulnerability",
    "aim": "Debuff",
    "desc": "Wind DMG taken +#1[i]%.",
    "type": "Wind Vulnerability",
    "perma": false,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_10",
    "realName": "Physical Vulnerability",
    "aim": "Debuff",
    "desc": "Physical DMG taken +#1[i]%.",
    "type": "Physical Vulnerability",
    "perma": false,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_11",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]%, up to 5 stacks.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_12",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]% up to 5 times.",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_13",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i] pts up to 5 times.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_14",
    "realName": "Effect Hit Rate Boost",
    "aim": "Buff",
    "desc": "Increases Effect Hit Rate by #1[i]% up to 5 times.",
    "type": "Effect Hit Rate Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_15",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% up to 5 times.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_02",
    "realName": "CRIT Rate, CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #2[i]% and CRIT DMG by #1[i]%. Can stack up to 3 times.",
    "type": "CRIT Rate, CRIT DMG Boost",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Group_01",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Group_02",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_01",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "For the current Cycle, ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_03",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "In the current Cycle, receives #1[i]% more DMG from Follow-Up ATKs and Ultimates.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_05",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "After launching attacks, consumes 1 stack of \"Memory Imprint\" and deals #1[i]% of the character's ATK as Additional DMG to a random enemy target that was attacked.",
    "type": "Memory Imprint",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_06",
    "realName": "Lightning Vulnerability",
    "aim": "Debuff",
    "desc": "At the beginning of each Cycle, increases the Lightning DMG taken by all enemies by #1[i]%, lasting until the enemies' next action begins.",
    "type": "Lightning Vulnerability",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_07",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Each stack decreases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "Memory Imprint",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_08",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Each stack decreases DEF by #1[i]%, up to #2[i] stack(s).",
    "type": "Memory Imprint",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_09",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_10_Sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Each stack decreases DMG received by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "#BattleEvent_P1_ADF",
      "_MaxLayer"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_Month_11_Sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#BattleEvent_P1_ADF",
      "_MaxLayer"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_New_03",
    "realName": "Weakness Break Efficiency Boost",
    "aim": "Buff",
    "desc": "Increases Weakness Break Efficiency by #1[i]%, dispelled after attacking.",
    "type": "Weakness Break Efficiency Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MLevel_BattleEventAbility_Challenge_New_06",
    "realName": "CRIT Rate and CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": "CRIT Rate and CRIT DMG Boost",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MItem_401001",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401002",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401004",
    "realName": "Yucky Fried Rice",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402002",
    "realName": "Disposable Shield",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%, and Effect RES by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403001",
    "realName": "Disposable Kinetic Arm",
    "aim": "Buff",
    "desc": "ATK +#1[i] and CRIT Rate +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403002",
    "realName": "Ruby Potion",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%, and Effect Hit Rate by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408003",
    "realName": "Sanctity of the Trashcan",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401008",
    "realName": "Bottled Soda",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% plus an extra #2[i] HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_401009",
    "realName": "Simple Protective Gear",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401010",
    "realName": "Rice Plant Panicle",
    "aim": "Buff",
    "desc": "The HP restored increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401013",
    "realName": "Wrathful Gauntlets",
    "aim": "Buff",
    "desc": "ATK +#1[i]% plus an extra #2[i] pts.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_402004",
    "realName": "Antimatter Field Generator",
    "aim": "Buff",
    "desc": "ATK +#1[i], CRIT Rate +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_402005",
    "realName": "High-Tech Protective Gear",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]% and the max DMG that can be absorbed by Shields gained by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_402006",
    "realName": "Inferior Protective Gear",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402007",
    "realName": "Tasty Field Nutrient Bar",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% plus an extra #2[i] HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_402008",
    "realName": "Dust of Alacrity",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402009",
    "realName": "Enhancement Paste: Physical",
    "aim": "Buff",
    "desc": "Physical DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402010",
    "realName": "Enhancement Paste: Wind",
    "aim": "Buff",
    "desc": "Wind DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402011",
    "realName": "Enhancement Paste: Fire",
    "aim": "Buff",
    "desc": "Fire DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402012",
    "realName": "Enhancement Paste: Ice",
    "aim": "Buff",
    "desc": "Ice DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402013",
    "realName": "Enhancement Paste: Lightning",
    "aim": "Buff",
    "desc": "Lightning DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402014",
    "realName": "Enhancement Paste: Quantum",
    "aim": "Buff",
    "desc": "Quantum DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402015",
    "realName": "Enhancement Paste: Imaginary",
    "aim": "Buff",
    "desc": "Imaginary DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403003",
    "realName": "Disposable Kinetic Cannon",
    "aim": "Buff",
    "desc": "ATK +#1[i] and CRIT DMG +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403004",
    "realName": "Stone from the Everwinter Monument",
    "aim": "Buff",
    "desc": "Chance to resist Frozen +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403005",
    "realName": "Topological Acceleration Band",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403006",
    "realName": "Longevity Pill of Cruelty",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% and Effect RES by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408005_sub1",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Physical DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408005_sub2",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Wind DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408005_sub3",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Fire DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408005_sub4",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Ice DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408005_sub5",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Lightning DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408005_sub6",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Quantum DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408005_sub7",
    "realName": "Kapo-Kali",
    "aim": "Buff",
    "desc": "Imaginary DMG dealt +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408401",
    "realName": "Snapper Jam Appetizer",
    "aim": "Buff",
    "desc": "ATK +#1[i]% plus an extra #2[i] pts.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408403",
    "realName": "Wild Herb Soup",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408405",
    "realName": "Mung Bean Soda",
    "aim": "Buff",
    "desc": "ATK +#1[i]% plus an extra #2[i] pts.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408603",
    "realName": "Immortal's Delight",
    "aim": "Buff",
    "desc": "ATK +#1[i]% plus an extra #2[i] pts.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "AetherDivide_W2_Beast01_01_Electric",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "AetherDivide_W2_Mecha02_AddFireTakenrRatio",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases received DMG by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "AetherDivide_W1_Soldier01_01_FireEffectController",
    "realName": "Cindershroud",
    "aim": "Other",
    "desc": "Reduces DMG taken by #1[i]%. Loses a stack after being attacked. After character attacks or is attacked, deals DMG to target and has a chance to inflict Burn on them.",
    "type": "Cindershroud",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_612753_Modifier_Sub",
    "realName": "Conjunctiva",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": "DEF Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612754_Modifier_Sub",
    "realName": "Scaled Wing",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "AetherDivide_XP_Minion04_Aura_Ultra",
    "realName": "Hogdash",
    "aim": "Other",
    "desc": "Unable to use Skills. Basic ATK will trigger the recovery effect of Skills and increase the DMG of allies' next attack.",
    "type": "Hogdash",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1946026397\">LC_23017_Sub</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[f1]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1372338228\">LC_23021_Sub2</a>",
    "realName": "Radiant Flame",
    "aim": "Other",
    "desc": "Upon reaching #1[i] stacks, removes all the Radiant Flame stacks and gains Mask.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_HPExchangeDamage_DamageUpModifier",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to 8 stacks.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "W1_Mecha03_01_Layer",
    "realName": "Conjunction of Frost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "Conjunction of Frost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "W1_Mecha03_01_PassiveLayer",
    "realName": "Congeal",
    "aim": "Buff",
    "desc": "Decreases received DMG by #1[f1]% and increases Max HP by #2[f1]%.",
    "type": "Congeal",
    "perma": true,
    "params": [
      "MDF_PropertyValue_1",
      "MDF_PropertyValue_2"
    ]
  },
  {
    "name": "Monster_AetherDivide_W1_Soldier01_03_Bonus",
    "realName": "Great Inspiration",
    "aim": "Buff",
    "desc": "Increases ATK and SPD.",
    "type": "Great Inspiration",
    "perma": false,
    "params": [
      "Modifier_AttackAddedRatio",
      "Modifier_SpeedDelta"
    ]
  },
  {
    "name": "MWW1_Soldier_01_03_Bonus",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%. After receiving an attack, this unit's own attack is additionally increased.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "W1_Soldier03_ShieldTeam",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "W1_Soldier03_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "W1_Soldier03_Shield2",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "AetherDivide_W2_Mecha03_UltraMode",
    "realName": "Sanction Mode",
    "aim": "Other",
    "desc": "Massively buffs Basic ATK and reduces the DMG taken by #2[i]%.",
    "type": "Sanction Mode",
    "perma": true,
    "params": [
      "MDF_SpeedAddedValue",
      "MDF_DMGReduceRatio"
    ]
  },
  {
    "name": "AetherDivide_W2_Mecha01_CanRevive",
    "realName": "Emergency Mode",
    "aim": "Other",
    "desc": "Blocks a single instance of fatal DMG. When triggered, recovers a certain amount of HP and launches a counterattack.",
    "type": "Emergency Mode",
    "perma": true
  },
  {
    "name": "Enemy_AetherDivide_W2_Mecha01_Revive",
    "realName": "Emergency Mode",
    "aim": "Other",
    "desc": "When struck by a killing blow, instead of being knocked down, immediately restores a certain amount of HP.",
    "type": "Emergency Mode",
    "perma": false
  },
  {
    "name": "Monster_AetherDivide_W1_Soldier04_Bonus",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Monster_AetherDivide_W1_Soldier04_AbilityP01_Supported",
    "realName": "Supported",
    "aim": "Other",
    "desc": "After attacking, the Silvermane Cannoneer will launch a Follow-Up ATK on the target.",
    "type": "Supported",
    "perma": true
  },
  {
    "name": "Monster_AetherDivide_W1_Soldier03_ShieldTeam",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "Monster_AetherDivide_W1_Soldier03_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "Enemy_AetherDivide_W1_Soldier02_Debuff",
    "realName": "Aggravate",
    "aim": "Other",
    "desc": "Becomes target of all enemies and takes additional DMG from each attack.",
    "type": "Aggravated",
    "perma": true
  },
  {
    "name": "TreasureDungeonAbility_LoadSingleBonusItem_Modifier",
    "realName": "Overclock",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and increases SPD by #2[i]%.",
    "type": "DMG and SPD Boost",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_3"
    ]
  },
  {
    "name": "TreasureDungeonAbility_WeakDamageEnhanceItem_Modifier",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "TreasureDungeonAbility_RecoverSPItem_BoostUltraDamageModifier",
    "realName": "Scorch",
    "aim": "Buff",
    "desc": "Increases DMG dealt by Ultimate by #1[i]%, and increases Weakness Break Efficiency by #2[i]%.",
    "type": "Ultimate DMG Boost",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_3"
    ]
  },
  {
    "name": "Monster_AetherDivide_W1_Soldier01_Morale",
    "realName": "Morale",
    "aim": "Other",
    "desc": "Each stack increases SPD, increases DMG dealt, and increases DMG Res.",
    "type": "Morale Boost",
    "perma": true
  },
  {
    "name": "AetherDivide_W1_Soldier01_Morale",
    "realName": "Morale",
    "aim": "Other",
    "desc": "Each stack increases SPD by #3[f1]%, increases DMG dealt by #1[f1]%, and increases DMG RES #2[f1]%.",
    "type": "Morale Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue_1",
      "MDF_PropertyValue_2",
      "MDF_PropertyValue_3"
    ]
  },
  {
    "name": "AetherDivide_W1_Soldier02_EnhanceDamageModifier",
    "realName": "Mark",
    "aim": "Debuff",
    "desc": "When attacked, receives additional DMG from the Silvermane Gunner.",
    "type": "Mark",
    "perma": true
  },
  {
    "name": "AetherDivide_AML_Minion04_ExtraTurn",
    "realName": "Antimatter Speed Boost",
    "aim": "Buff",
    "desc": "After using Basic ATK or Skill, immediately takes an extra action. This effect cannot be consecutively triggered.",
    "type": "Consecutive Action",
    "perma": false
  },
  {
    "name": "AetherDivide_W1_Soldier01_Shield_Aggro",
    "realName": "Aggro Chance Boost",
    "aim": "Buff",
    "desc": "Increases the chance of being attacked by enemy targets.",
    "type": "Aggro Chance Boost",
    "perma": true
  },
  {
    "name": "AetherDivide_W1_Soldier01_TargetShield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"899015137\">LC_23015_Sub</a>",
    "realName": "Dragon's Call",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]% and Energy Regeneration Rate by #2[i]%, stacking up to #3[i] time(s).",
    "type": null,
    "perma": false,
    "params": [
      "#SkillEquip_P4_AttackAddedRatio",
      "#SkillEquip_P5_SPRatio",
      "#SkillEquip_P3_MaxLayer"
    ]
  },
  {
    "name": "AML_Minion04_OverHeat",
    "realName": "Overheat",
    "aim": "Debuff",
    "desc": "After reaching #1[i] stack(s), consumes massive amounts of this unit's own HP. If any target is downed, the effect is removed.",
    "type": "Overheat",
    "perma": true,
    "params": [
      "#SkillP01_P2_DamagePercentage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2037149365\">LC_23007_DamageTakenUp</a>",
    "realName": "Aether Code",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageTakenRatio"
    ]
  },
  {
    "name": "MLevel_StageAbility_612732_Modifier_Sub",
    "realName": "Scythe Limbs",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"640692512\">RogueBattleevent127_Power_Base</a>",
    "realName": "Metamorphosis",
    "aim": "Buff",
    "desc": "When attacking, ignore #1[i]% of the target enemy's all-Type RES for every Skill Point consumed or recovered. This effect can stack up to #2[i] times.",
    "type": "Metamorphosis",
    "perma": true,
    "params": [
      "ADF_2",
      "ADF_3"
    ]
  },
  {
    "name": "AetherDivide_XP_Minion04_Aura_2_Bonus",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_641251_Modifier_Sub",
    "realName": "Destruction: Blood Like Water",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "AetherDivide_XP_Minion02_Ability_Enhance",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "MWW1_Soldier_01_03_ExtraBonus",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"222357741\">LC_22001_Sub</a>",
    "realName": "Outgoing Healing Boost",
    "aim": "Buff",
    "desc": "Increases Outgoing Healing by #1[i]%.",
    "type": "Outgoing Healing Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_HealRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1237033920\">Standard_LevelAllDamageReduce</a>",
    "realName": "DMG Reduction",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Monster_AetherDivide_AML_Minion04_Speed",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-531188185\">MFantasticStory_Environment_Ability_0001_Character_AttackUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"882117\">MFantasticStory_Environment_Ability_0003_Character_AttackUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG by #1[i]%, up to 2 stacks.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "TreasureDungeonAbility_BPAbilityBoostItem_Modifier",
    "realName": "Energy Storage",
    "aim": "Buff",
    "desc": "Increases DMG dealt by Skill by #1[i]%. The next action after using Skill is Advanced Forward by 100%.",
    "type": "Skill DMG Boost",
    "perma": false,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "Monster_AetherDivide_W1_Mecha03_01_AddAttack",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1696785974\">Relic_113_Sub</a>",
    "realName": "Longevous Disciple",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]%, up to #2[i] stacks.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "#SkillRelic_113_4_P1_CriticalChance",
      "#SkillRelic_113_4_P3_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-293683157\">Relic_114_Sub</a>",
    "realName": "Messenger Traversing Hackerspace",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#SkillRelic_114_4_P1_SpeedAddRatio"
    ]
  },
  {
    "name": "Monster_AetherDivide_AML_Minion04_OverHeat",
    "realName": "Overheat",
    "aim": "Other",
    "desc": "After reaching #1[i] stack(s), consumes massive amounts of their own HP. Removed after downing the target.",
    "type": "Overheat",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "AetherDivide_W1_Mecha01_Heat",
    "realName": "Speed Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "RaidAbility_2420101_Modifier_Sub",
    "realName": "Toughness Protection",
    "aim": "Buff",
    "desc": "Toughness cannot be reduced.",
    "type": "Action Advanced",
    "perma": false
  },
  {
    "name": "Monster_AetherDivide_Company_Coin_Elite",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s). Shields will be seized when broken or defeated.",
    "type": "Performance Points",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Monster_AetherDivide_Company_Coin_Avater_Effect",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]% the next attack, up to #2[i] stack(s).",
    "type": "Performance Points",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Monster_AetherDivide_Soldier02_01_TakenDamageModifier",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases received DMG by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_AllStanceBreakState_DamageTakenUP",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received by #1[i]%, up to 12 stacks.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "DamageTakenUpValue"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_StanceBreakStateSP_DamageTakenUp",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received by #1[i]%, up to 5 stacks.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "DamageTakenUpValue"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_ModifyBPCost_AddCritModifier",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]%, up to 2 stacks.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CritChance"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_BPSpeedUp_UltraDamageUp",
    "realName": "Ultimate DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by the next Ultimate by #1[i]%, up to 3 stacks.",
    "type": "Ultimate DMG Boost",
    "perma": false,
    "params": [
      "UltraDamageUp"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_ModifyBPCost_AddCritDamageModifier",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%, up to 2 stacks.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_CritDamage"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_Sp_CritUpModifier",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]%, up to 10 stacks.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CritChanceUpRatio"
    ]
  },
  {
    "name": "BattleEventAbilityNewBoxingClub_Sp_CritDamageUpModifier",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%, up to 10 stacks.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_CritDamageUpRatio"
    ]
  },
  {
    "name": "AetherDivide_XP_Minion04_Passive_Bonus",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-948421842\">MFantasticStory_Small_1_Ability_0002_Character_AttackUp</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"834648227\">MFantasticStory_Small_1_Ability_0003_Character_AttackUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_RogueDLC_Floor02_02_ResistanceDown",
    "realName": "Crowd Control debuff RES is reduced",
    "aim": "Debuff",
    "desc": "Decreases chance to resist Crowd Control debuffs by #1[i]%.",
    "type": "Crowd Control debuff RES is reduced",
    "perma": true,
    "params": [
      "MDF_CTRLResistanceDownRatio"
    ]
  },
  {
    "name": "StageAbility_RogueDLC_Floor02_03_SpeedDown",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "Slow",
    "perma": true,
    "params": [
      "MDF_SpeedDownRatio"
    ]
  },
  {
    "name": "StageAbility_RogueDLC_Floor02_04_HOT",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "StageAbility_RogueDLC_Floor02_05_DamageDown",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": "Weaken",
    "perma": true,
    "params": [
      "MDF_DamageDownRatio"
    ]
  },
  {
    "name": "StageAbility_RogueDLC_Floor03_04_WeakDOT",
    "realName": "Random DoT",
    "aim": "Other",
    "desc": "When receiving an attack that matches the Weakness Type, the affected unit will be inflicted with DoT of a random type.",
    "type": "Random DoT",
    "perma": true
  },
  {
    "name": "StageAbility_RogueDLC_Floor03_05_DebuffImmune",
    "realName": "Debuff Immunity",
    "aim": "Buff",
    "desc": "Debuff Resist.",
    "type": "Debuff Immunity",
    "perma": true
  },
  {
    "name": "TreasureDungeonAbility_AddWeakPointItem_MoreWeakModifier",
    "realName": "Attenuation",
    "aim": "Debuff",
    "desc": "Toughness Reduction increases by #1[i]%, and Break DMG received increases by #2[i]%.",
    "type": "Toughness Vulnerability",
    "perma": true,
    "params": [
      "ADF_3",
      "ADF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_642000_Modifier_Sub",
    "realName": "Enhance",
    "aim": "Buff",
    "desc": "ATK +#1[i]% and Max HP +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1007881200\">RogueBattleevent121_LevelUp4_1</a>",
    "realName": "Resonance Interplay: Faces Places",
    "aim": "Debuff",
    "desc": "Decreases All-Type RES by #1[i]%.",
    "type": "RES decrease",
    "perma": false,
    "params": [
      "Show_MDF"
    ]
  },
  {
    "name": "Enemy_AetherDivide_XP_Minion04_02_Speed",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%, up to #2[i] stacks.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1464436876\">LC_24003_DotDamageAddedRatio</a>",
    "realName": "DoT Boost",
    "aim": "Buff",
    "desc": "Increases DoT dealt by #1[i]%",
    "type": "DoT Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DotDamageAddedRatio"
    ]
  },
  {
    "name": "MActionAbility_ForceBreak_CountDown_Caster",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "0"
    ]
  },
  {
    "name": "MActionAbility_TeamDelayDown_CountDown_Caster",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "0"
    ]
  },
  {
    "name": "MItem_408409",
    "realName": "Frostweave Salmon Bread",
    "aim": "Buff",
    "desc": "Decreases Fire DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408204",
    "realName": "Stone-Roasted Meat Skewer",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402018",
    "realName": "Snow Plains Combo Stew",
    "aim": "Buff",
    "desc": "Decreases Fire DMG received by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_401016",
    "realName": "Self-Sufficer",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402019",
    "realName": "Prayer Machine",
    "aim": "Buff",
    "desc": "At the beginning of the turn, heals #1[i] HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401014",
    "realName": "Fruitwood-Grilled Shantak Moa Drumettes",
    "aim": "Buff",
    "desc": "Increases Fire DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403007",
    "realName": "Sugarball-Fried Viscorpi",
    "aim": "Buff",
    "desc": "Increases Ice DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403008",
    "realName": "Automatic Wooden Dummy",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402020",
    "realName": "Five-Grain Jade Elixir",
    "aim": "Buff",
    "desc": "Increases Technique DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401015",
    "realName": "Flaming Potent Tea",
    "aim": "Buff",
    "desc": "Increases chance to resist Freeze by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402021",
    "realName": "Health Detox Pill",
    "aim": "Buff",
    "desc": "Immune to debuffs.",
    "type": null,
    "perma": true
  },
  {
    "name": "MItem_402022",
    "realName": "Jade Marrow Diffusion",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402023",
    "realName": "Pom-Pom's Fried Fowl",
    "aim": "Buff",
    "desc": "Increases Fire DMG dealt by #1[i]% and ATK by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1081429131\">RogueBattleevent121_LevelUp5_1</a>",
    "realName": "Resonance Interplay: Landscape in the Mist",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "ADF_612125_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"831328805\">RogueBattleevent123_Levelup_4_1</a>",
    "realName": "Resonance Interplay: Mountain High",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"344719413\">RogueBattleevent124_LevelUp4</a>",
    "realName": "Resonance Interplay: Startling Breeze",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i].",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "ADF_612424_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641241_Modifier_Sub2",
    "realName": "The Hunt: Quelled Fury",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>",
    "realName": "Outrage",
    "aim": "Debuff",
    "desc": "Cannot be controlled. Automatically attacks a random enemy target. If the target is about to have any debuff removed by an ability, then the Outrage state will be prioritized for removal.",
    "type": "Outrage",
    "perma": false
  },
  {
    "name": "Modifier_Infinite_Summon",
    "realName": "Enemy Reinforcement",
    "aim": "Buff",
    "desc": "Enemy Reinforcement",
    "type": "Enemy Reinforcement",
    "perma": true
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Xianzhou_05_Sub2",
    "realName": "Memory Imprint",
    "aim": "Other",
    "desc": "When destroyed, re-summon 1 Entranced Ingenium: Illumination Dragonfish",
    "type": "Memory Imprint",
    "perma": true
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Xianzhou_05_Sub1",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#BattleEvent_P1_ADF",
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and reduces DMG received by #2[i]%.",
    "type": "Memory Imprint",
    "perma": false,
    "params": [
      "#BattleEvent_P3_ADF",
      "#BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_13_Sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Increases received Basic ATK DMG and DoT by #1[i]%. Allies will recover Skill Points after this unit is defeated.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "#BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_14_Sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Increases the received Basic ATK and Ultimate DMG by #1[i]%. After this unit gets defeated, deals a set amount of DMG to all enemies.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "#BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_15_Sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Increases the received Skill and Ultimate DMG by #1[i]%. After this unit gets defeated, inflicts all enemies with Vulnerability.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "#BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_15_Sub2",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases the received DMG by #1[i]%, up to 2 stacks.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "DamageTakenRatio"
    ]
  },
  {
    "name": "MLevel_StageAbility_641250_Modifier_Sub",
    "realName": "Audience Die: Destruction",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641230_Modifier_Sub",
    "realName": "Audience Die: Abundance",
    "aim": "Buff",
    "desc": "The HP restored increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_612730_Modifier_Sub2",
    "realName": "Spore Discharge",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_632001_Modifier_Sub",
    "realName": "Family Ties",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632007_Modifier_Sub",
    "realName": "Cavity System Model",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632008_Modifier_Sub",
    "realName": "Tousled Detective",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632005_Modifier_Sub2",
    "realName": "Thalan Toxi-Flame",
    "aim": "Debuff",
    "desc": "At the start of the turn, consume HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632005_Modifier_Sub3",
    "realName": "Thalan Toxi-Flame",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%, up to #2[i] stack(s).",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_632006_Modifier_Sub",
    "realName": "The Pinkest Collision",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632004_Modifier_Sub",
    "realName": "Illusory Automaton",
    "aim": "Buff",
    "desc": "At the start of the turn, restore HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MDF_StageAbility_RogueDLC_PreservationEnhance",
    "realName": "Path Enhancement: Preservation",
    "aim": "Buff",
    "desc": "Decreases SPD by #1[i]% and DMG taken by #2[i]%.",
    "type": "Path Enhancement: Preservation",
    "perma": true,
    "params": [
      "MDF_SpeedDownRatio",
      "MDF_DamageReduceRatio"
    ]
  },
  {
    "name": "MDF_StageAbility_RogueDLC_HuntEnhance",
    "realName": "Path Enhancement: The Hunt",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "Path Enhancement: The Hunt",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1696388598\">Modifier_Heliobus_Suiyang_Ability_ActionBonus_Enemy_Attack</a>",
    "realName": "Stats Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK, DEF, and SPD by #1[i]%, stacking up to #2[i] time(s).",
    "type": "Stats Boost",
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>",
    "realName": "Spiritual Command",
    "aim": "Buff",
    "desc": "When consuming Skill Points, increases the character's Basic ATK and Skill DMG by #1[i]%, lasting until the end of their turn.",
    "type": "Spiritual Command",
    "perma": true,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-681181087\">Modifier_Heliobus_Suiyang_Ability_DeathBonus_Enemy_Damage</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG by #1[i]%, up to #2[i] time(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1622590144\">Modifier_Heliobus_Suiyang_Ability_StealBP_Enhance_Enemy</a>",
    "realName": "Enhanced Stealing",
    "aim": "Buff",
    "desc": "The next attack will steal an additional Skill Point.",
    "type": "Enhanced Stealing",
    "perma": true
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub2",
    "realName": "Memory Imprint",
    "aim": "Other",
    "desc": "When entering \"Sanction Mode,\" summon \"Disciples of Sanctus Medicus: Internal Alchemist\" instead.",
    "type": "Memory Imprint",
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_641200_Modifier_Sub",
    "realName": "Audience Die: Preservation",
    "aim": "Buff",
    "desc": "Received Shield Effect +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641210_Modifier_Sub",
    "realName": "Audience Die: Remembrance",
    "aim": "Buff",
    "desc": "Effect Hit Rate +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641220_Modifier_Sub",
    "realName": "Audience Die: Nihility",
    "aim": "Buff",
    "desc": "Increases DoT dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641240_Modifier_Sub",
    "realName": "Audience Die: The Hunt",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641260_Modifier_Sub",
    "realName": "Audience Die: Elation",
    "aim": "Buff",
    "desc": "DMG dealt by Follow-Up ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641270_Modifier_Sub",
    "realName": "Audience Die: Propagation",
    "aim": "Buff",
    "desc": "DMG dealt by Basic ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_641240_Modifier_Sub222",
    "realName": "Preservation: Proof of Commandment",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce the HP of the character with the Shield.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1911897696\">LC_23023_Sub</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_643001_Modifier_Sub2",
    "realName": "Planar Disarray",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and reduces DMG received by #2[i]%.",
    "type": "Planar Disarray",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_643002_Modifier_Sub2",
    "realName": "Planar Disarray",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%, reduces their DMG received by #2[i]%, and increases their SPD by #3[i]%.",
    "type": "Planar Disarray",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_643003_Modifier_Sub2",
    "realName": "Planar Disarray",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%, reduces their DMG received by #2[i]%, and increases their SPD by #3[i]%.",
    "type": "Planar Disarray",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>",
    "realName": "Incarnate Morph",
    "aim": "Debuff",
    "desc": "Turn into a harmless Trotter. The DMG it receives is guaranteed to be CRIT Hit, and the CRIT DMG it receives increases by #1[i]%.",
    "type": "Incarnate Morph",
    "perma": true,
    "params": [
      "#BattleEvent_P4_ADF"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1572469434\">RogueBattleevent123_Levelup_5</a>",
    "realName": "Resonance Interplay: Nullifying Ardor",
    "aim": "Buff",
    "desc": "Each stack increases Weakness Break Efficiency by #1[i]%, and Break Effect by #2[i]%, stacking up to #3[i] time(s).",
    "type": "Weakness Break Efficiency Boost",
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"22094730\">RogueBattleevent127_Levelup4</a>",
    "realName": "Resonance Interplay: Superposition Eye",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
    "type": "Barrier",
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_641261_Modifier_Sub",
    "realName": "Elation: Head Harbinger of Havoc",
    "aim": "Buff",
    "desc": "After an attack was used to deal DMG to enemy target(s), the attack will be considered as a Follow-Up ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_641271_Modifier_Sub",
    "realName": "Propagation: Spinal Cord Regrown",
    "aim": "Buff",
    "desc": "After Skill Point(s) are consumed, recover the same number of Skill Point(s).",
    "type": null,
    "perma": true
  },
  {
    "name": "AetherDivide_Add_Perk_0003",
    "realName": "Restart",
    "aim": "Other",
    "desc": "When struck by a killing blow, instead of being knocked down, immediately restores a certain amount of HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "AetherDivide_Add_Perk_0014_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "AetherDivide_Add_Perk_0019_BlockDamage",
    "realName": "Barrier",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "AetherDivide_Add_Perk_0020",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "After performing an action, each stack will restore HP equal to #1[f1]% of this unit's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "AetherDivide_Add_Perk_0022_Debuff",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases received DMG by #1[f1]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "AetherDivide_Add_Perk_0010_Bonus",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_AetherDivide_Add_Challenge_01_Gepard_Shield_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-605314136\">HeliobusActionAbilityBoomerang_DOT</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "For a certain number of turns, enemies receive Physical DMG based on their Max HP at the beginning of each turn, stacking up to #1[i] time(s).",
    "type": "Bleed",
    "perma": false,
    "params": [
      "Modifier_Bleed_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1003203034\">Modifier_HeliobusActionAbilityDamageReflect</a>",
    "realName": "Altar Aegis",
    "aim": "Buff",
    "desc": "Provides immunity to all damage. When hit by an attack, deal Ice DMG equal to #1[i]% of this unit's DEF to the attacker. This DMG cannot CRIT hit and cannot defeat the enemy. Every time this unit is attacked, 1 stack will be reduced.",
    "type": "Altar Aegis",
    "perma": true,
    "params": [
      "DamagePercent"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>",
    "realName": "Quincunx Smite (Max)",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received from Skyfire Curse by #1[i]%, up to #2[i] stack(s).",
    "type": "Quincunx Smite (Max)",
    "perma": true,
    "params": [
      "DisplayRatio",
      "DisplayMaxLayer"
    ]
  },
  {
    "name": "AML_Elite01_Passive_Damage",
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
    "name": "AetherDivide_W1_Soldier01_02_IceEffectController",
    "realName": "Body of Frost",
    "aim": "Other",
    "desc": "Reduces DMG taken by #1[i]%. Loses a stack after being attacked. After character attacks or is attacked, deals DMG to the target and restores HP for themselves.",
    "type": "Body of Frost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Monster_AetherDivide_W1_Mecha04_Layer",
    "realName": "Pressure",
    "aim": "Other",
    "desc": "Increases ATK and SPD.",
    "type": "Pressure",
    "perma": true
  },
  {
    "name": "StageAbility_632103_Modifier_Sub",
    "realName": "Punklorde Mentality (Infinite)",
    "aim": "Debuff",
    "desc": "Implanted new Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "StageAbility_632101_Modifier_Sub",
    "realName": "Obliteration Wick Trimmer (Infinite)",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632104_Modifier_Sub2",
    "realName": "Robe of The Beauty (Infinite)",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1017480433\">Standard_Protect_Shield_612521</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce the HP of the character with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Standard_Protect_Shield_Rogue_Cunhu2",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce the HP of the character with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Standard_DOT_Burn_AetherDivide",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "Standard_DOT_Poison_AetherDivide",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "Standard_DOT_Electric_AetherDivide",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "Standard_DOT_Tear_AetherDivide",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "Standard_CTRL_Frozen_AetherDivide",
    "realName": "Frozen",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns and takes Additional DMG at the beginning of each turn.",
    "type": "Frozen",
    "perma": false
  },
  {
    "name": "Standard_Entangle_AetherDivide",
    "realName": "Entanglement",
    "aim": "Debuff",
    "desc": "Action delayed and receives additional DMG at the start of the next turn.\\nThis Additional DMG is increased when Entangled enemies are attacked. This effect can stack up to 5 times.",
    "type": "Entanglement",
    "perma": false
  },
  {
    "name": "Monster_W1_Mecha03_01_Frozen_AetherDivide",
    "realName": "Deep Freeze",
    "aim": "Debuff",
    "desc": "Increases DMG received and reduces SPD.",
    "type": "Deep Freeze",
    "perma": false
  },
  {
    "name": "Enemy_XP_Elite01_Burn_AetherDivide",
    "realName": "Enkindle",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Enkindle",
    "perma": false
  },
  {
    "name": "W1_Mecha02_ThunderDOT_AetherDivide",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "For a set number of turns, takes DoT at the start of each turn",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "MLevel_StageAbility_631032_Modifier_Sub",
    "realName": "Cavity System Model",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-625916918\">LC_23014_Sub</a>",
    "realName": "Eclipse",
    "aim": "Buff",
    "desc": "Each stack will increase the DMG dealt by the next attack by #1[i]%, up to a maximum of #2[i] stack(s). When #2[i] stack(s) are reached, an additional attack will be delivered that ignores #3[i]% of the enemy's DEF.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageAddedRatio",
      "#SkillEquip_P2_MaxLayer",
      "#SkillEquip_P4_DefenceDown"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_16_Sub2",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "DMG dealt increases by #2[i]%. After using an attack, every stack of Memory Imprint has a #1[i]% fixed chance of applying Dissociation to the target.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "#BattleEvent_P1_ADF",
      "#BattleEvent_P3_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_16_SuperIce",
    "realName": "Dissociation",
    "aim": "Debuff",
    "desc": "Targets are considered as Frozen and cannot take action for a certain number of turns. When this effect is dispelled, the targets will receive Ice Additional DMG based on their respective Max HP.",
    "type": "Dissociation",
    "perma": false
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_17_Sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "When receiving DMG, all other enemy targets receive DMG equal to #1[i]% of the original DMG.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "#BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_18_Sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "At the start of each Cycle, regenerate Energy equal to 100% of their respective Max Energy to allies who have #1[i] or more stacks of Memory Imprint.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>",
    "realName": "Energy Overflow",
    "aim": "Other",
    "desc": "#1[i] extra Energy. This will be consumed first when unleashing Ultimate.",
    "type": "Energy Overflow",
    "perma": true,
    "params": [
      "EntityStockSPForShow"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>",
    "realName": "Quincunx Smite",
    "aim": "Debuff",
    "desc": "After being attacked, deals DMG to the unit with this effect, and targets adjacent to that unit.",
    "type": "Quincunx Smite",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-708794205\">Modifier_Heliobus_Suiyang_Ability_DamageBurn_Enhance_Enemy</a>",
    "realName": "Extra Wind Shear",
    "aim": "Buff",
    "desc": "The next attack additionally inflicts Wind Shear.",
    "type": "Extra Wind Shear",
    "perma": true
  },
  {
    "name": "MLevel_BoxingClubResonance_Fire_11_Flag",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Fire_20_Bonus",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Fire_21_Bonus",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_PropertyValue_1",
      "MDF_PropertyValue_2"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Wind_10_Debuff",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Wind_20_Bonus",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Wind_21_Bonus",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_PropertyValue_1",
      "MDF_PropertyValue_2"
    ]
  },
  {
    "name": "MBoxingClubResonance_Element_Poison",
    "realName": "Continuous Hook Kick",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Continuous Hook Kick",
    "perma": true
  },
  {
    "name": "MLevel_BoxingClubResonance_Fire_10_Debuff",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_Heliobus_Suiyang_Ability_DamageBurn_Poison",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "Modifier_Heliobus_Suiyang_Ability_Attack_Enhance_Enemy",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "MItem_401017",
    "realName": "Deep-fried Flying Sea Anemone",
    "aim": "Buff",
    "desc": "Increases Lightning DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401018",
    "realName": "Amber Huadiao Wine",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408410",
    "realName": "Sweet Dreams Soda",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408411",
    "realName": "Mineshroom",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% plus #2[i] points.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408414",
    "realName": "Puffergoat Belly Bliss",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408607",
    "realName": "Hypnotic Hammer",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1109634181\">Modifier_ActionEventAbility_Standard_StatusUp_Character</a>",
    "realName": "Vessel Benediction",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]% and DEF by #2[i]%.",
    "type": "Vessel Benediction",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Physical_20_Bonus",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Fire_11",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Quantum_00",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Quantum_10",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true
  },
  {
    "name": "MLevel_BoxingClubResonance_Quantum_21_Bonus",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Quantum_21",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Ice_11_Debuff",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Enemy_AetherDivide_W2_Mecha02_DMGTakenrRatio",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MBoxingClubResonance_DOT_Burn",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": true
  },
  {
    "name": "MLevel_BoxingClubResonance_Imaginary_02A_New_Debuff",
    "realName": "Break DMG Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases the received Break DMG multiplier by #1[i]%.",
    "type": "Break DMG Vulnerability",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Imaginary_02B_New_Debuff",
    "realName": "Ultimate DMG Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases the multiplier for the received Ultimate DMG by #1[i]%.",
    "type": "Ultimate DMG Vulnerability",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"373407425\">Modifier_HeliobusActionAbilityDelayAction</a>",
    "realName": "Paranoia",
    "aim": "Debuff",
    "desc": "After every attack received, receive Imaginary Additional DMG equal to #1[i]% of the attacker's ATK. This DMG is not affected by additional multipliers.",
    "type": "Paranoia",
    "perma": true,
    "params": [
      "#BattleEvent_P3_ADF"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-40724235\">Modifier_HeliobusActionAbilitySPRecover</a>",
    "realName": "Ultimate DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt by the next Ultimate increases by #1[i]%.",
    "type": "Ultimate DMG Boost",
    "perma": true,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MLevel_BoxingClubResonance_Fire_02B_New_Debuff",
    "realName": "Spinning Back Fist DMG Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases Spinning Back Fist DMG received by #1[i]%.",
    "type": "Spinning Back Fist DMG Vulnerability",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1883139380\">RogueBattleevent128_Link</a>",
    "realName": "Synapse Resonance",
    "aim": "Other",
    "desc": "After getting attacked by a character, this unit and the enemy target that has the highest Max HP both take 1 instance of Ultimate DMG equal to #1[i]% of the attacker's ATK. This effect will be removed after it has been triggered #2[i] times across all enemies.",
    "type": "Synapse Resonance",
    "perma": false,
    "params": [
      "MDF_AttackPercentage",
      "MDF_Count"
    ]
  },
  {
    "name": "MLevel_Rogue_Knowledge",
    "realName": "Brain in a Vat",
    "aim": "Buff",
    "desc": "Current Enlightenment Charge ratio: #1[i]%. If the Enlightenment Charge of \"Brain in a Vat\" reaches 100% when a character uses their Ultimate through a method other than \"Brain in a Vat,\" the Ultimate will be activated again, consuming 100% of the Enlightenment Charge.",
    "type": "Brain in a Vat",
    "perma": true,
    "params": [
      "MDF_EnergyBase"
    ]
  },
  {
    "name": "MLevel_Rogue_Knowledge_SpeedUp",
    "realName": "SMR-2 Amygdala",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_SpeedValue"
    ]
  },
  {
    "name": "StageAbility_612832_Modifier_Sub2",
    "realName": "VEP-18 Occipital Lobe",
    "aim": "Buff",
    "desc": "Increases the All-Type RES PEN for the Ultimate DMG dealt by #1[i]%.",
    "type": "Increases RES PEN",
    "perma": true,
    "params": [
      "MDF_Penetrate"
    ]
  },
  {
    "name": "MLevel_Rogue_612840_CritDmg",
    "realName": "Attachment: Vestibular System",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "MLevel_Rogue_612842_Shield2",
    "realName": "Implant: Explicit Memory",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "StageAbility_612854_Modifier_Sub2",
    "realName": "Candle of Delayed Diffraction",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_612855_Modifier_Sub2",
    "realName": "Canopy of Mottled Metal",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%, lasting until the end of turn",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "StageAbility_612853_Modifier_Sub2",
    "realName": "Torch of Anti-Lag Ignition",
    "aim": "Buff",
    "desc": "Next attack deals #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_612844_Modifier_Sub",
    "realName": "Analysis: Subliminal Sensation",
    "aim": "Buff",
    "desc": "Ultimate deals #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageRatio"
    ]
  },
  {
    "name": "MItem_401020",
    "realName": "Delicious Bean Cake",
    "aim": "Buff",
    "desc": "Imaginary DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_RogueDLCRuin_Upgrade1_DefenceDown",
    "realName": "Formation Extrapolation: Extreme Helium Flash",
    "aim": "Debuff",
    "desc": "Reduces DEF by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_RogueDLCAbundance_Upgrade2_AttackUp",
    "realName": "Formation Extrapolation: Mountain High",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_FantasticStory_BaseAbility_0010_plus2_CD",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"637313409\">Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp</a>",
    "realName": "Rupture",
    "aim": "Buff",
    "desc": "Ultimate deals #1[i]% more DMG.",
    "type": "Ultimate DMG Boost",
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_0013_layerDmg"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>",
    "realName": "The Ashblazing Grand Duke",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillRelic_115_4_P1_AttackAddedRatio",
      "#SkillRelic_115_4_P2_MaxLayer"
    ]
  },
  {
    "name": "MLevel_StageAbility_650100_Modifier_Sub",
    "realName": "Preservation — Enhanced",
    "aim": "Buff",
    "desc": "Shields gained are #1[i]% stronger",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650101_Modifier_Sub",
    "realName": "Remembrance — Enhanced",
    "aim": "Buff",
    "desc": "Increases Effect Hit Rate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650102_Modifier_Sub",
    "realName": "Nihility — Enhanced",
    "aim": "Buff",
    "desc": "DoT effects applied by this unit deal #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650103_Modifier_Sub",
    "realName": "Abundance — Enhanced",
    "aim": "Buff",
    "desc": "The HP restored increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650104_Modifier_Sub",
    "realName": "The Hunt — Enhanced",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650105_Modifier_Sub",
    "realName": "Destruction — Enhanced",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650106_Modifier_Sub",
    "realName": "Elation — Enhanced",
    "aim": "Buff",
    "desc": "Follow-Up ATK DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650107_Modifier_Sub",
    "realName": "Propagation — Enhanced",
    "aim": "Buff",
    "desc": "Increases Basic ATK DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_650108_Modifier_Sub",
    "realName": "Erudition — Enhanced",
    "aim": "Buff",
    "desc": "Increases the Ultimate DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "Monster_IF_BOSS_Standard_BreakBonus_Show",
    "realName": "Mind Shadow",
    "aim": "Other",
    "desc": "Takes #1[i]% less DMG. When Weakness is broken, action is additionally delayed by #2[i]% and takes #3[i]% more DMG.",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_IF_BOSS_Common_Defence",
      "MDF_IF_BOSS_BreakDelay",
      "MDF_IF_BOSS_WeaknessDMGUpRatio"
    ]
  },
  {
    "name": "Monster_IF_BOSS_Standard_Weakness",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_IF_BOSS_WeaknessDMGUpRatio"
    ]
  },
  {
    "name": "Monster_IF_BOSS_Standard_Weakness_02",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%, lasting until the end of the Weakness Break state.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_IF_BOSS_WeaknessDMGUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1771367727\">MStrongChallenge_Talent_StageAbility_0301_PLY</a>",
    "realName": "Basic ATK DMG Boost",
    "aim": "Buff",
    "desc": "Increases Basic ATK DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1274879182\">MStrongChallenge_Talent_StageAbility_0302_PLY</a>",
    "realName": "Skill DMG Boost",
    "aim": "Buff",
    "desc": "Increases Skill DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"796755513\">MStrongChallenge_Talent_StageAbility_0303_PLY</a>",
    "realName": "Ultimate DMG Boost",
    "aim": "Buff",
    "desc": "Increases Ultimate DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-49225744\">MStrongChallenge_Talent_StageAbility_0304_PLY</a>",
    "realName": "Follow-Up ATK DMG Boost",
    "aim": "Buff",
    "desc": "Increases Follow-Up ATK DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1908374077\">MStrongChallenge_Talent_StageAbility_0305_PLY</a>",
    "realName": "DoT Boost",
    "aim": "Buff",
    "desc": "DoT DMG increases #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1047347082\">MStrongChallenge_Talent_StageAbility_0401_PLY</a>",
    "realName": "Weakness Break Efficiency Boost",
    "aim": "Buff",
    "desc": "Increases Weakness Break Efficiency by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStrongChallenge_Talent_StageAbility_0501_PLY_NotShow",
    "realName": "Regenerate Energy After Defeating Enemies",
    "aim": "Buff",
    "desc": "After defeating an enemy, gains #1[i] Energy.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStrongChallenge_Talent_StageAbility_0502_PLY_NotShow",
    "realName": "Recover Skill Points After Defeating Enemies",
    "aim": "Buff",
    "desc": "After defeating an enemy, gains #1[i] Skill Points.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStrongChallenge_Talent_StageAbility_0503_PLY_NotShow",
    "realName": "DMG Boost After Defeating Enemies",
    "aim": "Buff",
    "desc": "After defeating an enemy, gains a #1[i]% DMG bonus for #2[i] turns.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MStrongChallenge_Talent_StageAbility_0504_PLY_NotShow",
    "realName": "SPD Boost After Defeating Enemies",
    "aim": "Buff",
    "desc": "After defeating an enemy, gains a #1[i]% SPD bonus for #2[i] turns.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1297612090\">MStrongChallenge_Talent_StageAbility_0603_PLY</a>",
    "realName": "Restore HP After Action",
    "aim": "Buff",
    "desc": "After every action, heals HP equal to #1[i]% of this unit's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-815605708\">LC_23019_Sub1</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1892511260\">LC_24004_AttackAddRatio</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%, lasting until after the next attack.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1561743765\">Modifier_FantasticStory_BaseAbility_0020_sub2_dot</a>",
    "realName": "Rumor",
    "aim": "Debuff",
    "desc": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "StageAbility_650301_Modifier_Sub",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield. At the beginning of each turn, the strength of this Shield increases by #1[i]% of the shielded unit's Max HP.",
    "type": "Shield",
    "perma": true,
    "params": [
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_650302_Modifier_Sub",
    "realName": "Fragility",
    "aim": "Debuff",
    "desc": "Reduces Effect RES by #1[i]% and Crowd Control RES by #2[i]%.",
    "type": "Reduces Effect RES and Crowd Control RES.",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_650303_Modifier_Sub",
    "realName": "Detonation",
    "aim": "Buff",
    "desc": "After using Basic ATK, for every 1 turn (up to #2[i] turns) that remains for the DoT on the attacked target, immediately deals DMG equal to #1[i]% of the original DMG and removes the DoT.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_650304_Modifier_Sub",
    "realName": "Preference",
    "aim": "Buff",
    "desc": "When healed, additionally restores HP equal to #1[i]% of Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_650305_Modifier_Sub",
    "realName": "Rapidity",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_650306_Modifier_Sub",
    "realName": "Baseline",
    "aim": "Buff",
    "desc": "When getting attacked, the DMG received within a single attack will not exceed #1[i]% of Max HP. This effect can be triggered up to 1 time each turn.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_650307_Modifier_Sub",
    "realName": "Vengeance",
    "aim": "Buff",
    "desc": "The Follow-Up ATK DMG dealt ignores #1[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_650308_Modifier_Sub2",
    "realName": "Rejuvenation",
    "aim": "Buff",
    "desc": "For every #1[i] Skill Points consumed by allies, recover 1 Skill Point.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_650309_Modifier_Sub",
    "realName": "Initiative",
    "aim": "Buff",
    "desc": "After allies use their Ultimates, their action is advanced forward by #1[i]%. This effect can only be triggered once every #2[i] turns.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_650310_Modifier_Sub",
    "realName": "Investment",
    "aim": "Buff",
    "desc": "After using an attack, deals Additional DMG equal to #1[i]% of ATK to attacked target(s).",
    "type": null,
    "perma": true,
    "params": [
      "_DamagePercent"
    ]
  },
  {
    "name": "StageAbility_650311_Modifier_Sub",
    "realName": "Martyrdom",
    "aim": "Debuff",
    "desc": "If any ally's HP is above or equal to 50% of their Max HP at the beginning of a turn, they will consume HP equal to #1[i]% of their Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_650313_Modifier_Sub",
    "realName": "Rule",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_AttackRatio"
    ]
  },
  {
    "name": "StageAbility_650314_Modifier_Sub",
    "realName": "Secret Chest",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_HPRatio"
    ]
  },
  {
    "name": "StageAbility_650315_Modifier_Sub",
    "realName": "Alms",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]% and Effect RES by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff1",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[i]%.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "BattleEvent_P2_ADF_Get"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff2",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "Reduces DEF by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "BattleEvent_P2_ADF_Get"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff3",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "SPD Reduction",
    "perma": false,
    "params": [
      "BattleEvent_P2_ADF_Get"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff4",
    "realName": "Effect RES Reduction",
    "aim": "Debuff",
    "desc": "Effect RES decreases by #1[i]%.",
    "type": "Effect RES Reduction",
    "perma": false,
    "params": [
      "BattleEvent_P2_ADF_Get"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff5",
    "realName": "Follow-Up ATK Vulnerability",
    "aim": "Debuff",
    "desc": "Follow-Up ATK DMG taken increases by #1[i]%.",
    "type": "Follow-Up ATK Vulnerability",
    "perma": false,
    "params": [
      "BattleEvent_P5_ADF_Get"
    ]
  },
  {
    "name": "BossInfiniteWave_Boss_Modifier",
    "realName": "Eloquence",
    "aim": "Other",
    "desc": "The target can only be defeated after a certain number of enemies have been eliminated. At the same time, the target will take significantly more DMG.",
    "type": "Eloquence",
    "perma": true
  },
  {
    "name": "BossInfiniteWave_DamageTaken_Modifier",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MLevel_StageAbility_632201_Modifier_Sub",
    "realName": "Rotting Fruit of the Alien Tree",
    "aim": "Buff",
    "desc": "Resists Crowd Control debuffs. Every time a debuff is resisted, consume HP equal to #1[i]% of the unit's Max HP.",
    "type": "Resists Crowd Control debuffs",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_632202_Modifier_Sub",
    "realName": "King of Sponges",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1728787246\">LC_23025_Sub</a>",
    "realName": "Routed",
    "aim": "Debuff",
    "desc": "Increase Break DMG dealt by the wearer by #1[f1]% and decrease SPD by #2[i]%.",
    "type": "Routed",
    "perma": false,
    "params": [
      "#SkillEquip_P2_BreakDamageAddedRatio",
      "#SkillEquip_P3_SpeedDownRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1868046089\">LC_23024_Sub</a>",
    "realName": "Mirage Fizzle",
    "aim": "Debuff",
    "desc": "The wearer deals #1[i]% more DMG to the target. And additionally increases the Ultimate DMG dealt by #2[i]%.",
    "type": "Mirage Fizzle",
    "perma": false,
    "params": [
      "MDF_PropertyValue01",
      "MDF_PropertyValue02"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1012793214\">LC_21036_Sub_Normal</a>",
    "realName": "Childishness",
    "aim": "Buff",
    "desc": "Increases Basic ATK DMG by #1[i]%.",
    "type": "Basic ATK DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1677530678\">LC_21036_Sub_Ability</a>",
    "realName": "Childishness",
    "aim": "Buff",
    "desc": "Increases Skill DMG by #1[i]%.",
    "type": "Skill DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1572993167\">LC_21036_Sub_Ultra</a>",
    "realName": "Childishness",
    "aim": "Buff",
    "desc": "Increases Ultimate DMG by #1[i]%.",
    "type": "Ultimate DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1915494643\">LC_21037_Sub</a>",
    "realName": "Good Fortune",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalDamage",
      "#SkillEquip_P3_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1257997546\">LC_21038_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1008889053\">LC_21039_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[f1]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_Damage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"852520097\">LC_21040_Sub</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increase CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-672411958\">LC_21041_Sub</a>",
    "realName": "Trick",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_DamageAddedRatio",
      "#SkillEquip_P2_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1888721625\">LC_21041_Sub_Attack</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P5_AttackRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"837190525\">LC_23020_Sub</a>",
    "realName": "Disputation",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and Follow-Up ATKs ignore #2[i]% of target DEF.",
    "type": "Disputation",
    "perma": false,
    "params": [
      "MDF_PropertyValue1",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1919461923\">LC_21042_Sub</a>",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Increase CRIT Rate by #1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalChance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-645875445\">RogueBattleevent122_LevelUp7_2</a>",
    "realName": "Resonance Interplay: Terror and Tremble",
    "aim": "Debuff",
    "desc": "Path Resonance deals #1[i]% more DMG to this target.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1640486188\">RogueBattleevent123_Levelup6_1</a>",
    "realName": "Resonance Interplay: Fleeting Samadhi",
    "aim": "Buff",
    "desc": "Increases the Ultimate DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2059475567\">RogueBattleevent123_Levelup7_1</a>",
    "realName": "Resonance Interplay: Destined Death",
    "aim": "Buff",
    "desc": "#1[i] points of healing has been stored.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_HealCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-319859080\">RogueBattleevent125_LevelUp7_2</a>",
    "realName": "Resonance Interplay: Protostar",
    "aim": "Buff",
    "desc": "Restores #1[i] HP at the beginning of each turn.",
    "type": "Healing Over Time",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MFarmRelic_104309_Sub2",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"918300854\">LC_23021_Sub</a>",
    "realName": "CRIT Rate and CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": "CRIT Rate and CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_Dinosaur",
    "realName": "Stage Buff: Combo Blast",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% (increasing by an extra #1[i]% per rank). Upon inflicting a DoT effect on an enemy, additionally inflicts Gloomfire on them.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageRatioPerLayer",
      "MDF_DotTriggerRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1373377156\">LC_21043_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DmgAddValue"
    ]
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_Beast",
    "realName": "Stage Buff: Quake Counter",
    "aim": "Buff",
    "desc": "When attacked or attacking your characters, enemies take Quake DMG equal to #1[i]% of the character's current Shield (increasing by an extra #1[i]% per rank). Whenever your character takes an action, they gain Shield equal to #2[i]% of the Max HP. The Shield gained from this effect stacks but cannot exceed #3[i]% of the character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageRatioPerLayer",
      "ShieldRatioPerLayer",
      "Shield_MaxRatio"
    ]
  },
  {
    "name": "MLevel_Rogue_Knowledge_DoubleUltra",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "Brain in a Vat activated!",
    "perma": true
  },
  {
    "name": "BossInfiniteWave_BlockDamage",
    "realName": "DMG Immunity",
    "aim": "Buff",
    "desc": "Immune to taking any form of DMG. Dispelled after all other friendly units are defeated.",
    "type": "DMG Immunity",
    "perma": true
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_TV",
    "realName": "Stage Buff: Grin Sweep",
    "aim": "Buff",
    "desc": "Deals #1[i]% more damage (increasing by an extra #1[i]% per rank).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CurrentDamageRatioForDisplay",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_TV_AttackUpRatio",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "AttackUpRatioPerLayer"
    ]
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_Junk",
    "realName": "Stage Buff: Weakness Break",
    "aim": "Buff",
    "desc": "Increases Weakness Break Efficiency by #1[i]% and Break Effect by #2[i]% (increasing by an extra #2[i]% per rank). When attacking Weakness Broken enemy targets, deals #3[i]% of Break DMG to trigger the Weakness Break effect for all existing Weaknesses.",
    "type": null,
    "perma": true,
    "params": [
      "StanceBreakAddRatio",
      "MDF_DamageRatioPerLayer",
      "MDF_BreakDamageRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1004446686\">MStrongChallenge_Talent_StageAbility_0504_Bonus</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MItem_401021",
    "realName": "Clockie Pizza (Single Slice)",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and decreases SPD by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_401023",
    "realName": "Mr. Herring's Lemon Tart",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_401024",
    "realName": "Hundred-Layer Sundae (Zero Calories)",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% plus an extra #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_401025",
    "realName": "Classic SoulGlad",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% plus an extra #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_401027",
    "realName": "\"Dreamlight\" Mixed Sweets",
    "aim": "Buff",
    "desc": "At the beginning of the turn, there is a chance to consume or regenerate Energy, or to consume or restore HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "MItem_401028",
    "realName": "Momentary Freedom",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% plus an extra #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_402025",
    "realName": "Alfalfa Salad",
    "aim": "Buff",
    "desc": "Increase CRIT Rate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402026",
    "realName": "The Moment of Betrayal",
    "aim": "Buff",
    "desc": "Increase CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402028",
    "realName": "The Cloud of Doubt",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403009",
    "realName": "The Moment Before Death",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]% and increase Effect RES by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403010",
    "realName": "Bustling Ambience",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408415",
    "realName": "Popcorn",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408417",
    "realName": "Bright Future",
    "aim": "Buff",
    "desc": "The HP restored increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408609",
    "realName": "Floatdisc Burger",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% plus an extra #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408610",
    "realName": "Clockie Pizza (Whole)",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%, and decreases DMG dealt by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408611",
    "realName": "Potato Fries Sundae",
    "aim": "Buff",
    "desc": "Increases Ice DMG dealt by #1[i]% and Fire RES by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408611_2",
    "realName": "Potato Fries Sundae",
    "aim": "Buff",
    "desc": "Increases Fire DMG dealt by #1[i]% and Ice RES by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_3",
      "MDF_4"
    ]
  },
  {
    "name": "MItem_408612",
    "realName": "Oak Cake Rolls",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408613",
    "realName": "Pika White Grape Soda",
    "aim": "Buff",
    "desc": "Increases chance of resisting Burn by #1[i]%. Consume #2[i] Energy when this effect ends.",
    "type": "Consume Energy",
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408614",
    "realName": "Murderer's Gaze",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% plus an extra #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408615",
    "realName": "Everlasting Hatred",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408616",
    "realName": "Eternal Endurance",
    "aim": "Buff",
    "desc": "Shields gained are #1[i]% stronger.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408617",
    "realName": "Duelist's Plume",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408618",
    "realName": "Gown of Extermination",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408619",
    "realName": "Wild Balaclava",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408801",
    "realName": "Dreamy Cone (Three Flavors)",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%. There is a small chance to select the wrong target when using abilities against enemy targets.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408801_2",
    "realName": "Dreamy Cone (Three Flavors)",
    "aim": "Other",
    "desc": "undefined",
    "type": "Deviate",
    "perma": true
  },
  {
    "name": "MItem_408617_2",
    "realName": "Duelist's Plume",
    "aim": "Debuff",
    "desc": "Significantly increases the chance of being attacked by enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "MItem_408618_2",
    "realName": "Gown of Extermination",
    "aim": "Debuff",
    "desc": "Enemy targets cannot be defeated via attacks.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1313207201\">LC_23022_Sub</a>",
    "realName": "Prophet",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]% and DoT dealt ignores #2[f1]% of the target's DEF, stacking up to #3[i] time(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue1",
      "MDF_PropertyValue2",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_25_Sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Takes #1[i]% increased DMG from Basic ATKs and DoT effects. When this unit is defeated, if any enemies are in Bleed, Shock, Burn, or Wind Shear state, immediately deals DMG equal to #2[i]% of the original DoT to all other enemies with a high chance to inflict Bleed, Shock, Burn, or Wind Shear on them for #3[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "BattleEvent_P1_ADF",
      "BattleEvent_P5_ADF",
      "BattleEvent_P3_ADF"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1355560609\">LC_23021_Sub3</a>",
    "realName": "Mask",
    "aim": "Buff",
    "desc": "Increases teammates' CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": "Mask",
    "perma": false,
    "params": [
      "MDF_PropertyValue3",
      "MDF_PropertyValue4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-950302126\">Relic_117_Sub</a>",
    "realName": "Pioneer Diver of Dead Waters",
    "aim": "Other",
    "desc": "The 4-piece set's CRIT Rate and CRIT DMG Boost effect are increased.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-663861721\">Relic_118_Sub</a>",
    "realName": "Watchmaker, Master of Dream Machinations",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "#SkillRelic_118_4_P1_BreakDamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"5448581\">LC_23028_Sub</a>",
    "realName": "Promise",
    "aim": "Buff",
    "desc": "The DMG dealt by Ultimate or Follow-Up ATK ignores #1[i]% of the target's DEF.",
    "type": "Promise",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1965028940\">LC_23027_Sub</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "LC_23027_Sub2_CD",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_Monster_W2_Beast02_01_ActivityTelevision_AttackDownRatio",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>",
    "realName": "Scalded",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "TotalDmgRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2046125016\">Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp</a>",
    "realName": "Splash",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DmgAddedRatio"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_26_sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Receive #1[i]% more DMG. Increase 1 stack every time this unit receives an attack. Receive additional DMG when stacks reach #2[i].",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "_DamageUp_Ratio_Sum",
      "_Init_Layer"
    ]
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_Beast_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"639067431\">Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow</a>",
    "realName": "Energy Overflow",
    "aim": "Other",
    "desc": "This unit has #1[i] points of extra Energy. This will be consumed first when using the Ultimate.",
    "type": "Energy Overflow",
    "perma": true,
    "params": [
      "EntityStockSPForShow"
    ]
  },
  {
    "name": "Enemy_LevelAbility_ActivityTelevision_Dinosaur_Burn",
    "realName": "Gloomfire",
    "aim": "Debuff",
    "desc": "For a certain number of turns, takes Fire DMG that is based on character ATK at the start of each turn.",
    "type": "Gloomfire",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>",
    "realName": "Shatter",
    "aim": "Debuff",
    "desc": "When this unit's turn starts or when this unit is defeated, this unit and adjacent targets take a set amount of DMG based on the active number of Shatter stacks.",
    "type": "Shatter",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1900399572\">Relic_120_Sub</a>",
    "realName": "The Wind-Soaring Valorous",
    "aim": "Buff",
    "desc": "Ultimate deals #1[i]% more DMG.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_120_4_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1445057094\">Relic_313_CriticalDamage</a>",
    "realName": "Sigonia, the Unclaimed Desolation",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_313_2_P1_CriticalDamage",
      "#SkillRelic_313_2_P2_MaxLayer"
    ]
  },
  {
    "name": "MItem_403011",
    "realName": "Scare Box",
    "aim": "Other",
    "desc": "The Scare Box is already activated. You might encounter a dangerous \"joke\"...",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"498835255\">Modifier_StageAbility_3107202_ARankEffect_Sub_1</a>",
    "realName": "Shudder",
    "aim": "Debuff",
    "desc": "Increases Trotters' DMG received by #1[i]%.",
    "type": "Shudder",
    "perma": true,
    "params": [
      "ARank_Param_5"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-243040750\">Modifier_StageAbility_3107101_SSRankEffect_Sub_1</a>",
    "realName": "Galefury",
    "aim": "Buff",
    "desc": "Characters with Galefury will consume one of its stacks at the end of their turn and have their Action Advanced forward by 100%.",
    "type": "Galefury",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1888687414\">Modifier_StageAbility_3107502_ARankEffect_Sub</a>",
    "realName": "Ally Bonus",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG by #1[i]%.",
    "type": "Ally Bonus",
    "perma": true,
    "params": [
      "ARank_Param_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-717108023\">Modifier_StageAbility_3107503_ARankEffect_Sub</a>",
    "realName": "Ally Bonus",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG by #1[i]%.",
    "type": "Ally Bonus",
    "perma": true,
    "params": [
      "ARank_Param_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1072168277\">LC_23026_Sub</a>",
    "realName": "Cantillation",
    "aim": "Buff",
    "desc": "Increases Energy Regeneration Rate by #1[f1]%.",
    "type": "Energy Regeneration Rate Boost",
    "perma": false,
    "params": [
      "_CurrentSPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-20179237\">LC_23026_Sub2</a>",
    "realName": "Cadenza",
    "aim": "Buff",
    "desc": "ATK increases by #2[i]% and DMG dealt increases by #1[i]%.",
    "type": "ATK and DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DmgAddedRatio",
      "#SkillEquip_P4_AtkAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-36956856\">LC_23026_Sub3</a>",
    "realName": "Cadenza",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "SkillEquip_P3_DmgAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1903725424\">LC_22002_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"753842390\">LC_23023_Sub2</a>",
    "realName": "All-In",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_28_Insert",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and Break Effect by #2[i]%.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "DV_AtkUpRatio_Get",
      "DV_DmgUpRatio_Get"
    ]
  },
  {
    "name": "Modifier_StageAbility_670280_Sub",
    "realName": "Self-Negation",
    "aim": "Debuff",
    "desc": "Total DoT dealt to this unit by attackers increases by #1[i]%. When the enemy target's turn starts, deals Lightning DoT and causes adjacent targets to take Lightning DoT equal to #2[i]% of the original DMG. When higher than or equal to #3[i] stacks: Restores Brain in a Vat for 1 random character at the start of the turn. When higher than or equal to #4[i] stacks: Restores the entire team's Brain in a Vat at the start of the turn. This effect can be stacked up to #5[i] times.",
    "type": "Self-Negation",
    "perma": true,
    "params": [
      "_ShowDotDamageDeepen",
      "#ADF_6",
      "#ADF_4",
      "#ADF_5",
      "#ADF_10"
    ]
  },
  {
    "name": "Modifier_StageAbility_670720_Count",
    "realName": "Borehole",
    "aim": "Other",
    "desc": "Borehole has tallied the number of Spores accumulated by this unit.",
    "type": "Borehole",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_670860_OverCharge",
    "realName": "Overclock",
    "aim": "Buff",
    "desc": "After using an Ultimate to attack while in the Overclock state, deal Aftertaste DMG #1[i] time(s). After using the Ultimate #2[i] more time(s), exit the Overclock state.",
    "type": "Overclock",
    "perma": true,
    "params": [
      "ADF_2",
      "_Count"
    ]
  },
  {
    "name": "Modifier_StageAbility_670860_Count",
    "realName": "Overclock Tally",
    "aim": "Other",
    "desc": "While not in the Overclock state, use their Ultimate #1[i] more time(s) to enter the Overclock state.",
    "type": null,
    "perma": true,
    "params": [
      "LeftCount"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_27_sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. After attacking, increases stacks by 1. When #2[i] stacks are reached, all allies regenerate Energy.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "_DmgUp_Ratio_get",
      "_Init_Layer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"875721035\">Modifier_StageAbility_3107202_ARankEffect_Sub</a>",
    "realName": "Startlement",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Startlement",
    "perma": true,
    "params": [
      "ARank_Param_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_3107205_SRankEffect_Sub",
    "realName": "Venomeaten",
    "aim": "Debuff",
    "desc": "Each stack increases DoT taken by #1[i]%.",
    "type": "Venomeaten",
    "perma": true,
    "params": [
      "MDF_SRank_Param_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"400821176\">Modifier_StageAbility_3107201_SSRankEffect_Sub1</a>",
    "realName": "Fatigued",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received by #1[i]%.",
    "type": "Fatigued",
    "perma": true,
    "params": [
      "MDF_SSRankEffect_Param1"
    ]
  },
  {
    "name": "MItem_408620",
    "realName": "Clockie's Whirlwind Fruit Tea",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408620_2",
    "realName": "Brother Hanu's Boba Tea",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408620_3",
    "realName": "Mr. Soda's Orange-Peel Latte",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408621",
    "realName": "Mirror Princess Edition",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408621_2",
    "realName": "Miss Note Edition",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408622",
    "realName": "Hamster Ball Knight Flavor",
    "aim": "Buff",
    "desc": "Increase SPD by#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408622_2",
    "realName": "Boss Stone Flavor",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408623",
    "realName": "Serious Professor Owl",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408623_2",
    "realName": "Mischievous Origami Bird",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_671260_AttackDown",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "ADF_3"
    ]
  },
  {
    "name": "Modifier_StageAbility_671260_DefendDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by#1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "Modifier_StageAbility_671260_SpeedDown",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "SPD Reduction",
    "perma": false,
    "params": [
      "ADF_5"
    ]
  },
  {
    "name": "Modifier_StageAbility_671400_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1757165805\">Modifier_StageAbility_3107105_SRankEffect_sub</a>",
    "realName": "Detonate",
    "aim": "Debuff",
    "desc": "Every unit afflicted by this effect additionally takes a fixed amount of DMG based on the Detonate stacks. The DMG increases with the number of stacks. The effect is dispelled when the affected unit takes action.",
    "type": "Detonate",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_671850_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>",
    "realName": "Argument",
    "aim": "Debuff",
    "desc": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>",
    "realName": "Verification",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and increases SPD by #2[i]%.",
    "type": "DMG and SPD Boost",
    "perma": true,
    "params": [
      "DmgAddedRatio",
      "SpdAddedRatio"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_27_Sub5",
    "realName": "Energy Overflow",
    "aim": "Other",
    "desc": "#1[i] extra Energy. This will be consumed first when unleashing Ultimate.",
    "type": "Energy Overflow",
    "perma": true,
    "params": [
      "EntityStockSPForShow"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1814121015\">Modifier_StageAbility_3107401_SSRankEffect_DamageUp</a>",
    "realName": "Bellow",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "Bellow",
    "perma": true,
    "params": [
      "SSRankEffect_Param3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-193156341\">Modifier_StageAbility_3107403_RankA_Sub</a>",
    "realName": "Blood Rage",
    "aim": "Buff",
    "desc": "Every stack increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": "Blood Rage",
    "perma": true,
    "params": [
      "MDF_CriticalChance",
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "Modifier_StageAbility_633002_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_672010_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_672100_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_672100_ReviveCountDown",
    "realName": "Frozen Stacks",
    "aim": "Other",
    "desc": "When this state is removed, the character can act as normal. However, if they take fatal DMG in this state, the state will end and they will become downed.",
    "type": "Frozen Stacks",
    "perma": true
  },
  {
    "name": "MItem_408419",
    "realName": "Halovian Winged Burger",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]% and decreases ATK by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408420",
    "realName": "Delusion Blocks",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and decreases SPD by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408421",
    "realName": "\"Hollow Bird\" Toy",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. At the start of every turn, lose HP equal to #2[i]% of current HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408422",
    "realName": "Authentic Sousa Juice",
    "aim": "Buff",
    "desc": "Increases ATK by#1[i]% and decreases DEF by#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408624",
    "realName": "Polychromatic Sourness",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and CRIT DMG by #2[i]%. Decreases Ultimate DMG dealt by #3[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2",
      "MDF_3"
    ]
  },
  {
    "name": "MItem_408625",
    "realName": "Unsolvable Cube",
    "aim": "Buff",
    "desc": "After attacking for the first time, the attacked enemy target will heal for an amount equal to the HP it lost in this attack. For every 1% of HP the enemy target heals in this way, this character receives a Shield that can block DMG that is equal to 1% of their Max HP up to #1[i]% of their Max HP, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408626",
    "realName": "Broken String's Roar",
    "aim": "Buff",
    "desc": "Increase DMG dealt by #1[i]%. The likelihood of this character being attacked by enemy targets is increased greatly.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408627",
    "realName": "Soundless Satisfaction",
    "aim": "Buff",
    "desc": "Increases Basic ATK DMG dealt by #1[i]% and decreases Skill DMG dealt by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "StageAbility_615032_Modifier_Sub2",
    "realName": "Segregation Shield",
    "aim": "Buff",
    "desc": "When the character gains other Shields, this Shield's effect increases by a certain amount.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "StageAbility_615045_Modifier_Sub2",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_Super_Ice_Rogue_S1",
    "realName": "Dissociation",
    "aim": "Debuff",
    "desc": "Targets are considered as Frozen and cannot take action for a certain number of turns. When this effect is dispelled, the targets will take Ice Additional DMG equal to #1[i]% of their Max HP.",
    "type": "Dissociation",
    "perma": false,
    "params": [
      "DamageRatio"
    ]
  },
  {
    "name": "MLevel_StageAbility_615132_Modifier_Sub2",
    "realName": "Perfect Experience: Reticence",
    "aim": "Other",
    "desc": "Attacked for #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "StageAbility_615140_Modifier_Effect",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615142_Modifier_Effect",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615143_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615144_Modifier_Sub2",
    "realName": "Ultimate Experience: Shudder",
    "aim": "Debuff",
    "desc": "Implanted with Ice Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "MLevel_Rogue_DOTTakenUp_S1",
    "realName": "Suspicion",
    "aim": "Debuff",
    "desc": "Each stack increases DoT taken by #1[i]%, stacking up to #2[i] stack(s). When the turn ends, lose #3[i] stack(s).",
    "type": null,
    "perma": true,
    "params": [
      "ValuePerLayer",
      "_MaxLayer",
      "_LayerLost"
    ]
  },
  {
    "name": "StageAbility_615242_Modifier_Effect",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Each stack decreases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "Weaken",
    "perma": false,
    "params": [
      "#ADF_1",
      "_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_615254_Modifier_Effect",
    "realName": "DEF Reduced",
    "aim": "Debuff",
    "desc": "DEF decreases by#1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_671650_Character",
    "realName": "Accumulated Damage",
    "aim": "Other",
    "desc": "#1[i] HP has already lost. After launching a Follow-Up ATK, deal \"Aftertaste\" DMG based on the value of HP lost and reset the lost HP count.",
    "type": null,
    "perma": true,
    "params": [
      "TotalLoseHP"
    ]
  },
  {
    "name": "Modifier_StageAbility_672180_Effect",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases the received Ultimate DMG by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_672630_Effect",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Each stack increases Max HP by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_672870_Character",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases Ultimate DMG by #1[i]%, lasting until after the Ultimate is cast.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "Value"
    ]
  },
  {
    "name": "Modifier_StageAbility_670500_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "MLevel_Rogue_Bubble_S1",
    "realName": "Dewdrop",
    "aim": "Other",
    "desc": "Breaks down after launching an attack. Deals Additional DMG to the attacked enemy targets based on the Charge value. The current Charge is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "Bubble_Amount_All"
    ]
  },
  {
    "name": "MLevel_StageAbility_615342_Modifier",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615344_Modifier_Effect",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]% and increase Effect RES by #2[i]% until character is attacked.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615350_Modifier_Effect",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": "Max HP Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_615354_Modifier_Sub2",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_615356_Modifier_Sub2",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "RogueBonusModifier_Halo_S1",
    "realName": "Critical Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%, stacking up to #3[i] time(s). This can be inherited by the ally acting in the next turn. All stacks will be removed if any ally is attacked.",
    "type": "Critical Boost",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2",
      "_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_615432_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]% until the character is attacked.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615432_Modifier_Effect2",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615442_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615443_Modifier_Effect",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "Each stack reduces DMG received by #1[i]% until the character is attacked.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615445_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "ADF_2"
    ]
  },
  {
    "name": "StageAbility_615454_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615457_Modifier_AttackUp",
    "realName": "Arrow Shades Bow",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], lasting until the start of the next turn.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "RiseAttack"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"291841903\">LC_24004_SpeedAddRatio</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_615630_Modifier_Sub",
    "realName": "Vineyard: Against the Night",
    "aim": "Other",
    "desc": "When characters next launch Follow-Up ATKs, additionally deals \"Aftertaste\" DMG #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "ExtraCount"
    ]
  },
  {
    "name": "StageAbility_615641_Modifier_Effect",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[i]%, lasting until the end of the next action.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "Value"
    ]
  },
  {
    "name": "StageAbility_615643_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases Follow-Up ATK DMG by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615644_Modifier_Effect",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615656_Modifier_Effect",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615657_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_Egg_Base_Rogue_Show_S1",
    "realName": "Spores",
    "aim": "Other",
    "desc": "#1[i] Spore(s) in possession. Number of Spores that can be spread is #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "Egg_Count_Show",
      "Egg_Father_Count_Temp_Show"
    ]
  },
  {
    "name": "StageAbility_615730_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615732_Modifier_Effect",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG dealt by #1[i]%. This effect can stack up to #2[i] stack(s).",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_615744_Modifier_Effect",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "Each stack decreases DMG received by #1[i]%. This effect can stack up to #2[i] stack(s).",
    "type": "DMG Mitigation",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_615745_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%. This effect can stack up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_615753_Modifier_Effect",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": "DEF Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615754_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "RogueBonusModifier_Rage_S1",
    "realName": "Grit",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]% and DEF by #2[i]%. This effect can stack up to #3[i] time(s).",
    "type": "Grit",
    "perma": true,
    "params": [
      "_AttackRatio",
      "_DefenceRatio",
      "_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"51141409\">Modifier_StageAbility_StarBattle_BattleGift_3109021_Sub_AttackUP</a>",
    "realName": "Giftbox",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and Deals Additional DMG 1 time after attacking.",
    "type": "Giftbox",
    "perma": true,
    "params": [
      "AttackAddedRatio",
      "BombRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1330893201\">StageAbility_VS_Weapon_011_BOSS_DamageSplit_Modifier</a>",
    "realName": "Reverberation",
    "aim": "Debuff",
    "desc": "When a teammate of the holder receives DMG, the holder receives DMG equal to #1[i]% of that DMG.",
    "type": null,
    "perma": true,
    "params": [
      "SplitRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-501740522\">StageAbility_VS_Weapon_012_BOSS_Modifier</a>",
    "realName": "Chagrined",
    "aim": "Debuff",
    "desc": "Receives massive DMG once when reaching #1[i] stacks.",
    "type": null,
    "perma": true,
    "params": [
      "MainTargetMaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"892039316\">StageAbility_VS_Weapon_007_PLY_Modifier</a>",
    "realName": "Frosty Flying Sword",
    "aim": "Buff",
    "desc": "When enemies start their action, trigger a corresponding number of Flying Swords based on the number of stacks.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-29423223\">StageAbility_VS_Weapon_004_BOSS_Modifier</a>",
    "realName": "Thunderbolt Thorns",
    "aim": "Debuff",
    "desc": "At the start of the turn, trigger Thunderbolt Thorns to attack the holder and their teammates.",
    "type": "Thunderbolt Thorns",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2011349799\">StageAbility_VS_Weapon_006_PLY_Shield_Modifier</a>",
    "realName": "Fortification",
    "aim": "Buff",
    "desc": "Provides Shield. After attacking, additionally deals Physical DMG based on the Shield Effect. If the attacked target's HP is lower than a certain percentage of the Shield Effect, deals a set amount of DMG and removes the Shield.",
    "type": "Fortification",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"146163793\">StageAbility_VS_Weapon_009_PLY_Permanent_Modifier</a>",
    "realName": "Kindest Benediction",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "Kindest Benediction",
    "perma": true,
    "params": [
      "DMGUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-999722171\">Modifier_StageAbility_StarBattle_GroupMark_3109011_Sub_DamageUP</a>",
    "realName": "Starlight",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "Starlight",
    "perma": true,
    "params": [
      "MarkDamageUPRatio"
    ]
  },
  {
    "name": "MLevel_Rogue_Knowledge_S1",
    "realName": "Brain in a Vat",
    "aim": "Buff",
    "desc": "Current Enlightenment Charge ratio: #1[i]%. If the Enlightenment Charge of \"Brain in a Vat\" reaches 100% when a character uses their Ultimate through a method other than \"Brain in a Vat,\" the Ultimate will be activated again, consuming 100% of the Enlightenment Charge.",
    "type": "Brain in a Vat",
    "perma": true,
    "params": [
      "MDF_EnergyBase"
    ]
  },
  {
    "name": "StageAbility_615831_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615832_Modifier_Sub",
    "realName": "RES PEN Boost",
    "aim": "Buff",
    "desc": "Increases the All-Type RES PEN for the Ultimate DMG dealt by #1[i]%.",
    "type": "RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_Penetrate_Base"
    ]
  },
  {
    "name": "StageAbility_615840_Modifier_Effect",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615853_Modifier_Sub2",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615854_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615855_Modifier_Effect",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Each stack increases Max HP by #1[f1]%, up to #2[i] stack(s), lasting until the next turn starts.",
    "type": "Max HP Boost",
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-416769088\">StageAbility_VS_Accessory_PLY_AllDamageTypeAddedRatio</a>",
    "realName": "Disco Baseball",
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
    "name": "<a class=\"gModGreen\" id=\"451488021\">StageAbility_VS_Accessory_PLY_PhysicalAddedRatio</a>",
    "realName": "Daring Wager",
    "aim": "Buff",
    "desc": "Increases Physical DMG dealt by #1[i]%.",
    "type": "Physical DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1682005220\">StageAbility_VS_Accessory_PLY_FireAddedRatio</a>",
    "realName": "Icefire Talisman",
    "aim": "Buff",
    "desc": "Increases Fire DMG dealt by #2[i]%.",
    "type": "Fire DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"328513261\">StageAbility_VS_Accessory_PLY_IceAddedRatio</a>",
    "realName": "Icefire Talisman",
    "aim": "Buff",
    "desc": "Increases Ice DMG dealt by #2[i]%.",
    "type": "Ice DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1010774060\">StageAbility_VS_Accessory_PLY_ThunderAddedRatio</a>",
    "realName": "Lightning Storm Shackles",
    "aim": "Buff",
    "desc": "Increases Lightning DMG dealt by #2[i]%.",
    "type": "Lightning DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-464465606\">StageAbility_VS_Accessory_PLY_WindAddedRatio</a>",
    "realName": "Lightning Storm Shackles",
    "aim": "Buff",
    "desc": "Increases Wind DMG dealt by #2[i]%.",
    "type": "Wind DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-391986561\">StageAbility_VS_Accessory_PLY_QuantumAddedRatio</a>",
    "realName": "Daring Wager",
    "aim": "Buff",
    "desc": "Increases Quantum DMG dealt by #2[i]%.",
    "type": "Quantum DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1622989373\">StageAbility_VS_Accessory_PLY_ImaginaryAddedRatio</a>",
    "realName": "Daring Wager",
    "aim": "Buff",
    "desc": "Increases Imaginary DMG dealt by #2[i]%.",
    "type": "Imaginary DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1240611871\">StageAbility_VS_Accessory_PLY_SpeedUp</a>",
    "realName": "Shards of the Crown",
    "aim": "Buff",
    "desc": "Increases SPD by #2[i].",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_VS_Accessory_BOSS_StatusResistanceDown",
    "realName": "Fire-Treading Cryoflare",
    "aim": "Debuff",
    "desc": "Decreases Effect RES by #2[i]%.",
    "type": "Effect RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-428729428\">StageAbility_VS_Accessory_Attribute_004_Count_Modifier</a>",
    "realName": "Greed of the Sublime",
    "aim": "Buff",
    "desc": "For every #1[i] instance(s) of dealing DMG, increase the next instance of DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "HitCountMax",
      "DMGAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1630446803\">StageAbility_VS_Accessory_Attribute_005_PLY_Modifier</a>",
    "realName": "Golden Rose",
    "aim": "Buff",
    "desc": "When the turn ends, there is a #1[i]% fixed chance of Advancing action Forward by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1418831338\">StageAbility_VS_Accessory_Attribute_006_PLYAndBOSS_Modifier</a>",
    "realName": "Overdosing Prescription",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #2[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_633009_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_633003_Effect",
    "realName": "Break Effect Boost",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "Modifier_StageAbility_633005_Effect",
    "realName": "Embrittlement",
    "aim": "Debuff",
    "desc": "SPD decreases by #1[i]%. When #2[i] stack(s) of Embrittlement is present, remove Embrittlement after any character uses an ability with a high chance of becoming Frozen.",
    "type": "Embrittlement",
    "perma": true,
    "params": [
      "ADF_4",
      "ADF_5"
    ]
  },
  {
    "name": "Modifier_StageAbility_633006_Mark",
    "realName": "Chord",
    "aim": "Buff",
    "desc": "Deals Additional DMG to the attacked target after the next time Basic ATK is used. Each stack will increase the Additional DMG.",
    "type": "Chord",
    "perma": true
  },
  {
    "name": "Standard_Element_Burn_633008",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Deals Fire DMG at the start of each turn for a certain number of turns. This effect has a limit of #1[i] stack(s).",
    "type": "Burn",
    "perma": false,
    "params": [
      "MaxLayerForStatus"
    ]
  },
  {
    "name": "Standard_Element_Poison_633013",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Deals Wind DMG at the start of each turn for a certain number of turns. This effect has a limit of #1[i] stack(s).",
    "type": "Wind Shear",
    "perma": true,
    "params": [
      "MaxLayerForStatus"
    ]
  },
  {
    "name": "Standard_Element_Entangle_633012",
    "realName": "Entanglement",
    "aim": "Debuff",
    "desc": "Action is delayed and receives Additional Quantum DMG at the start of the next turn.\\nFor every enemy target Quantum characters attack, this Additional DMG will increase. This effect can stack up to #1[i] times.",
    "type": "Entanglement",
    "perma": false,
    "params": [
      "MaxCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1101990991\">Relic_316_Sub</a>",
    "realName": "Forge of the Kalpagni Lantern",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "#SkillRelic_316_2_P2_BreakDamageAddedRatio"
    ]
  },
  {
    "name": "FEIQI_Modifier_BattleEventAbility_Challenge_Month_29_sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "FEIQI_Modifier_BattleEventAbility_Challenge_Month_29_sub2",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1602077188\">StageAbility_VS_Weapon_004_BOSS_Modifier_Max</a>",
    "realName": "Shockbolt Crown",
    "aim": "Debuff",
    "desc": "At the start of the turn, trigger Shockbolt Crown to attack the holder and their teammates.",
    "type": "Shockbolt Crown",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_633001_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1558011426\">Modifier_FantasticStory_BaseAbility_0040_plus2_sub</a>",
    "realName": "Ultimate DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by Ultimate by #1[i]%. After the Ultimate is cast, Whimsicality additionally gains #2[i] point(s) of Charge.",
    "type": "Ultimate DMG Boost",
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_0042_ADF_1",
      "DV_FantasticStory_PlusAbility_0042_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"355925913\">Modifier_FantasticStory_BaseAbility_0040_plus3_sub</a>",
    "realName": "Bonus Charge",
    "aim": "Buff",
    "desc": "After attacking enemy targets, Whimsicality additionally gains #1[i] point(s) of Charge.",
    "type": "Bonus Charge",
    "perma": true,
    "params": [
      "_Extra_Count"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1674419590\">StageAbility_VS_Standard_PLY_Enhance_Modifier_001</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1657641971\">StageAbility_VS_Standard_PLY_Enhance_Modifier_002</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DoT effects applied by this unit deal #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1640864352\">StageAbility_VS_Standard_PLY_Enhance_Modifier_003</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1758307685\">StageAbility_VS_Standard_PLY_Enhance_Modifier_004</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "Basic ATK and Ultimate deals #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1741530066\">StageAbility_VS_Standard_PLY_Enhance_Modifier_005</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DMG dealt by Follow-Up ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1724752447\">StageAbility_VS_Standard_PLY_Enhance_Modifier_006</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DoT and Ultimate deals #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1707974828\">StageAbility_VS_Standard_PLY_Enhance_Modifier_007</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1825418161\">StageAbility_VS_Standard_PLY_Enhance_Modifier_008</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1306220475\">Modifier_StageAbility_StarBattle_InitStance_3109031_BreakAOE_DamageCount_DamageTakenAdd</a>",
    "realName": "Contusion",
    "aim": "Debuff",
    "desc": "Each stack increases DMG received by #1[i]%.",
    "type": "Contusion",
    "perma": true,
    "params": [
      "DamageTakenAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1029619944\">StageAbility_StarBattle_Revive_3109051_Avatar</a>",
    "realName": "Blessing of the Stars",
    "aim": "Buff",
    "desc": "When the character receives fatal damage, they do not get knocked down. Instead, they immediately restore health and regenerate some energy.",
    "type": null,
    "perma": true,
    "params": [
      "ReviveHP",
      "ReviveSP"
    ]
  },
  {
    "name": "MLevel_StageAbility_633104_Modifier_Sub2",
    "realName": "Robe of The Beauty",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_633105_Modifier_Sub",
    "realName": "Record from Beyond the Sky",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_633105_Modifier_Sub2",
    "realName": "Record from Beyond the Sky",
    "aim": "Buff",
    "desc": "Immune to debuffs.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_633107_Modifier_Sub",
    "realName": "Parasitized",
    "aim": "Other",
    "desc": "ATK increases by #1[i]%, but the character will lose HP equal to #2[i]% of their current HP at the start of every turn. When this character is knocked down, this status will be transferred to a random ally target.",
    "type": "Parasitized",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_633109_Modifier_Sub",
    "realName": "Black Forest Cuckoo Clock",
    "aim": "Debuff",
    "desc": "Significantly increases the chance of being attacked by enemies.",
    "type": "Aggro Chance Boost",
    "perma": true
  },
  {
    "name": "StageAbility_633110_Modifier_Sub",
    "realName": "Punklorde Mentality",
    "aim": "Debuff",
    "desc": "Implanted new Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_633112_Modifier_Sub",
    "realName": "Family Ties",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633118_Modifier_Sub",
    "realName": "Illusory Automaton",
    "aim": "Buff",
    "desc": "At the start of the turn, restore HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633119_Modifier_Sub2",
    "realName": "Thalan Toxi-Flame",
    "aim": "Debuff",
    "desc": "At the start of the turn, consume HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633119_Modifier_Sub3",
    "realName": "Thalan Toxi-Flame",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_633120_Modifier_Sub",
    "realName": "The Pinkest Collision",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633121_Modifier_Sub",
    "realName": "Rotting Fruit of the Alien Tree",
    "aim": "Buff",
    "desc": "Resists Crowd Control debuffs. Every time a debuff is resisted, consume HP equal to #1[i]% of the unit's Max HP.",
    "type": "Resists Crowd Control debuffs",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633122_Modifier_Sub",
    "realName": "King of Sponges",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633125_Modifier_Sub",
    "realName": "Talot Doll",
    "aim": "Debuff",
    "desc": "There is a chance to select the wrong target when using abilities against enemy targets.",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_633126_Modifier_Sub",
    "realName": "Punklordian Regards",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633126_Modifier_Sub2",
    "realName": "Punklordian Regards",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_633127_Modifier_Sub",
    "realName": "Self-Consciousness Relaxation",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_633128_Modifier_Sub",
    "realName": "Shatterbone Blade",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633128_Modifier_Sub2",
    "realName": "Shatterbone Blade",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_633129_Modifier_Sub",
    "realName": "Plaguenest",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633130_Modifier_Sub",
    "realName": "Joyous Incense",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633130_Modifier_Sub2",
    "realName": "Joyous Incense",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1981671024\">RogueBattleevent_Abundance_S1_Powerup</a>",
    "realName": "Purgatorial Eradication",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]% and the DMG dealt by #2[i]%. Becomes immune to debuffs.",
    "type": "Purgatorial Eradication",
    "perma": true,
    "params": [
      "ADF_3",
      "ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"618778755\">RogueBattleevent_Elation_S1_PowerUp</a>",
    "realName": "Masked Fools",
    "aim": "Buff",
    "desc": "Basic ATK, Skill or Ultimate DMG will all be considered as Follow-Up ATK DMG.",
    "type": "Masked Fools",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1220158996\">RogueBattleevent_Breeding_S1_Power</a>",
    "realName": "Levitation",
    "aim": "Buff",
    "desc": "When using Basic ATK or Skill to attack, ignore #1[i]% of the target's All-Type RES, and deal Additional DMG equal to #2[i]% of the character's ATK to the attacked target. This effect only works on the latest target.",
    "type": "Levitation",
    "perma": true,
    "params": [
      "ADF_2",
      "ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"436650924\">RogueBattleevent_Erudition_S1_Link</a>",
    "realName": "Central Link",
    "aim": "Other",
    "desc": "After getting attacked by a character, this unit and the enemy target that has the highest Max HP both take 1 instance of Ultimate DMG equal to #1[i]% of the attacker's ATK. This effect will be removed after it has been triggered #2[i] times across all enemies.",
    "type": "Central Link",
    "perma": false,
    "params": [
      "MDF_AttackPercentage",
      "MDF_Count"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1907419900\">Modifier_StageAbility_StarBattle_UltraActive_3109061_Count</a>",
    "realName": "Second Finale",
    "aim": "Other",
    "desc": "Already used the Ultimate #1[i] time(s). Re-activate this character's Ultimate after using their Ultimate #2[i] more time(s).",
    "type": "Second Finale",
    "perma": true,
    "params": [
      "ModifierLayers",
      "UltraCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2068180363\">Modifier_StageAbility_StarBattle_UltraActive_3109061_DamageUP</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DamageUPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"901370508\">Modifier_StageAbility_StarBattle_SpecialBomb_3109071_DamageTakenUP</a>",
    "realName": "Dead End",
    "aim": "Debuff",
    "desc": "Each stack increases the received Ultimate DMG by #1[i]%.",
    "type": "Dead End",
    "perma": true,
    "params": [
      "DamageTakenUP"
    ]
  },
  {
    "name": "SwordTraining_Mar_7th_10_Ability03_Enhance_Normal",
    "realName": "March 7th, the Apex Heroine",
    "aim": "Other",
    "desc": "Increases the next Skill's initial Hits Per Action by #1[i]. The fixed chance of additionally dealing DMG increases by #2[i]%.",
    "type": "Enhanced Skill",
    "perma": false,
    "params": [
      "MDF_Value",
      "MDF_Chance"
    ]
  },
  {
    "name": "SwordTraining_Mar_7th_10_Perception_DOT",
    "realName": "Autumn Lariat",
    "aim": "Debuff",
    "desc": "Takes DoT at the start of each turn.",
    "type": "Autumn Lariat",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1511096431\">Modifier_StageAbility_StarBattle_ActiveDot_3109081_Monster_AttackDown</a>",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[i]%.",
    "type": "ATK Reduction",
    "perma": true,
    "params": [
      "AtttackDownRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"427904253\">Modifier_StageAbility_StarBattle_ActiveDot_3109081_Monster_DamageTaken</a>",
    "realName": "DoT Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DoT taken by #1[i]%.",
    "type": "DoT Vulnerability",
    "perma": true,
    "params": [
      "DamageTakenRatio"
    ]
  },
  {
    "name": "TutorialAbility_Standard_BreakDamageRatio_TakenModifier_2",
    "realName": "Break Effect Boost",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2091951144\">StageAbility_StarBattle_Revive_3109051_AttackUP</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "AttackUPAvatar"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_28_Sub",
    "realName": "Fatal Weakness",
    "aim": "Debuff",
    "desc": "This unit will immediately be defeated when its Weakness is Broken. After being defeated, the attacker's action will be Advanced Forward by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "BattleEvent_P2_ADF"
    ]
  },
  {
    "name": "MItem_408424",
    "realName": "Hello and Goodbye",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408628",
    "realName": "Sparkle's Unlimited Edition Collectible Figure",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_StageSpecialAbility_20241207_Drug",
    "realName": "\"Hearty Valley Brew\"",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[i]%.",
    "type": "\"Hearty Valley Brew\" is in effect",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1943682494\">LC_23029_Sub</a>",
    "realName": "Unarmored",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%. While under a DoT state applied from the wearer and after receiving an attack from the wearer's Basic ATK, Skill, or Ultimate, there is a #2[i]% base chance of having this state upgraded to Cornered, which additionally increases DMG received by #3[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#SkillEquip_P3_Ratio",
      "#SkillEquip_P5_Chance",
      "#SkillEquip_P6_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-326179996\">LC_23029_Sub2</a>",
    "realName": "Cornered",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "RatioPlus"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1040962330\">Relic_315_Sub</a>",
    "realName": "Merit",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by Follow-Up ATK by #1[i]%. This effect stacks up to #2[i] time(s). When #2[i] stack(s) are reached, additionally increases CRIT DMG by #3[i]%.",
    "type": "Merit",
    "perma": false,
    "params": [
      "#SkillRelic_315_2_P2_DamageAddedRatio",
      "#SkillRelic_315_2_P1_MaxLayer",
      "#SkillRelic_315_2_P3_CriticalDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1240607258\">MStrongChallengeEX_Talent_StageAbility_PLY_008</a>",
    "realName": "Sundered Paradise",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStrongChallengeEX_Talent_StageAbility_PLY_008_Extra",
    "realName": "Sundered Paradise",
    "aim": "Buff",
    "desc": "Each stack increases Weakness Break Efficiency by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1257384877\">MStrongChallengeEX_Talent_StageAbility_PLY_009</a>",
    "realName": "Ashen Battleground",
    "aim": "Buff",
    "desc": "Increases DMG dealt by Basic ATK and Skill by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1359820035\">MStrongChallengeEX_Talent_StageAbility_LE_010</a>",
    "realName": "Moment of Termination",
    "aim": "Buff",
    "desc": "Ultimate deals #1[i]% more DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGShow_",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-763352804\">Special_Rogue_Shield_S1</a>",
    "realName": "Amber",
    "aim": "Buff",
    "desc": "When a Shielded character receives DMG that exceeds the Shield value, the excess DMG becomes invalid and 1 stack of Amber is removed.",
    "type": "Amber",
    "perma": true
  },
  {
    "name": "StageAbility_RogueDLCTVLevel_Monster_Modifier",
    "realName": "Positional Assimilation",
    "aim": "Other",
    "desc": "When 3 or more adjacent Ternary Assimilation Units are simultaneously in Surprise Channel, automatically complete repairs.",
    "type": null,
    "perma": true
  },
  {
    "name": "MLevel_StageAbility_615145_Modifier_Sub2",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_633133_Modifier_Sub",
    "realName": "Obliteration Wick Trimmer",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_633134_Modifier_Sub",
    "realName": "Cavity System Model",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633135_Modifier_Sub",
    "realName": "Reunion With Death",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633139_Modifier_Sub",
    "realName": "Absolute Failure Prescription",
    "aim": "Debuff",
    "desc": "After the next time receiving an attack, additionally lose #1[i]% of HP",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633141_Modifier_Sub",
    "realName": "Absolute Failure Prescription",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633142_Modifier_Sub",
    "realName": "Absolute Failure Prescription",
    "aim": "Debuff",
    "desc": "Reduces Weakness Break Efficiency by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633145_Modifier_Sub",
    "realName": "Tawot Cards",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633146_Modifier_Sub",
    "realName": "Tawot Cards",
    "aim": "Buff",
    "desc": "After receiving an attack, restores HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633147_Modifier_Sub",
    "realName": "Tawot Cards",
    "aim": "Debuff",
    "desc": "After receiving an attack, loses #1[i] Energy.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "BUYONG_Modifier_BattleEventAbility_Challenge_Month_30_Sub5",
    "realName": "Energy Overflow",
    "aim": "Other",
    "desc": "#1[i] extra Energy. This will be consumed first when unleashing Ultimate.",
    "type": "Energy Overflow",
    "perma": true,
    "params": [
      "EntityStockSPForShow"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"937919550\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub</a>",
    "realName": "Arioso",
    "aim": "Buff",
    "desc": "If Super Break DMG is dealt to enemies after using an attack, additionally charges Whimsicality by #1[i] points.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_0051_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"805201127\">Modifier_FantasticStory_BaseAbility_0050_plus2_sub</a>",
    "realName": "Picturesque",
    "aim": "Buff",
    "desc": "Follow-Up ATK DMG dealt increases by #1[i]%. Follow-Up ATKs' Weakness Break Efficiency increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_0052_ADF_1",
      "DV_FantasticStory_PlusAbility_0052_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-28797912\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub</a>",
    "realName": "Free Writing",
    "aim": "Buff",
    "desc": "When attacking via using Ultimate, ignore the enemy targets' Weakness to deal Toughness Reduction.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"703724880\">LC_23030_Sub</a>",
    "realName": "Firedance",
    "aim": "Buff",
    "desc": "DMG dealt by Follow-Up ATK increases by #1[i]%.",
    "type": "Follow-Up ATK DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "Modifier_SwordTraining_AvatarBonus",
    "realName": "Victory in Sight",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and reduces DMG received by #2[i]%. At the end of the turn, restores HP to this unit equal to #3[i]% of HP that has been lost.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio",
      "MDF_PropertyRatio2",
      "MDF_PropertyRatio3"
    ]
  },
  {
    "name": "Modifier_StageAbility_633008_Sub",
    "realName": "Most Raucous",
    "aim": "Debuff",
    "desc": "Toughness regeneration decreases by #1[i]%.",
    "type": "Toughness Regeneration Reduced",
    "perma": false,
    "params": [
      "StanceReduceRatio"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_30_sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. After attacking, increases stacks by 1. When #2[i] stack(s) are reached, deals 1 instance of DMG to all enemies based on a certain percentage of their respective Max HP.",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "_DmgUp_Ratio_get",
      "_Init_Layer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1163720690\">LC_21045_Sub</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_SpeedAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_670140_Sub",
    "realName": "Silent Hunter",
    "aim": "Other",
    "desc": "Enemies in the Dissociation state will resist all DMG and all CRIT DMG and Break DMG taken are tallied. When the effect is dispelled, additionally deals a set amount of CRIT DMG equal to #1[i]% of the tallied value to all enemies. When the tallied value reaches #2[i]% of the target's Max HP, Dissociation will immediately be dispelled.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_615530_Modifier_Effect",
    "realName": "Quasar Meltdown Constant",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_7"
    ]
  },
  {
    "name": "StageAbility_615543_Modifier_Effect",
    "realName": "Decaying Implosion",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%. When dealing Break DMG, this RES Pen additionally increases by #2[i]%.",
    "type": "RES PEN Boost",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615556_Modifier_Effect",
    "realName": "Polarization Receptor",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615557_Modifier_Effect",
    "realName": "Eternally Collapsing Object",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-887920794\">LC_23032_Sub</a>",
    "realName": "Woefree",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1255032527\">LC_23031_Sub</a>",
    "realName": "Luminflux",
    "aim": "Buff",
    "desc": "Each stack allows the Ultimate DMG dealt to ignore #1[i]% of the target's DEF. This effect has a max of #2[i] stack(s).",
    "type": "Luminflux",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DefenceDown",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-847062697\">MStrongChallengeEX_Talent_StageAbility_PLY_008_SpeedUp</a>",
    "realName": "Sundered Paradise",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_670860_Explain",
    "realName": "Brain in a Vat Enhancement",
    "aim": "Other",
    "desc": "You can use Brain in a Vat right now to consecutively activate the Ultimate.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"884556115\">Standard_DOT_Burn_Rogue_S1</a>",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1266499176\">Standard_DOT_Poison_Rogue_S1</a>",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2039618849\">Standard_DOT_Electric_Rogue_S1</a>",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the beginning of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"65097736\">Standard_DOT_Tear_Rogue_S1</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"33731582\">LC_21046_Bonus</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalDamageBase"
    ]
  },
  {
    "name": "Modifier_StageAbility_672200_Tear",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_670430_Mark",
    "realName": "Fiber",
    "aim": "Other",
    "desc": "After receiving a total of #1[i] attacks or upon being defeated, deals DMG to this unit and adjacent units and increases Max HP of all targets.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_670580_Mark",
    "realName": "Annihilation Form",
    "aim": "Other",
    "desc": "When there are #1[i] stack(s), increases Ultimate DMG dealt by #2[i]%, lasting until the turn ends. Also, deal DMG to all enemies.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "Modifier_StageAbility_670870_Count",
    "realName": "Aggregator",
    "aim": "Other",
    "desc": "Already used the Ultimate #1[i] time(s). Re-activate this effect after #2[i] more time(s).",
    "type": null,
    "perma": true,
    "params": [
      "_Count",
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_670870_Upgrade",
    "realName": "Aggregator",
    "aim": "Buff",
    "desc": "Each stack increases 1 Bounce count and increases the DMG dealt by Ultimates by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "ADF_5",
      "ADF_6"
    ]
  },
  {
    "name": "MLevel_StageAbility_633148_Modifier_Sub",
    "realName": "Rubert Empire Difference Machine",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MItem_408427",
    "realName": "Arma Correctional Body Wash",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408428",
    "realName": "Ten Lords' Revival Dust",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408631",
    "realName": "Master Thief's Tentacle",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408632",
    "realName": "Arma Sanctus Medicus Tonic",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and decreases DEF by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "Junk_BattleEvent_03_AddBonus_02_Modifier",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i].",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "_Buff02_AttackDelta"
    ]
  },
  {
    "name": "Junk_BattleEvent_03_AddBonusAbility03_Mark",
    "realName": "Deep Blue Curse",
    "aim": "Debuff",
    "desc": "At the start of the turn, trigger Deep Blue Curse to attack the holder and their teammates.",
    "type": "Deep Blue Curse",
    "perma": true
  },
  {
    "name": "Junk_BattleEvent_01_DamageUp_PerLV",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "_DamageUpRatio"
    ]
  },
  {
    "name": "Junk_BattleEvent_02_InsertDamageUp_PerLV",
    "realName": "Follow-Up ATK DMG Boost",
    "aim": "Buff",
    "desc": "Increases Follow-Up ATK DMG by #1[i]%.",
    "type": "Follow-Up ATK DMG Boost",
    "perma": true,
    "params": [
      "_DamageUpRatio"
    ]
  },
  {
    "name": "Junk_BattleEvent_03_EvBonus_OnMonster",
    "realName": "DoT Boost",
    "aim": "Debuff",
    "desc": "DoT taken increases by #1[i]%.",
    "type": "DoT Boost",
    "perma": true,
    "params": [
      "_DamageUpRatio"
    ]
  },
  {
    "name": "Junk_BattleEvent_04_DamageUp_PerLV",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "_DamageUpRatio"
    ]
  },
  {
    "name": "Junk_BattleEvent_05_DamageUp_PerBomb",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "_DamageUpRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_672860_Effect",
    "realName": "Repairman",
    "aim": "Buff",
    "desc": "Every stack makes the Ultimate ignore #1[i]% of enemy targets' DEF.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_672530_Effect",
    "realName": "Pyromaniac",
    "aim": "Other",
    "desc": "Increases Max HP by #1[i]%. Maximum Restorable HP decreases by #2[i]% of the additional Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "MaxHPValue",
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1273869083\">FightFest_Main_Ability01_UltraAction1</a>",
    "realName": "Feint Attack",
    "aim": "Buff",
    "desc": "Action is Advanced Forward by #1[i]% after the next use of an Ultimate.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1670109633\">LC_21047_Bonus</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_SpeedAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1707862755\">StageAbility_3122025_Modifier_Shield</a>",
    "realName": "Barrier",
    "aim": "Buff",
    "desc": "Immune to all DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2031742416\">StageAbility_3120013_Modifier_Effect</a>",
    "realName": "Spiritual Torture",
    "aim": "Other",
    "desc": "Each stack increases the number of Bounce DMG instances for Spiritual Caning.",
    "type": null,
    "perma": true
  },
  {
    "name": "Standard_DOT_Burn_633017",
    "realName": "Necrosis",
    "aim": "Debuff",
    "desc": "Within a certain number of turns, takes Fire DMG at the beginning of each turn and causes the Burn state other than Necrosis to immediately produce a certain percentage of DMG.",
    "type": "Necrosis",
    "perma": false
  },
  {
    "name": "Modifier_StageAbility_633020_Bonus",
    "realName": "Amber Walls",
    "aim": "Other",
    "desc": "After using Ultimate, consumes all stacks to deal Additional DMG after the next attack. This effect can stack up to #1[i] time(s).",
    "type": "Amber Walls",
    "perma": true,
    "params": [
      "MDF_Max"
    ]
  },
  {
    "name": "Modifier_StageAbility_633021_BreakBonus",
    "realName": "Converse of Entropy",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_633150_Modifier_Bonus",
    "realName": "Dreams — 0110",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_633150_Modifier_Debuff_Wait",
    "realName": "Dreams — 0110",
    "aim": "Other",
    "desc": "After #1[i] turn(s), increases DMG taken by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CountDown",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_633150_Modifier_Debuff",
    "realName": "Dreams — 0110",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_633151_Modifier_Bonus",
    "realName": "Do as the Locals Do",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_633153_Modifier_Bonus",
    "realName": "By Any Means Necessary",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1101088336\">Modifier_FantasticStory_BaseAbility_2010_BeforeFever_ForShow</a>",
    "realName": "Concordant Truce",
    "aim": "Buff",
    "desc": "After using Skill to attack an enemy target, deals a set amount of DMG to the targets.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1290646702\">FightFest_Main_Ability01_UltraAction2</a>",
    "realName": "Feint Attack",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-51174625\">StageAbility_3120012_Modifier_Effect</a>",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Each stack increases the Ultimate DMG dealt.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1485648955\">Modifier_StageAbility_3123012_Sub2</a>",
    "realName": "Blu Bull",
    "aim": "Debuff",
    "desc": "Each stack increases Ultimate DMG taken by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_671230_Bonus",
    "realName": "Death Denier",
    "aim": "Buff",
    "desc": "Each stack increases Max HP by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_671820_Bonus_Buff",
    "realName": "Block Builder",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_671450_Debuff",
    "realName": "Court of Homogeneity",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_672850_Bonus",
    "realName": "Star-Picker",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Standard_DOT_Burn_677250",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Eject_686030_Sub",
    "realName": "Opportunism",
    "aim": "Debuff",
    "desc": "Each stack increases Follow-Up ATK DMG taken by #1[i]%.",
    "type": "Opportunism",
    "perma": true,
    "params": [
      "MDF_InsertDebuffRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_670150_Effect",
    "realName": "Mausoleum of Scars",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1608486361\">Modifier_FightFest_FeverEffect</a>",
    "realName": "Super Hype",
    "aim": "Debuff",
    "desc": "When \"Super Hype\" is active, DMG taken by enemies increases by 400%.",
    "type": null,
    "perma": true
  },
  {
    "name": "MItem_401029",
    "realName": "Sword in the Stone",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402030",
    "realName": "Spine-Marrow Sparking Blade",
    "aim": "Buff",
    "desc": "ATK +#1[i] and CRIT DMG +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403012",
    "realName": "Take Your Life 3000",
    "aim": "Buff",
    "desc": "ATK +#1[i] and DMG dealt +#2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408209",
    "realName": "Flying Sword Model",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408429",
    "realName": "Laudatory Press Release",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%. Lasts until this unit is attacked.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408430",
    "realName": "Laudatory Press Release",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%. Lasts until this unit is attacked.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408633",
    "realName": "Enemy's Scandal",
    "aim": "Buff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Eject_686040_Sub",
    "realName": "Disorient",
    "aim": "Debuff",
    "desc": "When receiving Follow-Up ATK, for every debuff this unit is inflicted with, increases this attack's CRIT Rate by #1[f1]% and CRIT DMG by #2[i]%. A max of #3[i] debuff(s) are taken into account.",
    "type": "Disorient",
    "perma": true,
    "params": [
      "MDF_InsertDamageCriticalChanceRatio",
      "MDF_InsertDamageCriticalDamageRatio",
      "MDF_MaxDebuffCount"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Concentrate_686210",
    "realName": "Disgrace",
    "aim": "Debuff",
    "desc": "After taking #1[i] attack(s), additionally take 1 instance of Follow-Up ATK DMG of a random Type equal to #2[i]% base DMG.",
    "type": "Disgrace",
    "perma": true,
    "params": [
      "MDF_BeingAttackTime",
      "MDF_InsertDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688010_Sub",
    "realName": "Thaw",
    "aim": "Debuff",
    "desc": "After being attacked by a Scepter, take Wind DoT equal to #1[i]% base DMG. Every stack increases the DMG multiplier by #2[i]%.",
    "type": "Thaw",
    "perma": true,
    "params": [
      "MDF_MagicBaseDamageRatio",
      "MDF_ExtraMagicBaseDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688030_Sub",
    "realName": "Permeate",
    "aim": "Debuff",
    "desc": "Every time this unit is afflicted with Burn, Wind Shear, Bleed, or Shock, increases DoT taken by #1[i]% and #2[i]% of this unit's DEF is ignored.",
    "type": "Permeate",
    "perma": true,
    "params": [
      "MDF_DOTDeepenRatio",
      "MDF_DefendDownRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688040_Controller",
    "realName": "Boundary: Magnetoreception",
    "aim": "Other",
    "desc": "Every time an enemy target takes 1 DoT, random ally targets regenerate #1[f1] Energy and restore HP equal to #2[i]% of their Max HP.",
    "type": "Boundary: Magnetoreception",
    "perma": true,
    "params": [
      "MDF_SPRecover",
      "MDF_HPHealRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688050_Controller",
    "realName": "Boundary: Echo",
    "aim": "Other",
    "desc": "After either a Scepter or ally target attacks, #1[i] random DoT(s) currently on this unit immediately deals DMG at a multiplier of #2[i]% of the original DMG.",
    "type": "Boundary: Echo",
    "perma": true,
    "params": [
      "MDF_DotTriggerTime",
      "MDF_DotTriggerRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1465262419\">LC_23033_Sub</a>",
    "realName": "Raiton",
    "aim": "Other",
    "desc": "After using Basic Attacks #1[i] time(s), advances the next action by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_CastSkill01CountLeft",
      "#SkillEquip_P3_ActionDelayAdv"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1527906536\">StageAbility_3121003_Modifier_Character_Count</a>",
    "realName": "Follow-Up Tally",
    "aim": "Other",
    "desc": "Tallied number of Follow-Up ATKs launched. Accumulate #1[i] attacks to launch \"Raging Wildfire.\"",
    "type": null,
    "perma": true,
    "params": [
      "ADF_7"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1373022448\">StageAbility_3120014_Modifier_Sub2</a>",
    "realName": "Ultimate Tally",
    "aim": "Other",
    "desc": "Tallied number of Ultimates used. Accumulate #1[i] uses to launch Brave Fist.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "Standard_DOT_Poison_RogueMagic",
    "realName": "Turbulence",
    "aim": "Debuff",
    "desc": "Takes DoT Wind DMG at the start of each turn for a certain number of turns. At the start of every turn, 1 random adjacent target becomes inflicted with 1 other DoT currently on this target.",
    "type": "Turbulence",
    "perma": true
  },
  {
    "name": "Modifier_RogueMagic_Module_688080_Sub",
    "realName": "Deluge",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "Deluge",
    "perma": true,
    "params": [
      "MDF_SpeedAddRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688090_Controller",
    "realName": "Boundary: Projection",
    "aim": "Other",
    "desc": "When any Scepter or ally target launches Follow-Up ATK, increases their CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": "Boundary: Projection",
    "perma": true,
    "params": [
      "MDF_CriticalChanceRatio",
      "MDF_CriticalDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688100_Controller",
    "realName": "Boundary: Condense",
    "aim": "Other",
    "desc": "After any Scepter or ally target launches Follow-Up ATK, additionally deals #1[i] instance(s) of Follow-Up ATK DMG equal to #2[i]% base DMG or #2[i]% of the attacker's ATK.",
    "type": "Boundary: Condense",
    "perma": true,
    "params": [
      "MDF_InsertDamageTime",
      "MDF_InsertDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688120_Sub",
    "realName": "Monotonous",
    "aim": "Debuff",
    "desc": "After being attacked by a character, immediately take DMG from any DoT of the same Type as the attacking character at a multiplier of #1[i]% of the original DMG.",
    "type": "Monotonous",
    "perma": true,
    "params": [
      "MDF_DOTTriggerRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688170_AttackDown",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "Each stack decreases ATK by #1[i]%.",
    "type": "ATK Reduction",
    "perma": true,
    "params": [
      "MDF_AttackDownRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688170_DefendDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "Each stack decreases DEF by #1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "MDF_DefendDownRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688170_SpeedDown",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Each stack decreases SPD by #1[i]%.",
    "type": "SPD Reduction",
    "perma": true,
    "params": [
      "MDF_SpeedDownRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688170_CriticalDamageTaken",
    "realName": "CRIT Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases CRIT DMG taken by #1[i]%.",
    "type": "CRIT Vulnerability",
    "perma": true,
    "params": [
      "MDF_CriticalDamageTakenRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688180_Controller",
    "realName": "Boundary: Annihilation",
    "aim": "Other",
    "desc": "After any Scepter or ally target attacks, applies #1[i] stack(s) of \"Progress\" to all ally targets. If \"Progress\" reaches #2[i] stack(s), then the ally character with the highest CRIT DMG receives #3[i] extra turn(s) and remove \"Progress\" from all ally targets.",
    "type": "Boundary: Annihilation",
    "perma": true,
    "params": [
      "MDF_ExtraTurnBuffLayer",
      "MDF_ExtraTurnBuffTarCount",
      "MDF_ExtraTurnTime",
      "MDF_ExtraTurnDamageAdd",
      "MDF_ExtraDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688180_Controller_LV2",
    "realName": "Boundary: Annihilation",
    "aim": "Other",
    "desc": "After any Scepter or ally target attacks, applies #1[i] stack(s) of \"Progress\" to all ally targets. If \"Progress\" reaches #2[i] stack(s), then the ally character with the highest CRIT DMG receives #3[i] extra turn(s) and remove \"Progress\" from all ally targets. Increases DMG dealt by the character in these extra turn(s) by #4[i]%, and after this character attacks, deals to the target(s) 5 instances of Follow-Up ATK DMG of a random Type equal to #5[i]% of this character's ATK.",
    "type": "Boundary: Annihilation",
    "perma": true,
    "params": [
      "MDF_ExtraTurnBuffLayer",
      "MDF_ExtraTurnBuffTarCount",
      "MDF_ExtraTurnTime",
      "MDF_ExtraTurnDamageAdd",
      "MDF_ExtraDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688180_Effect_Count",
    "realName": "Progress",
    "aim": "Other",
    "desc": "After accumulating a certain number of stacks, grants extra turn(s) to the ally character with the highest CRIT DMG.",
    "type": "Progress",
    "perma": true
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_AOE_686460",
    "realName": "Slander",
    "aim": "Debuff",
    "desc": "When receiving DMG, increases the DMG's CRIT Rate by #1[i]%. When receiving CRIT DMG from Follow-Up ATK, additionally take DMG of a random Type equal to #2[i]% original DMG.",
    "type": "Slander",
    "perma": true,
    "params": [
      "MDF_CriticalChanceTaken",
      "MDF_InsertDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Spread_686660",
    "realName": "Bounty",
    "aim": "Other",
    "desc": "After receiving #1[i] attack(s) or when defeated, regenerates all ally characters' Energy equal to #2[i]% of their respective Max Energy and #3[i] Skill Point(s). This effect is removed after activating.",
    "type": "Bounty",
    "perma": true,
    "params": [
      "MDF_BeingAttackTime",
      "MDF_SPRecoverRatio",
      "MDF_BPRecover"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_AOE_686450",
    "realName": "Foreshadow",
    "aim": "Debuff",
    "desc": "Increases Toughness reduction by #1[i]%.",
    "type": "Foreshadow",
    "perma": true,
    "params": [
      "MDF_ExtraStanceDamageTaken"
    ]
  },
  {
    "name": "Modifier_DelayAttack_RogueMagic_NewMagic_Concentrate_686260",
    "realName": "Delay: Possession",
    "aim": "Debuff",
    "desc": "Every time #1[i] enemy target(s) are defeated, receive #2[i] instance(s) of Quantum Ultimate DMG equal to #3[i]% base DMG. This effect is removed after triggering #4[i] time(s).",
    "type": "Delay: Possession",
    "perma": true,
    "params": [
      "MDF_DelayAttackTriggerTime",
      "MDF_DelayAttackDamageTime",
      "MDF_DelayAttackDamageRatio",
      "MDF_DelayAttackEffectTime"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"225763044\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub2</a>",
    "realName": "Arioso",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%.",
    "type": "Arioso",
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_0051_ADF_1"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Eject_686050_Sub",
    "realName": "Prophet",
    "aim": "Buff",
    "desc": "Increases SPD by a fixed #1[i]% and dispels #2[i] stack(s) after taking an action.",
    "type": "Prophet",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio",
      "MDF_SpeedReduceLayer"
    ]
  },
  {
    "name": "Modifier_DelayAttack_RogueMagic_NewMagic_Eject_686060",
    "realName": "Delay: Cataclysm",
    "aim": "Debuff",
    "desc": "When Weakness is Broken, deals Ice Ultimate DMG equal to #1[i]% base DMG to random enemy targets with \"Delay: Cataclysm\" and removes 1 stack of this effect, repeating until no target on the field possesses this effect.",
    "type": "Delay: Cataclysm",
    "perma": true,
    "params": [
      "MDF_DelayAttackDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Concentrate_686240",
    "realName": "Summation",
    "aim": "Debuff",
    "desc": "When receiving Weakness Break DMG, all other enemy targets in the Weakness Broken state will receive DMG equal to #1[i]% of the original DMG.",
    "type": "Summation",
    "perma": true,
    "params": [
      "MDF_BreakDamageSplitRatio"
    ]
  },
  {
    "name": "Modifier_DelayAttack_RogueMagic_NewMagic_AOE_686430",
    "realName": "Delay: Self-Immolation",
    "aim": "Debuff",
    "desc": "After receiving DMG exceeding #1[i]% of Max HP, deals #2[i] instance(s) of Fire Ultimate DMG equal to #3[i]% base DMG to all enemies. This effect is removed after being triggered.",
    "type": "Delay: Self-Immolation",
    "perma": true,
    "params": [
      "MDF_DelayAttackTriggerTime",
      "MDF_DelayAttackDamageTime",
      "MDF_DelayAttackDamageRatio"
    ]
  },
  {
    "name": "Modifier_DelayAttack_RogueMagic_NewMagic_AOE_686440",
    "realName": "Delay: Obliteration",
    "aim": "Debuff",
    "desc": "When defeated, deals #1[i] instance(s) of Fire Ultimate DMG equal to #2[i]% base DMG to all enemies. This effect is removed after being triggered.",
    "type": "Delay: Obliteration",
    "perma": true,
    "params": [
      "MDF_DelayAttackDamageTime",
      "MDF_DelayAttackDamageRatio"
    ]
  },
  {
    "name": "Modifier_DelayAttack_RogueMagic_NewMagic_Spread_686610",
    "realName": "Delay: Lunacy",
    "aim": "Debuff",
    "desc": "After being attacked by an Ultimate, additionally takes #1[i] instance(s) of Ice Ultimate DMG equal to #2[i]% base DMG and Ice Ultimate DMG equal to #3[i]% base DMG to adjacent targets. This effect will not trigger more than #4[i] time(s).",
    "type": "Delay: Lunacy",
    "perma": true,
    "params": [
      "MDF_DelayAttackDamageTime",
      "MDF_DelayAttackDamageRatio",
      "MDF_DelayAttackAdjoinDamageRatio",
      "MDF_DelayAttackEffectTime"
    ]
  },
  {
    "name": "Modifier_DelayAttack_RogueMagic_NewMagic_Spread_686620",
    "realName": "Delay: Cleanse",
    "aim": "Debuff",
    "desc": "When an enemy target enters the battle, immediately deals #1[i] instance(s) of Lightning Ultimate DMG equal to #2[i]% base DMG to it and Lightning Ultimate DMG equal to #3[i]% base DMG to adjacent targets. This effect will not trigger more than #4[i] time(s).",
    "type": "Delay: Cleanse",
    "perma": true,
    "params": [
      "MDF_DelayAttackDamageTime",
      "MDF_DelayAttackDamageRatio",
      "MDF_DelayAttackAdjoinDamageRatio",
      "MDF_DelayAttackEffectTime"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Spread_686630",
    "realName": "Inference Beacon",
    "aim": "Debuff",
    "desc": "After receiving Break DMG, regenerates #1[i] Energy for all ally characters and advances their actions by #2[i]%. This effect is removed after being triggered.",
    "type": "Inference Beacon",
    "perma": true,
    "params": [
      "MDF_SPRecover",
      "MDF_ActionDelay"
    ]
  },
  {
    "name": "Modifier_RogueMagic_NewMagic_Spread_686640",
    "realName": "Weakness Implant",
    "aim": "Debuff",
    "desc": "Implants a Weakness of an ally character's Type and reduces corresponding Type RES by #1[i]%.",
    "type": "Weakness Implant",
    "perma": true,
    "params": [
      "MDF_ElementResistanceDownRatio"
    ]
  },
  {
    "name": "StageAbility_615446_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_615746_Modifier_Effect",
    "realName": "DEF Reduced",
    "aim": "Debuff",
    "desc": "Each stack decreases DEF by #1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_615846_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"550683344\">Relic_317_Sub</a>",
    "realName": "Lushaka, the Sunken Seas",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillRelic_317_2_P2_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1839515953\">Modifier_FightFest_Main_Ability02</a>",
    "realName": "Early Reveal",
    "aim": "Buff",
    "desc": "After every attack against the enemy, deal a set amount of DMG to the enemy hit by this attack and inflict Startled on them.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-879190499\">Modifier_FightFest_Main_Ability02_Insert_Effect</a>",
    "realName": "Startled",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1897560670\">FightFest_Main_Ability06_StanceDamage</a>",
    "realName": "Stealing Their Thunder",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-933679831\">StageAbility_3120013_Modifier_Sub</a>",
    "realName": "Spiritual Caning",
    "aim": "Other",
    "desc": "At the start of a turn, deals Lightning DoT to all enemies multiple times.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-374012756\">StageAbility_3120035_Modifier_Count</a>",
    "realName": "Ready for Battle",
    "aim": "Other",
    "desc": "Each stack increases DMG dealt by Ultimate by #1[i]%. For every #2[i] stack(s) gained, the first character in the team lineup will immediately activate their Ultimate.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1714349966\">StageAbility_3121005_Modifier_Character_Count</a>",
    "realName": "Skill Point Tally",
    "aim": "Other",
    "desc": "Tallied number of Skill Points. Accumulate #1[i] to cause the leftmost character in the lineup to immediately take action.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_8"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"967872201\">StageAbility_3121006_Modifier_Character2_Count</a>",
    "realName": "Ultimate Tally",
    "aim": "Other",
    "desc": "Tallied number of Ultimate attack target number. Accumulate #1[i] to regenerate the Energy of the leftmost character in the lineup.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_6"
    ]
  },
  {
    "name": "StageAbility_615542_Modifier_Effect_New",
    "realName": "Tide of Devastation",
    "aim": "Buff",
    "desc": "Attack a Weakness Broken enemy target to deal Super Break DMG against them.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"103322561\">Relic_318_Sub</a>",
    "realName": "The Wondrous BananAmusement Park",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_318_2_P2_CriticalDamageBase"
    ]
  },
  {
    "name": "Modifier_StageAbility_670640_FirstPowerUp",
    "realName": "Phantom Thief",
    "aim": "Buff",
    "desc": "Deals Aftertaste DMG after using an attack. Will trigger for a max of #1[i] more attacks.",
    "type": null,
    "perma": true,
    "params": [
      "Limit_Count"
    ]
  },
  {
    "name": "Modifier_StageAbility_670640_PowerUp",
    "realName": "Phantom Thief",
    "aim": "Buff",
    "desc": "Increases the multiplier of Aftertaste DMG dealt by #1[i]% of the original DMG multiplier.",
    "type": null,
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>",
    "realName": "Gimmick",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%. Upon Breaking an enemy target's Weakness, applies Wind Shear to all enemies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_0027_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1431018009\">Modifier_FantasticStory_BaseAbility_0020_sub6_dot</a>",
    "realName": "Gimmick",
    "aim": "Debuff",
    "desc": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "Modifier_StageAbility_670470_Character_Count",
    "realName": "Molten Knight",
    "aim": "Other",
    "desc": "Gained a total of #1[i] stacks of Critical Boost. Gain a total of #2[i] stacks to trigger the effect.",
    "type": null,
    "perma": true,
    "params": [
      "_Count",
      "#ADF_1"
    ]
  },
  {
    "name": "Standard_EliteField_Elite",
    "realName": "Binding Obligation",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%. Causes other enemy targets to obtain \"Fate's Convergence.\"",
    "type": "Binding Obligation",
    "perma": true,
    "params": [
      "MDF_AllDamageReduce"
    ]
  },
  {
    "name": "Standard_EliteField_Servant",
    "realName": "Fate's Convergence",
    "aim": "Buff",
    "desc": "Reduces all DMG taken by #1[i]%. Upon defeat, a certain percentage of %CasterName's Max HP will be lost.",
    "type": "Fate's Convergence",
    "perma": true,
    "params": [
      "MDF_AllDamageReduce"
    ]
  },
  {
    "name": "Modifier_StageAbility_672100_Character_Effect",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_4"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688160_Enemy",
    "realName": "Perishing",
    "aim": "Debuff",
    "desc": "When attacked by any Scepter or ally target, every stack increases the Toughness Reduction taken by #1[i]%. If this unit is already Weakness Broken, then every stack converts the Toughness Reduction taken in this attack to #2[i]% Super Break DMG.",
    "type": "Perishing",
    "perma": true,
    "params": [
      "MDF_StanceRatio",
      "MDF_SuperBreakRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688190_Controller",
    "realName": "Boundary: Implosion",
    "aim": "Other",
    "desc": "Increases all ally characters' Break Effect by #1[i]%. Characters with Break Effect lower than #2[i]% of the Break Effect of the ally character currently with the highest Break Effect have their Break Effect increased to that value.",
    "type": "Boundary: Implosion",
    "perma": true,
    "params": [
      "MDF_BreakDamageAddedRatio",
      "MDF_BreakDamageMinRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688200_Controller",
    "realName": "Boundary: Inertia",
    "aim": "Other",
    "desc": "When Scepters or ally targets attack Weakness Broken enemy targets, converts #1[i]% of Toughness Reduction dealt by this attack to Super Break DMG and increases the Super Break DMG the enemy target takes by #2[i]%.",
    "type": "Boundary: Inertia",
    "perma": true,
    "params": [
      "MDF_SuperBreakRatio",
      "MDF_SuperBreakDamageAddedRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688210_Controller",
    "realName": "Boundary: Erosion",
    "aim": "Other",
    "desc": "Increases Scepters' and ally targets' Weakness Break Efficiency by #1[i]%. When enemy targets become Weakness Broken, delays their action by #2[i]% and reduces their restored Toughness by #3[i]% the next time they recover from being Weakness Broken.",
    "type": "Boundary: Erosion",
    "perma": true,
    "params": [
      "MDF_StanceRatio",
      "MDF_ActionDelayRatio",
      "MDF_StanceRecoverDownRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688250_Sub",
    "realName": "Ultimate CRIT DMG Boost",
    "aim": "Buff",
    "desc": "When using Ultimate, increases CRIT DMG by #1[i]%. This effect is dispelled after use.",
    "type": "Ultimate CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_CriticalDamageAddRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688260_Controller",
    "realName": "Boundary: Prism",
    "aim": "Other",
    "desc": "Increases the Ultimate DMG taken by enemy target by #1[i]%. If an ally target deals Ultimate DMG via an attack, then, after attacking, #2[i] \"Delay Effect(s)\" currently on random attacked targets immediately takes effect at a rate of #3[i]%.",
    "type": "Boundary: Prism",
    "perma": true,
    "params": [
      "MDF_UltraDamageTakenRatio",
      "MDF_DelayAttackTriggerCount",
      "MDF_DelayAttackTriggerRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688260_Controller_LV2",
    "realName": "Boundary: Prism",
    "aim": "Other",
    "desc": "Increases the Ultimate DMG taken by enemy target by #1[i]%. If an ally target deals Ultimate DMG via an attack, then, after attacking, #2[i] Delay Effect(s) currently on random attacked targets immediately takes effect at a rate of #3[i]%. This does not consume the number of times this effect can take effect.",
    "type": "Boundary: Prism",
    "perma": true,
    "params": [
      "MDF_UltraDamageTakenRatio",
      "MDF_DelayAttackTriggerCount",
      "MDF_DelayAttackTriggerRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688270_Controller",
    "realName": "Boundary: Hatching",
    "aim": "Other",
    "desc": "After a Scepter attacks or a Delay Effect takes effect, applies for all ally characters #1[i] stack(s) of \"Scaled Wing\": Every stack increases DMG dealt by Ultimate by #2[i]% for a max of #3[i] stack(s). Clears all stacks after Ultimate is used.",
    "type": "Boundary: Hatching",
    "perma": true,
    "params": [
      "MDF_BuffLayer",
      "MDF_UltraDamageRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688270_Effect",
    "realName": "Scaled Wing",
    "aim": "Buff",
    "desc": "Every stack increases DMG dealt by Ultimate by #1[i]%. All stacks are cleared after Ultimate is used.",
    "type": "Scaled Wing",
    "perma": true,
    "params": [
      "MDF_UltraDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688280_Sub",
    "realName": "Ceremony",
    "aim": "Debuff",
    "desc": "When taking Ultimate DMG, every stack increases the All-Type PEN of that DMG by #1[i]%. For every target on the field that is afflicted with this debuff, increases the DMG taken by #2[i]%.",
    "type": "Ceremony",
    "perma": true,
    "params": [
      "MDF_ResistanceDownRatio",
      "MDF_DamageTakenRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688300_Sub",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageAddRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688320_Controller",
    "realName": "Boundary: Transition",
    "aim": "Other",
    "desc": "Increases ally targets' ATK by #1[i]% and SPD by #2[i]%. After they attack, deals Additional DMG to the target equal to #3[i]% of the attacker's ATK.",
    "type": "Boundary: Transition",
    "perma": true,
    "params": [
      "MDF_AttackUPRatio",
      "MDF_SpeedUPRatio",
      "MDF_ExtraDamageRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688330_Controller",
    "realName": "Boundary: Fold",
    "aim": "Other",
    "desc": "Increases ally targets' DEF by #1[i]% and Max HP by #2[i]%. When attacked, all DMG taken is Distributed amongst all ally targets.",
    "type": "Boundary: Fold",
    "perma": true,
    "params": [
      "MDF_DefenceAddedRatio",
      "MDF_MaxHPAddedRatio"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Module_688350_Sub",
    "realName": "Breakdown",
    "aim": "Debuff",
    "desc": "When taking DMG, every stack increases the CRIT Rate of this DMG by #1[i]% and CRIT DMG by #2[i]%.",
    "type": "Breakdown",
    "perma": true,
    "params": [
      "MDF_CriticalChanceRatio",
      "MDF_CriticalDamageRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_670430_Effect",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "ADF_6"
    ]
  },
  {
    "name": "Standard_DOT_Burn_RogueMagic",
    "realName": "Starcrown",
    "aim": "Debuff",
    "desc": "Receives Fire DMG at the start of each turn for a certain number of turns. This effect stacks up to #1[i] time(s). Each stack reduces DEF by #2[i]%.",
    "type": "Starcrown",
    "perma": true,
    "params": [
      "MDF_MaxLayer",
      "MDF_DefendDownRatio"
    ]
  },
  {
    "name": "Standard_DOT_Electric_RogueMagic",
    "realName": "Ionization",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns. This effect has a limit of #1[i] stack(s). At the start of every turn, this effect activates #3[i] time(s) on random targets at a multiplier of #2[i]% of the original damage, and each stack increases the DMG multiplier by #4[i]%.",
    "type": "Ionization",
    "perma": true,
    "params": [
      "MDF_MaxLayer",
      "MDF_DOTTriggerRatio",
      "MDF_Electric_EjectTime",
      "MDF_ExtraDOTTriggerRatio"
    ]
  },
  {
    "name": "Standard_DOT_Tear_RogueMagic",
    "realName": "Peeled",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns. At the start of every turn, all currently possessed DoTs deal DMG at a #1[i]% multiplier of the original DMG.",
    "type": "Peeled",
    "perma": true,
    "params": [
      "MDF_DOTTriggerRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_672721_Debuff_01",
    "realName": "Pacifist Worker",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_672721_Debuff_02",
    "realName": "Pacifist Worker",
    "aim": "Debuff",
    "desc": "Effect RES decreases by #1[i]%.",
    "type": "Effect RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_672721_Debuff_03",
    "realName": "Pacifist Worker",
    "aim": "Debuff",
    "desc": "Effect Hit Rate decreases by #1[i]%.",
    "type": "Effect Hit Rate Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689301_Sub",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689301_Sub2",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689302_Sub",
    "realName": "DMG Reduction",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": "DMG Reduction",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689302_Sub2",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689302_Sub3",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_4"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689302_Sub4",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": "DMG Mitigation",
    "perma": true,
    "params": [
      "#ADF_3"
    ]
  },
  {
    "name": "Modifier_RogueMagic_Level_689303_Sub",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_31_Sub",
    "realName": "Exo-Toughness",
    "aim": "Other",
    "desc": "Triggers Weakness Break when the enemy's initial Weakness is reduced to 0. Then, their temporary Weakness can continue to be reduced. When temporary Weakness is reduced to 0, Weakness Break will be triggered again. The effect will be removed after this occurs.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"539730861\">StageAbility_3121008_Modifier_Effect</a>",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Each stack increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-480211470\">StageAbility_3121009_Modifier_Character_Effect</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_670580_TempEffect",
    "realName": "Annihilation Form",
    "aim": "Buff",
    "desc": "Ultimate DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "Modifier_StageAbility_672850_Bonus_2",
    "realName": "Star-Picker",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_672480_Effect",
    "realName": "Rehearser",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_671500_Bonus",
    "realName": "Pre-Battle Caregiver",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_671360_Bonus",
    "realName": "Graveward Lunatic",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_633013_Weak",
    "realName": "Bud in the Wind",
    "aim": "Debuff",
    "desc": "Implanted new Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1795704980\">FightFest_Main_Ability05_UltraAction</a>",
    "realName": "Uproot the Cause",
    "aim": "Buff",
    "desc": "Immediately take another action after their next action and increases their DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"604659026\">FightFest_Main_Ability05_UltraAction2</a>",
    "realName": "Uproot the Cause",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%, lasting until the end of this action",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "StageAbility_633152_Bonus",
    "realName": "Super Overlord Spinning Top",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-927960305\">LC_22003_Sub</a>",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_CriticalDamage"
    ]
  },
  {
    "name": "MItem_408634",
    "realName": "Golden Slumbernana",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%, CRIT Rate by #2[i]%, CRIT DMG by #3[i]%, and SPD by #4[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2",
      "MDF_3",
      "MDF_4"
    ]
  },
  {
    "name": "MItem_408803",
    "realName": "{NICKNAME}© BananaPie",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]% and Break Effect by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408434",
    "realName": "Origami Cake",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408435",
    "realName": "Full-Auto Dreampaint Spray",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408436",
    "realName": "Dazzling Ninja Provisions",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2009182373\">LC_23035_Sub</a>",
    "realName": "Charring",
    "aim": "Debuff",
    "desc": "Each stack increases the Break DMG taken by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": "Charring",
    "perma": false,
    "params": [
      "MDF_PropertyValue1",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-515052173\">Relic_121_Sub</a>",
    "realName": "Sacerdos' Relived Ordeal",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG dealt by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_121_4_P1_CriticalDamage",
      "#SkillRelic_121_4_P3_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1050600358\">Relic_122_Sub</a>",
    "realName": "Scholar Lost in Erudition",
    "aim": "Buff",
    "desc": "Increases DMG dealt when using Skill by #1[i]%.",
    "type": "Skill DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_122_4_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2022288380\">LC_23034_Sub</a>",
    "realName": "Hymn",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "Hymn",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio",
      "#SkillEquip_P3_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_2050001_Modifier_Sub",
    "realName": "Mysterious Message",
    "aim": "Buff",
    "desc": "Follow-Up ATK DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_2050002_Modifier_Sub",
    "realName": "Clear Fragrance",
    "aim": "Buff",
    "desc": "Ultimate DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_2050003_Modifier_Sub",
    "realName": "Warm Current",
    "aim": "Buff",
    "desc": "DoT dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>",
    "realName": "Binding Obligation",
    "aim": "Buff",
    "desc": "After non-Elite enemy targets are defeated, receive DMG based on a certain percentage of this unit's Max HP.",
    "type": "Binding Obligation",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>",
    "realName": "Fate's Convergence",
    "aim": "Buff",
    "desc": "After being defeated, deal DMG based on a certain percentage of their Max HP to the Elite enemy target.",
    "type": "Fate's Convergence",
    "perma": true
  },
  {
    "name": "Modifier_RogueMagic_Level_689101_Elite_DamageTaken",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #1[i]%, stacking up to #2[i] time(s). At the start of the turn, loses #3[i] stack(s).",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_AllDamageTaken",
      "MDF_MaxLayer",
      "MDF_LoseOnTurnBegin"
    ]
  },
  {
    "name": "StageAbility_2050004_Modifier_Sub",
    "realName": "Bath Efficacy",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1762727873\">Modifier_FantasticStory_BaseAbility_2010_EnterFever_sub</a>",
    "realName": "Surging Grit",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "DV_Ratio_Get"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-574485103\">LC_23037_Sub2</a>",
    "realName": "Increases Skill DMG and Ultimate DMG",
    "aim": "Buff",
    "desc": "Increases Skill DMG and Ultimate DMG dealt by #1[i]%.",
    "type": "Increases Skill DMG and Ultimate DMG",
    "perma": false,
    "params": [
      "#SkillEquip_P4_Ratio"
    ]
  },
  {
    "name": "Modifier_StageAbility_670060_Sub",
    "realName": "Mechacore Component",
    "aim": "Buff",
    "desc": "If this unit is under the Shield effect, after the next attack, this unit consumes all \"Mechacore Component\" stacks and additionally triggers a random-Type \"Quake\" DMG.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MStage_670320_DOT",
    "realName": "Panacea",
    "aim": "Debuff",
    "desc": "At the start of the turn, takes DMG and restores HP for all allies. Charge: #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "_Layer"
    ]
  },
  {
    "name": "Modifier_StageAbility_670210_Count",
    "realName": "Relative Tracer",
    "aim": "Debuff",
    "desc": "Blasted #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count"
    ]
  },
  {
    "name": "Modifier_StageAbility_671410_Sub",
    "realName": "Fiction's Arbiter",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%. Additionally increases this effect by #2[i]% against Frozen enemy targets.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncreaseReal",
      "_DamageIncreaseFrozen"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2044140979\">Modifier_FantasticStory_BaseAbility_2010_EnterFever_ForShow</a>",
    "realName": "Surging Grit",
    "aim": "Buff",
    "desc": "After using Skill to attack an enemy target, deals a set amount of DMG to the targets adjacent to the attacked target.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-364255802\">Modifier_FantasticStory_BaseAbility_2010_BaseAddOn_ForShow</a>",
    "realName": "Grit Mechanics",
    "aim": "Buff",
    "desc": "After using Skill to attack enemy targets, every enemy target attacked additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"396795156\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub</a>",
    "realName": "Empty Air",
    "aim": "Buff",
    "desc": "Using Skill does not consume Skill Points.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1632199378\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub2</a>",
    "realName": "Feverish Surge",
    "aim": "Buff",
    "desc": "Skill and Ultimate DMG dealt increase by #1[i]% and SPD increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_BP_Dmgup_Ratio",
      "_Speedup_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1203635663\">Modifier_FantasticStory_BaseAbility_2010_plus2_sub</a>",
    "realName": "False Promises",
    "aim": "Buff",
    "desc": "Follow-Up ATK DMG dealt increases by #1[i]%. After launching a Follow-Up ATK, deals a set amount of DMG to every attacked enemy target and adjacent target.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2012_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1236148774\">Modifier_FantasticStory_BaseAbility_2010_plus3_sub</a>",
    "realName": "Hollow Hope",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%. When Weakness is Broken, the attacker's action advances by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2013_ADF_1",
      "DV_FantasticStory_PlusAbility_2013_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1900448438\">LC_23034_Sub2</a>",
    "realName": "Departing Anew",
    "aim": "Other",
    "desc": "\"Departing Anew\"'s Skill Point recovery effect cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_671730_Sub2",
    "realName": "Honeydew",
    "aim": "Buff",
    "desc": "During the next attack, deals extra Additional DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_RogueMagic_Level_RogueRage_SpeedUP",
    "realName": "Berserk",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%. This effect can stack.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio_PerLayer"
    ]
  },
  {
    "name": "MItem_408637",
    "realName": "Wrench Drenched Salad",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408638",
    "realName": "At Least We Gather for Now",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_Rogue_Knowledge_RogueMagic",
    "realName": "Brain in a Vat",
    "aim": "Buff",
    "desc": "Current Enlightenment Charge ratio: #1[i]%. If the Enlightenment Charge of \"Brain in a Vat\" reaches 100% when a character uses their Ultimate through a method other than \"Brain in a Vat,\" the Ultimate will be activated again, consuming 100% of the Enlightenment Charge.",
    "type": "Brain in a Vat",
    "perma": true,
    "params": [
      "MDF_EnergyBase"
    ]
  },
  {
    "name": "Modifier_StageAbility_671060_Shield",
    "realName": "Sentimental Guardian",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
    "type": "Barrier",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"88399756\">Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Empty Air",
    "aim": "Buff",
    "desc": "After using Ultimate to attack enemy targets, every enemy target attacked additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2011_ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1263632305\">Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn_ForShow</a>",
    "realName": "Grit Mechanics: False Promises",
    "aim": "Buff",
    "desc": "After launching a Follow-Up ATK, every enemy target attacked additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2012_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"243727462\">Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Hollow Hope",
    "aim": "Buff",
    "desc": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2013_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-731811966\">Modifier_LevelAbility_Activity_LuckyScroll_MindControl_Sub_Avatar</a>",
    "realName": "Stage Buff — \"Targeted Break\"",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]% (every rank additionally increases it by #1[i]%) and Weakness Break Efficiency by #4[i]%. When Breaking enemy target's Weakness, applies the attacker's Weakness Type to the target and adjacent targets, increases its Break DMG taken by #3[i]%, and deals Break DMG equal to #2[i]% of the attacker's Break DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_BreakDamageAddedRatioBase",
      "MDF_BreakDamageRatio",
      "MDF_StangeBreakRatio",
      "MDF_StanceBreakAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-370918338\">Modifier_LevelAbility_Activity_LuckyScroll_Shooter_Avatar</a>",
    "realName": "Stage Buff — \"Multi-Strike Shred\"",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% (every rank additionally increases it by #1[i]%). After every action, action advances \"Shadesever Bow\" that is about to appear on the action bar by #3[i]%. \"Shadesever Bow\" will attack enemies when taking action, and its DMG dealt increases according to the total rank (every rank increases DMG dealt by #2[i]%).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatio",
      "MDF_ExtraDamageRatio",
      "MDF_ActionDelay"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1951469461\">Modifier_LevelAbility_Activity_LuckyScroll_Mascot_Avatar</a>",
    "realName": "Stage Buff — \"Solved Departure\"",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% (every rank additionally increases it by #1[i]%). After attacking, for every 1 enemy target hit, deals DMG equals to #2[i]% of this unit's ATK to the enemy target hit with the highest Max HP, and increases the Toughness Reduction of this attack towards it by #3[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio",
      "MDF_ExtraDamageRatio",
      "MDF_ExtraStanceValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2100427190\">Modifier_LevelAbility_Activity_LuckyScroll_Claymore_Avatar</a>",
    "realName": "Stage Buff — \"Frenzied Absorption\"",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #2[i]% (every rank additionally increases it by #2[i]%) and every attack is guaranteed to CRIT. After using an attack, applies one instance of Additional DMG equal to #3[i]% of this unit's ATK that can trigger CRIT to the enemy target.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CriticalChanceAddedRatio",
      "MDF_CriticalDamageRatio",
      "MDF_ExtraDamageRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1306921760\">Modifier_Activity_LuckyScroll_Fantastic_Elite</a>",
    "realName": "Binding Obligation",
    "aim": "Buff",
    "desc": "When non-Elite enemies are defeated, this unit will take DMG equal to a certain percentage of this unit's Max HP.",
    "type": "Binding Obligation",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-818168354\">Modifier_Activity_LuckyScroll_Fantastic_Servant</a>",
    "realName": "Fate's Convergence",
    "aim": "Buff",
    "desc": "After being defeated, deal DMG to the Elite enemy target based on a certain percentage of its Max HP.",
    "type": "Fate's Convergence",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_672230_Sub2",
    "realName": "Observed",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_671570_Sub",
    "realName": "Self-Betrayer",
    "aim": "Buff",
    "desc": "Break DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Multipler2"
    ]
  },
  {
    "name": "Modifier_StageAbility_672540_Sub2",
    "realName": "Sand Retrograder",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "_SpeedAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_672810_Sub2",
    "realName": "Candelagraph Inspector",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]% and Effect Hit Rate by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "AttackRatio",
      "ProbabilityRatio"
    ]
  },
  {
    "name": "RogueBonusModifier_Enhance_S4",
    "realName": "Obsession",
    "aim": "Buff",
    "desc": "When the current team's total stacks are at #1[i], increases ATK by #2[i]% and Max HP by #3[i]%. Every target stacks up to #4[i] stack(s) max and loses #5[i] stack(s) at the end of the turn.",
    "type": null,
    "perma": true,
    "params": [
      "EnhanceSum",
      "AttackValue",
      "HPValue",
      "_MaxLayer",
      "_LoseLayer"
    ]
  },
  {
    "name": "StageAbility_616145_Modifier_Effect",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #1[i]%. Stacks will be cleared at the end of the turn.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "StageAbility_616146_Modifier_Effect",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Each stack reduces DMG dealt by #1[i]%. Stacks will be cleared at the end of the turn.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "StageAbility_616156_Modifier_Effect",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616157_Modifier_Effect",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "RogueBonusModifier_Halo_S4",
    "realName": "Critical Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%, stacking up to #3[i] time(s). This can be inherited by an ally target at the beginning of the next turn. All stacks will be removed if any ally target is attacked.",
    "type": "Critical Boost",
    "perma": false,
    "params": [
      "_CriticalChance",
      "_CriticalDamage",
      "_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_616446_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_616454_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, stacking up to #2[i] time(s).",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "StageAbility_616457_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%, up to #2[i] stack(s).",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1436064963\">MModifier_Monster_W4_Scholar_Activity_BookTarget</a>",
    "realName": "Ignited Flame",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": "Ignited Flame",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"254716271\">MStrongChallengeEX_Talent_StageAbility_TGT_029</a>",
    "realName": "Cheat Sheet",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "MItem_402031",
    "realName": "Flaming Chili Sauce",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]% and ATK by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "RogueBonusModifier_RuinBlood_S4",
    "realName": "Blazar",
    "aim": "Buff",
    "desc": "Current Charge is #1[i].",
    "type": "Blazar",
    "perma": true,
    "params": [
      "_BloodValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_616910_Resonance_S4_Enemy",
    "realName": "Harmonize",
    "aim": "Debuff",
    "desc": "At the start of the turn, if this unit is Weakness Broken, then every stack will cause this unit to take #1[i]% base DMG as Break DMG, up to #2[i] stack(s). Clears all stacks when recovering from Weakness Broken state.",
    "type": "Harmonize",
    "perma": false,
    "params": [
      "StageAbility_616910_BreakDamageRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Modifier_StageAbility_616953_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_616954_Effect",
    "realName": "Break Effect Boost",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_616956_Enemy_Effect",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "StageAbility_673140_Modifier_Sub2",
    "realName": "Oathkeeper",
    "aim": "Buff",
    "desc": "Gains 1 extra turn at the end of the turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_673140_Modifier_Effect",
    "realName": "Oathkeeper",
    "aim": "Buff",
    "desc": "After using an attack, deals Additional DMG equal to #1[i]% of ATK to the attacked target. For each stack of \"Obsession\" on allies, increases this DMG by #2[i]%.",
    "type": "Extra Turn",
    "perma": true,
    "params": [
      "ADF_3",
      "ADF_4"
    ]
  },
  {
    "name": "StageAbility_616546_Modifier_Sub2",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]% and increases the HP restored by #2[i]%.",
    "type": "DMG Reduction",
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_616540_Modifier_Sub2",
    "realName": "Compact Blaze",
    "aim": "Buff",
    "desc": "Increases the DMG multiplier of \"Blazar\" by #1[i]% of the original multiplier.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncreaseTotal"
    ]
  },
  {
    "name": "StageAbility_616555_Modifier_Effect",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616556_Modifier_Effect",
    "realName": "Effect RES Boost",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": "Effect RES Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2056335473\">LC_23036_Effect</a>",
    "realName": "Brocade",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[f1]%.",
    "type": "Brocade",
    "perma": false,
    "params": [
      "_CritDamageRatioTotal",
      "_NormalDamageRatioTotal"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_34_ExceedSP",
    "realName": "Energy Overflow",
    "aim": "Other",
    "desc": "#1[i] extra Energy. This will be consumed first when unleashing Ultimate.",
    "type": "Energy Overflow",
    "perma": true,
    "params": [
      "EntityStockSPForShow"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_34_InsertAction",
    "realName": "Extra Action",
    "aim": "Buff",
    "desc": "You will have an extra action after taking an action.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1981060014\">Modifier_FantasticStory_BaseAbility_2060_EnterFever_sub</a>",
    "realName": "Surging Grit",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%. When defeated, additionally accumulate 1 stack of \"Resound.\"",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "DV_Ratio_Get"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1883595095\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever_BirdAtkCount</a>",
    "realName": "\"Resound\"",
    "aim": "Buff",
    "desc": "#1[i] stack(s) of \"Resound\" have been accumulated. Consume all \"Resound\" stacks when entering Surging Grit or having accumulated #2[i] or more stacks during Surging Grit. Every \"Resound\" stack deals 1 instance of a set amount of DMG to a random enemy target.",
    "type": null,
    "perma": true,
    "params": [
      "_Current_Layer",
      "DV_FantasticStory_BaseAbility_2060_EnterFever_P1_Value"
    ]
  },
  {
    "name": "StageAbility_616641_Modifier_Effect",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "Decreases ATK by #1[i]%.",
    "type": "ATK Reduction",
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "StageAbility_616642_Modifier_Effect",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "StageAbility_616643_Modifier_Sub_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "StageAbility_616651_Modifier_Sub_Avatar",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "StageAbility_616656_Modifier_Effect",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": "DEF Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616657_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1010385523\">Modifier_LevelAbility_Activity_LuckyScroll_MindControl_Sub_Weak</a>",
    "realName": "Weakness Implant",
    "aim": "Buff",
    "desc": "Becomes implanted with the Weakness of the attacker's Type and increases Break DMG taken by #1[i]%.",
    "type": "Weakness Implant",
    "perma": true,
    "params": [
      "MDF_StangeBreakRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-54375589\">Modifier_FantasticStory_BaseAbility_2060_plus1_sub2</a>",
    "realName": "Radiance",
    "aim": "Debuff",
    "desc": "When defeated, there is a #1[i]% chance to additionally accumulate 1 \"Resound\" stack.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2061_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"514411026\">Modifier_FantasticStory_BaseAbility_2060_plus2_sub</a>",
    "realName": "Universality",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%. When all \"Resound\" is consumed in an attack, recover 1 Skill Point.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2062_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"391899273\">Modifier_FantasticStory_BaseAbility_2060_plus3_sub</a>",
    "realName": "Potential",
    "aim": "Buff",
    "desc": "DMG dealt by using Ultimate increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2063_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1271014269\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever_ForShow</a>",
    "realName": "Concordant Truce",
    "aim": "Debuff",
    "desc": "Accumulate 1 stack of \"Resound\" when defeated.",
    "type": "Vulnerability",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"278893341\">Modifier_FantasticStory_BaseAbility_2060_Plus1AddOn_ForShow</a>",
    "realName": "Grit Mechanics_Radiance",
    "aim": "Buff",
    "desc": "After launching a Follow-Up ATK, every enemy target attacked additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2061_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"155042142\">Modifier_FantasticStory_BaseAbility_2060_Plus2AddOn_ForShow</a>",
    "realName": "Grit Mechanics_Universality",
    "aim": "Buff",
    "desc": "After using Skill to attack enemy targets, every enemy target attacked additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2062_ADF_2"
    ]
  },
  {
    "name": "BUYONG_Modifier_FantasticStory_BaseAbility_2060_Plus3AddOn_ForShow",
    "realName": "Grit Mechanics_Potential",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-398018983\">Modifier_FantasticStory_BaseAbility_2060_BaseAddOn_ForShow</a>",
    "realName": "Grit Mechanics",
    "aim": "Buff",
    "desc": "After using Ultimate to attack enemy targets, every enemy target attacked additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_Ratio"
    ]
  },
  {
    "name": "StageAbility_616132_Modifier_ExtraTurn_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MFarmRelic_104312_Sub",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Skill DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"664212862\">Modifier_LevelAbility_Activity_LuckyScroll_Mascot_AllDamageTypeTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-327496768\">LC_23038_AuraBonus</a>",
    "realName": "Presage",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[f1]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-940045420\">LC_23038_AuraBonus_Buff</a>",
    "realName": "Presage",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[f1]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "RogueBonusModifier_Curse_S4",
    "realName": "Murmur",
    "aim": "Debuff",
    "desc": "Takes Wind DoT equal to Charge at the start of the turn. Current Charge is at #1[i], currently at #2[i]% of clear threshold.",
    "type": null,
    "perma": true,
    "params": [
      "RecordValue",
      "RecordPercent"
    ]
  },
  {
    "name": "StageAbility_616246_Modifier_Effect",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Each stack decreases DMG dealt by #1[i]%.",
    "type": "Weaken",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616254_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616255_Modifier_Effect",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616256_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_633023_Character",
    "realName": "The Story Presently",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]%, CRIT DMG increases by #2[i]%. After using an attack, deals Additional DMG equal to #3[i]% the sum of Max HP, DEF, and ATK to the attacked target(s).",
    "type": null,
    "perma": true,
    "params": [
      "_CriticalChanceTotal",
      "_CriticalDamageTotal",
      "_DamageTotal"
    ]
  },
  {
    "name": "Modifier_StageAbility_633024_ReduceDamage",
    "realName": "Automated Experience",
    "aim": "Debuff",
    "desc": "DMG dealt decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_AttackReduce"
    ]
  },
  {
    "name": "Modifier_StageAbility_673280_Character",
    "realName": "Whispering Woods",
    "aim": "Other",
    "desc": "Still need to use Ultimate #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "_Layer"
    ]
  },
  {
    "name": "Modifier_StageAbility_673420_Character_Count",
    "realName": "Gray River's Representative",
    "aim": "Other",
    "desc": "Gained a total of #1[i] stacks of Critical Boost. Gain a total of #2[i] stacks to trigger the effect.",
    "type": null,
    "perma": true,
    "params": [
      "_Count",
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_673470_Mark",
    "realName": "Beast Tongue",
    "aim": "Other",
    "desc": "After receiving a total of #1[i] attacks or upon being defeated, deals DMG to this unit and adjacent units and increases CRIT DMG and SPD of all targets.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_673470_Effect",
    "realName": "Beastkin",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]% and SPD by #2[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "ADF_4",
      "ADF_5"
    ]
  },
  {
    "name": "Modifier_StageAbility_673210_Count",
    "realName": "Growth-Ring Carver",
    "aim": "Debuff",
    "desc": "Blasted #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count"
    ]
  },
  {
    "name": "Modifier_StageAbility_673560_Character",
    "realName": "Conflict Author",
    "aim": "Other",
    "desc": "Lost #1[i]% Max HP in total.",
    "type": null,
    "perma": true,
    "params": [
      "CurrentLoseRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_673560_Character_Revive",
    "realName": "Conflict Author",
    "aim": "Other",
    "desc": "Consumes #1[i]% of Max HP at the start of turn.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_673580_Mark",
    "realName": "Sky Priest",
    "aim": "Other",
    "desc": "When there are #1[i] stack(s), increases Ultimate DMG dealt by #2[i]%, lasting until the turn ends. Also, deals DMG to all enemies.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "Modifier_StageAbility_673580_TempEffect",
    "realName": "Sky Priest",
    "aim": "Buff",
    "desc": "Increases the Ultimate DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-906898841\">Enemy_W4_Mascot_ListenCorrectInteract_Activity_DeathMark</a>",
    "realName": "Brainteaser",
    "aim": "Other",
    "desc": "The Spirithief presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with the corresponding \"Skill\" or \"Ultimate.\" If the correct attack type is used to respond to Spirithief's brainteaser, Spirithief will immediately leave the field. When Spirithief is attacked with a \"Basic ATK\" or an attack from friendly targets, it will change the brainteaser.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_673790_Modifier_Sub_Enemy_CTRL",
    "realName": "Cocoon",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns. Action is delayed at the start of the turn by #1[i]% and takes DMG equal to #2[i]% base DMG.",
    "type": "Cocoon",
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_3"
    ]
  },
  {
    "name": "StageSpecialAbility_20412061_InBattle_BEBonus",
    "realName": "Silver Wolf's Cheat Code",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_674140_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_674160_Sub",
    "realName": "Brewer of Bitter Memories",
    "aim": "Buff",
    "desc": "The next attack will be considered as a Follow-Up ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_674470_Sub",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is additionally increased by #2[i]% against ally targets in the \"Butterfly Soul\" effect.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncreaseReal",
      "_DamageIncreaseButterfly"
    ]
  },
  {
    "name": "Modifier_StageAbility_675140_Effect",
    "realName": "Judge of the Nightveil",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]% and CRIT DMG dealt by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_675170_Effect",
    "realName": "Life-Giving Sculptor",
    "aim": "Buff",
    "desc": "Increases next Basic ATK/Skill DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_675180_Effect",
    "realName": "Ultimate DMG Boost",
    "aim": "Buff",
    "desc": "Increases Ultimate DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_675180_Effect2",
    "realName": "Memosprite DMG Boost",
    "aim": "Buff",
    "desc": "Memosprite DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3"
    ]
  },
  {
    "name": "Modifier_StageAbility_675190_Effect",
    "realName": "Increases RES PEN",
    "aim": "Buff",
    "desc": "Increases All-Type RES PEN by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_675250_Tear",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_675210_Sub2",
    "realName": "Observed",
    "aim": "Debuff",
    "desc": "Take Fire DMG at the beginning of each turn.",
    "type": "Burn",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1578671258\">Relic_123_Sub3</a>",
    "realName": "Hero of Triumphant Song",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-281803576\">Relic_124_Sub</a>",
    "realName": "Poet of Mourning Collapse",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"394065750\">LC_20022_Sub2</a>",
    "realName": "Commemoration",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to 4 stacks.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P1_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-277720014\">LC_21050_Sub2</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-833650413\">LC_21051_Sub</a>",
    "realName": "Basic ATK DMG Boost",
    "aim": "Buff",
    "desc": "Basic ATK DMG increases by #1[i]%.",
    "type": "Basic ATK DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1410775302\">LC_21052_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "MItem_401032",
    "realName": "Rough-Brew Ambrosia",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402032",
    "realName": "Dromas Steak",
    "aim": "Buff",
    "desc": "DoT dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402033",
    "realName": "Kremnos Shield",
    "aim": "Buff",
    "desc": "Increases all allies' DEF by #1[i]% and Shield Effect obtained by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403013",
    "realName": "Veil Bundle",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403013_2",
    "realName": "Veil Bundle",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403013_3",
    "realName": "Veil Bundle",
    "aim": "Buff",
    "desc": "Effect Hit Rate increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408437_1",
    "realName": "Steelclaw Dagger",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_4"
    ]
  },
  {
    "name": "MItem_408438",
    "realName": "Chrysos Heir Dolium",
    "aim": "Buff",
    "desc": "The DMG dealt increases by #1[i]% and Memosprite Skill DMG dealt additionally increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_408639",
    "realName": "Greatsword of Kremnos",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_674950_Bonus",
    "realName": "Break Effect Boost",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_674620_AttackDown",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "DMG dealt decreases by #1[i]%.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "ADF_3"
    ]
  },
  {
    "name": "Modifier_StageAbility_674620_DefendDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "ADF_4"
    ]
  },
  {
    "name": "Modifier_StageAbility_674620_SpeedDown",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "SPD Reduction",
    "perma": false,
    "params": [
      "ADF_5"
    ]
  },
  {
    "name": "Modifier_StageAbility_675940_Sub2",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "_SpeedAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_675940_Sub3",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "_AttackAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_675590_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that offsets DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the ally character with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "MLevel_Rogue_Breeding_Cocoon_S4",
    "realName": "Soul Chrysalis",
    "aim": "Other",
    "desc": "Current Charge is #1[i]%. When Charge reaches #2[i]%, this effect is converted to \"Butterfly Soul.\"",
    "type": "Soul Chrysalis",
    "perma": true,
    "params": [
      "_CocoonEnergy2",
      "_MaxLayer"
    ]
  },
  {
    "name": "MLevel_Rogue_Breeding_Butterfly_S4",
    "realName": "Butterfly Soul",
    "aim": "Other",
    "desc": "Attacking with Basic ATK/Skill will deal additional True DMG. This can take effect #1[i] time(s).",
    "type": "Butterfly Soul",
    "perma": true,
    "params": [
      "MDF_CurrentLayer"
    ]
  },
  {
    "name": "StageAbility_616732_Modifier_Sub2",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Total"
    ]
  },
  {
    "name": "Modifier_StageAbility_673640_FirstPowerUp",
    "realName": "Wounds of Plenty",
    "aim": "Buff",
    "desc": "Deals \"Aftertaste\" DMG after using an attack. Will trigger for a max of #1[i] more attacks.",
    "type": null,
    "perma": true,
    "params": [
      "Limit_Count"
    ]
  },
  {
    "name": "Modifier_StageAbility_673640_PowerUp",
    "realName": "Wounds of Plenty",
    "aim": "Buff",
    "desc": "Increases the multiplier of \"Aftertaste\" DMG dealt by #1[i]% of the original DMG multiplier.",
    "type": null,
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "Modifier_StageAbility_633004_AddDamage",
    "realName": "Lapispeakers' Flakes",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "_DamageAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_673870_Count",
    "realName": "Caprism",
    "aim": "Other",
    "desc": "Already used the Ultimate #1[i] time(s). Re-activate this effect after #2[i] more time(s).",
    "type": null,
    "perma": true,
    "params": [
      "_Count",
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_673860_OverCharge",
    "realName": "Overclock",
    "aim": "Buff",
    "desc": "After using an Ultimate to attack while in the \"Overclock\" state, deal \"Aftertaste\" DMG #1[i] time(s). After using the Ultimate #2[i] more time(s), exit the \"Overclock\" state.",
    "type": "Overclock",
    "perma": true,
    "params": [
      "ADF_2",
      "_Count"
    ]
  },
  {
    "name": "Modifier_StageAbility_673860_Count",
    "realName": "Overclock",
    "aim": "Other",
    "desc": "While not in the \"Overclock\" state, use their Ultimate #1[i] more time(s) to enter the \"Overclock\" state.",
    "type": null,
    "perma": true,
    "params": [
      "LeftCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"999661832\">M_MissionBattleEvent60022_AddDamage</a>",
    "realName": "Blood of \"Strife\"",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "Blood of \"Strife\"",
    "perma": true,
    "params": [
      "_DamageRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1732946835\">Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow</a>",
    "realName": "Grit Mechanics",
    "aim": "Buff",
    "desc": "After using Basic ATK or Ultimate to attack enemy targets, every enemy target hit additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1102093119\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow</a>",
    "realName": "Concordant Truce",
    "aim": "Buff",
    "desc": "When using a Basic ATK or an Ultimate to attack an enemy target, inflicts the target with \"Shatter,\" stacking up to #1[i] time(s). At the start of the target's turn or when the target is defeated, deals a set amount of DMG to the target and adjacent targets based on the number of \"Shatter\" stacks.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>",
    "realName": "Shatter",
    "aim": "Debuff",
    "desc": "When this unit's turn starts or when defeated by any unit, this unit takes a set amount of DMG based on the number of \"Shatter\" stacks.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>",
    "realName": "Surging Grit",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_Ratio_Get"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>",
    "realName": "Energy Overflow",
    "aim": "Other",
    "desc": "#1[i] extra Energy. This will be consumed first when unleashing Ultimate.",
    "type": "Energy Overflow",
    "perma": true,
    "params": [
      "EntityStockSPForShow"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-31325999\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Evince",
    "aim": "Buff",
    "desc": "After using Skill or launching a Follow-Up ATK, every enemy target hit additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2111_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"612720754\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Gnosis",
    "aim": "Debuff",
    "desc": "When a Weakness is Broken, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2112_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1805319333\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Sanity",
    "aim": "Buff",
    "desc": "When receiving an attack or losing HP, allies will additionally accumulate #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2113_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"547730031\">Modifier_FantasticStory_BaseAbility_2110_plus1_sub</a>",
    "realName": "Evince",
    "aim": "Buff",
    "desc": "Use Skills or launching a Follow-Up ATK against enemy targets with \"Shatter\" can immediately trigger \"Shatter.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2052424996\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub2</a>",
    "realName": "Gnosis",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2112_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1184097523\">Modifier_FantasticStory_BaseAbility_2110_plus3_sub</a>",
    "realName": "Sanity",
    "aim": "Buff",
    "desc": "Consumes this unit's current HP by #1[i]% when using a Skill. After using Skill, restores #2[i]% HP equal to this unit's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2113_ADF_1",
      "DV_FantasticStory_PlusAbility_2113_ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_633201_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that offsets DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the ally character with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_633202_Effect",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that offsets DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the ally character with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Standard_DOT_Burn_633206",
    "realName": "Necrosis",
    "aim": "Debuff",
    "desc": "Within a certain number of turns, takes Fire DMG at the beginning of each turn and causes the Burn state other than \"Necrosis\" to immediately produce a certain percentage of DMG.",
    "type": "Necrosis",
    "perma": false
  },
  {
    "name": "Modifier_StageAbility_633208_ReduceDamage",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "DMG dealt decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_633209_Effect",
    "realName": "The Story Presently",
    "aim": "Buff",
    "desc": "Increases HP by #1[i], SPD by #2[i], ATK by #3[i], and DEF by #4[i].",
    "type": null,
    "perma": true,
    "params": [
      "Get_MaxHP",
      "Get_Speed",
      "Get_Attack",
      "Get_Defence"
    ]
  },
  {
    "name": "Modifier_StageAbility_633210_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_4"
    ]
  },
  {
    "name": "Modifier_StageAbility_633213_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_633216_WindMark",
    "realName": "Sunstorm",
    "aim": "Debuff",
    "desc": "After receiving an attack from a Lightning ally target, ally targets deal Wind Additional DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_633217_Effect",
    "realName": "Excitation",
    "aim": "Buff",
    "desc": "After attacking with a Basic ATK/Skill, deals Quantum Additional DMG with a chance of inflicting the Entanglement state on the attacked target.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_633221_AddDamage",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%, lasting until the end of the next turn.",
    "type": null,
    "perma": true,
    "params": [
      "DamageRatio"
    ]
  },
  {
    "name": "MLevel_StageAbility_633301_Modifier_Sub",
    "realName": "Cavity System Model",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633302_Modifier_Sub",
    "realName": "Plaguenest",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_633303_Modifier_Sub",
    "realName": "Regulation Seal",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]% and CRIT DMG by #2[i]% and makes the action bar unviewable.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_633304_Modifier_Sub",
    "realName": "The Sleepless Owl",
    "aim": "Buff",
    "desc": "The HP restored and Shield Effect increase by #1[i]%, DMG received decreases by #2[i]%, and the attacked enemy target has a #3[i]% chance of selecting the wrong target.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_633305_Modifier_Sub",
    "realName": "Carnival's Tail",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MLevel_StageAbility_633306_Modifier_Sub",
    "realName": "Moment of Tranquility",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_673140_Modifier_Sub",
    "realName": "Oathkeeper",
    "aim": "Other",
    "desc": "After #1[i] turn(s), the lineup's first character and memosprite get their action advanced by 100%.",
    "type": null,
    "perma": true,
    "params": [
      "LeftCount"
    ]
  },
  {
    "name": "MActivity_StarFightActivity_02_AddAttackModifier",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Activity_StarFightActivity_03_AddAttack",
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
    "name": "Activity_StarFightActivity_04_Bonus",
    "realName": "Break DMG Vulnerability",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Activity_StarFightActivity_04_SuperBonus",
    "realName": "Break Efficiency Boost",
    "aim": "Buff",
    "desc": "Each stack increases Weakness Break Efficiency by #1[i]%.",
    "type": "Break Efficiency Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MActivity_StarFightActivity_05_BEBonusModifier",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AddAttack"
    ]
  },
  {
    "name": "Activity_StarFightActivity_06_ServantDamage",
    "realName": "Summon DMG Boost",
    "aim": "Buff",
    "desc": "The summon's DMG dealt increases by #1[i]%.",
    "type": "Summon DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyFinalValue"
    ]
  },
  {
    "name": "Activity_StarFightActivity_07_InCTRLModifier",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyFinalValue"
    ]
  },
  {
    "name": "Activity_StarFightActivity_08_DotDamage",
    "realName": "Toxic",
    "aim": "Debuff",
    "desc": "After receiving an attack while having #2[i] stack(s) of \"Toxic,\" this unit and adjacent targets immediately receive DMG equal to #1[i]% of the DoT taken by it.",
    "type": "Toxic",
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_633212_ExtraDamage",
    "realName": "Dreamdive Can",
    "aim": "Buff",
    "desc": "After attacking in the next turn, additionally deals True DMG equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": true,
    "params": [
      "DamageRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_633222_Character",
    "realName": "Road to Comets",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and increases SPD by #2[i]% and provided Shield Effect by #3[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2",
      "MDF_3"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_35_sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_HPAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_633138_Tear",
    "realName": "Absolute Failure Prescription",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1248014501\">LC_23036_Effect_Servant</a>",
    "realName": "Brocade",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "_CritDamageRatioTotal",
      "_NormalDamageRatioTotal"
    ]
  },
  {
    "name": "StageAbility_634000_Modifier_Effect1",
    "realName": "Basic Night Effect",
    "aim": "Buff",
    "desc": "Increases final DMG dealt by #1[i]%.",
    "type": "DMG Greatly Boosted",
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "StageAbility_634000_Modifier_Effect2",
    "realName": "Basic Night Effect",
    "aim": "Buff",
    "desc": "Increases final DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "StageAbility_634010_Modifier_Effect",
    "realName": "Dreamlike Goldweaver",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_634010_Modifier_ActiveCount",
    "realName": "Dreamlike Goldweaver",
    "aim": "Other",
    "desc": "Effect activates after using #1[i] attack(s).",
    "type": null,
    "perma": true,
    "params": [
      "LeftCount"
    ]
  },
  {
    "name": "Modifier_StageAbility_633218_Enemy_Fatigue",
    "realName": "Revitalization-310",
    "aim": "Debuff",
    "desc": "Each stack decreases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1344178785\">LC_24005_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "StageAbility_634017_Modifier_Effect",
    "realName": "Weave Threads of Beauty",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_634030_Modifier_Effect1",
    "realName": "Meeting Death's Palm",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_634030_Modifier_Effect2",
    "realName": "Meeting Death's Palm",
    "aim": "Buff",
    "desc": "Increases final DMG dealt by #1[i]%, lasting until after the next attack is used.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_634037_Modifier_Effect",
    "realName": "New Sprout on Dead Branch",
    "aim": "Buff",
    "desc": "Each stack increases Max HP by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_634038_Modifier_Effect",
    "realName": "Butterflies on the Returning Road",
    "aim": "Buff",
    "desc": "Each stack increases final DMG dealt by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_634020_Modifier_Effect",
    "realName": "Connected Infinite Gates",
    "aim": "Buff",
    "desc": "Increases final DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "StageAbility_634028_Modifier_Effect",
    "realName": "A Prophecy Continuing Myths",
    "aim": "Buff",
    "desc": "Each stack increases final DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_634040_Modifier_Effect",
    "realName": "Crowned in Blood",
    "aim": "Buff",
    "desc": "At the end of the turn, restores HP equal to #2[i]% of this unit's Max HP and increases final DMG dealt by #1[i]%.",
    "type": "Healing Over Time, DMG Boost",
    "perma": true,
    "params": [
      "MDF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_634043_Modifier_Effect",
    "realName": "Shield of Triumphant Return",
    "aim": "Buff",
    "desc": "After using an attack, restores HP equal to #2[i]% of this unit's Max HP. This effect can be activated #1[i] more time(s).",
    "type": null,
    "perma": true,
    "params": [
      "AttackCount",
      "HealAmount"
    ]
  },
  {
    "name": "StageAbility_634047_Modifier_Effect2",
    "realName": "Slay the Honorless Tyrant",
    "aim": "Buff",
    "desc": "Increases the HP restored by #1[f1]% and final DMG dealt by #2[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "HealRatio",
      "DamageRatio"
    ]
  },
  {
    "name": "StageAbility_634048_Modifier_Effect",
    "realName": "Slay the Maddened God",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "_HPDelta"
    ]
  },
  {
    "name": "StageAbility_634050_Modifier_Dot1",
    "realName": "Swan Song",
    "aim": "Debuff",
    "desc": "Take Additional Physical DMG at the start of each turn.",
    "type": "Bleed",
    "perma": true
  },
  {
    "name": "StageAbility_634050_Modifier_Dot2",
    "realName": "Swan Song",
    "aim": "Debuff",
    "desc": "Take Physical DoT at the start of each turn.",
    "type": "Bleed",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1342069688\">RogueBattleevent_Ruin_S4_MaxHP</a>",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_HPAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1409801640\">RogueBattleevent_Ruin_S4_HealHP</a>",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores #1[i]% of missing HP at the beginning of each turn.",
    "type": null,
    "perma": true,
    "params": [
      "HealRatio"
    ]
  },
  {
    "name": "StageAbility_634027_Modifier_Effect",
    "realName": "A Prophecy Leaving Hope",
    "aim": "Buff",
    "desc": "Each stack restores HP equal to #1[i]% of respective Max HP at the start of the next turn.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616731_Modifier_Sub2",
    "realName": "Basic ATK and Skill DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt by Basic ATK and Skill increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_616754_Modifier_Effect",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Increases DEF by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616755_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616840_Modifier_Effect",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616842_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "StageAbility_616844_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616854_Modifier_Effect",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616855_Modifier_Effect",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-969142096\">LC_23041_Sub</a>",
    "realName": "DEF Reduced",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_673150_Modifier_Sub",
    "realName": "Flower of Annihilation Tally",
    "aim": "Other",
    "desc": "Flower of Annihilation's Charge is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "Damage_Total"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-375683577\">Modifier_FantasticStory_BaseAbility_2010_plus4_sub</a>",
    "realName": "Hierophany",
    "aim": "Buff",
    "desc": "Using Skill consumes HP equal to #1[i]% of this unit's Max HP. Additionally, after using Skill, restores HP equal to #2[i]% of this unit's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2014_ADF_1",
      "DV_FantasticStory_PlusAbility_2014_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-854888599\">Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Hierophany",
    "aim": "Buff",
    "desc": "When receiving an attack or losing HP, allies will additionally accumulate #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2014_ADF_3"
    ]
  },
  {
    "name": "Modifier_StageAbility_673870_Upgrade",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases Basic ATK/Skill/Ultimate DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageAddedRatio"
    ]
  },
  {
    "name": "StageAbility_616631_Modifier_Sub_ForShow",
    "realName": "Ocean Colonel: World of Yesterday",
    "aim": "Buff",
    "desc": "For the next #2[i] attacks launched, additionally deals #1[i] instances of \"Aftertaste\" DMG.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ExtraCount"
    ]
  },
  {
    "name": "Modifier_StageAbility_633215_Quantum_Damage",
    "realName": "End of an Altruist",
    "aim": "Buff",
    "desc": "After launching the next attack, apply #1[i] Quantum DMG to attacked targets.",
    "type": null,
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "StageAbility_616432_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]% until this unit is attacked.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_616432_Modifier_Effect2",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "The next attack's DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_StageAbility_673280_Enemy",
    "realName": "Whispering Woods",
    "aim": "Debuff",
    "desc": "When \"Murmur\" DMG is triggered, deals DMG equal to #1[i]% of \"Murmur\" original DMG to adjacent enemy targets. Increases DMG dealt by \"Murmur\" by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2",
      "UltraBoost"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2009288629\">Standard_WeakType_Fire</a>",
    "realName": "Additional Fire Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Fire Weakness.",
    "type": "Implant Fire Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1497676034\">Standard_WeakType_Ice</a>",
    "realName": "Additional Ice Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Ice Weakness.",
    "type": "Implant Ice Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1938125975\">Standard_WeakType_Wind</a>",
    "realName": "Additional Wind Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Wind Weakness.",
    "type": "Implant Wind Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1724958950\">Standard_WeakType_Physical</a>",
    "realName": "Additional Physical Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Physical Weakness.",
    "type": "Implant Physical Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1930557999\">Standard_WeakType_Thunder</a>",
    "realName": "Additional Lightning Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Lightning Weakness.",
    "type": "Implant Lightning Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1012677236\">Standard_WeakType_Quantum</a>",
    "realName": "Additional Quantum Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Quantum Weakness.",
    "type": "Implant Quantum Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1118024096\">Standard_WeakType_Imaginary</a>",
    "realName": "Additional Imaginary Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Imaginary Weakness.",
    "type": "Implant Imaginary Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_616745_Modifier_Sub2",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "Each stack decreases DMG taken by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": "DMG Mitigation",
    "perma": true,
    "params": [
      "#ADF_1",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_616444_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"892418165\">Standard_CTRL_Frozen_616120</a>",
    "realName": "Frozen",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn. After being attacked by a memosprite, additionally takes True DMG equal to #2[i]% of Max HP. Can trigger #1[i] more time(s).",
    "type": "Frozen",
    "perma": false,
    "params": [
      "LeftCount",
      "ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2044111722\">MStrongChallengeEX_Talent_StageAbility_TGT_044</a>",
    "realName": "Teach By Banaxample",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CriticalDamage",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_675840_Modifier_Effect",
    "realName": "Child of Spiral",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%. After using an attack, deals Additional DMG equal to #2[i]% of ATK to the enemy target with the highest HP among the targets attacked.",
    "type": null,
    "perma": false,
    "params": [
      "_AttackAddedRatio",
      "_DamagePercentage"
    ]
  },
  {
    "name": "Modifier_StageAbility_675810_Sub2",
    "realName": "Sand Scribe",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and ATK increases by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "_SpeedAddedRatio",
      "_AttackAddedRatio"
    ]
  },
  {
    "name": "StageAbility_675760_Modifier_Sub",
    "realName": "Thief Musician",
    "aim": "Buff",
    "desc": "After the next attack, deals \"Aftertaste\" DMG equal to #1[i]% of ATK to the attacked target.",
    "type": null,
    "perma": false,
    "params": [
      "_TasteDamage"
    ]
  },
  {
    "name": "Modifier_StageAbility_675860_Sub2",
    "realName": "Lotophagism",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and increases the DMG multiplier of \"Aftertaste\" DMG dealt by #2[i]% of the original multiplier.",
    "type": null,
    "perma": false,
    "params": [
      "AttackRatio",
      "DMGUP_675860"
    ]
  },
  {
    "name": "StageAbility_616831_Modifier_Effect",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_37_sub",
    "realName": "Memory Imprint",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. After attacking, increases #2[i] Hits Per Action to \"Memory Turbulence,\" up to a max of #3[i] hit(s).",
    "type": "Memory Imprint",
    "perma": true,
    "params": [
      "DV_DmgPercentage_get",
      "DV_Count",
      "DV_CountMax"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"906922784\">Modifier_FantasticStory_BaseAbility_2060_plus4_sub</a>",
    "realName": "Divine Score",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2064_ADF_1"
    ]
  },
  {
    "name": "StageAbility_616241_Modifier_Sub",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "DamageDownRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_633212_Mark",
    "realName": "Chord",
    "aim": "Buff",
    "desc": "Deals Additional DMG to the attacked target after the next time Basic ATK is used. Each stack will increase the Additional DMG.",
    "type": "Chord",
    "perma": true
  },
  {
    "name": "Activity_StarFightActivity_09_1st",
    "realName": "Max HP Boost",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MActivity_StarFightActivity_02_AddAttackModifier_ForServant",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Activity_StarFightActivity_09_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-414774492\">LC_23040_Main02</a>",
    "realName": "Death Flower",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the target's DEF.",
    "type": "Death Flower",
    "perma": true,
    "params": [
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1983557807\">LC_23040_Sub</a>",
    "realName": "Death Flower",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the target's DEF.",
    "type": "Death Flower",
    "perma": true,
    "params": [
      "MEquip_23040_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_675870_Character",
    "realName": "Ultimate DMG Boost",
    "aim": "Buff",
    "desc": "Increases Ultimate DMG by #1[i]%, lasting until after the Ultimate is cast.",
    "type": null,
    "perma": true,
    "params": [
      "Value"
    ]
  },
  {
    "name": "Modifier_StageAbility_675680_Sub2",
    "realName": "Sophist of Gods",
    "aim": "Buff",
    "desc": "After the next attack, deals \"Aftertaste\" DMG equal to #2[i]% of ATK to the attacked target #1[i] time(s).",
    "type": null,
    "perma": false,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_674850_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_674810_Modifier_Effect",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "_DamageIncrease"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1169158629\">LC_23042_AllDamageTypeTakenRatio</a>",
    "realName": "Tolerant",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[f1]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1449955790\">Relic_125_Bonus</a>",
    "realName": "Gentle Rain",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "Gentle Rain",
    "perma": false,
    "params": [
      "SkillRelic_125_4_P1_SpeedAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"149540788\">Relic_125_Bonus2</a>",
    "realName": "Warrior Goddess of Sun and Thunder",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "SkillRelic_125_4_P2_DamageAddRatio"
    ]
  },
  {
    "name": "MFarmRelic_104313_DamageAddedRatio",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "DamageAddedRatio",
      "MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"840145864\">LC_23046_Bonus</a>",
    "realName": "Hrunting",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-598797650\">LC_23046_Bonus02</a>",
    "realName": "Hrunting",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "#SkillEquip_P5_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-254264378\">LC_23043_Sub</a>",
    "realName": "Bamboozle",
    "aim": "Debuff",
    "desc": "Decreases DEF by #1[i]%.",
    "type": "Bamboozle",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DefenceDown"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"409362716\">LC_23043_Sub2</a>",
    "realName": "Theft",
    "aim": "Debuff",
    "desc": "Decreases DEF by #1[i]%.",
    "type": "Theft",
    "perma": false,
    "params": [
      "#SkillEquip_P6_DefenceDown"
    ]
  },
  {
    "name": "Standard_DOT_Poison_633224",
    "realName": "Beckon",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "Modifier_StageAbility_633225_LightMark",
    "realName": "True",
    "aim": "Other",
    "desc": "After receiving an attack from a character on the Path of Nihility, removes the mark and additionally deals DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_633225_DarkMark",
    "realName": "False",
    "aim": "Other",
    "desc": "After receiving an attack from a character on the Path of The Hunt, removes the mark and additionally deals DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_633226_DamageIncrease",
    "realName": "Intoxicate",
    "aim": "Buff",
    "desc": "The Counter DMG dealt increases by #1[i]%. Consumes 1 stack every time a Counter is used.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncrease"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1013040664\">LC_21054_Sub</a>",
    "realName": "Outgoing Healing Boost",
    "aim": "Buff",
    "desc": "Outgoing Healing increases by #1[i]%.",
    "type": "Outgoing Healing Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_HealRatio"
    ]
  },
  {
    "name": "GridFight_Natasha_Present1",
    "realName": "Gift",
    "aim": "Buff",
    "desc": "Restore HP when taking action. Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "Gift",
    "perma": false,
    "params": [
      "_DamageAddRatio",
      "_MaxLayer"
    ]
  },
  {
    "name": "StageAbility_673670_Modifier_Sub",
    "realName": "Jolly Bandit",
    "aim": "Buff",
    "desc": "The multiplier of \"Aftertaste\" DMG dealt increases by #1[i]% of the original DMG multiplier.",
    "type": null,
    "perma": true,
    "params": [
      "DamageIncrease"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1072784706\">Modifier_StageAbility_VS_Weapon_S2_001_AddWeak</a>",
    "realName": "Weakness Implant",
    "aim": "Debuff",
    "desc": "Implants a new Weakness.",
    "type": "Weakness Implant",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1634179944\">Modifier_StageAbility_VS_Weapon_S2_002_Fire</a>",
    "realName": "Fire Weakness",
    "aim": "Debuff",
    "desc": "Implants Fire Weakness.",
    "type": "Fire Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1919755003\">Modifier_StageAbility_VS_Weapon_S2_002_Ice</a>",
    "realName": "Ice Weakness",
    "aim": "Debuff",
    "desc": "Implants Ice Weakness.",
    "type": "Ice Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1845146218\">Modifier_StageAbility_VS_Weapon_S2_002_Wind</a>",
    "realName": "Wind Weakness",
    "aim": "Debuff",
    "desc": "Implants Wind Weakness",
    "type": "Wind Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1130909486\">Modifier_StageAbility_VS_Weapon_S2_002_Thunder</a>",
    "realName": "Lightning Weakness",
    "aim": "Debuff",
    "desc": "Implants Lightning Weakness.",
    "type": "Lightning Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1820882449\">Modifier_StageAbility_VS_Weapon_S2_002_Physical</a>",
    "realName": "Physical Weakness",
    "aim": "Debuff",
    "desc": "Implants Physical Weakness.",
    "type": "Physical Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"547395969\">Modifier_StageAbility_VS_Weapon_S2_002_Quantum</a>",
    "realName": "Quantum Weakness",
    "aim": "Debuff",
    "desc": "Implants Quantum Weakness.",
    "type": "Quantum Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"626002445\">Modifier_StageAbility_VS_Weapon_S2_002_Imaginary</a>",
    "realName": "Imaginary Weakness",
    "aim": "Debuff",
    "desc": "Implants Imaginary Weakness.",
    "type": "Imaginary Weakness",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"873444646\">StageAbility_VS_Weapon_S2_009_PLY_Modifier</a>",
    "realName": "Spear of Eternal Ice",
    "aim": "Other",
    "desc": "A total of #1[i] target(s) have been hit. Triggers the spear to attack after hitting #2[i] target(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Layer",
      "MDF_TotalKillNum"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1931300243\">StageAbility_VS_Weapon_S2_002_BOSS_Modifier</a>",
    "realName": "Mark of Ruin",
    "aim": "Debuff",
    "desc": "When the holder receives Break DMG, triggers \"Mark of Ruin\" to attack the holder and their teammate(s).",
    "type": "Mark of Ruin",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1342462866\">StageAbility_VS_Weapon_S2_002_BOSS_Modifier_Max</a>",
    "realName": "Mark of Ruin",
    "aim": "Debuff",
    "desc": "When the holder receives Break DMG, triggers \"Mark of Ruin\" to attack the holder and their teammate(s).",
    "type": "Mark of Ruin",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1097113523\">Modifier_StageAbility_VS_Weapon_S2_004_Insert_HPListener_Sub</a>",
    "realName": "Fiery Dimension",
    "aim": "Other",
    "desc": "At the start of the turn, consume HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_HPLoseRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-544913590\">Modifier_StageAbility_VS_Weapon_S2_004_Insert_HPListener_Sub_Enemy</a>",
    "realName": "Fiery Dimension",
    "aim": "Debuff",
    "desc": "Take Fire DMG at the beginning of the turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_VS_Weapon_S2_004_Insert_HPListener_Sub_Max",
    "realName": "Imaginary Dimension",
    "aim": "Other",
    "desc": "At the start of the turn, consume HP equal to #1[i]% of this character's Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_HPLoseRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_VS_Weapon_S2_004_Insert_HPListener_Sub_Enemy_Max",
    "realName": "Imaginary Dimension",
    "aim": "Debuff",
    "desc": "Take Imaginary DMG at the beginning of the turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-434968782\">StageAbility_VS_Weapon_S2_015_PLY_Permanent_Modifier</a>",
    "realName": "Kindest Benediction",
    "aim": "Buff",
    "desc": "Each stack increases the final DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DMGUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1808640542\">StageAbility_VS_Standard_PLY_Enhance_Modifier_009</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "CRIT DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1590384400\">StageAbility_VS_Standard_PLY_Enhance_Modifier_010</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1607162019\">StageAbility_VS_Standard_PLY_Enhance_Modifier_011</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-15294378\">StageAbility_VS_Standard_PLY_Enhance_Modifier_011_Sub</a>",
    "realName": "Team Bonus",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-151178779\">StageAbility_VS_Accessory_SC_PLY_FireAddedRatio</a>",
    "realName": "Benedictive Torch",
    "aim": "Buff",
    "desc": "Fire DMG dealt increases by #1[i]%.",
    "type": "Fire DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1361477766\">StageAbility_VS_Accessory_SC_PLY_IceAddedRatio</a>",
    "realName": "Evergreen Spring",
    "aim": "Buff",
    "desc": "Ice DMG dealt increases by #1[i]%.",
    "type": "Ice DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-509770821\">StageAbility_VS_Accessory_SC_PLY_ThunderAddedRatio</a>",
    "realName": "Meadow Breeze",
    "aim": "Buff",
    "desc": "Lightning DMG dealt increases by #1[i]%.",
    "type": "Lightning DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1135225231\">StageAbility_VS_Accessory_SC_PLY_WindAddedRatio</a>",
    "realName": "Meadow Breeze",
    "aim": "Buff",
    "desc": "Wind DMG dealt increases by #1[i]%.",
    "type": "Wind DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1893796588\">StageAbility_VS_Accessory_SC_PLY_QuantumAddedRatio</a>",
    "realName": "Evergreen Spring",
    "aim": "Buff",
    "desc": "Quantum DMG dealt increases by #1[i]%.",
    "type": "Quantum DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-249310120\">StageAbility_VS_Accessory_SC_PLY_ImaginaryAddedRatio</a>",
    "realName": "Benedictive Torch",
    "aim": "Buff",
    "desc": "Imaginary DMG dealt increases by #1[i]%.",
    "type": "Imaginary DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"268295588\">StageAbility_VS_Accessory_SC_PLY_PhysicalAddedRatio</a>",
    "realName": "Meadow Breeze",
    "aim": "Buff",
    "desc": "Physical DMG dealt increases by #1[i]%.",
    "type": "Physical DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1763009203\">StageAbility_VS_Accessory_SC_Special_005_PLY_Modifier</a>",
    "realName": "Golden Rose",
    "aim": "Buff",
    "desc": "When the turn ends, there is a #1[i]% fixed chance of advancing action by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-13679611\">StageAbility_VS_Accessory_SC_PLY_CriticalAllUP</a>",
    "realName": "Cream Raccoon Pie",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]% and increases CRIT DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1348526583\">Modifier_StageAbility_VS_Card_SC_010_BE</a>",
    "realName": "Solid Foundation",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"860004052\">StageAbility_VS_Card_SC_053_BE_Modifier</a>",
    "realName": "Comrades in Arms",
    "aim": "Buff",
    "desc": "Each stack increases the DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageUPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"865071894\">StageAbility_VS_Card_SC_063_BE_Modifier_Sub</a>",
    "realName": "Strong Start",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CardSC063_DamageRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-619400037\">StageAbility_VS_Card_SC_064_BE_Modifier_Sub</a>",
    "realName": "Race Against Time",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "CardSC064_SpeedUPReal"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1455875534\">StageAbility_VS_Card_SC_067_BE_Modifier_Sub</a>",
    "realName": "Suppressive Level",
    "aim": "Buff",
    "desc": "Each stack increases the DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CardSC067_DamageRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-485705892\">StageAbility_VS_Card_SC_072_BE_Modifier_Sub</a>",
    "realName": "Honed Blade",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CardSC072_BaseDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-223238282\">Modifier_VS_Card_SC_073_LE_Enemy</a>",
    "realName": "Oblivion",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CardSC073_DamageTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1119938456\">StageAbility_VS_Card_SC_074_LE_Modifier_Sub</a>",
    "realName": "Enkindle",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"982787063\">StageAbility_VS_Card_SC_075_LE_Modifier_Sub</a>",
    "realName": "Cool Breeze",
    "aim": "Buff",
    "desc": "Outgoing Healing increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1458542722\">StageAbility_VS_Card_SC_075_LE_Modifier_Sub_2</a>",
    "realName": "Cool Breeze",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1495655574\">StageAbility_VS_Card_SC_077_PLY_Modifier</a>",
    "realName": "Blossom of Life",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CardSC077_HPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"379754206\">StageAbility_VS_Card_SC_082_BE_Modifier</a>",
    "realName": "Meticulous Selection",
    "aim": "Buff",
    "desc": "Each stack increases the DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_673480_Sub2",
    "realName": "Fearful Tremble",
    "aim": "Debuff",
    "desc": "The DMG dealt decreases by #1[f1]%. Takes DMG after reaching #2[i] stacks.",
    "type": "Fearful Tremble",
    "perma": true,
    "params": [
      "MDF_DamageRatioTotal",
      "ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_673480_Sub3",
    "realName": "Winged Tiger",
    "aim": "Debuff",
    "desc": "CRIT DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_MDF_CritTakenRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_633223_Character_DamageIncrease",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Basic ATK, Skill, and Ultimate DMG dealt increases by #1[i]% for up to #2[i] stacks.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncrease",
      "_MaxLayer"
    ]
  },
  {
    "name": "Modifier_StageAbility_633227_Character_Wind",
    "realName": "Forced Copying",
    "aim": "Buff",
    "desc": "Each stack increases Ultimate DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncrease"
    ]
  },
  {
    "name": "Modifier_StageAbility_633227_Character_Quantum",
    "realName": "Class Notes",
    "aim": "Buff",
    "desc": "Skill DMG increases by #1[i]%. After using Skill, recovers Skill Point.",
    "type": null,
    "perma": true,
    "params": [
      "_DamageIncrease"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Himeko_DamageTaken",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#SkillP01_P4_DamageTakenRatio"
    ]
  },
  {
    "name": "StageAbility_634070_Modifier_Effect",
    "realName": "Dawn",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_634071_Modifier_Effect",
    "realName": "Departure of the Sinless",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634073_Modifier_Effect",
    "realName": "Summon of the Pathfinder",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "StageAbility_634076_Modifier_Effect",
    "realName": "Trial of the Worldbearer",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634078_Modifier_Effect",
    "realName": "Return of the Worldbearer",
    "aim": "Buff",
    "desc": "Each stack increases the final DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Standard_CTRL_Stun_S5",
    "realName": "Stunned",
    "aim": "Debuff",
    "desc": "Becomes Stunned and unable to take action, lasting for 2 turns.",
    "type": "Stunned",
    "perma": true
  },
  {
    "name": "MBattleEvent_GridFight_Luocha_Passive01_DamageUP",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio_DamageUP"
    ]
  },
  {
    "name": "StageAbility_634080_Modifier_Effect",
    "realName": "Whispers of the Rainbow",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageAddFinal_634080",
      "ADF_HPAddedRatioFinal_634080"
    ]
  },
  {
    "name": "StageAbility_634081_Modifier_Effect",
    "realName": "O Rain, Hydrate All",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634086_Modifier_Effect",
    "realName": "O Lightning, Pierce the Skies",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_634088_Modifier_Effect",
    "realName": "O Sky, Gaze Upon Lives",
    "aim": "Buff",
    "desc": "After using the next attack, deals Additional DMG to the attacked target.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_634090_Modifier_Effect",
    "realName": "Factors Elucidation",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageTakenRatioFinal_634090",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634097_Modifier_Effect",
    "realName": "Introspective Clarity",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageAddFinal_634097"
    ]
  },
  {
    "name": "StageAbility_634096_Modifier_Effect",
    "realName": "Profound Comprehension",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634100_Modifier_Effect",
    "realName": "Conquer",
    "aim": "Buff",
    "desc": "At the end of turn/extra turn, consumes 1 stack of \"Conquer\" to advance this unit's action by 100%/gain an extra turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_634100_Modifier_Effect_Sub",
    "realName": "Gambit by the Flame",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_FinalDamageTakenRatio_634100"
    ]
  },
  {
    "name": "StageAbility_634101_Modifier_Effect",
    "realName": "Sieging Pawn",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634106_Modifier_Effect",
    "realName": "Rule-Sundering King",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634108_Modifier_Effect_sub",
    "realName": "Fire-Crowned King",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageTakenRatioFinal_634108"
    ]
  },
  {
    "name": "StageAbility_634110_Modifier_Effect",
    "realName": "Dreams of Long Night",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageTakenRatioFinal_634110"
    ]
  },
  {
    "name": "StageAbility_634111_Modifier_Effect",
    "realName": "Silence of Dawn Stars",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_634112_Modifier_Effect",
    "realName": "Dwell of Night Breeze",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageTakenRatioTotal_634112",
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_634113_Modifier_Effect",
    "realName": "Weeping of Night Veil",
    "aim": "Buff",
    "desc": "After using an attack, deals Additional DMG to the target of the attack.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_634116_Modifier_Effect",
    "realName": "Dream of Futuresight",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634118_Modifier_Effect",
    "realName": "Dream of Atonement",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageTakenRatioFinal_634118"
    ]
  },
  {
    "name": "StageAbility_634120_Modifier_Effect_Sub2",
    "realName": "Quartz",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageTakenRatioFinal_634120"
    ]
  },
  {
    "name": "StageAbility_634121_Modifier_Effect",
    "realName": "Bedrock Biter",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634126_Modifier_Effect",
    "realName": "Terrestrial Chaser",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_634123_Modifier_Effect",
    "realName": "Primeval Seer",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_DamageAddFinal_634123"
    ]
  },
  {
    "name": "MGridFight_Origin_2001_PLY_Member_Bonus",
    "realName": "Follow-Up ATK DMG Amplification",
    "aim": "Buff",
    "desc": "Each stack increases Follow-Up ATK DMG Amplification by #1[i]%.",
    "type": "Follow-Up ATK DMG Amplification",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MGridFight_Origin_2001_PLY_Member_Bonus_Basic",
    "realName": "On the Heels",
    "aim": "Buff",
    "desc": "After attacking, deals #1[i] instances of Additional DMG of a random Type equal to #2[i]% of the attacker's ATK. This DMG is considered as Follow-Up ATK DMG.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PursuedDamageTime",
      "MDF_PursuedDamageRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_2007_Debuff",
    "realName": "Afterburn",
    "aim": "Debuff",
    "desc": "Each stack reduces the DMG dealt by #3[i]%. After being attacked, each stack causes this unit to further take True DMG equal to #1[i]% of the original DMG. This effect can stack up to #2[i] times.",
    "type": "Afterburn",
    "perma": true,
    "params": [
      "TrueDamageRatio",
      "EffectMaxLayer",
      "FatigueRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_2009_QuantumMark",
    "realName": "Synchronized Frequency",
    "aim": "Other",
    "desc": "Each stack enhances the abilities of characters with \"Quantum Resonance.\"",
    "type": "Synchronized Frequency",
    "perma": true
  },
  {
    "name": "Feixiao_GridFight_Passive02_Bonus",
    "realName": "Triumphant",
    "aim": "Buff",
    "desc": "Each stack permanently increases Follow-Up ATK DMG dealt by #1[i]%.",
    "type": "Triumphant",
    "perma": false,
    "params": [
      "MDF_DMGAddRatio"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Robin_Ability03_AtkUp",
    "realName": "Concerto",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]. Robin deals Additional DMG after attacking.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "Skill03_AtkUpValue"
    ]
  },
  {
    "name": "MGridFight_Origin_2002_PLY_Member_Bonus",
    "realName": "Devastating Strike",
    "aim": "Buff",
    "desc": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of #1[i]% Super Break DMG.",
    "type": null,
    "perma": true,
    "params": [
      "BreakDamageRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_2002_Enemy_Sub",
    "realName": "Toughness Rend",
    "aim": "Debuff",
    "desc": "Initial Toughness and Toughness regeneration decreases by #1[i]% of Max Toughness.",
    "type": "Toughness Reduced",
    "perma": true,
    "params": [
      "StanceDownRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_GridFight_Origin_2002_Sub",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "DamageTakenRatio"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Robin_Ability02_DamageUp_PLY",
    "realName": "Aria",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Lingsha_GridFight_Ability02_DamageTakenRatio_Enemy",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_DamageTakenRatio"
    ]
  },
  {
    "name": "Sunday_10_Ability03_Link_BackEnd",
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
    "name": "Sunday_10_Ability03_Link_IncreaseDmg",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DMGIncreaseReal"
    ]
  },
  {
    "name": "GridFight_Mydeimos_Ability22_HPAdd",
    "realName": "Permanent Max HP Increase",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i].",
    "type": "Permanent Max HP Increase",
    "perma": false,
    "params": [
      "_GridFight_MaxHPDelta"
    ]
  },
  {
    "name": "GridFight_Tribbie_SKL03_Bonus",
    "realName": "Guess Who Lives Here",
    "aim": "Other",
    "desc": "While the Zone exists, all enemies' DMG taken increases by #1[f1]%, and all allies deal Additional DMG when attacking enemies.",
    "type": "Guess Who Lives Here",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Tribbie_DamageUp",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%, up to #2[i] stack(s).",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageAddedRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "GridFight_BE_Tribbie_SKL03_Bonus",
    "realName": "Guess Who Lives Here",
    "aim": "Other",
    "desc": "While the Zone exists, all enemies' DMG taken increases by #1[f1]%, and all allies deal Additional DMG when attacking enemies.",
    "type": "Guess Who Lives Here",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_BE_Tribbie_SKL_P01_Bonus",
    "realName": "All-Type RES PEN Boost",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_Penetrate"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"613021115\">LC_23044_Sub</a>",
    "realName": "Blazing Sun",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is dispelled at the start of its turn.",
    "type": "Blazing Sun",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_BE_Pela_Ultimate_DroneAnalysis",
    "realName": "Exposed",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "Ultra_DefenceDown_Ratio"
    ]
  },
  {
    "name": "GridFight_BE_Pela_BP_Debuff",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "BP_DefenceDown_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1631804574\">Relic_126_Sub</a>",
    "realName": "Help",
    "aim": "Other",
    "desc": "Stacks up to #1[i] time(s). When using Ultimate, if the unit possesses #1[i] stacks of \"Help,\" consumes all \"Help\" and increases the wearer's ATK by #2[i]%, lasting #3[i] turn(s).",
    "type": "Help",
    "perma": false,
    "params": [
      "_MaxLayer",
      "MDF_AttackAddRatio",
      "#SkillRelic_126_4_P3_LifeTime"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-922033468\">Relic_126_Sub2</a>",
    "realName": "Wavestrider Captain",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddRatio"
    ]
  },
  {
    "name": "GridFight_Bronya_Ultimate_PowerUp_BeloBog",
    "realName": "Assembly March",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]% and CRIT DMG increases by #2[i]%.",
    "type": "ATK and CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "Bronya_CriticalDamage"
    ]
  },
  {
    "name": "GridFight_Bronya_Ultimate_PowerUp_BeloBog_Sub",
    "realName": "Assembly March",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]% and CRIT DMG increases by #2[i]%.",
    "type": "ATK and CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "Bronya_CriticalDamage"
    ]
  },
  {
    "name": "GridFight_Bronya_BPAbility_FrontPower",
    "realName": "On-Field Strength Boost",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i]%.",
    "type": "On-Field Strength Boost",
    "perma": false,
    "params": [
      "MDF_FrontPowerAddRatio"
    ]
  },
  {
    "name": "GridFight_Bronya_BPAbility_LuckyChance",
    "realName": "Lucky Strike Rate Boost",
    "aim": "Buff",
    "desc": "Lucky Strike Rate increases by #1[i]%.",
    "type": "Lucky Strike Rate Boost",
    "perma": false,
    "params": [
      "MDF_LuckyChance"
    ]
  },
  {
    "name": "MItem_401034",
    "realName": "Northern Helm",
    "aim": "Buff",
    "desc": "The Shield Effect received increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_402034",
    "realName": "Bestial Remnant",
    "aim": "Buff",
    "desc": "Effect RES increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_403014",
    "realName": "Monarch's Maneuver",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and ATK increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "MItem_403015",
    "realName": "Boneflute of Fish-Calling",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]% and DMG dealt increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1",
      "MDF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1651291033\">StageAbility_VS_Weapon_S2_015_PLY_Modifier</a>",
    "realName": "Prayers of Beauty",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"757367835\">StageAbility_VS_Card_SC_077_PLY_Modifier_2</a>",
    "realName": "Blossom of Life",
    "aim": "Buff",
    "desc": "Each stack increases the DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CardSC077_DamageUPRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_674170_Effect",
    "realName": "Memorial Chrysalis",
    "aim": "Buff",
    "desc": "For each stack of \"Obsession\" in possession, increases Basic ATK and Skill DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DamageIncrease"
    ]
  },
  {
    "name": "StageAbility_674510_Modifier_Sub",
    "realName": "Madness Malady",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DamageIncrease"
    ]
  },
  {
    "name": "Modifier_StageAbility_674820_Character",
    "realName": "Giant Wise Tree",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%. When launching an attack and dealing Ultimate DMG, causes \"Murmur\" to dealt DMG equal to #2[i]% of the original DMG.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "_AttackAddedRatio",
      "_CurseDamage"
    ]
  },
  {
    "name": "Modifier_StageAbility_674740_Character",
    "realName": "Wolfmother of the North",
    "aim": "Buff",
    "desc": "CRIT DMG from Basic ATK and Skill increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "CriticalDamage"
    ]
  },
  {
    "name": "Modifier_StageAbility_675960_Character",
    "realName": "Radiant Jellyfish",
    "aim": "Debuff",
    "desc": "Basic ATK and Skill DMG dealt by allies ignore #1[i]% of this target's DEF. While the target is Weakness Broken, this effect increases to #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DefenceIgnoredBase",
      "DefenceIgnoredMore"
    ]
  },
  {
    "name": "Modifier_StageAbility_675620_sub",
    "realName": "Send-Off Carnival",
    "aim": "Debuff",
    "desc": "For every type of debuff a target is afflicted with, increases the Follow-Up ATK DMG the target receives by #1[i]%, up to a max of #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DamageIncreaseRatio",
      "MaxIncrease"
    ]
  },
  {
    "name": "Modifier_StageAbility_675510_MaxHP",
    "realName": "War Scribes",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "_HPAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_675240_Character",
    "realName": "Black Tide's Decrepit Bow",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "_AttackAddedRatio"
    ]
  },
  {
    "name": "Modifier_StageAbility_675160_EnhanceMark",
    "realName": "Joyspring Fount",
    "aim": "Debuff",
    "desc": "Upon receiving DMG from a summon, every stack of \"Obsession\" allies have increases the Follow-Up ATK and Additional DMG taken by the target by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_2"
    ]
  },
  {
    "name": "Modifier_StageAbility_675890_Character",
    "realName": "Nodist School",
    "aim": "Buff",
    "desc": "After using Ultimate to attack, increases CRIT DMG dealt by #1[i]%, and additionally reduces #2[i] Toughness regardless of Weakness Type.",
    "type": null,
    "perma": true,
    "params": [
      "_CriticalDamage",
      "_Stance"
    ]
  },
  {
    "name": "Monster_W4_FireProwler_EvolveBuildSC_RallyHP",
    "realName": "Entangled By Agony",
    "aim": "Other",
    "desc": "After absorbing \"Demon King's Minions,\" restores the HP consumed to summon the current \"Demon King's Minions.\" After \"Demon King's Minions\" is defeated, this unit cannot restore the HP consumed used to summon the current \"Demon King's Minions\" again.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W4_FireProwler_EvolveBuildSC_AllDamageReduce",
    "realName": "DMG Reduction",
    "aim": "Buff",
    "desc": "Each stack reduces DMG received by #1[i]%. 1 stack is lost after 1 \"Demon King's Minions\" is defeated.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "LC_21056_Sub",
    "realName": "Break DMG Boost",
    "aim": "Buff",
    "desc": "Increases Break DMG dealt by #1[i]%.",
    "type": "Break DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_634091_Modifier_Effect",
    "realName": "Art of Cause and Effect",
    "aim": "Buff",
    "desc": "The final DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "StageAbility_633318_Modifier_Sub",
    "realName": "Benediction Shard: Strife",
    "aim": "Buff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, increases DMG dealt to Elite Enemies by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "StageAbility_633319_Modifier_Mark",
    "realName": "Benediction Shard: Sky",
    "aim": "Buff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, DMG dealt by the next attack increases by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "StageAbility_633320_Modifier_Sub",
    "realName": "Benediction Shard: Death",
    "aim": "Debuff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, increases DoT received by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "StageAbility_633321_Modifier_Sub",
    "realName": "Benediction Shard: Trickery",
    "aim": "Buff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, increases Follow-Up ATK DMG and Additional DMG dealt by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "StageAbility_633322_Modifier_Sub",
    "realName": "Benediction Shard: Reason",
    "aim": "Buff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, increases Ultimate DMG dealt by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "StageAbility_633323_Modifier_Sub",
    "realName": "Benediction Shard: Time",
    "aim": "Buff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, DMG dealt increases by #1[f1]%, and memosprite's DMG dealt additionally increases by #2[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1",
      "_Status2"
    ]
  },
  {
    "name": "StageAbility_633324_Modifier_Sub",
    "realName": "Benediction Shard: Passage",
    "aim": "Debuff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, increases Break DMG received by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "StageAbility_633325_Modifier_Sub",
    "realName": "Benediction Shard: Romance",
    "aim": "Buff",
    "desc": "Based on the total number of stars of all currently possessed Blessings and Equations, increases Basic ATK DMG and Skill DMG dealt by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "_Status1"
    ]
  },
  {
    "name": "MStory_Main_Phainon_UltraNeverEnd",
    "realName": "Futile Flames",
    "aim": "Debuff",
    "desc": "Khaslana cannot dispel \"Divine Vessel\" state: The fuel of \"Destruction\" can only be exhausted, reduced to ashes.\\nEverything is in vain.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1306384815\">Relic_321_Sub</a>",
    "realName": "Arcadia of Woven Dreams",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"294149172\">Relic_322_Sub</a>",
    "realName": "Revelry by the Sea",
    "aim": "Buff",
    "desc": "Increases DoT dealt by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_StageAbility_675240_Sub",
    "realName": "Black Tide's Decrepit Bow",
    "aim": "Other",
    "desc": "After an ally target takes actions for #1[i] turn(s) in total, increases DMG dealt by their \"Murmur.\"",
    "type": null,
    "perma": true,
    "params": [
      "TurnsRemain"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1662085723\">LC_23045_Bonus</a>",
    "realName": "King of Knights",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MGridFight_BlackSwan_DOT",
    "realName": "Arcana",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn. This effect can stack up to #1[i] times.",
    "type": "Arcana",
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "MGridFight_BlackSwan_DOT_Enhance",
    "realName": "Epiphany",
    "aim": "Debuff",
    "desc": "When \"Arcana\" stacks decrease, dispels the \"Epiphany\" state instead.",
    "type": "Epiphany",
    "perma": false
  },
  {
    "name": "Modifier_FantasticStory_BaseAbility_2060_Plus5_ForShow",
    "realName": "Grit Mechanics: Paradox",
    "aim": "Buff",
    "desc": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2065_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1773154335\">Modifier_FantasticStory_BaseAbility_2060_Plus5_Sub</a>",
    "realName": "Paradox",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2065_ADF_2"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_38_Sub",
    "realName": "Memory Imprint",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns. After being attacked by a Skill, this unit and adjacent targets additionally take DMG.",
    "type": "Memory Imprint",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1645086487\">Modifier_FantasticStory_BaseAbility_2060_Plus5_Sub_PLY</a>",
    "realName": "Paradox",
    "aim": "Buff",
    "desc": "Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to #1[i]% of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2065_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-750946821\">StageAbility_VS_Devil_3113405_LE_ShieldTreasure</a>",
    "realName": "Black Cloak Zone (Low-End Edition)",
    "aim": "Buff",
    "desc": "Immune to DMG dealt by an attack. This effect is dispelled at the start of the next wave.",
    "type": "DMG Immunity",
    "perma": true
  },
  {
    "name": "Modifier_StageAbility_673250_Sub",
    "realName": "Nether Longship",
    "aim": "Debuff",
    "desc": "Current \"Murmur\" Charge: #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "_RecordPercentVariation"
    ]
  },
  {
    "name": "StageAbility_673670_Modifier_Mark",
    "realName": "Jolly Bandit",
    "aim": "Other",
    "desc": "#1[i] prize draw(s) currently available.",
    "type": null,
    "perma": true,
    "params": [
      "_PassiveValue"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0101_Sub2",
    "realName": "Anti-Grav Boots",
    "aim": "Buff",
    "desc": "Each stack increases SPD Amplification by #1[i]%.",
    "type": "SPD Amplification Boost",
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0102_Sub2",
    "realName": "Firestorm Surge",
    "aim": "Buff",
    "desc": "Each stack increases On/Off-Field Strength by #1[i]%.",
    "type": "On/Off-Field Strength Boost",
    "perma": false,
    "params": [
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_634102_Modifier_Effect",
    "realName": "Double-Crossing Bishop",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MLevel_StageAbility_633317_Modifier_Sub",
    "realName": "Window of Fortune",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_CriticalDamage"
    ]
  },
  {
    "name": "MGridFight_Equipment_GlobalModifiers_Normal_WeakReal",
    "realName": "Fragility",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Fragility",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0105_Sub2",
    "realName": "Blossom to the Stride",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[i]%.",
    "type": "DMG Amplification Boost",
    "perma": false,
    "params": [
      "#ADF_5"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0106_Sub",
    "realName": "Meteor Wings",
    "aim": "Buff",
    "desc": "SPD Amplification increases by #1[i]%.",
    "type": "SPD Amplification Boost",
    "perma": false,
    "params": [
      "#ADF_3"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0203_Sub",
    "realName": "Weapon Master",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": "On/Off-Field Strength Boost",
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0204_Sub2",
    "realName": "High-frequency Chainsaw",
    "aim": "Buff",
    "desc": "Lucky Strike DMG increases by #1[i]%.",
    "type": "Lucky Strike DMG Boost",
    "perma": false,
    "params": [
      "#ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>",
    "realName": "Echo Enigma",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect has a limit of #1[i] stack(s).",
    "type": "Echo Enigma",
    "perma": true,
    "params": [
      "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1710887068\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_ForShow</a>",
    "realName": "Concordant Truce",
    "aim": "Debuff",
    "desc": "Upon entering combat, becomes afflicted with #1[i] stack(s) of \"Echo Enigma.\" After taking action, becomes afflicted with #2[i] stack(s) of \"Echo Enigma.\"",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer",
      "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1418148626\">Modifier_FantasticStory_BaseAbility_2160_BaseAddOn_ForShow</a>",
    "realName": "Grit Mechanics",
    "aim": "Debuff",
    "desc": "After receiving DoT, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"297114355\">Modifier_FantasticStory_BaseAbility_2160_EnterFever_Sub</a>",
    "realName": "Surging Grit",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%, decreases DMG dealt by #2[i]%, and increases SPD by #3[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio",
      "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio",
      "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"871276272\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub</a>",
    "realName": "Exposition",
    "aim": "Buff",
    "desc": "DoT dealt ignores #1[i]% of the target's All-Type RES.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2161_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-397579384\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY</a>",
    "realName": "DoT Boost",
    "aim": "Buff",
    "desc": "Each stack increases DoT dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2161_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1668876339\">Modifier_FantasticStory_BaseAbility_2160_Plus2_Sub</a>",
    "realName": "Intertextuality",
    "aim": "Buff",
    "desc": "Increases Skill DMG dealt by #1[i]%. When attacking targets with \"Echo Enigma,\" each stack of \"Echo Enigma\" additionally increases Skill DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2162_ADF_1",
      "DV_FantasticStory_PlusAbility_2162_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"596697214\">Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn</a>",
    "realName": "Grit Mechanics: Intertextuality",
    "aim": "Buff",
    "desc": "For each enemy target hit with Skill, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2162_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-187538002\">Modifier_FantasticStory_BaseAbility_2160_Plus3_ForShow</a>",
    "realName": "Misplacement",
    "aim": "Debuff",
    "desc": "When entering combat and after taking an action, additionally becomes afflicted with #1[i] stack(s) of \"Echo Enigma,\" where each stack of \"Echo Enigma\" increases DMG taken by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2163_ADF_2",
      "DV_FantasticStory_PlusAbility_2163_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-273250865\">Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn</a>",
    "realName": "Grit Mechanics: Misplacement",
    "aim": "Debuff",
    "desc": "After being defeated, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2163_ADF_3"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0205_Sub2",
    "realName": "Bloodthirsty",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[i]%.",
    "type": "DMG Amplification Boost",
    "perma": false,
    "params": [
      "#ADF_4"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0206_Sub2",
    "realName": "Confidence Injector",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i]% and gains #2[i]% DMG Mitigation.",
    "type": "On-Field Strength Boost",
    "perma": false,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0208_Sub3",
    "realName": "Codex of Combat",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[i]%.",
    "type": "DMG Amplification Boost",
    "perma": false,
    "params": [
      "#ADF_4"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0305_Sub",
    "realName": "Bastion Projector",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MGridFight_Equipment_Normal_0405_Sub2",
    "realName": "Fist of Fury",
    "aim": "Buff",
    "desc": "Lucky Strike Rate increases by #1[i]%.",
    "type": "Lucky Strike Rate Boost",
    "perma": false,
    "params": [
      "_LuckyValue"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0407_Sub3",
    "realName": "Victory Banner",
    "aim": "Buff",
    "desc": "Each stack can resist 1 instance of Crowd Control debuff.",
    "type": null,
    "perma": false
  },
  {
    "name": "MGridFight_Equipment_Normal_0408_Sub",
    "realName": "Pun Generator",
    "aim": "Buff",
    "desc": "Each stack increases Lucky Strike Rate by #1[i]%, up to #2[i] stacks.",
    "type": "Lucky Strike Rate Boost",
    "perma": false,
    "params": [
      "#ADF_3",
      "#ADF_4"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0506_Sub2",
    "realName": "Analgesia Chip",
    "aim": "Buff",
    "desc": "Gains #1[i]% DMG Mitigation.",
    "type": "DMG Received Reduction",
    "perma": false,
    "params": [
      "#ADF_4"
    ]
  },
  {
    "name": "MGridFight_Equipment_GlobalModifiers_Normal_FatigueReal",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Decreases DMG dealt by #1[i]%.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0608_Sub2",
    "realName": "Photon Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MGridFight_Equipment_Normal_0808",
    "realName": "Perpetual Engine",
    "aim": "Other",
    "desc": "After using Ultimate #1[i] times, activates Ultimate. Already used #2[i] time(s).",
    "type": "Perpetual Engine",
    "perma": false,
    "params": [
      "#ADF_1",
      "_UltraCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1300476012\">Modifier_StageSpecialAbility_10441217_Sub</a>",
    "realName": "Command Spell",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "Command Spell",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0608_Sub",
    "realName": "Photon Shield",
    "aim": "Other",
    "desc": "Granted Shield #1[i] time(s) to ally targets with low HP. This effect can be triggered up to #2[i] times.",
    "type": null,
    "perma": false,
    "params": [
      "_ShieldCount",
      "#ADF_7"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1567261515\">LC_23045_Bonus2</a>",
    "realName": "King of Knights",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_634080_Modifier_Character",
    "realName": "Whispers of the Rainbow",
    "aim": "Other",
    "desc": "Total HP restored: #1[i]",
    "type": null,
    "perma": true,
    "params": [
      "ADF_HealValueTotal_634080"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1300199833\">LC_21053_Sub2</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-739615985\">LC_21055_Sub2</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-461503808\">LC_21061_Sub</a>",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#SkillEquip_P3_DamageTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"237864619\">LC_23044_Sub2</a>",
    "realName": "Dispossession",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MGridFight_Origin_2009_Enemy_Sub",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_2011_Award_Thank",
    "realName": "Thanks for Stopping By",
    "aim": "Buff",
    "desc": "Each stack increases DMG Amplification by #1[i]%.",
    "type": "Thanks for Stopping By",
    "perma": false,
    "params": [
      "MDF_ExtraAllDamageTypeAddedRatio1_3"
    ]
  },
  {
    "name": "MGridFight_Origin_2011_Award_Small",
    "realName": "Small Prize",
    "aim": "Buff",
    "desc": "Recovered #1[i] Skill Point(s).",
    "type": "Small Prize",
    "perma": false,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "MGridFight_Origin_2011_Award_Middle",
    "realName": "Medium Prize",
    "aim": "Buff",
    "desc": "Each stack increases DMG Amplification by #1[i]%.",
    "type": "Medium Prize",
    "perma": false,
    "params": [
      "MDF_ExtraAllDamageTypeAddedRatio1_4"
    ]
  },
  {
    "name": "MGridFight_Origin_2011_Award_Large",
    "realName": "Big Prize",
    "aim": "Buff",
    "desc": "Recovered #1[i] Skill Point(s) and gained an extra turn.",
    "type": "Big Prize",
    "perma": false,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1107420759\">MStrongChallengeEX_Talent_StageAbility_PLY_056</a>",
    "realName": "Bold Leader",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0107_Sub2",
    "realName": "Light Speed Propeller",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i]%, Off-Field Strength increases by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "_DamageAddRatio1",
      "_DamageAddRatio2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402006_Sub3",
    "realName": "Lucky One",
    "aim": "Buff",
    "desc": "Lucky Strike DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "GridFight_Welt_Dark",
    "realName": "Ineluctable",
    "aim": "Debuff",
    "desc": "Each stack decreases SPD by #1[i]%, increases DMG taken by #2[i]%, and additionally increases DMG taken from Welt by #3[i]%. This effect can stack up to #4[i] times.",
    "type": "Ineluctable",
    "perma": false,
    "params": [
      "#SkillPC01_P3_DarkBuff_SpeedReduce",
      "#SkillPC01_P4_DarkBuff_DamageTakenAdd",
      "#SkillPC01_P5_DarkBuff_WeltAdditionDamage",
      "#SkillPC01_P6_DarkBuff_Maxlayer"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0001_02",
    "realName": "Resilient Armor",
    "aim": "Other",
    "desc": "Each stack reduces DMG taken by #2[i]%. Loses 1 stack of \"Resilient Armor\" each time Toughness is reduced to 0.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0001_ADF_1",
      "ChallengePeakBattle_0001_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0002_02",
    "realName": "Tempering",
    "aim": "Other",
    "desc": "For every 1% HP lost, reduces CRIT DMG dealt by allies by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0002_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0003_02",
    "realName": "Inversion",
    "aim": "Other",
    "desc": "Each time after being attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0003_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0004_02",
    "realName": "Under Protection",
    "aim": "Other",
    "desc": "Will not have HP and Toughness reduced, and increases Effect RES by #1[i]%. When all elite enemy targets are eliminated, this unit will also be eliminated.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0004_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0005_02",
    "realName": "Energy Absorption",
    "aim": "Other",
    "desc": "After each time an attack is received, reduces the attacker's Energy by #1[i] points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates #2[i] Energy for the attacker.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0005_ADF_1",
      "ChallengePeakBattle_0005_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0001_02",
    "realName": "Think Outside the Box",
    "aim": "Other",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0001_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_02",
    "realName": "Infantry and Cavalry",
    "aim": "Other",
    "desc": "Ignores #1[i]% of the target's DEF when using Ultimate. After Ultimate deals DMG, the next Skill ignores #2[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0002_ADF_1",
      "ChallengePeakBattle_Plugins_0002_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03",
    "realName": "Hammer and Anvil",
    "aim": "Other",
    "desc": "DMG taken decreases by #1[i]% and All-Type RES PEN increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0003_ADF_1",
      "ChallengePeakBattle_Plugins_0003_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-588223096\">Modifier_FantasticStory_BaseAbility_2010_Plus5_Sub</a>",
    "realName": "Ballad",
    "aim": "Buff",
    "desc": "Increases DMG by #1[i]%, and memomaster's action advances by #2[i]% when it disappears.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2015_ADF_1",
      "DV_FantasticStory_PlusAbility_2015_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-454840159\">Modifier_FantasticStory_BaseAbility_2010_Plus5AddOn</a>",
    "realName": "Grit Mechanics: Ballad",
    "aim": "Buff",
    "desc": "For each enemy target hit after an attack, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2015_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1764196443\">Modifier_FantasticStory_BaseAbility_2010_Plus6_Sub</a>",
    "realName": "Euphony",
    "aim": "Debuff",
    "desc": "Increases DoT taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2016_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"224481971\">Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Euphony",
    "aim": "Debuff",
    "desc": "After receiving DoT, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2016_ADF_3"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_ChallengePeakBattle_Rage",
    "realName": "Middlegame Mayhem",
    "aim": "Other",
    "desc": "Increases the final DMG dealt by each stack by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "MGridFight_Equipment_Day_0001_Sub2",
    "realName": "Day: Light Speed Propeller",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i]%, Off-Field Strength increases by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "_DamageAddRatio1",
      "_DamageAddRatio2",
      "_LuckyChance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1796724281\">LC_22005_Sub</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_AttackAddedRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-852967101\">LC_23047_Sub3</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[f1]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "MItem_402035",
    "realName": "Abundance of Luck",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"361999223\">LC_23048_Sub</a>",
    "realName": "Skill DMG Boost",
    "aim": "Buff",
    "desc": "Increases Skill DMG dealt by #1[i]%.",
    "type": "Skill DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P4_Skill02DamageAddedRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_1001_BE_DefenceReduce",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "TotalReduceRatio1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Sparkle_CritDamage",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_CriticalDamageAddTotal",
      "#Skill03_P6_Lifetime"
    ]
  },
  {
    "name": "Modifier_GridFight_RuanMei_Ability02_StanceBreakAdded",
    "realName": "Weakness Break Efficiency Boost",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": "Weakness Break Efficiency Boost",
    "perma": false,
    "params": [
      "MDF_Skill02StanceBreakAddRatio"
    ]
  },
  {
    "name": "Modifier_GridFight_RuanMei_Ability02_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_Skill02DamageAddRatio"
    ]
  },
  {
    "name": "Modifier_GridFight_RuanMei_Ability03_Penetrate",
    "realName": "All-Type RES PEN Boost",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%.",
    "type": "All-Type RES PEN Boost",
    "perma": false,
    "params": [
      "MDF_Penetrate"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Moze_PassiveAbility01_Insert_DamageTaken",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1842396958\">Relic_127_Sub3</a>",
    "realName": "World-Remaking Deliverer",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillRelic_127_4_P1_HPAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1926285053\">Relic_127_Sub4</a>",
    "realName": "World-Remaking Deliverer",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillRelic_127_4_P2_DamageAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1965254951\">Relic_128_Sub1</a>",
    "realName": "Self-Enshrouded Recluse",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillRelic_128_4_P2_CriticalDamage"
    ]
  },
  {
    "name": "MGridFight_Fugue_Ability03_DamageTakenRatio",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "#Skill03_P4_DamageTakenRatio"
    ]
  },
  {
    "name": "Memosprite_GridFight_PlayerBoyServant_30_Ability01_DefendDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_DefendDownRatio"
    ]
  },
  {
    "name": "GridFight_Yanqing_AbilityPC01",
    "realName": "Soulsteel Sync",
    "aim": "Other",
    "desc": "CRIT Rate increases by #1[i]% and CRIT DMG increases by #2[i]%.",
    "type": "CRIT Rate Boost",
    "perma": true,
    "params": [
      "#SkillPC01_P1_CritChance",
      "#SkillPC01_P2_CritDamage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-194150391\">LC_23051_Sub</a>",
    "realName": "Redoubt",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "Redoubt",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Argenti_Passive_Charge",
    "realName": "Apotheosis",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[f1]% and ATK increases by #1[f2]%.",
    "type": "Apotheosis",
    "perma": false,
    "params": [
      "MDF_CritChance",
      "MDF_AttackAddRatio",
      "MDF_CritDamage"
    ]
  },
  {
    "name": "GridFight_Jade_BPAbility",
    "realName": "Debt Collector",
    "aim": "Buff",
    "desc": "SPD increases by #1[i] and CRIT DMG increases by #2[i]%. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
    "type": "Debt Collector",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Topaz_BETargetTag",
    "realName": "Debt Trap",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Debt Trap",
    "perma": true,
    "params": [
      "MDF_PropertyValue1_DamageAdd"
    ]
  },
  {
    "name": "GridFight_Mydeimos_PC01",
    "realName": "Intense Vigor",
    "aim": "Other",
    "desc": "Charging ratio from receiving enemy target DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_ChargeRatioAdd"
    ]
  },
  {
    "name": "StageAbility_2050005_Modifier_Sub",
    "realName": "Gilded in Golden Blood",
    "aim": "Buff",
    "desc": "Memosprite Skill DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-869744720\">LC_23047_Sub2</a>",
    "realName": "Enthrallment",
    "aim": "Debuff",
    "desc": "Increases DoT received by #1[f1]%.",
    "type": "Enthrallment",
    "perma": false,
    "params": [
      "MDF_TotalDotDamageAddRatio"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0003_02",
    "realName": "Inversion+",
    "aim": "Other",
    "desc": "Each time after being attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0003_ADF_1"
    ]
  },
  {
    "name": "GridFight_Herta_PC01_Property",
    "realName": "On/Off-Field Strength Boost",
    "aim": "Buff",
    "desc": "Each stack increases On/Off-Field Strength by #1[i]%.",
    "type": "On/Off-Field Strength Boost",
    "perma": true,
    "params": [
      "#SkillPC01_P1_KillAddPowerRatio"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Herta_PC01_Property",
    "realName": "On/Off-Field Strength Boost",
    "aim": "Buff",
    "desc": "Each stack increases On/Off-Field Strength by #1[i]%.",
    "type": "On/Off-Field Strength Boost",
    "perma": true,
    "params": [
      "#SkillPC01_P1_KillAddPowerRatio"
    ]
  },
  {
    "name": "Memosprite_GridFight_AglaeaServant_AddSpeed",
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
    "name": "Memosprite_GridFight_AglaeaServant_SummonerAddSpeed",
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
    "name": "Sam_GridFight_Ability32_ResistanceDown",
    "realName": "All-Type RES Reduction",
    "aim": "Debuff",
    "desc": "Decreases All-Type RES by #1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": false,
    "params": [
      "MDF_ResistanceDownRatio"
    ]
  },
  {
    "name": "MWGridFight_Gallagher_Ability03_DeBonusModifier",
    "realName": "Besotted",
    "aim": "Debuff",
    "desc": "Received DMG increases by #1[f1]%. After this unit receive attacks from target characters, the attacker will restore #2[i] HP.",
    "type": "Besotted",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_HealAmount"
    ]
  },
  {
    "name": "GridFight_Bronya_Ultimate_PowerUp_Blood",
    "realName": "Storming March",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%, CRIT DMG increases by #2[i]%, and Max HP increases by #3[i]%.",
    "type": "ATK, CRIT DMG, and Max HP Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "Bronya_CriticalDamage",
      "MDF_MaxHPRatio"
    ]
  },
  {
    "name": "GridFight_Bronya_Ultimate_PowerUp_Blood_Sub",
    "realName": "Storming March",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%, CRIT DMG increases by #2[i]%, and Max HP increases by #3[i]%.",
    "type": "ATK, CRIT DMG, and Max HP Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "Bronya_CriticalDamage",
      "MDF_MaxHPRatio"
    ]
  },
  {
    "name": "GridFight_Bronya_BPAbility_Coop",
    "realName": "Comrades in Arms",
    "aim": "Buff",
    "desc": "Holder and memosprite's On-Field Strength increases by #1[i]%, and DMG dealt increases by #2[i]%.",
    "type": "On-Field Strength and DMG Boost",
    "perma": false,
    "params": [
      "MDF_FrontPowerAddRatio",
      "MDF_ExtraDamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1211620586\">Modifier_FantasticStory_BaseAbility_2060_Plus6_Sub_PLY</a>",
    "realName": "Reminiscence",
    "aim": "Buff",
    "desc": "Increases each stack's DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2066_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"412492093\">Modifier_FantasticStory_BaseAbility_2060_Plus7_Sub</a>",
    "realName": "Memory",
    "aim": "Debuff",
    "desc": "Increases DoT taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2067_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1785697589\">Modifier_FantasticStory_BaseAbility_2060_Plus7AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Memory",
    "aim": "Debuff",
    "desc": "After receiving DoT, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2067_ADF_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1428129204\">Modifier_FantasticStory_BaseAbility_2060_Plus8_Sub</a>",
    "realName": "Epiphany",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. After using a Skill, applies #2[i] stacks of \"Resound\" to all allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2068_ADF_1",
      "DV_FantasticStory_PlusAbility_2068_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1198694676\">Modifier_FantasticStory_BaseAbility_2060_Plus8AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Epiphany",
    "aim": "Buff",
    "desc": "After using a Skill to attack, every enemy target hit additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2068_ADF_3"
    ]
  },
  {
    "name": "Modifier_BattleEventAbility_Challenge_Month_40_Sub_PLY",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "BattleEvent_P1_ADF"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2061183531\">MStrongChallengeEX_Talent_StageAbility_TGT_067</a>",
    "realName": "Unstoppable Momentum",
    "aim": "Buff",
    "desc": "Increases Weakness Break Efficiency by #1[i]% and increases CRIT DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DefaultStanceBreakRatio",
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "MFarmRelic_104314_DamageAddedRatio",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each ally summon increases DMG dealt by #1[i]%, current number of summons: #2[i].",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio",
      "MDF_SummonCount"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0006_03",
    "realName": "Anguish",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #2[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "ChallengePeakBattle_0006_ADF_1",
      "ChallengePeakBattle_0006_ADF_2",
      "ChallengePeakBattle_0006_ADF_3"
    ]
  },
  {
    "name": "GridFight_Harscyline_PassiveAbility01_Dot",
    "realName": "Deep Sea Resonance",
    "aim": "Buff",
    "desc": "At the start of the turn, deals Physical DoT equal to #1[i]% of Hysilens' ATK per stack. After being attacked, immediately inflicts Physical DoT equal to #2[i]% of the original \"Deep Sea Resonance\" DMG to this unit and adjacent enemy targets, and triggers #3[i]% of the original DMG from 1 other random DoT state currently affecting the target.",
    "type": "Deep Sea Resonance",
    "perma": false,
    "params": [
      "Modifier_Burn_DamagePercentage",
      "Attack_TriggerRatio",
      "DOT_TriggerRatio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402008_Sub2",
    "realName": "Staff of the Month",
    "aim": "Buff",
    "desc": "SPD Amplification increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402010_Sub2",
    "realName": "Strength in Numbers",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402011_Sub",
    "realName": "Liquidation",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402017_Sub",
    "realName": "Role Model",
    "aim": "Buff",
    "desc": "For the squad member ranked first in damage dealt, increases On-Field/Off-Field Strength by #1[i]%.",
    "type": "Role Model",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402017_Sub2",
    "realName": "Role Model: Gold",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402013_Sub2",
    "realName": "Early Push",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402015_Sub",
    "realName": "Storm Rider",
    "aim": "Debuff",
    "desc": "At the start of turn, take Wind DMG equal to #1[i]% of Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402022_Sub",
    "realName": "Role Model",
    "aim": "Buff",
    "desc": "For the squad member ranked first in damage dealt, increases On-Field/Off-Field Strength by #1[i]%.",
    "type": "Role Model",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402022_Sub2",
    "realName": "Role Model: Prismatic",
    "aim": "Buff",
    "desc": "After using an attack, deals True DMG equal to #1[f1]% of the accumulated \"Role Model\" DMG to the attacked target.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_2"
    ]
  },
  {
    "name": "MActivity_ElationBattle_HuBonus",
    "realName": "Basic ATK DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by Basic ATK by #1[i]%.",
    "type": "Basic ATK DMG Boost",
    "perma": true,
    "params": [
      "#Activity_ModifiedSkill_P1"
    ]
  },
  {
    "name": "MActivity_ElationBattle_OweBP",
    "realName": "Surprised",
    "aim": "Buff",
    "desc": "Using Skill does not consume Skill Points.",
    "type": null,
    "perma": true
  },
  {
    "name": "MActivity_ElationBattle_Sampo_AddDamage",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MActivity_ElationBattle_Cerydra_Bonus_Details",
    "realName": "ATK & SPD Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%, and increases SPD by #2[i].",
    "type": "ATK & SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue02"
    ]
  },
  {
    "name": "GridFight_Castorice_HPCount",
    "realName": "Death Vessel",
    "aim": "Other",
    "desc": "Stored #1[i] points of HP overflow from Netherwing.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_OverFlowHP"
    ]
  },
  {
    "name": "GridFight_FuXuan_Halo",
    "realName": "Great Matrix of Prescience",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%. When attacked, DMG taken is distributed among all on-field ally characters.",
    "type": "DMG Received Reduction",
    "perma": false,
    "params": [
      "MDF_DamageReduce"
    ]
  },
  {
    "name": "GridFight_FuXuan_LuckyBonus",
    "realName": "Lucky Strike DMG Boost",
    "aim": "Buff",
    "desc": "Lucky Strike DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MGridFight_Equipment_Emblem_2008_Sub_Dot",
    "realName": "Karmic Flames",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Karmic Flames",
    "perma": false,
    "params": [
      "Modifier_Burn_DamagePercentage"
    ]
  },
  {
    "name": "MGridFight_Equipment_Emblem_2003_Sub2",
    "realName": "AoE Emblem",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MGridFight_Equipment_Emblem_2010_Sub",
    "realName": "Shield Emblem",
    "aim": "Other",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": null,
    "perma": false
  },
  {
    "name": "Acheron_GridFight_PassiveAbilityMark",
    "realName": "Purple Lightning",
    "aim": "Other",
    "desc": "When \"Purple Lightning\" is removed, each stack of \"Purple Lightning\" causes Acheron's Ultimate to additionally deal 1 instance of DMG.",
    "type": "Purple Lightning",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"474890872\">LC_23049_Sub</a>",
    "realName": "Noctis",
    "aim": "Other",
    "desc": "When the wearer's memosprite disappears, regenerates #1[i] Energy for the wearer.",
    "type": "Noctis",
    "perma": true,
    "params": [
      "MDF_PropertyValue_3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-634233839\">LC_23049_Sub3</a>",
    "realName": "Sleepless",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-651011458\">LC_23049_Sub2</a>",
    "realName": "Sleepless",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Show"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0205_Sub",
    "realName": "Bloodthirsty",
    "aim": "Other",
    "desc": "After the wearer defeats #1[i] enemies, increases DMG Amplification by #2[i]%, currently defeated: #3[i].",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_3",
      "#ADF_4",
      "_KillCount"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Cerydra_PassiveAbility_CriticalDamage",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "BattleEvent_GridFight_DanHengPT_PointB1_AddAttackRatio",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i].",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0005_02",
    "realName": "Energy Absorption+",
    "aim": "Other",
    "desc": "After each time an attack is received, reduces the attacker's Energy by #1[i] points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates #2[i] Energy for the attacker.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0005_ADF_1",
      "ChallengePeakBattle_0005_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0005_02",
    "realName": "Energy Absorption++",
    "aim": "Other",
    "desc": "After each time an attack is received, reduces the attacker's Energy by #1[i] points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates #2[i] Energy for the attacker.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0005_ADF_1",
      "ChallengePeakBattle_0005_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0003_02",
    "realName": "Inversion++",
    "aim": "Other",
    "desc": "Each time after being attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0003_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0006_03",
    "realName": "Anguish+",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #2[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "ChallengePeakBattle_0006_ADF_1",
      "ChallengePeakBattle_0006_ADF_2",
      "ChallengePeakBattle_0006_ADF_3"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0006_03",
    "realName": "Anguish++",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #2[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "ChallengePeakBattle_0006_ADF_1",
      "ChallengePeakBattle_0006_ADF_2",
      "ChallengePeakBattle_0006_ADF_3"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Yunli_Blocking",
    "realName": "Sword and Shield",
    "aim": "Other",
    "desc": "Protects an on-field ally target from DMG when they are attacked, and launches a counter-attack.",
    "type": null,
    "perma": false
  },
  {
    "name": "Modifier_StageAbility_673560_Character_Revive2",
    "realName": "Conflict Author",
    "aim": "Other",
    "desc": "When struck by a killing blow, instead of being knocked down, immediately restores a certain amount of HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "GridFight_Evernight_UltraMode",
    "realName": "Darkest Riddle",
    "aim": "Buff",
    "desc": "DMG dealt by this unit and their memosprite increases by #1[i]%.",
    "type": "Darkest Riddle",
    "perma": false,
    "params": [
      "MDF_DamageRatio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402023_Sub",
    "realName": "Role Model",
    "aim": "Buff",
    "desc": "For the squad member ranked first in damage dealt, increases On-Field/Off-Field Strength by #1[i]%.",
    "type": "Role Model",
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402029_Sub",
    "realName": "Super Battery",
    "aim": "Buff",
    "desc": "After using Ultimate, removes 1 stack and regenerates #1[i]% of Max Energy.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_SPRatio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402024_Sub",
    "realName": "Perfect Start",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402033_Sub2",
    "realName": "Faster, Luckier",
    "aim": "Buff",
    "desc": "Increases SPD Amplification by #1[i]% and Lucky Strike Rate by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402034_Sub3",
    "realName": "Bloody Ascent",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402035_Sub3",
    "realName": "Savage Growth",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402035_Sub4",
    "realName": "Savage Growth",
    "aim": "Buff",
    "desc": "Off-Field Strength increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402036_Sub3",
    "realName": "The Conservatives",
    "aim": "Buff",
    "desc": "DMG Mitigation increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_Origin_1002_KafkaBonus",
    "realName": "Cosmic Hunting Grounds",
    "aim": "Buff",
    "desc": "After the Stellaron Hunter attacks #1[i] times, Kafka additionally uses her Skill on the enemy.",
    "type": null,
    "perma": false,
    "params": [
      "HunterNeedAttackCount"
    ]
  },
  {
    "name": "MGridFight_Origin_1002_SilBonus",
    "realName": "Cosmic Hunting Grounds",
    "aim": "Buff",
    "desc": "After the Stellaron Hunter attacks #1[i] times, Silver Wolf additionally uses her Skill on the enemy.",
    "type": null,
    "perma": false,
    "params": [
      "HunterNeedAttackCount"
    ]
  },
  {
    "name": "MGridFight_Origin_1002_RenBonus",
    "realName": "Cosmic Hunting Grounds",
    "aim": "Buff",
    "desc": "After the Stellaron Hunter attacks #1[i] times, Blade additionally unleashes an Enhanced Basic ATK on the enemy with the highest HP.",
    "type": null,
    "perma": false,
    "params": [
      "HunterNeedAttackCount"
    ]
  },
  {
    "name": "MGridFight_Origin_1002_SamBonus",
    "realName": "Cosmic Hunting Grounds",
    "aim": "Buff",
    "desc": "After the Stellaron Hunter attacks #1[i] times, Firefly additionally uses her Ultimate to attack enemies.",
    "type": null,
    "perma": false,
    "params": [
      "HunterNeedAttackCount"
    ]
  },
  {
    "name": "MGridFight_Tingyun_Eidolon1_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "SpeedUpRatio"
    ]
  },
  {
    "name": "MGridFight_Luocha_Eidolon1_ATKUp",
    "realName": "Ablution of the Quick",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "MGridFight_Luocha_Eidolon2_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MGridFight_Luocha_Eidolon4_Fatigue",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "DMG dealt to allies decreases by #1[i]%.",
    "type": "Weaken",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "GridFight_FuXuan_Eidolon6_DamageBonus",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DamageUp"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0007_03",
    "realName": "Sunder",
    "aim": "Other",
    "desc": "Each stack causes this unit to additionally lose HP equal to #1[f1]% of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder\" effect.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "ChallengePeakBattle_0007_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0007_03",
    "realName": "Sunder+",
    "aim": "Other",
    "desc": "Each stack causes this unit to additionally lose HP equal to #1[f1]% of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder+\" effect.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "ChallengePeakBattle_0007_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0007_03",
    "realName": "Sunder++",
    "aim": "Other",
    "desc": "Each stack causes this unit to additionally lose HP equal to #1[f1]% of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder++\" effect.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "ChallengePeakBattle_0007_ADF_1"
    ]
  },
  {
    "name": "Jingliu_GridFight_Eidolon2",
    "realName": "Crescent Shadows Qixing Dipper",
    "aim": "Buff",
    "desc": "DMG dealt by the next Enhanced Skill increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1051103648\">Relic_323_Sub3</a>",
    "realName": "Amphoreus, The Eternal Land",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillRelic_323_2_P2_SpeedAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"25554174\">Relic_324_Sub</a>",
    "realName": "Tengoku@Livestream",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillRelic_324_2_P3_CriticalDamage"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_1001_Monster",
    "realName": "Boss Enhancement",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_1002_Monster",
    "realName": "Follower Enhancement",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_1003_Monster",
    "realName": "First Plane Enhancement",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_1004_Monster",
    "realName": "Second Plane Enhancement",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_1005_Monster",
    "realName": "Third Plane Enhancement",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]% and increases Max HP by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2001_AllLightTeam",
    "realName": "Backend Shutdown",
    "aim": "Debuff",
    "desc": "Attacks will only deal 1 DMG, this effect lasts for #1[i] attacks, #2[i] attack(s) have been used.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "_AttackTime"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2002_Monster",
    "realName": "Heavy Footfall",
    "aim": "Buff",
    "desc": "After attacking an ally, delays the attacked ally's action by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2003_Monster",
    "realName": "Extra Strike",
    "aim": "Other",
    "desc": "For each empty equipment slot, when hit by an enemy attack, take an additional instance of True DMG equal to #1[i]% of this attack's damage.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2004_Monster",
    "realName": "Blazing Vengeance",
    "aim": "Other",
    "desc": "When eliminated, DMG dealt by other enemy targets on the field increases by #1[i]% for #2[i] turn(s), stackable.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1",
      "ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2004_Bonus",
    "realName": "Blazing Vengeance",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2005_Monster",
    "realName": "Carried By Inertia",
    "aim": "Buff",
    "desc": "After the first action, action advances by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2006_Monster",
    "realName": "Prey on the Weak",
    "aim": "Buff",
    "desc": "DMG dealt to 1-star ally members increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2007_AllLightTeam",
    "realName": "Cryogenic Hibernation",
    "aim": "Debuff",
    "desc": "When receiving a killing blow, if not knocked down, enters a Frozen state for #1[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2008_Monster",
    "realName": "Get Out of Jail Free Card",
    "aim": "Buff",
    "desc": "When attacked, if HP percentage drops below #1[i]%, restores HP to #2[i]% of Max HP and become immune to damage until the end of this attack.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2009_Sub",
    "realName": "Lead by Example",
    "aim": "Debuff",
    "desc": "Currently ranked first in DMG dealt, deals DMG equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2009_Sub2",
    "realName": "Lead by Example",
    "aim": "Buff",
    "desc": "Currently not ranked first in DMG dealt, deals DMG equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3001_AllLightTeam",
    "realName": "Lost Luck",
    "aim": "Debuff",
    "desc": "Decreases Lucky Strike Rate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3002_Sub",
    "realName": "Beyond Endurance",
    "aim": "Buff",
    "desc": "After being attacked #1[i] times, action advances by #2[i]%, currently received #3[i] attack(s).",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "_AttackTime"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3003_Monster",
    "realName": "Enervation",
    "aim": "Other",
    "desc": "If not wearing 3 pieces of equipment, DMG dealt is equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3006_Sub",
    "realName": "Magma Bombardment",
    "aim": "Debuff",
    "desc": "Greatly increases the chance of being attacked.",
    "type": null,
    "perma": true
  },
  {
    "name": "MGridFight_MonsterTag_3006_Monster",
    "realName": "Magma Bombardment",
    "aim": "Buff",
    "desc": "After using an attack, inflicts the Burn state on the target.",
    "type": null,
    "perma": true
  },
  {
    "name": "MGridFight_MonsterTag_3006_Debuff",
    "realName": "Magma Bombardment",
    "aim": "Debuff",
    "desc": "Take Fire DoT at the start of the turn. Stackable.",
    "type": "Burn",
    "perma": true
  },
  {
    "name": "MGridFight_MonsterTag_3011_Monster",
    "realName": "Fight or Flight Response",
    "aim": "Buff",
    "desc": "When HP percentage drops below #1[i]%, action advances by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3012_Monster",
    "realName": "Self-Defense",
    "aim": "Buff",
    "desc": "When hit by an on-field target's attack, deals DMG equal to #1[i]% of ATK to the target who used the attack. This DMG cannot defeat the target.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_MonsterTag_3013_Sub",
    "realName": "Energy Disappearance",
    "aim": "Other",
    "desc": "After taking an attack, reduces the attacker's Energy by #1[i] points. Energy will not be reduced if it is maxed.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Saber_PC_Passive",
    "realName": "Mana Charge",
    "aim": "Other",
    "desc": "Saber has #1[i] stacks of \"Core Resonance,\" increasing the instances of DMG dealt by her Ultimate to one random enemy target by #2[i], up to a maximum of #3[i] additional instances.",
    "type": null,
    "perma": true,
    "params": [
      "MagicMark",
      "UltraExtraHit",
      "#SkillPC01_P3_UltraExtraHitCountMax"
    ]
  },
  {
    "name": "GridFight_Saber_PC_01",
    "realName": "Mana Charge",
    "aim": "Other",
    "desc": "The instances of DMG Saber's Ultimate deals to one random enemy target increases by #1[i], up to a max increase of #2[i] instance(s).",
    "type": null,
    "perma": true,
    "params": [
      "UltraExtraHit",
      "#SkillPC01_P2_UltraExtraHitCountMax"
    ]
  },
  {
    "name": "GridFight_Jade_Eidolon4_DefPenetrate",
    "realName": "Sincerity? Put Option Only",
    "aim": "Buff",
    "desc": "Ignores #1[i]% of enemy targets' DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Luocha_Passive01_HealHP",
    "realName": "Cycle of Life",
    "aim": "Buff",
    "desc": "After using an attack on an enemy target, restores HP to this unit and other On-Field units.",
    "type": "Cycle of Life",
    "perma": false
  },
  {
    "name": "MGridFight_Origin_1008_BattleCryBonus01_Sub",
    "realName": "Lupine Howl",
    "aim": "Buff",
    "desc": "Lucky Strike Rate increases by #1[i]%.",
    "type": "Lupine Howl",
    "perma": false,
    "params": [
      "Bonus01_LuckChanceRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_1008_FearSeed",
    "realName": "Fear",
    "aim": "Debuff",
    "desc": "All DMG received increases by #1[i]%.",
    "type": "Fear",
    "perma": false,
    "params": [
      "MDF_ExtraDamageAddRatio"
    ]
  },
  {
    "name": "GridFight_Tribbie_SKL03_Bonus_Debuff",
    "realName": "Guess Who Lives Here",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[f1]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Huohuo_Passive_HealMark",
    "realName": "Divine Provision",
    "aim": "Buff",
    "desc": "When an ally target's turn starts or when an ally uses their Ultimate, restores HP for that ally by an amount equal to #1[f1]% of Huohuo's Max HP plus #2[i]. At the same time, every ally target currently at #3[i]% HP percentage or lower receives healing once. When \"Divine Provision\" is triggered to provide healing for ally targets, dispel 1 debuff from the said ally. This effect's remaining trigger count is #4[i].",
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
    "name": "MStageAbility_GridFight_Anaxa_TeammateDamege",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_AllDamage"
    ]
  },
  {
    "name": "GridFight_Robin_AbilityEidolon2_Bonus_RobinExtra",
    "realName": "Afternoon Tea For Two",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "M_Boothill_Ability11_WeakType",
    "realName": "Additional Physical Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Physical Weakness.",
    "type": "Implant Weakness: Physical",
    "perma": false
  },
  {
    "name": "GridFight_Gepard_PassiveAbility01_Modifier",
    "realName": "Winter's Counterstrike",
    "aim": "Other",
    "desc": "After attacks from any enemy target, Gepard gains 1 Charge. Currently has #1[i] Charge(s). After reaching #2[i] Charges, immediately consumes #2[i] Charges to launch a Counter.",
    "type": null,
    "perma": false,
    "params": [
      "CurrentCharge",
      "#SkillPC01_P4_MaxChargeCount"
    ]
  },
  {
    "name": "GridFight_Gepard_AttackAdd",
    "realName": "Proud Stance",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "#SkillPC02_P1_AttackAddRatio"
    ]
  },
  {
    "name": "MGridFight_Origin_1001_BE_Power",
    "realName": "Light Rail",
    "aim": "Buff",
    "desc": "On/Off-Field Strength increases by #1[i]%.",
    "type": "Light Rail",
    "perma": true,
    "params": [
      "TotalAddedRatio1"
    ]
  },
  {
    "name": "StageAbility_673160_Modifier_Mark",
    "realName": "Charge Stack",
    "aim": "Other",
    "desc": "\"Dirge\" current charge level is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "Layer_Count"
    ]
  },
  {
    "name": "Aventurine_GridFight_PC01",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Ultimate DMG and Follow-Up ATK DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "_DamageAddRatio"
    ]
  },
  {
    "name": "GridFight_Saber_Eidolon2",
    "realName": "The Lost Oath of the Round Table",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[f1]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Saber_Eidolon4_Bonus",
    "realName": "The Saga of Sixteen Winter Days",
    "aim": "Buff",
    "desc": "Each stack increases Wind RES PEN by #1[i]%.",
    "type": "Wind RES PEN increases.",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Saber_Eidolon4",
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
    "name": "MStageAbility_673940_WeakType_Fire",
    "realName": "Additional Fire Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Fire Weakness.",
    "type": "Implant Fire Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_673940_WeakType_Ice",
    "realName": "Additional Ice Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Ice Weakness.",
    "type": "Implant Ice Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_673940_WeakType_Wind",
    "realName": "Additional Wind Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Wind Weakness.",
    "type": "Implant Wind Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_673940_WeakType_Physical",
    "realName": "Additional Physical Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Physical Weakness.",
    "type": "Implant Physical Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_673940_WeakType_Thunder",
    "realName": "Additional Lightning Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Lightning Weakness.",
    "type": "Implant Lightning Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_673940_WeakType_Quantum",
    "realName": "Additional Quantum Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Quantum Weakness.",
    "type": "Implant Quantum Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_673940_WeakType_Imaginary",
    "realName": "Additional Imaginary Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Imaginary Weakness.",
    "type": "Implant Imaginary Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Silwolf_BugDamageAdd",
    "realName": "Fatal Flaw",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "FinalDamageTypeTakenRatio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Silwolf_BugDamageAdd",
    "realName": "Fatal Flaw",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "FinalDamageTypeTakenRatio"
    ]
  },
  {
    "name": "MGridFight_Equipment_Normal_0406_Sub2",
    "realName": "Chassis of Retribution",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MGridFight_Origin_2011_Award_Special",
    "realName": "Special Prize!",
    "aim": "Buff",
    "desc": "Obtained #1[i] Gold Coins.",
    "type": "Special Prize!",
    "perma": false,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2135566331\">Modifier_FantasticStory_BaseAbility_2160_Plus4_Sub</a>",
    "realName": "Torn Fabric",
    "aim": "Buff",
    "desc": "When dealing DMG to targets afflicted with \"Echo Enigma,\" each stack of \"Echo Enigma\" increases Weakness Break Efficiency by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2164_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-354244179\">Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn_ForShow</a>",
    "realName": "Grit Mechanics: Torn Fabric",
    "aim": "Debuff",
    "desc": "When a Weakness is Broken, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2164_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1172490940\">Modifier_FantasticStory_BaseAbility_2160_Plus5_ForShow</a>",
    "realName": "Cinnabar Inscription",
    "aim": "Debuff",
    "desc": "Each stack of \"Echo Enigma\" increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2165_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1127959511\">Modifier_FantasticStory_BaseAbility_2160_Plus5_Servant</a>",
    "realName": "Cinnabar Inscription",
    "aim": "Buff",
    "desc": "After attacking, inflicts #1[i] stacks of \"Echo Enigma\" on the target.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2165_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1360922097\">Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn_Servant</a>",
    "realName": "Cinnabar Inscription",
    "aim": "Buff",
    "desc": "For each enemy target hit after an attack, additionally accumulates #1[i] Grit Value for allies.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2165_ADF_3"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Ren_Energy",
    "realName": "Charge",
    "aim": "Other",
    "desc": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
    "type": null,
    "perma": false
  },
  {
    "name": "GridFight_Evernight_PC_PassiveAbility01_Sub",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MWGridFight_Gallagher_Ability11_AttackDownModifier",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "Decreases ATK by #1[f1]%.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "StageAbility_673160_AfterTaste_Mark",
    "realName": "Dirge",
    "aim": "Buff",
    "desc": "After an ally character attacks, consume #1[i] stacks of Charge and deal #2[i] instances of \"Aftertaste\" DMG equal to #3[i]% of the character's Max HP to the attacked enemy target. Exits this state when stacks are reduced to 0. Charge can still be accumulated while in the \"Dirge\" state.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_2",
      "ADF_3",
      "ADF_4"
    ]
  },
  {
    "name": "StageAbility_673720_Modifier_Effect",
    "realName": "Mortal Beings",
    "aim": "Debuff",
    "desc": "While in the \"Butterfly Soul\" state, increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DamageTaken_Up"
    ]
  },
  {
    "name": "StageAbility_675580_Modifier_Effect",
    "realName": "Breach",
    "aim": "Buff",
    "desc": "Ultimate DMG dealt in this combat ignores #1[i]% of target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "StageAbility_675850_Modifier_Sub",
    "realName": "Bizarre Spell",
    "aim": "Buff",
    "desc": "Increases \"Blazar\" DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "StageAbility_675260_Modifier_Enemy",
    "realName": "Wicker School",
    "aim": "Buff",
    "desc": "Increases DoT taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "GridFight_Cerydra_Ability02_Target_Lv2_ForShow",
    "realName": "Peerage",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], Skill DMG's CRIT DMG dealt increases by #2[i]%, and All-Type RES PEN increases by #3[i]%. After using an attack, Cerydra additionally deals 1 instance of Additional DMG, with #4[i] trigger count(s) remaining. Triggers Coup de Main when using Skill or Basic ATK on enemy targets.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2",
      "MDF_PropertyValue3",
      "DV_PursuedDamage_LimitCount"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Cerydra_Ability02_Target_Lv2_ForShow",
    "realName": "Peerage",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], Skill DMG's CRIT DMG dealt increases by #2[i]%, and All-Type RES PEN increases by #3[i]%. After using an attack, Cerydra additionally deals 1 instance of Additional DMG. Triggers Coup de Main when using Skill on enemy targets.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2",
      "MDF_PropertyValue3"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Cerydra_Ability02_Target_Lv2_ForShow_BP",
    "realName": "Peerage",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], Skill DMG's CRIT DMG dealt increases by #2[i]%, and All-Type RES PEN increases by #3[i]%. After using an attack, Cerydra additionally deals 1 instance of Additional DMG. Triggers Coup de Main when using Skill or Basic ATK on enemy targets.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2",
      "MDF_PropertyValue3"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3015_Avatar",
    "realName": "Critical Conundrum",
    "aim": "Debuff",
    "desc": "After being attacked, healing and Shield strength decreases by #1[i]%, lasting for #2[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3015_Debuff",
    "realName": "Critical Conundrum",
    "aim": "Debuff",
    "desc": "Decreases Healing and Shield strength by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3016_Bonus",
    "realName": "Purity of Flesh and Mind",
    "aim": "Buff",
    "desc": "When HP percentage first falls below #1[i]%, dispels all debuffs and restores #2[i]% of Max HP. For each debuff dispelled, restores an additional #3[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Silwolf_DefenceReduce",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "#SkillP01_P8_DefenceReduceRadio"
    ]
  },
  {
    "name": "MBattleEvent_Cerydra_Ability02_Target_Lv1_ForShow",
    "realName": "Military Merit",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]. After using an attack, Cerydra additionally deals 1 instance of Additional DMG.",
    "type": "Military Merit",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MGridFight_Origin_2010_PLY_SheildValue",
    "realName": "Stackable Shield",
    "aim": "Other",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": null,
    "perma": false
  },
  {
    "name": "StageAbility_675610_Modifier_Sub",
    "realName": "Ruin Strider",
    "aim": "Buff",
    "desc": "Increases \"Aftertaste\" DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DamageUp"
    ]
  },
  {
    "name": "StageAbility_675460_Modifier_Sub",
    "realName": "Trickster Knight",
    "aim": "Buff",
    "desc": "Each stack of \"Critical Boost\" additionally increases Follow-Up ATK DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3017_AllLightTeam",
    "realName": "Rapid Cooling",
    "aim": "Debuff",
    "desc": "At the end of the turn, for each Skill Point consumed this turn, there is a #1[i]% fixed chance to enter a Frozen state.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3019_Avatar",
    "realName": "Permanent Trauma",
    "aim": "Debuff",
    "desc": "When HP decreases, reduces Max HP by #1[i]% of the HP lost.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3019_Debuff",
    "realName": "Permanent Trauma",
    "aim": "Debuff",
    "desc": "Decreases Max HP by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_02",
    "realName": "Sanguine Vitality",
    "aim": "Other",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0004_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_02",
    "realName": "Power Surge",
    "aim": "Other",
    "desc": "Basic ATK, Skill, and Ultimate DMG dealt increase by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0005_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03",
    "realName": "Power Surge",
    "aim": "Other",
    "desc": "Each stack increases ATK by #1[i].",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0005_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_02",
    "realName": "Fluid Dash",
    "aim": "Other",
    "desc": "All-Type RES PEN for DoT dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0006_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03",
    "realName": "Fluid Dash",
    "aim": "Other",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0006_ADF_2"
    ]
  },
  {
    "name": "BattleEvent_GridFight_Mydeimos_Transfer",
    "realName": "Vendetta",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i], CRIT Rate increases by #2[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_HPAddValue",
      "#SkillP01_P1_CriticalChance"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0008_03",
    "realName": "Taunting",
    "aim": "Other",
    "desc": "Gain 1 stack when attacked. When stacks reach #1[i], take action immediately. Stack count resets at the start of turn.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0008_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0008_03",
    "realName": "Taunting+",
    "aim": "Other",
    "desc": "Gain 1 stack when attacked. When stacks reach #1[i], take action immediately. Stack count resets at the start of turn.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0008_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0009_02",
    "realName": "Interference",
    "aim": "Other",
    "desc": "After using an attack, randomly inflicts #1[i]% or #2[i]% action delay on the target.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0009_ADF_1",
      "ChallengePeakBattle_0009_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0009_02",
    "realName": "Interference+",
    "aim": "Other",
    "desc": "After using an attack, randomly inflicts #1[i]% or #2[i]% action delay on the target.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0009_ADF_1",
      "ChallengePeakBattle_0009_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0009_02",
    "realName": "Interference++",
    "aim": "Other",
    "desc": "After using an attack, randomly inflicts #1[i]% or #2[i]% action delay on the target.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0009_ADF_1",
      "ChallengePeakBattle_0009_ADF_2"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_2010_AllLightTeam",
    "realName": "Frontend Shutdown",
    "aim": "Debuff",
    "desc": "Attacks will only deal 1 DMG, this effect lasts for #1[i] attacks, #2[i] attack(s) have been used.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1",
      "_AttackTime"
    ]
  },
  {
    "name": "StageAbility_633234_Modifier_Element_Entangle",
    "realName": "Interstellar Roaming Pager",
    "aim": "Debuff",
    "desc": "Action is delayed and receives Additional Quantum DMG at the start of the next turn.\\nFor every enemy target Quantum characters attack, this Additional DMG will increase. This effect can stack up to #1[i] time(s).",
    "type": "Entanglement",
    "perma": false,
    "params": [
      "Max_Count"
    ]
  },
  {
    "name": "StageAbility_633233_Modifier_Effect",
    "realName": "Absolute Sound Quality",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "Extra_Break"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Evernight_PC_PassiveAbility01_Sub",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Evernight_UltraMode_Enemy",
    "realName": "Darkest Riddle",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_DamageTakenRatio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Evernight_CriticalChance",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_CriticalChance"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Stage_BravePower_Sub",
    "realName": "Ultimate Instant",
    "aim": "Buff",
    "desc": "DMG dealt is #1[i]% of the original DMG.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DamageRatio"
    ]
  },
  {
    "name": "GridFight_Kafka_DotRatioAdd",
    "realName": "Ample Preparations",
    "aim": "Buff",
    "desc": "Currently equipped with #1[i] pieces of equipment. When using Skills, Ultimates, and Follow-Up ATKs, each piece increases the multiplier of immediate DMG produced from DoT effects by #2[i]% of the original multiplier.",
    "type": null,
    "perma": false,
    "params": [
      "EquipCount",
      "TotalEquipmentAddRitio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Anaxa_Self",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "#SkillPC01_P1_CriticalDamege"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_DanHengPT_LongLing",
    "realName": "Bondmate",
    "aim": "Other",
    "desc": "\"Souldragon\" holder.",
    "type": "Becomes the Bondmate",
    "perma": true
  },
  {
    "name": "MBattleEvent_GridFight_DanHengPT_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "GridFight_FuXuan_Energy",
    "realName": "Flip",
    "aim": "Buff",
    "desc": "When \"Flip\" is active, your on-field character will not receive fatal damage and will automatically heal on-field characters with low HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "StageAbility_633231_Modifier_Effect",
    "realName": "Winterfish Summerherb",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%, stacking up to #2[i] time(s).",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "#ADF_4",
      "#ADF_5"
    ]
  },
  {
    "name": "StageAbility_633230_Modifier_Effect2",
    "realName": "Frozen Virtue (Malicious)",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%, stacking up to #2[i] time(s).",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "#ADF_2",
      "#ADF_3"
    ]
  },
  {
    "name": "StageAbility_633230_Modifier_Effect1",
    "realName": "Frozen Virtue (Virtuous)",
    "aim": "Buff",
    "desc": "Increases Max Shield Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402018_Sub",
    "realName": "Trauma Team",
    "aim": "Debuff",
    "desc": "Decreases Max HP by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "GridFight_Evernight_Eidolon4_Bonus",
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
    "name": "GridFight_Evernight_Eidolon6_Bonus",
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
    "name": "GridFight_Evernight_Eidolon2_Crit",
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
    "name": "LC_23052_Sub3",
    "realName": "This Love, Forever",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_DanHengPT_Eidolon1",
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
    "name": "GridFight_DanHengPT_Eidolon4_Bonus",
    "realName": "By Oath, This Vessel Is I",
    "aim": "Buff",
    "desc": "Decreases DMG received by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_DanHengPT_Eidolon6_AllDamageTypeTakenRatio",
    "realName": "One Dream to Enfold All Wilds",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_DanHengPT_Eidolon6_Bonus",
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
    "name": "MBattleEvent_GridFight_Saber_PC_CriticalDamageAdd",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#SkillPC01_P4_CriticalDamageAddRatio"
    ]
  },
  {
    "name": "GridFight_Saber_Passive_ExceedSpStatus",
    "realName": "Heart of the King",
    "aim": "Other",
    "desc": "#1[i] overflow Energy accumulated.",
    "type": null,
    "perma": true,
    "params": [
      "Saber_00_EntityStockSPForShow"
    ]
  },
  {
    "name": "MItem_408640",
    "realName": "Zagreus' Premium Viscorpus",
    "aim": "Buff",
    "desc": "Ice DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MItem_408641",
    "realName": "Zagreus' Premium Red Beans",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": true,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "Memosprite_GridFight_AglaeaServant_AddDamage",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DamageAddRatio"
    ]
  },
  {
    "name": "Memosprite_GridFight_AglaeaServant_SummonerAddDamage",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "DamageAddRatio"
    ]
  },
  {
    "name": "MGridFight_MonsterTag_3018_Avatar",
    "realName": "Synchronized Action",
    "aim": "Debuff",
    "desc": "When gaining an effect that advances action, randomly causes an Elite/Boss enemy's action to advance by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Yunli_PassiveAbility01_AttackAddedRatio",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Yunli_PassiveAbility01_CriticalDamageAddedRatio",
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
    "name": "MBattleEvent_GridFight_BlackSwan_PassiveAbility01_DamageAddedRatio",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MWGridFight_Jingliu_Attack_Transfer",
    "realName": "Glacial Soul",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]% and CRIT DMG increases by #2[i]%.",
    "type": "CRIT Rate and CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "MBattleEvent_GridFight_Cerydra_PC_PassiveAbility01_CriticalDamage",
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
    "name": "GridFight_BE_Tribbie_SKL_P01_DamageAdd",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Jade_PassiveAbility01_Attack",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Jade_PassiveAbility01_CriticalDamageAddedRatio",
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
    "name": "MStageAbility_GridFight_Augment_35402014_Sub",
    "realName": "Tongue Twister",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i].",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402014_Sub2",
    "realName": "Tongue Twister",
    "aim": "Buff",
    "desc": "Off-Field Strength increases by #1[i].",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402016_Sub2",
    "realName": "Beyond Lucky",
    "aim": "Buff",
    "desc": "Lucky Strike DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402037_Sub2",
    "realName": "Integrated Combat",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-97167540\">LC_23052_Sub</a>",
    "realName": "Verse",
    "aim": "Other",
    "desc": "CRIT DMG dealt by all allies increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CritDmg"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1610136410\">LC_23052_Sub2</a>",
    "realName": "Blank",
    "aim": "Other",
    "desc": "DMG received by all enemies increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageRatio"
    ]
  },
  {
    "name": "GridFight_Mydeimos_Eidolon4",
    "realName": "Siren Jolts the Laconic Lion",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "GridFight_Cyrene_GoldCharacterBonus",
    "realName": "Epic of Chrysos",
    "aim": "Buff",
    "desc": "Character empowerment effects increase based on the stacks of \"Epic of Chrysos.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-428551888\">LC_22006_Halo</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "#SkillEquip_P2_DamageAddedRatio"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Huohuo_Ability03_AttackUP",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[f1]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackUP"
    ]
  },
  {
    "name": "GridFight_Huohuo_Eidolon2_ReviveCount",
    "realName": "Sealed in Tail, Wraith Subdued",
    "aim": "Buff",
    "desc": "If Huohuo possesses \"Divine Provision\" when an ally is struck by a killing blow, the ally will not be knocked down, and their HP will immediately be restored by an amount equal to #1[i]% of their Max HP. This reduces the duration of \"Divine Provision\" by 1 turn. The remaining trigger count is #2[i].",
    "type": null,
    "perma": false,
    "params": [
      "MDF_HealPercentage",
      "Huohuo_Rank02_ReviveCount"
    ]
  },
  {
    "name": "MGridFight_Origin_2006_AvatarBonus",
    "realName": "DMG Amplification Boost",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2050514144\">LC_23052_Halo</a>",
    "realName": "Verse",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CritDmg"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"951721622\">LC_23052_Halo2</a>",
    "realName": "Blank",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageRatio"
    ]
  },
  {
    "name": "MGridFight_Equipment_Day_0001_2_Sub2",
    "realName": "Day: Light Speed Propeller",
    "aim": "Buff",
    "desc": "On-Field Strength increases by #1[i]%, Off-Field Strength increases by #2[i]%, DMG Amplification increases by #3[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "_DamageAddRatio1",
      "_DamageAddRatio2",
      "_LuckyChance"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0001_03",
    "realName": "Resilient Armor+",
    "aim": "Other",
    "desc": "Each stack reduces DMG taken by #2[i]%. Loses 1 stack of \"Resilient Armor+\" each time Toughness is reduced to 0.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0001_ADF_1",
      "ChallengePeakBattle_0001_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0001_03",
    "realName": "Resilient Armor++",
    "aim": "Other",
    "desc": "Each stack reduces DMG taken by #2[i]%. Loses 1 stack of \"Resilient Armor++\" each time Toughness is reduced to 0.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0001_ADF_1",
      "ChallengePeakBattle_0001_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_03",
    "realName": "No Break No Rise",
    "aim": "Other",
    "desc": "Each stack increases the Break DMG taken by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0007_ADF_2",
      "ChallengePeakBattle_Plugins_0007_ADF_3"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_04",
    "realName": "No Break No Rise",
    "aim": "Other",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0007_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_02",
    "realName": "Impassioned Spirits",
    "aim": "Other",
    "desc": "Increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0008_ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03",
    "realName": "Impassioned Spirits",
    "aim": "Other",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0008_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0009_02",
    "realName": "Seize the Moment",
    "aim": "Other",
    "desc": "DMG dealt increases by #1[i]%. After using an attack, applies a Weakness of this unit's Type to the enemy target. This effect is removed when the enemy target recovers from the Weakness Break state.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_Plugins_0009_ADF_1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2145216821\">Modifier_FantasticStory_BaseAbility_2010_plus8_sub</a>",
    "realName": "Ravings",
    "aim": "Debuff",
    "desc": "Increases Break DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2018_ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1120307389\">Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn_ForShow</a>",
    "realName": "Grit Mechanics_Ravings",
    "aim": "Buff",
    "desc": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates #1[i] Grit Value.",
    "type": null,
    "perma": true,
    "params": [
      "DV_FantasticStory_PlusAbility_2018_ADF_3"
    ]
  },
  {
    "name": "StageAbility_673940_Modifier_Enemy",
    "realName": "Weakness Record",
    "aim": "Other",
    "desc": "Weakness Record: Physical #1[i] time(s), Fire #2[i] time(s), Ice #3[i] time(s), Lightning #4[i] time(s), Wind #5[i] time(s), Quantum #6[i] time(s), Imaginary #7[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "ExtraPhysicalCount",
      "ExtraFireCount",
      "ExtraIceCount",
      "ExtraThunderCount",
      "ExtraWindCount",
      "ExtraQuantumCount",
      "ExtraImaginaryCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1291381400\">MStrongChallengeEX_Talent_StageAbility_PLY_077</a>",
    "realName": "Shatterstrike",
    "aim": "Buff",
    "desc": "Increases Break DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue5"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-675587525\">MStrongChallengeEX_Talent_StageAbility_PLY_079_Extra</a>",
    "realName": "Unto Apotheosis",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1376108138\">MStrongChallengeEX_Talent_StageAbility_PLY_080</a>",
    "realName": "Past Life: Shadowed Reverie",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1435721852\">MStrongChallengeEX_Talent_StageAbility_PLY_081_Extra</a>",
    "realName": "Whirlwind Turn",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402004_Sub2",
    "realName": "Delayed Returns",
    "aim": "Buff",
    "desc": "DMG Amplification increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "MStageAbility_GridFight_Augment_35402002_Sub2",
    "realName": "Fan Club",
    "aim": "Buff",
    "desc": "SPD Amplification increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#ADF_2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"503983570\">LC_23050_Sub</a>",
    "realName": "Immolation",
    "aim": "Buff",
    "desc": "Increases Break DMG dealt by #1[i]%.",
    "type": "Break DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0012_03",
    "realName": "Unending Refinement",
    "aim": "Other",
    "desc": "Each stack reduces DMG received by #1[i]% and CRIT DMG taken by #3[i]%, stackable up to #2[i] time(s). Stacks are cleared at the start of turn or when entering the Weakness Break state.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0012_ADF_1",
      "ChallengePeakBattle_0012_ADF_2",
      "ChallengePeakBattle_0012_ADF_3"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0012_03",
    "realName": "Unending Refinement+",
    "aim": "Other",
    "desc": "Each stack reduces DMG received by #1[i]% and CRIT DMG taken by #3[i]%, stackable up to #2[i] time(s). Stacks are cleared at the start of turn or when entering the Weakness Break state.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0012_ADF_1",
      "ChallengePeakBattle_0012_ADF_2",
      "ChallengePeakBattle_0012_ADF_3"
    ]
  },
  {
    "name": "MLevel_StageAbility_633235_Modifier_Sub",
    "realName": "Transform!!!",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#ADF_1"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_BaseAbility_0013_02",
    "realName": "Depowered",
    "aim": "Other",
    "desc": "Decreases Energy Regeneration Rate by #1[i]% outside this unit's turn.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0013_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_EnhancedAbility_0013_02",
    "realName": "Depowered+",
    "aim": "Other",
    "desc": "Decreases Energy Regeneration Rate by #1[i]% outside this unit's turn.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0013_ADF_2"
    ]
  },
  {
    "name": "Modifier_ChallengePeakBattle_ExtremeAbility_0013_02",
    "realName": "Depowered++",
    "aim": "Other",
    "desc": "Decreases Energy Regeneration Rate by #1[i]% outside this unit's turn.",
    "type": null,
    "perma": true,
    "params": [
      "ChallengePeakBattle_0013_ADF_2"
    ]
  },
  {
    "name": "StageAbility_633229_Modifier_Effect",
    "realName": "Encouragement for You",
    "aim": "Buff",
    "desc": "The next #1[i] attack(s) are considered as Follow-Up ATK.",
    "type": null,
    "perma": true,
    "params": [
      "Remain_Count"
    ]
  },
  {
    "name": "StageAbility_673890_Damage_Modifier",
    "realName": "Selfless Giant Turtle",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ADF_6"
    ]
  },
  {
    "name": "MGridFight_Origin_1003_Front_DamageReduce",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG Mitigation increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  }
]