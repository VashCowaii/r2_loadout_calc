const configAbility = {
  "fileName": "5012031_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1199719779\">Enemy_W5_JK_PowerOut_EffectTimeline</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertFlag_W5_JK_00"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1764849080\">Enemy_W5_JK_ElationPointListener_02</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1764849080\">Enemy_W5_JK_ElationPointListener_02</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeAddedRatio",
        "MDF_AllDamageReduce",
        "MDF_ThresholdValue"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span> and decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. After receiving Elation DMG or when the target team gains Punchline and reaches <span class=\"descriptionNumberColor\">MDF_ThresholdValue</span> points, the effect is dispelled.",
      "type": "Buff",
      "effectName": "Book-Smart",
      "statusName": "Book-Smart"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1764849080\">Enemy_W5_JK_ElationPointListener_02</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "InsertFlag_W5_JK_00",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "InsertFlag_W5_JK_00",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All(with Unselectable)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1,
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
                            }
                          },
                          "abilityName": "Monster_W5_JK_PowerOut",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "priorityTag": "MonsterBuffSelf",
                          "allowAbilityTriggers": false
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__56977717\">Enemy_W5_JK_ElationPointListener</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Stage Ability",
              "abilityName": "Monster_W5_JK_PowerOut",
              "parameters": {}
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "InsertFlag_W5_JK_00"
            }
          ]
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "minValue": 0,
          "maxValue": {
            "operator": "Variables[0] (MDF_ThresholdValue) || RETURN",
            "displayLines": "MDF_ThresholdValue",
            "constants": [],
            "variables": [
              "MDF_ThresholdValue"
            ]
          },
          "whenLeavingRange": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertFlag_W5_JK_00",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "InsertFlag_W5_JK_00",
                  "value": 1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"229482597\">TaskList_Monster_W5_JK_PowerOut</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Range Conditions",
          "minValue": {
            "operator": "Variables[0] (MDF_ThresholdValue) || RETURN",
            "displayLines": "MDF_ThresholdValue",
            "constants": [],
            "variables": [
              "MDF_ThresholdValue"
            ]
          },
          "maxValue": 9999,
          "whenValueChanges": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Change_In_Current_Value",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag_W5_JK_00",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "InsertFlag_W5_JK_00",
                      "value": 1
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"229482597\">TaskList_Monster_W5_JK_PowerOut</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__229482597\">TaskList_Monster_W5_JK_PowerOut</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"522571708\">Sparxie_Passive01</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "InsertFlag_W5_JK_00",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1199719779\">Enemy_W5_JK_PowerOut_EffectTimeline</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All(with Unselectable)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1861405331\">Enemy_W5_JK_PowerOutReady</a>"
                    }
                  },
                  "abilityName": "Monster_W5_JK_PowerOut",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "priorityTag": "MonsterBuffSelf",
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ThresholdValue"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}