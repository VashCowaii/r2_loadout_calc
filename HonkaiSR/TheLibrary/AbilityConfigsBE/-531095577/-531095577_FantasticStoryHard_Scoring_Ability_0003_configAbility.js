const configAbility = {
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
}