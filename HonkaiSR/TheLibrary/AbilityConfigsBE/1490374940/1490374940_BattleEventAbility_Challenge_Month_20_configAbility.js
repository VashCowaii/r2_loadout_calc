const configAbility = {
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
}