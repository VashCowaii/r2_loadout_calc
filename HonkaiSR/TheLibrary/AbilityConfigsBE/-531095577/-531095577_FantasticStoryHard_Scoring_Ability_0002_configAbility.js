const configAbility = {
  "fileName": "-531095577_FantasticStoryHard_Scoring_Ability_0002",
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
      "modifier": "<a class=\"gModGreen\" id=\"1996136259\">MFantasticStoryHard_Scoring_Ability_0002</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1172566120\">MFantasticStoryHard_Scoring_Ability_0002_Enemy</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "StageConst"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "value": 1,
              "variableName": "StageConst"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "CurrentHPPercentage"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "HPScore"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "RemainingScore"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "KillScore"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "variableName": "ENEMIES_OBJECT_UNUSED_8"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "variableName": "ENEMIES_OBJECT_UNUSED_11"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "variableName": "ENEMIES_OBJECT_UNUSED_8"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1000,
                      "variableName": "HPScore"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (HPScore) || RETURN",
                        "displayLines": "HPScore",
                        "constants": [],
                        "variables": [
                          "HPScore"
                        ]
                      },
                      "variableName": "RemainingScore"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1500,
                      "variableName": "KillScore"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "variableName": "ENEMIES_OBJECT_UNUSED_11"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 0,
                      "variableName": "HPScore"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (HPScore) || RETURN",
                        "displayLines": "HPScore",
                        "constants": [],
                        "variables": [
                          "HPScore"
                        ]
                      },
                      "variableName": "RemainingScore"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 2500,
                      "variableName": "KillScore"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 300,
                      "variableName": "HPScore"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (HPScore) || RETURN",
                        "displayLines": "HPScore",
                        "constants": [],
                        "variables": [
                          "HPScore"
                        ]
                      },
                      "variableName": "RemainingScore"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 200,
                      "variableName": "KillScore"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "variableName": "W1_SvarogPart"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": 0,
                              "variableName": "HPScore"
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": {
                                "operator": "Variables[0] (HPScore) || RETURN",
                                "displayLines": "HPScore",
                                "constants": [],
                                "variables": [
                                  "HPScore"
                                ]
                              },
                              "variableName": "RemainingScore"
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": 0,
                              "variableName": "KillScore"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": 300,
                              "variableName": "HPScore"
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": {
                                "operator": "Variables[0] (HPScore) || RETURN",
                                "displayLines": "HPScore",
                                "constants": [],
                                "variables": [
                                  "HPScore"
                                ]
                              },
                              "variableName": "RemainingScore"
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": 200,
                              "variableName": "KillScore"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": 2000,
                              "variableName": "HPScore"
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": {
                                "operator": "Variables[0] (HPScore) || RETURN",
                                "displayLines": "HPScore",
                                "constants": [],
                                "variables": [
                                  "HPScore"
                                ]
                              },
                              "variableName": "RemainingScore"
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": 1000,
                              "variableName": "KillScore"
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": ">=",
                                "value2": 4
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "value": 3500,
                                  "variableName": "HPScore"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  },
                                  "variableName": "RemainingScore"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "value": 1500,
                                  "variableName": "KillScore"
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
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "ScoreModifyValue",
              "eventType": "BattleScoreChange",
              "value": {
                "operator": "Variables[0] (WHOLE) || Variables[1] (KillScore) || Variables[2] (StageConst) || MUL || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((KillScore * StageConst))",
                "constants": [],
                "variables": [
                  "WHOLE",
                  "KillScore",
                  "StageConst"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "CurrentHPPercentage",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (CurrentHPPercentage) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || Constants[0] (100) || DIV || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((CurrentHPPercentage * 100)) / 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "WHOLE",
                      "CurrentHPPercentage"
                    ]
                  },
                  "variableName": "CurrentHPPercentage"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentHPPercentage",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "CurrentHPPercentage"
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
                    "value1": "RemainingScore",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CurrentHPPercentage) || Variables[1] (HPScore) || MUL || RETURN",
                      "displayLines": "(CurrentHPPercentage * HPScore)",
                      "constants": [],
                      "variables": [
                        "CurrentHPPercentage",
                        "HPScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "ScoreModifyValue",
                      "eventType": "BattleScoreChange",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (ScoreModifyValue) || Variables[2] (CurrentHPPercentage) || Variables[3] (HPScore) || MUL || SUB || Variables[4] (StageConst) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((ScoreModifyValue - (CurrentHPPercentage * HPScore)) * StageConst))",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "ScoreModifyValue",
                          "CurrentHPPercentage",
                          "HPScore",
                          "StageConst"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (CurrentHPPercentage) || Variables[1] (HPScore) || MUL || RETURN",
                        "displayLines": "(CurrentHPPercentage * HPScore)",
                        "constants": [],
                        "variables": [
                          "CurrentHPPercentage",
                          "HPScore"
                        ]
                      },
                      "variableName": "RemainingScore"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1996136259\">MFantasticStoryHard_Scoring_Ability_0002</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1172566120\">MFantasticStoryHard_Scoring_Ability_0002_Enemy</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1172566120\">MFantasticStoryHard_Scoring_Ability_0002_Enemy</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1172566120\">MFantasticStoryHard_Scoring_Ability_0002_Enemy</a>"
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
  }
}