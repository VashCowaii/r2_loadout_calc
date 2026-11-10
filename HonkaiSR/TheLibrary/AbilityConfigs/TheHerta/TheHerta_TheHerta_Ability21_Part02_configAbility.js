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
      "value": 0,
      "variableName": "S03_Mark_Count"
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
                "TargetList": [
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
                    "valueType": "Stacks",
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
                  "value": {
                    "displayLines": "(S03_Mark_Count + (_ADJ_TMP_COUNT * 0.5))"
                  },
                  "variableName": "S03_Mark_Count"
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
                      "displayLines": "0.5"
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
              "value": {
                "displayLines": "(S03_Mark_Count * 2)"
              },
              "variableName": "S03_Mark_Count"
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
                "displayLines": "42"
              },
              "valuePerStack": {
                "MagicMark_MaxCount_Max": {
                  "displayLines": "42"
                },
                "MagicMark_MaxCount": {
                  "displayLines": "42"
                },
                "MagicMark_Ratio": {
                  "displayLines": "1"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "15"
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
                "displayLines": "42"
              },
              "valuePerStack": {
                "MagicMark_MaxCount_Max": {
                  "displayLines": "42"
                },
                "MagicMark_MaxCount": {
                  "displayLines": "42"
                },
                "MagicMark_Ratio": {
                  "displayLines": "1"
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
          "displayLines": "0.8"
        },
        "DV_MarkAddLayer": {
          "displayLines": "1"
        },
        "DV_MarkMaxLayer": {
          "displayLines": "42"
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
              "value": {
                "displayLines": "(S03_Mark_Count * 0.08)"
              },
              "variableName": "S03_Mark_Damage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
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
                      "displayLines": "((S03_Mark_Count * 0.08) + 0.4)"
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
                      "displayLines": "((S03_Mark_Count * 0.04) + 0.4)"
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
                  "displayLines": "0.4"
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
              "displayLines": "0.35"
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
            "displayLines": "Skill21_Layer"
          },
          "priorState": "Active"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Skill21_Layer"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}