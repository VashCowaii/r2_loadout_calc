const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 70001,
  "trimCharacterName": 70001,
  "abilityList": [
    "70001_Modifiers",
    "70001_BattleEventAbility_Elation_Passive",
    "70001_BattleEventAbility_Elation_Ability43_RestartElationTime",
    "70001_BattleEventAbility_Elation_Ability42_EndElationTime",
    "70001_BattleEventAbility_Elation_Ability41_Part2",
    "70001_BattleEventAbility_Elation_Ability41_Part1",
    "70001_BattleEventAbility_Elation_Ability04_02",
    "70001_BattleEventAbility_Elation_Ability04_01",
    "70001_BattleEventAbility_Elation_Ability03_Entry",
    "70001_BE_BattleEvents"
  ],
  "abilityObject": {
    "70001_Modifiers": {
      "fileName": "70001_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "dynamicStringsArray": [
            {
              "name": "MDF_CustomTag",
              "value": "-1"
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_IsInserting"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "displayLines": "MDF_OverrideElationPoint"
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "displayLines": "MDF_ElationTimeIsNoConsume"
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "displayLines": "MDF_OverrideElationPoint"
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "displayLines": "MDF_ElationTimeIsNoConsume"
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "displayLines": "MDF_OverrideElationPoint"
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "displayLines": "MDF_ElationTimeIsNoConsume"
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "displayLines": "MDF_OverrideElationPoint"
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "displayLines": "MDF_ElationTimeIsNoConsume"
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
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
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "livingState": "Mask_AliveOrRevivable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                      "variables": {
                        "TP_OverrideElationPoint": {
                          "displayLines": "MDF_OverrideElationPoint"
                        },
                        "TP_ElationTimeIsNoConsume": {
                          "displayLines": "MDF_ElationTimeIsNoConsume"
                        }
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "TP_CustomTag",
                          "value": {
                            "Custom": true,
                            "Key": "MDF_CustomTag"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1447027795\">Elation_InsertRetarget</a>",
              "dynamicStringsArray": [
                {
                  "name": "TP_CustomTag",
                  "value": "-1"
                }
              ],
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsInserting",
                    "compareType": "=",
                    "value2": 0
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
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "living": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_IsInserting"
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "valuePerStack": {
                            "ElationTime_OverrideElationPointTemp": {
                              "displayLines": "MDF_OverrideElationPoint"
                            },
                            "ElationTime_IsNoConsumeTemp": {
                              "displayLines": "MDF_ElationTimeIsNoConsume"
                            }
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Aha Instant: Aha Battle Event}}"
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "ElationTime_CustomTagTemp",
                              "value": {
                                "Custom": true,
                                "Key": "MDF_CustomTag"
                              }
                            }
                          ],
                          "afterInjection": [
                            {
                              "name": "IF",
                              "conditions": "Is Current Modifier Active",
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "MDF_IsInserting"
                                }
                              ]
                            }
                          ],
                          "copyAbortFlags": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1644535867\">MLevel_ElationBE_ElationEchoPointBonus_OnEnterBattle</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "ElationEchoPoint"
          ],
          "description": "Missing Description",
          "type": "Buff",
          "duration": 2,
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                  "statValue": {
                    "displayLines": "ElationEchoPoint"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "ElationEchoPoint"
          ],
          "description": "Missing Description",
          "type": "Buff",
          "duration": 2,
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                  "statValue": {
                    "displayLines": "ElationEchoPoint"
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ElationEchoPoint",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                      "statValue": {
                        "displayLines": "ElationEchoPoint"
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Character Path [Anyone]: Change",
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
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "enteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_Sorted"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_AvatarSpeed",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": "Unknown CONDITON2 ",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_AvatarSpeed * _BackEndSpeedRatio)"
                      },
                      "variableName": "MDF_WeightedSpeed"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "MDF_AvatarSpeed"
                      },
                      "variableName": "MDF_WeightedSpeed"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1613366517\">MBattleEvent_GridFight_Elation_BaseSpeed</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars Full Activated Role OffFieldList}}"
                  },
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                }
              ]
            },
            {
              "eventTrigger": "Character Path [Anyone]: Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "livingState": "Mask_AliveOnly"
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars Full Activated Role OffFieldList}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Target is Pathstrider",
                              "path": [
                                "Elation"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                      "valuePerStack": {
                        "_BackEndSpeedRatio": {
                          "displayLines": "_BackEndSpeedRatio"
                        }
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars Full Activated Role OffFieldList}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Target is Pathstrider",
                              "path": [
                                "Elation"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                          "variable": "MDF_WeightedSpeed",
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variable2": "MDF_WeightedSpeed_Main"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_CalRank"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars Full Activated Role OffFieldList}} - {{Parameter Target}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Target is Pathstrider",
                                  "path": [
                                    "Elation"
                                  ],
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                }
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                              "variable": "MDF_WeightedSpeed",
                              "target2": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variable2": "MDF_WeightedSpeed_Sub"
                            },
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                              "variable": "MDF_Sorted",
                              "target2": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variable2": "MDF_TargetSorted"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_WeightedSpeed_Main",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "MDF_WeightedSpeed_Sub"
                                    }
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "MDF_WeightedSpeed_Main",
                                        "compareType": "=",
                                        "value2": {
                                          "displayLines": "MDF_WeightedSpeed_Sub"
                                        }
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "MDF_TargetSorted",
                                        "compareType": "=",
                                        "value2": 1
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(MDF_CalRank + 1)"
                                  },
                                  "variableName": "MDF_CalRank"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                          "variableName": "MDF_Rank",
                          "value": {
                            "displayLines": "MDF_CalRank"
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                          "variableName": "MDF_Sorted",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "AHA_OBJECT_UNUSED__194"
                      },
                      "variableName": "BattleEvent_Elation_00_BaseSpeed"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars Full Activated Role OffFieldList}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Target is Pathstrider",
                              "path": [
                                "Elation"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        ]
                      },
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                          "variable": "MDF_Rank",
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variable2": "MDF_SpeedRank"
                        },
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1134867804\">MBattleEvent_Elation_GridFight_CalSpeed</a>",
                          "variable": "MDF_WeightedSpeed",
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variable2": "MDF_SpeedCalTemp1"
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "displayLines": "MDF_SpeedRank"
                          },
                          "compareType": ">=",
                          "caseTasks": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "AHA_OBJECT_UNUSED__195"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "AHA_OBJECT_UNUSED__196"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "AHA_OBJECT_UNUSED__197"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "AHA_OBJECT_UNUSED__198"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "AHA_OBJECT_UNUSED__199"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(BattleEvent_Elation_00_BaseSpeed + (MDF_SpeedCalTemp1 * MDF_SpeedCalTemp2))"
                          },
                          "variableName": "BattleEvent_Elation_00_BaseSpeed"
                        }
                      ]
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                      "statValue": {
                        "displayLines": "BattleEvent_Elation_00_BaseSpeed"
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1103918396\">MBattleEvent_Elation_BaseSpeed</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                }
              ]
            },
            {
              "eventTrigger": "Character Path [Anyone]: Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "livingState": "Mask_AliveOnly"
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "{[SkillP01[0]]}"
                      },
                      "variableName": "BattleEvent_Elation_00_BaseSpeed"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_CalCount"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Target is Pathstrider",
                              "path": [
                                "Elation"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                            "sortByHighest": true,
                            "living": true
                          }
                        ]
                      },
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "MDF_SpeedCalTemp1",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "displayLines": "MDF_CalCount"
                          },
                          "compareType": ">=",
                          "caseTasks": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "{[SkillP01[5]]}"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "{[SkillP01[4]]}"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "{[SkillP01[3]]}"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "{[SkillP01[2]]}"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "{[SkillP01[1]]}"
                                  },
                                  "variableName": "MDF_SpeedCalTemp2"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_CalCount + 1)"
                          },
                          "variableName": "MDF_CalCount"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(BattleEvent_Elation_00_BaseSpeed + (MDF_SpeedCalTemp1 * MDF_SpeedCalTemp2))"
                          },
                          "variableName": "BattleEvent_Elation_00_BaseSpeed"
                        }
                      ]
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                      "statValue": {
                        "displayLines": "BattleEvent_Elation_00_BaseSpeed"
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-468079573\">MBattleEvent_Elation_ListenElationTimeEnd</a>",
          "execute": [
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Aha Instant: Aha Battle Event}}"
                    },
                    "value1": "ElationTime_IsNoConsume",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "value": 0,
                      "variableName": "ElationTime_IsNoConsume"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "MDF_Elation_Character_Num",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Elation: All Entities}}"
                  },
                  "living": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Elation_Character_Num",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "displayLines": "(MDF_Elation_Character_Num * 1)"
                      },
                      "adjustment": "Add"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__112407337\">MBattleEvent_Elation_Passive</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh",
            "MuteResetActionDelay",
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "displayLines": "1"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"334413599\">Elation_BE_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1613366517\">MBattleEvent_GridFight_Elation_BaseSpeed</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1103918396\">MBattleEvent_Elation_BaseSpeed</a>"
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "variableName": "Elation_CurrentPoint"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-468079573\">MBattleEvent_Elation_ListenElationTimeEnd</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_CurrentPoint",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "afterInjection": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "Elation_Character_Num",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Elation: Elation Entities}}"
                  },
                  "living": true
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
                        "name": "Skill Type",
                        "skillType": "Elation"
                      },
                      "In Aha-Instant"
                    ]
                  },
                  "passed": [
                    "Unknown EventType2 (Not always an error)[2 true]"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Aha Instant is Paused",
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "skillIndex": 4,
                      "afterInjection": [],
                      "priorityTag": "AhaInstantRestart",
                      "priorityTagPending": "Highest"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start",
              "priorityLevel": 100,
              "execute": [
                "Unknown EventType1 (Not always an error)",
                {
                  "name": "Override Priority Tags",
                  "dynamicStringsArray": [
                    {
                      "name": "MonsterReviveSelf",
                      "value": "DuringElationTime_MonsterReviveSelf"
                    },
                    {
                      "name": "MonsterHealSelf",
                      "value": "DuringElationTime_MonsterHealSelf"
                    },
                    {
                      "name": "MonsterReviveOthers",
                      "value": "DuringElationTime_MonsterReviveOthers"
                    },
                    {
                      "name": "MonsterHealOthers",
                      "value": "DuringElationTime_MonsterHealOthers"
                    },
                    {
                      "name": "MonsterDeathRattleByLevel",
                      "value": "DuringElationTime_MonsterDeathRattleByLevel"
                    },
                    {
                      "name": "MonsterDeathRattleTogether",
                      "value": "DuringElationTime_MonsterDeathRattleTogether"
                    },
                    {
                      "name": "MonsterDeathRattle",
                      "value": "DuringElationTime_MonsterDeathRattle"
                    },
                    {
                      "name": "MonsterSummon",
                      "value": "DuringElationTime_MonsterSummon"
                    },
                    {
                      "name": "MonsterBuffSelf_Elation",
                      "value": "DuringElationTime_MonsterBuffSelf_Elation"
                    },
                    {
                      "name": "MonsterBuffOthers_Elation",
                      "value": "DuringElationTime_MonsterBuffOthers_Elation"
                    },
                    {
                      "name": "UseElationSkill",
                      "value": "DuringElationTime_UseElationSkill"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: End",
              "priorityLevel": -100,
              "execute": [
                {
                  "name": "Override Priority Tags",
                  "reset": true
                },
                "Unknown EventType2 (Not always an error)[1 false]",
                "Unknown EventType1 (Not always an error)[1 false][2 true]",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Aha Instant: Aha Battle Event}}"
                    },
                    "value1": "ElationTime_IsNoConsume",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Player Team with Unselectables and OffField}}"
                      },
                      "variables": {
                        "AddValue": {
                          "displayLines": "AHA_OBJECT_UNUSED__200"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "variableName": "Elation_CurrentPoint"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Player Team with Unselectables and OffField}}"
                      },
                      "variables": {
                        "AddValue": {
                          "displayLines": "Elation_CurrentPoint"
                        }
                      }
                    },
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": 0,
                      "adjustment": "Set"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: End (Pending)",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Elation_Ability42_EndElationTime",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "STAGE_CharacterInsert",
                  "canHitNonTargets": true,
                  "silentExecute": true,
                  "customFlags": [
                    "ElationTimeEnd"
                  ],
                  "allowAbilityTriggers": true
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "onChange": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "Elation_CurrentPoint",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BasePoint</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_CurrentPoint",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Battle Event ID",
                            "ID": 70001,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Battle Event ID",
                            "ID": 70002,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Aha Instant: Aha Battle Event}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_CurrentPoint",
                    "compareType": ">=",
                    "value2": 1
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__211849600\">MLevel_ElationBE_ActionStateFalse_02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>",
                  "state": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-881220179\">MLevel_ElationBE_ActionStateFalse</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>",
                  "state": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__994071549\">MLevel_Elation_Standard</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -90,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "variableName": "MDF_Elation_Character_Num",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Elation: All Entities}}"
                      },
                      "living": true
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full Activated OffFieldList}}"
                      },
                      "variables": {
                        "AddValue": 20
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Elation_Character_Num",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "displayLines": "(MDF_Elation_Character_Num * 1)"
                      },
                      "adjustment": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "onChange": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "Elation_CurrentPoint",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BasePoint</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterID": 1511
                      },
                      "ifTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Battle Event ID",
                            "ID": 70002,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "noTargetFound": [
                            {
                              "name": "Add Battle Event",
                              "teamName": "Neutral Team",
                              "eventID": 70002,
                              "canDupe": true,
                              "variables": null
                            }
                          ]
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Battle Event ID",
                            "ID": 70001,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "noTargetFound": [
                            {
                              "name": "Add Battle Event",
                              "teamName": "Neutral Team",
                              "eventID": 70001,
                              "canDupe": true,
                              "variables": null
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
      "references": []
    },
    "70001_BattleEventAbility_Elation_Passive": {
      "fileName": "70001_BattleEventAbility_Elation_Passive",
      "childAbilityList": [
        "70001_Activity_ElationBattle_BEStart_ForShowOnly",
        "70001_BattleEventAbility_Elation_Passive"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"112407337\">MBattleEvent_Elation_Passive</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "70001_BattleEventAbility_Elation_Ability43_RestartElationTime": {
      "fileName": "70001_BattleEventAbility_Elation_Ability43_RestartElationTime",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability43_RestartElationTime"
      ],
      "skillTrigger": "Skill43",
      "skillMuted": true,
      "abilityType": "Elation",
      "toughnessList": null,
      "parse": [
        "Unknown EventType (Not always an error)",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "All Player Team"
      }
    },
    "70001_BattleEventAbility_Elation_Ability42_EndElationTime": {
      "fileName": "70001_BattleEventAbility_Elation_Ability42_EndElationTime",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability42_EndElationTime"
      ],
      "skillTrigger": "Skill42",
      "skillMuted": true,
      "abilityType": "Elation",
      "toughnessList": null,
      "parse": [
        {
          "name": "Lock Battle Actions"
        },
        "Unknown EventType2 (Not always an error)[1 false]",
        "Unknown EventType1 (Not always an error)[1 false][2 true]",
        {
          "name": "Lock Battle Actions",
          "isLock": false
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "70001_BattleEventAbility_Elation_Ability41_Part2": {
      "fileName": "70001_BattleEventAbility_Elation_Ability41_Part2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "execute": [
            {
              "name": "Random Event",
              "odds": [
                {
                  "displayLines": "{[Skill41[2]]}"
                },
                {
                  "displayLines": "{[Skill41[3]]}"
                }
              ],
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageFlat": {
                          "displayLines": 1
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "displayLines": "{[Skill41[4]]}"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageElation": {
                          "displayLines": "{[Skill41[1]]}"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Aha Instant: Aha Battle Event}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Aha Instant: Aha Battle Event}}"
            },
            "value1": "ElationTime_IsNoConsume",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Aha Instant: Aha Battle Event}}"
              },
              "value": 0,
              "variableName": "ElationTime_IsNoConsume"
            }
          ],
          "failed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": 0,
              "adjustment": "Set"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "Elation_Character_Num",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Elation: All Entities}}"
          },
          "living": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Elation_Character_Num",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "(Elation_Character_Num * 1)"
              },
              "adjustment": "Add"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "70001_BattleEventAbility_Elation_Ability41_Part1": {
      "fileName": "70001_BattleEventAbility_Elation_Ability41_Part1",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability41_Part1",
        "70001_BattleEventAbility_Elation_Ability41_Camera",
        "70001_BattleEventAbility_Elation_Ability41_Part2"
      ],
      "skillTrigger": "Skill41",
      "abilityType": "Elation",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "BattleEventAbility_Elation_Ability41_Part2",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "70001_BattleEventAbility_Elation_Ability04_02": {
      "fileName": "70001_BattleEventAbility_Elation_Ability04_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Unbind Unique Name",
          "identifier": "Target_Elation"
        },
        {
          "name": "Assign Unique Name",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "identifier": "Target_Elation"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_SkillCount",
            "compareType": ">",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_SkillCount",
            "compareType": ">",
            "value2": 4
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "70001_BattleEventAbility_Elation_Ability04_01": {
      "fileName": "70001_BattleEventAbility_Elation_Ability04_01",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability04_01",
        "70001_BattleEventAbility_Elation_Ability04_02",
        "70001_BattleEventAbility_Elation_Ability04_02_Camera"
      ],
      "skillTrigger": "Skill04",
      "skillMuted": true,
      "abilityType": "Elation",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Elation: Player Team with Unselectables}}"
          },
          "toRemove": [
            "STAT_CTRL"
          ]
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": [
            "ElationTime_CustomTag"
          ],
          "forcedPunchline": {
            "displayLines": "ElationTime_OverrideElationPoint"
          },
          "sourceOverride": "Add Target by Current Extra-Turn Source",
          "target": {
            "name": "Target Name",
            "target": "{{Elation: Elation Entities}}"
          },
          "afterInjection": [],
          "abortFlags": [
            "STAT_CTRL"
          ],
          "priorityTag": "AhaInstant",
          "priorityTagPending": "AhaInstant_ElationSkill"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "value": {
            "displayLines": "ElationTime_OverrideElationPoint"
          },
          "variableName": "ElationTime_OverrideElationPointForEcho"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": -1,
          "variableName": "ElationTime_OverrideElationPoint"
        },
        {
          "name": "Define Custom String with Value",
          "value": {},
          "scope": "ContextAbility",
          "variableName": "ElationTime_CustomTag"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "value": {
            "displayLines": "ElationTime_IsNoConsume"
          },
          "variableName": "ElationTime_IsNoConsume"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": 0,
          "variableName": "ElationTime_IsNoConsumeTemp2"
        },
        {
          "name": "Lock Battle Actions"
        },
        {
          "name": "Lock Battle Actions",
          "isLock": false
        },
        {
          "name": "Define Variable with Elation Skill Count",
          "variableName": "ElationTime_SkillCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_SkillCount",
            "compareType": ">",
            "value2": 4
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "BattleEventAbility_Elation_Ability04_02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_SkillCount",
            "compareType": ">",
            "value2": 4
          }
        },
        "Unknown EventType2 (Not always an error)",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_SkillCount",
            "compareType": ">",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              "Unknown CONDITON2 [inverse: true]",
              {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Aha Instant: All Targets}}.[[index0]]"
                }
              }
            ]
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "dynamicStringsArray": [
        {
          "name": "ElationTime_CustomTag",
          "value": "-1"
        }
      ]
    },
    "70001_BattleEventAbility_Elation_Ability03_Entry": {
      "fileName": "70001_BattleEventAbility_Elation_Ability03_Entry",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability03_Entry"
      ],
      "skillTrigger": "Skill03",
      "skillMuted": true,
      "abilityType": "Elation",
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "ElationTime_CanStartElationTime"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Elation: Extra Aha-Instant Participants}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "ElationTime_CanStartElationTime"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Elation: Player Team with Unselectables with Elation Skills}}"
          },
          "conditions": {
            "name": "Living State",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "livingState": "Mask_AliveOnly"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "ElationTime_CanStartElationTime"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "ElationTime_CanStartElationTimeTemp"
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Unknown CONDITION3 (Not always an error)",
                        "invertCondition": true
                      }
                    ]
                  },
                  "flagFilter": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "ElationTime_CanStartElationTimeTemp"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ElationTime_CanStartElationTimeTemp",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "ElationTime_CanStartElationTime"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_CanStartElationTime",
            "compareType": "=",
            "value2": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"-2114512619\">MGridFight_Origin_2012_LE_ElationBE_Bonus</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "StageAbility_GridFight_Origin_2012_ElationBE_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillIndex": 1,
              "valuePerStack": {
                "ElationTime_OverrideElationPoint": {
                  "displayLines": "ElationTime_OverrideElationPointTemp"
                },
                "ElationTime_IsNoConsumeTemp2": {
                  "displayLines": "ElationTime_IsNoConsumeTemp"
                }
              },
              "sourceOverride": "Add Target by Current Extra-Turn Source",
              "dynamicStringsArray": [
                {
                  "name": "ElationTime_CustomTag",
                  "value": {
                    "Custom": true,
                    "Key": "ElationTime_CustomTagTemp"
                  }
                }
              ],
              "afterInjection": [],
              "priorityTag": "AhaInstantStart",
              "priorityTagPending": "Highest"
            }
          ],
          "failed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": [
                "ElationTime_CustomTagTemp"
              ],
              "forcedPunchline": {
                "displayLines": "ElationTime_OverrideElationPointTemp"
              },
              "skillIndex": 2,
              "afterInjection": []
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "value": {
                "displayLines": "ElationTime_IsNoConsumeTemp"
              },
              "variableName": "ElationTime_IsNoConsume"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": 0,
          "variableName": "ElationTime_IsNoConsumeTemp"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": -1,
          "variableName": "ElationTime_OverrideElationPointTemp"
        },
        {
          "name": "Define Custom String with Value",
          "value": {},
          "scope": "ContextAbility",
          "variableName": "ElationTime_CustomTagTemp"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "dynamicStringsArray": [
        {
          "name": "ElationTime_CustomTagTemp",
          "value": "-1"
        }
      ]
    },
    "70001_BE_BattleEvents": {
      "fileName": "70001_BE_BattleEvents",
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
          "beID": 70001,
          "team": "Neutral Team",
          "eventType": "Elation Battle-Event",
          "icon": "HoshinoKami_007.png",
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 10000
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevel": true,
          "params": [
            0.02,
            3,
            0.5,
            0.5,
            1
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill04": {
      "skillID": 7000101,
      "trigger": "Skill04",
      "name": "Aha Instant",
      "type": "Single Target",
      "slot": "Ultimate",
      "desc": "Causes units capable of using Elation Skills to use their Elation Skill once. Then, participating characters gain the \"Certified Banger\" state for the Punchline points taken into account this time, lasting for 2 turns.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "element": "Quantum",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "BattleEventAbility_Elation_00_Skill04_01",
        "BattleEventAbility_Elation_00_Skill04_02",
        "BattleEventAbility_Elation_00_Skill04_02_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 7000102,
      "trigger": "SkillP01",
      "name": null,
      "type": "Enhance",
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
          80,
          0.2,
          0.1,
          0.05,
          0.025,
          0.025
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Activity_ElationBattle_BEStart_ForShowOnly",
        "BattleEventAbility_Elation_00_Passive"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "Skill41": {
      "skillID": 7000103,
      "trigger": "Skill41",
      "name": "Let There Be Laughter",
      "type": "Single Target",
      "slot": "Ultimate",
      "desc": "Randomly launches up to 10 hits against both sides, with each hit dealing Quantum Elation DMG. When allies are hit, they regenerate a minor amount of Energy each hit.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.02,
          3,
          0.5,
          0.5,
          2
        ]
      },
      "element": "Quantum",
      "attackType": "ElationDamage",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "BattleEventAbility_Elation_00_Skill41_Phase1",
        "BattleEventAbility_Elation_00_Skill41_Camera",
        "BattleEventAbility_Elation_00_Skill41_Phase2"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "beID": 70001,
    "team": "Neutral Team",
    "eventType": "Elation Battle-Event",
    "icon": "HoshinoKami_007.png",
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 10000
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
        "value": 100
      }
    ],
    "hardLevel": true,
    "params": [
      0.02,
      3,
      0.5,
      0.5,
      1
    ]
  }
}