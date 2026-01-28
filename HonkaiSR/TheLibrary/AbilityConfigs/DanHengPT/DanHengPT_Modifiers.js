const configAbility = {
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
      "for": "DanHengPT_LongLingExtraShield",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_LongLingAttackExtraDamage",
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
      "for": "DanHengPT_LongLingFreeImmediateAction",
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
              "modifier": "DanHengPT_BoostEnergy",
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
              "modifier": "DanHengPT_ImmediateAction"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DanHengPT_IsFreeAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
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
      ],
      "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the enemy target's DEF.",
      "type": "Buff",
      "statusName": "One Dream to Enfold All Wilds"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_Eidolon6_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
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
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "One Dream to Enfold All Wilds"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_Eidolon4",
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
      "for": "DanHengPT_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">By Oath, This Vessel Is I</span>]",
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
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "By Oath, This Vessel Is I"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_Eidolon1[<span class=\"descriptionNumberColor\">Shed Scales of Old</span>]",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "DanHengPT_IsFreeAction"
      ],
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Shed Scales of Old"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Shield"
      ],
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
              "name": "Set Shield State/Value",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
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
                "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.2) || MUL || Variables[2] (400) || ADD || Variables[3] (MDF_MaxShieldRatio) || MUL || RETURN",
                "displayLines": "(((DanHengPT_Attack * 0.2) + 400) * MDF_MaxShieldRatio)",
                "constants": [],
                "variables": [
                  "DanHengPT_Attack",
                  0.2,
                  400,
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
      ],
      "description": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_PointB1_AddAttackRatio[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
      ],
      "stackData": [
        "MDF_AttackDelta"
      ],
      "latentQueue": [
        "DanHengPT_Skill02_Flag"
      ],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Empyreanity"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
              "modifier": "DanHengPT_PointB1_AddAttackRatio[<span class=\"descriptionNumberColor\">Empyreanity</span>]"
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
                  "functionName": "ReduceActionDelay",
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
      ],
      "stackData": [
        "MDF_PointB2_P3_DelayUp",
        "MDF_PointB2_P2_AddSP",
        "MDF_Rank04_AllDamageReduceRatio",
        "MDF_Rank06_AllDamageTypeTakenRatio",
        "MDF_Rank06_DefPentRatio"
      ],
      "latentQueue": [
        "DanHengPT_Skill02_Flag"
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
          "modifier": "DanHengPT_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">By Oath, This Vessel Is I</span>]",
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
          "modifier": "DanHengPT_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
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
          "modifier": "DanHengPT_Eidolon6_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_Eidolon2_LastBoostEnergyFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengPT_BoostEnergy",
      "stackType": "Replace",
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
                          "modifier": "DanHengPT_Eidolon2_LastBoostEnergyFlag"
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
      ],
      "stackData": [
        "MDF_IsStack"
      ],
      "latentQueue": [
        "DanHengPT_IsFreeAction"
      ]
    }
  ],
  "references": []
}