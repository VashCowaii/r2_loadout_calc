const configAbility = {
  "fileName": "4015021_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1742396906\">Modifier_Monster_W4_DawnsEye_01_B_StoryMusic</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle"
        },
        {
          "eventTrigger": "Leave Battle"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_IsStoryTri",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1459512555\">Enemy_W4_DawnsEye_B_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPartP3"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPart"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                        "displayLines": "Sunny_Temperature",
                        "constants": [],
                        "variables": [
                          "Sunny_Temperature"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_SunnyBreakColdFinal) || Variables[2] (MDF_SunnyBreakColdRatio) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "MDF_SunnyBreakColdFinal",
                          "MDF_SunnyBreakColdRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SunnyBreakColdFinal",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_SunnyBreakCold) || RETURN",
                          "displayLines": "MDF_SunnyBreakCold",
                          "constants": [],
                          "variables": [
                            "MDF_SunnyBreakCold"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakColdFinal) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakColdFinal)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakColdFinal"
                            ]
                          },
                          "max": 999
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakCold) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakCold)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakCold"
                            ]
                          },
                          "max": 999
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CountTotal",
                          "value": {
                            "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                            "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                            "constants": [],
                            "variables": [
                              "Thunder_CountLight",
                              "Thunder_CountDark"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountLight",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Variables[0] (AIFlag) || RETURN",
                                "displayLines": "AIFlag",
                                "constants": [],
                                "variables": [
                                  "AIFlag"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                "displayLines": "MDF_CountTotal",
                                "constants": [],
                                "variables": [
                                  "MDF_CountTotal"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountDark",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] (AIFlag) || SUB || RETURN",
                                "displayLines": "(0 - AIFlag)",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "AIFlag"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                "displayLines": "MDF_CountTotal",
                                "constants": [],
                                "variables": [
                                  "MDF_CountTotal"
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Thunder_CountDark",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "MDF_BreakStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    },
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      }
                                    },
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Thunder_CountDark",
                                "compareType": ">=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "ThunderKillCount",
                                  "value": {
                                    "operator": "Variables[0] (ThunderKillCount) || Constants[0] (1) || ADD || RETURN",
                                    "displayLines": "(ThunderKillCount + 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "ThunderKillCount"
                                    ]
                                  }
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "conditionActive": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "ThunderKillCount",
                                        "compareType": ">=",
                                        "value2": 1
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "Thunder_CountDark",
                                        "compareType": ">=",
                                        "value2": 1
                                      }
                                    ]
                                  },
                                  "abilityName": "BattleEventAbility_W4_DawnsEye_RainKillSummon",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "priorityTag": "EnemyDeathEffect",
                                  "canHitNonTargets": true,
                                  "allowAbilityTriggers": false
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
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Modifier Description",
              "popUpText": "When receiving DMG, \"Hyacinthia, Eye of Twilight\" loses equal amount of HP."
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "PartLoseHpValue"
                },
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                    "displayLines": "(0 - PartLoseHpValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PartLoseHpValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPartP3"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPart"
                      }
                    ]
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                        "displayLines": "Sunny_Temperature",
                        "constants": [],
                        "variables": [
                          "Sunny_Temperature"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_SunnyBreakColdFinal) || Variables[2] (MDF_SunnyBreakColdRatio) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "MDF_SunnyBreakColdFinal",
                          "MDF_SunnyBreakColdRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SunnyBreakColdFinal",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_SunnyBreakCold) || RETURN",
                          "displayLines": "MDF_SunnyBreakCold",
                          "constants": [],
                          "variables": [
                            "MDF_SunnyBreakCold"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakColdFinal) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakColdFinal)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakColdFinal"
                            ]
                          },
                          "max": 999
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakCold) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakCold)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakCold"
                            ]
                          },
                          "max": 999
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CountTotal",
                          "value": {
                            "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                            "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                            "constants": [],
                            "variables": [
                              "Thunder_CountLight",
                              "Thunder_CountDark"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Thunder_CountLight",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Variables[0] (AIFlag) || RETURN",
                            "displayLines": "AIFlag",
                            "constants": [],
                            "variables": [
                              "AIFlag"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                            "displayLines": "MDF_CountTotal",
                            "constants": [],
                            "variables": [
                              "MDF_CountTotal"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Thunder_CountDark",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (AIFlag) || SUB || RETURN",
                            "displayLines": "(0 - AIFlag)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "AIFlag"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                            "displayLines": "MDF_CountTotal",
                            "constants": [],
                            "variables": [
                              "MDF_CountTotal"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Thunder_CountDark",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "MDF_BreakStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                },
                                {
                                  "name": "Trigger 0-Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  }
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Trigger 0-Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
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
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ],
      "description": "When receiving DMG, \"Sublime, Radiant, Avatar of the Sky\" loses an equal amount of HP.",
      "type": "Other",
      "statusName": "All As One"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1145840580\">Modifier_Monster_W4_DawnsEye_01_B_HardLockHp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": {
                "operator": "Variables[0] (MDF_LockHp) || RETURN",
                "displayLines": "MDF_LockHp",
                "constants": [],
                "variables": [
                  "MDF_LockHp"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-460415799\">Modifier_StageSpecialAbility_MuteBreak</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": -1,
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_IsStoryTri",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 5
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill03"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1408,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Phainon"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1398737430\">Modifier_StageSpecialAbility_SoftRage</a>",
                  "valuePerStack": {
                    "MDF_DamageAddedRatio": {
                      "operator": "Variables[0] ({[SkillP10[1]]}) || RETURN",
                      "displayLines": "{[SkillP10[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP10[1]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LockHp"
      ],
      "latentQueue": [
        "_IsStoryTri",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
                  "success": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Get Revived [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
                  "success": [
                    "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__196132555\">Enemy_W4_DawnsEye_01_MainStoryLockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.00010000006
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
              "valuePerStack": {
                "MDF_DeathSPAdd": {
                  "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                  "displayLines": "MDF_DeathSPAdd",
                  "constants": [],
                  "variables": [
                    "MDF_DeathSPAdd"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DeathSPAdd"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>",
      "modifierFlags": [
        "STAT_CTRL_UnOperable"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || RETURN",
                "displayLines": "MDF_Speed",
                "constants": [],
                "variables": [
                  "MDF_Speed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Speed"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
      "modifierFlags": [
        "DisableAction",
        "STAT_CTRL_Shake",
        "STAT_CTRL",
        "AvatarBreak",
        "MuteSpeed",
        "AlwaysSuccess",
        "Stealth",
        "DisableHealHP",
        "STAT_ForceControl",
        "UnOperable",
        "STAT_CTRL_UnOperable",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01"
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01"
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            },
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01",
              "state": false
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01",
              "state": false
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Add Target by Unique Identifier",
                "identifier": "HealBattleEvent"
              },
              "value": {
                "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                "displayLines": "MDF_DeathSPAdd",
                "constants": [],
                "variables": [
                  "MDF_DeathSPAdd"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "eventTrigger": "Owner Changed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSourceCreator]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W4_DawnsEye_01"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "isLock": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DeathSPAdd"
      ],
      "latentQueue": [],
      "description": "Cannot be selected, cannot take action.",
      "type": "Debuff",
      "effectName": "Tide-Corrosion",
      "statusName": "Tide-Corrosion"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1645075522\">Modifier_Monster_W4_DawnsEye_01_BlockDirtyHP</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__27951832\">Modifier_Monster_W4_DawnsEye_01_HOT</a>[<span class=\"descriptionNumberColor\">Eagerness</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healFlat": {
                "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                "displayLines": "MDF_HPDelta",
                "constants": [],
                "variables": [
                  "MDF_HPDelta"
                ]
              },
              "formula": "Heal from Base Value"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddRatio) || RETURN",
                "displayLines": "MDF_DamageAddRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Restores this unit's HP by <span class=\"descriptionNumberColor\">MDF_HPDelta</span> at the start of every turn, and increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
      "type": "Buff",
      "effectName": "Eagerness",
      "statusName": "Eagerness"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
      "stackType": "Multiple",
      "modifierFlags": [
        "CanBeAddedToServant"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                "displayLines": "MDF_HPDelta",
                "constants": [],
                "variables": [
                  "MDF_HPDelta"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                "displayLines": "MDF_HealAddRatio",
                "constants": [],
                "variables": [
                  "MDF_HealAddRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CanBeAddedToServant"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
                  "valuePerStack": {
                    "MDF_HPDelta": {
                      "operator": "Variables[0] (MDF_HPDeltaPerLayer) || RETURN",
                      "displayLines": "MDF_HPDeltaPerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_HPDeltaPerLayer"
                      ]
                    },
                    "MDF_HealAddRatio": {
                      "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                      "displayLines": "MDF_HealAddRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HealAddRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HPDelta",
              "value": {
                "operator": "Variables[0] (MDF_HPDeltaPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_HPDeltaPerLayer * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_HPDeltaPerLayer",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPDelta</span>.",
      "type": "Buff",
      "effectName": "Flame-Chase",
      "statusName": "Flame-Chase"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__560024402\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo</a>",
      "modifierFlags": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_HPDeltaPerLayer": {
              "operator": "Variables[0] (MDF_HPDelta) || RETURN",
              "displayLines": "MDF_HPDelta",
              "constants": [],
              "variables": [
                "MDF_HPDelta"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
              "displayLines": "MDF_HealAddRatio",
              "constants": [],
              "variables": [
                "MDF_HealAddRatio"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] (BattleEventHeal_HPDeltaLayer) || RETURN",
              "displayLines": "BattleEventHeal_HPDeltaLayer",
              "constants": [],
              "variables": [
                "BattleEventHeal_HPDeltaLayer"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1306101572\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokChange</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 5
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__157) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__157",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__157"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1053321581\">Modifier_Monster_W4_DawnsEye_01_WheaterMarkSpecial</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] ({[SkillP07[1]]}) || Variables[1] (BaseAttack) || MUL || RETURN",
                      "displayLines": "({[SkillP07[1]]} * BaseAttack)",
                      "constants": [],
                      "variables": [
                        "{[SkillP07[1]]}",
                        "BaseAttack"
                      ]
                    }
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
      "for": "<a class=\"gModGreen\" id=\"mod__235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>",
      "stackType": "Merge",
      "modifierFlags": [
        "CanBeAddedToServant",
        "RemoveWhenCasterDead"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPDelta) || RETURN",
                "displayLines": "MDF_DirtyHPDelta",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPDelta"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CanBeAddedToServant",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageValueTotal",
              "value": {
                "operator": "Variables[0] (MDF_DamageValueTotal) || Variables[1] (MDF_DamageValue) || ADD || RETURN",
                "displayLines": "(MDF_DamageValueTotal + MDF_DamageValue)",
                "constants": [],
                "variables": [
                  "MDF_DamageValueTotal",
                  "MDF_DamageValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_DamageValueTotal",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValueTotal",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_DamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_DamageRatioAdd) || RETURN",
                "displayLines": "MDF_DamageRatioAdd",
                "constants": [],
                "variables": [
                  "MDF_DamageRatioAdd"
                ]
              },
              "max": 100
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageValueFinal",
              "value": {
                "operator": "Variables[0] (MDF_DamageValueTotal) || Variables[1] (MDF_DamageRatio) || MUL || RETURN",
                "displayLines": "(MDF_DamageValueTotal * MDF_DamageRatio)",
                "constants": [],
                "variables": [
                  "MDF_DamageValueTotal",
                  "MDF_DamageRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_DamageValueFinal",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageValueFinal) || Variables[1] (MDF_MaxHP) || DIV || RETURN",
                    "displayLines": "(MDF_DamageValueFinal / MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageValueFinal",
                      "MDF_MaxHP"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": 0
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>",
              "valuePerStack": {
                "MDF_DirtyHPRatio": {
                  "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                  "displayLines": "MDF_CurrentDirtyHPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_CurrentDirtyHPRatio"
                  ]
                },
                "MDF_DirtyHPDelta": {
                  "operator": "Variables[0] (MDF_DamageValueFinal) || RETURN",
                  "displayLines": "MDF_DamageValueFinal",
                  "constants": [],
                  "variables": [
                    "MDF_DamageValueFinal"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Memosprite",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetSource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": 1
                },
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Constants[0] (0.000010000076) || RETURN",
                    "displayLines": "0.000010000076",
                    "constants": [
                      0.000010000076
                    ],
                    "variables": []
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-1214340360\">Monster_W4_DawnsEye_LockHP</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                  "valuePerStack": {
                    "MDF_DeathSPAdd": {
                      "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                      "displayLines": "MDF_DeathSPAdd",
                      "constants": [],
                      "variables": [
                        "MDF_DeathSPAdd"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -50
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_DamageValue"
      ],
      "latentQueue": [],
      "description": "Maximum Restorable HP decreases by <span class=\"descriptionNumberColor\">MDF_DamageValueFinal</span>.",
      "type": "Debuff",
      "effectName": "Rot",
      "statusName": "Rot"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": {
                  "operator": "Variables[0] (MDF_TotalDamageRatioAdd) || RETURN",
                  "displayLines": "MDF_TotalDamageRatioAdd",
                  "constants": [],
                  "variables": [
                    "MDF_TotalDamageRatioAdd"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
                  "valuePerStack": {
                    "MDF_TotalDamageRatioAdd": {
                      "operator": "Constants[0] (0) || Variables[0] (MDF_TotalDamageRatioCut) || SUB || RETURN",
                      "displayLines": "(0 - MDF_TotalDamageRatioCut)",
                      "constants": [
                        0
                      ],
                      "variables": [
                        "MDF_TotalDamageRatioCut"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_TotalDamageRatioAdd",
        "MDF_TotalDamageRatioCut"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1717270165\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamageMark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__74735154\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage</a>[<span class=\"descriptionNumberColor\">Skygash</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "TotalDamageRatio",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_TotalDamageRatio"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_TotalDamageRatio) || Variables[1] (MDF_DamagePercentage) || MUL || RETURN",
                          "displayLines": "(MDF_TotalDamageRatio * MDF_DamagePercentage)",
                          "constants": [],
                          "variables": [
                            "MDF_TotalDamageRatio",
                            "MDF_DamagePercentage"
                          ]
                        },
                        "cantKill": true,
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                }
              ]
            }
          ]
        }
      ],
      "description": "After targets attack, deals True DMG based on \"Black Tide Sync Rate.\" This DMG is \"Non-fatal.\"",
      "type": "Buff",
      "statusName": "Skygash"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_TotalDamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_TotalDamageRatioAdd) || RETURN",
                "displayLines": "MDF_TotalDamageRatioAdd",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatioAdd"
                ]
              },
              "min": {
                "operator": "Variables[0] (MDF_TotalDamageRatioMin) || RETURN",
                "displayLines": "MDF_TotalDamageRatioMin",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatioMin"
                ]
              },
              "max": {
                "operator": "Variables[0] (MDF_TotalDamageRatioMax) || RETURN",
                "displayLines": "MDF_TotalDamageRatioMax",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatioMax"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentDamage",
              "value": {
                "operator": "Variables[0] (MDF_BaseAttack) || Variables[1] (MDF_TotalDamageRatio) || MUL || RETURN",
                "displayLines": "(MDF_BaseAttack * MDF_TotalDamageRatio)",
                "constants": [],
                "variables": [
                  "MDF_BaseAttack",
                  "MDF_TotalDamageRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TotalDamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_TotalDamageRatio) || RETURN",
                "displayLines": "MDF_TotalDamageRatio",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ChargePercentage",
              "value": {
                "operator": "Variables[0] (TotalDamageRatio) || Variables[1] (MDF_TotalDamageRatioMax) || DIV || RETURN",
                "displayLines": "(TotalDamageRatio / MDF_TotalDamageRatioMax)",
                "constants": [],
                "variables": [
                  "TotalDamageRatio",
                  "MDF_TotalDamageRatioMax"
                ]
              }
            },
            {
              "name": "Set Aquila UI Data"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4015021,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Hyacinthia, Eye of Twilight",
                "isBaseCompare": true
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_TotalDamageRatioAdd"
      ],
      "latentQueue": [],
      "description": "The current Charge ratio of \"Eye of Twilight\" is <span class=\"descriptionNumberColor\">MDF_ChargePercentage</span>.",
      "type": "Other",
      "statusName": "Black Tide Sync Rate"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Battle Event ID",
                    "ID": 20015,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Battle Event ID",
                    "ID": 60029,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_DamageValue"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[Remove Backup Memosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_RecoverRatioAttack": {
              "operator": "Variables[0] (MDF_DirtyHPBase) || RETURN",
              "displayLines": "MDF_DirtyHPBase",
              "constants": [],
              "variables": [
                "MDF_DirtyHPBase"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (MDF_BaseAttack) || RETURN",
              "displayLines": "MDF_BaseAttack",
              "constants": [],
              "variables": [
                "MDF_BaseAttack"
              ]
            },
            "MDF_DamageRatioAdd": 0,
            "MDF_DamageValueFinal": {
              "operator": "Variables[0] (MDF_DamageValueFinal) || RETURN",
              "displayLines": "MDF_DamageValueFinal",
              "constants": [],
              "variables": [
                "MDF_DamageValueFinal"
              ]
            },
            "MDF_DeathSPAdd": {
              "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
              "displayLines": "MDF_DeathSPAdd",
              "constants": [],
              "variables": [
                "MDF_DeathSPAdd"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"74735154\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage</a>[<span class=\"descriptionNumberColor\">Skygash</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[SkillP09[4]]}) || RETURN",
              "displayLines": "{[SkillP09[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[4]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Default"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
      "modifierFlags": [
        "ForceHitH"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPart"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPartP3"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "<",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (StanceDamage) || RETURN",
                    "displayLines": "StanceDamage",
                    "constants": [],
                    "variables": [
                      "StanceDamage"
                    ]
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPart"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "{[SkillP10[4]]}"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "multiAdd": "{[SkillP10[3]]}"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 3
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPart"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
                    "invertCondition": true
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
                        "value": "MonsterType_W4_BossPartRight"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPartLeft"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (StanceDamage) || RETURN",
                    "displayLines": "StanceDamage",
                    "constants": [],
                    "variables": [
                      "StanceDamage"
                    ]
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "StanceDamage"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    }
  ],
  "references": []
}