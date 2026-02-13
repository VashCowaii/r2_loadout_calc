const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_43",
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
      "modifier": "<a class=\"gModGreen\" id=\"834461814\">Modifier_BattleEventAbility_Challenge_Month_43</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__834461814\">Modifier_BattleEventAbility_Challenge_Month_43</a>",
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
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P3_ADF) || MUL || Variables[2] (MDF_Count) || MUL || RETURN",
                              "displayLines": "((_Temp_Hp_TeamDark * BattleEvent_P3_ADF) * MDF_Count)",
                              "constants": [],
                              "variables": [
                                "_Temp_Hp_TeamDark",
                                "BattleEvent_P3_ADF",
                                "MDF_Count"
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
                                  "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P4_ADF) || MUL || Variables[2] (MDF_Count) || MUL || RETURN",
                                  "displayLines": "((_Temp_Hp_TeamDark * BattleEvent_P4_ADF) * MDF_Count)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp_TeamDark",
                                    "BattleEvent_P4_ADF",
                                    "MDF_Count"
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
                                  "operator": "Variables[0] (_Temp_Hp_TeamDark) || Variables[1] (BattleEvent_P5_ADF) || MUL || Variables[2] (MDF_Count) || MUL || RETURN",
                                  "displayLines": "((_Temp_Hp_TeamDark * BattleEvent_P5_ADF) * MDF_Count)",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Hp_TeamDark",
                                    "BattleEvent_P5_ADF",
                                    "MDF_Count"
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
                },
                {
                  "name": "Show Attack Time",
                  "time": 0,
                  "on": null,
                  "show": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": 0
                },
                "Deleted bullshit",
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P1_ADF"
                    ]
                  },
                  "adjustment": "Add"
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
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_ChallengePeakBattle_Camera_AllLightTeam"
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
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                "displayLines": "BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "BattleEvent_P1_ADF"
                ]
              },
              "adjustment": "Add"
            }
          ],
          "priorityLevel": -90
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "minValue": 0,
          "maxValue": 999,
          "whenValueChanges": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "MDF_TeamSharePoint_Delta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_TeamSharePoint_Delta",
                "compareType": ">",
                "value2": 0
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
                    "operator": "Variables[0] (MDF_TeamSharePoint_Delta) || RETURN",
                    "displayLines": "MDF_TeamSharePoint_Delta",
                    "constants": [],
                    "variables": [
                      "MDF_TeamSharePoint_Delta"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TeamSharePoint_Delta",
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
}