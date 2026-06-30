const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_PassiveAbility01",
  "childAbilityList": [
    "SilverWolfL_SilverWolf999_PassiveAbility01",
    "SilverWolfL_SilverWolf999_UltraEnd_Insert",
    "SilverWolfL_SilverWolf999_UltraEnd_Insert_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2030021673\">SilverWolf999_Passive01</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TriggerItemBaseChance",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1513010043\">SilverWolf999_SP</a>[<span class=\"descriptionNumberColor\">Hidden MMR</span>]"
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    "Deleted bullshit",
    {
      "name": "Add Ability Tag",
      "skillName": "Skill04",
      "tag": [
        "AssistCaster"
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (CurScore) || RETURN",
        "displayLines": "CurScore",
        "constants": [],
        "variables": [
          "CurScore"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (60) || RETURN",
        "displayLines": "60",
        "constants": [],
        "variables": [
          60
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1513010043\">SilverWolf999_SP</a>[<span class=\"descriptionNumberColor\">Hidden MMR</span>]",
      "modifierFlags": [
        "RetainCountZero"
      ],
      "description": "After reaching <span class=\"descriptionNumberColor\">#SkillP01_P1_NeedSP</span> points, can activate Ultimate. When exiting the \"Godmode Player\" state, clears \"Hidden MMR\".<br>The current \"Hidden MMR\" increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalChangeAdd</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CriticalDamageAdd</span>.",
      "type": "Buff",
      "statusName": "Hidden MMR",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "value": {
                "operator": "Variables[0] (CurScore) || RETURN",
                "displayLines": "CurScore",
                "constants": [],
                "variables": [
                  "CurScore"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__161763618\">_T_SilverWolf999_StackPropertyByScore</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_critChance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
              "context": "ContextTaskTemplate"
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextTaskTemplate",
              "variableName": "_addCritChanceScore",
              "value": {
                "operator": "Variables[0] (CEIL) || Constants[0] (1) || Variables[1] (_critChance) || SUB || Variables[2] (0.0039999997) || DIV || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(((1 - _critChance) / 0.0039999997))",
                "constants": [
                  1
                ],
                "variables": [
                  "CEIL",
                  "_critChance",
                  0.0039999997
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CriticalChanceScore",
              "value": {
                "operator": "Variables[0] (CLAMP) || Variables[1] (MDF_CriticalChanceScore) || Variables[2] (_addCritChanceScore) || ADD || Constants[0] (0) || Variables[3] (CurScore) || PARAM_3 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CLAMP</span>((MDF_CriticalChanceScore + _addCritChanceScore), 0, CurScore)",
                "constants": [
                  0
                ],
                "variables": [
                  "CLAMP",
                  "MDF_CriticalChanceScore",
                  "_addCritChanceScore",
                  "CurScore"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CriticalChangeAdd",
              "value": {
                "operator": "Variables[0] (0.0039999997) || Variables[1] (MDF_CriticalChanceScore) || MUL || RETURN",
                "displayLines": "(0.0039999997 * MDF_CriticalChanceScore)",
                "constants": [],
                "variables": [
                  0.0039999997,
                  "MDF_CriticalChanceScore"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CriticalDamageAdd",
              "value": {
                "operator": "Variables[0] (0.007999999) || Variables[1] (CurScore) || Variables[2] (MDF_CriticalChanceScore) || SUB || MUL || RETURN",
                "displayLines": "(0.007999999 * (CurScore - MDF_CriticalChanceScore))",
                "constants": [],
                "variables": [
                  0.007999999,
                  "CurScore",
                  "MDF_CriticalChanceScore"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalChangeAdd) || RETURN",
                "displayLines": "MDF_CriticalChangeAdd",
                "constants": [],
                "variables": [
                  "MDF_CriticalChangeAdd"
                ]
              },
              "isRefresh": true
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalDamageAdd) || RETURN",
                "displayLines": "MDF_CriticalDamageAdd",
                "constants": [],
                "variables": [
                  "MDF_CriticalDamageAdd"
                ]
              },
              "isRefresh": true
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CurScore",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurScore) || RETURN",
                    "displayLines": "CurScore",
                    "constants": [],
                    "variables": [
                      "CurScore"
                    ]
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (CurScore) || RETURN",
                    "displayLines": "CurScore",
                    "constants": [],
                    "variables": [
                      "CurScore"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "SpecialEnergy%",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CurSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurScore",
                  "value": {
                    "operator": "Variables[0] (MDF_CurSpecialSP) || Variables[1] (MDF_CurExtraSpecialSP) || ADD || RETURN",
                    "displayLines": "(MDF_CurSpecialSP + MDF_CurExtraSpecialSP)",
                    "constants": [],
                    "variables": [
                      "MDF_CurSpecialSP",
                      "MDF_CurExtraSpecialSP"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CurExtraSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurScore",
                  "value": {
                    "operator": "Variables[0] (MDF_CurSpecialSP) || Variables[1] (MDF_CurExtraSpecialSP) || ADD || RETURN",
                    "displayLines": "(MDF_CurSpecialSP + MDF_CurExtraSpecialSP)",
                    "constants": [],
                    "variables": [
                      "MDF_CurSpecialSP",
                      "MDF_CurExtraSpecialSP"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2030021673\">SilverWolf999_Passive01</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Switch to Action/Ability Context"
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "adjustment": "Set",
              "ignoreBlock": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (240) || RETURN",
                "displayLines": "240",
                "constants": [],
                "variables": [
                  240
                ]
              }
            }
          ]
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "whenValueChanges": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_epChange"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_epChange",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (_epChange) || RETURN",
                      "displayLines": "_epChange",
                      "constants": [],
                      "variables": [
                        "_epChange"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}