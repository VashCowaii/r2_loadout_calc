const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_42",
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
      "modifier": "<a class=\"gModGreen\" id=\"851239433\">Modifier_BattleEventAbility_Challenge_Month_42</a>",
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
        },
        "BattleEvent_P6_ADF": {
          "operator": "Variables[0] (#BattleEvent_P6_ADF) || RETURN",
          "displayLines": "#BattleEvent_P6_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P6_ADF"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__851239433\">Modifier_BattleEventAbility_Challenge_Month_42</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                  "Event": [
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
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_Temp_Hp_TeamDark",
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
                                  "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P4_ADF) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P4_ADF)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp_TeamDark",
                                    "BattleEvent_P4_ADF"
                                  ]
                                },
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "True DMG"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 3
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
                                      "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P5_ADF) || MUL || RETURN",
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P5_ADF)",
                                      "constants": [],
                                      "variables": [
                                        "_Temp_Hp_TeamDark",
                                        "BattleEvent_P5_ADF"
                                      ]
                                    },
                                    "dmgFormulaFinal": "Converted DMG Base",
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "True DMG"
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
                                      "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P6_ADF) || MUL || RETURN",
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P6_ADF)",
                                      "constants": [],
                                      "variables": [
                                        "_Temp_Hp_TeamDark",
                                        "BattleEvent_P6_ADF"
                                      ]
                                    },
                                    "dmgFormulaFinal": "Converted DMG Base",
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "True DMG"
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": 0
                },
                {
                  "name": "Show Attack Time",
                  "time": 0,
                  "on": null,
                  "show": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Trigger_Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "UseBP_Flag",
                  "value": 0
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
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_Camear_AllLightTeamWithoutDither"
            },
            {
              "name": "Show Attack Time",
              "time": 0,
              "on": null,
              "show": true
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P3_ADF"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "UseBP_Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Trigger_Flag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Show Attack Time",
              "time": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              },
              "on": null,
              "show": true
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                        "displayLines": "BattleEvent_P2_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P2_ADF"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                        "displayLines": "BattleEvent_P3_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P3_ADF"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 0
                    },
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "on": null,
                      "show": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Trigger_Flag",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "UseBP_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
              "isTrigger": true
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              },
              "adjustmentType": "+"
            }
          ],
          "priorityLevel": -90
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_Count",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                "displayLines": "BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P3_ADF"
                ]
              },
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P3_ADF"
                    ]
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "BattleEvent_P3_ADF",
        "BattleEvent_P4_ADF",
        "BattleEvent_P5_ADF",
        "BattleEvent_P6_ADF"
      ],
      "latentQueue": []
    }
  ]
}