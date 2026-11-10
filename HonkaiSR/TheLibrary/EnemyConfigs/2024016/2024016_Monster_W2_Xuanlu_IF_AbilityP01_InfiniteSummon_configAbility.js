const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_AbilityP01_InfiniteSummon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "execute": [
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
              "variableName": "ADF_BossBreakCurrentDelay",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                "displayLines": "(ADF_BossBreakCurrentDelay + 0.01)"
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
              "value": {
                "displayLines": "{[SkillEX03[0]]}"
              },
              "variableName": "SummmonMinionDelayRatio"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "value": {
                "displayLines": "{[SkillP01[12]]}"
              },
              "variableName": "SummmonMinionDelayRatio"
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
                    "displayLines": "CurrentXuanluPartSummonIndex"
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "displayLines": "SummmonMinionDelayRatio"
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "SummonList_ADF_2"
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "value": 2,
                          "variableName": "CurrentXuanluPartSummonIndex"
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
                            "displayLines": "SummmonMinionDelayRatio"
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "SummonList_ADF_3"
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "value": 3,
                          "variableName": "CurrentXuanluPartSummonIndex"
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
                            "displayLines": "SummmonMinionDelayRatio"
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "SummonList_ADF_1"
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "value": 1,
                          "variableName": "CurrentXuanluPartSummonIndex"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "value": 0,
                  "variableName": "BonusSummonIndex"
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "CurrentLV2MonsterSummonIndex"
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "displayLines": "SummmonMinionDelayRatio"
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "SummonList_ADF_6"
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "value": 2,
                          "variableName": "CurrentLV2MonsterSummonIndex"
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
                            "displayLines": "SummmonMinionDelayRatio"
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "SummonList_ADF_5"
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "value": 3,
                          "variableName": "CurrentLV2MonsterSummonIndex"
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
                            "displayLines": "SummmonMinionDelayRatio"
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "SummonList_ADF_6"
                              },
                              "locationType": "LastDie"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "value": 1,
                          "variableName": "CurrentLV2MonsterSummonIndex"
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
                "displayLines": "CurrentXuanluPartSummonIndex"
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "displayLines": "SummmonMinionDelayRatio"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonList_ADF_2"
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "value": 2,
                      "variableName": "CurrentXuanluPartSummonIndex"
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
                        "displayLines": "SummmonMinionDelayRatio"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonList_ADF_3"
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "value": 3,
                      "variableName": "CurrentXuanluPartSummonIndex"
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
                        "displayLines": "SummmonMinionDelayRatio"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonList_ADF_1"
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "value": 4,
                      "variableName": "CurrentXuanluPartSummonIndex"
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
                        "displayLines": "SummmonMinionDelayRatio"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonList_ADF_4"
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "value": 1,
                      "variableName": "CurrentXuanluPartSummonIndex"
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