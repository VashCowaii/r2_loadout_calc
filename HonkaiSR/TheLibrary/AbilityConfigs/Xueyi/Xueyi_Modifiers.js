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
      "for": "<a class=\"gModGreen\" id=\"mod__212393484\">ADV_StageAbility_Maze_Xueyi</a>",
      "counter": 1,
      "stackType": "Merge"
    },
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
              "priorityTag": "CharacterAttackFromSelf",
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
                  "priorityTag": "CharacterAttackFromSelf",
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
      "description": "<span class=\"descriptionNumberColor\">MDF_Tree03Layer</span> overflowing Karma stacks.",
      "type": "Other",
      "statusName": "Perspicacious Mainframe",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "PointB3_DifferencePassive01_Count"
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
      ]
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
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
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1730434775\">Xueyi_CheckBreakDamageAddedRatioChange</a>"
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
              "variableName": "MDF_CurrentBreakDamageAddedRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_CurrentBreakDamageAddedRatio * 1)"
              },
              "variableName": "MDF_AllDamageTypeAddedRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AllDamageTypeAddedRatio",
                "compareType": ">=",
                "value2": {
                  "displayLines": "2.4"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "2.4"
                  },
                  "variableName": "MDF_AllDamageTypeAddedRatio"
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
                  "displayLines": "MDF_AllDamageTypeAddedRatio"
                }
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1730434775\">Xueyi_CheckBreakDamageAddedRatioChange</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When \"Karma\" is fully stacked, consume all \"Karma\" stacks and immediately use 1 Follow-Up ATK against enemies.",
      "type": "Other",
      "statusName": "Karma",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Xueyi_PassiveLayer"
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
                  "displayLines": "MDF_PassiveLayer"
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
                    "displayLines": "_Xueyi_PassiveLayer"
                  },
                  "maximum": {
                    "displayLines": "_Xueyi_Count"
                  },
                  "priorState": "Active",
                  "bar#": 2
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "_Xueyi_PassiveLayer"
                  },
                  "maximum": {
                    "displayLines": "_Xueyi_Count"
                  },
                  "bar#": 2
                }
              ]
            }
          ]
        }
      ]
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
                      "value": 1,
                      "variableName": "MDF_Change_Count"
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
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_Difference / 30))"
                          },
                          "variableName": "MDF_Change_Count"
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
                          "displayLines": "MDF_Passive_StanceMaxCount"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "MDF_Passive_StanceMaxCount"
                          },
                          "variableName": "MDF_Change_Count"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_Passive_StanceMaxCount"
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
                      "value": 0,
                      "variableName": "PointB3_CurrentPassive01_Count"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "PointB3_Sum_Passive01_Count"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "PointB3_DifferencePassive01_Count"
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
                      "value": {
                        "displayLines": "(PointB3_CurrentPassive01_Count + MDF_Change_Count)"
                      },
                      "variableName": "PointB3_Sum_Passive01_Count"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "PointB3_Sum_Passive01_Count",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "_Xueyi_Count"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(PointB3_Sum_Passive01_Count - _Xueyi_Count)"
                          },
                          "variableName": "PointB3_DifferencePassive01_Count"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "PointB3_DifferencePassive01_Count",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "6"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "6"
                              },
                              "variableName": "PointB3_DifferencePassive01_Count"
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
                              "value": {
                                "displayLines": "(PointB3_DifferencePassive01_Count + PointB3_CurrentPassive01_Count)"
                              },
                              "variableName": "PointB3_DifferencePassive01_Count"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "PointB3_DifferencePassive01_Count",
                                "compareType": ">=",
                                "value2": {
                                  "displayLines": "6"
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "6"
                                  },
                                  "variableName": "PointB3_DifferencePassive01_Count"
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
                                "displayLines": "PointB3_DifferencePassive01_Count"
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
                                "displayLines": "PointB3_DifferencePassive01_Count"
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
                      "value": {
                        "displayLines": "(MDF_Change_Count + _Passive_Num)"
                      },
                      "variableName": "_Passive_SumNum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Passive_SumNum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "_Xueyi_Count"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_Xueyi_Count - _Passive_Num)"
                          },
                          "variableName": "_Passive_LoopCount"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "MDF_Change_Count"
                          },
                          "variableName": "_Passive_LoopCount"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "MDF_Change_Count"
                      },
                      "variableName": "_Passive_LoopCount"
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "displayLines": "_Passive_LoopCount"
                  },
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"444597683\">Xueyi_BP_Passive01</a>[<span class=\"descriptionNumberColor\">Karma</span>]",
                      "stackLimit": {
                        "displayLines": "_Xueyi_Count"
                      },
                      "valuePerStack": {
                        "MDF_PassiveLayer": {
                          "displayLines": "_Xueyi_Count"
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
              "value": 0,
              "variableName": "MDF_Change_Count"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Passive_Num"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Passive_SumNum"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Passive_LoopCount"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_Difference"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_Change_Stance"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__674322254\">Xueyi_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Break Effect Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_SkillRank04_BreakDamageAttackRatio</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Break Effect Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_SkillRank04_BreakDamageAttackRatio"
              }
            }
          ]
        }
      ]
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_Skill03_StancePreCalc"
              }
            }
          ]
        }
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
                "target": "{{Parameter Target}}"
              },
              "dmgType": "Quantum",
              "attackType": "Ultimate",
              "toughnessValue": {
                "displayLines": "ST Toughness Value"
              },
              "toughnessValueForcedPercent": {
                "displayLines": "MDF_Skill03_StancePreCalc"
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
                  "value": 1,
                  "variableName": "MDF_PreCalcStanceDamage"
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
                      "value": {
                        "displayLines": "(MDF_PreCalcStanceDamage / 30)"
                      },
                      "variableName": "MDF_PreCalcStanceDamage"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.15 * MDF_PreCalcStanceDamage)"
              },
              "variableName": "MDF_AddAttackRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AddAttackRatio",
                "compareType": ">=",
                "value2": {
                  "displayLines": "0.6"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.6"
                  },
                  "variableName": "MDF_AddAttackRatio"
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
      ]
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
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))"
                      },
                      "variableName": "MDF_Difference"
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
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))"
                      },
                      "variableName": "MDF_Difference"
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
                          "value": 1,
                          "variableName": "_Xueyi_OnEnterBattle_Attack"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))"
                  },
                  "variableName": "MDF_Difference"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}