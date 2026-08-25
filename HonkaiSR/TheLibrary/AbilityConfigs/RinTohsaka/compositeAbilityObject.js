const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Rin Tohsaka",
  "trimCharacterName": "RinTohsaka",
  "abilityList": [
    "RinTohsaka_Modifiers",
    "RinTohsaka_LocalPlayer_TohsakaRin_AchievementPassive",
    "RinTohsaka_LocalPlayer_StandardAbility_AttackBreak",
    "RinTohsaka_LocalPlayer_TohsakaRin_TechniqueUsage",
    "RinTohsaka_LocalPlayer_TohsakaRin_NormalAtk01",
    "RinTohsaka_TohsakaRin_TechniqueInLevel",
    "RinTohsaka_TohsakaRin_Insert_Part02",
    "RinTohsaka_TohsakaRin_Insert_Part01",
    "RinTohsaka_TohsakaRin_Insert_SelectTargetSelf",
    "RinTohsaka_TohsakaRin_PassiveAbility02",
    "RinTohsaka_TohsakaRin_PassiveAbility01",
    "RinTohsaka_TohsakaRin_Ability03_Part02",
    "RinTohsaka_TohsakaRin_Ability03_Part01",
    "RinTohsaka_TohsakaRin_Ability03_EnterReady",
    "RinTohsaka_TohsakaRin_Ability21_Part02",
    "RinTohsaka_TohsakaRin_Ability21_Part01",
    "RinTohsaka_TohsakaRin_Ability02_Part02",
    "RinTohsaka_TohsakaRin_Ability02_Part01",
    "RinTohsaka_TohsakaRin_Ability01_Part02",
    "RinTohsaka_TohsakaRin_Ability01_Part01"
  ],
  "abilityObject": {
    "RinTohsaka_Modifiers": {
      "fileName": "RinTohsaka_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1285653608\">ADV_StageAbility_Maze_TohsakaRin</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1981456538\">ADV_StageAbility_Maze_TohsakaRin_AchievementPassive</a>",
          "onStageExit": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "TohsakaRin_00_AchievementPassive_Money",
              "value": 0
            }
          ],
          "Money Taken": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Team Leader"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "TohsakaRin_00_AchievementPassive_Money",
                  "value": {
                    "operator": "Variables[0] (TohsakaRin_00_AchievementPassive_Money) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TohsakaRin_00_AchievementPassive_Money + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TohsakaRin_00_AchievementPassive_Money"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TohsakaRin_00_AchievementPassive_Money",
                    "compareType": ">=",
                    "value2": 8
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1693986363\">TohsakaRin_InsertCheckSelf</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-872900908\">TohsakaRin_InsertRetargetSelf</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-872900908\">TohsakaRin_InsertRetargetSelf</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-872900908\">TohsakaRin_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-872900908\">TohsakaRin_InsertRetargetSelf</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-872900908\">TohsakaRin_InsertRetargetSelf</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-872900908\">TohsakaRin_InsertRetargetSelf</a>",
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
                                  "target": "{{Rin: Archer}}"
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
                                  "target": "{{Rin: Archer}}"
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
                          "target": "{{Rin: Archer}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Rin: Archer}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Rin: Archer}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]",
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
                                          "target": "{{Rin: Archer}}"
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
                                          "target": "{{Rin: Archer}}"
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
                                  "target": "{{Rin: Archer}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Rin: Archer}}"
                                },
                                "flagName": "DisableAction",
                                "invertCondition": true
                              },
                              {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Rin: Archer}}"
                                }
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]",
                                "invertCondition": true
                              },
                              {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              }
                            ]
                          },
                          "abilityName": "TohsakaRin_Insert_SelectTargetSelf",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1161328360\">TohsakaRin_Eidolon1_Enhance</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-889730965\">TohsakaRin_Eidolon6_Penetrate</a>[<span class=\"descriptionNumberColor\">Nailed It This Time!</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Nailed It This Time!",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1113422465\">TohsakaRin_Ability03_Debuff</a>[<span class=\"descriptionNumberColor\">An Gal Ta Ki Gal Šè</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "An Gal Ta Ki Gal Šè",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1630247172\">TohsakaRin_Eidolon2_TeamAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "Skill DMG dealt is <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the original DMG.",
          "type": "Buff",
          "statusName": "Dimensional Traveler",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1863098959\">TohsakaRin_Eidolon2_SelfAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "Skill DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Dimensional Traveler",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Gem Magecraft",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalPropertyValue",
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
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalPropertyValue",
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_FinalPropertyValue) || RETURN",
                    "displayLines": "MDF_FinalPropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_FinalPropertyValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentMaxLayer",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-171150355\">TohsakaRin_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Elegant Conduct</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span> and Quantum RES PEN increases by <span class=\"descriptionNumberColor\">MDF_Penetrate</span>.",
          "type": "Buff",
          "statusName": "Elegant Conduct",
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
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Penetrate) || RETURN",
                    "displayLines": "MDF_Penetrate",
                    "constants": [],
                    "variables": [
                      "MDF_Penetrate"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "STAT_SpeedUp"
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Ladylike Poise",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-973289523\">TohsakaRin_Passive_S02Enhance</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
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
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]",
          "description": "The \"Freeform Tohsaka Style\" Joint Follow-Up ATK cannot be triggered yet.",
          "type": "Other",
          "statusName": "Freeform Tohsaka Style",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1052667033\">TohsakaRin_Eidolon6_InsertActionSave</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "addStacksPerTrigger": 1,
          "execute": [
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
                  "functionName": "<a class=\"gTempYellow\" id=\"2026876032\">function_TohsakaRin_Eidolon6_Save_Load</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2026876032\">function_TohsakaRin_Eidolon6_Save_Load</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2026876032\">function_TohsakaRin_Eidolon6_Save_Load</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOrRevivable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2026876032\">function_TohsakaRin_Eidolon6_Save_Load</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__2026876032\">function_TohsakaRin_Eidolon6_Save_Load</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
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
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1052667033\">TohsakaRin_Eidolon6_InsertActionSave</a>"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1052667033\">TohsakaRin_Eidolon6_InsertActionSave</a>",
                      "addStacksPerTrigger": -1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Layer",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
          "counter": 1,
          "description": "Currently holds <span class=\"descriptionNumberColor\">MDF_Count</span> \"Gem Energy.\"",
          "type": "Other",
          "statusName": "Gem Energy"
        }
      ],
      "references": []
    },
    "RinTohsaka_LocalPlayer_TohsakaRin_AchievementPassive": {
      "fileName": "RinTohsaka_LocalPlayer_TohsakaRin_AchievementPassive",
      "skillTrigger": "MazeCommonPassve02",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1981456538\">ADV_StageAbility_Maze_TohsakaRin_AchievementPassive</a>",
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
    "RinTohsaka_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "RinTohsaka_LocalPlayer_StandardAbility_AttackBreak",
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
    "RinTohsaka_LocalPlayer_TohsakaRin_TechniqueUsage": {
      "fileName": "RinTohsaka_LocalPlayer_TohsakaRin_TechniqueUsage",
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
          "ID": "150801(SkillMaze)",
          "counter": 1,
          "duration": -1
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
    "RinTohsaka_LocalPlayer_TohsakaRin_NormalAtk01": {
      "fileName": "RinTohsaka_LocalPlayer_TohsakaRin_NormalAtk01",
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
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance"
                }
              ],
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
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance"
                }
              ],
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
    "RinTohsaka_TohsakaRin_TechniqueInLevel": {
      "fileName": "RinTohsaka_TohsakaRin_TechniqueInLevel",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"659020595\">StageAbility_Maze_TohsakaRin_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__659020595\">StageAbility_Maze_TohsakaRin_Modifier</a>",
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "EnergyBar_GemNum",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (10) || RETURN",
                        "displayLines": "10",
                        "constants": [],
                        "variables": [
                          10
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum_Shadow",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                            "displayLines": "EnergyBar_GemNum_Shadow",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum_Shadow"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
                            ]
                          },
                          "priorState": "Normal"
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
        "primaryTarget": "{{Caster}}"
      }
    },
    "RinTohsaka_TohsakaRin_Insert_Part02": {
      "fileName": "RinTohsaka_TohsakaRin_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1693986363\">TohsakaRin_InsertCheckSelf</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "adjustmentType": "+"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "RinTohsaka_TohsakaRin_Insert_Part01": {
      "fileName": "RinTohsaka_TohsakaRin_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Freeform Tohsaka Style"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "TohsakaRin_Insert_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Rin: Archer}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "TohsakaRin_Insert_Part02_Archer"
            }
          ]
        }
      ],
      "onAbort": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "RinTohsaka_TohsakaRin_Insert_SelectTargetSelf": {
      "fileName": "RinTohsaka_TohsakaRin_Insert_SelectTargetSelf",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "ID": 1015,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Archer"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Archer_in_Team",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "TohsakaRin_Insert_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1693986363\">TohsakaRin_InsertCheckSelf</a>"
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1693986363\">TohsakaRin_InsertCheckSelf</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "RinTohsaka_TohsakaRin_PassiveAbility02": {
      "fileName": "RinTohsaka_TohsakaRin_PassiveAbility02",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_PassiveAbility02",
        "RinTohsaka_TohsakaRin_Insert_SelectTargetSelf",
        "RinTohsaka_TohsakaRin_Insert_Part01",
        "RinTohsaka_TohsakaRin_Insert_Camera",
        "RinTohsaka_TohsakaRin_Insert_Part02"
      ],
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-295396484\">TohsakaRin_Passive_Insert_Listener</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-295396484\">TohsakaRin_Passive_Insert_Listener</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                                  "target": "{{Rin: Archer}}"
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
                                  "target": "{{Rin: Archer}}"
                                },
                                "flagName": 148
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
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
                          "target": "{{Rin: Archer}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Rin: Archer}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Rin: Archer}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1612899858\">Archer_BonusTrigger</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Cur_Action_Triggered",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "CurrentSkillPoints",
                            "compareType": "<=",
                            "value2": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "MDF_Skill02UseCountInCaps",
                            "compareType": "=",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "Character ID",
                        "ID": 1015,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Archer"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Archer_in_Team",
                        "compareType": "=",
                        "value2": 1
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
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Cur_Action_Triggered",
                          "value": 1
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
                                          "target": "{{Rin: Archer}}"
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
                                          "target": "{{Rin: Archer}}"
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
                                  "target": "{{Rin: Archer}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Rin: Archer}}"
                                },
                                "flagName": "DisableAction",
                                "invertCondition": true
                              },
                              {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Rin: Archer}}"
                                }
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]",
                                "invertCondition": true
                              },
                              {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              }
                            ]
                          },
                          "abilityName": "TohsakaRin_Insert_SelectTargetSelf",
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
                      ],
                      "noTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Cur_Action_Triggered",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1693986363\">TohsakaRin_InsertCheckSelf</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1612899858\">Archer_BonusTrigger</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Cur_Action_Triggered",
                      "value": 0
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
    "RinTohsaka_TohsakaRin_PassiveAbility01": {
      "fileName": "RinTohsaka_TohsakaRin_PassiveAbility01",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"-79948077\">TohsakaRin_Passive01Modifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-53931784\">TohsakaRin_GemStoneNumListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"330484321\">TohsakaRin_Passive_Sub_EnergyBar_BattlePoint</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_CostGemNum",
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
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ActiveGemNum",
          "value": {
            "operator": "Variables[0] (15) || RETURN",
            "displayLines": "15",
            "constants": [],
            "variables": [
              15
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_MaxGemNum",
          "value": 999
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "EnergyBar_GemNum",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "EnergyBar_GemNum_Shadow",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "EnergyBar_GemNum",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
            "displayLines": "EnergyBar_GemNum",
            "constants": [],
            "variables": [
              "EnergyBar_GemNum"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (EnergyBar_ActiveGemNum) || RETURN",
            "displayLines": "EnergyBar_ActiveGemNum",
            "constants": [],
            "variables": [
              "EnergyBar_ActiveGemNum"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Elegant Conduct"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1033518323\">TohsakaRin_PointB1_AddMaxBP</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Ladylike Poise"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"843650548\">TohsakaRin_PointB2_Listen</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1790400214\">TohsakaRin_Passive_S02Enhance_Listener</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1863098959\">TohsakaRin_Eidolon2_SelfAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1630247172\">TohsakaRin_Eidolon2_TeamAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1.3) || RETURN",
                  "displayLines": "1.3",
                  "constants": [],
                  "variables": [
                    1.3
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1424670314\">TohsakaRin_Eidolon2_Listen</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-889730965\">TohsakaRin_Eidolon6_Penetrate</a>[<span class=\"descriptionNumberColor\">Nailed It This Time!</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"1161328360\">TohsakaRin_Eidolon1_Enhance</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1424670314\">TohsakaRin_Eidolon2_Listen</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1630247172\">TohsakaRin_Eidolon2_TeamAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (1.3) || RETURN",
                          "displayLines": "1.3",
                          "constants": [],
                          "variables": [
                            1.3
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
          "for": "<a class=\"gModGreen\" id=\"mod__843650548\">TohsakaRin_PointB2_Listen</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
                  "invertCondition": true
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-973289523\">TohsakaRin_Passive_S02Enhance</a>"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.2(SPD Change)"
            }
          },
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                        }
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill21"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
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
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__330484321\">TohsakaRin_Passive_Sub_EnergyBar_BattlePoint</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": 1
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
                  "variableName": "_BPAddValue",
                  "type": "UnclampedDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_BPAddValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
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
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "mustBeAlive2": true
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_MaxLayer",
                                "compareType": ">",
                                "value2": 1
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
                              "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (0.7) || RETURN",
                                  "displayLines": "0.7",
                                  "constants": [],
                                  "variables": [
                                    0.7
                                  ]
                                },
                                "MDF_CurrentMaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
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
                                  "operator": "Variables[0] (0.7) || RETURN",
                                  "displayLines": "0.7",
                                  "constants": [],
                                  "variables": [
                                    0.7
                                  ]
                                },
                                "MDF_CurrentMaxLayer": 1
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "_BPAddValue",
                          "value": {
                            "operator": "Variables[0] (_BPAddValue) || INVERT || RETURN",
                            "displayLines": "-_BPAddValue",
                            "constants": [],
                            "variables": [
                              "_BPAddValue"
                            ]
                          }
                        },
                        {
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (_BPAddValue) || RETURN",
                            "displayLines": "_BPAddValue",
                            "constants": [],
                            "variables": [
                              "_BPAddValue"
                            ]
                          },
                          "Event": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Add to Value (Default)",
                              "variableName": "EnergyBar_GemNum",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "EnergyBar_GemNum_Shadow",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                                "displayLines": "EnergyBar_GemNum_Shadow",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum_Shadow"
                                ]
                              },
                              "priorState": "Normal"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                                "displayLines": "EnergyBar_GemNum",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum"
                                ]
                              },
                              "priorState": "Normal"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "EnergyBar_GemNum_Shadow",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                                "displayLines": "EnergyBar_GemNum_Shadow",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum_Shadow"
                                ]
                              },
                              "priorState": "Normal"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                                "displayLines": "EnergyBar_GemNum",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum"
                                ]
                              },
                              "priorState": "Normal"
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
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_BPAddValue",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
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
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Is Part Of",
                                    "of": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "mustBeAlive2": true
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_MaxLayer",
                                    "compareType": ">",
                                    "value2": 1
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
                                  "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
                                  "duration": {
                                    "operator": "Variables[0] (2) || RETURN",
                                    "displayLines": "2",
                                    "constants": [],
                                    "variables": [
                                      2
                                    ]
                                  },
                                  "stackLimit": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (0.7) || RETURN",
                                      "displayLines": "0.7",
                                      "constants": [],
                                      "variables": [
                                        0.7
                                      ]
                                    },
                                    "MDF_CurrentMaxLayer": {
                                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                      "displayLines": "MDF_MaxLayer",
                                      "constants": [],
                                      "variables": [
                                        "MDF_MaxLayer"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
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
                                      "operator": "Variables[0] (0.7) || RETURN",
                                      "displayLines": "0.7",
                                      "constants": [],
                                      "variables": [
                                        0.7
                                      ]
                                    },
                                    "MDF_CurrentMaxLayer": 1
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Looped Event",
                              "maxLoops": {
                                "operator": "Variables[0] (_BPAddValue) || RETURN",
                                "displayLines": "_BPAddValue",
                                "constants": [],
                                "variables": [
                                  "_BPAddValue"
                                ]
                              },
                              "Event": [
                                {
                                  "name": "Adjust Variable Value",
                                  "adjustmentType": "Add to Value (Default)",
                                  "variableName": "EnergyBar_GemNum",
                                  "on": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "value": 1
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "EnergyBar_GemNum_Shadow",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                                    "displayLines": "EnergyBar_GemNum_Shadow",
                                    "constants": [],
                                    "variables": [
                                      "EnergyBar_GemNum_Shadow"
                                    ]
                                  },
                                  "priorState": "Normal"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                                    "displayLines": "EnergyBar_GemNum",
                                    "constants": [],
                                    "variables": [
                                      "EnergyBar_GemNum"
                                    ]
                                  },
                                  "priorState": "Normal"
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyBar_GemNum_Shadow",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 0.5,
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "enhancedColor": "False"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "enhancedColor": "False"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.5,
                  "maxValue": 9999,
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "enhancedColor": "True"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "enhancedColor": "True"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-79948077\">TohsakaRin_Passive01Modifier</a>",
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "EnergyBar_GemNum",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum_Shadow",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                            "displayLines": "EnergyBar_GemNum_Shadow",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum_Shadow"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
                            ]
                          },
                          "priorState": "Normal"
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
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "conditions": {
                          "name": "Character ID",
                          "ID": 1015,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Archer"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Archer_in_Team",
                      "value": 1
                    },
                    "Deleted bullshit"
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
                          "ID": 1015,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Archer"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Archer_in_Team",
                      "value": 1
                    },
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1033518323\">TohsakaRin_PointB1_AddMaxBP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
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
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (2) || INVERT || RETURN",
                    "displayLines": "-2",
                    "constants": [],
                    "variables": [
                      2
                    ]
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-171150355\">TohsakaRin_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Elegant Conduct</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (1.5) || RETURN",
                          "displayLines": "1.5",
                          "constants": [],
                          "variables": [
                            1.5
                          ]
                        },
                        "MDF_Penetrate": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "conditions": {
                          "name": "Character ID",
                          "ID": 1015,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Archer"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Rin: Archer}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-171150355\">TohsakaRin_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Elegant Conduct</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] (1.5) || RETURN",
                              "displayLines": "1.5",
                              "constants": [],
                              "variables": [
                                1.5
                              ]
                            },
                            "MDF_Penetrate": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            }
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1790400214\">TohsakaRin_Passive_S02Enhance_Listener</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
                }
              ],
              "priorityLevel": 10001
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-2068213753\">TohsakaRin_CheckAbility21</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "CurrentSkillPoints",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (7) || RETURN",
                          "displayLines": "7",
                          "constants": [],
                          "variables": [
                            7
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (EnergyBar_ActiveGemNum) || RETURN",
                          "displayLines": "EnergyBar_ActiveGemNum",
                          "constants": [],
                          "variables": [
                            "EnergyBar_ActiveGemNum"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum_Shadow",
                        "compareType": ">",
                        "value2": 0
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
                      "modifier": "<a class=\"gModGreen\" id=\"-973289523\">TohsakaRin_Passive_S02Enhance</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurrentSkillPoints",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Skill Points",
                          "variableName": "TMP_CUR_BP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnergyBar_CostGemNum_Real",
                          "value": {
                            "operator": "Variables[0] (TMP_CUR_BP) || Variables[1] (2) || SUB || Variables[2] (2) || MUL || Variables[3] (EnergyBar_GemNum) || ADD || RETURN",
                            "displayLines": "(((TMP_CUR_BP - 2) * 2) + EnergyBar_GemNum)",
                            "constants": [],
                            "variables": [
                              "TMP_CUR_BP",
                              2,
                              2,
                              "EnergyBar_GemNum"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnergyBar_CostGemNum_Real",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "DamageCarry",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (Tohsakarin_00_DamageCarry) || RETURN",
                              "displayLines": "Tohsakarin_00_DamageCarry",
                              "constants": [],
                              "variables": [
                                "Tohsakarin_00_DamageCarry"
                              ]
                            },
                            "contextScope": "AITag"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnergyBar_CostGemNum_Real",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                                "displayLines": "EnergyBar_GemNum",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum"
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
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_CostGemNum_Real",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__320) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__320",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__320"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AI_UseSkill21",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AI_UseSkill21",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum_Shadow",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AI_UseSkill21",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_UseSkill21",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-973289523\">TohsakaRin_Passive_S02Enhance</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-53931784\">TohsakaRin_GemStoneNumListener</a>",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyBar_GemNum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": {
                    "operator": "Variables[0] (EnergyBar_MaxGemNum) || RETURN",
                    "displayLines": "EnergyBar_MaxGemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_MaxGemNum"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        },
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
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
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "conditions": {
                          "name": "Character ID",
                          "ID": 1015,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Archer"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 10
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Tohsakarin_00_DamageCarry",
                          "value": 10
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Rin: Archer}}"
                          },
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 100
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 100
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Tohsakarin_00_DamageCarry",
                          "value": 100
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Rin: Archer}}"
                          },
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 10
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        },
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
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
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (EnergyBar_MaxGemNum) || RETURN",
                    "displayLines": "EnergyBar_MaxGemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_MaxGemNum"
                    ]
                  },
                  "maxValue": 999,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        },
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
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
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Tohsakarin_00_DamageCarry",
                      "value": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Rin: Archer}}"
                      },
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 10
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                        },
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
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
                          "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
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
    "RinTohsaka_TohsakaRin_Ability03_Part02": {
      "fileName": "RinTohsaka_TohsakaRin_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Inbound Prosperity"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (12) || RETURN",
                "displayLines": "12",
                "constants": [],
                "variables": [
                  12
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyBar_GemNum_Shadow",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                    "displayLines": "EnergyBar_GemNum_Shadow",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum_Shadow"
                    ]
                  },
                  "priorState": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                    "displayLines": "EnergyBar_GemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
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
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (24) || RETURN",
                "displayLines": "24",
                "constants": [],
                "variables": [
                  24
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyBar_GemNum_Shadow",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                    "displayLines": "EnergyBar_GemNum_Shadow",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum_Shadow"
                    ]
                  },
                  "priorState": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                    "displayLines": "EnergyBar_GemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1052667033\">TohsakaRin_Eidolon6_InsertActionSave</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1052667033\">TohsakaRin_Eidolon6_InsertActionSave</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1113422465\">TohsakaRin_Ability03_Debuff</a>[<span class=\"descriptionNumberColor\">An Gal Ta Ki Gal Šè</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (6) || RETURN",
              "displayLines": "6",
              "constants": [],
              "variables": [
                6
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}} - {{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
            "Tags": null
          }
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
    "RinTohsaka_TohsakaRin_Ability03_Part01": {
      "fileName": "RinTohsaka_TohsakaRin_Ability03_Part01",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_Ability03_Camera",
        "RinTohsaka_TohsakaRin_Ability03_EnterReady",
        "RinTohsaka_TohsakaRin_Ability03_Part01",
        "RinTohsaka_TohsakaRin_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
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
          "ability": "TohsakaRin_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "All Other Team Members"
      }
    },
    "RinTohsaka_TohsakaRin_Ability03_EnterReady": {
      "fileName": "RinTohsaka_TohsakaRin_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "RinTohsaka_TohsakaRin_Ability21_Part02": {
      "fileName": "RinTohsaka_TohsakaRin_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Round",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Gem_Cost",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Shadow_Gem_Cost",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Gem_Num",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Shadow_Gem_Num",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Flag",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyBar_GemNum_Shadow",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Shadow_Gem_Num",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                "displayLines": "EnergyBar_GemNum_Shadow",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum_Shadow"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Interval",
              "value": 0.1
            },
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TMP_Round",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (33) || RETURN",
                      "displayLines": "33",
                      "constants": [],
                      "variables": [
                        33
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TMP_Shadow_Gem_Num",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (EnergyBar_CostGemNum) || RETURN",
                      "displayLines": "EnergyBar_CostGemNum",
                      "constants": [],
                      "variables": [
                        "EnergyBar_CostGemNum"
                      ]
                    }
                  }
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TMP_Flag",
                    "compareType": "<",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TMP_Flag",
                      "value": {
                        "operator": "Variables[0] (TMP_Flag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(TMP_Flag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "TMP_Flag"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TMP_Flag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TMP_Interval",
                    "compareType": ">",
                    "value2": {
                      "operator": "Constants[0] (0.021) || RETURN",
                      "displayLines": "0.021",
                      "constants": [
                        0.021
                      ],
                      "variables": []
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TMP_Interval",
                      "value": {
                        "operator": "Variables[0] (TMP_Interval) || Constants[0] (0.011) || SUB || RETURN",
                        "displayLines": "(TMP_Interval - 0.011)",
                        "constants": [
                          0.011
                        ],
                        "variables": [
                          "TMP_Interval"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Round",
                  "value": {
                    "operator": "Variables[0] (TMP_Round) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TMP_Round + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TMP_Round"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Shadow_Gem_Num",
                  "value": {
                    "operator": "Variables[0] (TMP_Shadow_Gem_Num) || Variables[1] (EnergyBar_CostGemNum) || SUB || RETURN",
                    "displayLines": "(TMP_Shadow_Gem_Num - EnergyBar_CostGemNum)",
                    "constants": [],
                    "variables": [
                      "TMP_Shadow_Gem_Num",
                      "EnergyBar_CostGemNum"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Shadow_Gem_Cost",
                  "value": {
                    "operator": "Variables[0] (TMP_Shadow_Gem_Cost) || Variables[1] (EnergyBar_CostGemNum) || ADD || RETURN",
                    "displayLines": "(TMP_Shadow_Gem_Cost + EnergyBar_CostGemNum)",
                    "constants": [],
                    "variables": [
                      "TMP_Shadow_Gem_Cost",
                      "EnergyBar_CostGemNum"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
                  },
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TMP_Shadow_Gem_Num) || RETURN",
                        "displayLines": "TMP_Shadow_Gem_Num",
                        "constants": [],
                        "variables": [
                          "TMP_Shadow_Gem_Num"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": 1,
                  "Event": [
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
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] (0.9) || RETURN",
                              "displayLines": "0.9",
                              "constants": [],
                              "variables": [
                                0.9
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
                            "Tags": null
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
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "EnergyBar_GemNum_Shadow",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyBar_GemNum_Shadow",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                    "displayLines": "EnergyBar_GemNum_Shadow",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum_Shadow"
                    ]
                  },
                  "priorState": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                    "displayLines": "EnergyBar_GemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
            },
            "Trigger: Ability End"
          ],
          "failed": [
            {
              "name": "Looped Event",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurrentSkillPoints",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              },
              "Event": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": -1,
                  "adjustmentType": "+"
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "EnergyBar_GemNum",
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
                    "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                    "displayLines": "EnergyBar_GemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Gem_Num",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                "displayLines": "EnergyBar_GemNum",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Interval",
              "value": 0.1
            },
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TMP_Round",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (33) || RETURN",
                      "displayLines": "33",
                      "constants": [],
                      "variables": [
                        33
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TMP_Gem_Num",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (EnergyBar_CostGemNum) || RETURN",
                      "displayLines": "EnergyBar_CostGemNum",
                      "constants": [],
                      "variables": [
                        "EnergyBar_CostGemNum"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "CurrentHP",
                      "compareType": ">",
                      "value2": 0
                    }
                  }
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TMP_Flag",
                    "compareType": "<",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TMP_Flag",
                      "value": {
                        "operator": "Variables[0] (TMP_Flag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(TMP_Flag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "TMP_Flag"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TMP_Flag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TMP_Interval",
                    "compareType": ">",
                    "value2": {
                      "operator": "Constants[0] (0.021) || RETURN",
                      "displayLines": "0.021",
                      "constants": [
                        0.021
                      ],
                      "variables": []
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TMP_Interval",
                      "value": {
                        "operator": "Variables[0] (TMP_Interval) || Constants[0] (0.011) || SUB || RETURN",
                        "displayLines": "(TMP_Interval - 0.011)",
                        "constants": [
                          0.011
                        ],
                        "variables": [
                          "TMP_Interval"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Round",
                  "value": {
                    "operator": "Variables[0] (TMP_Round) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TMP_Round + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TMP_Round"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Gem_Num",
                  "value": {
                    "operator": "Variables[0] (TMP_Gem_Num) || Variables[1] (EnergyBar_CostGemNum) || SUB || RETURN",
                    "displayLines": "(TMP_Gem_Num - EnergyBar_CostGemNum)",
                    "constants": [],
                    "variables": [
                      "TMP_Gem_Num",
                      "EnergyBar_CostGemNum"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Gem_Cost",
                  "value": {
                    "operator": "Variables[0] (TMP_Gem_Cost) || Variables[1] (EnergyBar_CostGemNum) || ADD || RETURN",
                    "displayLines": "(TMP_Gem_Cost + EnergyBar_CostGemNum)",
                    "constants": [],
                    "variables": [
                      "TMP_Gem_Cost",
                      "EnergyBar_CostGemNum"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TohsakaRin_00_Achievement_Gemstone",
                      "value": {
                        "operator": "Variables[0] (TohsakaRin_00_Achievement_Gemstone) || Variables[1] (EnergyBar_CostGemNum) || ADD || RETURN",
                        "displayLines": "(TohsakaRin_00_Achievement_Gemstone + EnergyBar_CostGemNum)",
                        "constants": [],
                        "variables": [
                          "TohsakaRin_00_Achievement_Gemstone",
                          "EnergyBar_CostGemNum"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TMP_Gem_Num) || RETURN",
                        "displayLines": "TMP_Gem_Num",
                        "constants": [],
                        "variables": [
                          "TMP_Gem_Num"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": 1,
                  "Event": [
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
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] (0.9) || RETURN",
                              "displayLines": "0.9",
                              "constants": [],
                              "variables": [
                                0.9
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
                            "Tags": null
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
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (TMP_Gem_Cost) || SUB || RETURN",
                "displayLines": "(0 - TMP_Gem_Cost)",
                "constants": [
                  0
                ],
                "variables": [
                  "TMP_Gem_Cost"
                ]
              }
            },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1161328360\">TohsakaRin_Eidolon1_Enhance</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TMP_Gem_Cost",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "EnergyBar_GemNum_Shadow",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (TMP_Gem_Cost) || RETURN",
                    "displayLines": "TMP_Gem_Cost",
                    "constants": [],
                    "variables": [
                      "TMP_Gem_Cost"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyBar_GemNum_Shadow",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                    "displayLines": "EnergyBar_GemNum_Shadow",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum_Shadow"
                    ]
                  },
                  "priorState": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                    "displayLines": "EnergyBar_GemNum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_GemNum"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
            },
            "Trigger: Ability End"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "RinTohsaka_TohsakaRin_Ability21_Part01": {
      "fileName": "RinTohsaka_TohsakaRin_Ability21_Part01",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_Ability21_Camera",
        "RinTohsaka_TohsakaRin_Ability21_Part01",
        "RinTohsaka_TohsakaRin_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        2,
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
          "ability": "TohsakaRin_Ability21_Part02",
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
    "RinTohsaka_TohsakaRin_Ability02_Part02": {
      "fileName": "RinTohsaka_TohsakaRin_Ability02_Part02",
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
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
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
    "RinTohsaka_TohsakaRin_Ability02_Part01": {
      "fileName": "RinTohsaka_TohsakaRin_Ability02_Part01",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_Ability02_Camera",
        "RinTohsaka_TohsakaRin_Ability02_Part01",
        "RinTohsaka_TohsakaRin_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
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
          "ability": "TohsakaRin_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "RinTohsaka_TohsakaRin_Ability01_Part02": {
      "fileName": "RinTohsaka_TohsakaRin_Ability01_Part02",
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
            "DamageType": "Quantum",
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
    "RinTohsaka_TohsakaRin_Ability01_Part01": {
      "fileName": "RinTohsaka_TohsakaRin_Ability01_Part01",
      "childAbilityList": [
        "RinTohsaka_TohsakaRin_Ability01_Camera",
        "RinTohsaka_TohsakaRin_Ability01_Part01",
        "RinTohsaka_TohsakaRin_Ability01_Part02"
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
          "ability": "TohsakaRin_Ability01_Part02",
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
    }
  }
}