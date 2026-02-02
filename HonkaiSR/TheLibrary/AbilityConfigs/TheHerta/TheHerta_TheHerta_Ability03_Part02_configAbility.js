const configAbility = {
  "fileName": "TheHerta_TheHerta_Ability03_Part02",
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
      "modifier": "TheHerta_Passive_MagicMark_42_Block"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "TheHerta_SKL03_Sort_Storge"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "__i",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]"
            }
          },
          {
            "name": "Sort by Modifier Value",
            "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
            "value": "Layer",
            "sortByHighest": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "__i",
          "value": {
            "operator": "Variables[0] (__i) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(__i + 1)",
            "constants": [
              1
            ],
            "variables": [
              "__i"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "__j",
          "value": 0
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "_Temp_Sort_Layer",
          "modifierName": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "multiplier": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                }
              },
              {
                "name": "Sort by Stat",
                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "sortByHighest": true
              },
              {
                "name": "Sort by Monster Rank",
                "byHighest": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "__j",
              "value": {
                "operator": "Variables[0] (__j) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(__j + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "__j"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "__j",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (__i) || RETURN",
                  "displayLines": "__i",
                  "constants": [],
                  "variables": [
                    "__i"
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
                  "modifier": "TheHerta_SKL03_Sort_Storge",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_Temp_Sort_Layer) || RETURN",
                    "displayLines": "_Temp_Sort_Layer",
                    "constants": [],
                    "variables": [
                      "_Temp_Sort_Layer"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "TheHerta_SKL03_Sort_Storge"
            }
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "_Temp_Sort_Layer",
          "modifierName": "TheHerta_SKL03_Sort_Storge",
          "multiplier": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
            "operator": "Variables[0] (_Temp_Sort_Layer) || RETURN",
            "displayLines": "_Temp_Sort_Layer",
            "constants": [],
            "variables": [
              "_Temp_Sort_Layer"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Hat",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_SKL03_EXTRADAMAGE",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Trace Activated",
            "conditionList": "Starved Landscape of Vacua"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "_SKL03_EXTRADAMAGE",
          "modifierName": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SKL03_EXTRADAMAGE",
          "value": {
            "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (_PointB3_Ratio) || MUL || RETURN",
            "displayLines": "(_SKL03_EXTRADAMAGE * _PointB3_Ratio)",
            "constants": [],
            "variables": [
              "_SKL03_EXTRADAMAGE",
              "_PointB3_Ratio"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "compareType": ">=",
            "value2": 3,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_SKL03_EXTRADAMAGE",
              "value": {
                "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (1.4) || ADD || RETURN",
                "displayLines": "(_SKL03_EXTRADAMAGE + 1.4)",
                "constants": [],
                "variables": [
                  "_SKL03_EXTRADAMAGE",
                  1.4
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SKL03_EXTRADAMAGE",
                  "value": {
                    "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (2.5) || ADD || RETURN",
                    "displayLines": "(_SKL03_EXTRADAMAGE + 2.5)",
                    "constants": [],
                    "variables": [
                      "_SKL03_EXTRADAMAGE",
                      2.5
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SKL03_EXTRADAMAGE",
                  "value": {
                    "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (4) || ADD || RETURN",
                    "displayLines": "(_SKL03_EXTRADAMAGE + 4)",
                    "constants": [],
                    "variables": [
                      "_SKL03_EXTRADAMAGE",
                      4
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
      "modifier": "TheHerta_Ability03_Bonus[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_Passive_MagicMark_42_Block"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (2) || Variables[1] (_SKL03_EXTRADAMAGE) || ADD || RETURN",
          "displayLines": "(2 + _SKL03_EXTRADAMAGE)",
          "constants": [],
          "variables": [
            2,
            "_SKL03_EXTRADAMAGE"
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
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill21",
      "skillSlot": "Skill",
      "enableSecondaryType": "ControlSkill02"
    },
    {
      "name": "Update Ability Enhance Button",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": "Show",
      "abilityName": "Skill"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Skill21_Layer",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (Skill21_Layer_Add) || RETURN",
        "displayLines": "Skill21_Layer_Add",
        "constants": [],
        "variables": [
          "Skill21_Layer_Add"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill21_Layer",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 1
        }
      ]
    },
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
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}