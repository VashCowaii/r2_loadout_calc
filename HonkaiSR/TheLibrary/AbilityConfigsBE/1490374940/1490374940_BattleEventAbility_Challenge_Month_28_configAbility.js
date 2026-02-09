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
}