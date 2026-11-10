const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Dan Heng • Permansor Terrae",
  "trimCharacterName": "DanHengPT",
  "abilityList": [
    "DanHengPT_Modifiers",
    "DanHengPT_LocalPlayer_DanHengPT_BeforeBattleStunListener",
    "DanHengPT_LocalPlayer_StandardAbility_AttackBreak",
    "DanHengPT_LocalPlayer_DanHengPT_TechniqueUsage",
    "DanHengPT_LocalPlayer_DanHengPT_NormalAtk01",
    "DanHengPT_DanHengPT_TechniqueInLevel",
    "DanHengPT_DanHengPT_BE_InsertAttack_Part02",
    "DanHengPT_DanHengPT_PassiveAbility01",
    "DanHengPT_DanHengPT_Ability03_Part02",
    "DanHengPT_DanHengPT_Ability03_Part01",
    "DanHengPT_DanHengPT_Ability03_EnterReady",
    "DanHengPT_DanHengPT_BE_AddShield",
    "DanHengPT_DanHengPT_Ability02_Part02",
    "DanHengPT_DanHengPT_Ability02_Part01",
    "DanHengPT_DanHengPT_Ability01_Part02",
    "DanHengPT_DanHengPT_Ability01_Part01",
    "DanHengPT_Functions",
    "DanHengPT_BE_BattleEvents"
  ],
  "abilityObject": {
    "DanHengPT_Modifiers": {
      "fileName": "DanHengPT_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1571575270\">ADV_StageAbility_Maze_DanHengPT_Empty</a>",
          "counter": 1,
          "stackType": "Replace",
          "onStack": [
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
                  "target": "{{Adventure Player}}"
                }
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": null,
                  "overworldID": 141404
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1258046280\">ADV_StageAbility_Maze_DanHengPT_OnTeamLeaderChange</a>",
          "counter": 1,
          "stackType": "Refresh",
          "onStack": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Adventure Team Members}}"
              },
              "modifier": null,
              "overworldID": 141404
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Adventure Player}}"
              },
              "modifier": null,
              "ID": "141404()"
            }
          ],
          "onChangeTeamLead": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Adventure Team Members}}"
              },
              "modifier": null,
              "overworldID": 141404
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Adventure Player}}"
              },
              "modifier": null,
              "ID": "141404()"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1294472860\">ADV_StageAbility_DanHengPT_BeforeBattleStunListener</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1379733689\">ADV_StageAbility_Maze_DanHengPT_Stun</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "Stun"
          ]
        },
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
                  "value": 0,
                  "variableName": "DanHengPT_ExtraDamageCount"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DanHengPT_ExtraDamageCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
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
                  "value": 1,
                  "variableName": "DanHengPT_IsFreeAction"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue2"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
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
                    "displayLines": "MDF_DanHengPT_InitShieldValue"
                  },
                  "stackLimit": {
                    "displayLines": "(((DanHengPT_Attack * 0.2) + 400) * MDF_MaxShieldRatio)"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "value": {
                    "displayLines": "MDF_DanHengPT_InitShieldValue"
                  },
                  "variableName": "MDF_AchievementCount"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "value": 0,
                  "variableName": "MDF_AchievementCount"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackDelta"
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
                  "conditionList": "Sylvanity",
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
                "displayLines": "(0 - MDF_PointB2_P3_DelayUp)"
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
                  "displayLines": "MDF_Rank04_AllDamageReduceRatio"
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
                  "displayLines": "MDF_Rank06_DefPentRatio"
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
                  "displayLines": "MDF_Rank06_AllDamageTypeTakenRatio"
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
                      "value": 1,
                      "variableName": "_modifyAiTag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "AITag",
                      "value": 1,
                      "variableName": "HadServant"
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
                  "value": 0,
                  "variableName": "DanHengPT_LongLing_Flag"
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
                      "value": 0,
                      "variableName": "_modifyAiTag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "AITag",
                      "value": 0,
                      "variableName": "HadServant"
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
                  "value": 1,
                  "variableName": "DanHengPT_LongLing_Flag"
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
                        "displayLines": "MDF_PointB2_P2_AddSP"
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
                          "displayLines": "MDF_PointB2_P3_DelayUp"
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
                      "value": {
                        "displayLines": "(DanHengPT_Passive_Count - 1)"
                      },
                      "variableName": "DanHengPT_Passive_Count"
                    },
                    {
                      "name": "Show Attack Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "attackCount": {
                        "displayLines": "DanHengPT_Passive_Count"
                      },
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
                          "name": "Show Attack Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "attackCount": 0
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
    "DanHengPT_LocalPlayer_DanHengPT_BeforeBattleStunListener": {
      "fileName": "DanHengPT_LocalPlayer_DanHengPT_BeforeBattleStunListener",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1294472860\">ADV_StageAbility_DanHengPT_BeforeBattleStunListener</a>",
          "counter": -1
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
    "DanHengPT_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "DanHengPT_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
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
    "DanHengPT_LocalPlayer_DanHengPT_TechniqueUsage": {
      "fileName": "DanHengPT_LocalPlayer_DanHengPT_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "141401(SkillMaze)",
              "duration": {
                "displayLines": "10"
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
          "modifier": null,
          "ID": "141402(SkillMaze)"
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "DanHengPT_LocalPlayer_DanHengPT_NormalAtk01": {
      "fileName": "DanHengPT_LocalPlayer_DanHengPT_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ],
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "DanHengPT_DanHengPT_TechniqueInLevel": {
      "fileName": "DanHengPT_DanHengPT_TechniqueInLevel",
      "childAbilityList": [
        "DanHengPT_DanHengPT_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1357770440\">DanHengPT_Maze</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Multiply(by 0 if undefined)"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill02",
                  "forceAction": true,
                  "castTarget": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-636149171\">StageAbility_MazeStandard_EnterBattle_MarkTeamLeader</a>"
                        }
                      }
                    ]
                  },
                  "afterInjection": [],
                  "runsAfterBattleEnd": true
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "DanHengPT_DanHengPT_BE_InsertAttack_Part02": {
      "fileName": "DanHengPT_DanHengPT_BE_InsertAttack_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DanHengPT_IsFreeAction",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{DHPT}}"
                },
                "value1": "DanHengPT_Passive_Count",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{DHPT}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
              "valuePerStack": {
                "MDF_IsStack": 0
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "displayLines": "1"
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "DanHengPT_Stance_All"
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "DanHengPT_Stance_All"
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "DanHengPT_Stance_All"
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "DanHengPT_Stance_All"
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "ReadTargetType",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            },
            "Damage": {
              "displayLines": "Skill03_InsertOwnerDamagePercentage"
            },
            "Toughness": null,
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Additional DMG"
          },
          "overrideDamageOwner": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          },
          "overrideDamageStatSource": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DanHengPT_ExtraDamageCount",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "DanHengPT_LongLing_Flag",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Shield Value",
              "target": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              },
              "variableName": "DanHengPT_ExtraDamageShield"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DanHengPT_ExtraDamageCount - 1)"
              },
              "variableName": "DanHengPT_ExtraDamageCount"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "ReadTargetType",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  }
                },
                "DamageFlat": {
                  "displayLines": "(DanHengPT_ExtraDamageRatio * DanHengPT_ExtraDamageShield)"
                },
                "Toughness": null,
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Additional DMG"
              },
              "overrideDamageOwner": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              },
              "overrideDamageStatSource": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sublimity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]].[[reverse]]"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DanHengPT_LongLing_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Bondmate}}"
                          }
                        },
                        "Damage": {
                          "displayLines": "SkillTree_PointB3_OwnerDamagePercentage"
                        },
                        "Toughness": null,
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Additional DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      },
                      "overrideDamageStatSource": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      }
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
            "value1": "DanHengPT_IsFreeAction",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DanHengPT_IsFreeAction"
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "DanHengPT_DanHengPT_PassiveAbility01": {
      "fileName": "DanHengPT_DanHengPT_PassiveAbility01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_PassiveAbility01",
        "DanHengPT_DanHengPT_BE_InsertAttack_Part02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "AOE Toughness Value"
          },
          "variableName": "DanHengPT_Stance_All"
        },
        {
          "name": "Preload Battle Event(s)",
          "beID": [
            11414
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"3985826\">DanHengPT_Olisten_BE_Create</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"292748857\">DanHengPT_PassiveModifier</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DanHengPT_ExtraShieldUPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DanHengPT_IsFreeAction"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1781840956\">DanHengPT_ExtraListen</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"933382237\">DanHengPT_Eidolon1_Onlisten</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-853961878\">DanHengPT_Eidolon2_Onlisten</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 99,
          "variableName": "DanHengPT_Passive_MaxCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "value": 0.0009999999,
              "variableName": "DamageCarry"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "DanHengPT_Passive_Count"
          },
          "maximum": {
            "displayLines": "DanHengPT_Passive_MaxCount"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.8"
          },
          "variableName": "Skill03_InsertDanHengPTDamagePercentage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.8 * 2)"
              },
              "variableName": "Skill03_InsertOwnerDamagePercentage"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.4 * 2)"
              },
              "variableName": "SkillTree_PointB3_OwnerDamagePercentage"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.8"
              },
              "variableName": "Skill03_InsertOwnerDamagePercentage"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.4"
              },
              "variableName": "SkillTree_PointB3_OwnerDamagePercentage"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__85270413\">DanHengPT_ShieldUPFlag</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{DHPT}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"85270413\">DanHengPT_ShieldUPFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>",
                      "variable": "MDF_ShieldRatio",
                      "target2": null,
                      "variable2": "MDF_ShieldUPRatioTemp",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "MDF_ShieldUPRatioTemp"
                      },
                      "variableName": "DanHengPT_ExtraShieldUPRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1169230\">DanHengPT_ImmediateAction</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Souldragon}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": 1
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__98427049\">DanHengPT_ExtraDamageCount</a>",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-1655562855\">Memosprite_CyreneServant_AmazingBonus_DanHengPT</a>[<span class=\"descriptionNumberColor\">Ode to Earth</span>]"
          },
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DanHengPT_ExtraDamageCount"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
                  "variable": "MDF_DamageRatio",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variable2": "MDF_DamageRatioTemp",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_DamageRatioTemp"
                  },
                  "variableName": "DanHengPT_ExtraDamageRatio"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
                  "variable": "MDF_Count",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variable2": "MDF_DamageCountTemp",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_DamageCountTemp"
                  },
                  "variableName": "DanHengPT_ExtraDamageCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1781840956\">DanHengPT_ExtraListen</a>",
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"98427049\">DanHengPT_ExtraDamageCount</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1866376122\">DanHengPT_LongLingFreeImmediateAction</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"85270413\">DanHengPT_ShieldUPFlag</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__3985826\">DanHengPT_Olisten_BE_Create</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "BattleEvent",
            "entityID": 11414,
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "DanHengPT_LongLing_Flag",
              "compareType": "<",
              "value2": 1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-853961878\">DanHengPT_Eidolon2_Onlisten</a>",
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Souldragon}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          },
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
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
                        "parameter[0]_NormalizedValue": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__933382237\">DanHengPT_Eidolon1_Onlisten</a>",
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "displayLines": "1"
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2035403394\">DanHengPT_Eidolon1</a>[<span class=\"descriptionNumberColor\">Shed Scales of Old</span>]",
                      "duration": {
                        "displayLines": "3"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.18"
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
          "for": "<a class=\"gModGreen\" id=\"mod__292748857\">DanHengPT_PassiveModifier</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Souldragon}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Sylvanity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.4"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DanHengPT_Passive_Count",
              "scope": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "displayLines": "DanHengPT_Passive_MaxCount"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "DanHengPT_Passive_Count"
                      },
                      "priorState": "Active"
                    }
                  ],
                  "leavingRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "DanHengPT_Passive_Count"
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "DanHengPT_Passive_Count"
                      },
                      "priorState": "Active"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "DanHengPT_Attack",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Empyreanity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "DanHengPT_ConvertAttack",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Bondmate}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
                          "valuePerStack": {
                            "MDF_AttackDelta": {
                              "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)"
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
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "DanHengPT_Attack",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Empyreanity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "DanHengPT_ConvertAttack",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Bondmate}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
                          "valuePerStack": {
                            "MDF_AttackDelta": {
                              "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)"
                            }
                          }
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
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "DanHengPT_DanHengPT_Ability03_Part02": {
      "fileName": "DanHengPT_DanHengPT_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "3"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DanHengPT_LongLing_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      }
                    },
                    "Damage": {
                      "displayLines": "3.3"
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Additional DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  },
                  "overrideDamageStatSource": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((DanHengPT_Passive_Count + 2) + 2)"
              },
              "variableName": "DanHengPT_Passive_Count"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DanHengPT_Passive_Count + 2)"
              },
              "variableName": "DanHengPT_Passive_Count"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Show Attack Count",
              "target": {
                "name": "Target Name",
                "target": "{{Souldragon}}"
              },
              "attackCount": {
                "displayLines": "DanHengPT_Passive_Count"
              },
              "show": true
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
          "valuePerStack": {
            "MDF_IsStack": 1
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "DanHengPT_Attack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1942576362\">DanHengPT_Ability03_AddShield</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "DanHengPT_DanHengPT_Ability03_Part01": {
      "fileName": "DanHengPT_DanHengPT_Ability03_Part01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_Ability03_Camera",
        "DanHengPT_DanHengPT_Ability03_EnterReady",
        "DanHengPT_DanHengPT_Ability03_Part01",
        "DanHengPT_DanHengPT_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "DanHengPT_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "DanHengPT_DanHengPT_Ability03_EnterReady": {
      "fileName": "DanHengPT_DanHengPT_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "DanHengPT_DanHengPT_BE_AddShield": {
      "fileName": "DanHengPT_DanHengPT_BE_AddShield",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "DanHengPT_Attack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"124728741\">DanHengPT_BE_AddShield</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "DanHengPT_DanHengPT_Ability02_Part02": {
      "fileName": "DanHengPT_DanHengPT_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
            "invertCondition": true
          },
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DanHengPT_Skill02_Flag"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Empyreanity"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sylvanity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": {
                              "displayLines": "0.15"
                            },
                            "MDF_PointB2_P2_AddSP": {
                              "displayLines": "6"
                            },
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "displayLines": "0.2"
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": {
                              "displayLines": "0.2"
                            },
                            "MDF_Eidolon6_DefPentRatio": {
                              "displayLines": "0.12"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": {
                              "displayLines": "0.15"
                            },
                            "MDF_PointB2_P2_AddSP": {
                              "displayLines": "6"
                            },
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "displayLines": "0.2"
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                            "MDF_Eidolon6_DefPentRatio": 0
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": {
                          "displayLines": "0.15"
                        },
                        "MDF_PointB2_P2_AddSP": {
                          "displayLines": "6"
                        },
                        "MDF_Eidolon4_AllDamageReduceRatio": 0,
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                        "MDF_Eidolon6_DefPentRatio": 0
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": 0,
                            "MDF_PointB2_P2_AddSP": 0,
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "displayLines": "0.2"
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": {
                              "displayLines": "0.2"
                            },
                            "MDF_Eidolon6_DefPentRatio": {
                              "displayLines": "0.12"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": 0,
                            "MDF_PointB2_P2_AddSP": 0,
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "displayLines": "0.2"
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                            "MDF_Eidolon6_DefPentRatio": 0
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": 0,
                        "MDF_PointB2_P2_AddSP": 0,
                        "MDF_Eidolon4_AllDamageReduceRatio": 0,
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                        "MDF_Eidolon6_DefPentRatio": 0
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sylvanity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                  "valuePerStack": {
                    "MDF_PointB2_P3_DelayUp": {
                      "displayLines": "0.15"
                    },
                    "MDF_PointB2_P2_AddSP": {
                      "displayLines": "6"
                    },
                    "MDF_Eidolon4_AllDamageReduceRatio": 0,
                    "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                    "MDF_Eidolon6_DefPentRatio": 0
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                  "valuePerStack": {
                    "MDF_PointB2_P3_DelayUp": 0,
                    "MDF_PointB2_P2_AddSP": 0,
                    "MDF_Eidolon4_AllDamageReduceRatio": 0,
                    "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                    "MDF_Eidolon6_DefPentRatio": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "DanHengPT_Attack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Empyreanity"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "DanHengPT_ConvertAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
              "valuePerStack": {
                "MDF_AttackDelta": {
                  "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DanHengPT_Skill02_Flag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Souldragon}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
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
                          "name": "Change Battle Event Owner",
                          "targetBE": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "targetOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "valuePerStack": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "displayLines": "2"
                            },
                            "MDF_Point03_P1_DamageRatio": {
                              "displayLines": "0.4"
                            },
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Change Battle Event Owner",
                          "targetBE": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "targetOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "valuePerStack": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": {
                              "displayLines": "0.4"
                            },
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                          "name": "Change Battle Event Owner",
                          "targetBE": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "targetOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "valuePerStack": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "displayLines": "2"
                            },
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Change Battle Event Owner",
                          "targetBE": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "targetOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "valuePerStack": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
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
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "displayLines": "2"
                            },
                            "MDF_Point03_P1_DamageRatio": {
                              "displayLines": "0.4"
                            },
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": {
                              "displayLines": "0.4"
                            },
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "displayLines": "2"
                            },
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "displayLines": "1"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "displayLines": "0.8"
                            },
                            "MDF_Stance": {
                              "displayLines": "DanHengPT_Stance_All"
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "displayLines": "1"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DanHengPT_Passive_Count",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Souldragon}}"
                  },
                  "attackCount": {
                    "displayLines": "DanHengPT_Passive_Count"
                  },
                  "show": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DanHengPT_Skill02_Flag"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1290948349\">DanHengPT_AddShield</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
          },
          "passed": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "DanHengPT_DanHengPT_Ability02_Part01": {
      "fileName": "DanHengPT_DanHengPT_Ability02_Part01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_Ability02_Camera",
        "DanHengPT_DanHengPT_Ability02_Camera_End",
        "DanHengPT_DanHengPT_Ability02_Part01",
        "DanHengPT_DanHengPT_Ability02_Part02",
        "DanHengPT_DanHengPT_BE_AddShield"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengPT_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target",
        "allowMemoAllyTarget": "Forbidden"
      }
    },
    "DanHengPT_DanHengPT_Ability01_Part02": {
      "fileName": "DanHengPT_DanHengPT_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.3,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.7,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "DanHengPT_DanHengPT_Ability01_Part01": {
      "fileName": "DanHengPT_DanHengPT_Ability01_Part01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_Ability01_Camera",
        "DanHengPT_DanHengPT_Ability01_Part01",
        "DanHengPT_DanHengPT_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
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
          "ability": "DanHengPT_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "DanHengPT_Functions": {
      "fileName": "DanHengPT_Functions",
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
              "variableName": "DanHengPT_Attack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "displayLines": "((DanHengPT_Attack * 0.2) + 400)"
                },
                "MDF_MaxShieldRatio": {
                  "displayLines": "3"
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
              "variableName": "DanHengPT_Attack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "displayLines": "((DanHengPT_Attack * 0.2) + 400)"
                },
                "MDF_MaxShieldRatio": {
                  "displayLines": "3"
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
              "variableName": "DanHengPT_Attack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_DanHengPT_InitShieldValue": {
                      "displayLines": "((((DanHengPT_Attack * 0.1) + 200) * DanHengPT_ExtraShieldUPRatio) * 2)"
                    },
                    "MDF_MaxShieldRatio": {
                      "displayLines": "3"
                    },
                    "MDF_MainTarget": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "living": true
                          },
                          {
                            "name": "Return Target",
                            "count": 1
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
                            "displayLines": "3"
                          },
                          "valuePerStack": {
                            "MDF_DanHengPT_InitShieldValue": {
                              "displayLines": "((((DanHengPT_Attack * 0.05) + 100) * DanHengPT_ExtraShieldUPRatio) * 2)"
                            },
                            "MDF_MaxShieldRatio": {
                              "displayLines": "3"
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
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_DanHengPT_InitShieldValue": {
                      "displayLines": "(((DanHengPT_Attack * 0.1) + 200) * DanHengPT_ExtraShieldUPRatio)"
                    },
                    "MDF_MaxShieldRatio": {
                      "displayLines": "3"
                    },
                    "MDF_MainTarget": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "living": true
                          },
                          {
                            "name": "Return Target",
                            "count": 1
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
                            "displayLines": "3"
                          },
                          "valuePerStack": {
                            "MDF_DanHengPT_InitShieldValue": {
                              "displayLines": "(((DanHengPT_Attack * 0.05) + 100) * DanHengPT_ExtraShieldUPRatio)"
                            },
                            "MDF_MaxShieldRatio": {
                              "displayLines": "3"
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
              "value": 1,
              "variableName": "DanHengPT_ExtraShieldUPRatio"
            }
          ]
        }
      ],
      "references": []
    },
    "DanHengPT_BE_BattleEvents": {
      "fileName": "DanHengPT_BE_BattleEvents",
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
          "beID": 11414,
          "team": "Player Team",
          "eventType": "Summon",
          "icon": "1414_BE.png",
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;"
            }
          ],
          "spd": 165
        }
      ],
      "references": []
    }
  }
}