const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_AbilityP01_InfiniteSummon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1275873620\">TaskList_Monster_W2_Xuanlu_IF_InfiniteSummon</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": [
          "Break"
        ],
        "checkType": "And"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ADF_BossBreakCurrentDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "add": {
                "operator": "Variables[0] (ADF_BossBreakCurrentDelay) || Constants[0] (0.01) || ADD || RETURN",
                "displayLines": "(ADF_BossBreakCurrentDelay + 0.01)",
                "constants": [
                  0.01
                ],
                "variables": [
                  "ADF_BossBreakCurrentDelay"
                ]
              },
              "isStartingDelay": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1275873620\">TaskList_Monster_W2_Xuanlu_IF_InfiniteSummon</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1249049327\">Enemy_W2_Xuanlu_IF_AbilityEX03</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "SummmonMinionDelayRatio",
              "value": {
                "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                "displayLines": "{[SkillEX03[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX03[0]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "SummmonMinionDelayRatio",
              "value": {
                "operator": "Variables[0] ({[SkillP01[12]]}) || RETURN",
                "displayLines": "{[SkillP01[12]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[12]]}"
                ]
              }
            }
          ]
        },
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
                "name": "Compare: Variable",
                "value1": "BonusSummonIndex",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentXuanluPartSummonIndex) || RETURN",
                    "displayLines": "CurrentXuanluPartSummonIndex",
                    "constants": [],
                    "variables": [
                      "CurrentXuanluPartSummonIndex"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                            "displayLines": "SummmonMinionDelayRatio",
                            "constants": [],
                            "variables": [
                              "SummmonMinionDelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                                "displayLines": "SummonList_ADF_2",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_2"
                                ]
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "CurrentXuanluPartSummonIndex",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                            "displayLines": "SummmonMinionDelayRatio",
                            "constants": [],
                            "variables": [
                              "SummmonMinionDelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                                "displayLines": "SummonList_ADF_3",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_3"
                                ]
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "CurrentXuanluPartSummonIndex",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                            "displayLines": "SummmonMinionDelayRatio",
                            "constants": [],
                            "variables": [
                              "SummmonMinionDelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                                "displayLines": "SummonList_ADF_1",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_1"
                                ]
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "CurrentXuanluPartSummonIndex",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "BonusSummonIndex",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentLV2MonsterSummonIndex) || RETURN",
                    "displayLines": "CurrentLV2MonsterSummonIndex",
                    "constants": [],
                    "variables": [
                      "CurrentLV2MonsterSummonIndex"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                            "displayLines": "SummmonMinionDelayRatio",
                            "constants": [],
                            "variables": [
                              "SummmonMinionDelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_6) || RETURN",
                                "displayLines": "SummonList_ADF_6",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_6"
                                ]
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "CurrentLV2MonsterSummonIndex",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                            "displayLines": "SummmonMinionDelayRatio",
                            "constants": [],
                            "variables": [
                              "SummmonMinionDelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_5) || RETURN",
                                "displayLines": "SummonList_ADF_5",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_5"
                                ]
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "CurrentLV2MonsterSummonIndex",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                            "displayLines": "SummmonMinionDelayRatio",
                            "constants": [],
                            "variables": [
                              "SummmonMinionDelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_6) || RETURN",
                                "displayLines": "SummonList_ADF_6",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_6"
                                ]
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "CurrentLV2MonsterSummonIndex",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BonusSummonIndex",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 3
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentXuanluPartSummonIndex) || RETURN",
                "displayLines": "CurrentXuanluPartSummonIndex",
                "constants": [],
                "variables": [
                  "CurrentXuanluPartSummonIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                        "displayLines": "SummmonMinionDelayRatio",
                        "constants": [],
                        "variables": [
                          "SummmonMinionDelayRatio"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                            "displayLines": "SummonList_ADF_2",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_2"
                            ]
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "CurrentXuanluPartSummonIndex",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                        "displayLines": "SummmonMinionDelayRatio",
                        "constants": [],
                        "variables": [
                          "SummmonMinionDelayRatio"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                            "displayLines": "SummonList_ADF_3",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_3"
                            ]
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "CurrentXuanluPartSummonIndex",
                      "value": 3
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                        "displayLines": "SummmonMinionDelayRatio",
                        "constants": [],
                        "variables": [
                          "SummmonMinionDelayRatio"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                            "displayLines": "SummonList_ADF_1",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_1"
                            ]
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "CurrentXuanluPartSummonIndex",
                      "value": 4
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (SummmonMinionDelayRatio) || RETURN",
                        "displayLines": "SummmonMinionDelayRatio",
                        "constants": [],
                        "variables": [
                          "SummmonMinionDelayRatio"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
                            "displayLines": "SummonList_ADF_4",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_4"
                            ]
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "CurrentXuanluPartSummonIndex",
                      "value": 1
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}