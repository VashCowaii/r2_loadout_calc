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
      "modifier": "<a class=\"gModGreen\" id=\"426098232\">TheHerta_Passive_MagicMark_42_Block</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "__i"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "TargetList": [
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
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(__i + 1)"
          },
          "variableName": "__i"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "__j"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "_Temp_Sort_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "multiplier": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "TargetList": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                }
              },
              {
                "name": "Sort by Stat",
                "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "sortByHighest": true
              },
              {
                "name": "Sort by Monster Rank",
                "sortByHighest": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(__j + 1)"
              },
              "variableName": "__j"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "__j",
                "compareType": "=",
                "value2": {
                  "displayLines": "__i"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>",
                  "addStacksPerTrigger": {
                    "displayLines": "_Temp_Sort_Layer"
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
        "TargetList": [
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
              "modifier": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>"
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
          "modifierName": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>",
          "multiplier": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
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
            "displayLines": "_Temp_Sort_Layer"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Hat"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_SKL03_EXTRADAMAGE"
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
            "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "_SKL03_EXTRADAMAGE",
          "modifierName": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_SKL03_EXTRADAMAGE * _PointB3_Ratio)"
          },
          "variableName": "_SKL03_EXTRADAMAGE"
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
              "value": {
                "displayLines": "(_SKL03_EXTRADAMAGE + 1.4)"
              },
              "variableName": "_SKL03_EXTRADAMAGE"
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
                  "value": {
                    "displayLines": "(_SKL03_EXTRADAMAGE + 2.5)"
                  },
                  "variableName": "_SKL03_EXTRADAMAGE"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_SKL03_EXTRADAMAGE + 4)"
                  },
                  "variableName": "_SKL03_EXTRADAMAGE"
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
      "modifier": "<a class=\"gModGreen\" id=\"555212333\">TheHerta_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.8"
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"426098232\">TheHerta_Passive_MagicMark_42_Block</a>"
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
          "displayLines": "(2 + _SKL03_EXTRADAMAGE)"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "displayLines": "Skill21_Layer_Add"
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
        "displayLines": "Skill21_Layer"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}