const configAbility = {
  "fileName": "Gilgamesh_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1014068292\">ADV_StageAbility_Maze_Gilgamesh_Flag</a>",
      "counter": 1,
      "stackType": "Merge",
      "onCreation": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Gilgamesh_00_MazeSkill_AchievementCount",
          "value": {
            "operator": "Variables[0] (Gilgamesh_00_MazeSkill_AchievementCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Gilgamesh_00_MazeSkill_AchievementCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Gilgamesh_00_MazeSkill_AchievementCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Gilgamesh_00_MazeSkill_AchievementCount",
            "compareType": ">=",
            "value2": 5,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Sufficient Noble Phantasm Reserves",
                  "desc": "Use Gilgamesh's Technique to hit #1 enemies or more",
                  "rarity": "Low",
                  "params": [
                    5
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
      "for": "<a class=\"gModGreen\" id=\"mod__51642669\">ADV_StageAbility_Maze_Gilgamesh_lock</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierFlags": [
        "TimeLock"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__259774921\">ADV_StageAbility_Maze_Gilgamesh</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierTasks": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"51642669\">ADV_StageAbility_Maze_Gilgamesh_lock</a>",
          "duration": -1
        }
      ],
      "onRemoval": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"51642669\">ADV_StageAbility_Maze_Gilgamesh_lock</a>"
        }
      ]
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
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
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
                "operator": "Variables[0] (MDF_AllDamageTypePenetrate) || RETURN",
                "displayLines": "MDF_AllDamageTypePenetrate",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypePenetrate"
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
                      "value": "(MDF_GoldenRule * 1)"
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
                "operator": "Variables[0] (Gilgamesh_00_Rank06_GoldenRule) || Variables[1] (1) || MUL || RETURN",
                "displayLines": "(Gilgamesh_00_Rank06_GoldenRule * 1)",
                "constants": [],
                "variables": [
                  "Gilgamesh_00_Rank06_GoldenRule",
                  1
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
                "operator": "Variables[0] (0.2) || RETURN",
                "displayLines": "0.2",
                "constants": [],
                "variables": [
                  0.2
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
                    "operator": "Variables[0] (40) || RETURN",
                    "displayLines": "40",
                    "constants": [],
                    "variables": [
                      40
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
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_BaseCriticalDamageBaseAdd": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_MaxSPThreshold": {
              "operator": "Variables[0] (140) || RETURN",
              "displayLines": "140",
              "constants": [],
              "variables": [
                140
              ]
            },
            "MDF_ExtraRatioPerMaxSP": {
              "operator": "Variables[0] (0.01) || RETURN",
              "displayLines": "0.01",
              "constants": [],
              "variables": [
                0.01
              ]
            },
            "MDF_MaxExtraRatio": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
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
                        "operator": "Variables[0] (6) || RETURN",
                        "displayLines": "6",
                        "constants": [],
                        "variables": [
                          6
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageBaseAdd": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
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
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
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
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
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
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
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
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
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
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
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
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageAddedRatio": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
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
                    "conditionList": "Epic's Opening"
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
                    "operator": "Variables[0] (Avatar_Gilgamesh_00_TeamSPChangeAmount) || Variables[1] (0.3) || MUL || RETURN",
                    "displayLines": "(Avatar_Gilgamesh_00_TeamSPChangeAmount * 0.3)",
                    "constants": [],
                    "variables": [
                      "Avatar_Gilgamesh_00_TeamSPChangeAmount",
                      0.3
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
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
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
                    "conditionList": "Epic's Opening"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
                  "variables": {
                    "KingCountAdd": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
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
                  "skillSlot": "Skill"
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
                "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || Variables[1] (0.1) || MUL || RETURN",
                "displayLines": "(Avatar_Gilgamesh_00_KingCount * 0.1)",
                "constants": [],
                "variables": [
                  "Avatar_Gilgamesh_00_KingCount",
                  0.1
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
    }
  ],
  "references": []
}