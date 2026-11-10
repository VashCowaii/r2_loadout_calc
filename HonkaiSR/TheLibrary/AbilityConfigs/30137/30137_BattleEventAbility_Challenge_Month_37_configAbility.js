const configAbility = {
  "fileName": "30137_BattleEventAbility_Challenge_Month_37",
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
          "displayLines": "#BattleEvent_P1_ADF"
        },
        "DV_DmgPercentage": {
          "displayLines": "#BattleEvent_P2_ADF"
        },
        "DV_Count": {
          "displayLines": "#BattleEvent_P3_ADF"
        },
        "DV_CountMax": {
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
      "for": "<a class=\"gModGreen\" id=\"mod__-976285872\">Modifier_BattleEventAbility_Challenge_Month_37_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DV_DmgPercentage_get</span>. After attacking, increases <span class=\"descriptionNumberColor\">DV_Count</span> Hits Per Action to \"Memory Turbulence,\" up to a max of <span class=\"descriptionNumberColor\">DV_CountMax</span> hit(s).",
      "type": "Buff",
      "effectName": "Memory Imprint",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "DV_DmgPercentage_get"
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
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
                    "displayLines": "DV_LifeTime"
                  },
                  "valuePerStack": {
                    "DV_DmgPercentage_get": {
                      "displayLines": "DV_DmgPercentage"
                    },
                    "DV_Count": {
                      "displayLines": "DV_Count2"
                    },
                    "DV_CountMax": {
                      "displayLines": "DV_CountMax"
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
                        "displayLines": "DV_LifeTime"
                      },
                      "valuePerStack": {
                        "DV_DmgPercentage_get": {
                          "displayLines": "DV_DmgPercentage"
                        },
                        "DV_Count": {
                          "displayLines": "DV_Count2"
                        },
                        "DV_CountMax": {
                          "displayLines": "DV_CountMax"
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
      "stackData": [
        "DV_LifeTime",
        "DV_DmgPercentage",
        "DV_Count",
        "DV_CountMax",
        "BattleEvent_P5_ADF",
        "BattleEvent_P6_ADF",
        "BattleEvent_P7_ADF"
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
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P6_ADF)"
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
                                      "displayLines": "(_Temp_Hp_TeamDark * BattleEvent_P7_ADF)"
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
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
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
                  "displayLines": "DV_LifeTime"
                },
                "DV_DmgPercentage": {
                  "displayLines": "DV_DmgPercentage"
                },
                "DV_Count": {
                  "displayLines": "DV_Count2"
                },
                "DV_CountMax": {
                  "displayLines": "DV_CountMax"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}