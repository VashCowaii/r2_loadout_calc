const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60014,
  "trimCharacterName": 60014,
  "abilityList": [
    "60014_Modifiers",
    "60014_BattleEventAbility_SummonMonsterInfinite",
    "60014_MissionBattleEvent60014_Ability03_Part01",
    "60014_MissionBattleEvent60014_Ability03_Part01",
    "60014_BattleEventAbility_SummonMonsterInfinite_Insert",
    "60014_MissionBattleEvent60014_Insert_Part01",
    "60014_Functions"
  ],
  "abilityObject": {
    "60014_Modifiers": {
      "fileName": "60014_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1651606625\">MDF_RogueDLCAchievementListener</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "count",
                  "value": {
                    "operator": "Variables[0] (count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "count",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "All Watched Over By Machines of Loving Grace",
                          "desc": "In Simulated Universe: Gold and Gears, endure #1[i] or more Resonance Extrapolation(s) in a single battle",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            10
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1651606625\">MDF_RogueDLCAchievementListener</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1216668349\">Challenge_Camera_AllTeam_Temp_2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1216668349\">Challenge_Camera_AllTeam_Temp_2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1166335492\">Challenge_Camera_AllTeam_Temp_1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166335492\">Challenge_Camera_AllTeam_Temp_1</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "60014_BattleEventAbility_SummonMonsterInfinite": {
      "fileName": "60014_BattleEventAbility_SummonMonsterInfinite",
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
          "modifier": "<a class=\"gModGreen\" id=\"1454172659\">BattleEventAbility_SummonMonsterInfinite_Modifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1528480436\">Modifier_Infinite_Summon_Level</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1528480436\">Modifier_Infinite_Summon_Level</a>",
          "execute": [
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "popUpText": "Enemy Reinforcement"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1454172659\">BattleEventAbility_SummonMonsterInfinite_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2033536184\">InfiniteWave_SummonMonster</a>",
                  "isGlobal": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2033536184\">InfiniteWave_SummonMonster</a>",
                  "isGlobal": true
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60014_MissionBattleEvent60014_Ability03_Part01": {
      "fileName": "60014_MissionBattleEvent60014_Ability03_Part01",
      "childAbilityList": [
        "60014_MissionBattleEvent60014_Ability03_Part01",
        "60014_MissionBattleEvent60014_Ability03_Camera",
        "60014_MissionBattleEvent60014_Ability03_Camera0"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        30,
        0
      ],
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1415126963\">MStageMissionBattleEvent60014</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1917850230\">MStageMissionBattleEvent60014_LightTeamCount</a>",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Yanqing_KillCount",
                  "value": {
                    "operator": "Variables[0] (MDF_Yanqing_KillCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_Yanqing_KillCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Yanqing_KillCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1415126963\">MStageMissionBattleEvent60014</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
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
                      "abilityName": "MissionBattleEvent60014_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "STAGE_Character",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
                  "abilityName": "MissionBattleEvent60014_Insert_Part01"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_KillCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917850230\">MStageMissionBattleEvent60014_LightTeamCount</a>"
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_KillCount",
                  "value": {
                    "operator": "Variables[0] (MDF_KillCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_KillCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_KillCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917850230\">MStageMissionBattleEvent60014_LightTeamCount</a>"
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Yanqing_KillCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_KillCount) || RETURN",
                      "displayLines": "MDF_KillCount",
                      "constants": [],
                      "variables": [
                        "MDF_KillCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "_PlayerWin",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "_PlayerWin",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_KillCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_KillCount",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_Yanqing_KillCount) || RETURN",
                          "displayLines": "MDF_Yanqing_KillCount",
                          "constants": [],
                          "variables": [
                            "MDF_Yanqing_KillCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_LeadTalkSwitch",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_LeadTalkSwitch",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Yanqing_Behind",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_Yunli_Behind",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_ReverseTalkSwitch",
                                    "compareType": "=",
                                    "value2": 0
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_ReverseTalkSwitch",
                                  "value": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_Yanqing_Behind",
                                  "value": 1
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
              "name": "Variable Value Changes",
              "variableName": "MDF_Yanqing_KillCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Yanqing_KillCount",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_KillCount) || RETURN",
                          "displayLines": "MDF_KillCount",
                          "constants": [],
                          "variables": [
                            "MDF_KillCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_LeadTalkSwitch",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_LeadTalkSwitch",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Yunli_Behind",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_Yanqing_Behind",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_ReverseTalkSwitch",
                                    "compareType": "=",
                                    "value2": 0
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_ReverseTalkSwitch",
                                  "value": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_Yunli_Behind",
                                  "value": 1
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60014_BattleEventAbility_SummonMonsterInfinite_Insert": {
      "fileName": "60014_BattleEventAbility_SummonMonsterInfinite_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "In Aha-Instant"
          },
          "passed": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Dying Enemies}}"
              },
              "dieNow": true
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Infinite Enemy Waves Remain"
              }
            ]
          },
          "Event": [
            {
              "name": "Update Next Wave Enemy",
              "context": "ContextAbility",
              "enemyID": "Value_NextMonsterId",
              "activityGroupScaling": "Value_NextMonsterEliteGroup",
              "slot": "Value_MonsterSlotKey"
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Value_NextMonsterId) || RETURN",
                    "displayLines": "Value_NextMonsterId",
                    "constants": [],
                    "variables": [
                      "Value_NextMonsterId"
                    ]
                  },
                  "locationType": "FormationRecord",
                  "overrideActivityGroup": {
                    "operator": "Variables[0] (Value_NextMonsterEliteGroup) || RETURN",
                    "displayLines": "Value_NextMonsterEliteGroup",
                    "constants": [],
                    "variables": [
                      "Value_NextMonsterEliteGroup"
                    ]
                  },
                  "slot": {
                    "operator": "Variables[0] (Value_MonsterSlotKey) || RETURN",
                    "displayLines": "Value_MonsterSlotKey",
                    "constants": [],
                    "variables": [
                      "Value_MonsterSlotKey"
                    ]
                  }
                }
              ]
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "popUpText": "Enemy Reinforcement"
            }
          ]
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Every Battle Entity}}"
          },
          "variableName": null,
          "eventType": "InfiniteRefresh",
          "value": null
        },
        {
          "name": "IF",
          "conditions": {
            "name": "In Aha-Instant"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60014_MissionBattleEvent60014_Insert_Part01": {
      "fileName": "60014_MissionBattleEvent60014_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ]
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageExtra": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "displayLines": 120
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageExtra": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "displayLines": 120
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 9,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
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
                    "DamageExtra": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    },
                    "dmgFormulaExtra": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60014_Functions": {
      "fileName": "60014_Functions",
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
    }
  },
  "enemyData": {
    "SkillP01": {
      "skillID": 6001401,
      "trigger": "SkillP01",
      "name": "Horizon's Echo From Afar",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          10,
          5,
          4
        ]
      },
      "element": "Physical",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60014_Skill03_Phase01",
        "Avatar_MissionBattleEvent60014_Skill03_Camera",
        "Avatar_MissionBattleEvent60014_Skill03_Camera0"
      ],
      "toughnessList": [
        0,
        90,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}