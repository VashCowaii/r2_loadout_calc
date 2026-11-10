const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_29",
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
      "modifier": "<a class=\"gModGreen\" id=\"1136753146\">Modifier_BattleEventAbility_Challenge_Month_29</a>",
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
    },
    {
      "name": "Show Attack Count",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "attackCount": 0,
      "show": true
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1136753146\">Modifier_BattleEventAbility_Challenge_Month_29</a>",
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
                "Deleted bullshit",
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
                          "name": "Define Custom Variable with Stat",
                          "variableName": "_Temp_Hp",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
                        },
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
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "DamageFlat": {
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P5_ADF) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * BattleEvent_P5_ADF)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "BattleEvent_P5_ADF"
                                  ]
                                },
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "DamageFlat": {
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P2_ADF) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * BattleEvent_P2_ADF)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "BattleEvent_P2_ADF"
                                  ]
                                },
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
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
                    "target": "{{Caster}}"
                  },
                  "attackCount": 0,
                  "show": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Insert_Flag"
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
                    "name": "Skill Type",
                    "skillType": "Skill"
                  }
                ]
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
                        "target": "{{Caster}}"
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
                        "target": "{{Caster}}"
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
              ],
              "failed": [
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
                        "name": "Compare: Variable",
                        "value1": "Insert_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Insert_Flag"
                    },
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
                            "target": "{{Caster}}"
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
                            "target": "{{Caster}}"
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
  ]
}