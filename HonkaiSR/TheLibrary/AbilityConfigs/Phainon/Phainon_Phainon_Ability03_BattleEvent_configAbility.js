const configAbility = {
  "fileName": "Phainon_Phainon_Ability03_BattleEvent",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"62975260\">Phainon_Ability03_BattleEvent_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"320399697\">Phainon_Ability03_BattleEvent_BaseSpeed</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (BE_Speed) || RETURN",
          "displayLines": "BE_Speed",
          "constants": [],
          "variables": [
            "BE_Speed"
          ]
        }
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": {
        "operator": "Variables[0] (BE_Index) || Variables[1] (MAX) || Constants[0] (1) || Variables[2] (BE_Count) || Constants[0] (1) || SUB || PARAM_2 || FUNCTION || DIV || RETURN",
        "displayLines": "(BE_Index / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, (BE_Count - 1)))",
        "constants": [
          1
        ],
        "variables": [
          "BE_Index",
          "MAX",
          "BE_Count"
        ]
      }
    },
    {
      "name": "Show Attack Time",
      "time": {
        "operator": "Variables[0] (BE_Count) || Variables[1] (BE_Index) || SUB || Constants[0] (1) || SUB || RETURN",
        "displayLines": "((BE_Count - BE_Index) - 1)",
        "constants": [
          1
        ],
        "variables": [
          "BE_Count",
          "BE_Index"
        ]
      },
      "on": null,
      "show": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BE_Index",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (BE_Count) || Constants[0] (1) || SUB || RETURN",
          "displayLines": "(BE_Count - 1)",
          "constants": [
            1
          ],
          "variables": [
            "BE_Count"
          ]
        }
      },
      "passed": [
        {
          "name": "Update Action Bar Display",
          "triggerName": "Level_2",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1074413210\">Phainon_FinalBE_Hint</a>"
        }
      ],
      "failed": [
        {
          "name": "Update Action Bar Display",
          "triggerName": "Level_1",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"133453837\">Phainon_NormalBE_Hint</a>"
        }
      ]
    },
    {
      "name": "Block Advance/Delay Effects",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "whitelist": {
        "name": "Target Name",
        "target": "{{Battle Event's Caster}} + {{Caster}}"
      },
      "whitelistTag": 130,
      "whitelistType": "Bit_Decrease"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1583163696\">M_Phainon_10_TriggerSoundOnTurnStart_Advantage</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Lifetime",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Died [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Khaslana(Battle Event Cluster)}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Lifetime",
                  "value": {
                    "operator": "Variables[0] (MDF_Lifetime) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_Lifetime - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Lifetime"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2106985142\">M_Phainon_10_TriggerSoundOnTurnStart</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__62975260\">Phainon_Ability03_BattleEvent_Passive</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_0",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1074413210\">Phainon_FinalBE_Hint</a>"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "abilityName": "Phainon_Ability31_SelectTarget",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagName": "Break"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Battle Event's Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1583163696\">M_Phainon_10_TriggerSoundOnTurnStart_Advantage</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Battle Event's Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2106985142\">M_Phainon_10_TriggerSoundOnTurnStart</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1583163696\">M_Phainon_10_TriggerSoundOnTurnStart_Advantage</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2106985142\">M_Phainon_10_TriggerSoundOnTurnStart</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Phainon_BEInsertAction",
                  "canInjectUltimates": true,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "afterInjection": []
                }
              ]
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__320399697\">Phainon_Ability03_BattleEvent_BaseSpeed</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
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
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_PropertyValue",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    }
  ]
}