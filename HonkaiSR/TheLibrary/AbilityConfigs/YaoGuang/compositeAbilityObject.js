const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Yao Guang",
  "trimCharacterName": "YaoGuang",
  "abilityList": [
    "YaoGuang_Modifiers",
    "YaoGuang_YaoGuang_Trace03",
    "YaoGuang_YaoGuang_Trace02",
    "YaoGuang_YaoGuang_Trace01",
    "YaoGuang_YaoGuang_Eidolon6",
    "YaoGuang_YaoGuang_Eidolon4",
    "YaoGuang_YaoGuang_Eidolon2",
    "YaoGuang_YaoGuang_Eidolon1",
    "YaoGuang_LocalPlayer_YaoGuang_Listener",
    "YaoGuang_LocalPlayer_StandardAbility_AttackBreak",
    "YaoGuang_LocalPlayer_YaoGuang_TechniqueUsage",
    "YaoGuang_LocalPlayer_YaoGuang_NormalAtk01",
    "YaoGuang_YaoGuang_TechniqueInLevel",
    "YaoGuang_YaoGuang_PassiveAbility",
    "YaoGuang_YaoGuang_Ability04_Part02",
    "YaoGuang_YaoGuang_Ability04_Part01",
    "YaoGuang_YaoGuang_Ability03_Part02",
    "YaoGuang_YaoGuang_Ability03_Part01",
    "YaoGuang_YaoGuang_Ability03_EnterReady",
    "YaoGuang_YaoGuang_Ability02_Part02",
    "YaoGuang_YaoGuang_Ability02_Part01",
    "YaoGuang_YaoGuang_Ability01_Part02",
    "YaoGuang_YaoGuang_Ability01_Part01",
    "YaoGuang_Functions"
  ],
  "abilityObject": {
    "YaoGuang_Modifiers": {
      "fileName": "YaoGuang_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-317803134\">ADV_StageAbility_Maze_YaoGuang_Listener</a>",
          "stackType": "Merge",
          "onAttack": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "includeDyingTargets": true,
              "conditions": "Is Entity Type"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1219253589\">ADV_StageAbility_Maze_YaoGuang</a>",
          "counter": 1,
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-986503251\">G_YaoGuang_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">Ferried Along the Astral Arc</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation DMG merrymakes by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Ferried Along the Astral Arc",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">MerryMake</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__113477249\">G_YaoGuang_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">Blind Arrows Guided by Feathers</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "Elation increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1</span> and SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Blind Arrows Guided by Feathers",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.16"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-848491430\">G_YaoGuang_Eidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Chuckle Chimes Where Jade Falls</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation DMG dealt ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Chuckle Chimes Where Jade Falls",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ]
                  },
                  "passed": [
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1523477544\">G_YaoGuang_Trace02_ToNormalAvatars_2</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1048350719\">G_YaoGuang_Trace02_ToNormalAvatars</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}} - {{Elation: Player Team}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1523477544\">G_YaoGuang_Trace02_ToNormalAvatars_2</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1946723610\">G_YaoGuang_Trace02_ToElationAvatars</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__179366080\">G_YaoGuang_Ability04_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Woe's Whisper</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Woe's Whisper",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2059745464\">G_YaoGuang_Ability03_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">Hexagram of Feathered Fortune</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Hexagram of Feathered Fortune",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1266011188\">G_YaoGuang_Ability02_ToMember</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Decalight Unveils All",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_PropertyValue",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 9999999,
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
                      "statValue": {
                        "displayLines": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1968939868\">G_YaoGuang_Ability02_ToSelf</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Decalight Unveils All",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}.[[removeBattleEvents]] - {{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1266011188\">G_YaoGuang_Ability02_ToMember</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue3"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"113477249\">G_YaoGuang_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">Blind Arrows Guided by Feathers</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.12"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "value": 1,
                  "variableName": "BPSkillPriority"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_ElationDamageAddedRatioBase",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_ElationDamageAddedRatioBase * 0.2)"
                  },
                  "variableName": "MDF_PropertyValue3"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue3"
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "_LifeTime",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "_LifeTime"
                  },
                  "variableName": "G_EnergyBar"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "G_EnergyBar"
                  },
                  "assignState": "True",
                  "priorState": "Active"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "value": 0,
                  "variableName": "BPSkillPriority"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "displayLines": "3"
                      },
                      "adjustment": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_ElationDamageAddedRatioBase",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_ElationDamageAddedRatioBase * 0.2)"
                      },
                      "variableName": "MDF_PropertyValue3"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeBattleEvents]] - {{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1266011188\">G_YaoGuang_Ability02_ToMember</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "displayLines": "MDF_PropertyValue3"
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
                      "statValue": {
                        "displayLines": "MDF_PropertyValue3"
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
          "for": "<a class=\"gModGreen\" id=\"mod__953455438\">G_YaoGuang_Passive_ToMember</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "DamageTag_HongBao"
                      },
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_ElationDamageAddedRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_ElationDamageAddedRatio_YG",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_ElationDamageAddedRatio_YG",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "_ElationDamageAddedRatio"
                        }
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;",
                              "value": "(_ElationDamageAddedRatio_YG - _ElationDamageAddedRatio)"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_ElationEchoPoint_YG",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Punchline</span>&nbsp;",
                          "value": "_ElationEchoPoint_YG"
                        },
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">PunchlineToggle</span>&nbsp;",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "MDF_BPCost_Temp"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_BPCost_Temp",
                        "compareType": "<",
                        "value2": 0
                      },
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_BP_Flag"
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "ElationEchoPoint"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}.[[living]]"
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}.[[living]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            "DamageElation": {
                              "displayLines": "MDF_PropertyValue"
                            },
                            "indirectDMG": true,
                            "dmgFormula": "Elation Scaling",
                            "Toughness": null,
                            "instanceTag": "DamageTag_HongBao",
                            "Tags": null,
                            "attackType": "Elation DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "overrideDamageStatSource": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(G_HongBao_Times + 1)"
                          },
                          "variableName": "G_HongBao_Times"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BP_Flag",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}.[[living]]"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "ReadTargetType",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                "DamageElation": {
                                  "displayLines": "MDF_PropertyValue"
                                },
                                "indirectDMG": true,
                                "dmgFormula": "Elation Scaling",
                                "Toughness": null,
                                "instanceTag": "DamageTag_HongBao",
                                "Tags": null,
                                "attackType": "Elation DMG"
                              },
                              "overrideDamageOwner": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "overrideDamageStatSource": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(G_HongBao_Times + 1)"
                              },
                              "variableName": "G_HongBao_Times"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 0,
                      "variableName": "MDF_BP_Flag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_BP_Flag"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "YaoGuang_YaoGuang_Trace03": {
      "fileName": "YaoGuang_YaoGuang_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"993126047\">YaoGuang_Trace03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__993126047\">YaoGuang_Trace03</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "ElationEchoPoint"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "function": "Add",
                      "value": {
                        "displayLines": "1"
                      },
                      "valueType": "Duration"
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
      }
    },
    "YaoGuang_YaoGuang_Trace02": {
      "fileName": "YaoGuang_YaoGuang_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"976348428\">YaoGuang_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__976348428\">YaoGuang_Trace02</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.6"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "displayLines": "1"
                      },
                      "adjustmentType": "+"
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
      }
    },
    "YaoGuang_YaoGuang_Trace01": {
      "fileName": "YaoGuang_YaoGuang_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1286933987\">YaoGuang_Trace01_Effect</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1026681285\">YaoGuang_Trace01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_CurrentSpeed",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CurrentSpeed",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "120"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.3"
                      },
                      "variableName": "_EPRatioBase"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_CurrentSpeedConvert",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)"
                      },
                      "variableName": "_CurrentSpeed"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_CurrentSpeed - 120)"
                      },
                      "variableName": "_OverCountSpeedValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "200"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "200"
                          },
                          "variableName": "_OverCountSpeedValue"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "1"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)"
                          },
                          "variableName": "_EPRatioAdd"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "_EPRatioAdd"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1286933987\">YaoGuang_Trace01_Effect</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(_EPRatioBase + _EPRatioAdd)"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1286933987\">YaoGuang_Trace01_Effect</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
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
      }
    },
    "YaoGuang_YaoGuang_Eidolon6": {
      "fileName": "YaoGuang_YaoGuang_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"696981361\">YaoGuang_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__696981361\">YaoGuang_Eidolon6</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-986503251\">G_YaoGuang_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">Ferried Along the Astral Arc</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.25"
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_YaoGuang_Eidolon4": {
      "fileName": "YaoGuang_YaoGuang_Eidolon4",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_YaoGuang_Eidolon2": {
      "fileName": "YaoGuang_YaoGuang_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_YaoGuang_Eidolon1": {
      "fileName": "YaoGuang_YaoGuang_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"713758980\">YaoGuang_Eidolon1</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(40 - 20)"
          },
          "variableName": "G_Rank01_AddedElationPoint"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__713758980\">YaoGuang_Eidolon1</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-848491430\">G_YaoGuang_Eidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Chuckle Chimes Where Jade Falls</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_LocalPlayer_YaoGuang_Listener": {
      "fileName": "YaoGuang_LocalPlayer_YaoGuang_Listener",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Lineup}}"
          },
          "modifier": null,
          "ID": "150202()",
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
    "YaoGuang_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "YaoGuang_LocalPlayer_StandardAbility_AttackBreak",
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
    "YaoGuang_LocalPlayer_YaoGuang_TechniqueUsage": {
      "fileName": "YaoGuang_LocalPlayer_YaoGuang_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "150201(SkillMaze)"
        },
        "Submit Technique Use"
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_LocalPlayer_YaoGuang_NormalAtk01": {
      "fileName": "YaoGuang_LocalPlayer_YaoGuang_NormalAtk01",
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
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
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
    "YaoGuang_YaoGuang_TechniqueInLevel": {
      "fileName": "YaoGuang_YaoGuang_TechniqueInLevel",
      "childAbilityList": [
        "YaoGuang_YaoGuang_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-645397461\">YaoGuang_TechniqueUsage</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-645397461\">YaoGuang_TechniqueUsage</a>",
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
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_YaoGuang_PassiveAbility": {
      "fileName": "YaoGuang_YaoGuang_PassiveAbility",
      "childAbilityList": [
        "YaoGuang_YaoGuang_PassiveAbility"
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
          "modifier": "<a class=\"gModGreen\" id=\"338049014\">YaoGuang_Passive</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "G_EnergyBar"
          },
          "maximum": {
            "displayLines": "3"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__338049014\">YaoGuang_Passive</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"953455438\">G_YaoGuang_Passive_ToMember</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1968939868\">G_YaoGuang_Ability02_ToSelf</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "G_EnergyBar",
                      "modifierName": "<a class=\"gModGreen\" id=\"1968939868\">G_YaoGuang_Ability02_ToSelf</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "G_EnergyBar"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "G_EnergyBar",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "G_EnergyBar"
                      },
                      "assignState": "True",
                      "priorState": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "assignState": "True",
                      "priorState": "Normal"
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
    "YaoGuang_YaoGuang_Ability04_Part02": {
      "fileName": "YaoGuang_YaoGuang_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"179366080\">G_YaoGuang_Ability04_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Woe's Whisper</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.16"
            }
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageElation": {
                  "displayLines": "(1 * (1 + 1))"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Elation DMG",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "5"
              },
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageElation": {
                          "displayLines": "(0.2 * (1 + 1))"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": {
                          "displayLines": "ST Toughness Value"
                        },
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageElation": {
                  "displayLines": "1"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Elation DMG",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "5"
              },
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageElation": {
                          "displayLines": "0.2"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": {
                          "displayLines": "ST Toughness Value"
                        },
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "YaoGuang_YaoGuang_Ability04_Part01": {
      "fileName": "YaoGuang_YaoGuang_Ability04_Part01",
      "childAbilityList": [
        "YaoGuang_YaoGuang_Ability04_Camera",
        "YaoGuang_YaoGuang_Ability04_Part01",
        "YaoGuang_YaoGuang_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "tag": "InfiniteRefresh",
      "abilityType": "Elation",
      "energy": 5,
      "toughnessList": [
        5,
        20,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "YaoGuang_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "YaoGuang_YaoGuang_Ability03_Part02": {
      "fileName": "YaoGuang_YaoGuang_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2059745464\">G_YaoGuang_Ability03_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">Hexagram of Feathered Fortune</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.2"
            }
          }
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "5"
          },
          "adjustment": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
              "variables": {
                "TryStartElationTime_OverrideElationPoint": {
                  "displayLines": "(20 + G_Rank01_AddedElationPoint)"
                },
                "TryStartElationTime_ElationTimeIsNoConsume": 1
              },
              "dynamicStringsArray": [
                {
                  "name": "TryStartElationTime_CustomTag",
                  "value": "Avatar_YaoGuang_00_Skill03_Phase02"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Aha Instant: Aha Battle Event}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1884075672\">YaoGuang_BE_ModifyDam_ToBE</a>"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
              "variables": {
                "TryStartElationTime_OverrideElationPoint": {
                  "displayLines": "20"
                },
                "TryStartElationTime_ElationTimeIsNoConsume": 1
              },
              "dynamicStringsArray": [
                {
                  "name": "TryStartElationTime_CustomTag",
                  "value": "Avatar_YaoGuang_00_Skill03_Phase02"
                }
              ]
            }
          ]
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1884075672\">YaoGuang_BE_ModifyDam_ToBE</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Anyone]: Hit",
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
                        "name": "Compare: Variable",
                        "value1": "MDF_CanTrigger",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
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
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                              "value": "1.5"
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
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "YaoGuang_Ability03_Part02"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_CanTrigger"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "YaoGuang_Ability03_Part02"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_CanTrigger"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "YaoGuang_Ability03_Part02"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_CanTrigger"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "YaoGuang_Ability03_Part02"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_CanTrigger"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "YaoGuang_YaoGuang_Ability03_Part01": {
      "fileName": "YaoGuang_YaoGuang_Ability03_Part01",
      "childAbilityList": [
        "YaoGuang_YaoGuang_Ability03_Camera",
        "YaoGuang_YaoGuang_Ability03_EnterReady",
        "YaoGuang_YaoGuang_Ability03_Part01",
        "YaoGuang_YaoGuang_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "YaoGuang_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "YaoGuang_YaoGuang_Ability03_EnterReady": {
      "fileName": "YaoGuang_YaoGuang_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_YaoGuang_Ability02_Part02": {
      "fileName": "YaoGuang_YaoGuang_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1968939868\">G_YaoGuang_Ability02_ToSelf</a>[<span class=\"descriptionNumberColor\">Decalight Unveils All</span>]",
          "duration": {
            "displayLines": "3"
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
            "modifier": "<a class=\"gModGreen\" id=\"-645397461\">YaoGuang_TechniqueUsage</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-645397461\">YaoGuang_TechniqueUsage</a>"
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
    "YaoGuang_YaoGuang_Ability02_Part01": {
      "fileName": "YaoGuang_YaoGuang_Ability02_Part01",
      "childAbilityList": [
        "YaoGuang_YaoGuang_Ability02_Camera",
        "YaoGuang_YaoGuang_Ability02_Part01",
        "YaoGuang_YaoGuang_Ability02_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "YaoGuang_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "YaoGuang_YaoGuang_Ability01_Part02": {
      "fileName": "YaoGuang_YaoGuang_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-824591763\">1502_Ability01_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-824591763\">1502_Ability01_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-824591763\">1502_Ability01_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-4095277\">1502_Ability01_Attack_End</a>"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "YaoGuang_YaoGuang_Ability01_Part01": {
      "fileName": "YaoGuang_YaoGuang_Ability01_Part01",
      "childAbilityList": [
        "YaoGuang_YaoGuang_Ability01_Camera",
        "YaoGuang_YaoGuang_Ability01_Part01",
        "YaoGuang_YaoGuang_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "YaoGuang_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "YaoGuang_Functions": {
      "fileName": "YaoGuang_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-824591763\">1502_Ability01_Attack</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.9"
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
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
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.3"
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Define Variable in Range",
              "min": -300,
              "max": 300,
              "variableName": "_DeltaY"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_DeltaY / 1000) + 1.15)"
              },
              "variableName": "_DeltaY"
            },
            {
              "name": "Define Variable in Range",
              "min": -300,
              "max": 300,
              "variableName": "_DeltaY_R"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_DeltaY_R / 1000) + 1.3)"
              },
              "variableName": "_DeltaY_R"
            },
            {
              "name": "Define Variable in Range",
              "min": -300,
              "max": 300,
              "variableName": "_DeltaY_L"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_DeltaY_L / 1000) + 1.1)"
              },
              "variableName": "_DeltaY_L"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-4095277\">1502_Ability01_Attack_End</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.9"
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
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
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.3"
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Define Variable in Range",
              "min": -300,
              "max": 300,
              "variableName": "_DeltaY"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_DeltaY / 1000) + 1.15)"
              },
              "variableName": "_DeltaY"
            },
            {
              "name": "Define Variable in Range",
              "min": -300,
              "max": 300,
              "variableName": "_DeltaY_R"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_DeltaY_R / 1000) + 1.3)"
              },
              "variableName": "_DeltaY_R"
            },
            {
              "name": "Define Variable in Range",
              "min": -300,
              "max": 300,
              "variableName": "_DeltaY_L"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_DeltaY_L / 1000) + 1.1)"
              },
              "variableName": "_DeltaY_L"
            }
          ]
        }
      ],
      "references": []
    }
  }
}