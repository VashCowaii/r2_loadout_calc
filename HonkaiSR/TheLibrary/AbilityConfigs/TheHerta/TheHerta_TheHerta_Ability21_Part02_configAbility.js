const configAbility = {
  "fileName": "TheHerta_TheHerta_Ability21_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1324497127\">TheHerta_Ability21</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "S03_Mark_Count",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "valueType": "Layer",
          "variableName": "S03_Mark_Count",
          "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "valueType": "Layer",
          "variableName": "Orig_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                    }
                  },
                  {
                    "name": "Sort by Modifier Value",
                    "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                    "value": "Layer",
                    "sortByHighest": true
                  }
                ]
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_ADJ_TMP_COUNT",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "S03_Mark_Count",
                  "value": {
                    "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (_ADJ_TMP_COUNT) || Variables[2] (0.5) || MUL || ADD || RETURN",
                    "displayLines": "(S03_Mark_Count + (_ADJ_TMP_COUNT * 0.5))",
                    "constants": [],
                    "variables": [
                      "S03_Mark_Count",
                      "_ADJ_TMP_COUNT",
                      0.5
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
            "name": "Trace Activated",
            "conditionList": "Aloofly Honest"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "S03_Mark_Count",
                "compareType": ">=",
                "value2": 42
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1341843949\">TheHerta_PointB1_42</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
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
            "modifier": "<a class=\"gModGreen\" id=\"-2073297144\">TheHerta_MageNum_2</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "S03_Mark_Count",
              "value": {
                "operator": "Variables[0] (S03_Mark_Count) || Constants[0] (2) || MUL || RETURN",
                "displayLines": "(S03_Mark_Count * 2)",
                "constants": [
                  2
                ],
                "variables": [
                  "S03_Mark_Count"
                ]
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "stackLimit": {
                "operator": "Variables[0] (42) || RETURN",
                "displayLines": "42",
                "constants": [],
                "variables": [
                  42
                ]
              },
              "valuePerStack": {
                "MagicMark_MaxCount_Max": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MagicMark_MaxCount": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MagicMark_Ratio": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (15) || RETURN",
                "displayLines": "15",
                "constants": [],
                "variables": [
                  15
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "stackLimit": {
                "operator": "Variables[0] (42) || RETURN",
                "displayLines": "42",
                "constants": [],
                "variables": [
                  42
                ]
              },
              "valuePerStack": {
                "MagicMark_MaxCount_Max": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MagicMark_MaxCount": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MagicMark_Ratio": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1142002606\">TheHerta_SKL02</a>",
      "variables": {
        "DV_DamageRatio1": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "DV_MarkAddLayer": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "DV_MarkMaxLayer": {
          "operator": "Variables[0] (42) || RETURN",
          "displayLines": "42",
          "constants": [],
          "variables": [
            42
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Orig_Layer",
        "compareType": ">=",
        "value2": -1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 10,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "S03_Mark_Count",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "S03_Mark_Damage",
              "value": {
                "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (0.08) || MUL || RETURN",
                "displayLines": "(S03_Mark_Count * 0.08)",
                "constants": [],
                "variables": [
                  "S03_Mark_Count",
                  0.08
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (0.08) || MUL || Variables[2] (0.4) || ADD || RETURN",
                      "displayLines": "((S03_Mark_Count * 0.08) + 0.4)",
                      "constants": [],
                      "variables": [
                        "S03_Mark_Count",
                        0.08,
                        0.4
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (0.04) || MUL || Variables[2] (0.4) || ADD || RETURN",
                      "displayLines": "((S03_Mark_Count * 0.04) + 0.4)",
                      "constants": [],
                      "variables": [
                        "S03_Mark_Count",
                        0.04,
                        0.4
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "Toughness": {
                  "displayLines": 15
                },
                "Tags": null
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1527090005\">ReduceNextActionDelay</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "parameter[0]_NormalizedValue": {
              "operator": "Variables[0] (0.35) || RETURN",
              "displayLines": "0.35",
              "constants": [],
              "variables": [
                0.35
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
        "modifier": "<a class=\"gModGreen\" id=\"1324497127\">TheHerta_Ability21</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1324497127\">TheHerta_Ability21</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1341843949\">TheHerta_PointB1_42</a>"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Skill21_Layer",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": -1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill21_Layer",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Skill21_Layer) || RETURN",
            "displayLines": "Skill21_Layer",
            "constants": [],
            "variables": [
              "Skill21_Layer"
            ]
          },
          "priorState": "Active"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Skill21_Layer) || RETURN",
            "displayLines": "Skill21_Layer",
            "constants": [],
            "variables": [
              "Skill21_Layer"
            ]
          },
          "priorState": "Normal"
        },
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill02",
          "skillSlot": "Skill",
          "enableSecondaryType": "ControlSkill02"
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Hide",
          "abilityName": "Skill"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}