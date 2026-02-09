const configAbility = {
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
}