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
      "value": 1,
      "variableName": "TriggerItemBaseChance"
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
      "tags": [
        "AssistCaster"
      ],
      "skillName": "Skill04"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "CurScore"
      },
      "maximum": {
        "displayLines": "60"
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
                "displayLines": "CurScore"
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
              "variableName": "_critChance",
              "scope": "ContextTaskTemplate",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextTaskTemplate",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(((1 - _critChance) / 0.0039999997))"
              },
              "variableName": "_addCritChanceScore"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CLAMP</span>((MDF_CriticalChanceScore + _addCritChanceScore), 0, CurScore)"
              },
              "variableName": "MDF_CriticalChanceScore"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.0039999997 * MDF_CriticalChanceScore)"
              },
              "variableName": "MDF_CriticalChangeAdd"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.007999999 * (CurScore - MDF_CriticalChanceScore))"
              },
              "variableName": "MDF_CriticalDamageAdd"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "displayLines": "MDF_CriticalChangeAdd"
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
                "displayLines": "MDF_CriticalDamageAdd"
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
          "scope": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "CurScore"
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "displayLines": "CurScore"
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CurSpecialSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_CurSpecialSP + MDF_CurExtraSpecialSP)"
                  },
                  "variableName": "CurScore"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CurExtraSpecialSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_CurSpecialSP + MDF_CurExtraSpecialSP)"
                  },
                  "variableName": "CurScore"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
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
            "Switch to Action/Ability Context",
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
                "displayLines": "240"
              }
            }
          ]
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "onChange": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_epChange",
              "scope": "ContextModifier"
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
                      "displayLines": "_epChange"
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