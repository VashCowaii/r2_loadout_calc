const configAbility = {
  "fileName": "-731110892_Modifiers",
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
              "variableName": "MDF_IsInserting",
              "value": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
              "variables": {
                "TP_OverrideElationPoint": {
                  "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                  "displayLines": "MDF_OverrideElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_OverrideElationPoint"
                  ]
                },
                "TP_ElationTimeIsNoConsume": {
                  "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                  "displayLines": "MDF_ElationTimeIsNoConsume",
                  "constants": [],
                  "variables": [
                    "MDF_ElationTimeIsNoConsume"
                  ]
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
                  "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                  "displayLines": "MDF_OverrideElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_OverrideElationPoint"
                  ]
                },
                "TP_ElationTimeIsNoConsume": {
                  "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                  "displayLines": "MDF_ElationTimeIsNoConsume",
                  "constants": [],
                  "variables": [
                    "MDF_ElationTimeIsNoConsume"
                  ]
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
                  "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                  "displayLines": "MDF_OverrideElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_OverrideElationPoint"
                  ]
                },
                "TP_ElationTimeIsNoConsume": {
                  "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                  "displayLines": "MDF_ElationTimeIsNoConsume",
                  "constants": [],
                  "variables": [
                    "MDF_ElationTimeIsNoConsume"
                  ]
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
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
              "variables": {
                "TP_OverrideElationPoint": {
                  "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                  "displayLines": "MDF_OverrideElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_OverrideElationPoint"
                  ]
                },
                "TP_ElationTimeIsNoConsume": {
                  "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                  "displayLines": "MDF_ElationTimeIsNoConsume",
                  "constants": [],
                  "variables": [
                    "MDF_ElationTimeIsNoConsume"
                  ]
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
                    "state": "Mask_AliveOrRevivable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                      "displayLines": "MDF_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_OverrideElationPoint"
                      ]
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "MDF_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "MDF_ElationTimeIsNoConsume"
                      ]
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
                      "variableName": "MDF_IsInserting",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "valuePerStack": {
                        "ElationTime_OverrideElationPointTemp": {
                          "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                          "displayLines": "MDF_OverrideElationPoint",
                          "constants": [],
                          "variables": [
                            "MDF_OverrideElationPoint"
                          ]
                        },
                        "ElationTime_IsNoConsumeTemp": {
                          "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                          "displayLines": "MDF_ElationTimeIsNoConsume",
                          "constants": [],
                          "variables": [
                            "MDF_ElationTimeIsNoConsume"
                          ]
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
                          "conditions": {
                            "name": "Is Current Modifier Active"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_IsInserting",
                              "value": 0
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
        "STAT_ElationEchoPoint"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ElationEchoPoint) || RETURN",
                "displayLines": "ElationEchoPoint",
                "constants": [],
                "variables": [
                  "ElationEchoPoint"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "stackType": "Multiple",
      "modifierFlags": [
        "STAT_ElationEchoPoint"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ElationEchoPoint) || RETURN",
                "displayLines": "ElationEchoPoint",
                "constants": [],
                "variables": [
                  "ElationEchoPoint"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff",
      "duration": 2
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
          "eventTrigger": "Character Path Change [Anyone]",
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                }
              ],
              "whenValueChanges": [
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
                "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars OffFieldList}} - {{Elation: OffField Sparxie}}"
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
          "eventTrigger": "Character Path Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
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
                  "variableName": "BattleEvent_Elation_00_BaseSpeed",
                  "value": {
                    "operator": "Variables[0] (AHA_OBJECT_UNUSED__194) || RETURN",
                    "displayLines": "AHA_OBJECT_UNUSED__194",
                    "constants": [],
                    "variables": [
                      "AHA_OBJECT_UNUSED__194"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SpeedRank",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars OffFieldList}} - {{Elation: OffField Sparxie}}"
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
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                        "living": true,
                        "sortByHighest": true
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_SpeedCalTemp1",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (MDF_SpeedRank) || RETURN",
                        "displayLines": "MDF_SpeedRank",
                        "constants": [],
                        "variables": [
                          "MDF_SpeedRank"
                        ]
                      },
                      "compareType": ">=",
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (AHA_OBJECT_UNUSED__195) || RETURN",
                                "displayLines": "AHA_OBJECT_UNUSED__195",
                                "constants": [],
                                "variables": [
                                  "AHA_OBJECT_UNUSED__195"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (AHA_OBJECT_UNUSED__196) || RETURN",
                                "displayLines": "AHA_OBJECT_UNUSED__196",
                                "constants": [],
                                "variables": [
                                  "AHA_OBJECT_UNUSED__196"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (AHA_OBJECT_UNUSED__197) || RETURN",
                                "displayLines": "AHA_OBJECT_UNUSED__197",
                                "constants": [],
                                "variables": [
                                  "AHA_OBJECT_UNUSED__197"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (AHA_OBJECT_UNUSED__198) || RETURN",
                                "displayLines": "AHA_OBJECT_UNUSED__198",
                                "constants": [],
                                "variables": [
                                  "AHA_OBJECT_UNUSED__198"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (AHA_OBJECT_UNUSED__199) || RETURN",
                                "displayLines": "AHA_OBJECT_UNUSED__199",
                                "constants": [],
                                "variables": [
                                  "AHA_OBJECT_UNUSED__199"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpeedRank",
                      "value": {
                        "operator": "Variables[0] (MDF_SpeedRank) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_SpeedRank + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SpeedRank"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEvent_Elation_00_BaseSpeed",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || Variables[1] (MDF_SpeedCalTemp1) || Variables[2] (MDF_SpeedCalTemp2) || MUL || ADD || RETURN",
                        "displayLines": "(BattleEvent_Elation_00_BaseSpeed + (MDF_SpeedCalTemp1 * MDF_SpeedCalTemp2))",
                        "constants": [],
                        "variables": [
                          "BattleEvent_Elation_00_BaseSpeed",
                          "MDF_SpeedCalTemp1",
                          "MDF_SpeedCalTemp2"
                        ]
                      }
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
                    "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Elation_00_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Elation_00_BaseSpeed"
                    ]
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
          "eventTrigger": "Character Path Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
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
                  "variableName": "BattleEvent_Elation_00_BaseSpeed",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_493) || RETURN",
                    "displayLines": "UnusedUnderThisBase_493",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_493"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CalCount",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
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
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                        "living": true,
                        "sortByHighest": true
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_SpeedCalTemp1",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (MDF_CalCount) || RETURN",
                        "displayLines": "MDF_CalCount",
                        "constants": [],
                        "variables": [
                          "MDF_CalCount"
                        ]
                      },
                      "compareType": ">=",
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (UnusedUnderThisBase_494) || RETURN",
                                "displayLines": "UnusedUnderThisBase_494",
                                "constants": [],
                                "variables": [
                                  "UnusedUnderThisBase_494"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (UnusedUnderThisBase_495) || RETURN",
                                "displayLines": "UnusedUnderThisBase_495",
                                "constants": [],
                                "variables": [
                                  "UnusedUnderThisBase_495"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (UnusedUnderThisBase_496) || RETURN",
                                "displayLines": "UnusedUnderThisBase_496",
                                "constants": [],
                                "variables": [
                                  "UnusedUnderThisBase_496"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (UnusedUnderThisBase_497) || RETURN",
                                "displayLines": "UnusedUnderThisBase_497",
                                "constants": [],
                                "variables": [
                                  "UnusedUnderThisBase_497"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SpeedCalTemp2",
                              "value": {
                                "operator": "Variables[0] (UnusedUnderThisBase_498) || RETURN",
                                "displayLines": "UnusedUnderThisBase_498",
                                "constants": [],
                                "variables": [
                                  "UnusedUnderThisBase_498"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CalCount",
                      "value": {
                        "operator": "Variables[0] (MDF_CalCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_CalCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_CalCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEvent_Elation_00_BaseSpeed",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || Variables[1] (MDF_SpeedCalTemp1) || Variables[2] (MDF_SpeedCalTemp2) || MUL || ADD || RETURN",
                        "displayLines": "(BattleEvent_Elation_00_BaseSpeed + (MDF_SpeedCalTemp1 * MDF_SpeedCalTemp2))",
                        "constants": [],
                        "variables": [
                          "BattleEvent_Elation_00_BaseSpeed",
                          "MDF_SpeedCalTemp1",
                          "MDF_SpeedCalTemp2"
                        ]
                      }
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
                    "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Elation_00_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Elation_00_BaseSpeed"
                    ]
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
                  "variableName": "ElationTime_IsNoConsume",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
              },
              "variableName": "MDF_Elation_Character_Num",
              "livingTargets": true
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
                    "operator": "Variables[0] (MDF_Elation_Character_Num) || Constants[0] (1) || MUL || RETURN",
                    "displayLines": "(MDF_Elation_Character_Num * 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Elation_Character_Num"
                    ]
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
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
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
          "eventTrigger": "Turn [Pre-action Phase]",
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
          "eventTrigger": "Turn [Action-End Phase]",
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
              "target": {
                "name": "Target Name",
                "target": "{{Elation: Elation Entities}}"
              },
              "variableName": "Elation_Character_Num",
              "livingTargets": true
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
                  {
                    "name": "In Aha-Instant"
                  }
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
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Aha Instant is Paused"
              },
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
          "execute": [
            "Unknown EventType1 (Not always an error)",
            "Override Priority Tags (true) [OBJECT WIP]"
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            "Override Priority Tags (false) [OBJECT WIP]",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Player Team with Unselectables and OffField}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "valuePerStack": {
                    "ElationEchoPoint": {
                      "operator": "Variables[0] (AHA_OBJECT_UNUSED__200) || RETURN",
                      "displayLines": "AHA_OBJECT_UNUSED__200",
                      "constants": [],
                      "variables": [
                        "AHA_OBJECT_UNUSED__200"
                      ]
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Player Team with Unselectables and OffField}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "valuePerStack": {
                    "ElationEchoPoint": {
                      "operator": "Variables[0] (Elation_CurrentPoint) || RETURN",
                      "displayLines": "Elation_CurrentPoint",
                      "constants": [],
                      "variables": [
                        "Elation_CurrentPoint"
                      ]
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
          ],
          "priorityLevel": -100
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
          "whenValueChanges": [
            {
              "name": "Declare Custom Variable",
              "propertyType": "BasePoint",
              "variableName": "Elation_CurrentPoint"
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
                    "name": "Battle Event ID",
                    "ID": 70001,
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": [
        "ElationTime_IsNoConsume"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__994071549\">MLevel_Elation_Standard</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
                  },
                  "variableName": "MDF_Elation_Character_Num",
                  "livingTargets": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1644535867\">MLevel_ElationBE_ElationEchoPointBonus_OnEnterBattle</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "valuePerStack": {
                    "ElationEchoPoint": 20
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
                    "operator": "Variables[0] (MDF_Elation_Character_Num) || Constants[0] (1) || MUL || RETURN",
                    "displayLines": "(MDF_Elation_Character_Num * 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Elation_Character_Num"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "minValue": 0,
          "maxValue": 9999,
          "whenValueChanges": [
            {
              "name": "Declare Custom Variable",
              "propertyType": "BasePoint",
              "variableName": "Elation_CurrentPoint"
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}