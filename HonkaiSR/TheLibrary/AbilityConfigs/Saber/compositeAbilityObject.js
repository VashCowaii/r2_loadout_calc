const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Saber",
  "trimCharacterName": "Saber",
  "abilityList": [
    "Saber_Modifiers",
    "Saber_LocalPlayer_StandardAbility_AttackBreak",
    "Saber_LocalPlayer_Saber_TechniqueUsage",
    "Saber_LocalPlayer_Saber_NormalAtk01",
    "Saber_Saber_TechniqueInLevel",
    "Saber_Gilgamesh_Insert_Part02_Saber",
    "Saber_Saber_PassiveAbility01",
    "Saber_Saber_Ability11_Part02",
    "Saber_Saber_Ability11_Part01",
    "Saber_Saber_Ability03_EnterReady",
    "Saber_Saber_Ability03_Part02",
    "Saber_Saber_Ability03_Part01",
    "Saber_Saber_Ability02_Part02",
    "Saber_Saber_Ability02_Part01",
    "Saber_Saber_Ability01_Part02",
    "Saber_Saber_Ability01_Part01",
    "Saber_Functions"
  ],
  "abilityObject": {
    "Saber_Modifiers": {
      "fileName": "Saber_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-926077383\">ADV_StageAbility_Maze_Saber</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1696185898\">Gilgamesh_InsertCheckSelf</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1788518149\">Gilgamesh_InsertRetargetSelf</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1788518149\">Gilgamesh_InsertRetargetSelf</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1788518149\">Gilgamesh_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1788518149\">Gilgamesh_InsertRetargetSelf</a>"
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1788518149\">Gilgamesh_InsertRetargetSelf</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1788518149\">Gilgamesh_InsertRetargetSelf</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": 148,
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Gilgamesh: Saber}}"
                                },
                                "flagName": 148,
                                "invertCondition": true
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": 148
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Gilgamesh: Saber}}"
                                },
                                "flagName": 148
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Gilgamesh: Saber}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Gilgamesh: Saber}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Gilgamesh: Saber}}"
                        }
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Saber_Chain",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7385) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7385",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7385"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
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
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "flagName": 148,
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Gilgamesh: Saber}}"
                                        },
                                        "flagName": 148,
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "flagName": 148
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Gilgamesh: Saber}}"
                                        },
                                        "flagName": 148
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "DisableAction",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Gilgamesh: Saber}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Gilgamesh: Saber}}"
                                },
                                "flagName": "DisableAction",
                                "invertCondition": true
                              },
                              {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Gilgamesh: Saber}}"
                                }
                              }
                            ]
                          },
                          "abilityName": "Gilgamesh_Insert_SelectTargetSelf",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1870483126\">Gilgamesh_Eidolon6_TeamBonus</a>[<span class=\"descriptionNumberColor\">Soul That Bore Friendship</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypePenetrate</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Soul That Bore Friendship",
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
                    "operator": "Variables[0] (MDF_AllDamageTypePenetrateAll) || RETURN",
                    "displayLines": "MDF_AllDamageTypePenetrateAll",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypePenetrateAll"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-474529239\">Gilgamesh_Eidolon6_GoldenRule2</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Ultimate"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "(MDF_GoldenRule * UnusedUnderThisBase_7388)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__625310839\">Gilgamesh_Passive_Eidolon6_GoldenRule</a>[<span class=\"descriptionNumberColor\">Golden Rule</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "description": "<span class=\"descriptionNumberColor\">Gilgamesh_00_Rank06_GoldenRule</span> points of \"Golden Rule\" accumulated. When using Ultimate, consumes all \"Golden Rule,\" with each point of \"Golden Rule\" consumed increasing the CRIT DMG for the Ultimate DMG dealt by <span class=\"descriptionNumberColor\">#SkillRank_Rank06_P4_CriticalDamageRatio</span>.",
          "type": "Other",
          "statusName": "Golden Rule",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Propertyvalue",
                  "value": {
                    "operator": "Variables[0] (Gilgamesh_00_Rank06_GoldenRule) || Variables[1] (UnusedUnderThisBase_7388) || MUL || RETURN",
                    "displayLines": "(Gilgamesh_00_Rank06_GoldenRule * UnusedUnderThisBase_7388)",
                    "constants": [],
                    "variables": [
                      "Gilgamesh_00_Rank06_GoldenRule",
                      "UnusedUnderThisBase_7388"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__453870700\">Gilgamesh_Eidolon6_TeamBonusHalo</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1870483126\">Gilgamesh_Eidolon6_TeamBonus</a>[<span class=\"descriptionNumberColor\">Soul That Bore Friendship</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_AllDamageTypePenetrate": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1829951035\">Gilgamesh_Eidolon4_SP</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-945682048\">Gilgamesh_Eidolon1_Happy</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "tag": "ActiveSkillAdd"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1962859860\">Gilgamesh_ChainBonus</a>[<span class=\"descriptionNumberColor\">Hegemon's Strife</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddedFinal</span> and CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CriticalDamageBaseFinal</span>.",
          "type": "Buff",
          "statusName": "Hegemon's Strife",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-793216758\">Gilgamesh_Tree03_RefreshAura</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-793216758\">Gilgamesh_Tree03_RefreshAura</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ExtraRatio",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (MAX) || Variables[2] (MDF_MaxSP) || Variables[3] (MDF_MaxSPThreshold) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || Variables[4] (MDF_ExtraRatioPerMaxSP) || MUL || Variables[5] (MDF_MaxExtraRatio) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((MDF_MaxSP - MDF_MaxSPThreshold), 0) * MDF_ExtraRatioPerMaxSP), MDF_MaxExtraRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MIN",
                      "MAX",
                      "MDF_MaxSP",
                      "MDF_MaxSPThreshold",
                      "MDF_ExtraRatioPerMaxSP",
                      "MDF_MaxExtraRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackAddedFinal",
                  "value": {
                    "operator": "Variables[0] (MDF_BaseAttackAdded) || Variables[1] (MDF_ExtraRatio) || ADD || RETURN",
                    "displayLines": "(MDF_BaseAttackAdded + MDF_ExtraRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_BaseAttackAdded",
                      "MDF_ExtraRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CriticalDamageBaseFinal",
                  "value": {
                    "operator": "Variables[0] (MDF_BaseCriticalDamageBaseAdd) || Variables[1] (MDF_ExtraRatio) || ADD || RETURN",
                    "displayLines": "(MDF_BaseCriticalDamageBaseAdd + MDF_ExtraRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_BaseCriticalDamageBaseAdd",
                      "MDF_ExtraRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedFinal) || RETURN",
                    "displayLines": "MDF_AttackAddedFinal",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedFinal"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalDamageBaseFinal) || RETURN",
                    "displayLines": "MDF_CriticalDamageBaseFinal",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalDamageBaseFinal"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-793216758\">Gilgamesh_Tree03_RefreshAura</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1614707955\">Gilgamesh_Tree03</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1962859860\">Gilgamesh_ChainBonus</a>[<span class=\"descriptionNumberColor\">Hegemon's Strife</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_BaseAttackAdded": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7389) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7389",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7389"
                  ]
                },
                "MDF_BaseCriticalDamageBaseAdd": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7410) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7410",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7410"
                  ]
                },
                "MDF_MaxSPThreshold": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7395) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7395",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7395"
                  ]
                },
                "MDF_ExtraRatioPerMaxSP": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7375) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7375",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7375"
                  ]
                },
                "MDF_MaxExtraRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7386) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7386",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7386"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__481485752\">Gilgamesh_TreeBonus2</a>[<span class=\"descriptionNumberColor\">Hero's Hauteur</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases this unit's CRIT DMG by <span class=\"descriptionNumberColor\">#SkillTree_PointB2_P1_DamageAddedRatio</span>, stacking up to <span class=\"descriptionNumberColor\">#SkillTree_PointB2_P2_DamageAddedlayer</span> times.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Hero's Hauteur",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_DamageAddedlayer",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
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
                    "operator": "Variables[0] (SkillTree_DamageAddedlayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(SkillTree_DamageAddedlayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "SkillTree_DamageAddedlayer",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1631485574\">Gilgamesh_Tree02</a>",
          "stackType": "ReplaceByCaster",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Avatar_Gilgamesh_00_KingCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_KingChangeValue",
                      "type": "RawDelta"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_KingChangeValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"481485752\">Gilgamesh_TreeBonus2</a>[<span class=\"descriptionNumberColor\">Hero's Hauteur</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (UnusedUnderThisBase_7387) || RETURN",
                            "displayLines": "UnusedUnderThisBase_7387",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_7387"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageBaseAdd": {
                              "operator": "Variables[0] (UnusedUnderThisBase_7409) || RETURN",
                              "displayLines": "UnusedUnderThisBase_7409",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_7409"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_KingChangeValue) || RETURN",
                            "displayLines": "_KingChangeValue",
                            "constants": [],
                            "variables": [
                              "_KingChangeValue"
                            ]
                          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1321100767\">Gilgamesh_UltraSPListener</a>",
          "execute": [
            {
              "eventTrigger": "Ability Cost Deduction [Owner]: Start[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IsUltraSkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IsUltraSkill",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SPChange",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IsUltraSkill",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "MDF_TempSPChange"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Array Condition",
                            "arrayToCheck": [
                              "ByUseSkill"
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_TempSPChange",
                            "compareType": "<",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                            "compareType": ">",
                            "value2": 0,
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "IsUltraSkill",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SPChange",
                          "value": {
                            "operator": "Variables[0] (MDF_TempSPChange) || INVERT || RETURN",
                            "displayLines": "-MDF_TempSPChange",
                            "constants": [],
                            "variables": [
                              "MDF_TempSPChange"
                            ]
                          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1648263193\">Gilgamesh_Tree01</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1321100767\">Gilgamesh_UltraSPListener</a>",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1386615506\">Technique_Gilgamesh_Modifier</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Technique Modifies Current Wave"
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7406) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7406",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7406"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
                      "variables": {
                        "KingCountAdd": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7394) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7394",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7394"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1950581135\">Gilgamesh_SaberinTeam</a>[<span class=\"descriptionNumberColor\">\"I Grant You Permission To Strike\"</span>]",
          "description": "Gilgamesh and Saber have currently launched attacks a total of <span class=\"descriptionNumberColor\">Saber_Chain</span>/<span class=\"descriptionNumberColor\">#SkillP02_P5_GilgameshChain</span> time(s).",
          "type": "Other",
          "statusName": "\"I Grant You Permission To Strike\"",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Saber_Chain",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (UnusedUnderThisBase_7385) || RETURN",
                    "displayLines": "UnusedUnderThisBase_7385",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_7385"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Saber_Chain",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7385) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7385",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7385"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-405354814\">Gilgamesh_SaberUltraBonus2</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                      "value": "MDF_PropertyRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1274159292\">Gilgamesh_SaberUltraBonus</a>[<span class=\"descriptionNumberColor\">\"I Grant You Permission To Strike\"</span>]",
          "description": "The next time Saber uses Ultimate, the DMG dealt becomes <span class=\"descriptionNumberColor\">MDF_DamagePercentage</span> of the original DMG.",
          "type": "Buff",
          "statusName": "\"I Grant You Permission To Strike\"",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-405354814\">Gilgamesh_SaberUltraBonus2</a>",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        }
                      }
                    }
                  ]
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
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-405354814\">Gilgamesh_SaberUltraBonus2</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1497873669\">Gilgamesh_SaberBonus3</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1481096050\">Gilgamesh_SaberBonus2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1420871220\">Gilgamesh_SaberBonus</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1040682786\">Gilgamesh_Lazy</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Crazy"
          ],
          "execute": [
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
                    "Skill"
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || RETURN",
                    "displayLines": "Avatar_Gilgamesh_00_KingCount",
                    "constants": [],
                    "variables": [
                      "Avatar_Gilgamesh_00_KingCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (UnusedUnderThisBase_7402) || RETURN",
                    "displayLines": "UnusedUnderThisBase_7402",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_7402"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-791691611\">Gilgamesh_Overcharge</a>[<span class=\"descriptionNumberColor\">King's Burden</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Ultimate DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillP01_P3_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Ultimate DMG Boost",
          "statusName": "King's Burden",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Ultimate"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "SkillP01_P1_DamageAdded"
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
                  "name": "Define Custom Variable",
                  "variableName": "SkillP01_P1_DamageAdded",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__218697899\">Gilgamesh_KingHappy</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
                      "variables": {
                        "KingCountAdd": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7413) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7413",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7413"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1937334192\">Gilgamesh_DamageUp</a>[<span class=\"descriptionNumberColor\">Interest Piqued!</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Current \"Interest\" count is <span class=\"descriptionNumberColor\">Avatar_Gilgamesh_00_KingCount</span>. Gilgamesh is greatly amused and only uses Skill.",
          "type": "Other",
          "effectName": "Interest Piqued!",
          "statusName": "Interest Piqued!",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                    "Basic ATK"
                  ]
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Basic ATK"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1301693093\">Gilgamesh_Passive01Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "conditions": {
                          "name": "Character ID",
                          "ID": 1014,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Saber"
                        }
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 10
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "conditions": {
                          "name": "Character ID",
                          "ID": 1014,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Saber"
                        }
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 10
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-605023684\">Gilgamesh_KingPassive</a>",
          "execute": [
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Saber_Chain",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7385) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7385",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7385"
                          ]
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Saber"
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Saber_Chain",
                      "value": {
                        "operator": "Variables[0] (Saber_Chain) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Saber_Chain + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Saber_Chain"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Gilgamesh_00_Rank06_GoldenRule",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7419) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7419",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7419"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Gilgamesh_00_Rank06_GoldenRule",
                      "value": {
                        "operator": "Variables[0] (Gilgamesh_00_Rank06_GoldenRule) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Gilgamesh_00_Rank06_GoldenRule + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Gilgamesh_00_Rank06_GoldenRule"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"625310839\">Gilgamesh_Passive_Eidolon6_GoldenRule</a>[<span class=\"descriptionNumberColor\">Golden Rule</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"625310839\">Gilgamesh_Passive_Eidolon6_GoldenRule</a>[<span class=\"descriptionNumberColor\">Golden Rule</span>]",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (Gilgamesh_00_Rank06_GoldenRule) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(Gilgamesh_00_Rank06_GoldenRule)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "Gilgamesh_00_Rank06_GoldenRule"
                        ]
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-791691611\">Gilgamesh_Overcharge</a>[<span class=\"descriptionNumberColor\">King's Burden</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_7378) || RETURN",
                        "displayLines": "UnusedUnderThisBase_7378",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_7378"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageAddedRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7381) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7381",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7381"
                          ]
                        }
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[removeMemosprite]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Knight of the Dragon"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1321100767\">Gilgamesh_UltraSPListener</a>",
                      "variable": "SPChange",
                      "target2": null,
                      "variable2": "Avatar_Gilgamesh_00_TeamSPChangeAmount"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Avatar_Gilgamesh_00_TeamSPChangeAmount) || Variables[1] (UnusedUnderThisBase_7393) || MUL || RETURN",
                        "displayLines": "(Avatar_Gilgamesh_00_TeamSPChangeAmount * UnusedUnderThisBase_7393)",
                        "constants": [],
                        "variables": [
                          "Avatar_Gilgamesh_00_TeamSPChangeAmount",
                          "UnusedUnderThisBase_7393"
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "tag": "ActiveSkillAdd"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
                      "variables": {
                        "KingCountAdd": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7407) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7407",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7407"
                          ]
                        }
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Knight of the Dragon"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
                      "variables": {
                        "KingCountAdd": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7408) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7408",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7408"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Charm"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1040682786\">Gilgamesh_Lazy</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Basic ATK"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill01",
                      "skillSlot": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill02",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__897832456\">Gilgamesh_KingPassive_ListenAction</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "expectedType": "Summon"
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
                      "variables": {
                        "KingCountAdd": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__265489780\">Gilgamesh_DroneAnalysis_Halo</a>[<span class=\"descriptionNumberColor\">King's Acknowledgement</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_DefenceDownRatio</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "King's Acknowledgement",
          "statusName": "King's Acknowledgement",
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
                      "value": "-MDF_DefenceDownRatio"
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
                  "variableName": "SkillRank_Rank01_DefenceDownRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceDownRatio) || RETURN",
                    "displayLines": "MDF_DefenceDownRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceDownRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1516158451\">Gilgamesh_DroneAnalysis_Team</a>[<span class=\"descriptionNumberColor\">King's Acknowledgement</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_Ratio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">#Skill02_P5_DefenceDown_Ratio</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "King's Acknowledgement",
          "statusName": "King's Acknowledgement",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"265489780\">Gilgamesh_DroneAnalysis_Halo</a>[<span class=\"descriptionNumberColor\">King's Acknowledgement</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_DefenceDownRatio": {
                  "operator": "Variables[0] (MDF_DefenceDownRatio) || RETURN",
                  "displayLines": "MDF_DefenceDownRatio",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceDownRatio"
                  ]
                }
              }
            }
          ],
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
                      "value": "-MDF_DefenceDownRatio"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAdd) || RETURN",
                    "displayLines": "MDF_AttackAdd",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAdd"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1220268105\">Gilgamesh_DroneAnalysis</a>[<span class=\"descriptionNumberColor\">King's Acknowledgement</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">#Skill02_P5_DefenceDown_Ratio</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "King's Acknowledgement",
          "statusName": "King's Acknowledgement",
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
                      "value": "-MDF_DefenceDownRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__646197750\">Gilgamesh_Ability02_CD</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Avatar_Gilgamesh_00_FirstHappyTurn",
                      "value": 0
                    },
                    {
                      "name": "UI Display Event",
                      "popUpText": "\"Amuse Me to the Fullest\""
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__872801045\">Gilgamesh_PassiveSpeed</a>[<span class=\"descriptionNumberColor\">\"Amuse Me to the Fullest\"</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "\"Amuse Me to the Fullest\"",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || Variables[1] (UnusedUnderThisBase_7390) || MUL || RETURN",
                    "displayLines": "(Avatar_Gilgamesh_00_KingCount * UnusedUnderThisBase_7390)",
                    "constants": [],
                    "variables": [
                      "Avatar_Gilgamesh_00_KingCount",
                      "UnusedUnderThisBase_7390"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Avatar_Gilgamesh_00_KingCount",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "bar#": 4
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-437296268\">Saber_Wind_Ability03_buff</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1409895251\">Saber_DisableAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__268332262\">Saber_Ability03_CD_02</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Knight of the Dragon"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]",
          "description": "When Saber has \"Core Resonance,\" and if using Skill and consuming \"Core Resonance\" can fully regenerate her Energy, consumes \"Mana Burst\" to cause Saber to immediately take action and recover 1 Skill Point for allies.",
          "type": "Other",
          "effectName": "Mana Burst",
          "statusName": "Mana Burst"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__581836941\">Saber_Trace03_Bonus</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Crown of the Star",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-435192710\">Saber_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Dragon Reactor Core</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Dragon Reactor Core",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1310791461\">Saber_AIFlag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack causes DMG dealt by Saber to ignore <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P2_Ratio</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "The Lost Oath of the Round Table",
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
                      "value": "-(MDF_PropertyValue * MDF_Layer)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Crown of the Star",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Saber_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Saber_LocalPlayer_StandardAbility_AttackBreak",
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Physical"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Fire"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Ice"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Thunder"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Wind"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Quantum"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Imaginary"
            }
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
    "Saber_LocalPlayer_Saber_TechniqueUsage": {
      "fileName": "Saber_LocalPlayer_Saber_TechniqueUsage",
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
          "ID": "101401(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Saber_LocalPlayer_Saber_NormalAtk01": {
      "fileName": "Saber_LocalPlayer_Saber_NormalAtk01",
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
    "Saber_Saber_TechniqueInLevel": {
      "fileName": "Saber_Saber_TechniqueInLevel",
      "childAbilityList": [
        "Saber_Saber_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1123686300\">Technique_Saber_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1732744103\">Saber_TechniqueUsage_Bonus</a>[<span class=\"descriptionNumberColor\">Behold, the King of Knights</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Behold, the King of Knights",
          "statusName": "Behold, the King of Knights",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1123686300\">Technique_Saber_Modifier</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1732744103\">Saber_TechniqueUsage_Bonus</a>[<span class=\"descriptionNumberColor\">Behold, the King of Knights</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.35) || RETURN",
                          "displayLines": "0.35",
                          "constants": [],
                          "variables": [
                            0.35
                          ]
                        }
                      }
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
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
    "Saber_Gilgamesh_Insert_Part02_Saber": {
      "fileName": "Saber_Gilgamesh_Insert_Part02_Saber",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1509,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Gilgamesh"
                }
              },
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "variable": "#SkillP02_P2_DamagePercentage",
          "target2": null,
          "variable2": "Saber_1509_DMG"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1509,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Gilgamesh"
                }
              },
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "variable": "#SkillP02_P6_ExtraDamagePercentage",
          "target2": null,
          "variable2": "Saber_1509_UltraPercentage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1509,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Gilgamesh"
                }
              },
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "variable": "#SkillP02_P4_AddSpValue",
          "target2": null,
          "variable2": "Saber_1509_AddSp"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Saber_1509_DMG) || RETURN",
              "displayLines": "Saber_1509_DMG",
              "constants": [],
              "variables": [
                "Saber_1509_DMG"
              ]
            },
            "Toughness": null,
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Follow-up"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Saber_1509_AddSp) || RETURN",
            "displayLines": "Saber_1509_AddSp",
            "constants": [],
            "variables": [
              "Saber_1509_AddSp"
            ]
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Gilgamesh: Saber}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1274159292\">Gilgamesh_SaberUltraBonus</a>[<span class=\"descriptionNumberColor\">\"I Grant You Permission To Strike\"</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] (Saber_1509_UltraPercentage) || RETURN",
              "displayLines": "Saber_1509_UltraPercentage",
              "constants": [],
              "variables": [
                "Saber_1509_UltraPercentage"
              ]
            }
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Saber_Saber_PassiveAbility01": {
      "fileName": "Saber_Saber_PassiveAbility01",
      "childAbilityList": [
        "Saber_Activity_FateStory_Saber_Insert_Camera",
        "Saber_Activity_FateStory_Saber_Insert_Part01",
        "Saber_Activity_FateStory_Saber_Insert_Part02",
        "Saber_Saber_PassiveAbility01",
        "Saber_Gilgamesh_Insert_Part02_Saber"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
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
          "modifier": "<a class=\"gModGreen\" id=\"1310791461\">Saber_AIFlag</a>"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "DV_SurgePoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_SurgePointMax",
          "value": 99
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
            "displayLines": "DV_SurgePointMax",
            "constants": [],
            "variables": [
              "DV_SurgePointMax"
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2036606296\">Saber_PassiveAbility01</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Knight of the Dragon"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1437622489\">Saber_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Knight of the Dragon</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Blessing of the Lake"
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
                  "name": "Define Custom Variable",
                  "variableName": "Saber_00_EntityMaxStockSP",
                  "value": {
                    "operator": "Variables[0] (200) || RETURN",
                    "displayLines": "200",
                    "constants": [],
                    "variables": [
                      200
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Saber_00_EntityMaxStockSP",
                  "value": {
                    "operator": "Variables[0] (120) || RETURN",
                    "displayLines": "120",
                    "constants": [],
                    "variables": [
                      120
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"1086940279\">Saber_Passive_ReturnSpValue</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-278261367\">Saber_Passive_StockSpValue</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crown of the Star"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"21439187\">Saber_Trace03</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-998377488\">Saber_Eidolon1</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-914489393\">Saber_Eidolon4</a>[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]"
            }
          ]
        },
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-880934155\">Saber_Eidolon6</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1137742605\">Saber_Trace03_CD</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__21439187\">Saber_Trace03</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"581836941\">Saber_Trace03_Bonus</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
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
          "for": "<a class=\"gModGreen\" id=\"mod__4661568\">Saber_Trace02</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2036606296\">Saber_PassiveAbility01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003815504\">function_Saber_SurgeCheck</a>",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-435192710\">Saber_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Dragon Reactor Core</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                    "displayLines": "DV_SurgePoint",
                    "constants": [],
                    "variables": [
                      "DV_SurgePoint"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003815504\">function_Saber_SurgeCheck</a>",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
                }
              ]
            },
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                        "displayLines": "DV_SurgePointMax",
                        "constants": [],
                        "variables": [
                          "DV_SurgePointMax"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 4
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ]
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
                        "name": "Trace Activated",
                        "conditionList": "Blessing of the Lake"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Energy%",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy Value",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (0.6) || MUL || RETURN",
                        "displayLines": "(_MaxSP * 0.6)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          0.6
                        ]
                      },
                      "adjustment": "Set"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003815504\">function_Saber_SurgeCheck</a>",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_SurgePoint",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_SurgePoint",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1386884047\">Saber_Energy_Count</a>[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
                          "counter": {
                            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                            "displayLines": "DV_SurgePoint",
                            "constants": [],
                            "variables": [
                              "DV_SurgePoint"
                            ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1386884047\">Saber_Energy_Count</a>[<span class=\"descriptionNumberColor\">Core Resonance</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-2003815504\">function_Saber_SurgeCheck</a>",
                      "variables": {
                        "_MaxSP": 0,
                        "_C_SP": 0,
                        "DV_SurgePointShow": 0,
                        "_SP_R": 0
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_SurgePoint",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1386884047\">Saber_Energy_Count</a>[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
                          "counter": {
                            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                            "displayLines": "DV_SurgePoint",
                            "constants": [],
                            "variables": [
                              "DV_SurgePoint"
                            ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1386884047\">Saber_Energy_Count</a>[<span class=\"descriptionNumberColor\">Core Resonance</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-2003815504\">function_Saber_SurgeCheck</a>",
                      "variables": {
                        "_MaxSP": 0,
                        "_C_SP": 0,
                        "DV_SurgePointShow": 0,
                        "_SP_R": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1386884047\">Saber_Energy_Count</a>[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "description": "Currently possesses <span class=\"descriptionNumberColor\">MDF_Layer</span> point(s) of \"Core Resonance.\"",
          "type": "Other",
          "statusName": "Core Resonance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1437622489\">Saber_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Knight of the Dragon</span>]",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Knight of the Dragon",
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "description": "<span class=\"descriptionNumberColor\">Saber_00_EntityStockSPForShow_Fake</span> overflow Energy accumulated.",
          "type": "Other",
          "statusName": "Blessing of the Lake",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Saber_00_EntityStockSPForShow",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (Saber_00_EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(Saber_00_EntityStockSPForShow)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "Saber_00_EntityStockSPForShow"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Saber_00_EntityStockSPForShow_Fake",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (Saber_00_EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(Saber_00_EntityStockSPForShow)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "Saber_00_EntityStockSPForShow"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Saber_00_EntityStockSPForShow_Fake",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-278261367\">Saber_Passive_StockSpValue</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValue"
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValueRaw",
                  "type": "RawDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SPChangeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_SPChangeValueRaw) || RETURN",
                      "displayLines": "_SPChangeValueRaw",
                      "constants": [],
                      "variables": [
                        "_SPChangeValueRaw"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_SPChangeValueRaw",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Saber_00_EntityCurrentSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Saber_00_EntityCurrentSP",
                          "value": {
                            "operator": "Variables[0] (Saber_00_EntityCurrentSP) || Variables[1] (_SPChangeValue) || SUB || Variables[2] (_SPChangeValueRaw) || ADD || RETURN",
                            "displayLines": "((Saber_00_EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)",
                            "constants": [],
                            "variables": [
                              "Saber_00_EntityCurrentSP",
                              "_SPChangeValue",
                              "_SPChangeValueRaw"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Saber_00_EntityMaxSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Saber_00_EntityCurrentSP",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (Saber_00_EntityMaxSP) || RETURN",
                              "displayLines": "Saber_00_EntityMaxSP",
                              "constants": [],
                              "variables": [
                                "Saber_00_EntityMaxSP"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "Saber_00_EntityStockSP",
                              "value": {
                                "operator": "Variables[0] (Saber_00_EntityStockSP) || Variables[1] (Saber_00_EntityCurrentSP) || ADD || Variables[2] (Saber_00_EntityMaxSP) || SUB || RETURN",
                                "displayLines": "((Saber_00_EntityStockSP + Saber_00_EntityCurrentSP) - Saber_00_EntityMaxSP)",
                                "constants": [],
                                "variables": [
                                  "Saber_00_EntityStockSP",
                                  "Saber_00_EntityCurrentSP",
                                  "Saber_00_EntityMaxSP"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Saber_00_EntityStockSP",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (Saber_00_EntityMaxStockSP) || RETURN",
                                  "displayLines": "Saber_00_EntityMaxStockSP",
                                  "constants": [],
                                  "variables": [
                                    "Saber_00_EntityMaxStockSP"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "Saber_00_EntityStockSP",
                                  "value": {
                                    "operator": "Variables[0] (Saber_00_EntityMaxStockSP) || RETURN",
                                    "displayLines": "Saber_00_EntityMaxStockSP",
                                    "constants": [],
                                    "variables": [
                                      "Saber_00_EntityMaxStockSP"
                                    ]
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
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Copy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                  "variable": "Saber_00_EntityStockSPForShow",
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variable2": "_Current_Show_Value"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "_Current_Show_Value",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                      "displayLines": "Saber_00_EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "Saber_00_EntityStockSP"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                      "valuePerStack": {
                                        "Saber_EntityStockSPForShow": {
                                          "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                          "displayLines": "Saber_00_EntityStockSP",
                                          "constants": [],
                                          "variables": [
                                            "Saber_00_EntityStockSP"
                                          ]
                                        }
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
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                  "valuePerStack": {
                                    "Saber_EntityStockSPForShow": {
                                      "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                      "displayLines": "Saber_00_EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "Saber_00_EntityStockSP"
                                      ]
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
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1086940279\">Saber_Passive_ReturnSpValue</a>",
          "stackType": "ReplaceByCaster",
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Saber_00_EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Temp_Return_SP",
                      "value": {
                        "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                        "displayLines": "Saber_00_EntityStockSP",
                        "constants": [],
                        "variables": [
                          "Saber_00_EntityStockSP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Saber_00_EntityStockSP",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_Temp_Return_SP) || RETURN",
                        "displayLines": "_Temp_Return_SP",
                        "constants": [],
                        "variables": [
                          "_Temp_Return_SP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-998377488\">Saber_Eidolon1</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.6"
                        }
                      ]
                    }
                  ]
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
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-269544975\">Saber_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases Wind RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Increases Wind RES PEN.",
          "statusName": "The Saga of Sixteen Winter Days",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_PropertyValue)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-914489393\">Saber_Eidolon4</a>[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
          "description": "Wind RES PEN increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
          "type": "Buff",
          "statusName": "The Saga of Sixteen Winter Days",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
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
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-269544975\">Saber_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        },
                        "MDF_Value_Base": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-880934155\">Saber_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                          "value": "0.2"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1658820893\">Saber_Eidolon6_Count</a>[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                  "counter": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1658820893\">Saber_Eidolon6_Count</a>[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
          "counter": 1,
          "description": "After using Ultimate <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), regenerates a fixed amount of <span class=\"descriptionNumberColor\">#SkillRank_Rank06_P3_Amount</span> Energy.",
          "type": "Other",
          "statusName": "The Long Fated Night",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"1658820893\">Saber_Eidolon6_Count</a>[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1658820893\">Saber_Eidolon6_Count</a>[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                          "function": "Add"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1658820893\">Saber_Eidolon6_Count</a>[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                          "value": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (300) || RETURN",
                            "displayLines": "300",
                            "constants": [],
                            "variables": [
                              300
                            ]
                          },
                          "isFixed": "(Fixed)"
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
    "Saber_Saber_Ability11_Part02": {
      "fileName": "Saber_Saber_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "S11_Alive_Count",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": "Under Control Effect",
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Knight of the Dragon"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": "Under Control Effect",
          "failed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "DV_SurgePoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Crown of the Star"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.04) || RETURN",
                      "displayLines": "0.04",
                      "constants": [],
                      "variables": [
                        0.04
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.01) || RETURN",
                      "displayLines": "0.01",
                      "constants": [],
                      "variables": [
                        0.01
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Basic ATK (Saber)"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "S11_Alive_Count",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "S11_Alive_Count",
                "compareType": ">",
                "value2": 2
              },
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Basic ATK (Saber)"
                    ]
                  }
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (2.2) || RETURN",
                  "displayLines": "2.2",
                  "constants": [],
                  "variables": [
                    2.2
                  ]
                },
                "Toughness": null,
                "Tags": [
                  "Basic ATK (Saber)"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Basic ATK (Saber)"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": "Under Control Effect",
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
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
    "Saber_Saber_Ability11_Part01": {
      "fileName": "Saber_Saber_Ability11_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability11_Camera",
        "Saber_Saber_Ability11_Part01",
        "Saber_Saber_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        0,
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
          "ability": "Saber_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": "Under Control Effect"
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
    "Saber_Saber_Ability03_EnterReady": {
      "fileName": "Saber_Saber_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Saber_Saber_Ability03_Part02": {
      "fileName": "Saber_Saber_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_S03_Stance_Ratio",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (10) || DIV || RETURN",
            "displayLines": "(1 / 10)",
            "constants": [
              1
            ],
            "variables": [
              10
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.8) || RETURN",
              "displayLines": "2.8",
              "constants": [],
              "variables": [
                2.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Ultimate (Saber)"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (10) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(10 - 1)",
            "constants": [
              1
            ],
            "variables": [
              10
            ]
          },
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
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.1) || RETURN",
                      "displayLines": "1.1",
                      "constants": [],
                      "variables": [
                        1.1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "_S03_Stance_Ratio"
                      ]
                    },
                    "Tags": [
                      "Ultimate (Saber)"
                    ]
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (1.1) || RETURN",
                          "displayLines": "1.1",
                          "constants": [],
                          "variables": [
                            1.1
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                          "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value",
                            "_S03_Stance_Ratio"
                          ]
                        },
                        "Tags": [
                          "Ultimate (Saber)"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
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
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.1) || RETURN",
                  "displayLines": "1.1",
                  "constants": [],
                  "variables": [
                    1.1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "_S03_Stance_Ratio"
                  ]
                },
                "Tags": [
                  "Ultimate (Saber)"
                ]
              }
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.1) || RETURN",
                      "displayLines": "1.1",
                      "constants": [],
                      "variables": [
                        1.1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "_S03_Stance_Ratio"
                      ]
                    },
                    "Tags": [
                      "Ultimate (Saber)"
                    ]
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Saber_Saber_Ability03_Part01": {
      "fileName": "Saber_Saber_Ability03_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability03_Camera",
        "Saber_Saber_Ability03_Part01",
        "Saber_Saber_Ability03_Part02",
        "Saber_Saber_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        40,
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
          "ability": "Saber_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Skill Point User}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Saber_Saber_Ability02_Part02": {
      "fileName": "Saber_Saber_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "S02_Point",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "S02_SP_R",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "S02_MSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "S02_CSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "S02_MSP",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (S02_CSP) || Variables[1] (8) || Variables[2] (S02_Point) || MUL || ADD || Constants[0] (30) || Variables[3] (S02_SP_R) || MUL || ADD || RETURN",
                  "displayLines": "((S02_CSP + (8 * S02_Point)) + (30 * S02_SP_R))",
                  "constants": [
                    30
                  ],
                  "variables": [
                    "S02_CSP",
                    8,
                    "S02_Point",
                    "S02_SP_R"
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": "<=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "DV_SurgePoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Crown of the Star"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.04) || RETURN",
                      "displayLines": "0.04",
                      "constants": [],
                      "variables": [
                        0.04
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.01) || RETURN",
                      "displayLines": "0.01",
                      "constants": [],
                      "variables": [
                        0.01
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                  "displayLines": "DV_SurgePointMax",
                  "constants": [],
                  "variables": [
                    "DV_SurgePointMax"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "DV_SurgePoint",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                    "displayLines": "DV_SurgePointMax",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointMax"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_SurgePointUse",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_ExtraDmgRatio",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_SurgePointUse",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
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
                  "variableName": "DV_ExtraDmgRatio",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePointUse) || Variables[1] (0.07) || Variables[2] (0.14) || ADD || MUL || RETURN",
                    "displayLines": "(DV_SurgePointUse * (0.07 + 0.14))",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointUse",
                      0.07,
                      0.14
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_ExtraDmgRatio",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePointUse) || Variables[1] (0.14) || MUL || RETURN",
                    "displayLines": "(DV_SurgePointUse * 0.14)",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointUse",
                      0.14
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * ST Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ],
            "EnergyGainPercent": "10%"
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * Blast Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * ST Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ],
            "EnergyGainPercent": "10%"
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * Blast Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * ST Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ],
            "EnergyGainPercent": "10%"
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * Blast Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.7 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.7
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.7) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.7 * ST Toughness Value)",
              "constants": [
                0.7
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ],
            "EnergyGainPercent": "70%"
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.7 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.7
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.7) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.7 * Blast Toughness Value)",
              "constants": [
                0.7
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill (Saber)"
            ]
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Check_Surge_Use_Before",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "DV_SurgePoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (DV_SurgePointUse) || SUB || RETURN",
            "displayLines": "(0 - DV_SurgePointUse)",
            "constants": [
              0
            ],
            "variables": [
              "DV_SurgePointUse"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_SurgePointUse",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (8) || Variables[1] (Check_Surge_Use_Before) || Variables[2] (DV_SurgePoint) || SUB || MUL || RETURN",
                "displayLines": "(8 * (Check_Surge_Use_Before - DV_SurgePoint))",
                "constants": [],
                "variables": [
                  8,
                  "Check_Surge_Use_Before",
                  "DV_SurgePoint"
                ]
              },
              "isFixed": "(Fixed)"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Saber_Saber_Ability02_Part01": {
      "fileName": "Saber_Saber_Ability02_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability02_Camera",
        "Saber_Saber_Ability02_Part01",
        "Saber_Saber_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Saber_Ability02_Part02",
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
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Saber_Saber_Ability01_Part02": {
      "fileName": "Saber_Saber_Ability01_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
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
    "Saber_Saber_Ability01_Part01": {
      "fileName": "Saber_Saber_Ability01_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability01_Camera",
        "Saber_Saber_Ability01_Part01",
        "Saber_Saber_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Saber_Ability01_Part02",
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
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Saber_Functions": {
      "fileName": "Saber_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2003815504\">function_Saber_SurgeCheck</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_SurgePointShow",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SP_R",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_C_SP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "Update UI Preview",
              "show": "Show",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "previewType": "Energy Gain",
              "previewValue": {
                "operator": "Variables[0] (8) || Variables[1] (DV_SurgePointShow) || MUL || Constants[0] (30) || Variables[2] (_SP_R) || MUL || ADD || RETURN",
                "displayLines": "((8 * DV_SurgePointShow) + (30 * _SP_R))",
                "constants": [
                  30
                ],
                "variables": [
                  8,
                  "DV_SurgePointShow",
                  "_SP_R"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_SurgePoint",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                      "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                      "constants": [
                        30
                      ],
                      "variables": [
                        "_C_SP",
                        8,
                        "DV_SurgePointShow",
                        "_SP_R"
                      ]
                    }
                  }
                ]
              },
              "passed": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
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
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"268332262\">Saber_Ability03_CD_02</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_SurgePoint",
                    "compareType": "<=",
                    "value2": 0
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxSP",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                      "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                      "constants": [
                        30
                      ],
                      "variables": [
                        "_C_SP",
                        8,
                        "DV_SurgePointShow",
                        "_SP_R"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                }
              ],
              "failed": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1526947844\">function_Gilgamesh_KingCount</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "Avatar_Gilgamesh_00_KingCount",
              "value": {
                "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || Variables[1] (KingCountAdd) || ADD || RETURN",
                "displayLines": "(Avatar_Gilgamesh_00_KingCount + KingCountAdd)",
                "constants": [],
                "variables": [
                  "Avatar_Gilgamesh_00_KingCount",
                  "KingCountAdd"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || RETURN",
                "displayLines": "Avatar_Gilgamesh_00_KingCount",
                "constants": [],
                "variables": [
                  "Avatar_Gilgamesh_00_KingCount"
                ]
              },
              "bar#": 4
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"872801045\">Gilgamesh_PassiveSpeed</a>[<span class=\"descriptionNumberColor\">\"Amuse Me to the Fullest\"</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Avatar_Gilgamesh_00_IsFirstTime",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (0) || RETURN",
                      "displayLines": "0",
                      "constants": [
                        0
                      ],
                      "variables": []
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Avatar_Gilgamesh_00_KingCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_7402) || RETURN",
                      "displayLines": "UnusedUnderThisBase_7402",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_7402"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Avatar_Gilgamesh_00_IsFirstTime",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Avatar_Gilgamesh_00_FirstHappyTurn",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1040682786\">Gilgamesh_Lazy</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || RETURN",
                    "displayLines": "Avatar_Gilgamesh_00_KingCount",
                    "constants": [],
                    "variables": [
                      "Avatar_Gilgamesh_00_KingCount"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1937334192\">Gilgamesh_DamageUp</a>[<span class=\"descriptionNumberColor\">Interest Piqued!</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"646197750\">Gilgamesh_Ability02_CD</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}