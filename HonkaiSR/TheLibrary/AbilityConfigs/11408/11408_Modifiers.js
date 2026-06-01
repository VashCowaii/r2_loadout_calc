const configAbility = {
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
                "operator": "Variables[0] (MDF_DamageAddRatio) || Variables[1] (MDF_OverHeal) || Variables[2] (_MaxHP) || DIV || Constants[0] (100) || MUL || Variables[3] (MDF_OverflowHealToDamageAddRatio) || MUL || ADD || RETURN",
                "displayLines": "(MDF_DamageAddRatio + (((MDF_OverHeal / _MaxHP) * 100) * MDF_OverflowHealToDamageAddRatio))",
                "constants": [
                  100
                ],
                "variables": [
                  "MDF_DamageAddRatio",
                  "MDF_OverHeal",
                  "_MaxHP",
                  "MDF_OverflowHealToDamageAddRatio"
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
                  "operator": "Variables[0] (MDF_MaxDamageAddRatio) || RETURN",
                  "displayLines": "MDF_MaxDamageAddRatio",
                  "constants": [],
                  "variables": [
                    "MDF_MaxDamageAddRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxDamageAddRatio) || RETURN",
                    "displayLines": "MDF_MaxDamageAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_MaxDamageAddRatio"
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
                "operator": "Variables[0] (MDF_HealCount) || Variables[1] (MDF_OverHeal) || ADD || RETURN",
                "displayLines": "(MDF_HealCount + MDF_OverHeal)",
                "constants": [],
                "variables": [
                  "MDF_HealCount",
                  "MDF_OverHeal"
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
                  "operator": "Variables[0] (MDF_HealHPRatio) || Variables[1] (_MaxHP) || MUL || RETURN",
                  "displayLines": "(MDF_HealHPRatio * _MaxHP)",
                  "constants": [],
                  "variables": [
                    "MDF_HealHPRatio",
                    "_MaxHP"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HealCount",
                  "value": {
                    "operator": "Variables[0] (MDF_HealHPRatio) || Variables[1] (_MaxHP) || MUL || RETURN",
                    "displayLines": "(MDF_HealHPRatio * _MaxHP)",
                    "constants": [],
                    "variables": [
                      "MDF_HealHPRatio",
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
                      "operator": "Variables[0] (MDF_MaxHealAmount) || RETURN",
                      "displayLines": "MDF_MaxHealAmount",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHealAmount"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_5597) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5597",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5597"
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
                  "name": "Update Character Panel Visibility",
                  "targetCustom": {
                    "name": "Target Name",
                    "target": "{{Phainon's Forced-Action Teammates}}"
                  },
                  "show": "ShowCustom"
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
                  "name": "Update Character Panel Visibility",
                  "targetCustom": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}} - {{Caster}} - {{Phainon's Forced-Action Teammates}}"
                  },
                  "show": "HideCustom"
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
              "name": "Update Character Panel Visibility"
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
                "operator": "Variables[0] (UnusedUnderThisBase_5628) || RETURN",
                "displayLines": "UnusedUnderThisBase_5628",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_5628"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (UnusedUnderThisBase_5628) || RETURN",
                "displayLines": "UnusedUnderThisBase_5628",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_5628"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_5628) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5628",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5628"
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
              "name": "Update Character Panel Visibility",
              "targetCustom": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}} - {{Caster}} - {{Phainon's Forced-Action Teammates}}"
              },
              "show": "HideCustom"
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
                "operator": "Variables[0] (UnusedUnderThisBase_5629) || RETURN",
                "displayLines": "UnusedUnderThisBase_5629",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_5629"
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
                "operator": "Variables[0] (UnusedUnderThisBase_5599) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(UnusedUnderThisBase_5599 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "UnusedUnderThisBase_5599"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_5624) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5624",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5624"
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
              "operator": "Variables[0] (UnusedUnderThisBase_5641) || RETURN",
              "displayLines": "UnusedUnderThisBase_5641",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_5641"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_5601) || RETURN",
                      "displayLines": "UnusedUnderThisBase_5601",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_5601"
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
                    "operator": "Variables[0] (UnusedUnderThisBase_6302) || RETURN",
                    "displayLines": "UnusedUnderThisBase_6302",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_6302"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_6232) || RETURN",
                      "displayLines": "UnusedUnderThisBase_6232",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_6232"
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
                "operator": "Variables[0] (UnusedUnderThisBase_5632) || RETURN",
                "displayLines": "UnusedUnderThisBase_5632",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_5632"
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
}