const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_19",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 31002,
      "variables": null,
      "whenCreated": [
        {
          "name": "Show Attack Count",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "attackCount": 0,
          "show": true
        },
        {
          "name": "Create AV Link",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "linkOrder": -1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1002679289\">Modifier_BattleEventAbility_Challenge_Month_19</a>",
      "valuePerStack": {
        "BattleEvent_P1_ADF": {
          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
          "displayLines": "#BattleEvent_P1_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P1_ADF"
          ]
        },
        "BattleEvent_P2_ADF": {
          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
          "displayLines": "#BattleEvent_P2_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P2_ADF"
          ]
        },
        "BattleEvent_P3_ADF": {
          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
          "displayLines": "#BattleEvent_P3_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P3_ADF"
          ]
        },
        "BattleEvent_P4_ADF": {
          "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
          "displayLines": "#BattleEvent_P4_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P4_ADF"
          ]
        },
        "BattleEvent_P5_ADF": {
          "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
          "displayLines": "#BattleEvent_P5_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P5_ADF"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1002679289\">Modifier_BattleEventAbility_Challenge_Month_19</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "BattleEvent_P3_ADF",
        "BattleEvent_P4_ADF",
        "BattleEvent_P5_ADF"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Count",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllDarkTeam",
                  "isTrigger": true
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 2
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Consume",
                              "consumeFrom": "MaxHP",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "consumePercent": {
                                "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                                "displayLines": "BattleEvent_P5_ADF",
                                "constants": [],
                                "variables": [
                                  "BattleEvent_P5_ADF"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Consume",
                              "consumeFrom": "MaxHP",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "consumePercent": {
                                "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                                "displayLines": "BattleEvent_P2_ADF",
                                "constants": [],
                                "variables": [
                                  "BattleEvent_P2_ADF"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_Count"
                },
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Monthly Challenge Battle Event}}"
                  },
                  "attackCount": 0,
                  "show": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P3_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P3_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P3_ADF"
                        ]
                      },
                      "variableName": "MDF_Count"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P4_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P4_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P4_ADF"
                        ]
                      },
                      "variableName": "MDF_Count"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Show Attack Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Monthly Challenge Battle Event}}"
                      },
                      "attackCount": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "show": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Show Attack Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Monthly Challenge Battle Event}}"
                      },
                      "attackCount": {
                        "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                        "displayLines": "BattleEvent_P1_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P1_ADF"
                        ]
                      },
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                        "displayLines": "BattleEvent_P1_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P1_ADF"
                        ]
                      },
                      "variableName": "MDF_Count"
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