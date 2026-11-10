const configAbility = {
  "fileName": "30135_BattleEventAbility_Challenge_Month_35",
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
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">DV_HPAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Memory Imprint",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "statValue": {
                "displayLines": "DV_HPAddedRatio"
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
                  "value": 1,
                  "variableName": "DV_LoseHPTriggerLimit"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "displayLines": "DV_HealHP_Ratio"
                  },
                  "formula": "Heal from Target MaxHP"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_Count + DV_Count)"
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
                      "displayLines": "DV_CountMax"
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
                        "displayLines": "DV_CountMax"
                      },
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "DV_CountMax"
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
          "eventTrigger": "Being Attacked [Owner]: Start",
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
                    "displayLines": "DV_HealHP_Ratio2"
                  },
                  "formula": "Heal from Target MaxHP"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_Count + DV_Count2)"
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
                      "displayLines": "DV_CountMax"
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
                        "displayLines": "DV_CountMax"
                      },
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "DV_CountMax"
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
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DV_LoseHPTriggerLimit"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DV_LoseHPTriggerLimit"
            }
          ]
        }
      ]
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__868164147\">Modifier_BattleEventAbility_Challenge_Month_35</a>",
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
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
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
                      "displayLines": "BattleEvent_P1_ADF"
                    },
                    "DV_Count": {
                      "displayLines": "BattleEvent_P2_ADF"
                    },
                    "DV_CountMax": {
                      "displayLines": "BattleEvent_P3_ADF"
                    },
                    "DV_HPAddedRatio": {
                      "displayLines": "BattleEvent_P7_ADF"
                    },
                    "DV_HealHP_Ratio2": {
                      "displayLines": "BattleEvent_P9_ADF"
                    },
                    "DV_Count2": {
                      "displayLines": "BattleEvent_P8_ADF"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
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
                  "displayLines": "BattleEvent_P1_ADF"
                },
                "DV_Count": {
                  "displayLines": "BattleEvent_P2_ADF"
                },
                "DV_CountMax": {
                  "displayLines": "BattleEvent_P3_ADF"
                },
                "DV_HPAddedRatio": {
                  "displayLines": "BattleEvent_P7_ADF"
                },
                "DV_HealHP_Ratio2": {
                  "displayLines": "BattleEvent_P9_ADF"
                },
                "DV_Count2": {
                  "displayLines": "BattleEvent_P8_ADF"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}