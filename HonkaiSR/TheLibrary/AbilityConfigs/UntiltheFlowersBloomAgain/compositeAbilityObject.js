const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Until the Flowers Bloom Again",
  "trimCharacterName": "UntiltheFlowersBloomAgain",
  "abilityList": [
    "UntiltheFlowersBloomAgain_Ability23058"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.6
    },
    "2": {
      "CritDamageBase": 0.75
    },
    "3": {
      "CritDamageBase": 0.9
    },
    "4": {
      "CritDamageBase": 1.05
    },
    "5": {
      "CritDamageBase": 1.2
    }
  },
  "abilityObject": {
    "UntiltheFlowersBloomAgain_Ability23058": {
      "fileName": "UntiltheFlowersBloomAgain_Ability23058",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"210822341\">LC_23058_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2114659004\">LC_23058_Energy</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
          "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Energy Regeneration Rate Boost",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-259192704\">LC_23058_Energy_Calc</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-259192704\">LC_23058_Energy_Calc</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_MaxSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (120) || RETURN",
                      "displayLines": "120",
                      "constants": [],
                      "variables": [
                        120
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SP",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxSP) || Variables[1] (120) || SUB || RETURN",
                        "displayLines": "(MDF_MaxSP - 120)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxSP",
                          120
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SPRatio",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (MIN) || Variables[2] (MDF_SP) || Variables[3] (360) || PARAM_2 || FUNCTION || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.0029999998) || MUL || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_SP, 360) / 10)) * 0.0029999998)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "FLOOR",
                          "MIN",
                          "MDF_SP",
                          360,
                          0.0029999998
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SPRatio",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SPRatio) || Variables[1] (0.1) || ADD || RETURN",
                    "displayLines": "(MDF_SPRatio + 0.1)",
                    "constants": [],
                    "variables": [
                      "MDF_SPRatio",
                      0.1
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-259192704\">LC_23058_Energy_Calc</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1098160172\">LC_23058_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__210822341\">LC_23058_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114659004\">LC_23058_Energy</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1098160172\">LC_23058_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT DMG by #1[i]% and Energy Regeneration Rate by #4[f1]%. When the wearer's Max Energy is greater than #5[i], for every 10 points of Max Energy that exceeds this amount, further increases Energy Regeneration Rate by #6[f1]%. Up to a maximum of #7[i] points of excess Max Energy can be taken into account. When the wearer uses Elation Skill, increases the DMG received by all enemies by #2[f1]% for #3[i] turn(s). Effects of the same type cannot stack.",
      "params": [
        [
          0.6,
          0.15,
          2,
          0.1,
          120,
          0.0029999998,
          360
        ],
        [
          0.75,
          0.1875,
          2,
          0.115,
          120,
          0.0029999998,
          360
        ],
        [
          0.9,
          0.225,
          2,
          0.13,
          120,
          0.0029999998,
          360
        ],
        [
          1.05,
          0.2625,
          2,
          0.145,
          120,
          0.0029999998,
          360
        ],
        [
          1.2,
          0.3,
          2,
          0.16,
          120,
          0.0029999998,
          360
        ]
      ]
    }
  },
  "isLightcone": true
}