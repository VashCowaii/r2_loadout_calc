const configAbility = {
  "fileName": "30131_BattleEventAbility_Challenge_Month_31",
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
      "modifier": "<a class=\"gModGreen\" id=\"935274623\">Modifier_BattleEventAbility_Challenge_Month_31</a>",
      "valuePerStack": {
        "BattleEvent_P1_ADF": {
          "displayLines": "#BattleEvent_P1_ADF"
        },
        "BattleEvent_P2_ADF": {
          "displayLines": "#BattleEvent_P2_ADF"
        },
        "BattleEvent_P3_ADF": {
          "displayLines": "#BattleEvent_P3_ADF"
        },
        "BattleEvent_P4_ADF": {
          "displayLines": "#BattleEvent_P4_ADF"
        },
        "BattleEvent_P5_ADF": {
          "displayLines": "#BattleEvent_P5_ADF"
        },
        "BattleEvent_P6_ADF": {
          "displayLines": "#BattleEvent_P6_ADF"
        },
        "BattleEvent_P7_ADF": {
          "displayLines": "#BattleEvent_P7_ADF"
        },
        "BattleEvent_P8_ADF": {
          "displayLines": "#BattleEvent_P8_ADF"
        },
        "BattleEvent_P9_ADF": {
          "displayLines": "#BattleEvent_P9_ADF"
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
      "for": "<a class=\"gModGreen\" id=\"mod__935274623\">Modifier_BattleEventAbility_Challenge_Month_31</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "BattleEvent_P3_ADF",
        "BattleEvent_P4_ADF",
        "BattleEvent_P5_ADF",
        "BattleEvent_P6_ADF",
        "BattleEvent_P7_ADF",
        "BattleEvent_P8_ADF",
        "BattleEvent_P9_ADF"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"389361840\">Modifier_BattleEventAbility_Challenge_Month_31_Sub2</a>",
          "haloStatus": true,
          "valuePerStack": {
            "ActionDelayRatio": {
              "displayLines": "BattleEvent_P2_ADF"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1231239842\">Modifier_BattleEventAbility_Challenge_Month_31_Sub</a>[<span class=\"descriptionNumberColor\">Exo-Toughness</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_RedStanceRatio": {
              "displayLines": "BattleEvent_P3_ADF"
            },
            "MDF_MinStance": {
              "displayLines": "BattleEvent_P4_ADF"
            }
          }
        }
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
                    "displayLines": "MDF_Count"
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
                                  "displayLines": "(_Temp_Hp * BattleEvent_P6_ADF)"
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
                                      "displayLines": "(_Temp_Hp * BattleEvent_P7_ADF)"
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
                                      "displayLines": "(_Temp_Hp * BattleEvent_P8_ADF)"
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
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_Count + BattleEvent_P1_ADF)"
                  },
                  "variableName": "MDF_Count"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "BattleEvent_P2_ADF"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Count + BattleEvent_P9_ADF)"
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
                      "displayLines": "BattleEvent_P5_ADF"
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
                        "displayLines": "MDF_Count"
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
                        "displayLines": "BattleEvent_P5_ADF"
                      },
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "BattleEvent_P5_ADF"
                      },
                      "variableName": "MDF_Count"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Exo-Weakness Broken: End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_Count + BattleEvent_P1_ADF)"
                  },
                  "variableName": "MDF_Count"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "BattleEvent_P2_ADF"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Count + BattleEvent_P9_ADF)"
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
                      "displayLines": "BattleEvent_P5_ADF"
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
                        "displayLines": "MDF_Count"
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
                        "displayLines": "BattleEvent_P5_ADF"
                      },
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "BattleEvent_P5_ADF"
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