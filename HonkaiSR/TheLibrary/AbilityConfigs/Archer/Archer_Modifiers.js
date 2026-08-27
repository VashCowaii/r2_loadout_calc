const configAbility = {
  "fileName": "Archer_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-300810177\">ADV_StageAbility_Maze_Archer</a>",
      "counter": 1,
      "stackType": "Merge"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1612899858\">Archer_BonusTrigger</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
      "description": "After using Skill, if there are sufficient Skill Points to use it again, the turn will not end.",
      "type": "Other",
      "effectName": "Circuit Connection",
      "statusName": "Circuit Connection",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-130031811\">Archer_BonusAbility02Ready</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02UseCountInCaps",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"308886295\">Archer_BPAbility_AddDamagePercentage</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InBonus",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "QueuedUltimates",
                    "compareType": "=",
                    "value2": 0,
                    "includeInjectedActions": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "QueuedActions",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Flag_HaveOtherAction",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Flag_HaveOtherAction",
                  "value": 1
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
                    "value1": "CurrentSkillPoints",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_BPNeed) || RETURN",
                      "displayLines": "MDF_BPNeed",
                      "constants": [],
                      "variables": [
                        "MDF_BPNeed"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Skill02UseCountInCaps",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_AlreadyInBonusAction",
                    "compareType": "=",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-130031811\">Archer_BonusAbility02Ready</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsWindfurySkill",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": [
                        "Archer_Bonus"
                      ],
                      "skillType": "ControlSkill02",
                      "canInjectUltimates": true,
                      "followSameTagAsAction": true,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InBonus",
                          "value": 0
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InBonus",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AlreadyInBonusAction",
                  "value": 1
                }
              ],
              "failed": [
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
                        "value1": "MDF_Flag_HaveOtherAction",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Next Extra Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "actionType": "Normal"
                          },
                          {
                            "name": "Next Extra Turn Is",
                            "invertCondition": true,
                            "tag": "Archer_Bonus"
                          },
                          {
                            "name": "Next Extra Turn Is",
                            "invertCondition": true,
                            "tag": "ActionTag_Windfury"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Skill02UseCountInCaps",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (5) || RETURN",
                              "displayLines": "5",
                              "constants": [],
                              "variables": [
                                5
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_IsWindfurySkill",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_BPNeed) || RETURN",
                      "displayLines": "MDF_BPNeed",
                      "constants": [],
                      "variables": [
                        "MDF_BPNeed"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "QueuedUltimates",
                    "compareType": "=",
                    "value2": 0,
                    "includeInjectedActions": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "QueuedActions",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-130031811\">Archer_BonusAbility02Ready</a>",
      "latentQueue": [
        "MDF_InBonus",
        "MDF_Flag_HaveOtherAction",
        "MDF_AlreadyInBonusAction",
        "MDF_IsWindfurySkill"
      ],
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
              "skillSlot": "Basic ATK",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
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
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__308886295\">Archer_BPAbility_AddDamagePercentage</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Each stack increases DMG dealt by Skill by <span class=\"descriptionNumberColor\">#Skill02_P2_ExtraDamage</span>.",
      "type": "Buff",
      "effectName": "Enhanced Skill",
      "statusName": "Circuit Connection",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02ExtraCount",
              "value": 0
            }
          ]
        },
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
                      "value": "(MDF_Skill02ExtraCount * MDF_PropertyValue)"
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
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Skill02ExtraCount",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1473893661\">Archer_Eidolon2_AddWeak</a>[<span class=\"descriptionNumberColor\">The Unfulfilled Happiness</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "WEAKNESS_IMPLANT"
      ],
      "description": "Additionally implanted Quantum Weakness. Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implanted Quantum Weakness",
      "statusName": "The Unfulfilled Happiness",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Implant Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "element": "Quantum",
              "resReduction": {
                "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                "displayLines": "-MDF_PropertyValue",
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
      "for": "<a class=\"gModGreen\" id=\"mod__496562314\">Archer_Insert_Target</a>"
    }
  ],
  "references": []
}