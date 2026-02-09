const configAbility = {
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
}