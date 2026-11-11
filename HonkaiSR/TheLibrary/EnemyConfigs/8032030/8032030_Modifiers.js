const configAbility = {
  "fileName": "8032030_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
      "stackType": "Replace",
      "stackLimit": 999,
      "addStacksPerTrigger": 1,
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
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))"
                      },
                      "variableName": "MDF_DiceResult_RL"
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
                            "displayLines": "MDF_DiceResult_RL"
                          },
                          "caseTasks": [
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
                          ]
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
                      "value": {
                        "displayLines": "(MDF_DiceResult_RL % 10)"
                      },
                      "variableName": "MDF_DiceResult_RL"
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
                            "displayLines": "MDF_DiceResult_RL"
                          },
                          "caseTasks": [
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
                          ]
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
                      "displayLines": "MDF_CurrentDiceResult"
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
                        "entityType": "Memosprite",
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
                        "entityType": "Memosprite",
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
                      "displayLines": "MDF_CurrentDiceResult"
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
                    "entityType": "Memosprite",
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
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))"
                      },
                      "variableName": "MDF_DiceResult_RL"
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
                            "displayLines": "MDF_DiceResult_RL"
                          },
                          "caseTasks": [
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
                          ]
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
                      "value": {
                        "displayLines": "(MDF_DiceResult_RL % 10)"
                      },
                      "variableName": "MDF_DiceResult_RL"
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
                            "displayLines": "MDF_DiceResult_RL"
                          },
                          "caseTasks": [
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
                          ]
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
                      "displayLines": "MDF_CurrentDiceResult"
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
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))"
                      },
                      "variableName": "MDF_DiceResult_RL"
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
                            "displayLines": "MDF_DiceResult_RL"
                          },
                          "caseTasks": [
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
                          ]
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
                      "value": {
                        "displayLines": "(MDF_DiceResult_RL % 10)"
                      },
                      "variableName": "MDF_DiceResult_RL"
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
                            "displayLines": "MDF_DiceResult_RL"
                          },
                          "caseTasks": [
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
                          ]
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
                      "displayLines": "MDF_CurrentDiceResult"
                    }
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
                  "value": {
                    "displayLines": "MDF_DiceResult"
                  },
                  "variableName": "DiceResult"
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
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                      "addStacksPerTrigger": {
                        "displayLines": "MDF_DiceResult"
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
                        "displayLines": "MDF_DiceResult"
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
                          "value": 1,
                          "variableName": "MDF_DiceResult"
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
                              "value": 2,
                              "variableName": "MDF_DiceResult"
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
                                  "value": 3,
                                  "variableName": "MDF_DiceResult"
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
                                      "value": 4,
                                      "variableName": "MDF_DiceResult"
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
                                          "value": 5,
                                          "variableName": "MDF_DiceResult"
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
                                          "value": 6,
                                          "variableName": "MDF_DiceResult"
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
                              "value": 1,
                              "variableName": "MDF_DiceResult"
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
                                  "value": 2,
                                  "variableName": "MDF_DiceResult"
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
                                      "value": 3,
                                      "variableName": "MDF_DiceResult"
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
                                          "value": 4,
                                          "variableName": "MDF_DiceResult"
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
                                              "value": 5,
                                              "variableName": "MDF_DiceResult"
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
                                              "value": 6,
                                              "variableName": "MDF_DiceResult"
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
                              "value": 1,
                              "variableName": "MDF_DiceResult"
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
                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)"
                                  },
                                  "execute": [
                                    {
                                      "name": "Define Custom Variable",
                                      "value": {
                                        "displayLines": "(MDF_DiceResult + 1)"
                                      },
                                      "variableName": "MDF_DiceResult"
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
                                  "value": 2,
                                  "variableName": "MDF_DiceResult"
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
                                        "displayLines": "(MDF_MaxLoopCount_RL - 1)"
                                      },
                                      "execute": [
                                        {
                                          "name": "Define Custom Variable",
                                          "value": {
                                            "displayLines": "(MDF_DiceResult + 2)"
                                          },
                                          "variableName": "MDF_DiceResult"
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
                                      "value": 3,
                                      "variableName": "MDF_DiceResult"
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
                                            "displayLines": "(MDF_MaxLoopCount_RL - 1)"
                                          },
                                          "execute": [
                                            {
                                              "name": "Define Custom Variable",
                                              "value": {
                                                "displayLines": "(MDF_DiceResult + 3)"
                                              },
                                              "variableName": "MDF_DiceResult"
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
                                          "value": 4,
                                          "variableName": "MDF_DiceResult"
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
                                                "displayLines": "(MDF_MaxLoopCount_RL - 1)"
                                              },
                                              "execute": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "value": {
                                                    "displayLines": "(MDF_DiceResult + 4)"
                                                  },
                                                  "variableName": "MDF_DiceResult"
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
                                              "value": 5,
                                              "variableName": "MDF_DiceResult"
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
                                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)"
                                                  },
                                                  "execute": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "value": {
                                                        "displayLines": "(MDF_DiceResult + 5)"
                                                      },
                                                      "variableName": "MDF_DiceResult"
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "value": 6,
                                              "variableName": "MDF_DiceResult"
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
                                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)"
                                                  },
                                                  "execute": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "value": {
                                                        "displayLines": "(MDF_DiceResult + 6)"
                                                      },
                                                      "variableName": "MDF_DiceResult"
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
                      "value": 6,
                      "variableName": "MDF_DiceResult"
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
                          "value": 1,
                          "variableName": "MDF_DiceResult"
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
                              "value": 2,
                              "variableName": "MDF_DiceResult"
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
                                  "value": 3,
                                  "variableName": "MDF_DiceResult"
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
                                      "value": 4,
                                      "variableName": "MDF_DiceResult"
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
                                          "value": 5,
                                          "variableName": "MDF_DiceResult"
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
                                          "value": 6,
                                          "variableName": "MDF_DiceResult"
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
                  "value": {
                    "displayLines": "(DiceResult + MDF_DiceResult)"
                  },
                  "variableName": "DiceResult"
                }
              ]
            }
          ]
        }
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
              "value": {
                "displayLines": "MDF_DiceResult"
              },
              "variableName": "DiceResult"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 6,
              "variableName": "MDF_DiceResult"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__126188110\">Monster_W3_AventurinePart_SpeedZero</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "description": "Immune to DMG. When this unit is attacked by a target that has entered the Gamble, apply 1 random number (between 1 and 6) to the target.",
      "type": "Other",
      "statusName": "Fickle Fortune",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>",
      "modifierFlags": [
        "BlockDamage",
        "WEAKNESS_IMPLANT_MUTE"
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
                  "name": "Change Entity Turn-State",
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
                  "value": 1,
                  "variableName": "DiceGamblingInsertCheck"
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
                        "entityType": "Memosprite"
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
                          "priorityTag": "EnemyPhaseChange",
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
                          "priorityTag": "EnemyPhaseChange",
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
                      "value": 1,
                      "variableName": "DiceGamblingInsertCheck"
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__718327308\">Monster_W3_AventurinePart_Speed</a>",
      "latentQueue": [
        "DiceGamblingInsertCheck"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    }
  ],
  "references": []
}