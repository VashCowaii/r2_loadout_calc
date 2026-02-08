const configAbility = {
  "fileName": "Xueyi_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__900132102\">Xueyi_AbilityEidolon1_InserteDamageRatio</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "Is_Insert"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__142213103\">Xueyi_Passive01_InsertMark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Xueyi_PassiveAtk_Insert01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "priorityTag": "AvatarInsertAttackSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__461375302\">Xueyi_BP_Passive02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Xueyi_PassiveAtk_Insert01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1263094705\">Xueyi_Passive_Trace03</a>[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "PointB3_DifferencePassive01_Count",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_Tree03Layer",
              "multiplier": 1
            }
          ]
        }
      ],
      "description": "<span class=\"descriptionNumberColor\">MDF_Tree03Layer</span> overflowing Karma stacks.",
      "type": "Other",
      "statusName": "Perspicacious Mainframe"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-319233826\">Xueyi_AllDamageTypeAddedRatio</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1229539467\">Xueyi_Passive_Trace01</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1730434775\">Xueyi_CheckBreakDamageAddedRatioChange</a>"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1730434775\">Xueyi_CheckBreakDamageAddedRatioChange</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1730434775\">Xueyi_CheckBreakDamageAddedRatioChange</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_CurrentBreakDamageAddedRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageTypeAddedRatio",
              "value": {
                "operator": "Variables[0] (MDF_CurrentBreakDamageAddedRatio) || Variables[1] (1) || MUL || RETURN",
                "displayLines": "(MDF_CurrentBreakDamageAddedRatio * 1)",
                "constants": [],
                "variables": [
                  "MDF_CurrentBreakDamageAddedRatio",
                  1
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AllDamageTypeAddedRatio",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AllDamageTypeAddedRatio",
                  "value": {
                    "operator": "Variables[0] (2.4) || RETURN",
                    "displayLines": "2.4",
                    "constants": [],
                    "variables": [
                      2.4
                    ]
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-319233826\">Xueyi_AllDamageTypeAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTypeAddedRatio"
                  ]
                }
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
      "for": "<a class=\"gModGreen\" id=\"mod__444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Xueyi_PassiveLayer",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Xueyi_PassiveLayer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Xueyi_PassiveLayer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_PassiveLayer) || RETURN",
                  "displayLines": "MDF_PassiveLayer",
                  "constants": [],
                  "variables": [
                    "MDF_PassiveLayer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"461375302\">Xueyi_BP_Passive02</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Xueyi_PassiveLayer) || RETURN",
                    "displayLines": "_Xueyi_PassiveLayer",
                    "constants": [],
                    "variables": [
                      "_Xueyi_PassiveLayer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                    "displayLines": "_Xueyi_Count",
                    "constants": [],
                    "variables": [
                      "_Xueyi_Count"
                    ]
                  },
                  "priorState": "Active",
                  "bar#": 2
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Xueyi_PassiveLayer) || RETURN",
                    "displayLines": "_Xueyi_PassiveLayer",
                    "constants": [],
                    "variables": [
                      "_Xueyi_PassiveLayer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                    "displayLines": "_Xueyi_Count",
                    "constants": [],
                    "variables": [
                      "_Xueyi_Count"
                    ]
                  },
                  "bar#": 2
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PassiveLayer"
      ],
      "latentQueue": [
        "Is_Insert"
      ],
      "description": "When \"Karma\" is fully stacked, consume all \"Karma\" stacks and immediately use 1 Follow-Up ATK against enemies.",
      "type": "Other",
      "statusName": "Karma"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__213600244\">Xueyi_Passive_AddCount</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Difference",
                "compareType": "=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Difference",
                        "compareType": "<=",
                        "value2": 30
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Difference",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Change_Count",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Difference",
                        "compareType": ">",
                        "value2": 30
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Change_Count",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_Difference) || Constants[0] (30) || DIV || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_Difference / 30))",
                            "constants": [
                              30
                            ],
                            "variables": [
                              "FLOOR",
                              "MDF_Difference"
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
                    "value1": "MDF_Passive_StanceMaxCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Change_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_Passive_StanceMaxCount) || RETURN",
                          "displayLines": "MDF_Passive_StanceMaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_StanceMaxCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Change_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Passive_StanceMaxCount) || RETURN",
                            "displayLines": "MDF_Passive_StanceMaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_Passive_StanceMaxCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Passive_StanceMaxCount",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Perspicacious Mainframe"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PointB3_CurrentPassive01_Count",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PointB3_Sum_Passive01_Count",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PointB3_DifferencePassive01_Count",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "PointB3_CurrentPassive01_Count",
                      "modifierName": "<a class=\"gModGreen\" id=\"444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PointB3_Sum_Passive01_Count",
                      "value": {
                        "operator": "Variables[0] (PointB3_CurrentPassive01_Count) || Variables[1] (MDF_Change_Count) || ADD || RETURN",
                        "displayLines": "(PointB3_CurrentPassive01_Count + MDF_Change_Count)",
                        "constants": [],
                        "variables": [
                          "PointB3_CurrentPassive01_Count",
                          "MDF_Change_Count"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "PointB3_Sum_Passive01_Count",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "PointB3_DifferencePassive01_Count",
                          "value": {
                            "operator": "Variables[0] (PointB3_Sum_Passive01_Count) || Variables[1] (_Xueyi_Count) || SUB || RETURN",
                            "displayLines": "(PointB3_Sum_Passive01_Count - _Xueyi_Count)",
                            "constants": [],
                            "variables": [
                              "PointB3_Sum_Passive01_Count",
                              "_Xueyi_Count"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "PointB3_DifferencePassive01_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (6) || RETURN",
                              "displayLines": "6",
                              "constants": [],
                              "variables": [
                                6
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "PointB3_DifferencePassive01_Count",
                              "value": {
                                "operator": "Variables[0] (6) || RETURN",
                                "displayLines": "6",
                                "constants": [],
                                "variables": [
                                  6
                                ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1263094705\">Xueyi_Passive_Trace03</a>[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "variableName": "PointB3_CurrentPassive01_Count",
                              "modifierName": "<a class=\"gModGreen\" id=\"-1263094705\">Xueyi_Passive_Trace03</a>[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
                              "multiplier": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "PointB3_DifferencePassive01_Count",
                              "value": {
                                "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || Variables[1] (PointB3_CurrentPassive01_Count) || ADD || RETURN",
                                "displayLines": "(PointB3_DifferencePassive01_Count + PointB3_CurrentPassive01_Count)",
                                "constants": [],
                                "variables": [
                                  "PointB3_DifferencePassive01_Count",
                                  "PointB3_CurrentPassive01_Count"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "PointB3_DifferencePassive01_Count",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (6) || RETURN",
                                  "displayLines": "6",
                                  "constants": [],
                                  "variables": [
                                    6
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB3_DifferencePassive01_Count",
                                  "value": {
                                    "operator": "Variables[0] (6) || RETURN",
                                    "displayLines": "6",
                                    "constants": [],
                                    "variables": [
                                      6
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1263094705\">Xueyi_Passive_Trace03</a>[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
                              "counter": {
                                "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || RETURN",
                                "displayLines": "PointB3_DifferencePassive01_Count",
                                "constants": [],
                                "variables": [
                                  "PointB3_DifferencePassive01_Count"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1263094705\">Xueyi_Passive_Trace03</a>[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
                              "counter": {
                                "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || RETURN",
                                "displayLines": "PointB3_DifferencePassive01_Count",
                                "constants": [],
                                "variables": [
                                  "PointB3_DifferencePassive01_Count"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "_Passive_Num",
                      "modifierName": "<a class=\"gModGreen\" id=\"444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Passive_SumNum",
                      "value": {
                        "operator": "Variables[0] (MDF_Change_Count) || Variables[1] (_Passive_Num) || ADD || RETURN",
                        "displayLines": "(MDF_Change_Count + _Passive_Num)",
                        "constants": [],
                        "variables": [
                          "MDF_Change_Count",
                          "_Passive_Num"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Passive_SumNum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Passive_LoopCount",
                          "value": {
                            "operator": "Variables[0] (_Xueyi_Count) || Variables[1] (_Passive_Num) || SUB || RETURN",
                            "displayLines": "(_Xueyi_Count - _Passive_Num)",
                            "constants": [],
                            "variables": [
                              "_Xueyi_Count",
                              "_Passive_Num"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Passive_LoopCount",
                          "value": {
                            "operator": "Variables[0] (MDF_Change_Count) || RETURN",
                            "displayLines": "MDF_Change_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Change_Count"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Passive_LoopCount",
                      "value": {
                        "operator": "Variables[0] (MDF_Change_Count) || RETURN",
                        "displayLines": "MDF_Change_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Change_Count"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_Passive_LoopCount) || RETURN",
                    "displayLines": "_Passive_LoopCount",
                    "constants": [],
                    "variables": [
                      "_Passive_LoopCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                        "displayLines": "_Xueyi_Count",
                        "constants": [],
                        "variables": [
                          "_Xueyi_Count"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PassiveLayer": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
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
              "name": "Define Custom Variable",
              "variableName": "MDF_Change_Count",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Passive_Num",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Passive_SumNum",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Passive_LoopCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Difference",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Change_Stance",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__674322254\">Xueyi_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Break Effect Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SkillRank04_BreakDamageAttackRatio) || RETURN",
                "displayLines": "MDF_SkillRank04_BreakDamageAttackRatio",
                "constants": [],
                "variables": [
                  "MDF_SkillRank04_BreakDamageAttackRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SkillRank04_BreakDamageAttackRatio"
      ],
      "latentQueue": [
        "Is_Ultra"
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_SkillRank04_BreakDamageAttackRatio</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Break Effect Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__462393770\">Xueyi_Trace02</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "MDF_SkillTree02_AllDamageTypeAddedRatio"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SkillTree02_AllDamageTypeAddedRatio"
      ],
      "latentQueue": [
        "Is_Ultra"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1101528365\">Xueyi_Ability03_WeakType_BUFF</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Skill03_StancePreCalc) || RETURN",
                "displayLines": "MDF_Skill03_StancePreCalc",
                "constants": [],
                "variables": [
                  "MDF_Skill03_StancePreCalc"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Is_Ultra"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__456113055\">Xueyi_Ability03_AddAttackRatio</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Define Custom Variable with Toughness Reduction Est",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "targetDefender": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "dmgType": "Quantum",
              "attackType": "Ultimate",
              "toughnessValue": {
                "operator": "Variables[0] (ST Toughness Value) || RETURN",
                "displayLines": "ST Toughness Value",
                "constants": [],
                "variables": [
                  "ST Toughness Value"
                ]
              },
              "toughnessValueForcedPercent": {
                "operator": "Variables[0] (MDF_Skill03_StancePreCalc) || RETURN",
                "displayLines": "MDF_Skill03_StancePreCalc",
                "constants": [],
                "variables": [
                  "MDF_Skill03_StancePreCalc"
                ]
              },
              "reduceAllToughness": true,
              "variableName": "MDF_PreCalcStanceDamage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_PreCalcStanceDamage",
                    "compareType": "<=",
                    "value2": 30
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_PreCalcStanceDamage",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PreCalcStanceDamage",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PreCalcStanceDamage",
                    "compareType": ">",
                    "value2": 30
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PreCalcStanceDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_PreCalcStanceDamage) || Constants[0] (30) || DIV || RETURN",
                        "displayLines": "(MDF_PreCalcStanceDamage / 30)",
                        "constants": [
                          30
                        ],
                        "variables": [
                          "MDF_PreCalcStanceDamage"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AddAttackRatio",
              "value": {
                "operator": "Variables[0] (0.15) || Variables[1] (MDF_PreCalcStanceDamage) || MUL || RETURN",
                "displayLines": "(0.15 * MDF_PreCalcStanceDamage)",
                "constants": [],
                "variables": [
                  0.15,
                  "MDF_PreCalcStanceDamage"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AddAttackRatio",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AddAttackRatio",
                  "value": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
                    ]
                  }
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "MDF_AddAttackRatio"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1316595895\">Xueyi_Passive_OnListenStance</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Taking Toughness DMG [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Is_Insert",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Is_Ultra",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_Change_Stance",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Difference",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Constants[0] (0.5) || Variables[1] (MDF_Difference) || ADD || Variables[2] (MDF_Change_Stance) || ADD || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))",
                        "constants": [
                          0.5
                        ],
                        "variables": [
                          "FLOOR",
                          "MDF_Difference",
                          "MDF_Change_Stance"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"213600244\">Xueyi_Passive_AddCount</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_Change_Stance",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Difference",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Constants[0] (0.5) || Variables[1] (MDF_Difference) || ADD || Variables[2] (MDF_Change_Stance) || ADD || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))",
                        "constants": [
                          0.5
                        ],
                        "variables": [
                          "FLOOR",
                          "MDF_Difference",
                          "MDF_Change_Stance"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_OnEnterBattle_Flag",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Xueyi_OnEnterBattle_Attack",
                          "value": 1
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_Change_Stance",
                  "value": "ParamValue2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Difference",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Constants[0] (0.5) || Variables[1] (MDF_Difference) || ADD || Variables[2] (MDF_Change_Stance) || ADD || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))",
                    "constants": [
                      0.5
                    ],
                    "variables": [
                      "FLOOR",
                      "MDF_Difference",
                      "MDF_Change_Stance"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Xueyi_Attack"
      ]
    }
  ],
  "references": []
}