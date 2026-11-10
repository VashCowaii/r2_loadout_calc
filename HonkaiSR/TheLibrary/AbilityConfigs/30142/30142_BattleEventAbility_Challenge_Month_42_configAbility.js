const configAbility = {
  "fileName": "30142_BattleEventAbility_Challenge_Month_42",
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
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__851239433\">Modifier_BattleEventAbility_Challenge_Month_42</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "BattleEvent_P3_ADF",
        "BattleEvent_P4_ADF",
        "BattleEvent_P5_ADF",
        "BattleEvent_P6_ADF"
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
                          "variableName": "_Temp_Hp_TeamDark",
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
                                  "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P4_ADF)"
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
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P5_ADF)"
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
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P6_ADF)"
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
                  "value": 0,
                  "variableName": "Trigger_Flag"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "UseBP_Flag"
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
              "name": "Show Attack Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "attackCount": 0,
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
                    "displayLines": "BattleEvent_P2_ADF"
                  },
                  "max": {
                    "displayLines": "BattleEvent_P3_ADF"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "UseBP_Flag"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Trigger_Flag"
                }
              ]
            },
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
                        "displayLines": "BattleEvent_P2_ADF"
                      },
                      "max": {
                        "displayLines": "BattleEvent_P3_ADF"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Trigger_Flag"
                    },
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
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Trigger_Flag"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "UseBP_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
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
                "displayLines": "#BattleEvent_P1_ADF"
              },
              "adjustmentType": "+"
            }
          ]
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
                "displayLines": "BattleEvent_P3_ADF"
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
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
              "leavingRange": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "BattleEvent_P3_ADF"
                  },
                  "variableName": "MDF_Count"
                }
              ],
              "onChange": [
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
              ]
            }
          ]
        }
      ]
    }
  ]
}