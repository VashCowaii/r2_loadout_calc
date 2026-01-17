const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_RatioAttack",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_Ratio_00_EnergyBar_Flag",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Dr_Ratio_Insert_Flag_Caster"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "Dr_Ratio_Insert_Flag"
    },
    {
      "name": "Define Custom Variable with Status Counter",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_DebuffCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_DebuffCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Dr_Ratio_InsertChance",
          "value": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Dr_Ratio_InsertChance",
          "value": {
            "operator": "Variables[0] (_Dr_Ratio_InsertChance) || Variables[1] (_DebuffCount) || Variables[2] (0.2) || MUL || ADD || RETURN",
            "displayLines": "(_Dr_Ratio_InsertChance + (_DebuffCount * 0.2))",
            "constants": [],
            "variables": [
              "_Dr_Ratio_InsertChance",
              "_DebuffCount",
              0.2
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Dr_Ratio_InsertChance",
          "value": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "operator": "Variables[0] (_Dr_Ratio_InsertChance) || RETURN",
              "displayLines": "_Dr_Ratio_InsertChance",
              "constants": [],
              "variables": [
                "_Dr_Ratio_InsertChance"
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Dr_Ratio_Insert_Flag"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_DebuffCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Summation"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCount",
                "compareType": ">=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EffDebuffCount",
                  "value": 5
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EffDebuffCount",
                  "value": {
                    "operator": "Variables[0] (_DebuffCount) || RETURN",
                    "displayLines": "_DebuffCount",
                    "constants": [],
                    "variables": [
                      "_DebuffCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SkillTree_SkillFlag",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Summation"
      },
      "passed": [
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DebuffCount",
            "compareType": ">=",
            "value2": 1
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DebuffCount",
              "value": {
                "operator": "Variables[0] (_DebuffCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_DebuffCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_DebuffCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCount",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DebuffCount",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Summation"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Dr_Ratio_Ability03_PointB1_Bonus[<span class=\"descriptionNumberColor\">Summation</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (6) || Variables[1] (4) || ADD || RETURN",
                    "displayLines": "(6 + 4)",
                    "constants": [],
                    "variables": [
                      6,
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.025) || RETURN",
                      "displayLines": "0.025",
                      "constants": [],
                      "variables": [
                        0.025
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Dr_Ratio_Ability03_PointB1_Bonus[<span class=\"descriptionNumberColor\">Summation</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (6) || RETURN",
                    "displayLines": "6",
                    "constants": [],
                    "variables": [
                      6
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.025) || RETURN",
                      "displayLines": "0.025",
                      "constants": [],
                      "variables": [
                        0.025
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
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
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_EffDebuffCount",
            "compareType": ">=",
            "value2": 1
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "_EffDebuffCount",
              "value": {
                "operator": "Variables[0] (_EffDebuffCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_EffDebuffCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_EffDebuffCount"
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
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Dr_Ratio_Insert_Flag_Caster"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Inference"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Dr_Ratio_Slow[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
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
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
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
        "modifier": "Dr_Ratio_Insert_Flag_Caster"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Dr_Ratio_InsertAbility"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_SkillTree_SkillFlag",
      "value": 1
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Slow[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_Dr_RatioAttack",
        "_Dr_Ratio_00_EnergyBar_Flag",
        "_SkillTree_SkillFlag"
      ],
      "description": "Effect RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Effect RES Reduction",
      "statusName": "Effect RES Reduction"
    }
  ]
}