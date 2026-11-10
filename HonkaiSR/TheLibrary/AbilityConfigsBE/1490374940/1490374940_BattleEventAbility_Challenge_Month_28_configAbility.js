const configAbility = {
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
      "variableName": "BattleEvent_P1_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P1_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_P2_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P2_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_P3_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P3_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_P4_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P4_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_P5_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P5_ADF"
      },
      "scope": "ContextCaster"
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
      "description": "This unit will immediately be defeated when its Weakness is Broken. After being defeated, the attacker's action will be Advanced Forward by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF</span>.",
      "type": "Debuff",
      "statusName": "Fatal Weakness",
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
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Filter by Life-State",
                        "stateType": "Mask_AliveOrRevivable"
                      }
                    ]
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "NOT",
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
                      "priorityTag": "EnemyForceKill",
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
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "valuePerStack": {
                "DV_DmgUpRatio_Set": {
                  "displayLines": "DV_DmgUpRatio"
                },
                "DV_MaxLayer_Set": {
                  "displayLines": "DV_MaxLayer"
                },
                "DV_AtkUpRatio_Set": {
                  "displayLines": "DV_AtkUpRatio"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1153530765\">Modifier_BattleEventAbility_Challenge_Month_28</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                            "displayLines": "800205060"
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
                      "displayLines": "BattleEvent_P1_ADF"
                    },
                    "DV_DmgUpRatio": {
                      "displayLines": "BattleEvent_P3_ADF"
                    },
                    "DV_MaxLayer": {
                      "displayLines": "BattleEvent_P4_ADF"
                    },
                    "DV_AtkUpRatio": {
                      "displayLines": "BattleEvent_P5_ADF"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-595048974\">Modifier_BattleEventAbility_Challenge_Month_28_preshow</a>",
                  "valuePerStack": {
                    "ActionDelayRatio": {
                      "displayLines": "BattleEvent_P2_ADF"
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
                      "displayLines": "BattleEvent_P2_ADF"
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
          "priorityLevel": -90,
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
                  "displayLines": "BattleEvent_P2_ADF"
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
                  "displayLines": "BattleEvent_P2_ADF"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
                        "displayLines": "800205060"
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
    }
  ]
}