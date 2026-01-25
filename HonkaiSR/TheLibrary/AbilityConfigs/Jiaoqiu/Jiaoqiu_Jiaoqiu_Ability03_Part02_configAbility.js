const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_Layer_Total",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "_Temp_Val",
          "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Layer_Total",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (_Temp_Val) || RETURN",
              "displayLines": "_Temp_Val",
              "constants": [],
              "variables": [
                "_Temp_Val"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Layer_Total",
              "value": {
                "operator": "Variables[0] (_Temp_Val) || RETURN",
                "displayLines": "_Temp_Val",
                "constants": [],
                "variables": [
                  "_Temp_Val"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Layer_Total",
        "compareType": ">=",
        "value2": 0.5
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Temp_Val",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Temp_Val",
                  "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "multiplier": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Layer_Total",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (_Temp_Val) || RETURN",
                  "displayLines": "_Temp_Val",
                  "constants": [],
                  "variables": [
                    "_Temp_Val"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DOT_Ratio": {
                      "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                      "displayLines": "SkillP01_DotRatio",
                      "constants": [],
                      "variables": [
                        "SkillP01_DotRatio"
                      ]
                    },
                    "AbilityRank_Eidolon2_P1_Ratio": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "AbilityRank_Eidolon6_P3_DownRatio": {
                      "operator": "Variables[0] (0.03) || RETURN",
                      "displayLines": "0.03",
                      "constants": [],
                      "variables": [
                        0.03
                      ]
                    },
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_Layer_Total) || Variables[1] (_Temp_Val) || SUB || RETURN",
                    "displayLines": "(_Layer_Total - _Temp_Val)",
                    "constants": [],
                    "variables": [
                      "_Layer_Total",
                      "_Temp_Val"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Jiaoqiu_Aura",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "Ability03_P1_DamagePercentage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "Ability03_P2_Ratio": 0,
        "Ability03_P3_Value": 0,
        "Ability03_P3_Ratio": 0,
        "Ability03_P4_Duration": 0
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (_MaxLayer) || RETURN",
            "displayLines": "_MaxLayer",
            "constants": [],
            "variables": [
              "_MaxLayer"
            ]
          },
          "valuePerStack": {
            "DOT_Ratio": {
              "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
              "displayLines": "SkillP01_DotRatio",
              "constants": [],
              "variables": [
                "SkillP01_DotRatio"
              ]
            },
            "AbilityRank_Eidolon2_P1_Ratio": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "AbilityRank_Eidolon6_P3_DownRatio": {
              "operator": "Variables[0] (0.03) || RETURN",
              "displayLines": "0.03",
              "constants": [],
              "variables": [
                0.03
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_PropertyValue_2": {
              "operator": "Variables[0] (0.05) || RETURN",
              "displayLines": "0.05",
              "constants": [],
              "variables": [
                0.05
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (Rank01_Stack_Layer) || RETURN",
            "displayLines": "Rank01_Stack_Layer",
            "constants": [],
            "variables": [
              "Rank01_Stack_Layer"
            ]
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    "Trigger: Ability End"
  ],
  "references": []
}