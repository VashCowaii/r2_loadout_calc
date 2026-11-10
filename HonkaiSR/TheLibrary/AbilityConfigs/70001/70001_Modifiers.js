const configAbility = {
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
              "value": {
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
              "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                  "value": {
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
                      "caseEvents": [
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
                      ],
                      "defaultEvents": []
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
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
                      "caseEvents": [
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
                      ],
                      "defaultEvents": []
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
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
      "latentQueue": [
        "ElationTime_IsNoConsume"
      ],
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
}