const configAbility = {
  "fileName": "Evernight_Evernight_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Consume",
      "consumeFrom": "CurrentHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] (0.1) || RETURN",
        "displayLines": "0.1",
        "constants": [],
        "variables": [
          0.1
        ]
      },
      "consumeFloor": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1307478561\">Evernight_UltraMode_Effect</a>"
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_Partner_Count_Show",
      "value": {
        "operator": "Variables[0] (2) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
        "displayLines": "(2 + _Evernight_00_Extra_Energy)",
        "constants": [],
        "variables": [
          2,
          "_Evernight_00_Extra_Energy"
        ]
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "variableName": "_Partner_Count",
      "value": {
        "operator": "Variables[0] (2) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
        "displayLines": "(2 + _Evernight_00_Extra_Energy)",
        "constants": [],
        "variables": [
          2,
          "_Evernight_00_Extra_Energy"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_S02_Buff_Value",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Kindle the Morn, Drop the Rain"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
          },
          "variableName": "_S02_Char_Count",
          "livingTargets": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Remembrance"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_S02_Char_Count",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_S02_Buff_Value",
              "value": {
                "operator": "Variables[0] (0.65) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                "displayLines": "(0.65 + _S02_Buff_Value)",
                "constants": [],
                "variables": [
                  0.65,
                  "_S02_Buff_Value"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_S02_Char_Count",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_S02_Buff_Value",
                  "value": {
                    "operator": "Variables[0] (0.5) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                    "displayLines": "(0.5 + _S02_Buff_Value)",
                    "constants": [],
                    "variables": [
                      0.5,
                      "_S02_Buff_Value"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_S02_Char_Count",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_S02_Buff_Value",
                      "value": {
                        "operator": "Variables[0] (0.15) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                        "displayLines": "(0.15 + _S02_Buff_Value)",
                        "constants": [],
                        "variables": [
                          0.15,
                          "_S02_Buff_Value"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_S02_Char_Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_S02_Buff_Value",
                          "value": {
                            "operator": "Variables[0] (0.05) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                            "displayLines": "(0.05 + _S02_Buff_Value)",
                            "constants": [],
                            "variables": [
                              0.05,
                              "_S02_Buff_Value"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_Partner_Count_Show",
          "value": {
            "operator": "Variables[0] (12) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(12 + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              12,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_Partner_Count",
          "value": {
            "operator": "Variables[0] (12) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(12 + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              12,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1894879081\">Evernight_Ability02_Bonus</a>[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_Conv": {
              "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
              "displayLines": "(0.24 + S02_ExtraRatio)",
              "constants": [],
              "variables": [
                0.24,
                "S02_ExtraRatio"
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
              "displayLines": "_S02_Buff_Value",
              "constants": [],
              "variables": [
                "_S02_Buff_Value"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1894879081\">Evernight_Ability02_Bonus</a>[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_Conv": {
              "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
              "displayLines": "(0.24 + S02_ExtraRatio)",
              "constants": [],
              "variables": [
                0.24,
                "S02_ExtraRatio"
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
              "displayLines": "_S02_Buff_Value",
              "constants": [],
              "variables": [
                "_S02_Buff_Value"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}