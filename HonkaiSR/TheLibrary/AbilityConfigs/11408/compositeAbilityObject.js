const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 11408,
  "trimCharacterName": 11408,
  "abilityList": [
    "11408_BattleEventAbility_620601_Camera",
    "11408_Phainon_Ability03_BattleEvent",
    "11408_Modifiers",
    "11408_Functions"
  ],
  "abilityObject": {
    "11408_BattleEventAbility_620601_Camera": {
      "fileName": "11408_BattleEventAbility_620601_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11408_Phainon_Ability03_BattleEvent": {
      "fileName": "11408_Phainon_Ability03_BattleEvent",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"62975260\">Phainon_Ability03_BattleEvent_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"320399697\">Phainon_Ability03_BattleEvent_BaseSpeed</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (BE_Speed) || RETURN",
              "displayLines": "BE_Speed",
              "constants": [],
              "variables": [
                "BE_Speed"
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": {
            "operator": "Variables[0] (BE_Index) || Variables[1] (MAX) || Constants[0] (1) || Variables[2] (BE_Count) || Constants[0] (1) || SUB || PARAM_2 || FUNCTION || DIV || RETURN",
            "displayLines": "(BE_Index / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, (BE_Count - 1)))",
            "constants": [
              1
            ],
            "variables": [
              "BE_Index",
              "MAX",
              "BE_Count"
            ]
          }
        },
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (BE_Count) || Variables[1] (BE_Index) || SUB || Constants[0] (1) || SUB || RETURN",
            "displayLines": "((BE_Count - BE_Index) - 1)",
            "constants": [
              1
            ],
            "variables": [
              "BE_Count",
              "BE_Index"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BE_Index",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (BE_Count) || Constants[0] (1) || SUB || RETURN",
              "displayLines": "(BE_Count - 1)",
              "constants": [
                1
              ],
              "variables": [
                "BE_Count"
              ]
            }
          },
          "passed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_2",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1074413210\">Phainon_FinalBE_Hint</a>"
            }
          ],
          "failed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_1",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"133453837\">Phainon_NormalBE_Hint</a>"
            }
          ]
        },
        {
          "name": "Block Advance/Delay Effects",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelist": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}} + {{Caster}}"
          },
          "whitelistTag": 130,
          "whitelistType": "Bit_Decrease"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1583163696\">M_Phainon_10_TriggerSoundOnTurnStart_Advantage</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Lifetime",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Lifetime",
                      "value": {
                        "operator": "Variables[0] (MDF_Lifetime) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_Lifetime - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Lifetime"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2106985142\">M_Phainon_10_TriggerSoundOnTurnStart</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__62975260\">Phainon_Ability03_BattleEvent_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_0",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1074413210\">Phainon_FinalBE_Hint</a>"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "abilityName": "Phainon_Ability31_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Break"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Battle Event's Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1583163696\">M_Phainon_10_TriggerSoundOnTurnStart_Advantage</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Battle Event's Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2106985142\">M_Phainon_10_TriggerSoundOnTurnStart</a>",
                              "casterAssign": "TargetSelf"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Battle Event's Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1583163696\">M_Phainon_10_TriggerSoundOnTurnStart_Advantage</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Battle Event's Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2106985142\">M_Phainon_10_TriggerSoundOnTurnStart</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Phainon_BEInsertAction",
                      "canInjectUltimates": true,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "afterInjection": []
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__320399697\">Phainon_Ability03_BattleEvent_BaseSpeed</a>",
          "stackData": [
            "MDF_PropertyValue"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_PropertyValue",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                        "displayLines": "MDF_PropertyValue",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      },
                      "isRefresh": true
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
    "11408_Modifiers": {
      "fileName": "11408_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-369007412\">RogueBattleevent123_LevelUp2</a>[<span class=\"descriptionNumberColor\">Subduing Evils</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "description": "Can consume 1 stack of this effect to resist a debuff for 1 time, and then restore HP equal to <span class=\"descriptionNumberColor\">MDF_1</span> of Max HP. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_2</span> time(s).",
          "type": "Buff",
          "effectName": "Subduing Evils",
          "statusName": "Subduing Evils",
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-369007412\">RogueBattleevent123_LevelUp2</a>[<span class=\"descriptionNumberColor\">Subduing Evils</span>]",
                  "function": "Add"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1571353533\">RogueBattleevent123_HPAddRatio</a>[<span class=\"descriptionNumberColor\">Path Resonance: Abundance</span>]",
          "stackType": "Replace",
          "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_1</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Path Resonance: Abundance",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1572469434\">RogueBattleevent123_Levelup_5</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Nullifying Ardor</span>]",
          "stackType": "Replace",
          "description": "Each stack increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_1</span>, and Break Effect by <span class=\"descriptionNumberColor\">MDF_2</span>, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Buff",
          "effectName": "Weakness Break Efficiency Boost",
          "statusName": "Resonance Interplay: Nullifying Ardor",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_1 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_1",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_2",
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
          "for": "<a class=\"gModGreen\" id=\"mod__831328805\">RogueBattleevent123_Levelup_4_1</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Mountain High</span>]",
          "stackType": "Replace",
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_1</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Resonance Interplay: Mountain High",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_1 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_1",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1640486188\">RogueBattleevent123_Levelup6_1</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Fleeting Samadhi</span>]",
          "stackType": "Replace",
          "description": "Increases the Ultimate DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Resonance Interplay: Fleeting Samadhi",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                          "value": "MDF_DamageAddRatio"
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddRatio) || Variables[1] (ENEMIES_OBJECT_UNUSED__213) || Variables[2] (_MaxHP) || DIV || Constants[0] (100) || MUL || Variables[3] (ENEMIES_OBJECT_UNUSED__260) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_DamageAddRatio + (((ENEMIES_OBJECT_UNUSED__213 / _MaxHP) * 100) * ENEMIES_OBJECT_UNUSED__260))",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "MDF_DamageAddRatio",
                      "ENEMIES_OBJECT_UNUSED__213",
                      "_MaxHP",
                      "ENEMIES_OBJECT_UNUSED__260"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DamageAddRatio",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__261) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__261",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__261"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageAddRatio",
                      "value": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__261) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__261",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__261"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2059475567\">RogueBattleevent123_Levelup7_1</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Destined Death</span>]",
          "stackType": "Replace",
          "description": "<span class=\"descriptionNumberColor\">MDF_HealCount</span> points of healing has been stored.",
          "type": "Buff",
          "statusName": "Resonance Interplay: Destined Death",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HealCount",
                  "value": {
                    "operator": "Variables[0] (MDF_HealCount) || Variables[1] (ENEMIES_OBJECT_UNUSED__213) || ADD || RETURN",
                    "displayLines": "(MDF_HealCount + ENEMIES_OBJECT_UNUSED__213)",
                    "constants": [],
                    "variables": [
                      "MDF_HealCount",
                      "ENEMIES_OBJECT_UNUSED__213"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HealCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__262) || Variables[1] (_MaxHP) || MUL || RETURN",
                      "displayLines": "(ENEMIES_OBJECT_UNUSED__262 * _MaxHP)",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__262",
                        "_MaxHP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HealCount",
                      "value": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__262) || Variables[1] (_MaxHP) || MUL || RETURN",
                        "displayLines": "(ENEMIES_OBJECT_UNUSED__262 * _MaxHP)",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__262",
                          "_MaxHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__263) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__263",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__263"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_HealCount) || RETURN",
                        "displayLines": "MDF_HealCount",
                        "constants": [],
                        "variables": [
                          "MDF_HealCount"
                        ]
                      },
                      "formula": "Heal from Base Value"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1520947056\">M_Phainon_Ability21_InsertCheck</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"262452933\">Phainon_InsertRetarget</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"262452933\">Phainon_InsertRetarget</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"262452933\">Phainon_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"262452933\">Phainon_InsertRetarget</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"262452933\">Phainon_InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__262452933\">Phainon_InsertRetarget</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2124559598\">Phainon_Ultimate_LimboMark</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-2124559598\">Phainon_Ultimate_LimboMark</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "abilityName": "Phainon_Ability21_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-982733816\">Phainon_Tree03_Property</a>[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Buff",
          "statusName": "Shine with Valor",
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
                    "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1152823097\">Phainon_Eidolon2_Property</a>[<span class=\"descriptionNumberColor\">Sky and Earth Churn Mortal Froth</span>]",
          "description": "Physical RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Sky and Earth Churn Mortal Froth",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          },
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "Those in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
          "type": "Other",
          "statusName": "Ruinous Irontomb",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Assign DEPARTED(Modifier: Standard_Departed)",
                  "groupName": "MuteEntityAction"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__151398776\">Phainon_SPOverflow</a>[<span class=\"descriptionNumberColor\">Coreflame</span>]",
          "stackType": "Multiple",
          "description": "The current number of overflow \"Coreflame\" points is <span class=\"descriptionNumberColor\">MDF_Count</span>. Gains an equal amount of \"Coreflame\" when the transformation ends.",
          "type": "Other",
          "statusName": "Coreflame",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurOverflowSpecialSP",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"463303523\">Phainon_Passive_ChargeEnergyToGainSP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (MDF_Count) || RETURN",
                      "displayLines": "MDF_Count",
                      "constants": [],
                      "variables": [
                        "MDF_Count"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "SpecialEnergy%",
                        "compareType": "<",
                        "value2": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__529435553\">Phainon_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "description": "Additionally implanted Physical Weakness.",
          "type": "Debuff",
          "statusName": "Ruinous Irontomb",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1074413210\">Phainon_FinalBE_Hint</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__133453837\">Phainon_NormalBE_Hint</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1942089860\">Phainon_Ultimate_ActionBarManager</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "({{All Team Members with Unselectable Team Members(Exclude Self)}} - {{Phainon's Forced-Action Teammates}}).[[addBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
              "haloStatus": true,
              "includeBattleEvent": true
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          },
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "({{Modifier Holder}} + {{All Team Members with Unselectable Team Members(Exclude Self)}}).[[addBattleEvents]]"
                      },
                      {
                        "name": "Sort by Modifier Value",
                        "modifier": "<a class=\"gModGreen\" id=\"1889470699\">M_Phainon_Ultimate_ActionOrder</a>"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
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
                      "passed": [
                        {
                          "name": "Set Action-State",
                          "on": null,
                          "stateName": "Phainon_Ultra"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[addBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1889470699\">M_Phainon_Ultimate_ActionOrder</a>"
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-98821838\">Phainon_UltraEnd_Property</a>[<span class=\"descriptionNumberColor\">He Who Bears the World Must Burn</span>]",
                  "duration": 1,
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_5563) || RETURN",
                      "displayLines": "UnusedUnderThisBase_5563",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_5563"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActionOrderIndex",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "({{Modifier Holder}} + {{All Team Members with Unselectable Team Members(Exclude Self)}}).[[addBattleEvents]].[[sortByAV]]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1889470699\">M_Phainon_Ultimate_ActionOrder</a>",
                      "counter": {
                        "operator": "Variables[0] (MDF_ActionOrderIndex) || RETURN",
                        "displayLines": "MDF_ActionOrderIndex",
                        "constants": [],
                        "variables": [
                          "MDF_ActionOrderIndex"
                        ]
                      },
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ActionOrderIndex",
                      "value": {
                        "operator": "Variables[0] (MDF_ActionOrderIndex) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_ActionOrderIndex + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_ActionOrderIndex"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Phainon_Ultra",
                  "state": false,
                  "cancelQueueUlt": true
                },
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
                  "whitelistTag": 46
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
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
                      {
                        "name": "Current Turn's Action Phase is Over",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Reset Turn AV",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "skipTurn": true
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceActionable"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                    },
                    {
                      "name": "Remove Flags from Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": [
                        "FormationAssetCenterWhenSingle"
                      ],
                      "modifierName": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
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
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceActionable"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceActionable",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Phainon's Forced-Action Teammates}}"
                        },
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Flags to Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": [
                            "FormationAssetCenterWhenSingle"
                          ],
                          "modifierName": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                          "casterFilter": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1662843541\">Phainon_Ultimate_VisualManager</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "ListenBattleEventSkill"
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          },
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character UI",
                  "characterName": "Phainon",
                  "icon": "1408.png"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1382374787\">M_Phainon_IsAbility31</a>",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "Adjust Relative to Target, Get Team",
                      {
                        "name": "Filter by Life-State",
                        "state": "Mask_DiedButNotDispose"
                      }
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                    "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                    "constants": [],
                    "variables": [
                      "CurSpecialSP",
                      "CurOverflowSpecialSP"
                    ]
                  },
                  "activeCount": {
                    "operator": "Variables[0] (UnusedUnderThisBase_5594) || RETURN",
                    "displayLines": "UnusedUnderThisBase_5594",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_5594"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (UnusedUnderThisBase_5594) || RETURN",
                    "displayLines": "UnusedUnderThisBase_5594",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_5594"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurSpecialSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_5594) || RETURN",
                      "displayLines": "UnusedUnderThisBase_5594",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_5594"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Action Count",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "variableName": "#CL_MDF_BECount",
                      "livingTargets": true,
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Set Phainon Action Count",
                      "value": {
                        "operator": "Variables[0] (#CL_MDF_BECount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(#CL_MDF_BECount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "#CL_MDF_BECount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2_Limbo"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character UI",
                  "characterName": "Khaslana",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "icon": "1408_02.png"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "variableName": "#CL_MDF_BECount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                },
                {
                  "name": "Set Phainon Action Count",
                  "value": {
                    "operator": "Variables[0] (#CL_MDF_BECount) || RETURN",
                    "displayLines": "#CL_MDF_BECount",
                    "constants": [],
                    "variables": [
                      "#CL_MDF_BECount"
                    ]
                  }
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Skill22_Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_5595) || RETURN",
                    "displayLines": "UnusedUnderThisBase_5595",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_5595"
                    ]
                  }
                },
                {
                  "name": "Set Phainon Charge Points",
                  "value": {
                    "operator": "Variables[0] (Skill22_Energy) || RETURN",
                    "displayLines": "Skill22_Energy",
                    "constants": [],
                    "variables": [
                      "Skill22_Energy"
                    ]
                  }
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "Adjust Relative to Target, Get Team",
                      {
                        "name": "Filter by Life-State",
                        "state": "Mask_DiedButNotDispose"
                      }
                    ]
                  },
                  "stayInTeam": true
                },
                {
                  "name": "Set Phainon Action Count",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_5565) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(UnusedUnderThisBase_5565 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "UnusedUnderThisBase_5565"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal",
                  "bar#": 1
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1985962154\">Phainon_Guard</a>[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2_Defend"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    }
                  ]
                },
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity a Part/Body Extension",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Lineup Position",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "_enemyIndex"
                    },
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variableName": "_enemyCount",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_enemyIndex",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (_enemyCount) || Constants[0] (2) || DIV || RETURN",
                          "displayLines": "(_enemyCount / 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            "_enemyCount"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Phainon_BEInsertAction"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "variableName": "#CL_MDF_BECount",
                      "livingTargets": true,
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Khaslana(Battle Event Cluster)}}"
                        },
                        "compareType": "<=",
                        "value2": 0
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Skill22_Energy",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_5590) || RETURN",
                      "displayLines": "UnusedUnderThisBase_5590",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_5590"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Show",
                      "abilityName": "Skill"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Hide",
                      "abilityName": "Skill"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Action Count",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}"
                      },
                      "variableName": "#CL_MDF_BECount",
                      "livingTargets": true,
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Set Phainon Action Count",
                      "value": {
                        "operator": "Variables[0] (#CL_MDF_BECount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(#CL_MDF_BECount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "#CL_MDF_BECount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
              "execute": [
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
                      "target": "{{Current Action Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": "Skill21",
                        "useActive": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2124559598\">Phainon_Ultimate_LimboMark</a>",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          },
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "EnduranceLogicOnly",
            500,
            "CustomEvent_InfiniteRefresh",
            "FormationAssetCenterWhenSingle",
            "SpecialActionState",
            "SpecialBattleArea"
          ],
          "description": "Immune to Crowd Control debuffs. ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>, and Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio2</span>.",
          "type": "Other",
          "statusName": "Divine Vessel",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1662843541\">Phainon_Ultimate_VisualManager</a>"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1152823097\">Phainon_Eidolon2_Property</a>[<span class=\"descriptionNumberColor\">Sky and Earth Churn Mortal Froth</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_5607) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5607",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5607"
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
              "modifier": "<a class=\"gModGreen\" id=\"529435553\">Phainon_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
              "haloStatus": true
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1985962154\">Phainon_Guard</a>[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"529435553\">Phainon_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1382374787\">M_Phainon_IsAbility31</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1545922215\">Phainon_ClearAvatarArea</a>",
                      "variables": {
                        "IsAsyncLoad": 0
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "PointB1"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"463303523\">Phainon_Passive_ChargeEnergyToGainSP</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (UnusedUnderThisBase_5567) || RETURN",
                          "displayLines": "UnusedUnderThisBase_5567",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_5567"
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
                    "conditionList": "PointB3"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-982733816\">Phainon_Tree03_Property</a>[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_6268) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6268",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6268"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_6198) || RETURN",
                          "displayLines": "UnusedUnderThisBase_6198",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_6198"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
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
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill02"
                },
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
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-471089353\">function_Phainon_UltraEndCheck</a>"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1942089860\">Phainon_Ultimate_ActionBarManager</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Turn Owner}}"
                      },
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Value",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "LifeTime"
                      },
                      "modifierType": "Buff",
                      "execute": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Current Turn Owner}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                          "function": "Add",
                          "value": 1,
                          "valueType": "Duration"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio2) || RETURN",
                    "displayLines": "MDF_PropertyRatio2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio2"
                    ]
                  }
                },
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
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill04"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2124559598\">Phainon_Ultimate_LimboMark</a>"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Phainon_Ability31_SelectTarget_OnLimbo",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "CharacterReviveSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_5598) || RETURN",
                    "displayLines": "UnusedUnderThisBase_5598",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_5598"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "UnOperable"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-471089353\">function_Phainon_UltraEndCheck</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-471089353\">function_Phainon_UltraEndCheck</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-471089353\">function_Phainon_UltraEndCheck</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"253720974\">ClearAvatarArea_ByAbility</a>"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "abilityName": "Phainon_Ability31_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
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
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-471089353\">function_Phainon_UltraEndCheck</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
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
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-471089353\">function_Phainon_UltraEndCheck</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Redirect AV Changes",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "endRedirect": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Khaslana(Battle Event Cluster)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
                        {
                          "name": "Redirect AV Changes",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Khaslana(Battle Event Cluster)}}.[[sortByAV]].[[index1]]"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Start [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-471089353\">function_Phainon_UltraEndCheck</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2124559598\">Phainon_Ultimate_LimboMark</a>"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Khaslana(Battle Event Cluster)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "skillOwner": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "QueuedUltimates",
                            "compareType": "<=",
                            "value2": 0,
                            "includeInjectedActions": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                      },
                      "abilityName": "Phainon_Ability31_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
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
      ],
      "references": []
    },
    "11408_Functions": {
      "fileName": "11408_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__722514042\">Phainon_Passive_AsAbilityTarget</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"463303523\">Phainon_Passive_ChargeEnergyToGainSP</a>",
              "variables": {
                "parameter[0]_AddValue": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}.[[getTeamMembers]] - {{Caster}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1491786902\">Phainon_Passive_Property</a>[<span class=\"descriptionNumberColor\">Pyric Corpus</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_5592) || RETURN",
                    "displayLines": "UnusedUnderThisBase_5592",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_5592"
                    ]
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_5559) || RETURN",
                      "displayLines": "UnusedUnderThisBase_5559",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_5559"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__463303523\">Phainon_Passive_ChargeEnergyToGainSP</a>",
          "parse": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
                "displayLines": "parameter[0]_AddValue",
                "constants": [],
                "variables": [
                  "parameter[0]_AddValue"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "SpecialEnergy%",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 1,
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CurOverflowSpecialSP",
                      "context": "ContextCaster",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1545922215\">Phainon_ClearAvatarArea</a>",
          "parse": [
            {
              "name": "Change Battle Arena",
              "arena": "PhainonBattleArea",
              "tag": "BattleArea01",
              "status": "Inactive",
              "priorityTag": "Character"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "IsAsyncLoad",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Change Character Model",
                  "passed": [
                    {
                      "name": "Set Render/Load State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "showOrLoad": false
                    },
                    "Deleted bullshit"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Change Character Model",
                  "passed": [
                    {
                      "name": "Set Render/Load State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "showOrLoad": false
                    },
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}