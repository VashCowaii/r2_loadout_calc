const compositeAbilityObject = {
  "fullCharacterName": 1490374940,
  "trimCharacterName": 1490374940,
  "abilityList": [
    "1490374940_BossInfiniteWave_Boss_Camera",
    "1490374940_BossInfiniteWave_Boss_Insert",
    "1490374940_BossInfiniteWave_Ability_2",
    "1490374940_BossInfiniteWave_Ability",
    "1490374940_BattleEventAbility_Challenge_Month_42_Level",
    "1490374940_BattleEventAbility_Challenge_Month_42",
    "1490374940_BattleEventAbility_Challenge_Month_41",
    "1490374940_BattleEventAbility_Challenge_Month_40",
    "1490374940_BattleEventAbility_Challenge_Month_39",
    "1490374940_BattleEventAbility_Challenge_Month_38",
    "1490374940_BattleEventAbility_Challenge_Month_37",
    "1490374940_BattleEventAbility_Challenge_Month_36",
    "1490374940_BattleEventAbility_Challenge_Month_35",
    "1490374940_BattleEventAbility_Challenge_Month_34",
    "1490374940_BattleEventAbility_Challenge_Month_33_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_33",
    "1490374940_BattleEventAbility_Challenge_Month_32",
    "1490374940_BattleEventAbility_Challenge_Month_31",
    "1490374940_BattleEventAbility_Challenge_Month_30_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_30",
    "1490374940_BattleEventAbility_Challenge_Month_29",
    "1490374940_BattleEventAbility_Camear_AllLightTeamWithoutDither",
    "1490374940_BattleEventAbility_Camera_AllDarkTeamWithoutDither",
    "1490374940_BattleEventAbility_Challenge_Month_28_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_28",
    "1490374940_BattleEventAbility_Challenge_Month_27_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_27",
    "1490374940_BattleEventAbility_Challenge_Month_26_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_26",
    "1490374940_BattleEventAbility_Challenge_Month_25_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_25",
    "1490374940_BattleEventAbility_Challenge_Month_24",
    "1490374940_BattleEventAbility_Challenge_Month_23_RandomDebuff",
    "1490374940_BattleEventAbility_Challenge_Month_23",
    "1490374940_BattleEventAbility_Challenge_Month_22_plus3",
    "1490374940_BattleEventAbility_Challenge_Month_22_plus2",
    "1490374940_BattleEventAbility_Challenge_Month_22_plus1",
    "1490374940_BattleEventAbility_Challenge_Deathrattle_Camera",
    "1490374940_Modifier_BattleEventAbility_Challenge_Month_22_Insert",
    "1490374940_BattleEventAbility_Challenge_Month_22",
    "1490374940_BattleEventAbility_Challenge_Month_21",
    "1490374940_BattleEventAbility_Challenge_Month_20",
    "1490374940_BattleEventAbility_Challenge_Month_19",
    "1490374940_BattleEventAbility_Challenge_Month_18",
    "1490374940_BattleEventAbility_Challenge_Month_17",
    "1490374940_BattleEventAbility_Challenge_Month_16",
    "1490374940_Modifiers",
    "1490374940_Functions",
    "1490374940_BE_BattleEvents"
  ],
  "abilityObject": {
    "1490374940_BossInfiniteWave_Boss_Camera": {
      "fileName": "1490374940_BossInfiniteWave_Boss_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1490374940_BossInfiniteWave_Boss_Insert": {
      "fileName": "1490374940_BossInfiniteWave_Boss_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-842805226\">BossInfiniteWave_DamageTaken_Modifier</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-842805226\">BossInfiniteWave_DamageTaken_Modifier</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        }
      ]
    },
    "1490374940_BossInfiniteWave_Ability_2": {
      "fileName": "1490374940_BossInfiniteWave_Ability_2",
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
          "modifier": "<a class=\"gModGreen\" id=\"63496923\">BossInfiniteWave_Modifier</a>",
          "valuePerStack": {
            "Monster_Number": 15
          }
        }
      ],
      "references": []
    },
    "1490374940_BossInfiniteWave_Ability": {
      "fileName": "1490374940_BossInfiniteWave_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"63496923\">BossInfiniteWave_Modifier</a>",
          "valuePerStack": {
            "Monster_Number": 24
          }
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_42_Level": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_42_Level",
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
          "modifier": "<a class=\"gModGreen\" id=\"2085986224\">Modifier_BattleEventAbility_Challenge_Month_42_Level</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2085986224\">Modifier_BattleEventAbility_Challenge_Month_42_Level</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-887060833\">Standard_BOSSInfoBar_Active</a>"
                      },
                      {
                        "name": "Character ID",
                        "ID": 100403000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 100401016,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "ifTargetFound": [
                        {
                          "name": "Boss Bar Display",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "display": true
                        }
                      ]
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
    "1490374940_BattleEventAbility_Challenge_Month_42": {
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
    },
    "1490374940_BattleEventAbility_Challenge_Month_41": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_41",
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
          "modifier": "<a class=\"gModGreen\" id=\"800906576\">Modifier_BattleEventAbility_Challenge_Month_41</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1161171415\">Modifier_BattleEventAbility_Challenge_Month_41_Sub_PLY</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Fire"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Ice"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Ice"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Wind"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Wind"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Thunder"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Thunder"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Physical"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Physical"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Quantum"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Quantum"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Imaginary"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Imaginary"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Weak_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Weak_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Weak_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"800906576\">Modifier_BattleEventAbility_Challenge_Month_41</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"800906576\">Modifier_BattleEventAbility_Challenge_Month_41</a>",
                          "adjustmentType": "+",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                            "displayLines": "BattleEvent_P1_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P1_ADF"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Weak_Flag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__800906576\">Modifier_BattleEventAbility_Challenge_Month_41</a>",
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1161171415\">Modifier_BattleEventAbility_Challenge_Month_41_Sub_PLY</a>",
                      "valuePerStack": {
                        "BattleEvent_P1_ADF": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1161171415\">Modifier_BattleEventAbility_Challenge_Month_41_Sub_PLY</a>",
                  "valuePerStack": {
                    "BattleEvent_P1_ADF": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
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
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P2_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P2_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P2_ADF"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P3_ADF"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                            "displayLines": "BattleEvent_P3_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P3_ADF"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
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
                      ]
                    }
                  ]
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
    },
    "1490374940_BattleEventAbility_Challenge_Month_40": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_40",
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
          "modifier": "<a class=\"gModGreen\" id=\"817684195\">Modifier_BattleEventAbility_Challenge_Month_40</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__407459594\">Modifier_BattleEventAbility_Challenge_Month_40_Sub_PLY</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P1_ADF"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">BattleEvent_P1_ADF</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__817684195\">Modifier_BattleEventAbility_Challenge_Month_40</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonCount",
                  "value": 0
                },
                "Deleted bullshit",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Memosprites}} + {{Battle Event List}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Memosprite"
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "expectedType": "Summon"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SummonCount",
                          "value": {
                            "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_SummonCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_SummonCount"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonCount",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (MDF_SummonCount) || Variables[2] (BattleEvent_P5_ADF) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_SummonCount, BattleEvent_P5_ADF)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "MDF_SummonCount",
                      "BattleEvent_P5_ADF"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
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
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_SummonCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_SummonCount"
                            ]
                          },
                          "Event": [
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
                                  "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P2_ADF) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P2_ADF)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp_TeamDark",
                                    "BattleEvent_P2_ADF"
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
                              "name": "Looped Event",
                              "maxLoops": {
                                "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_SummonCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_SummonCount"
                                ]
                              },
                              "Event": [
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
                                      "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P3_ADF) || MUL || RETURN",
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P3_ADF)",
                                      "constants": [],
                                      "variables": [
                                        "_Temp_Hp_TeamDark",
                                        "BattleEvent_P3_ADF"
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
                          ],
                          "failed": [
                            {
                              "name": "Looped Event",
                              "maxLoops": {
                                "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_SummonCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_SummonCount"
                                ]
                              },
                              "Event": [
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-712201001\">Month_40_AddModifier</a>"
                    }
                  ]
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-712201001\">Month_40_AddModifier</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-712201001\">Month_40_AddModifier</a>"
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-712201001\">Month_40_AddModifier</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-712201001\">Month_40_AddModifier</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Owner Changed [Owner]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-712201001\">Month_40_AddModifier</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-712201001\">Month_40_AddModifier</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"407459594\">Modifier_BattleEventAbility_Challenge_Month_40_Sub_PLY</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getMemoAndSummon]]"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Target Exists",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getSummoner]]"
                            }
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getSummoner]]"
                            },
                            "type": "Character"
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"407459594\">Modifier_BattleEventAbility_Challenge_Month_40_Sub_PLY</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "BattleEvent_P1_ADF": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        }
                      }
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
            "BattleEvent_P5_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_39": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_39",
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
          "modifier": "<a class=\"gModGreen\" id=\"1069495575\">Modifier_BattleEventAbility_Challenge_Month_39</a>",
          "valuePerStack": {
            "DV_Count": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "DV_CountMax": {
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
          "for": "<a class=\"gModGreen\" id=\"mod__1069495575\">Modifier_BattleEventAbility_Challenge_Month_39</a>",
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
                                      "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P3_ADF) || MUL || RETURN",
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P3_ADF)",
                                      "constants": [],
                                      "variables": [
                                        "_Temp_Hp_TeamDark",
                                        "BattleEvent_P3_ADF"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
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
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (DV_Count2) || ADD || RETURN",
                        "displayLines": "(MDF_Count + DV_Count2)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "DV_Count2"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (DV_CountMax) || RETURN",
                          "displayLines": "DV_CountMax",
                          "constants": [],
                          "variables": [
                            "DV_CountMax"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (DV_CountMax) || RETURN",
                            "displayLines": "DV_CountMax",
                            "constants": [],
                            "variables": [
                              "DV_CountMax"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (DV_CountMax) || RETURN",
                            "displayLines": "DV_CountMax",
                            "constants": [],
                            "variables": [
                              "DV_CountMax"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "DV_Count",
            "DV_CountMax",
            "BattleEvent_P3_ADF",
            "BattleEvent_P4_ADF",
            "BattleEvent_P5_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_38": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_38",
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
          "modifier": "<a class=\"gModGreen\" id=\"1052717956\">Modifier_BattleEventAbility_Challenge_Month_38</a>",
          "valuePerStack": {
            "MDF_PursuedDamageRatio": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "MDF_DotDmgRatio": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__894900364\">Modifier_BattleEventAbility_Challenge_Month_38_PLY</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            "Damage": {
                              "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                              "displayLines": "MDF_PursuedDamageRatio",
                              "constants": [],
                              "variables": [
                                "MDF_PursuedDamageRatio"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            "Damage": {
                              "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                              "displayLines": "MDF_PursuedDamageRatio",
                              "constants": [],
                              "variables": [
                                "MDF_PursuedDamageRatio"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamageValue) || RETURN",
                      "displayLines": "Modifier_Burn_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the beginning of each turn for a certain number of turns. After being attacked by a Skill, this unit and adjacent targets additionally take DMG.",
          "type": "Debuff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1052717956\">Modifier_BattleEventAbility_Challenge_Month_38</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 4
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 803401,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "Modifier_Burn_DamageValue": {
                          "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                          "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                          "constants": [],
                          "variables": [
                            "MDF_DotDmgRatio",
                            "_Temp_HP_BE"
                          ]
                        }
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                          "isTrigger": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "valuePerStack": {
                            "Modifier_Burn_DamageValue": {
                              "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                              "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                              "constants": [],
                              "variables": [
                                "MDF_DotDmgRatio",
                                "_Temp_HP_BE"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"894900364\">Modifier_BattleEventAbility_Challenge_Month_38_PLY</a>",
                      "valuePerStack": {
                        "MDF_PursuedDamageRatio": {
                          "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                          "displayLines": "MDF_PursuedDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_PursuedDamageRatio"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Temp_HP_BE",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"894900364\">Modifier_BattleEventAbility_Challenge_Month_38_PLY</a>",
                  "valuePerStack": {
                    "MDF_PursuedDamageRatio": {
                      "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                      "displayLines": "MDF_PursuedDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PursuedDamageRatio"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 4
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 803401,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "Modifier_Burn_DamageValue": {
                          "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                          "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                          "constants": [],
                          "variables": [
                            "MDF_DotDmgRatio",
                            "_Temp_HP_BE"
                          ]
                        }
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                          "isTrigger": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "valuePerStack": {
                            "Modifier_Burn_DamageValue": {
                              "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                              "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                              "constants": [],
                              "variables": [
                                "MDF_DotDmgRatio",
                                "_Temp_HP_BE"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [
            "MDF_PursuedDamageRatio",
            "MDF_DotDmgRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_37": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_37",
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
          "modifier": "<a class=\"gModGreen\" id=\"901719385\">Modifier_BattleEventAbility_Challenge_Month_37</a>",
          "valuePerStack": {
            "DV_LifeTime": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "DV_DmgPercentage": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
              ]
            },
            "DV_Count": {
              "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
              "displayLines": "#BattleEvent_P3_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P3_ADF"
              ]
            },
            "DV_CountMax": {
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
            },
            "BattleEvent_P7_ADF": {
              "operator": "Variables[0] (#BattleEvent_P7_ADF) || RETURN",
              "displayLines": "#BattleEvent_P7_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P7_ADF"
              ]
            }
          }
        },
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Count"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-976285872\">Modifier_BattleEventAbility_Challenge_Month_37_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_DmgPercentage_get) || RETURN",
                    "displayLines": "DV_DmgPercentage_get",
                    "constants": [],
                    "variables": [
                      "DV_DmgPercentage_get"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || Variables[1] (DV_Count2) || ADD || RETURN",
                    "displayLines": "(MDF_Count + DV_Count2)",
                    "constants": [],
                    "variables": [
                      "MDF_Count",
                      "DV_Count2"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (DV_CountMax) || RETURN",
                      "displayLines": "DV_CountMax",
                      "constants": [],
                      "variables": [
                        "DV_CountMax"
                      ]
                    }
                  },
                  "passed": [
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
                  "failed": [
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (DV_CountMax) || RETURN",
                        "displayLines": "DV_CountMax",
                        "constants": [],
                        "variables": [
                          "DV_CountMax"
                        ]
                      },
                      "on": null,
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (DV_CountMax) || RETURN",
                        "displayLines": "DV_CountMax",
                        "constants": [],
                        "variables": [
                          "DV_CountMax"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DV_DmgPercentage_get</span>. After attacking, increases <span class=\"descriptionNumberColor\">DV_Count</span> Hits Per Action to \"Memory Turbulence,\" up to a max of <span class=\"descriptionNumberColor\">DV_CountMax</span> hit(s).",
          "type": "Buff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-228203803\">Modifier_BattleEventAbility_Challenge_Month_37_PLY</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-976285872\">Modifier_BattleEventAbility_Challenge_Month_37_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_LifeTime) || RETURN",
                        "displayLines": "DV_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "DV_DmgPercentage_get": {
                          "operator": "Variables[0] (DV_DmgPercentage) || RETURN",
                          "displayLines": "DV_DmgPercentage",
                          "constants": [],
                          "variables": [
                            "DV_DmgPercentage"
                          ]
                        },
                        "DV_Count": {
                          "operator": "Variables[0] (DV_Count2) || RETURN",
                          "displayLines": "DV_Count2",
                          "constants": [],
                          "variables": [
                            "DV_Count2"
                          ]
                        },
                        "DV_CountMax": {
                          "operator": "Variables[0] (DV_CountMax) || RETURN",
                          "displayLines": "DV_CountMax",
                          "constants": [],
                          "variables": [
                            "DV_CountMax"
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        },
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}.[[getMemosprite]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-976285872\">Modifier_BattleEventAbility_Challenge_Month_37_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "duration": {
                            "operator": "Variables[0] (DV_LifeTime) || RETURN",
                            "displayLines": "DV_LifeTime",
                            "constants": [],
                            "variables": [
                              "DV_LifeTime"
                            ]
                          },
                          "valuePerStack": {
                            "DV_DmgPercentage_get": {
                              "operator": "Variables[0] (DV_DmgPercentage) || RETURN",
                              "displayLines": "DV_DmgPercentage",
                              "constants": [],
                              "variables": [
                                "DV_DmgPercentage"
                              ]
                            },
                            "DV_Count": {
                              "operator": "Variables[0] (DV_Count2) || RETURN",
                              "displayLines": "DV_Count2",
                              "constants": [],
                              "variables": [
                                "DV_Count2"
                              ]
                            },
                            "DV_CountMax": {
                              "operator": "Variables[0] (DV_CountMax) || RETURN",
                              "displayLines": "DV_CountMax",
                              "constants": [],
                              "variables": [
                                "DV_CountMax"
                              ]
                            }
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
          "for": "<a class=\"gModGreen\" id=\"mod__901719385\">Modifier_BattleEventAbility_Challenge_Month_37</a>",
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
                                          "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P7_ADF) || MUL || RETURN",
                                          "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P7_ADF)",
                                          "constants": [],
                                          "variables": [
                                            "_Temp_Hp_TeamDark",
                                            "BattleEvent_P7_ADF"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Far Left Player Entity(no Memosprite)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228203803\">Modifier_BattleEventAbility_Challenge_Month_37_PLY</a>",
                  "valuePerStack": {
                    "DV_LifeTime": {
                      "operator": "Variables[0] (DV_LifeTime) || RETURN",
                      "displayLines": "DV_LifeTime",
                      "constants": [],
                      "variables": [
                        "DV_LifeTime"
                      ]
                    },
                    "DV_DmgPercentage": {
                      "operator": "Variables[0] (DV_DmgPercentage) || RETURN",
                      "displayLines": "DV_DmgPercentage",
                      "constants": [],
                      "variables": [
                        "DV_DmgPercentage"
                      ]
                    },
                    "DV_Count": {
                      "operator": "Variables[0] (DV_Count2) || RETURN",
                      "displayLines": "DV_Count2",
                      "constants": [],
                      "variables": [
                        "DV_Count2"
                      ]
                    },
                    "DV_CountMax": {
                      "operator": "Variables[0] (DV_CountMax) || RETURN",
                      "displayLines": "DV_CountMax",
                      "constants": [],
                      "variables": [
                        "DV_CountMax"
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [
            "DV_LifeTime",
            "DV_DmgPercentage",
            "DV_Count",
            "DV_CountMax",
            "BattleEvent_P5_ADF",
            "BattleEvent_P6_ADF",
            "BattleEvent_P7_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_36": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_36",
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
          "modifier": "<a class=\"gModGreen\" id=\"884941766\">Modifier_BattleEventAbility_Challenge_Month_36</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1413445617\">Modifier_BattleEventAbility_Challenge_Month_36_sub</a>",
          "execute": [
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
                            "skillType": "Memosprite"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Attack Targets}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"312988714\">BAttleEventAbility_AddWeakness</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "Define Custom Variable",
                      "variableName": "_Flag",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__884941766\">Modifier_BattleEventAbility_Challenge_Month_36</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Deleted bullshit",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Weakness Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": null,
                      "variable": "MDF_WeakCount",
                      "weaknessFilter": "All"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_WeakCount",
                        "compareType": ">",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DmgCount",
                          "value": {
                            "operator": "Variables[0] (MDF_WeakCount) || Constants[0] (3) || SUB || RETURN",
                            "displayLines": "(MDF_WeakCount - 3)",
                            "constants": [
                              3
                            ],
                            "variables": [
                              "MDF_WeakCount"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DmgCount",
                          "value": 0
                        }
                      ]
                    },
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
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (MDF_DmgCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_DmgCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_DmgCount"
                            ]
                          },
                          "Event": [
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
                                  "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P3_ADF) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P3_ADF)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp_TeamDark",
                                    "BattleEvent_P3_ADF"
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
                              "name": "Looped Event",
                              "maxLoops": {
                                "operator": "Variables[0] (MDF_DmgCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_DmgCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_DmgCount"
                                ]
                              },
                              "Event": [
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
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Looped Event",
                              "maxLoops": {
                                "operator": "Variables[0] (MDF_DmgCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_DmgCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_DmgCount"
                                ]
                              },
                              "Event": [
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1413445617\">Modifier_BattleEventAbility_Challenge_Month_36_sub</a>"
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [
            "BattleEvent_P1_ADF",
            "BattleEvent_P2_ADF",
            "BattleEvent_P3_ADF",
            "BattleEvent_P4_ADF",
            "BattleEvent_P5_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_35": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_35",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1476592663\">BattleEventAbility_Challenge_Month_35_Fix</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1845699241\">Modifier_BattleEventAbility_Challenge_Month_35_ResetDV</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"868164147\">Modifier_BattleEventAbility_Challenge_Month_35</a>",
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
            },
            "BattleEvent_P7_ADF": {
              "operator": "Variables[0] (#BattleEvent_P7_ADF) || RETURN",
              "displayLines": "#BattleEvent_P7_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P7_ADF"
              ]
            },
            "BattleEvent_P8_ADF": {
              "operator": "Variables[0] (#BattleEvent_P8_ADF) || RETURN",
              "displayLines": "#BattleEvent_P8_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P8_ADF"
              ]
            },
            "BattleEvent_P9_ADF": {
              "operator": "Variables[0] (#BattleEvent_P9_ADF) || RETURN",
              "displayLines": "#BattleEvent_P9_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P9_ADF"
              ]
            }
          }
        },
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Count"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__685276198\">Modifier_BattleEventAbility_Challenge_Month_35_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_HPAddedRatio) || RETURN",
                    "displayLines": "DV_HPAddedRatio",
                    "constants": [],
                    "variables": [
                      "DV_HPAddedRatio"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_LoseHPTriggerLimit",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_LoseHPTriggerLimit",
                      "value": 1
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (DV_HealHP_Ratio) || RETURN",
                        "displayLines": "DV_HealHP_Ratio",
                        "constants": [],
                        "variables": [
                          "DV_HealHP_Ratio"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (DV_Count) || ADD || RETURN",
                        "displayLines": "(MDF_Count + DV_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "DV_Count"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (DV_CountMax) || RETURN",
                          "displayLines": "DV_CountMax",
                          "constants": [],
                          "variables": [
                            "DV_CountMax"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (DV_CountMax) || RETURN",
                            "displayLines": "DV_CountMax",
                            "constants": [],
                            "variables": [
                              "DV_CountMax"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (DV_CountMax) || RETURN",
                            "displayLines": "DV_CountMax",
                            "constants": [],
                            "variables": [
                              "DV_CountMax"
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
              "eventTrigger": "Being Attacked Start [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (DV_HealHP_Ratio2) || RETURN",
                        "displayLines": "DV_HealHP_Ratio2",
                        "constants": [],
                        "variables": [
                          "DV_HealHP_Ratio2"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (DV_Count2) || ADD || RETURN",
                        "displayLines": "(MDF_Count + DV_Count2)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "DV_Count2"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (DV_CountMax) || RETURN",
                          "displayLines": "DV_CountMax",
                          "constants": [],
                          "variables": [
                            "DV_CountMax"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (DV_CountMax) || RETURN",
                            "displayLines": "DV_CountMax",
                            "constants": [],
                            "variables": [
                              "DV_CountMax"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (DV_CountMax) || RETURN",
                            "displayLines": "DV_CountMax",
                            "constants": [],
                            "variables": [
                              "DV_CountMax"
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
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_LoseHPTriggerLimit",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_LoseHPTriggerLimit",
                  "value": 0
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">DV_HPAddedRatio</span>.",
          "type": "Buff",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1845699241\">Modifier_BattleEventAbility_Challenge_Month_35_ResetDV</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"685276198\">Modifier_BattleEventAbility_Challenge_Month_35_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "variableName": "DV_LoseHPTriggerLimit",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__868164147\">Modifier_BattleEventAbility_Challenge_Month_35</a>",
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"685276198\">Modifier_BattleEventAbility_Challenge_Month_35_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "DV_HealHP_Ratio": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        },
                        "DV_Count": {
                          "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P2_ADF"
                          ]
                        },
                        "DV_CountMax": {
                          "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P3_ADF"
                          ]
                        },
                        "DV_HPAddedRatio": {
                          "operator": "Variables[0] (BattleEvent_P7_ADF) || RETURN",
                          "displayLines": "BattleEvent_P7_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P7_ADF"
                          ]
                        },
                        "DV_HealHP_Ratio2": {
                          "operator": "Variables[0] (BattleEvent_P9_ADF) || RETURN",
                          "displayLines": "BattleEvent_P9_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P9_ADF"
                          ]
                        },
                        "DV_Count2": {
                          "operator": "Variables[0] (BattleEvent_P8_ADF) || RETURN",
                          "displayLines": "BattleEvent_P8_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P8_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"685276198\">Modifier_BattleEventAbility_Challenge_Month_35_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "valuePerStack": {
                    "DV_HealHP_Ratio": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    },
                    "DV_Count": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
                      ]
                    },
                    "DV_CountMax": {
                      "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P3_ADF"
                      ]
                    },
                    "DV_HPAddedRatio": {
                      "operator": "Variables[0] (BattleEvent_P7_ADF) || RETURN",
                      "displayLines": "BattleEvent_P7_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P7_ADF"
                      ]
                    },
                    "DV_HealHP_Ratio2": {
                      "operator": "Variables[0] (BattleEvent_P9_ADF) || RETURN",
                      "displayLines": "BattleEvent_P9_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P9_ADF"
                      ]
                    },
                    "DV_Count2": {
                      "operator": "Variables[0] (BattleEvent_P8_ADF) || RETURN",
                      "displayLines": "BattleEvent_P8_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P8_ADF"
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -90
            }
          ],
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
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_34": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_34",
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
          "modifier": "<a class=\"gModGreen\" id=\"851386528\">Modifier_BattleEventAbility_Challenge_Month_34</a>",
          "valuePerStack": {
            "BattleEvent_P1_ADF": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            }
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityCurrentSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityStockSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityMaxSP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__224250663\">Modifier_BattleEventAbility_Challenge_Month_34_AddSP</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (EntityMaxSP) || Variables[2] (BattleEvent_P1_ADF_Get) || MUL || ADD || RETURN",
                        "displayLines": "(EntityCurrentSP + (EntityMaxSP * BattleEvent_P1_ADF_Get))",
                        "constants": [],
                        "variables": [
                          "EntityCurrentSP",
                          "EntityMaxSP",
                          "BattleEvent_P1_ADF_Get"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EntityCurrentSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || RETURN",
                          "displayLines": "EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (BattleEvent_P1_ADF_Get) || MUL || RETURN",
                            "displayLines": "(EntityMaxSP * BattleEvent_P1_ADF_Get)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "BattleEvent_P1_ADF_Get"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityCurrentSP",
                              "EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-14605930\">Modifier_BattleEventAbility_Challenge_Month_34_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityCurrentSP",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1025370836\">Modifier_BattleEventAbility_Challenge_Month_34_ReturnSP</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                          "displayLines": "(EntityMaxSP - _CurrentSP)",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP",
                            "_CurrentSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || RETURN",
                            "displayLines": "EntityStockSP",
                            "constants": [],
                            "variables": [
                              "EntityStockSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-14605930\">Modifier_BattleEventAbility_Challenge_Month_34_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                            "displayLines": "(EntityMaxSP - _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-14605930\">Modifier_BattleEventAbility_Challenge_Month_34_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1616150794\">Modifier_BattleEventAbility_Challenge_Month_34_InsertAction</a>[<span class=\"descriptionNumberColor\">Extra Action</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "afterInjection": []
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "You will have an extra action after taking an action.",
          "type": "Buff",
          "statusName": "Extra Action"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__851386528\">Modifier_BattleEventAbility_Challenge_Month_34</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeam",
                  "isTrigger": true
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[getMemosprite]]"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"224250663\">Modifier_BattleEventAbility_Challenge_Month_34_AddSP</a>",
                  "valuePerStack": {
                    "BattleEvent_P1_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1025370836\">Modifier_BattleEventAbility_Challenge_Month_34_ReturnSP</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1616150794\">Modifier_BattleEventAbility_Challenge_Month_34_InsertAction</a>[<span class=\"descriptionNumberColor\">Extra Action</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P1_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_33_Insert": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_33_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 5,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": ">=",
            "value2": 3
          },
          "ifTargetFound": [
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
                  "operator": "Variables[0] (DV_DmgValue) || RETURN",
                  "displayLines": "DV_DmgValue",
                  "constants": [],
                  "variables": [
                    "DV_DmgValue"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_33": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_33",
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
          "modifier": "<a class=\"gModGreen\" id=\"968829861\">Modifier_BattleEventAbility_Challenge_Month_33</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__953871196\">Modifier_BattleEventAbility_Challenge_Month_33_Sub</a>",
          "modifierFlags": [
            "Deathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Standard_Servant_Forcekill"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Challenge_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Challenge_Month_33_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Filter by Life-State",
                            "state": "Mask_AliveOrRevivable"
                          }
                        ]
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            }
                          ]
                        }
                      },
                      "noTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Standard_Servant_Forcekill",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterForceKill",
                          "ownerState": "Mask_AliveOrRevivable",
                          "targetState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Challenge_Month_33_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "DV_DmgValue": {
                      "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                      "displayLines": "MDF_DamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__968829861\">Modifier_BattleEventAbility_Challenge_Month_33</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<=",
                    "value2": 4,
                    "livingTargets": true
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (FirstPuman) || RETURN",
                            "displayLines": "FirstPuman",
                            "constants": [],
                            "variables": [
                              "FirstPuman"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    },
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SecondPuman) || RETURN",
                            "displayLines": "SecondPuman",
                            "constants": [],
                            "variables": [
                              "SecondPuman"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
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
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "TempHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"953871196\">Modifier_BattleEventAbility_Challenge_Month_33_Sub</a>",
                      "valuePerStack": {
                        "MDF_DamageValue": {
                          "operator": "Variables[0] (TempHP) || Variables[1] (#BattleEvent_P2_ADF) || MUL || RETURN",
                          "displayLines": "(TempHP * #BattleEvent_P2_ADF)",
                          "constants": [],
                          "variables": [
                            "TempHP",
                            "#BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                "Deleted bullshit",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"523983815\">MChallengeMaze_StageMark_Puman001</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"540761434\">MChallengeMaze_StageMark_Puman002</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"557539053\">MChallengeMaze_StageMark_Puman003</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"440095720\">MChallengeMaze_StageMark_Puman004</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"456873339\">MChallengeMaze_StageMark_Puman005</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"473650958\">MChallengeMaze_StageMark_Puman006</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"490428577\">MChallengeMaze_StageMark_Puman007</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"372985244\">MChallengeMaze_StageMark_Puman008</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"389762863\">MChallengeMaze_StageMark_Puman009</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"608019005\">MChallengeMaze_StageMark_Puman010</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"591241386\">MChallengeMaze_StageMark_Puman011</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"574463767\">MChallengeMaze_StageMark_Puman012</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"557686148\">MChallengeMaze_StageMark_Puman013</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"540908529\">MChallengeMaze_StageMark_Puman014</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FirstPuman",
                      "value": 800205060
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SecondPuman",
                      "value": 800205060
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (FirstPuman) || RETURN",
                        "displayLines": "FirstPuman",
                        "constants": [],
                        "variables": [
                          "FirstPuman"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SecondPuman) || RETURN",
                        "displayLines": "SecondPuman",
                        "constants": [],
                        "variables": [
                          "SecondPuman"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_32": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_32",
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
          "modifier": "<a class=\"gModGreen\" id=\"952052242\">Modifier_BattleEventAbility_Challenge_Month_32</a>",
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
        },
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__952052242\">Modifier_BattleEventAbility_Challenge_Month_32</a>",
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
                              "variableName": "_Temp_Hp",
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
                                      "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P4_ADF) || MUL || RETURN",
                                      "displayLines": "(_Temp_Hp * BattleEvent_P4_ADF)",
                                      "constants": [],
                                      "variables": [
                                        "_Temp_Hp",
                                        "BattleEvent_P4_ADF"
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
                                          "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P6_ADF) || MUL || RETURN",
                                          "displayLines": "(_Temp_Hp * BattleEvent_P6_ADF)",
                                          "constants": [],
                                          "variables": [
                                            "_Temp_Hp",
                                            "BattleEvent_P6_ADF"
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
                        }
                      ]
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
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P1_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P1_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P1_ADF"
                        ]
                      }
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
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P2_ADF) || ADD || RETURN",
                            "displayLines": "(MDF_Count + BattleEvent_P2_ADF)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "BattleEvent_P2_ADF"
                            ]
                          }
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
                          "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P3_ADF"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                            "displayLines": "BattleEvent_P3_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P3_ADF"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
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
                      ]
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
    },
    "1490374940_BattleEventAbility_Challenge_Month_31": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_31",
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
            },
            "BattleEvent_P7_ADF": {
              "operator": "Variables[0] (#BattleEvent_P7_ADF) || RETURN",
              "displayLines": "#BattleEvent_P7_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P7_ADF"
              ]
            },
            "BattleEvent_P8_ADF": {
              "operator": "Variables[0] (#BattleEvent_P8_ADF) || RETURN",
              "displayLines": "#BattleEvent_P8_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P8_ADF"
              ]
            },
            "BattleEvent_P9_ADF": {
              "operator": "Variables[0] (#BattleEvent_P9_ADF) || RETURN",
              "displayLines": "#BattleEvent_P9_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P9_ADF"
              ]
            }
          }
        },
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__935274623\">Modifier_BattleEventAbility_Challenge_Month_31</a>",
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
                              "variableName": "_Temp_Hp",
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
                                      "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P6_ADF) || MUL || RETURN",
                                      "displayLines": "(_Temp_Hp * BattleEvent_P6_ADF)",
                                      "constants": [],
                                      "variables": [
                                        "_Temp_Hp",
                                        "BattleEvent_P6_ADF"
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
                                          "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P7_ADF) || MUL || RETURN",
                                          "displayLines": "(_Temp_Hp * BattleEvent_P7_ADF)",
                                          "constants": [],
                                          "variables": [
                                            "_Temp_Hp",
                                            "BattleEvent_P7_ADF"
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
                                          "operator": "Variables[0] (_Temp_Hp) || Variables[1] (BattleEvent_P8_ADF) || MUL || RETURN",
                                          "displayLines": "(_Temp_Hp * BattleEvent_P8_ADF)",
                                          "constants": [],
                                          "variables": [
                                            "_Temp_Hp",
                                            "BattleEvent_P8_ADF"
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
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P1_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P1_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P1_ADF"
                        ]
                      }
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
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P9_ADF) || ADD || RETURN",
                            "displayLines": "(MDF_Count + BattleEvent_P9_ADF)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "BattleEvent_P9_ADF"
                            ]
                          }
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
                          "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P5_ADF"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                            "displayLines": "BattleEvent_P5_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P5_ADF"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                            "displayLines": "BattleEvent_P5_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P5_ADF"
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
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P1_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P1_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P1_ADF"
                        ]
                      }
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
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P9_ADF) || ADD || RETURN",
                            "displayLines": "(MDF_Count + BattleEvent_P9_ADF)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "BattleEvent_P9_ADF"
                            ]
                          }
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
                          "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P5_ADF"
                          ]
                        }
                      },
                      "passed": [
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                            "displayLines": "BattleEvent_P5_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P5_ADF"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                            "displayLines": "BattleEvent_P5_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P5_ADF"
                            ]
                          }
                        }
                      ]
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
            "BattleEvent_P6_ADF",
            "BattleEvent_P7_ADF",
            "BattleEvent_P8_ADF",
            "BattleEvent_P9_ADF"
          ],
          "latentQueue": [],
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
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
                  ]
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
                  "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                  "displayLines": "BattleEvent_P3_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P3_ADF"
                  ]
                },
                "MDF_MinStance": {
                  "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                  "displayLines": "BattleEvent_P4_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P4_ADF"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_30_Insert": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_30_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Trigger_Effect_Flag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_Temp_Hp",
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
                      "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_get) || MUL || RETURN",
                      "displayLines": "(_Temp_Hp * _Damage_Ratio_get)",
                      "constants": [],
                      "variables": [
                        "_Temp_Hp",
                        "_Damage_Ratio_get"
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
                      "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2_get) || MUL || RETURN",
                      "displayLines": "(_Temp_Hp * _Damage_Ratio_2_get)",
                      "constants": [],
                      "variables": [
                        "_Temp_Hp",
                        "_Damage_Ratio_2_get"
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
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_30": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_30",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Init_Layer",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_DmgUp_Ratio",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Damage_Ratio",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Damage_Ratio_2",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Current_Layer"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Trigger_Effect_Flag"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camear_AllLightTeamWithoutDither"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_30_Insert"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"918497004\">Modifier_BattleEventAbility_Challenge_Month_30</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__918497004\">Modifier_BattleEventAbility_Challenge_Month_30</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Effect_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Effect_Flag",
                      "value": 0
                    },
                    "Deleted bullshit",
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_Temp_Hp",
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio"
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio_2)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio_2"
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    "Trigger: Attack End"
                  ],
                  "failed": [
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
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "_DmgUp_Ratio_get": {
                          "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                          "displayLines": "_DmgUp_Ratio",
                          "constants": [],
                          "variables": [
                            "_DmgUp_Ratio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Current_Layer) || RETURN",
                        "displayLines": "_Current_Layer",
                        "constants": [],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": {
                        "operator": "Variables[0] (_Current_Layer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_Current_Layer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Current_Layer",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (_Init_Layer) || RETURN",
                          "displayLines": "_Init_Layer",
                          "constants": [],
                          "variables": [
                            "_Init_Layer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger_Effect_Flag",
                          "value": 1
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "BattleEventAbility_Challenge_Month_30_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "priorityTag": "AvatarInsertAttackSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "_Damage_Ratio_get": {
                                  "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                                  "displayLines": "#BattleEvent_P3_ADF",
                                  "constants": [],
                                  "variables": [
                                    "#BattleEvent_P3_ADF"
                                  ]
                                },
                                "_Damage_Ratio_2_get": {
                                  "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                                  "displayLines": "#BattleEvent_P4_ADF",
                                  "constants": [],
                                  "variables": [
                                    "#BattleEvent_P4_ADF"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Effect_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Effect_Flag",
                      "value": 0
                    },
                    "Deleted bullshit",
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_Temp_Hp",
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio"
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio_2)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio_2"
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    "Trigger: Attack End"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "failed": [
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
                          "name": "Define Custom Variable",
                          "variableName": "_Current_Layer",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1736106961\">Modifier_BattleEventAbility_Challenge_Month_30_sub2</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Current_Layer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "operator": "Variables[0] (_Init_Layer) || RETURN",
                    "displayLines": "_Init_Layer",
                    "constants": [],
                    "variables": [
                      "_Init_Layer"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "_DmgUp_Ratio_get": {
                              "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                              "displayLines": "_DmgUp_Ratio",
                              "constants": [],
                              "variables": [
                                "_DmgUp_Ratio"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Current_Layer) || RETURN",
                            "displayLines": "_Current_Layer",
                            "constants": [],
                            "variables": [
                              "_Current_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "_DmgUp_Ratio_get": {
                              "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                              "displayLines": "_DmgUp_Ratio",
                              "constants": [],
                              "variables": [
                                "_DmgUp_Ratio"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Current_Layer) || RETURN",
                            "displayLines": "_Current_Layer",
                            "constants": [],
                            "variables": [
                              "_Current_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_DmgUp_Ratio",
            "_Trigger_Effect_Flag"
          ]
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_29": {
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
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1136753146\">Modifier_BattleEventAbility_Challenge_Month_29</a>",
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
                              "variableName": "_Temp_Hp",
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
                      "variableName": "Insert_Flag",
                      "value": 1
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
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P4_ADF) || ADD || RETURN",
                        "displayLines": "(MDF_Count + BattleEvent_P4_ADF)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "BattleEvent_P4_ADF"
                        ]
                      }
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                            "displayLines": "BattleEvent_P1_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P1_ADF"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                            "displayLines": "BattleEvent_P1_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P1_ADF"
                            ]
                          }
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
                          "variableName": "Insert_Flag",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P3_ADF) || ADD || RETURN",
                            "displayLines": "(MDF_Count + BattleEvent_P3_ADF)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "BattleEvent_P3_ADF"
                            ]
                          }
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
                          "failed": [
                            {
                              "name": "Show Attack Time",
                              "time": {
                                "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                                "displayLines": "BattleEvent_P1_ADF",
                                "constants": [],
                                "variables": [
                                  "BattleEvent_P1_ADF"
                                ]
                              },
                              "on": null,
                              "show": true
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Count",
                              "value": {
                                "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                                "displayLines": "BattleEvent_P1_ADF",
                                "constants": [],
                                "variables": [
                                  "BattleEvent_P1_ADF"
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
            }
          ],
          "stackData": [
            "BattleEvent_P1_ADF",
            "BattleEvent_P2_ADF",
            "BattleEvent_P3_ADF",
            "BattleEvent_P4_ADF",
            "BattleEvent_P5_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Camear_AllLightTeamWithoutDither": {
      "fileName": "1490374940_BattleEventAbility_Camear_AllLightTeamWithoutDither",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event"
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Camera_AllDarkTeamWithoutDither": {
      "fileName": "1490374940_BattleEventAbility_Camera_AllDarkTeamWithoutDither",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "UI Display Event"
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_28_Insert": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_28_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"701462759\">Modifier_BattleEventAbility_Challenge_Month_28_Insert</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackLimit": {
            "operator": "Variables[0] (DV_MaxLayer_Set) || RETURN",
            "displayLines": "DV_MaxLayer_Set",
            "constants": [],
            "variables": [
              "DV_MaxLayer_Set"
            ]
          },
          "valuePerStack": {
            "DV_DmgUpRatio_Get": {
              "operator": "Variables[0] (DV_DmgUpRatio_Set) || RETURN",
              "displayLines": "DV_DmgUpRatio_Set",
              "constants": [],
              "variables": [
                "DV_DmgUpRatio_Set"
              ]
            },
            "DV_AtkUpRatio_Get": {
              "operator": "Variables[0] (DV_AtkUpRatio_Set) || RETURN",
              "displayLines": "DV_AtkUpRatio_Set",
              "constants": [],
              "variables": [
                "DV_AtkUpRatio_Set"
              ]
            }
          },
          "addStacksPerTrigger": 1,
          "casterAssign": "TargetSelf"
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_28": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_28",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P2_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P3_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P4_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P5_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
            "displayLines": "#BattleEvent_P5_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P5_ADF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1153530765\">Modifier_BattleEventAbility_Challenge_Month_28</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1551992588\">Modifier_BattleEventAbility_Challenge_Month_28_Sub</a>[<span class=\"descriptionNumberColor\">Fatal Weakness</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Standard_Servant_Forcekill"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Challenge_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Challenge_Month_28_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Filter by Life-State",
                            "state": "Mask_AliveOrRevivable"
                          }
                        ]
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            },
                            {
                              "name": "Enemy ID",
                              "ID": 800205060,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Sequence Trotter"
                            }
                          ]
                        }
                      },
                      "noTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Standard_Servant_Forcekill",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterForceKill",
                          "ownerState": "Mask_AliveOrRevivable",
                          "targetState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Challenge_Month_28_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "DV_DmgUpRatio_Set": {
                      "operator": "Variables[0] (DV_DmgUpRatio) || RETURN",
                      "displayLines": "DV_DmgUpRatio",
                      "constants": [],
                      "variables": [
                        "DV_DmgUpRatio"
                      ]
                    },
                    "DV_MaxLayer_Set": {
                      "operator": "Variables[0] (DV_MaxLayer) || RETURN",
                      "displayLines": "DV_MaxLayer",
                      "constants": [],
                      "variables": [
                        "DV_MaxLayer"
                      ]
                    },
                    "DV_AtkUpRatio_Set": {
                      "operator": "Variables[0] (DV_AtkUpRatio) || RETURN",
                      "displayLines": "DV_AtkUpRatio",
                      "constants": [],
                      "variables": [
                        "DV_AtkUpRatio"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "description": "This unit will immediately be defeated when its Weakness is Broken. After being defeated, the attacker's action will be Advanced Forward by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF</span>.",
          "type": "Debuff",
          "statusName": "Fatal Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1153530765\">Modifier_BattleEventAbility_Challenge_Month_28</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy Team is Dead",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 4,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"523983815\">MChallengeMaze_StageMark_Puman001</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"540761434\">MChallengeMaze_StageMark_Puman002</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"557539053\">MChallengeMaze_StageMark_Puman003</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"440095720\">MChallengeMaze_StageMark_Puman004</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"456873339\">MChallengeMaze_StageMark_Puman005</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"473650958\">MChallengeMaze_StageMark_Puman006</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"490428577\">MChallengeMaze_StageMark_Puman007</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"372985244\">MChallengeMaze_StageMark_Puman008</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"389762863\">MChallengeMaze_StageMark_Puman009</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"608019005\">MChallengeMaze_StageMark_Puman010</a>"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (800205060) || RETURN",
                                "displayLines": "800205060",
                                "constants": [
                                  800205060
                                ],
                                "variables": []
                              },
                              "locationType": "Last"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1551992588\">Modifier_BattleEventAbility_Challenge_Month_28_Sub</a>[<span class=\"descriptionNumberColor\">Fatal Weakness</span>]",
                      "valuePerStack": {
                        "DV_WeaknessCount": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        },
                        "DV_DmgUpRatio": {
                          "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P3_ADF"
                          ]
                        },
                        "DV_MaxLayer": {
                          "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                          "displayLines": "BattleEvent_P4_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P4_ADF"
                          ]
                        },
                        "DV_AtkUpRatio": {
                          "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P5_ADF"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-595048974\">Modifier_BattleEventAbility_Challenge_Month_28_preshow</a>",
                      "valuePerStack": {
                        "ActionDelayRatio": {
                          "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"639115186\">Modifier_BattleEventAbility_Challenge_Month_28_Sub2</a>",
                      "valuePerStack": {
                        "_ActionDelayRatio": {
                          "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P2_ADF"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"655892805\">Modifier_BattleEventAbility_Challenge_Month_28_Sub3</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                "Deleted bullshit",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-595048974\">Modifier_BattleEventAbility_Challenge_Month_28_preshow</a>",
                  "valuePerStack": {
                    "ActionDelayRatio": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"639115186\">Modifier_BattleEventAbility_Challenge_Month_28_Sub2</a>",
                  "valuePerStack": {
                    "_ActionDelayRatio": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"655892805\">Modifier_BattleEventAbility_Challenge_Month_28_Sub3</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"523983815\">MChallengeMaze_StageMark_Puman001</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"540761434\">MChallengeMaze_StageMark_Puman002</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"557539053\">MChallengeMaze_StageMark_Puman003</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"440095720\">MChallengeMaze_StageMark_Puman004</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"456873339\">MChallengeMaze_StageMark_Puman005</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"473650958\">MChallengeMaze_StageMark_Puman006</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"490428577\">MChallengeMaze_StageMark_Puman007</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"372985244\">MChallengeMaze_StageMark_Puman008</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"389762863\">MChallengeMaze_StageMark_Puman009</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"608019005\">MChallengeMaze_StageMark_Puman010</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205060) || RETURN",
                            "displayLines": "800205060",
                            "constants": [
                              800205060
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_27_Insert": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_27_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Trigger_Effect_Flag",
          "value": 0
        },
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
          "valuePerStack": {
            "_SP_Ratio_get": {
              "operator": "Variables[0] (_SP_Ratio) || RETURN",
              "displayLines": "_SP_Ratio",
              "constants": [],
              "variables": [
                "_SP_Ratio"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
          "casterAssign": "TargetSelf"
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_27": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_27",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Init_Layer",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_DmgUp_Ratio",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_SP_Ratio",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Current_Layer"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Trigger_Effect_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityCurrentSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityStockSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityMaxSP"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camear_AllLightTeamWithoutDither"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_27_Insert"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"901866480\">Modifier_BattleEventAbility_Challenge_Month_27</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__901866480\">Modifier_BattleEventAbility_Challenge_Month_27</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Effect_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Effect_Flag",
                      "value": 0
                    },
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
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
                      "valuePerStack": {
                        "_SP_Ratio_get": {
                          "operator": "Variables[0] (_SP_Ratio) || RETURN",
                          "displayLines": "_SP_Ratio",
                          "constants": [],
                          "variables": [
                            "_SP_Ratio"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
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
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "_DmgUp_Ratio_get": {
                          "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                          "displayLines": "_DmgUp_Ratio",
                          "constants": [],
                          "variables": [
                            "_DmgUp_Ratio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Current_Layer) || RETURN",
                        "displayLines": "_Current_Layer",
                        "constants": [],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": {
                        "operator": "Variables[0] (_Current_Layer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_Current_Layer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Current_Layer",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (_Init_Layer) || RETURN",
                          "displayLines": "_Init_Layer",
                          "constants": [],
                          "variables": [
                            "_Init_Layer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger_Effect_Flag",
                          "value": 1
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "BattleEventAbility_Challenge_Month_27_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "AvatarBuffSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Effect_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Effect_Flag",
                      "value": 0
                    },
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
                      "valuePerStack": {
                        "_SP_Ratio_get": {
                          "operator": "Variables[0] (_SP_Ratio) || RETURN",
                          "displayLines": "_SP_Ratio",
                          "constants": [],
                          "variables": [
                            "_SP_Ratio"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "failed": [
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
                          "name": "Define Custom Variable",
                          "variableName": "_Current_Layer",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Current_Layer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "operator": "Variables[0] (_Init_Layer) || RETURN",
                    "displayLines": "_Init_Layer",
                    "constants": [],
                    "variables": [
                      "_Init_Layer"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "_DmgUp_Ratio_get": {
                              "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                              "displayLines": "_DmgUp_Ratio",
                              "constants": [],
                              "variables": [
                                "_DmgUp_Ratio"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Current_Layer) || RETURN",
                            "displayLines": "_Current_Layer",
                            "constants": [],
                            "variables": [
                              "_Current_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "_DmgUp_Ratio_get": {
                              "operator": "Variables[0] (_DmgUp_Ratio) || RETURN",
                              "displayLines": "_DmgUp_Ratio",
                              "constants": [],
                              "variables": [
                                "_DmgUp_Ratio"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Current_Layer) || RETURN",
                            "displayLines": "_Current_Layer",
                            "constants": [],
                            "variables": [
                              "_Current_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_DmgUp_Ratio",
            "_Trigger_Effect_Flag"
          ]
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_26_Insert": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_26_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Trigger_Damage_Flag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_Temp_Hp",
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
                      "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_get) || MUL || RETURN",
                      "displayLines": "(_Temp_Hp * _Damage_Ratio_get)",
                      "constants": [],
                      "variables": [
                        "_Temp_Hp",
                        "_Damage_Ratio_get"
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
                      "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2_get) || MUL || RETURN",
                      "displayLines": "(_Temp_Hp * _Damage_Ratio_2_get)",
                      "constants": [],
                      "variables": [
                        "_Temp_Hp",
                        "_Damage_Ratio_2_get"
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
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_26": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_26",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Init_Layer",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_DamageUp_Ratio",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Damage_Ratio",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Damage_Ratio_2",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Current_Layer"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "_Trigger_Damage_Flag"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_26_Insert"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"918644099\">Modifier_BattleEventAbility_Challenge_Month_26</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__918644099\">Modifier_BattleEventAbility_Challenge_Month_26</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Damage_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Damage_Flag",
                      "value": 0
                    },
                    "Deleted bullshit",
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_Temp_Hp",
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio"
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio_2)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio_2"
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    "Trigger: Attack End"
                  ],
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": {
                        "operator": "Variables[0] (_Current_Layer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_Current_Layer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Current_Layer",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (_Init_Layer) || RETURN",
                          "displayLines": "_Init_Layer",
                          "constants": [],
                          "variables": [
                            "_Init_Layer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger_Damage_Flag",
                          "value": 1
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "BattleEventAbility_Challenge_Month_26_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "priorityTag": "AvatarInsertAttackSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "_Damage_Ratio_get": {
                                  "operator": "Variables[0] (_Damage_Ratio) || RETURN",
                                  "displayLines": "_Damage_Ratio",
                                  "constants": [],
                                  "variables": [
                                    "_Damage_Ratio"
                                  ]
                                },
                                "_Damage_Ratio_2_get": {
                                  "operator": "Variables[0] (_Damage_Ratio_2) || RETURN",
                                  "displayLines": "_Damage_Ratio_2",
                                  "constants": [],
                                  "variables": [
                                    "_Damage_Ratio_2"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Damage_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Damage_Flag",
                      "value": 0
                    },
                    "Deleted bullshit",
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_Temp_Hp",
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio"
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
                                  "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2) || MUL || RETURN",
                                  "displayLines": "(_Temp_Hp * _Damage_Ratio_2)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp",
                                    "_Damage_Ratio_2"
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    "Trigger: Attack End"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "failed": [
                        "Deleted bullshit",
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Current_Layer",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"319313068\">Modifier_BattleEventAbility_Challenge_Month_26_sub2</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Member Added to Team [Owner]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Current_Layer",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Current_Layer) || RETURN",
                            "displayLines": "_Current_Layer",
                            "constants": [],
                            "variables": [
                              "_Current_Layer"
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
              "eventTrigger": "Member Removed from Team [Owner]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Current_Layer",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Current_Layer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "operator": "Variables[0] (_Init_Layer) || RETURN",
                    "displayLines": "_Init_Layer",
                    "constants": [],
                    "variables": [
                      "_Init_Layer"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Current_Layer) || RETURN",
                            "displayLines": "_Current_Layer",
                            "constants": [],
                            "variables": [
                              "_Current_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Init_Layer) || RETURN",
                            "displayLines": "_Init_Layer",
                            "constants": [],
                            "variables": [
                              "_Init_Layer"
                            ]
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Current_Layer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Trigger_Damage_Flag"
          ]
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_25_Insert": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_25_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Monthly Challenge Battle Event}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-691475768\">Modifier_BattleEventAbility_Challenge_Month_25_Insert_pre</a>",
          "valuePerStack": {
            "BattleEvent_P2_ADF_Chance": {
              "operator": "Variables[0] (BattleEvent_P2_ADF_Set) || RETURN",
              "displayLines": "BattleEvent_P2_ADF_Set",
              "constants": [],
              "variables": [
                "BattleEvent_P2_ADF_Set"
              ]
            },
            "BattleEvent_P3_ADF_LifeTime": {
              "operator": "Variables[0] (BattleEvent_P3_ADF_Set) || RETURN",
              "displayLines": "BattleEvent_P3_ADF_Set",
              "constants": [],
              "variables": [
                "BattleEvent_P3_ADF_Set"
              ]
            },
            "BattleEvent_P4_ADF_DamagePercentage": {
              "operator": "Variables[0] (BattleEvent_P4_ADF_Set) || RETURN",
              "displayLines": "BattleEvent_P4_ADF_Set",
              "constants": [],
              "variables": [
                "BattleEvent_P4_ADF_Set"
              ]
            },
            "BattleEvent_P5_ADF_DotTriggerRatio": {
              "operator": "Variables[0] (BattleEvent_P5_ADF_Set) || RETURN",
              "displayLines": "BattleEvent_P5_ADF_Set",
              "constants": [],
              "variables": [
                "BattleEvent_P5_ADF_Set"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_25": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_25",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P2_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P3_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P4_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P5_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
            "displayLines": "#BattleEvent_P5_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P5_ADF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"935421718\">Modifier_BattleEventAbility_Challenge_Month_25</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-782509985\">Modifier_BattleEventAbility_Challenge_Month_25_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Standard_Servant_Forcekill"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "BattleEvent_P1_ADF_Get"
                        }
                      ]
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
                  "abilityName": "BattleEventAbility_Challenge_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Challenge_Month_25_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Character ID",
                          "ID": 800205000,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": null
                        }
                      },
                      "noTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Standard_Servant_Forcekill",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterForceKill",
                          "ownerState": "Mask_AliveOrRevivable",
                          "targetState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Challenge_Month_25_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "BattleEvent_P2_ADF_Set": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF_Get) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF_Get",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF_Get"
                      ]
                    },
                    "BattleEvent_P3_ADF_Set": {
                      "operator": "Variables[0] (BattleEvent_P3_ADF_Get) || RETURN",
                      "displayLines": "BattleEvent_P3_ADF_Get",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P3_ADF_Get"
                      ]
                    },
                    "BattleEvent_P4_ADF_Set": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF_Get) || RETURN",
                      "displayLines": "BattleEvent_P4_ADF_Get",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P4_ADF_Get"
                      ]
                    },
                    "BattleEvent_P5_ADF_Set": {
                      "operator": "Variables[0] (BattleEvent_P5_ADF_Get) || RETURN",
                      "displayLines": "BattleEvent_P5_ADF_Get",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P5_ADF_Get"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "description": "Takes <span class=\"descriptionNumberColor\">BattleEvent_P1_ADF</span> increased DMG from Basic ATKs and DoT effects. When this unit is defeated, if any enemies are in Bleed, Shock, Burn, or Wind Shear state, immediately deals DMG equal to <span class=\"descriptionNumberColor\">BattleEvent_P5_ADF</span> of the original DoT to all other enemies with a high chance to inflict Bleed, Shock, Burn, or Wind Shear on them for <span class=\"descriptionNumberColor\">BattleEvent_P3_ADF</span> turn(s).",
          "type": "Debuff",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__935421718\">Modifier_BattleEventAbility_Challenge_Month_25</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy Team is Dead",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 4,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.5,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205000) || RETURN",
                            "displayLines": "800205000",
                            "constants": [
                              800205000
                            ],
                            "variables": []
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "TempHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "TempAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (TempHP) || Variables[1] (Hardlevel_HP) || SUB || RETURN",
                    "displayLines": "(TempHP - Hardlevel_HP)",
                    "constants": [],
                    "variables": [
                      "TempHP",
                      "Hardlevel_HP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Hardlevel_StatusResistance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectRESSUM</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (Hardlevel_StatusResistance) || Constants[1] (0.1) || ADD || SUB || DIV || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "((1 / (1 - (Hardlevel_StatusResistance + 0.1))) - 1)",
                    "constants": [
                      1,
                      0.1
                    ],
                    "variables": [
                      "Hardlevel_StatusResistance"
                    ]
                  }
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 800205000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-782509985\">Modifier_BattleEventAbility_Challenge_Month_25_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "BattleEvent_P1_ADF_Get": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        },
                        "BattleEvent_P2_ADF_Get": {
                          "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P2_ADF"
                          ]
                        },
                        "BattleEvent_P3_ADF_Get": {
                          "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P3_ADF"
                          ]
                        },
                        "BattleEvent_P4_ADF_Get": {
                          "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                          "displayLines": "BattleEvent_P4_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P4_ADF"
                          ]
                        },
                        "BattleEvent_P5_ADF_Get": {
                          "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P5_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                "Deleted bullshit",
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (800205000) || RETURN",
                        "displayLines": "800205000",
                        "constants": [
                          800205000
                        ],
                        "variables": []
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_24": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_24",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEventAbility_Challenge_Month_24_Count"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P2_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P3_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P4_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P5_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
            "displayLines": "#BattleEvent_P5_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P5_ADF"
            ]
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camear_AllDarkTeam"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"952199337\">Modifier_BattleEventAbility_Challenge_Month_24</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__952199337\">Modifier_BattleEventAbility_Challenge_Month_24</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEventAbility_Challenge_Month_24_Count",
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
                        "operator": "Variables[0] (BattleEventAbility_Challenge_Month_24_Count) || RETURN",
                        "displayLines": "BattleEventAbility_Challenge_Month_24_Count",
                        "constants": [],
                        "variables": [
                          "BattleEventAbility_Challenge_Month_24_Count"
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
                              "variableName": "_Temp_Hp",
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
                      "variableName": "BattleEventAbility_Challenge_Month_24_Count",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1260413696\">Modifier_BattleEventAbility_Challenge_Month_24_sub</a>",
                      "valuePerStack": {
                        "BattleEvent_P1_ADF_Get": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        }
                      }
                    }
                  ]
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
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "_BPChangeValue",
                      "value": "ParamValue"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BattleEventAbility_Challenge_Month_24_Count",
                      "context": "ContextCaster",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (_BPChangeValue) || Variables[1] (BattleEvent_P3_ADF) || MUL || SUB || RETURN",
                        "displayLines": "(0 - (_BPChangeValue * BattleEvent_P3_ADF))",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_BPChangeValue",
                          "BattleEvent_P3_ADF"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                        "displayLines": "BattleEvent_P4_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P4_ADF"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (BattleEventAbility_Challenge_Month_24_Count) || RETURN",
                    "displayLines": "BattleEventAbility_Challenge_Month_24_Count",
                    "constants": [],
                    "variables": [
                      "BattleEventAbility_Challenge_Month_24_Count"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1260413696\">Modifier_BattleEventAbility_Challenge_Month_24_sub</a>",
                  "valuePerStack": {
                    "BattleEvent_P1_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BattleEventAbility_Challenge_Month_24_Count"
          ]
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_23_RandomDebuff": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_23_RandomDebuff",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Random Event",
          "odds": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1504166155\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff1</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
              "duration": {
                "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                "displayLines": "BattleEvent_P4_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P4_ADF"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                "displayLines": "BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P3_ADF"
                ]
              },
              "valuePerStack": {
                "BattleEvent_P2_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1520943774\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff2</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
              "duration": {
                "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                "displayLines": "BattleEvent_P4_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P4_ADF"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                "displayLines": "BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P3_ADF"
                ]
              },
              "valuePerStack": {
                "BattleEvent_P2_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1537721393\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff3</a>[<span class=\"descriptionNumberColor\">SPD Reduction</span>]",
              "duration": {
                "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                "displayLines": "BattleEvent_P4_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P4_ADF"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                "displayLines": "BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P3_ADF"
                ]
              },
              "valuePerStack": {
                "BattleEvent_P2_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1554499012\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff4</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
              "duration": {
                "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                "displayLines": "BattleEvent_P4_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P4_ADF"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                "displayLines": "BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P3_ADF"
                ]
              },
              "valuePerStack": {
                "BattleEvent_P2_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1571276631\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff5</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                "displayLines": "BattleEvent_P4_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P4_ADF"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                "displayLines": "BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P3_ADF"
                ]
              },
              "valuePerStack": {
                "BattleEvent_P5_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                  "displayLines": "BattleEvent_P5_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P5_ADF"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P2_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P3_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P4_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P5_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
            "displayLines": "#BattleEvent_P5_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P5_ADF"
            ]
          }
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_23": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_23",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camear_AllDarkTeam"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_23_RandomDebuff"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"968976956\">Modifier_BattleEventAbility_Challenge_Month_23</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__968976956\">Modifier_BattleEventAbility_Challenge_Month_23</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P1_ADF"
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
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "ability": "BattleEventAbility_Challenge_Month_23_RandomDebuff"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "The Hunt",
                      "Destruction"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
                    }
                  ]
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
                    "target": "{{Enemy Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllDarkTeam",
                  "isTrigger": true
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P1_ADF"
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
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "ability": "BattleEventAbility_Challenge_Month_23_RandomDebuff"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "The Hunt",
                      "Destruction"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
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
    "1490374940_BattleEventAbility_Challenge_Month_22_plus3": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_22_plus3",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3",
          "value": 1
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_22_plus2": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_22_plus2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus2",
          "value": 1
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_22_plus1": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_22_plus1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus1",
          "value": 1
        }
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Deathrattle_Camera": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Deathrattle_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1490374940_Modifier_BattleEventAbility_Challenge_Month_22_Insert": {
      "fileName": "1490374940_Modifier_BattleEventAbility_Challenge_Month_22_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        "Deleted bullshit",
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "state": "Die",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Bomb_Damage_get) || RETURN",
                      "displayLines": "Bomb_Damage_get",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage_get"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "DV_plus3_get",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1490374940_BattleEventAbility_Challenge_Month_22": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_22",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus2"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_22_plus1"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_22_plus2"
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Challenge_Month_22_plus3"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_BattleEventAbility_Challenge_Month_22_plus1",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985754575\">Modifier_BattleEventAbility_Challenge_Month_22</a>",
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
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || Constants[0] (2) || MUL || RETURN",
                  "displayLines": "(#BattleEvent_P2_ADF * 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "TempHP": {
                  "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
                  "displayLines": "BattleEvent_BaseHP",
                  "constants": [],
                  "variables": [
                    "BattleEvent_BaseHP"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985754575\">Modifier_BattleEventAbility_Challenge_Month_22</a>",
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
                "TempHP": {
                  "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
                  "displayLines": "BattleEvent_BaseHP",
                  "constants": [],
                  "variables": [
                    "BattleEvent_BaseHP"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1522391139\">Modifier_BattleEventAbility_Challenge_Month_22_plus3_ultraDmgUp</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg",
                  "value": {
                    "operator": "Variables[0] (DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg) || Constants[0] (0.1) || MUL || RETURN",
                    "displayLines": "(DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg * 0.1)",
                    "constants": [
                      0.1
                    ],
                    "variables": [
                      "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Bomb_Damage) || RETURN",
                      "displayLines": "Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                    "displayLines": "Bomb_MaxLayer",
                    "constants": [],
                    "variables": [
                      "Bomb_MaxLayer"
                    ]
                  },
                  "assignState": "False"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Bomb_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Bomb_Layer) || RETURN",
                    "displayLines": "Bomb_Layer",
                    "constants": [],
                    "variables": [
                      "Bomb_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                    "displayLines": "Bomb_MaxLayer",
                    "constants": [],
                    "variables": [
                      "Bomb_MaxLayer"
                    ]
                  },
                  "assignState": "True"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage",
                  "value": {
                    "operator": "Variables[0] (Bomb_Damage) || Variables[1] (Bomb_Layer) || MUL || RETURN",
                    "displayLines": "(Bomb_Damage * Bomb_Layer)",
                    "constants": [],
                    "variables": [
                      "Bomb_Damage",
                      "Bomb_Layer"
                    ]
                  }
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_Challenge_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Modifier_BattleEventAbility_Challenge_Month_22_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_BattleEventAbility_Challenge_Month_22_plus3",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Bomb_Damage",
                      "value": {
                        "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1.5) || MUL || RETURN",
                        "displayLines": "(Bomb_Damage * 1.5)",
                        "constants": [
                          1.5
                        ],
                        "variables": [
                          "Bomb_Damage"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1522391139\">Modifier_BattleEventAbility_Challenge_Month_22_plus3_ultraDmgUp</a>",
                      "stackLimit": 20,
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Modifier_BattleEventAbility_Challenge_Month_22_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "valuePerStack": {
                    "Bomb_Damage_get": {
                      "operator": "Variables[0] (Bomb_Damage) || RETURN",
                      "displayLines": "Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage"
                      ]
                    },
                    "DV_plus3_get": {
                      "operator": "Variables[0] (DV_BattleEventAbility_Challenge_Month_22_plus3) || RETURN",
                      "displayLines": "DV_BattleEventAbility_Challenge_Month_22_plus3",
                      "constants": [],
                      "variables": [
                        "DV_BattleEventAbility_Challenge_Month_22_plus3"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                    "displayLines": "Bomb_MaxLayer",
                    "constants": [],
                    "variables": [
                      "Bomb_MaxLayer"
                    ]
                  },
                  "assignState": "False"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2023621930\">Modifier_BattleEventAbility_Challenge_Month_22_plus2_recoverSP</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 60,
                  "isFixed": "(Fixed)"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__455159922\">Modifier_BattleEventAbility_Challenge_Month_22_sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_BattleEventAbility_Challenge_Month_22_plus1",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 5,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Modifier Values",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "valueType": "Layer",
                                  "variableName": "TempLayer_get",
                                  "modifierName": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                                  "multiplier": 1
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                                  "addStacksPerTrigger": {
                                    "operator": "Variables[0] (TempLayer_get) || RETURN",
                                    "displayLines": "TempLayer_get",
                                    "constants": [],
                                    "variables": [
                                      "TempLayer_get"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                                  "stackLimit": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__51"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "Bomb_Damage": {
                                      "operator": "Variables[0] (TempHP_get) || Variables[1] (ENEMIES_OBJECT_UNUSED__49) || MUL || RETURN",
                                      "displayLines": "(TempHP_get * ENEMIES_OBJECT_UNUSED__49)",
                                      "constants": [],
                                      "variables": [
                                        "TempHP_get",
                                        "ENEMIES_OBJECT_UNUSED__49"
                                      ]
                                    },
                                    "Bomb_MaxLayer": {
                                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                                      "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                                      "constants": [],
                                      "variables": [
                                        "ENEMIES_OBJECT_UNUSED__51"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                          "stackLimit": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__51"
                            ]
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "operator": "Variables[0] (TempHP_get) || Variables[1] (ENEMIES_OBJECT_UNUSED__49) || MUL || RETURN",
                              "displayLines": "(TempHP_get * ENEMIES_OBJECT_UNUSED__49)",
                              "constants": [],
                              "variables": [
                                "TempHP_get",
                                "ENEMIES_OBJECT_UNUSED__49"
                              ]
                            },
                            "Bomb_MaxLayer": {
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__51"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_BattleEventAbility_Challenge_Month_22_plus2",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2023621930\">Modifier_BattleEventAbility_Challenge_Month_22_plus2_recoverSP</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__985754575\">Modifier_BattleEventAbility_Challenge_Month_22</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"455159922\">Modifier_BattleEventAbility_Challenge_Month_22_sub</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    },
                    "BattleEvent_P1_ADF_get": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    },
                    "BattleEvent_P2_ADF_get": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
                      ]
                    }
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"455159922\">Modifier_BattleEventAbility_Challenge_Month_22_sub</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "BattleEvent_P1_ADF_get": {
                          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P1_ADF"
                          ]
                        },
                        "BattleEvent_P2_ADF_get": {
                          "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P1_ADF",
            "BattleEvent_P2_ADF",
            "TempHP"
          ],
          "latentQueue": [
            "DV_BattleEventAbility_Challenge_Month_22_plus1",
            "DV_BattleEventAbility_Challenge_Month_22_plus2"
          ]
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_21": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_21",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEventAbility_Challenge_Month_21_Count"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P2_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P3_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P4_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_P5_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
            "displayLines": "#BattleEvent_P5_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P5_ADF"
            ]
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_Camear_AllDarkTeam"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1002532194\">Modifier_BattleEventAbility_Challenge_Month_21</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1002532194\">Modifier_BattleEventAbility_Challenge_Month_21</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEventAbility_Challenge_Month_21_Count",
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
                        "operator": "Variables[0] (BattleEventAbility_Challenge_Month_21_Count) || RETURN",
                        "displayLines": "BattleEventAbility_Challenge_Month_21_Count",
                        "constants": [],
                        "variables": [
                          "BattleEventAbility_Challenge_Month_21_Count"
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
                      "variableName": "BattleEventAbility_Challenge_Month_21_Count",
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2100246283\">Modifier_BattleEventAbility_Challenge_Month_21_sub</a>"
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
    "1490374940_BattleEventAbility_Challenge_Month_20": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_20",
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
          "modifier": "<a class=\"gModGreen\" id=\"1019309813\">Modifier_BattleEventAbility_Challenge_Month_20</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1799241140\">Modifier_BattleEventAbility_Challenge_Month_20_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "InsertFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Random Event",
                          "isUnique": true,
                          "count": {
                            "operator": "Variables[0] (ADF_1) || RETURN",
                            "displayLines": "ADF_1",
                            "constants": [],
                            "variables": [
                              "ADF_1"
                            ]
                          },
                          "odds": [
                            0.142,
                            0.143,
                            0.143,
                            0.143,
                            0.143,
                            0.143,
                            0.143
                          ],
                          "execute": [
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Fire",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Wind",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Ice",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Physical",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Thunder",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Quantum",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Sequence Event",
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Imaginary",
                                    "Damage": {
                                      "operator": "Variables[0] (ADF_2) || RETURN",
                                      "displayLines": "ADF_2",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG"
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
                  "variableName": "InsertFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1019309813\">Modifier_BattleEventAbility_Challenge_Month_20</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1799241140\">Modifier_BattleEventAbility_Challenge_Month_20_Sub</a>",
                  "valuePerStack": {
                    "ADF_1": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    },
                    "ADF_2": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1799241140\">Modifier_BattleEventAbility_Challenge_Month_20_Sub</a>",
                      "valuePerStack": {
                        "ADF_1": {
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
                          ]
                        },
                        "ADF_2": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
    "1490374940_BattleEventAbility_Challenge_Month_19": {
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
              "name": "Show Attack Time",
              "time": 0,
              "on": null,
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
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P3_ADF) || ADD || RETURN",
                            "displayLines": "(MDF_Count + BattleEvent_P3_ADF)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "BattleEvent_P3_ADF"
                            ]
                          }
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
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (BattleEvent_P4_ADF) || ADD || RETURN",
                            "displayLines": "(MDF_Count + BattleEvent_P4_ADF)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "BattleEvent_P4_ADF"
                            ]
                          }
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
                      "failed": [
                        {
                          "name": "Show Attack Time",
                          "time": {
                            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                            "displayLines": "BattleEvent_P1_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P1_ADF"
                            ]
                          },
                          "on": null,
                          "show": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                            "displayLines": "BattleEvent_P1_ADF",
                            "constants": [],
                            "variables": [
                              "BattleEvent_P1_ADF"
                            ]
                          }
                        }
                      ]
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
            "BattleEvent_P5_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_18": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_18",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 31003,
          "variables": null,
          "whenCreated": [
            {
              "name": "Show Attack Time",
              "time": 0,
              "on": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"985901670\">Modifier_BattleEventAbility_Challenge_Month_18</a>",
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
            }
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityCurrentSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityStockSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "CurrentLayerAddSP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "scope": "TargetEntity",
          "variableName": "EntityMaxSP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1972510028\">Modifier_BattleEventAbility_Challenge_Month_18_Sub3</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentLayerAddSP",
                      "value": {
                        "operator": "Variables[0] (CurrentLayerAddSP) || Variables[1] (BattleEvent_P3_ADF_Get) || MUL || RETURN",
                        "displayLines": "(CurrentLayerAddSP * BattleEvent_P3_ADF_Get)",
                        "constants": [],
                        "variables": [
                          "CurrentLayerAddSP",
                          "BattleEvent_P3_ADF_Get"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (CurrentLayerAddSP) || ADD || RETURN",
                        "displayLines": "(EntityCurrentSP + CurrentLayerAddSP)",
                        "constants": [],
                        "variables": [
                          "EntityCurrentSP",
                          "CurrentLayerAddSP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EntityCurrentSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || RETURN",
                          "displayLines": "EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (CurrentLayerAddSP) || RETURN",
                            "displayLines": "CurrentLayerAddSP",
                            "constants": [],
                            "variables": [
                              "CurrentLayerAddSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityCurrentSP",
                              "EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityCurrentSP",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1955732409\">Modifier_BattleEventAbility_Challenge_Month_18_Sub2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                          "displayLines": "(EntityMaxSP - _CurrentSP)",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP",
                            "_CurrentSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || RETURN",
                            "displayLines": "EntityStockSP",
                            "constants": [],
                            "variables": [
                              "EntityStockSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                            "displayLines": "(EntityMaxSP - _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "description": "At the start of each Cycle, regenerate Energy equal to 100% of their respective Max Energy to allies who have <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span> or more stacks of Memory Imprint.",
          "type": "Buff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__985901670\">Modifier_BattleEventAbility_Challenge_Month_18</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeam",
                  "isTrigger": true
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)v2}}"
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "CurrentLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1972510028\">Modifier_BattleEventAbility_Challenge_Month_18_Sub3</a>",
                  "valuePerStack": {
                    "BattleEvent_P1_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    },
                    "BattleEvent_P2_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
                      ]
                    },
                    "BattleEvent_P3_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P3_ADF"
                      ]
                    },
                    "CurrentLayerAddSP": {
                      "operator": "Variables[0] (CurrentLayer) || RETURN",
                      "displayLines": "CurrentLayer",
                      "constants": [],
                      "variables": [
                        "CurrentLayer"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1955732409\">Modifier_BattleEventAbility_Challenge_Month_18_Sub2</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
              "eventTrigger": "Ability Use [Anyone]: End",
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
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                        "displayLines": "BattleEvent_P2_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P2_ADF"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                        "displayLines": "BattleEvent_P1_ADF",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P1_ADF"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "CurrentLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (CurrentLayer) || RETURN",
                        "displayLines": "CurrentLayer",
                        "constants": [],
                        "variables": [
                          "CurrentLayer"
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
            "BattleEvent_P3_ADF"
          ],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_17": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_17",
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
          "modifier": "<a class=\"gModGreen\" id=\"1170455479\">Modifier_BattleEventAbility_Challenge_Month_17</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Joint-Attack",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Share DMG Taken",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                          },
                          "selfSplit": 1,
                          "targetSplit": {
                            "operator": "Variables[0] (ADF_1) || RETURN",
                            "displayLines": "ADF_1",
                            "constants": [],
                            "variables": [
                              "ADF_1"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When receiving DMG, all other enemy targets receive DMG equal to <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span> of the original DMG.",
          "type": "Debuff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1170455479\">Modifier_BattleEventAbility_Challenge_Month_17</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "ADF_1": {
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
                          ]
                        },
                        "ADF_2": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "BattleEventAbility_Camear_AllDarkTeam",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "ADF_1": {
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
                          ]
                        },
                        "ADF_2": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1490374940_BattleEventAbility_Challenge_Month_16": {
      "fileName": "1490374940_BattleEventAbility_Challenge_Month_16",
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
          "modifier": "<a class=\"gModGreen\" id=\"1153677860\">Modifier_BattleEventAbility_Challenge_Month_16</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-161396657\">Modifier_BattleEventAbility_Challenge_Month_16_SuperIce</a>[<span class=\"descriptionNumberColor\">Dissociation</span>]",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Frozen_Effect",
            "STAT_CTRL_Frozen",
            "STAT_CTRL"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageRatio) || Variables[1] (_MaxHP) || MUL || RETURN",
                          "displayLines": "(MDF_DamageRatio * _MaxHP)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageRatio",
                            "_MaxHP"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
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
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Targets are considered as Frozen and cannot take action for a certain number of turns. When this effect is dispelled, the targets will receive Ice Additional DMG based on their respective Max HP.",
          "type": "Debuff",
          "effectName": "Dissociation",
          "statusName": "Dissociation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1287529225\">Modifier_BattleEventAbility_Challenge_Month_16_Sub2</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (MDF_Layer) || MUL || RETURN",
                      "displayLines": "(#BattleEvent_P1_ADF * MDF_Layer)",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF",
                        "MDF_Layer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-161396657\">Modifier_BattleEventAbility_Challenge_Month_16_SuperIce</a>[<span class=\"descriptionNumberColor\">Dissociation</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_DamageRatio": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#BattleEvent_P3_ADF</span>. After using an attack, every stack of Memory Imprint has a <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span> fixed chance of applying Dissociation to the target.",
          "type": "Buff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1237196368\">Modifier_BattleEventAbility_Challenge_Month_16_Sub1</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill_Use_Flag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1287529225\">Modifier_BattleEventAbility_Challenge_Month_16_Sub2</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill_Use_Flag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill_Use_Flag",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1287529225\">Modifier_BattleEventAbility_Challenge_Month_16_Sub2</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1153677860\">Modifier_BattleEventAbility_Challenge_Month_16</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1237196368\">Modifier_BattleEventAbility_Challenge_Month_16_Sub1</a>"
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1237196368\">Modifier_BattleEventAbility_Challenge_Month_16_Sub1</a>"
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
    "1490374940_Modifiers": {
      "fileName": "1490374940_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1118024096\">Standard_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Imaginary",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1163813471\">BAttleEventAbility_Weakness_Quantum</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1163813471\">BAttleEventAbility_Weakness_Quantum</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1012677236\">Standard_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Quantum",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__436644401\">BAttleEventAbility_Weakness_Ice</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"436644401\">BAttleEventAbility_Weakness_Ice</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1497676034\">Standard_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Ice",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__89731232\">BAttleEventAbility_Weakness_Thunder</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"89731232\">BAttleEventAbility_Weakness_Thunder</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1930557999\">Standard_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Thunder",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-944583698\">BAttleEventAbility_Weakness_Fire</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-944583698\">BAttleEventAbility_Weakness_Fire</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-2009288629\">Standard_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Fire",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1329707912\">BAttleEventAbility_Weakness_Wind</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1329707912\">BAttleEventAbility_Weakness_Wind</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1938125975\">Standard_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Wind",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__853477559\">BAttleEventAbility_Weakness_Physical</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"853477559\">BAttleEventAbility_Weakness_Physical</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1724958950\">Standard_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": "Physical",
                    "invertCondition": true,
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_PropertyValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]",
          "modifierFlags": [
            "BlockDamage"
          ],
          "description": "Immune to taking any form of DMG. Dispelled after all other friendly units are defeated.",
          "type": "Buff",
          "effectName": "DMG Immunity",
          "statusName": "DMG Immunity"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1773885775\">BossInfiniteWave_HPLock_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__537567377\">BossInfiniteWave_Boss_Modifier</a>[<span class=\"descriptionNumberColor\">Eloquence</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BossInfiniteWave_Boss_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BossInfiniteWave_Boss_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "W1_SvarogPart"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (Monster_Number) || RETURN",
                          "displayLines": "Monster_Number",
                          "constants": [],
                          "variables": [
                            "Monster_Number"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1773885775\">BossInfiniteWave_HPLock_Modifier</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "BossInfiniteWave_Boss_Insert",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "The target can only be defeated after a certain number of enemies have been eliminated. At the same time, the target will take significantly more DMG.",
          "type": "Other",
          "effectName": "Eloquence",
          "statusName": "Eloquence"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-14605930\">Modifier_BattleEventAbility_Challenge_Month_34_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "EntityStockSPForShow"
          ],
          "latentQueue": [],
          "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__655892805\">Modifier_BattleEventAbility_Challenge_Month_28_Sub3</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "killer": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "deathSourceType": "KilledByOthers"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__639115186\">Modifier_BattleEventAbility_Challenge_Month_28_Sub2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": {
                          "operator": "Variables[0] (_ActionDelayRatio) || RETURN",
                          "displayLines": "_ActionDelayRatio",
                          "constants": [],
                          "variables": [
                            "_ActionDelayRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 800205060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Sequence Trotter"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "killer": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "deathSourceType": "KilledByOthers"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": {
                          "operator": "Variables[0] (_ActionDelayRatio) || RETURN",
                          "displayLines": "_ActionDelayRatio",
                          "constants": [],
                          "variables": [
                            "_ActionDelayRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_ActionDelayRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__63496923\">BossInfiniteWave_Modifier</a>",
          "execute": [
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"537567377\">BossInfiniteWave_Boss_Modifier</a>[<span class=\"descriptionNumberColor\">Eloquence</span>]",
                          "valuePerStack": {
                            "Monster_Number": {
                              "operator": "Variables[0] (Monster_Number) || RETURN",
                              "displayLines": "Monster_Number",
                              "constants": [],
                              "variables": [
                                "Monster_Number"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1773885775\">BossInfiniteWave_HPLock_Modifier</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "Monster_Number"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__389361840\">Modifier_BattleEventAbility_Challenge_Month_31_Sub2</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ActionDelayRatio"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "conditions": {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (ActionDelayRatio) || RETURN",
                "displayLines": "ActionDelayRatio",
                "constants": [],
                "variables": [
                  "ActionDelayRatio"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1231239842\">Modifier_BattleEventAbility_Challenge_Month_31_Sub</a>[<span class=\"descriptionNumberColor\">Exo-Toughness</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "TargetStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetStance",
                  "value": {
                    "operator": "Variables[0] (TargetStance) || Variables[1] (MDF_RedStanceRatio) || MUL || RETURN",
                    "displayLines": "(TargetStance * MDF_RedStanceRatio)",
                    "constants": [],
                    "variables": [
                      "TargetStance",
                      "MDF_RedStanceRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TargetStance",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_MinStance) || RETURN",
                      "displayLines": "MDF_MinStance",
                      "constants": [],
                      "variables": [
                        "MDF_MinStance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Exo-Toughness",
                      "exoFlat": {
                        "operator": "Variables[0] (MDF_MinStance) || RETURN",
                        "displayLines": "MDF_MinStance",
                        "constants": [],
                        "variables": [
                          "MDF_MinStance"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Exo-Toughness",
                      "exoPercent": {
                        "operator": "Variables[0] (MDF_RedStanceRatio) || RETURN",
                        "displayLines": "MDF_RedStanceRatio",
                        "constants": [],
                        "variables": [
                          "MDF_RedStanceRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_RedStanceRatio",
            "MDF_MinStance"
          ],
          "latentQueue": [],
          "description": "Triggers Weakness Break when the enemy's initial Weakness is reduced to 0. Then, their temporary Weakness can continue to be reduced. When temporary Weakness is reduced to 0, Weakness Break will be triggered again. The effect will be removed after this occurs.",
          "type": "Other",
          "statusName": "Exo-Toughness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DmgUp_Ratio_get",
                  "value": {
                    "operator": "Variables[0] (_DmgUp_Ratio_get) || Variables[1] (_Current_Layer) || MUL || RETURN",
                    "displayLines": "(_DmgUp_Ratio_get * _Current_Layer)",
                    "constants": [],
                    "variables": [
                      "_DmgUp_Ratio_get",
                      "_Current_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_DmgUp_Ratio_get) || RETURN",
                    "displayLines": "_DmgUp_Ratio_get",
                    "constants": [],
                    "variables": [
                      "_DmgUp_Ratio_get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "_DmgUp_Ratio_get"
          ],
          "latentQueue": [
            "_Trigger_Effect_Flag"
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">_DmgUp_Ratio_get</span>. After attacking, increases stacks by 1. When <span class=\"descriptionNumberColor\">_Init_Layer</span> stack(s) are reached, deals 1 instance of DMG to all enemies based on a certain percentage of their respective Max HP.",
          "type": "Buff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                          "displayLines": "(EntityMaxSP - _CurrentSP)",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP",
                            "_CurrentSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || RETURN",
                            "displayLines": "EntityStockSP",
                            "constants": [],
                            "variables": [
                              "EntityStockSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                            "displayLines": "(EntityMaxSP - _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Trigger_Effect_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (EntityMaxSP) || Variables[2] (_SP_Ratio_get) || MUL || ADD || RETURN",
                        "displayLines": "(EntityCurrentSP + (EntityMaxSP * _SP_Ratio_get))",
                        "constants": [],
                        "variables": [
                          "EntityCurrentSP",
                          "EntityMaxSP",
                          "_SP_Ratio_get"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EntityCurrentSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || RETURN",
                          "displayLines": "EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_SP_Ratio_get) || MUL || RETURN",
                            "displayLines": "(EntityMaxSP * _SP_Ratio_get)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_SP_Ratio_get"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityCurrentSP",
                              "EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Character"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                              "valuePerStack": {
                                "EntityStockSPForShow": {
                                  "operator": "Variables[0] (EntityStockSP) || RETURN",
                                  "displayLines": "EntityStockSP",
                                  "constants": [],
                                  "variables": [
                                    "EntityStockSP"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityCurrentSP",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_SP_Ratio_get"
          ],
          "latentQueue": [
            "_Trigger_Effect_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DmgUp_Ratio_get",
                  "value": {
                    "operator": "Variables[0] (_DmgUp_Ratio_get) || Variables[1] (_Current_Layer) || MUL || RETURN",
                    "displayLines": "(_DmgUp_Ratio_get * _Current_Layer)",
                    "constants": [],
                    "variables": [
                      "_DmgUp_Ratio_get",
                      "_Current_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_DmgUp_Ratio_get) || RETURN",
                    "displayLines": "_DmgUp_Ratio_get",
                    "constants": [],
                    "variables": [
                      "_DmgUp_Ratio_get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "_DmgUp_Ratio_get"
          ],
          "latentQueue": [
            "_Trigger_Effect_Flag"
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">_DmgUp_Ratio_get</span>. After attacking, increases stacks by 1. When <span class=\"descriptionNumberColor\">_Init_Layer</span> stacks are reached, all allies regenerate Energy.",
          "type": "Buff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__701462759\">Modifier_BattleEventAbility_Challenge_Month_28_Insert</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_CurrentLayer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_DmgUpRatio_Get",
                  "value": {
                    "operator": "Variables[0] (_CurrentLayer) || Variables[1] (DV_DmgUpRatio_Get) || MUL || RETURN",
                    "displayLines": "(_CurrentLayer * DV_DmgUpRatio_Get)",
                    "constants": [],
                    "variables": [
                      "_CurrentLayer",
                      "DV_DmgUpRatio_Get"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_AtkUpRatio_Get",
                  "value": {
                    "operator": "Variables[0] (_CurrentLayer) || Variables[1] (DV_AtkUpRatio_Get) || MUL || RETURN",
                    "displayLines": "(_CurrentLayer * DV_AtkUpRatio_Get)",
                    "constants": [],
                    "variables": [
                      "_CurrentLayer",
                      "DV_AtkUpRatio_Get"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_DmgUpRatio_Get) || RETURN",
                    "displayLines": "DV_DmgUpRatio_Get",
                    "constants": [],
                    "variables": [
                      "DV_DmgUpRatio_Get"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_AtkUpRatio_Get) || RETURN",
                    "displayLines": "DV_AtkUpRatio_Get",
                    "constants": [],
                    "variables": [
                      "DV_AtkUpRatio_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "DV_DmgUpRatio_Get",
            "DV_AtkUpRatio_Get"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">DV_AtkUpRatio_Get</span> and Break Effect by <span class=\"descriptionNumberColor\">DV_DmgUpRatio_Get</span>.",
          "type": "Buff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-595048974\">Modifier_BattleEventAbility_Challenge_Month_28_preshow</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ActionDelayRatio"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Attack Source}}"
            },
            "skillType": [
              "Ultimate",
              "Skill",
              "Basic ATK"
            ],
            "conditions": {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Compute Targets",
                "type": "Intersect",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205045,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205046,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205047,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205048,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205049,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205050,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205051,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205052,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205064,
                        "characterName": "Sequence Trotter"
                      },
                      {
                        "name": "Add Target by Enemy ID",
                        "ID": 800205065,
                        "characterName": "Sequence Trotter"
                      }
                    ]
                  }
                ]
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (ActionDelayRatio) || SUB || RETURN",
                "displayLines": "(0 - ActionDelayRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "ActionDelayRatio"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1736106961\">Modifier_BattleEventAbility_Challenge_Month_30_sub2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Boss_ChangePhase_Flag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Effect_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Boss_ChangePhase_Flag",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "BattleEventAbility_Challenge_Month_30_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "_Damage_Ratio_get": {
                              "operator": "Variables[0] (_Damage_Ratio) || RETURN",
                              "displayLines": "_Damage_Ratio",
                              "constants": [],
                              "variables": [
                                "_Damage_Ratio"
                              ]
                            },
                            "_Damage_Ratio_2_get": {
                              "operator": "Variables[0] (_Damage_Ratio_2) || RETURN",
                              "displayLines": "_Damage_Ratio_2",
                              "constants": [],
                              "variables": [
                                "_Damage_Ratio_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Boss_ChangePhase_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Trigger_Effect_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__319313068\">Modifier_BattleEventAbility_Challenge_Month_26_sub2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Boss_ChangePhase_Flag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Trigger_Damage_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Boss_ChangePhase_Flag",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "BattleEventAbility_Challenge_Month_26_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "_Damage_Ratio_get": {
                              "operator": "Variables[0] (_Damage_Ratio) || RETURN",
                              "displayLines": "_Damage_Ratio",
                              "constants": [],
                              "variables": [
                                "_Damage_Ratio"
                              ]
                            },
                            "_Damage_Ratio_2_get": {
                              "operator": "Variables[0] (_Damage_Ratio_2) || RETURN",
                              "displayLines": "_Damage_Ratio_2",
                              "constants": [],
                              "variables": [
                                "_Damage_Ratio_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Boss_ChangePhase_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Trigger_Damage_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "_DamageUp_Ratio_Sum"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageUp_Ratio_Sum",
                  "value": {
                    "operator": "Variables[0] (_Current_Layer) || Variables[1] (_DamageUp_Ratio) || MUL || RETURN",
                    "displayLines": "(_Current_Layer * _DamageUp_Ratio)",
                    "constants": [],
                    "variables": [
                      "_Current_Layer",
                      "_DamageUp_Ratio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Trigger_Damage_Flag"
          ],
          "description": "Receive <span class=\"descriptionNumberColor\">_DamageUp_Ratio_Sum</span> more DMG. Increase 1 stack every time this unit receives an attack. Receive additional DMG when stacks reach <span class=\"descriptionNumberColor\">_Init_Layer</span>.",
          "type": "Debuff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__164417274\">Modifier_BattleEventAbility_Challenge_Month_25_Insert</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT_Electric",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                        "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P5_ADF_DotTriggerRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                        "displayLines": "BattleEvent_P3_ADF_LifeTime",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P3_ADF_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                        "displayLines": "BattleEvent_P2_ADF_Chance",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P2_ADF_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (1.5) || MUL || RETURN",
                          "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 1.5)",
                          "constants": [
                            1.5
                          ],
                          "variables": [
                            "BattleEvent_P4_ADF_DamagePercentage"
                          ]
                        }
                      },
                      "stackFlag": "Level"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT_Poison",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                        "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P5_ADF_DotTriggerRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                        "displayLines": "BattleEvent_P3_ADF_LifeTime",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P3_ADF_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                        "displayLines": "BattleEvent_P2_ADF_Chance",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P2_ADF_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (1) || MUL || RETURN",
                          "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "BattleEvent_P4_ADF_DamagePercentage"
                          ]
                        }
                      },
                      "stackFlag": "Level"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT_Burn",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                        "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P5_ADF_DotTriggerRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                        "displayLines": "BattleEvent_P3_ADF_LifeTime",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P3_ADF_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                        "displayLines": "BattleEvent_P2_ADF_Chance",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P2_ADF_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (1) || MUL || RETURN",
                          "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "BattleEvent_P4_ADF_DamagePercentage"
                          ]
                        }
                      },
                      "stackFlag": "Level"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT_Bleed",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                        "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P5_ADF_DotTriggerRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                        "displayLines": "BattleEvent_P3_ADF_LifeTime",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P3_ADF_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                        "displayLines": "BattleEvent_P2_ADF_Chance",
                        "constants": [],
                        "variables": [
                          "BattleEvent_P2_ADF_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": 0.1,
                        "Modifier_Tear_MaxPercentage": {
                          "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (2.5) || MUL || RETURN",
                          "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 2.5)",
                          "constants": [
                            2.5
                          ],
                          "variables": [
                            "BattleEvent_P4_ADF_DamagePercentage"
                          ]
                        }
                      },
                      "stackFlag": "Level"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-691475768\">Modifier_BattleEventAbility_Challenge_Month_25_Insert_pre</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"164417274\">Modifier_BattleEventAbility_Challenge_Month_25_Insert</a>",
                  "valuePerStack": {
                    "BattleEvent_P2_ADF_Chance": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF_Chance",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF_Chance"
                      ]
                    },
                    "BattleEvent_P3_ADF_LifeTime": {
                      "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                      "displayLines": "BattleEvent_P3_ADF_LifeTime",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P3_ADF_LifeTime"
                      ]
                    },
                    "BattleEvent_P4_ADF_DamagePercentage": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || RETURN",
                      "displayLines": "BattleEvent_P4_ADF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P4_ADF_DamagePercentage"
                      ]
                    },
                    "BattleEvent_P5_ADF_DotTriggerRatio": {
                      "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                      "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P5_ADF_DotTriggerRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P2_ADF_Chance",
            "BattleEvent_P3_ADF_LifeTime",
            "BattleEvent_P4_ADF_DamagePercentage",
            "BattleEvent_P5_ADF_DotTriggerRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1260413696\">Modifier_BattleEventAbility_Challenge_Month_24_sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "BattleEvent_P1_ADF_Get"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P1_ADF_Get"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1571276631\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff5</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "BattleEvent_P5_ADF_Get"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "BattleEvent_P5_ADF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BattleEvent_P5_ADF_Get",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P5_ADF_Layer) || Variables[1] (BattleEvent_P5_ADF_Get) || MUL || RETURN",
                    "displayLines": "(BattleEvent_P5_ADF_Layer * BattleEvent_P5_ADF_Get)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P5_ADF_Layer",
                      "BattleEvent_P5_ADF_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P5_ADF_Get"
          ],
          "latentQueue": [],
          "description": "Follow-Up ATK DMG taken increases by <span class=\"descriptionNumberColor\">BattleEvent_P5_ADF_Get</span>.",
          "type": "Debuff",
          "effectName": "Follow-Up ATK Vulnerability",
          "statusName": "Follow-Up ATK Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1554499012\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff4</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "BattleEvent_P2_ADF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BattleEvent_P2_ADF_Get",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                    "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Layer",
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                    "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P2_ADF_Get"
          ],
          "latentQueue": [],
          "description": "Effect RES decreases by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
          "type": "Debuff",
          "effectName": "Effect RES Reduction",
          "statusName": "Effect RES Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1537721393\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff3</a>[<span class=\"descriptionNumberColor\">SPD Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "BattleEvent_P2_ADF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BattleEvent_P2_ADF_Get",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                    "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Layer",
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                    "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P2_ADF_Get"
          ],
          "latentQueue": [],
          "description": "Decreases SPD by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
          "type": "Debuff",
          "effectName": "SPD Reduction",
          "statusName": "SPD Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1520943774\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff2</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "BattleEvent_P2_ADF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BattleEvent_P2_ADF_Get",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                    "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Layer",
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                    "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P2_ADF_Get"
          ],
          "latentQueue": [],
          "description": "Reduces DEF by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1504166155\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff1</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttackDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "BattleEvent_P2_ADF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BattleEvent_P2_ADF_Get",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                    "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Layer",
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                    "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "BattleEvent_P2_ADF_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P2_ADF_Get"
          ],
          "latentQueue": [],
          "description": "ATK decreases by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
          "type": "Debuff",
          "effectName": "ATK Reduction",
          "statusName": "ATK Reduction"
        }
      ],
      "references": []
    },
    "1490374940_Functions": {
      "fileName": "1490374940_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__312988714\">BAttleEventAbility_AddWeakness</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Physical",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Physical",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoPhysical"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoPhysical"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoPhysical",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Wind",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Wind",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoWind"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoWind"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoWind",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Fire",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Fire",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoFire"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoFire"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoFire",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Thunder",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Thunder",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoThunder"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoThunder"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoThunder",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Ice",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Ice",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoIce"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoIce"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoIce",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Quantum",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Quantum",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoQuantum"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoQuantum"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoQuantum",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Imaginary",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Imaginary",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoImaginary"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoImaginary"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoImaginary",
                  "value": 1000
                }
              ]
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (TDF_NoPhysical) || RETURN",
                  "displayLines": "TDF_NoPhysical",
                  "constants": [],
                  "variables": [
                    "TDF_NoPhysical"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoWind) || RETURN",
                  "displayLines": "TDF_NoWind",
                  "constants": [],
                  "variables": [
                    "TDF_NoWind"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoFire) || RETURN",
                  "displayLines": "TDF_NoFire",
                  "constants": [],
                  "variables": [
                    "TDF_NoFire"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoThunder) || RETURN",
                  "displayLines": "TDF_NoThunder",
                  "constants": [],
                  "variables": [
                    "TDF_NoThunder"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoIce) || RETURN",
                  "displayLines": "TDF_NoIce",
                  "constants": [],
                  "variables": [
                    "TDF_NoIce"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoQuantum) || RETURN",
                  "displayLines": "TDF_NoQuantum",
                  "constants": [],
                  "variables": [
                    "TDF_NoQuantum"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoImaginary) || RETURN",
                  "displayLines": "TDF_NoImaginary",
                  "constants": [],
                  "variables": [
                    "TDF_NoImaginary"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"853477559\">BAttleEventAbility_Weakness_Physical</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1329707912\">BAttleEventAbility_Weakness_Wind</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-944583698\">BAttleEventAbility_Weakness_Fire</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"89731232\">BAttleEventAbility_Weakness_Thunder</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"436644401\">BAttleEventAbility_Weakness_Ice</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1163813471\">BAttleEventAbility_Weakness_Quantum</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1490374940_BE_BattleEvents": {
      "fileName": "1490374940_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 31002,
          "team": "Neutral Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ]
        },
        {
          "name": "Battle Event Construction",
          "ID": 31003,
          "team": "Neutral Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ]
        }
      ],
      "references": []
    }
  }
}