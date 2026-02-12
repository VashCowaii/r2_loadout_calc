const compositeAbilityObject = {
  "fullCharacterName": 4053020,
  "trimCharacterName": 4053020,
  "abilityList": [
    "4053020_BattleEventAbility_Monster_W4_Unicorn_01_Summon",
    "4053020_BattleEventAbility_Monster_W4_Unicorn_01_SummonMonster",
    "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability05_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability05_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability04_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability04_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability03_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability03_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability02_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability02_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability01_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability01_Part01",
    "4053020_Monster_W4_Unicorn_01_PassiveAbilityInitiate",
    "4053020_Modifiers",
    "4053020_Functions",
    "4053020_BE_BattleEvents"
  ],
  "abilityObject": {
    "4053020_BattleEventAbility_Monster_W4_Unicorn_01_Summon": {
      "fileName": "4053020_BattleEventAbility_Monster_W4_Unicorn_01_Summon",
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
          "modifier": "<a class=\"gModGreen\" id=\"-747106338\">Modifier_Monster_W4_Unicorn_01_Summon</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-682702222\">Modifier_Monster_W4_Unicorn_01_BattleEvent_Summon_BaseSpeed</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 1.5
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "Summon",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-747106338\">Modifier_Monster_W4_Unicorn_01_Summon</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  "passed": [
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "flagNames": []
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      }
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Monster_W4_Unicorn_01_SummonMonster",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "priorityTag": "MonsterBuffOthers",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  },
                  "noTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-682702222\">Modifier_Monster_W4_Unicorn_01_BattleEvent_Summon_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_W4_Unicorn_01_BattleEvent_Ultra_BaseSpeed) || RETURN",
                    "displayLines": "MDF_W4_Unicorn_01_BattleEvent_Ultra_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_W4_Unicorn_01_BattleEvent_Ultra_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4053020_BattleEventAbility_Monster_W4_Unicorn_01_SummonMonster": {
      "fileName": "4053020_BattleEventAbility_Monster_W4_Unicorn_01_SummonMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "SummonCount",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "<",
                "value2": 5
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "variableName": "DarkTeamCount",
              "livingTargets": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SummonCountTemp",
              "value": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MIN) || Variables[1] (SummonCount) || Constants[0] (5) || Variables[2] (DarkTeamCount) || SUB || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(SummonCount, (5 - DarkTeamCount))",
                "constants": [
                  5
                ],
                "variables": [
                  "MIN",
                  "SummonCount",
                  "DarkTeamCount"
                ]
              },
              "Event": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonCountTemp) || RETURN",
                    "displayLines": "SummonCountTemp",
                    "constants": [],
                    "variables": [
                      "SummonCountTemp"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__95"
                                ]
                              },
                              "locationType": "AfterCaster"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__95"
                                ]
                              },
                              "locationType": "BeforeCaster"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__95"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__95"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonCountTemp",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonCount) || RETURN",
                    "displayLines": "SummonCount",
                    "constants": [],
                    "variables": [
                      "SummonCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "SW_Minion01_03"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 6
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>[<span class=\"descriptionNumberColor\">Fetal Movement of the Ocean</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2140507283\">MWMonster_W4_Unicorn_01_BlockDamage</a>[<span class=\"descriptionNumberColor\">Maelstrom's Eye</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "SW_Minion01_03"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 6
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>[<span class=\"descriptionNumberColor\">Fetal Movement of the Ocean</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Breeding Frenzy</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-747106338\">Modifier_Monster_W4_Unicorn_01_Summon</a>"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part02": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "compareType": "<",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonNum",
              "value": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": 4,
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "compareType": "<",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (SummonCount) || RETURN",
                            "displayLines": "SummonCount",
                            "constants": [],
                            "variables": [
                              "SummonCount"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "Last"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "First"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "Last"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "First"
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1300638915\">Enemy_W4_Unicorn_01_SummonMonsterWeak</a>[<span class=\"descriptionNumberColor\">Weakling</span>]",
                          "valuePerStack": {
                            "MDF_InitHP": {
                              "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                              "displayLines": "{[Skill03[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[1]]}"
                              ]
                            },
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] ({[Skill03[6]]}) || RETURN",
                              "displayLines": "{[Skill03[6]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[6]]}"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "SummonCount",
                          "value": -1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-199880551\">W4_Unicorn_01_BattleScore1</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "SummonCount",
                      "value": -1
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (SummonCount) || RETURN",
                        "displayLines": "SummonCount",
                        "constants": [],
                        "variables": [
                          "SummonCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "AllType"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonNum",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonNum) || RETURN",
                    "displayLines": "SummonNum",
                    "constants": [],
                    "variables": [
                      "SummonNum"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-199880551\">W4_Unicorn_01_BattleScore1</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonCount",
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
                      "variableName": "SummonCount",
                      "value": -1
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (SummonCount) || RETURN",
                        "displayLines": "SummonCount",
                        "constants": [],
                        "variables": [
                          "SummonCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "AllType"
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SummonMonster"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill03[2]]}"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>"
        }
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part01": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Unicorn_01_Ability05_Insert_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability05_Part02": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "compareType": "<",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonNum",
              "value": {
                "operator": "Variables[0] (SummonCount) || RETURN",
                "displayLines": "SummonCount",
                "constants": [],
                "variables": [
                  "SummonCount"
                ]
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "compareType": "<",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (SummonCount) || RETURN",
                            "displayLines": "SummonCount",
                            "constants": [],
                            "variables": [
                              "SummonCount"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "Last"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "First"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "Last"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": {
                                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                    "displayLines": "{[Skill03[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill03[0]]}"
                                    ]
                                  },
                                  "refreshPositions": false,
                                  "enemyList": [
                                    {
                                      "name": "Enemy Entry",
                                      "enemyID": {
                                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                        "constants": [],
                                        "variables": [
                                          "ENEMIES_OBJECT_UNUSED__95"
                                        ]
                                      },
                                      "locationType": "First"
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1300638915\">Enemy_W4_Unicorn_01_SummonMonsterWeak</a>[<span class=\"descriptionNumberColor\">Weakling</span>]",
                          "valuePerStack": {
                            "MDF_InitHP": {
                              "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                              "displayLines": "{[Skill03[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[1]]}"
                              ]
                            },
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] ({[Skill03[6]]}) || RETURN",
                              "displayLines": "{[Skill03[6]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[6]]}"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "SummonCount",
                          "value": -1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-199880551\">W4_Unicorn_01_BattleScore1</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "SummonCount",
                      "value": -1
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (SummonCount) || RETURN",
                        "displayLines": "SummonCount",
                        "constants": [],
                        "variables": [
                          "SummonCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "AllType"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonNum",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonNum) || RETURN",
                    "displayLines": "SummonNum",
                    "constants": [],
                    "variables": [
                      "SummonNum"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Shot Fired",
                          "projectileCount": 1
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-199880551\">W4_Unicorn_01_BattleScore1</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonCount",
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
                      "variableName": "SummonCount",
                      "value": -1
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (SummonCount) || RETURN",
                        "displayLines": "SummonCount",
                        "constants": [],
                        "variables": [
                          "SummonCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "AllType"
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SummonMonster"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill03[2]]}"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability05_Part01": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability05_Part01",
      "childAbilityList": [
        "4053020_Monster_W4_Unicorn_01_Ability05_Part01",
        "4053020_Monster_W4_Unicorn_01_Ability05_Part02",
        "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part01",
        "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Unicorn_01_Ability05_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability04_Part02": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability04_Part01": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability04_Part01",
      "childAbilityList": [
        "4053020_Monster_W4_Unicorn_01_Ability04_Part01",
        "4053020_Monster_W4_Unicorn_01_Ability04_Part02",
        "4053020_Monster_W4_Unicorn_01_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Unicorn_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability03_Part02": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20022,
          "variables": {
            "MDF_W4_Unicorn_01_BattleEvent_Ultimate_BaseSpeed": {
              "operator": "Variables[0] (BaseSpeed) || RETURN",
              "displayLines": "BaseSpeed",
              "constants": [],
              "variables": [
                "BaseSpeed"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "SummonMonster",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonCount",
          "value": {
            "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
            "displayLines": "{[Skill03[3]]}",
            "constants": [],
            "variables": [
              "{[Skill03[3]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Breeding Frenzy</span>]",
          "valuePerStack": {
            "MDF_AllDamageTypeResistance": {
              "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
              "displayLines": "{[Skill03[5]]}",
              "constants": [],
              "variables": [
                "{[Skill03[5]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability03_Part01": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability03_Part01",
      "childAbilityList": [
        "4053020_Monster_W4_Unicorn_01_Ability03_Camera",
        "4053020_Monster_W4_Unicorn_01_Ability03_Part01",
        "4053020_Monster_W4_Unicorn_01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Unicorn_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability02_Part02": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1935172966\">Monster_W4_Unicorn_01_Ability02_Attack01</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1918395347\">Monster_W4_Unicorn_01_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability02_Part01": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability02_Part01",
      "childAbilityList": [
        "4053020_Monster_W4_Unicorn_01_Ability02_Camera",
        "4053020_Monster_W4_Unicorn_01_Ability02_Part01",
        "4053020_Monster_W4_Unicorn_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Unicorn_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability01_Part02": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_Ability01_Part01": {
      "fileName": "4053020_Monster_W4_Unicorn_01_Ability01_Part01",
      "childAbilityList": [
        "4053020_Monster_W4_Unicorn_01_Ability01_Camera",
        "4053020_Monster_W4_Unicorn_01_Ability01_Part01",
        "4053020_Monster_W4_Unicorn_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Unicorn_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4053020_Monster_W4_Unicorn_01_PassiveAbilityInitiate": {
      "fileName": "4053020_Monster_W4_Unicorn_01_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20022
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": 0
        }
      ],
      "references": []
    },
    "4053020_Modifiers": {
      "fileName": "4053020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-199880551\">W4_Unicorn_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Like Dew and Lightning, Gone With The Wind",
                      "desc": "After Cyclonic Swarm Mother enters the \"Breeding Frenzy\" state, prevent it from spawning \"Mirage Fizzle Kid\" when its action is advanced",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Advance/Delay up to Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetRef": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "SummonMonster"
                      },
                      "refPoint": "After",
                      "isStartingAV": true
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Breeding Frenzy</span>]",
          "modifierFlags": [
            "MuteHitH",
            "STAT_SuperArmor"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "class": "A"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isAttack",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_AllDamageTypeResistance"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isAttack",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isAttack",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isAttack",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Unicorn_01_Ability05_Insert_Part01",
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeResistance"
          ],
          "latentQueue": [],
          "description": "In this state, DMG taken from attacks is reduced. When action advances, HP will be consumed. Summons \"Mirage Fizzle Kid\" and slightly delays \"Incubation\" action. When \"Incubation\" takes action, all remaining \"Mirage Fizzle Kid\" will be summoned.",
          "type": "Other",
          "effectName": "Incubation",
          "statusName": "Breeding Frenzy"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2140507283\">MWMonster_W4_Unicorn_01_BlockDamage</a>[<span class=\"descriptionNumberColor\">Maelstrom's Eye</span>]",
          "counter": 1,
          "modifierFlags": [
            "BlockDamageExcludeDot",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "Immune to all DMG except DoTs. This status is dispelled after being attacked.",
          "type": "Buff",
          "effectName": "Barrier",
          "statusName": "Maelstrom's Eye"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1300638915\">Enemy_W4_Unicorn_01_SummonMonsterWeak</a>[<span class=\"descriptionNumberColor\">Weakling</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_InitHP) || SUB || RETURN",
                    "displayLines": "(1 - MDF_InitHP)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_InitHP"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_DefenceAddedRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_InitHP",
            "MDF_DefenceAddedRatio"
          ],
          "latentQueue": [],
          "description": "Due to premature hatching, decreases DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>.",
          "type": "Debuff",
          "effectName": "Weakened",
          "statusName": "Weakling"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>[<span class=\"descriptionNumberColor\">Fetal Movement of the Ocean</span>]",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "SW_Minion01_03"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "SW_Minion01_03"
                      }
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "SW_Minion01_03"
                      },
                      "noTargetFound": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "In this state, \"Cyclonic Swarm Mother's\" Toughness cannot be reduced. \"Cyclonic Swarm Mother\" will use \"Rain Is Born to Fall\". Eliminate all \"Mirage Fizzle Kids\" to dispel this state.",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Fetal Movement of the Ocean"
        }
      ],
      "references": []
    },
    "4053020_Functions": {
      "fileName": "4053020_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>",
          "parse": []
        }
      ],
      "references": []
    },
    "4053020_BE_BattleEvents": {
      "fileName": "4053020_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20022,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W4_Unicorn_01_Summon"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}