const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 11414,
  "trimCharacterName": 11414,
  "abilityList": [
    "11414_Modifiers",
    "11414_DanHengPT_BE_InsertShield_Part02",
    "11414_DanHengPT_BE_InsertShield_Part01",
    "11414_DanHengPT_BE_InsertAttack_Part01",
    "11414_DanHengPT_BE_PassiveAbility",
    "11414_Functions"
  ],
  "abilityObject": {
    "11414_Modifiers": {
      "fileName": "11414_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__297054432\">DanHengPT_LongLingExtraShield</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "scope": "TargetEntity",
                  "variableName": "DanHengPT_ExtraDamageCount",
                  "value": 0
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DanHengPT_ExtraDamageCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable": "DanHengPT_ExtraDamageCount",
                      "target2": null,
                      "variable2": "MDF_DanHengPT_ExtraDamageCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DanHengPT_ExtraDamageCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
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
          "for": "<a class=\"gModGreen\" id=\"mod__1866376122\">DanHengPT_LongLingFreeImmediateAction</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
                  "valuePerStack": {
                    "MDF_IsStack": 1
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DanHengPT_IsFreeAction",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1169230\">DanHengPT_ImmediateAction</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1272476867\">DanHengPT_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the enemy target's DEF.",
          "type": "Buff",
          "statusName": "One Dream to Enfold All Wilds",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1040309000\">DanHengPT_Eidolon6_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "One Dream to Enfold All Wilds",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1985070537\">DanHengPT_Eidolon4</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-452137321\">DanHengPT_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">By Oath, This Vessel Is I</span>]",
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "By Oath, This Vessel Is I",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2035403394\">DanHengPT_Eidolon1</a>[<span class=\"descriptionNumberColor\">Shed Scales of Old</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Shed Scales of Old",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Shield"
          ],
          "description": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Stack Shield",
                  "stackValue": {
                    "operator": "Variables[0] (MDF_DanHengPT_InitShieldValue) || RETURN",
                    "displayLines": "MDF_DanHengPT_InitShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_DanHengPT_InitShieldValue"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4602) || MUL || Variables[2] (UnusedUnderThisBase_4592) || ADD || Variables[3] (MDF_MaxShieldRatio) || MUL || RETURN",
                    "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4602) + UnusedUnderThisBase_4592) * MDF_MaxShieldRatio)",
                    "constants": [],
                    "variables": [
                      "DanHengPT_Attack",
                      "UnusedUnderThisBase_4602",
                      "UnusedUnderThisBase_4592",
                      "MDF_MaxShieldRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_AchievementCount",
                  "value": {
                    "operator": "Variables[0] (MDF_DanHengPT_InitShieldValue) || RETURN",
                    "displayLines": "MDF_DanHengPT_InitShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_DanHengPT_InitShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_AchievementCount",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Empyreanity",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                    "displayLines": "MDF_AttackDelta",
                    "constants": [],
                    "variables": [
                      "MDF_AttackDelta"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "\"Souldragon\" holder.",
          "type": "Other",
          "effectName": "Becomes the Bondmate",
          "statusName": "Bondmate",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Souldragon}}"
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Attack Source}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Action is an Attack",
                  "useActiveAbility": true
                },
                {
                  "name": "Trace Activated",
                  "conditionList": "PointB2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  }
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PointB2_P3_DelayUp) || SUB || RETURN",
                "displayLines": "(0 - MDF_PointB2_P3_DelayUp)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PointB2_P3_DelayUp"
                ]
              }
            }
          },
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452137321\">DanHengPT_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">By Oath, This Vessel Is I</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank04_AllDamageReduceRatio",
                "compareType": ">",
                "value2": 0
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Rank04_AllDamageReduceRatio) || RETURN",
                  "displayLines": "MDF_Rank04_AllDamageReduceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Rank04_AllDamageReduceRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1272476867\">DanHengPT_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank06_DefPentRatio",
                "compareType": ">",
                "value2": 0
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Rank06_DefPentRatio) || RETURN",
                  "displayLines": "MDF_Rank06_DefPentRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Rank06_DefPentRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1040309000\">DanHengPT_Eidolon6_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank06_AllDamageTypeTakenRatio",
                "compareType": ">",
                "value2": 0
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Rank06_AllDamageTypeTakenRatio) || RETURN",
                  "displayLines": "MDF_Rank06_AllDamageTypeTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Rank06_AllDamageTypeTakenRatio"
                  ]
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HadServant",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "AITag"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_modifyAiTag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "AITag",
                      "variableName": "HadServant",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variableName": "DanHengPT_LongLing_Flag",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_modifyAiTag",
                    "compareType": "=",
                    "value2": 0,
                    "invertCondition": true,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_modifyAiTag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "AITag",
                      "variableName": "HadServant",
                      "value": 0
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variableName": "DanHengPT_LongLing_Flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PointB2_P2_AddSP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_PointB2_P2_AddSP) || RETURN",
                        "displayLines": "MDF_PointB2_P2_AddSP",
                        "constants": [],
                        "variables": [
                          "MDF_PointB2_P2_AddSP"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PointB2_P3_DelayUp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": {
                          "operator": "Variables[0] (MDF_PointB2_P3_DelayUp) || RETURN",
                          "displayLines": "MDF_PointB2_P3_DelayUp",
                          "constants": [],
                          "variables": [
                            "MDF_PointB2_P3_DelayUp"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1300423082\">DanHengPT_BoostEnergy</a>",
          "stackType": "Replace",
          "stackData": [
            "MDF_IsStack"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsStack",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "DanHengPT_Passive_Count",
                      "value": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(DanHengPT_Passive_Count - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      }
                    },
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                        "displayLines": "DanHengPT_Passive_Count",
                        "constants": [],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      },
                      "on": null,
                      "show": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DanHengPT_Passive_Count",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
                            }
                          ]
                        },
                        "Modifier Deletes Itself",
                        {
                          "name": "Show Attack Time",
                          "time": 0,
                          "on": null,
                          "show": false
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
    "11414_DanHengPT_BE_InsertShield_Part02": {
      "fileName": "11414_DanHengPT_BE_InsertShield_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (MDF_DisperseNum) || RETURN",
            "displayLines": "MDF_DisperseNum",
            "constants": [],
            "variables": [
              "MDF_DisperseNum"
            ]
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{DHPT}}"
          },
          "ability": "DanHengPT_BE_AddShield"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11414_DanHengPT_BE_InsertShield_Part01": {
      "fileName": "11414_DanHengPT_BE_InsertShield_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "DanHengPT_BE_InsertShield_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11414_DanHengPT_BE_InsertAttack_Part01": {
      "fileName": "11414_DanHengPT_BE_InsertAttack_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Of Virtue, Forms Unfold"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{DHPT}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "DanHengPT_BE_InsertAttack_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11414_DanHengPT_BE_PassiveAbility": {
      "fileName": "11414_DanHengPT_BE_PassiveAbility",
      "childAbilityList": [
        "11414_DanHengPT_BE_PassiveAbility",
        "11414_DanHengPT_BE_InsertAttack_Part01",
        "11414_DanHengPT_BE_InsertAttack_Camera",
        "11414_DanHengPT_BE_InsertShield_Part01",
        "11414_DanHengPT_BE_InsertShield_Part02",
        "11414_DanHengPT_BE_InsertShield_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-516529797\">DanHengPT_BEModifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-516529797\">DanHengPT_BEModifier</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{DHPT}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "DanHengPT_BE_InsertAttack_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Mask_AliveOrRevivable",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "DanHengPT_BE_InsertShield_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "priorityTag": "CharacterBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Event Owner Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>"
                    },
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "Standard_Departed"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagNames": [
                        "STAT_SheepStatus_SummonObjects"
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"40667951\">Enemy_W2_LycanKing_IF_DisableActionEndMark</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11414_Functions": {
      "fileName": "11414_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1290948349\">DanHengPT_AddShield</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_13147) || RETURN",
                "displayLines": "UnusedUnderThisBase_13147",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_13147"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4602) || MUL || Variables[2] (UnusedUnderThisBase_4592) || ADD || RETURN",
                  "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_4602) + UnusedUnderThisBase_4592)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_4602",
                    "UnusedUnderThisBase_4592"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4604",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4604"
                  ]
                },
                "MDF_MainTarget": 1
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1942576362\">DanHengPT_Ability03_AddShield</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_5541) || RETURN",
                "displayLines": "UnusedUnderThisBase_5541",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_5541"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4607) || MUL || Variables[2] (UnusedUnderThisBase_4608) || ADD || RETURN",
                  "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_4607) + UnusedUnderThisBase_4608)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_4607",
                    "UnusedUnderThisBase_4608"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4604",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4604"
                  ]
                },
                "MDF_MainTarget": 1
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__124728741\">DanHengPT_BE_AddShield</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
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
                        "name": "Compare: Variable",
                        "value1": "DanHengPT_Passive_Count",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "#SkillRank_Rank02_P3_ShieldRatio",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DanHengPT_IsFreeAction",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "#SkillRank_Rank02_P3_ShieldRatio",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                    "displayLines": "UnusedUnderThisBase_6051",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_6051"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DanHengPT_InitShieldValue": {
                      "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4588) || MUL || Variables[2] (UnusedUnderThisBase_4584) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5365) || MUL || RETURN",
                      "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_4588) + UnusedUnderThisBase_4584) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5365)",
                      "constants": [],
                      "variables": [
                        "DanHengPT_Attack",
                        "UnusedUnderThisBase_4588",
                        "UnusedUnderThisBase_4584",
                        "DanHengPT_ExtraShieldUPRatio",
                        "UnusedUnderThisBase_5365"
                      ]
                    },
                    "MDF_MaxShieldRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                      "displayLines": "UnusedUnderThisBase_4604",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_4604"
                      ]
                    },
                    "MDF_MainTarget": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "PointB3"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "living": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                          "duration": {
                            "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                            "displayLines": "UnusedUnderThisBase_6051",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_6051"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DanHengPT_InitShieldValue": {
                              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4586) || MUL || Variables[2] (UnusedUnderThisBase_4614) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5365) || MUL || RETURN",
                              "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_4586) + UnusedUnderThisBase_4614) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5365)",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Attack",
                                "UnusedUnderThisBase_4586",
                                "UnusedUnderThisBase_4614",
                                "DanHengPT_ExtraShieldUPRatio",
                                "UnusedUnderThisBase_5365"
                              ]
                            },
                            "MDF_MaxShieldRatio": {
                              "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                              "displayLines": "UnusedUnderThisBase_4604",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_4604"
                              ]
                            },
                            "MDF_MainTarget": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                    "displayLines": "UnusedUnderThisBase_6051",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_6051"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DanHengPT_InitShieldValue": {
                      "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4588) || MUL || Variables[2] (UnusedUnderThisBase_4584) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                      "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4588) + UnusedUnderThisBase_4584) * DanHengPT_ExtraShieldUPRatio)",
                      "constants": [],
                      "variables": [
                        "DanHengPT_Attack",
                        "UnusedUnderThisBase_4588",
                        "UnusedUnderThisBase_4584",
                        "DanHengPT_ExtraShieldUPRatio"
                      ]
                    },
                    "MDF_MaxShieldRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                      "displayLines": "UnusedUnderThisBase_4604",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_4604"
                      ]
                    },
                    "MDF_MainTarget": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "PointB3"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "living": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                          "duration": {
                            "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                            "displayLines": "UnusedUnderThisBase_6051",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_6051"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DanHengPT_InitShieldValue": {
                              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4586) || MUL || Variables[2] (UnusedUnderThisBase_4614) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                              "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4586) + UnusedUnderThisBase_4614) * DanHengPT_ExtraShieldUPRatio)",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Attack",
                                "UnusedUnderThisBase_4586",
                                "UnusedUnderThisBase_4614",
                                "DanHengPT_ExtraShieldUPRatio"
                              ]
                            },
                            "MDF_MaxShieldRatio": {
                              "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                              "displayLines": "UnusedUnderThisBase_4604",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_4604"
                              ]
                            },
                            "MDF_MainTarget": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_ExtraShieldUPRatio",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill01": {
      "skillID": 1141401,
      "trigger": "Skill01",
      "name": "",
      "type": "Single Target",
      "slot": "Basic ATK",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          1.1
        ]
      },
      "element": "Physical",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [],
      "toughnessList": [
        0,
        60,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 1141404,
      "trigger": "SkillP01",
      "name": "",
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
          1.1
        ]
      },
      "attackType": "Normal",
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_DanHengPT_00_BE_PassiveSkill",
        "Avatar_DanHengPT_00_BE_InsertAttack_Phase01",
        "Avatar_DanHengPT_00_BE_InsertAttack_Camera",
        "Avatar_DanHengPT_00_BE_InsertShield_Phase01",
        "Avatar_DanHengPT_00_BE_InsertShield_Phase02",
        "Avatar_DanHengPT_00_BE_InsertShield_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}