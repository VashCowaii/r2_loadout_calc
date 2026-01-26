const configAbility = {
  "fileName": "Acheron_Modifiers",
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
      "for": "Acheron_UltraAbilitySpareCount_PointB1[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_UltraSkillSpareCount) || RETURN",
                "displayLines": "MDF_UltraSkillSpareCount",
                "constants": [],
                "variables": [
                  "MDF_UltraSkillSpareCount"
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ]
        },
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
              "variableName": "MDF_UltraSkillSpareCount",
              "modifierName": "Acheron_UltraAbilitySpareCount_PointB1[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Check Callback Flag Parameter",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBack_SettleSkillOrInsertAbility"
              },
              "passed": [
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
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
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
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "MaxSP",
        "CurrentSP",
        "MDF_SkillUseFlag",
        "MDF_SkillUseDubuff",
        "OnEnterBattleFlag",
        "OnCharacterCreateFlag"
      ],
      "description": "After using the Ultimate, gains Slashed Dream by an amount equal to the number of Quadrivalent Ascendance stacks. At the same time, applies a corresponding number of Crimson Knot stacks to a random enemy. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> time(s).",
      "type": "Other",
      "statusName": "Quadrivalent Ascendance"
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_UltraAbilitySpareCount[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
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
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Check Callback Flag Parameter",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBack_SettleSkillOrInsertAbility"
              },
              "passed": [
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
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
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
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Acheron obtains <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> point(s) of Slashed Dream after she uses her Ultimate, and applies <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> stack(s) of Crimson Knot on a random enemy.",
      "type": "Other",
      "statusName": "Quadrivalent Ascendance"
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Ability03_StancePreview",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
          "displayLines": "ACHERON_OBJECT_UNUSED_1",
          "constants": [],
          "variables": [
            "ACHERON_OBJECT_UNUSED_1"
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Ability02_StancePreview",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
          "displayLines": "ACHERON_OBJECT_UNUSED_1",
          "constants": [],
          "variables": [
            "ACHERON_OBJECT_UNUSED_1"
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Ability01_StancePreview",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
          "displayLines": "ACHERON_OBJECT_UNUSED_1",
          "constants": [],
          "variables": [
            "ACHERON_OBJECT_UNUSED_1"
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Eidolon6_ForceStanceDamage",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "ACHERON_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "ACHERON_OBJECT_UNUSED_1"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Eidolon6_AddRegardAsAbilityType",
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
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": "MDF_PropertyValue"
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
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Basic ATK",
              "extendTypeTo": "Ultimate"
            },
            {
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Skill",
              "extendTypeTo": "Ultimate"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Acheron_Ability01_StancePreview"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Acheron_Ability02_StancePreview"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "CurrentSP",
        "MaxSP"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Eidolon4_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Ultimate DMG Vulnerability</span>]",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "MaxSP",
        "CurrentSP"
      ],
      "description": "Increases Ultimate DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Ultimate DMG Vulnerability",
      "statusName": "Ultimate DMG Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
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
      "latentQueue": [],
      "description": "Reduces All-Type RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting till the end of the Ultimate.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "All-Type RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_DebuffSpecialMark01_Empty",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_SpecialMarkFlowerCount",
                  "modifierName": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Acheron_Ability03_Special",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "trigger": "States_Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "trigger": "States_Normal"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
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
                              "target": "{{Player's Aim Primary-Target}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "States_Ultra"
                            },
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "Sele_Select"
                            },
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "Fade_Cut"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "Sele_UnSelect"
                            },
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "States_Ultra"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Check Callback Flag Parameter",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBack_SettleSkillOrInsertAbility"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_SpecialMarkFlowerCount",
                      "modifierName": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "multiplier": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MaxSP",
        "CurrentSP",
        "MDF_SkillUseFlag",
        "MDF_SkillUseDubuff",
        "OnEnterBattleFlag",
        "OnCharacterCreateFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_Ability03_Special",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Limbo_Count",
                      "value": {
                        "operator": "Variables[0] (Limbo_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Limbo_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Limbo_Count"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Acheron_Ability03_Special",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_Count",
              "modifierName": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
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
                }
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Acheron_Ability03_Special",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Limbo_Count",
                          "value": {
                            "operator": "Variables[0] (Limbo_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Limbo_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Limbo_Count"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_Ability03_Special",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "When removed, immediately deals Lightning DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue01</span> of Acheron's ATK to all enemies once. For every stack of Crimson Knot removed, this DMG multiplier additionally increases, up to a maximum of <span class=\"descriptionNumberColor\">MDF_PropertyValue02</span>.",
      "type": "Other",
      "effectName": "Crimson Knot",
      "statusName": "Crimson Knot"
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_AbilityChange04",
      "stackType": "Replace",
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
              "abilityName": "Skill03",
              "skillSlot": "Ultimate",
              "enableSecondaryType": "ControlSkill03"
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
              "abilityName": "Skill34",
              "skillSlot": "Ultimate",
              "enableSecondaryType": "ControlSkill03"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_AbilityChange03",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill33",
              "skillSlot": "Ultimate",
              "enableSecondaryType": "ControlSkill03"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Ultimate"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_AbilityChange02",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill32",
              "skillSlot": "Ultimate",
              "enableSecondaryType": "ControlSkill03"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Ultimate"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_AbilityChange01",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill31",
              "skillSlot": "Ultimate",
              "enableSecondaryType": "ControlSkill03"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Ultimate"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Ability03_Special",
      "stackType": "Replace",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
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
              "modifier": "Acheron_Ability03_StancePreview"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
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
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "ACHERON_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "ACHERON_OBJECT_UNUSED_1"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Acheron_Ability03_StancePreview"
            },
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
          "eventTrigger": "Leave Battle"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MaxSP",
        "CurrentSP",
        "MDF_SkillUseFlag",
        "MDF_SkillUseDubuff",
        "OnEnterBattleFlag",
        "OnCharacterCreateFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_PointB3_DamageUp[<span class=\"descriptionNumberColor\">Thunder Core</span>]",
      "stackType": "ReplaceByCaster",
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
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Thunder Core"
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Passive01Modifier",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Passive_Count",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                "displayLines": "MDF_Passive_Count",
                "constants": [],
                "variables": [
                  "MDF_Passive_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (9) || RETURN",
                "displayLines": "9",
                "constants": [],
                "variables": [
                  9
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_PassiveLayer",
              "modifierName": "Acheron_Passive01Modifier",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_PassiveLayer) || RETURN",
                "displayLines": "MDF_PassiveLayer",
                "constants": [],
                "variables": [
                  "MDF_PassiveLayer"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (9) || RETURN",
                "displayLines": "9",
                "constants": [],
                "variables": [
                  9
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 4
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_OnListenDeBonusAdd",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_Ability03_Special",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillUseFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_RuondDeBonusCD",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Passive_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (9) || RETURN",
                      "displayLines": "9",
                      "constants": [],
                      "variables": [
                        9
                      ]
                    }
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseDubuff",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Acheron_RuondDeBonusCD"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Acheron_SetEnergyBarState"
                    },
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DebuffNumber"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Red Oni"
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
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Acheron_RuondDeBonusCD"
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
      "stackData": [],
      "latentQueue": [
        "MaxSP",
        "CurrentSP",
        "MDF_SkillUseFlag",
        "MDF_SkillUseDubuff",
        "OnEnterBattleFlag",
        "OnCharacterCreateFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_BlockModifySp",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Switch to Action/Ability Context"
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "adjustment": "Set",
              "ignoreBlock": true
            }
          ]
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
                    "name": "Compare: Variable",
                    "value1": "EnterBattleFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Red Oni"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Acheron_SetEnergyBarState"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnterBattleFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnterBattleFlag",
                  "value": 1
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CurrentSP",
        "MaxSP"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_RuondDeBonusCD",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": [
        "OnCharacterCreateFlag",
        "OnEnterBattleFlag",
        "MDF_SkillUseDubuff",
        "MDF_SkillUseFlag",
        "CurrentSP",
        "MaxSP"
      ]
    }
  ],
  "references": []
}