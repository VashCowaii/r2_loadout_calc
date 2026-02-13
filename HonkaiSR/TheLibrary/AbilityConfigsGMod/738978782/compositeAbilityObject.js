const compositeAbilityObject = {
  "fullCharacterName": 738978782,
  "trimCharacterName": 738978782,
  "abilityList": [
    "738978782_Modifiers"
  ],
  "abilityObject": {
    "738978782_Modifiers": {
      "fileName": "738978782_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2049832737\">Enemy_Standard_ChangephaseMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__981190627\">Standard_Monster_Floating_DamageReduce</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageReduce) || RETURN",
                    "displayLines": "MDF_DamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_DamageReduce"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1095699636\">Standard_Monster_Floating_DamageReduceLock</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__766895631\">Standard_Monster_Floating_DamageReduceController</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"981190627\">Standard_Monster_Floating_DamageReduce</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1620966519\">Standard_Monster_CheckDamageReduce_Cal</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1048963995\">Standard_Monster_RefreshDamageReduce</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1620966519\">Standard_Monster_CheckDamageReduce_Cal</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1048963995\">Standard_Monster_RefreshDamageReduce</a>"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1048963995\">Standard_Monster_RefreshDamageReduce</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enemy HP Phased",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastLockHpRatio",
                  "value": 1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1620966519\">Standard_Monster_CheckDamageReduce_Cal</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1048963995\">Standard_Monster_RefreshDamageReduce</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1620966519\">Standard_Monster_CheckDamageReduce_Cal</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1095699636\">Standard_Monster_Floating_DamageReduceLock</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_NextLockHpRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_HpRatio) || Variables[1] (MDF_LockHpActionDecreaseRatio) || SUB || RETURN",
                        "displayLines": "(MDF_HpRatio - MDF_LockHpActionDecreaseRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_HpRatio",
                          "MDF_LockHpActionDecreaseRatio"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_NextLockHpRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_HpRatio) || RETURN",
                        "displayLines": "MDF_HpRatio",
                        "constants": [],
                        "variables": [
                          "MDF_HpRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastLockHpRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_NextLockHpRatio ) || RETURN",
                    "displayLines": "MDF_NextLockHpRatio ",
                    "constants": [],
                    "variables": [
                      "MDF_NextLockHpRatio "
                    ]
                  }
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1048963995\">Standard_Monster_RefreshDamageReduce</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_NextLockHpRatio",
                    "compareType": ">=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_HpRatio"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_NextLockHpRatio ) || Variables[1] (MDF_LockHpUpLimitRatio) || ADD || RETURN",
                          "displayLines": "(MDF_NextLockHpRatio  + MDF_LockHpUpLimitRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_NextLockHpRatio ",
                            "MDF_LockHpUpLimitRatio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"981190627\">Standard_Monster_Floating_DamageReduce</a>",
                          "valuePerStack": {
                            "MDF_DamageReduce": {
                              "operator": "Constants[0] (1) || Variables[0] (MDF_LastLockHpRatio) || Variables[1] (MDF_NextLockHpRatio ) || SUB || Variables[2] (MDF_LockHpUpLimitRatio) || DIV || SUB || Variables[3] (MDF_DamageReduceRatio) || MUL || RETURN",
                              "displayLines": "((1 - ((MDF_LastLockHpRatio - MDF_NextLockHpRatio ) / MDF_LockHpUpLimitRatio)) * MDF_DamageReduceRatio)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MDF_LastLockHpRatio",
                                "MDF_NextLockHpRatio ",
                                "MDF_LockHpUpLimitRatio",
                                "MDF_DamageReduceRatio"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"981190627\">Standard_Monster_Floating_DamageReduce</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"981190627\">Standard_Monster_Floating_DamageReduce</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1003024550\">Standard_LockActionDelayChange</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1187511334\">Standard_MuteSpeed</a>",
          "modifierFlags": [
            "MuteSpeed"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1856806253\">Standard_MuteAttachWeakness</a>",
          "modifierFlags": [
            "MuteAttachWeakness"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ],
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 403501,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 403501,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true,
                            "invertCondition": true
                          }
                        ]
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "DMG Mitigation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2083575949\">Standard_AllDamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__773711749\">Standard_FastAction_Action</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1796235183\">Standard_FastAction_Part1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_CurrentTurnsLeft",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (_FastAction_Turns) || RETURN",
                          "displayLines": "_FastAction_Turns",
                          "constants": [],
                          "variables": [
                            "_FastAction_Turns"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_FastAction_Turns",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"773711749\">Standard_FastAction_Action</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1040166694\">Standard_FastAction_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"773711749\">Standard_FastAction_Action</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"773711749\">Standard_FastAction_Action</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": "-100",
                          "changeVersion": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": "-100",
                          "changeVersion": true
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1796235183\">Standard_FastAction_Part1</a>",
                          "valuePerStack": {
                            "_FastAction_Turns": -1,
                            "_CurrentTurnsLeft": 0
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Storm Quells",
                      "desc": "Inflict Weakness Break on an enemy in the \"Stormride\" state",
                      "rarity": "Low"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "Targets affected by \"Stormride\" will immediately take action after the turn ends. Turns triggered by \"Stormride\" cannot be triggered again. This effect is dispelled after being inflicted with Weakness Break.",
          "type": "Buff",
          "effectName": "Stormride",
          "statusName": "Stormride"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
          "counter": 1,
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"773711749\">Standard_FastAction_Action</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"773711749\">Standard_FastAction_Action</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": "-100",
                          "changeVersion": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": "-100",
                          "changeVersion": true
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_CurrentTurnsLeft",
                          "value": 1,
                          "max": {
                            "operator": "Variables[0] (Standard_FastAction) || RETURN",
                            "displayLines": "Standard_FastAction",
                            "constants": [],
                            "variables": [
                              "Standard_FastAction"
                            ]
                          }
                        },
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
                          "value": {
                            "operator": "Variables[0] (Standard_FastAction) || Variables[1] (MDF_CurrentTurnsLeft) || SUB || RETURN",
                            "displayLines": "(Standard_FastAction - MDF_CurrentTurnsLeft)",
                            "constants": [],
                            "variables": [
                              "Standard_FastAction",
                              "MDF_CurrentTurnsLeft"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1796235183\">Standard_FastAction_Part1</a>",
                          "valuePerStack": {
                            "_FastAction_Turns": {
                              "operator": "Variables[0] (Standard_FastAction) || RETURN",
                              "displayLines": "Standard_FastAction",
                              "constants": [],
                              "variables": [
                                "Standard_FastAction"
                              ]
                            },
                            "_CurrentTurnsLeft": {
                              "operator": "Variables[0] (MDF_CurrentTurnsLeft) || RETURN",
                              "displayLines": "MDF_CurrentTurnsLeft",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentTurnsLeft"
                              ]
                            }
                          }
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
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
                  "value": {
                    "operator": "Variables[0] (Standard_FastAction) || Variables[1] (MDF_CurrentTurnsLeft) || SUB || RETURN",
                    "displayLines": "(Standard_FastAction - MDF_CurrentTurnsLeft)",
                    "constants": [],
                    "variables": [
                      "Standard_FastAction",
                      "MDF_CurrentTurnsLeft"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040166694\">Standard_FastAction_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Storm Quells",
                      "desc": "Inflict Weakness Break on an enemy in the \"Stormride\" state",
                      "rarity": "Low"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "Consuming 1 stack of \"Stormride\" can cause the target to immediately take action at the end of the turn. This effect cannot be triggered in the turn triggered by the effect of \"Stormride.\" This state is dispelled after becoming Weakness Broken.",
          "type": "Buff",
          "effectName": "Stormride",
          "statusName": "Stormride"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
          "modifierFlags": [
            "STAT_SuperArmorBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DMG taken increases. This effect is removed and DMG taken decreases when this unit recovers from being Weakness Broken.",
          "type": "Other",
          "effectName": "Safeguard Broken",
          "statusName": "Safeguard Broken"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
                        ]
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                    "displayLines": "MDF_AllDamageTypeResistance",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeResistance"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG taken decreases. This effect is removed when Weakness is Broken. This unit's action will be delayed further when it is Weakness Broken and also takes increased DMG.",
          "type": "Other",
          "effectName": "Safeguard",
          "statusName": "Safeguard"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__532367944\">Standard_SuperArmorController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                      "displayLines": "MDF_SuperArmorDamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorDamageResistance"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_SuperArmorBreakActionDelay"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_SuperArmorBreakDamageTakenRatio) || RETURN",
                      "displayLines": "MDF_SuperArmorBreakDamageTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorBreakDamageTakenRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                      "displayLines": "MDF_SuperArmorDamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorDamageResistance"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2068031350\">Monster_RogueBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Berserk",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1542717021\">Monster_RogueBoss</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Variable with Cumulative Delay",
                  "variableName": "Rogue_Rage_Dalay"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rogue_Rage_Dalay",
                    "compareType": ">=",
                    "value2": 320
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2068031350\">Monster_RogueBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": 0.4
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2140377444\">Monster_RogueElite_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Berserk",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1381820489\">Monster_RogueElite</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Variable with Cumulative Delay",
                  "variableName": "Rogue_Rage_Dalay"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rogue_Rage_Dalay",
                    "compareType": ">=",
                    "value2": 200
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2140377444\">Monster_RogueElite_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": 0.4
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1526690424\">Monster_Standard_Strange</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "description": "Missing Description",
          "type": "Other"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-91116970\">Monster_Standard_Enhance</a>[<span class=\"descriptionNumberColor\">Enhance</span>]",
          "description": "The false projection produced by compromised codes receives a massive boost in combat strength.",
          "type": "Other",
          "statusName": "Enhance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1019940220\">Enemy_Standard_HideMonsterHUD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1166907060\">Enemy_Standard_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-561802374\">NoWeakAndResistance</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__70226604\">Monster_Blood_Link_Stun</a>",
          "stackType": "Merge",
          "modifierFlags": [
            "DisableAction",
            "IdleStun",
            "STAT_CTRL_Stun",
            "STAT_CTRL"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1554000099\">Monster_Blood_Link_Revive</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (_MaxHP) || Constants[0] (0.3) || MUL || RETURN",
                    "displayLines": "(_MaxHP * 0.3)",
                    "constants": [
                      0.3
                    ],
                    "variables": [
                      "_MaxHP"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"70226604\">Monster_Blood_Link_Stun</a>"
                }
              ]
            }
          ],
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1410232630\">Monster_Blood_Link_Group1</a>",
          "modifierFlags": [
            "BloodLink"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "HP-Share Group is Dead"
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_Blood_Link_Group1_Insert"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_Blood_Link_Group1_Insert",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1554000099\">Monster_Blood_Link_Revive</a>",
                      "counter": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"70226604\">Monster_Blood_Link_Stun</a>",
                      "counter": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-696028198\">Enemy_Mecha_BlockDamage</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
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
          "description": "Nullifies all DMG received except for DoT until after being attacked.",
          "type": "Buff",
          "effectName": "Barrier",
          "statusName": "Barrier"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__740710426\">Monster_Standard_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-958879550\">Monster_Standard_SpeedRatioDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Decreases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Slow"
        }
      ],
      "references": []
    }
  }
}