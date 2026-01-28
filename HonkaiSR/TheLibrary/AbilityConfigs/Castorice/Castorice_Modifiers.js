const configAbility = {
  "fileName": "Castorice_Modifiers",
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
      "for": "Castorice_Eidolon6_QuantumPenetrate[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                  "value": "MDF_PropertyValue"
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
        "OverHeal"
      ],
      "description": "When dealing DMG, increases Quantum RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Await for Years to Loom"
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Eidolon4_HealTakenRatio[<span class=\"descriptionNumberColor\">Rest in Songs of Gloom</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
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
        "OverHeal"
      ],
      "description": "The HP restored when receiving healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "HP Restoration Boost",
      "statusName": "Rest in Songs of Gloom"
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]",
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
              "variableName": "MDF_PropertyValue",
              "multiplier": 1
            }
          ]
        }
      ],
      "description": "Can be used to offset the HP cost of Netherwing's Memosprite Skill, \"Breath Scorches the Shadow.\" A maximum of <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> \"Ardent Will\" can be possessed at any given time.",
      "type": "Other",
      "effectName": "Ardent Will",
      "statusName": "Ardent Will"
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Eidolon2_OnListenValueChange",
      "stackType": "ReplaceByCaster",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Castorice_Rank02_Count",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999999,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Castorice_Rank02_Count",
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
                      "modifier": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]",
                      "counter": {
                        "operator": "Variables[0] (Castorice_Rank02_Count) || RETURN",
                        "displayLines": "Castorice_Rank02_Count",
                        "constants": [],
                        "variables": [
                          "Castorice_Rank02_Count"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "OverHeal"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Eidolon2_Check",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_PointB3_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Where The West Wind Dwells</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
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
      "description": "Every stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting until the end of this turn.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Where The West Wind Dwells"
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_PointB1_HealTaxesListen",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Healing",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Castorice_BeingHealValue"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Castorice_MaxSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_MaxSpecialSP",
              "value": {
                "operator": "Variables[0] (Castorice_MaxSpecialSP) || Variables[1] (Castorice_PointB1_HealRatioDown) || MUL || RETURN",
                "displayLines": "(Castorice_MaxSpecialSP * Castorice_PointB1_HealRatioDown)",
                "constants": [],
                "variables": [
                  "Castorice_MaxSpecialSP",
                  "Castorice_PointB1_HealRatioDown"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "HealAmount_CasterAdd",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (Castorice_BeingHealValue) || Variables[2] (Castorice_PointB1_HPPercent) || MUL || Variables[3] (Castorice_MaxSpecialSP) || Variables[4] (Castorice_SumBeingHealValue) || SUB || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Castorice_BeingHealValue * Castorice_PointB1_HPPercent), (Castorice_MaxSpecialSP - Castorice_SumBeingHealValue))",
                "constants": [],
                "variables": [
                  "MIN",
                  "Castorice_BeingHealValue",
                  "Castorice_PointB1_HPPercent",
                  "Castorice_MaxSpecialSP",
                  "Castorice_SumBeingHealValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HealAmount_CasterAdd",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_SumBeingHealValue",
                  "value": {
                    "operator": "Variables[0] (Castorice_SumBeingHealValue) || Variables[1] (HealAmount_CasterAdd) || ADD || RETURN",
                    "displayLines": "(Castorice_SumBeingHealValue + HealAmount_CasterAdd)",
                    "constants": [],
                    "variables": [
                      "Castorice_SumBeingHealValue",
                      "HealAmount_CasterAdd"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "modifier": "Memosprite_CastoriceServant_Passive"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "skipWhenMindControlled": false,
                      "variableName": "HealAmount_ServantAdd",
                      "value": {
                        "operator": "Variables[0] (HealAmount_CasterAdd) || RETURN",
                        "displayLines": "HealAmount_CasterAdd",
                        "constants": [],
                        "variables": [
                          "HealAmount_CasterAdd"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "CastoriceServant_CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "modifier": "Memosprite_CastoriceServant_GoDie"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Memosprite}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Set HP Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "setValue": {
                                "operator": "Variables[0] (CastoriceServant_CurrentHP) || Variables[1] (HealAmount_ServantAdd) || ADD || RETURN",
                                "displayLines": "(CastoriceServant_CurrentHP + HealAmount_ServantAdd)",
                                "constants": [],
                                "variables": [
                                  "CastoriceServant_CurrentHP",
                                  "HealAmount_ServantAdd"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Castorice_AddSpecialSP",
                      "variables": {
                        "_FixedAddValue": {
                          "operator": "Variables[0] (HealAmount_CasterAdd) || RETURN",
                          "displayLines": "HealAmount_CasterAdd",
                          "constants": [],
                          "variables": [
                            "HealAmount_CasterAdd"
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
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_SumBeingHealValue",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_MaxFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_SumBeingHealValue",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_MaxFlag",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_PointB1_HealTaxes",
      "stackData": [],
      "latentQueue": [
        "OverHeal"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}} - {{Caster}}.[[getMemosprite]]"
          },
          "modifier": "Castorice_PointB1_HealTaxesListen",
          "haloStatus": true,
          "valuePerStack": {
            "Castorice_PointB1_HPPercent": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Castorice_PointB1_HealRatioDown": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
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
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Inverted Torch"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_Castorice_PointB2_OnListen",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Castorice_PointB2_HPRatio) || RETURN",
                  "displayLines": "Castorice_PointB2_HPRatio",
                  "constants": [],
                  "variables": [
                    "Castorice_PointB2_HPRatio"
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
                  "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Castorice_PointB2_SpeedRatio) || RETURN",
                      "displayLines": "Castorice_PointB2_SpeedRatio",
                      "constants": [],
                      "variables": [
                        "Castorice_PointB2_SpeedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Castorice_PointB2_HPRatio) || RETURN",
                      "displayLines": "Castorice_PointB2_HPRatio",
                      "constants": [],
                      "variables": [
                        "Castorice_PointB2_HPRatio"
                      ]
                    }
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
                        "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (Castorice_PointB2_SpeedRatio) || RETURN",
                              "displayLines": "Castorice_PointB2_SpeedRatio",
                              "constants": [],
                              "variables": [
                                "Castorice_PointB2_SpeedRatio"
                              ]
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]"
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
      "stackData": [
        "Castorice_PointB2_HPRatio",
        "Castorice_PointB2_SpeedRatio"
      ],
      "latentQueue": [
        "OverHeal"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
      "stackData": [
        "MDF_PropertyValue",
        "MDF_MaxLayer"
      ],
      "latentQueue": [
        "MDF_Castorice_AttackFlag"
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Ability03_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting until the Territory ends.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "All-Type RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Castorice_Ability03_Field",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "SpecialBattleArea"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "DamageCarry",
              "value": 100
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
            },
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
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Castorice_Passive_Count) || RETURN",
                "displayLines": "Castorice_Passive_Count",
                "constants": [],
                "variables": [
                  "Castorice_Passive_Count"
                ]
              },
              "displaySubType": "Percent",
              "displayShowIcon": "False",
              "maximum": {
                "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                "displayLines": "Castorice_Passive_MaxCount",
                "constants": [],
                "variables": [
                  "Castorice_Passive_MaxCount"
                ]
              },
              "assignState": "True",
              "bar#": "Number"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "DamageCarry",
              "value": 10
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
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Skill"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Castorice_Ability03_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
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
      "name": "Modifier Construction",
      "for": "Castorice_LoseHPPreShow",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_PreShowCurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Castorice_Ability03_Field"
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Skill"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_PreShowCurrentHP) || Variables[1] (MDF_LoseHPRatio02) || MUL || RETURN",
                            "displayLines": "(MDF_PreShowCurrentHP * MDF_LoseHPRatio02)",
                            "constants": [],
                            "variables": [
                              "MDF_PreShowCurrentHP",
                              "MDF_LoseHPRatio02"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Skill"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_PreShowCurrentHP) || Variables[1] (MDF_LoseHPRatio01) || MUL || RETURN",
                            "displayLines": "(MDF_PreShowCurrentHP * MDF_LoseHPRatio01)",
                            "constants": [],
                            "variables": [
                              "MDF_PreShowCurrentHP",
                              "MDF_LoseHPRatio01"
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
        }
      ],
      "stackData": [
        "MDF_PreShowMaxHP",
        "MDF_PreShowCurrentHP",
        "MDF_LoseHPRatio01",
        "MDF_LoseHPRatio02"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}