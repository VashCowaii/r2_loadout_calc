const configAbility = {
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
}