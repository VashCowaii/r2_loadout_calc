const configAbility = {
  "fileName": "8032033_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-500446648\">Monster_W3_AventurinePart_IF_ChangePhaseDestroy</a>",
      "modifierFlags": [
        "STAT_MonsterChangePhase"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__718847384\">Monster_W3_AventurinePart_IF_SpeedZero</a>",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__499818287\">Enemy_W3_AventurinePart_01_IF_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "conditionActive": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "checkOverride": {
                "name": "Condition Priority",
                "overridePriority": "MonsterForceKill",
                "condition": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "compareType": "<=",
                  "value2": 0
                }
              },
              "abilityName": "Monster_W3_AventurinePart_01_IF_AbilityP01_DeathRattle_Insert",
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_MonsterChangePhase"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1089097326\">Enemy_W3_AventurinePart_IF_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "conditionActive": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "checkOverride": {
                "name": "Condition Priority",
                "overridePriority": "MonsterForceKill",
                "condition": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "compareType": "<=",
                  "value2": 0
                }
              },
              "abilityName": "Monster_W3_AventurinePart_IF_AbilityP01_DeathRattle_Insert",
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_MonsterChangePhase"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W3_Aventurine_00"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 2,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 5,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 6,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 7,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 8,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": ">",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "WHOLE",
                          "MDF_DiceResult_RL"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": ">=",
                        "value2": 100,
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                            "displayLines": "MDF_DiceResult_RL",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult_RL"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 9
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 8
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 7
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (MDF_DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                        "displayLines": "(MDF_DiceResult_RL % 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_DiceResult_RL"
                        ]
                      }
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
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": "<=",
                            "value2": 99,
                            "valueType": "Layer"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": ">=",
                            "value2": 10,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                            "displayLines": "MDF_DiceResult_RL",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult_RL"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 0
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 7
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 8
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 9
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentDiceResult",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceResult",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                      "displayLines": "MDF_CurrentDiceResult",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDiceResult"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W3_Aventurine_00"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3,
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 2,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 5,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 6,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 7,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 8,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": ">",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentDiceResult",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceResult",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                      "displayLines": "MDF_CurrentDiceResult",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDiceResult"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W3_Aventurine_00"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 2,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 5,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 6,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 7,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 8,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "WHOLE",
                          "MDF_DiceResult_RL"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": ">=",
                        "value2": 100,
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                            "displayLines": "MDF_DiceResult_RL",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult_RL"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 9
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 8
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 7
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (MDF_DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                        "displayLines": "(MDF_DiceResult_RL % 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_DiceResult_RL"
                        ]
                      }
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
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": "<=",
                            "value2": 99,
                            "valueType": "Layer"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": ">=",
                            "value2": 10,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                            "displayLines": "MDF_DiceResult_RL",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult_RL"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 0
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 7
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 8
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 9
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentDiceResult",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceResult",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                      "displayLines": "MDF_CurrentDiceResult",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDiceResult"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W3_Aventurine_00"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 2,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 5,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 6,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 7,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 8,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "=",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": ">",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "WHOLE",
                          "MDF_DiceResult_RL"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": ">=",
                        "value2": 100,
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                            "displayLines": "MDF_DiceResult_RL",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult_RL"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 9
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 8
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 7
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (MDF_DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                        "displayLines": "(MDF_DiceResult_RL % 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_DiceResult_RL"
                        ]
                      }
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
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": "<=",
                            "value2": 99,
                            "valueType": "Layer"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": ">=",
                            "value2": 10,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                            "displayLines": "MDF_DiceResult_RL",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult_RL"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 0
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 6
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 7
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 8
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 9
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentDiceResult",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceResult",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                      "displayLines": "MDF_CurrentDiceResult",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDiceResult"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackLimit": 999,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-34127136\">Monster_W3_AventurinePart_Result</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DiceResult",
                  "value": {
                    "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                    "displayLines": "MDF_DiceResult",
                    "constants": [],
                    "variables": [
                      "MDF_DiceResult"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W3_Aventurine_00"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W3_Aventurine_00"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                        "displayLines": "MDF_DiceResult",
                        "constants": [],
                        "variables": [
                          "MDF_DiceResult"
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                        "displayLines": "MDF_DiceResult",
                        "constants": [],
                        "variables": [
                          "MDF_DiceResult"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DiceResult",
                            "compareType": "=",
                            "value2": 5
                          },
                          {
                            "name": "Random Chance",
                            "chance": 0.2449
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DiceResult",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "DiceResult",
                                "compareType": "=",
                                "value2": 4
                              },
                              {
                                "name": "Random Chance",
                                "chance": 0.4054
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 2
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "DiceResult",
                                    "compareType": "=",
                                    "value2": 3
                                  },
                                  {
                                    "name": "Random Chance",
                                    "chance": 0.6818
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 3
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "compareType": "<",
                                    "value2": 5
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "DiceResult",
                                        "compareType": "=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Random Chance",
                                        "chance": 0.7143
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 4
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Monster Rank",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "compareType": "<",
                                        "value2": 5
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 1
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 5
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 5
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 6
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 5
                                          }
                                        }
                                      ]
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
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.2
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 2
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "compareType": "<",
                                    "value2": 5
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "DiceResult",
                                        "compareType": "=",
                                        "value2": 6
                                      },
                                      {
                                        "name": "Random Chance",
                                        "chance": 0.25
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 3
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Monster Rank",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "compareType": "<",
                                        "value2": 5
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "DiceResult",
                                            "compareType": "=",
                                            "value2": 5
                                          },
                                          {
                                            "name": "Random Chance",
                                            "chance": 0.3333
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 4
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 5
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "OR",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "DiceResult",
                                                "compareType": "=",
                                                "value2": 4
                                              },
                                              {
                                                "name": "Random Chance",
                                                "chance": 0.5
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 5
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 5
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 6
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 5
                                              }
                                            }
                                          ]
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
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                              },
                              "passed": [
                                {
                                  "name": "Looped Event",
                                  "maxLoops": {
                                    "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "MDF_MaxLoopCount_RL"
                                    ]
                                  },
                                  "Event": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": {
                                        "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (1) || ADD || RETURN",
                                        "displayLines": "(MDF_DiceResult + 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "MDF_DiceResult"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 2
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Looped Event",
                                      "maxLoops": {
                                        "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "MDF_MaxLoopCount_RL"
                                        ]
                                      },
                                      "Event": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": {
                                            "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (2) || ADD || RETURN",
                                            "displayLines": "(MDF_DiceResult + 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MDF_DiceResult"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Random Chance",
                                        "chance": 0
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 3
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                      },
                                      "passed": [
                                        {
                                          "name": "Looped Event",
                                          "maxLoops": {
                                            "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "MDF_MaxLoopCount_RL"
                                            ]
                                          },
                                          "Event": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": {
                                                "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (3) || ADD || RETURN",
                                                "displayLines": "(MDF_DiceResult + 3)",
                                                "constants": [
                                                  3
                                                ],
                                                "variables": [
                                                  "MDF_DiceResult"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Random Chance",
                                            "chance": 0.33
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 4
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                          },
                                          "passed": [
                                            {
                                              "name": "Looped Event",
                                              "maxLoops": {
                                                "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "MDF_MaxLoopCount_RL"
                                                ]
                                              },
                                              "Event": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "MDF_DiceResult",
                                                  "value": {
                                                    "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (4) || ADD || RETURN",
                                                    "displayLines": "(MDF_DiceResult + 4)",
                                                    "constants": [
                                                      4
                                                    ],
                                                    "variables": [
                                                      "MDF_DiceResult"
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "OR",
                                            "conditionList": [
                                              {
                                                "name": "Random Chance",
                                                "chance": 0.5
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 5
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                              },
                                              "passed": [
                                                {
                                                  "name": "Looped Event",
                                                  "maxLoops": {
                                                    "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "MDF_MaxLoopCount_RL"
                                                    ]
                                                  },
                                                  "Event": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "MDF_DiceResult",
                                                      "value": {
                                                        "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (5) || ADD || RETURN",
                                                        "displayLines": "(MDF_DiceResult + 5)",
                                                        "constants": [
                                                          5
                                                        ],
                                                        "variables": [
                                                          "MDF_DiceResult"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 6
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                              },
                                              "passed": [
                                                {
                                                  "name": "Looped Event",
                                                  "maxLoops": {
                                                    "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "MDF_MaxLoopCount_RL"
                                                    ]
                                                  },
                                                  "Event": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "MDF_DiceResult",
                                                      "value": {
                                                        "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (6) || ADD || RETURN",
                                                        "displayLines": "(MDF_DiceResult + 6)",
                                                        "constants": [
                                                          6
                                                        ],
                                                        "variables": [
                                                          "MDF_DiceResult"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
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
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DeathRattle_RL",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_DiceResult",
                      "value": 6
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.1667
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DiceResult",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 4
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.2
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 2
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 4
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.25
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 3
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "compareType": "<",
                                    "value2": 4
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.3333
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 4
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Monster Rank",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "compareType": "<",
                                        "value2": 4
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 5
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 4
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 6
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 4
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 4
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DiceResult",
                  "value": {
                    "operator": "Variables[0] (DiceResult) || Variables[1] (MDF_DiceResult) || ADD || RETURN",
                    "displayLines": "(DiceResult + MDF_DiceResult)",
                    "constants": [],
                    "variables": [
                      "DiceResult",
                      "MDF_DiceResult"
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
        "DiceGamblingInsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1430761430\">Monster_W3_AventurinePart_LuckyResult</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DiceResult",
              "value": {
                "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                "displayLines": "MDF_DiceResult",
                "constants": [],
                "variables": [
                  "MDF_DiceResult"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DiceResult",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1604729097\">Monster_W3_AventurinePart_ResultTarget</a>",
      "stackData": [],
      "latentQueue": [
        "DiceGamblingInsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__126188110\">Monster_W3_AventurinePart_SpeedZero</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Immune to DMG. When this unit is attacked by a target that has entered the Gamble, apply 1 random number (between 1 and 6) to the target.",
      "type": "Other",
      "statusName": "Fickle Fortune"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>",
      "modifierFlags": [
        "BlockDamage",
        "MuteAttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"718327308\">Monster_W3_AventurinePart_Speed</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DiceGamblingInsertCheck",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W3_Aventurine_00"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_AventurinePart_Ability02_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}.[[getSummoner]]"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_AventurinePart_Ability02_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DiceGamblingInsertCheck",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__718327308\">Monster_W3_AventurinePart_Speed</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DiceGamblingInsertCheck"
      ]
    }
  ],
  "references": []
}