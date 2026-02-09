const compositeAbilityObject = {
  "fullCharacterName": -531095577,
  "trimCharacterName": -531095577,
  "abilityList": [
    "-531095577_Local_SPAdd_Modify",
    "-531095577_BattleTarget_FantasticStoryBattleScore4",
    "-531095577_BattleTarget_FantasticStoryBattleScore3",
    "-531095577_BattleTarget_FantasticStoryBattleScore2",
    "-531095577_BattleTarget_FantasticStoryBattleScore1",
    "-531095577_FantasticStoryHard_Scoring_Ability_0003",
    "-531095577_FantasticStoryHard_Scoring_Ability_0002",
    "-531095577_FantasticStoryHard_Scoring_Ability_0001"
  ],
  "abilityObject": {
    "-531095577_Local_SPAdd_Modify": {
      "fileName": "-531095577_Local_SPAdd_Modify",
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
          "modifier": "<a class=\"gModGreen\" id=\"21911812\">Local_SPAdd_Modify_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__21911812\">Local_SPAdd_Modify_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-205377483\">Local_SPAdd</a>",
                  "valuePerStack": {
                    "MDF_AddValue": 5
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-205377483\">Local_SPAdd</a>",
                      "valuePerStack": {
                        "MDF_AddValue": 5
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_BattleTarget_FantasticStoryBattleScore4": {
      "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1066851653\">BattleTarget_FantasticStoryBattleScore4_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1066851653\">BattleTarget_FantasticStoryBattleScore4_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_BattleScoreChange"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_FantasticStoryBattleScore4",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_BattleTarget_FantasticStoryBattleScore3": {
      "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore3",
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
          "modifier": "<a class=\"gModGreen\" id=\"-305356160\">BattleTarget_FantasticStoryBattleScore3_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-305356160\">BattleTarget_FantasticStoryBattleScore3_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_BattleScoreChange"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_FantasticStoryBattleScore3",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_BattleTarget_FantasticStoryBattleScore2": {
      "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore2",
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
          "modifier": "<a class=\"gModGreen\" id=\"1546815165\">BattleTarget_FantasticStoryBattleScore2_Modifier</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is First Challenge-Battle"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1546815165\">BattleTarget_FantasticStoryBattleScore2_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_BattleScoreChange"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_FantasticStoryBattleScore2",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_BattleTarget_FantasticStoryBattleScore1": {
      "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore1",
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
          "modifier": "<a class=\"gModGreen\" id=\"1392635778\">BattleTarget_FantasticStoryBattleScore1_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1392635778\">BattleTarget_FantasticStoryBattleScore1_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_BattleScoreChange"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_FantasticStoryBattleScore1",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_FantasticStoryHard_Scoring_Ability_0003": {
      "fileName": "-531095577_FantasticStoryHard_Scoring_Ability_0003",
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
          "modifier": "<a class=\"gModGreen\" id=\"1979358640\">MFantasticStoryHard_Scoring_Ability_0003</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__443761123\">MFantasticStoryHard_Scoring_Ability_0003_Enemy</a>",
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
                  "variableName": "StageConst",
                  "value": 1
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
                    "name": "Enemy ID",
                    "ID": 8003060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Fictional Ensemble"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "HPScore",
                      "value": 8000
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "RemainingScore",
                      "value": {
                        "operator": "Variables[0] (HPScore) || RETURN",
                        "displayLines": "HPScore",
                        "constants": [],
                        "variables": [
                          "HPScore"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "KillScore",
                      "value": 0
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
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "HPScore",
                          "value": 16000
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 0
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CurrentHPPercentage"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentHPPercentage",
                      "value": {
                        "operator": "Variables[0] (CEIL) || Variables[1] (CurrentHPPercentage) || Constants[0] (400) || MUL || PARAM_1 || FUNCTION || Constants[0] (400) || DIV || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((CurrentHPPercentage * 400)) / 400)",
                        "constants": [
                          400
                        ],
                        "variables": [
                          "CEIL",
                          "CurrentHPPercentage"
                        ]
                      }
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
                          "variableName": "CurrentHPPercentage",
                          "value": 0
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
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (CurrentHPPercentage) || Variables[1] (HPScore) || MUL || RETURN",
                            "displayLines": "(CurrentHPPercentage * HPScore)",
                            "constants": [],
                            "variables": [
                              "CurrentHPPercentage",
                              "HPScore"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1979358640\">MFantasticStoryHard_Scoring_Ability_0003</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"443761123\">MFantasticStoryHard_Scoring_Ability_0003_Enemy</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"443761123\">MFantasticStoryHard_Scoring_Ability_0003_Enemy</a>"
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
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"443761123\">MFantasticStoryHard_Scoring_Ability_0003_Enemy</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_FantasticStoryHard_Scoring_Ability_0002": {
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
                  "variableName": "StageConst",
                  "value": 1
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
                        "value": "ENEMIES_OBJECT_UNUSED_8"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED_11"
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
                        "value": "ENEMIES_OBJECT_UNUSED_8"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "HPScore",
                          "value": 1000
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 1500
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
                        "value": "ENEMIES_OBJECT_UNUSED_11"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "HPScore",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 2500
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
                          "variableName": "HPScore",
                          "value": 300
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 200
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
                                "value": "W1_SvarogPart"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "HPScore",
                                  "value": 0
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "RemainingScore",
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "KillScore",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "HPScore",
                                  "value": 300
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "RemainingScore",
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "KillScore",
                                  "value": 200
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
                                  "variableName": "HPScore",
                                  "value": 2000
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "RemainingScore",
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "KillScore",
                                  "value": 1000
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
                                      "variableName": "HPScore",
                                      "value": 3500
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "variableName": "RemainingScore",
                                      "value": {
                                        "operator": "Variables[0] (HPScore) || RETURN",
                                        "displayLines": "HPScore",
                                        "constants": [],
                                        "variables": [
                                          "HPScore"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "variableName": "KillScore",
                                      "value": 1500
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CurrentHPPercentage"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentHPPercentage",
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
                      }
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
                          "variableName": "CurrentHPPercentage",
                          "value": 0
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
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (CurrentHPPercentage) || Variables[1] (HPScore) || MUL || RETURN",
                            "displayLines": "(CurrentHPPercentage * HPScore)",
                            "constants": [],
                            "variables": [
                              "CurrentHPPercentage",
                              "HPScore"
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
              "eventTrigger": "New Enemy Wave",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-531095577_FantasticStoryHard_Scoring_Ability_0001": {
      "fileName": "-531095577_FantasticStoryHard_Scoring_Ability_0001",
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
          "modifier": "<a class=\"gModGreen\" id=\"2012913878\">MFantasticStoryHard_Scoring_Ability_0001</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2082424911\">MFantasticStoryHard_Scoring_Ability_0001_Enemy</a>",
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
                  "variableName": "StageConst",
                  "value": 1
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
                        "value": "ENEMIES_OBJECT_UNUSED_8"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED_11"
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
                        "value": "ENEMIES_OBJECT_UNUSED_8"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "HPScore",
                          "value": 500
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 1500
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
                        "value": "ENEMIES_OBJECT_UNUSED_11"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "HPScore",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 2000
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
                          "variableName": "HPScore",
                          "value": 300
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (HPScore) || RETURN",
                            "displayLines": "HPScore",
                            "constants": [],
                            "variables": [
                              "HPScore"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "KillScore",
                          "value": 200
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
                                "value": "W1_SvarogPart"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "HPScore",
                                  "value": 0
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "RemainingScore",
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "KillScore",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "HPScore",
                                  "value": 300
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "RemainingScore",
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "KillScore",
                                  "value": 200
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
                                  "variableName": "HPScore",
                                  "value": 2500
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "RemainingScore",
                                  "value": {
                                    "operator": "Variables[0] (HPScore) || RETURN",
                                    "displayLines": "HPScore",
                                    "constants": [],
                                    "variables": [
                                      "HPScore"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "KillScore",
                                  "value": 1500
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
                                      "variableName": "HPScore",
                                      "value": 5000
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "variableName": "RemainingScore",
                                      "value": {
                                        "operator": "Variables[0] (HPScore) || RETURN",
                                        "displayLines": "HPScore",
                                        "constants": [],
                                        "variables": [
                                          "HPScore"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "variableName": "KillScore",
                                      "value": 3000
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CurrentHPPercentage"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentHPPercentage",
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
                      }
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
                          "variableName": "CurrentHPPercentage",
                          "value": 0
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
                          "variableName": "RemainingScore",
                          "value": {
                            "operator": "Variables[0] (CurrentHPPercentage) || Variables[1] (HPScore) || MUL || RETURN",
                            "displayLines": "(CurrentHPPercentage * HPScore)",
                            "constants": [],
                            "variables": [
                              "CurrentHPPercentage",
                              "HPScore"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2012913878\">MFantasticStoryHard_Scoring_Ability_0001</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2082424911\">MFantasticStoryHard_Scoring_Ability_0001_Enemy</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2082424911\">MFantasticStoryHard_Scoring_Ability_0001_Enemy</a>"
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
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2082424911\">MFantasticStoryHard_Scoring_Ability_0001_Enemy</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}