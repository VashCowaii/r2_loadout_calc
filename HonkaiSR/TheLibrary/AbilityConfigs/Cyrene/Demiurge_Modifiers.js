const configAbility = {
  "fileName": "Demiurge_Modifiers",
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
      "for": "Memosprite_CyreneServant_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Remembrance, Sung in Ripples ♪</span>]",
      "modifierFlags": [
        "STAT_DefenceDown"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Remembrance, Sung in Ripples ♪"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_Eidolon6",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}.[[removeBattleEvents]]"
          },
          "modifier": "Memosprite_CyreneServant_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Remembrance, Sung in Ripples ♪</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1414,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Dan Heng • Permansor Terrae"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_DanHengPT_ExtraDamageCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG dealt by the \"Bondmate's\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>. The next <span class=\"descriptionNumberColor\">MDF_DanHengPT_ExtraDamageCount</span> attack(s) from \"Souldragon\" deals Additional DMG of the corresponding Type equal to <span class=\"descriptionNumberColor\">MDF_DamageRatio</span> of the Bondmate's Shield Effect."
                }
              ],
              "failed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG dealt by \"Bondmate\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]"
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageIncrease": {
                      "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                      "displayLines": "MDF_DamageIncrease",
                      "constants": [],
                      "variables": [
                        "MDF_DamageIncrease"
                      ]
                    }
                  }
                }
              ]
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
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG dealt by \"Bondmate\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>."
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG dealt by the \"Bondmate's\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>. The next <span class=\"descriptionNumberColor\">MDF_DanHengPT_ExtraDamageCount</span> attack(s) from \"Souldragon\" deals Additional DMG of the corresponding Type equal to <span class=\"descriptionNumberColor\">MDF_DamageRatio</span> of the Bondmate's Shield Effect."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageIncrease",
        "MDF_DanHengPT_ExtraDamageCount",
        "MDF_DamageRatio"
      ],
      "latentQueue": [
        "IsInRank01Action",
        "IsInPlayerAction"
      ],
      "description": "DMG dealt by \"Bondmate\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "effectName": "Ode to Earth",
      "statusName": "Ode to Earth",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
              "displayLines": "MDF_DamageIncrease",
              "constants": [],
              "variables": [
                "MDF_DamageIncrease"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Evernight[<span class=\"descriptionNumberColor\">Ode to Time</span>]",
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
              "scope": "ContextOwner",
              "variableName": "S02_ExtraRatio",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Anyone]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill11"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
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
                      "value": "MDF_EverNightRatio"
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
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable": "_Evernight_00_Extra_Energy",
                  "target2": null,
                  "variable2": "Evernight_00_Extra_Energy"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Partner_Count_Show",
                  "context": "ContextOwner",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraPoint) || Variables[1] (Evernight_00_Extra_Energy) || ADD || RETURN",
                    "displayLines": "(MDF_ExtraPoint + Evernight_00_Extra_Energy)",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraPoint",
                      "Evernight_00_Extra_Energy"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "variableName": "_Partner_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraPoint) || Variables[1] (Evernight_00_Extra_Energy) || ADD || RETURN",
                    "displayLines": "(MDF_ExtraPoint + Evernight_00_Extra_Energy)",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraPoint",
                      "Evernight_00_Extra_Energy"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_EverNightRatio",
        "MDF_ExtraPoint"
      ],
      "latentQueue": [],
      "description": "When Evey uses the Memosprite Skill \"Dream, Dissolving, as Dew,\" DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_EverNightRatio</span>. After Evernight uses Skill/Ultimate, gains <span class=\"descriptionNumberColor\">MDF_ExtraPoint</span> additional \"Memoria.\"",
      "type": "Buff",
      "effectName": "Ode to Time",
      "statusName": "Ode to Time",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Phainon_Dot",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "passed": [
                "Modifier Deletes Itself"
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
                "value1": "_Switch",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "CurrentHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                    "displayLines": "MDF_LoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHP"
                    ]
                  },
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Fire"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Switch",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Switch",
              "value": 0
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackLimit": 1,
      "addStacksPerTrigger": 1,
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Khaslana will maintain the \"Divine Vessel\" state: With the blessing of companions, flames shall thoroughly illuminate the darkness.",
      "type": "Buff",
      "statusName": "Eternal Ignition",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Phainon[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (MDF_Kindling) || RETURN",
                  "displayLines": "MDF_Kindling",
                  "constants": [],
                  "variables": [
                    "MDF_Kindling"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "passed": [
                "Modifier Deletes Itself"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Loop) || RETURN",
                    "displayLines": "MDF_Loop",
                    "constants": [],
                    "variables": [
                      "MDF_Loop"
                    ]
                  },
                  "Event": [
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
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                              "displayLines": "MDF_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG",
                            "EnergyGainPercent": "100%"
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
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable": "CurSpecialSP",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "MDF_CurSpecialSP",
              "scope": "ContextModifier"
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable": "CurOverflowSpecialSP",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "MDF_CurOverflowSpecialSP",
              "scope": "ContextModifier"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurSpecialSP",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (MDF_EnergyNeed) || Variables[1] (CurOverflowSpecialSP) || SUB || RETURN",
                  "displayLines": "(MDF_EnergyNeed - CurOverflowSpecialSP)",
                  "constants": [],
                  "variables": [
                    "MDF_EnergyNeed",
                    "CurOverflowSpecialSP"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_CurSpecialSP) || Variables[2] (MDF_CurOverflowSpecialSP) || ADD || Variables[3] (MDF_EnergyNeed) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_PropertyRatio * ((MDF_CurSpecialSP + MDF_CurOverflowSpecialSP) - MDF_EnergyNeed))",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio",
                      "MDF_CurSpecialSP",
                      "MDF_CurOverflowSpecialSP",
                      "MDF_EnergyNeed"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_FinalRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PropertyRatioMax) || RETURN",
                      "displayLines": "MDF_PropertyRatioMax",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyRatioMax"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyRatioMax) || RETURN",
                        "displayLines": "MDF_PropertyRatioMax",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyRatioMax"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "referenceModifier": "MReference_CriticalDamageUp",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_FinalRatio) || RETURN",
                      "displayLines": "MDF_FinalRatio",
                      "constants": [],
                      "variables": [
                        "MDF_FinalRatio"
                      ]
                    }
                  }
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
                "name": "Modifier Was",
                "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                }
              ]
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
                "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Dot",
                  "valuePerStack": {
                    "MDF_LoseHP": {
                      "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                      "displayLines": "MDF_LoseHP",
                      "constants": [],
                      "variables": [
                        "MDF_LoseHP"
                      ]
                    },
                    "MDF_DamageIncrease": {
                      "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                      "displayLines": "MDF_DamageIncrease",
                      "constants": [],
                      "variables": [
                        "MDF_DamageIncrease"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageIncrease",
        "MDF_LoseHP",
        "MDF_Loop",
        "MDF_DamagePercentage",
        "MDF_EnergyNeed",
        "MDF_PropertyRatio",
        "MDF_PropertyRatioMax",
        "MDF_Kindling",
        "MDF_ChargeEnergy"
      ],
      "latentQueue": [],
      "description": "Gains \"Eternal Ignition\" when transforming. While holding \"Eternal Ignition,\" increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>, and consumes HP equal to <span class=\"descriptionNumberColor\">MDF_LoseHP</span> of the current HP at the start of the extra turn. After using an attack, deals extra Fire Additional DMG to one random enemy.",
      "type": "Buff",
      "effectName": "Ode to Worldbearing",
      "statusName": "Ode to Worldbearing",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub2",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_DefenceDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDefDown",
                  "value": {
                    "operator": "Variables[0] (MDF_DefDown) || RETURN",
                    "displayLines": "MDF_DefDown",
                    "constants": [],
                    "variables": [
                      "MDF_DefDown"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDefDown",
                  "value": {
                    "operator": "Variables[0] (MDF_DefDown2) || RETURN",
                    "displayLines": "MDF_DefDown2",
                    "constants": [],
                    "variables": [
                      "MDF_DefDown2"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_FinalDefDown) || SUB || RETURN",
                "displayLines": "(0 - MDF_FinalDefDown)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_FinalDefDown"
                ]
              },
              "isRefresh": true
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
                "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDefDown",
                  "value": {
                    "operator": "Variables[0] (MDF_DefDown) || RETURN",
                    "displayLines": "MDF_DefDown",
                    "constants": [],
                    "variables": [
                      "MDF_DefDown"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_FinalDefDown) || SUB || RETURN",
                    "displayLines": "(0 - MDF_FinalDefDown)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_FinalDefDown"
                    ]
                  },
                  "isRefresh": true
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
                "name": "Modifier Was",
                "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDefDown",
                  "value": {
                    "operator": "Variables[0] (MDF_DefDown2) || RETURN",
                    "displayLines": "MDF_DefDown2",
                    "constants": [],
                    "variables": [
                      "MDF_DefDown2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_FinalDefDown) || SUB || RETURN",
                    "displayLines": "(0 - MDF_FinalDefDown)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_FinalDefDown"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_FinalDefDown</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Ode to Trickery"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Cipher[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageIncrease",
        "MDF_DefDown",
        "MDF_DefDown2"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "effectName": "Ode to Trickery",
      "statusName": "Ode to Trickery",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DefDown": {
              "operator": "Variables[0] (MDF_DefDown) || RETURN",
              "displayLines": "MDF_DefDown",
              "constants": [],
              "variables": [
                "MDF_DefDown"
              ]
            },
            "MDF_DefDown2": {
              "operator": "Variables[0] (MDF_DefDown2) || RETURN",
              "displayLines": "MDF_DefDown2",
              "constants": [],
              "variables": [
                "MDF_DefDown2"
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
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Halo[<span class=\"descriptionNumberColor\">True Knowledge</span>]",
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
                      "value": "MDF_DamageIncrease"
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                "displayLines": "MDF_AttackAddRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span> and Skill DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "True Knowledge"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Sub",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Target is Pathstrider",
                  "path": [
                    "Erudition"
                  ],
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              }
            ]
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Halo[<span class=\"descriptionNumberColor\">True Knowledge</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
              "displayLines": "MDF_DamageIncrease",
              "constants": [],
              "variables": [
                "MDF_DamageIncrease"
              ]
            },
            "MDF_AttackAddRatio": {
              "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
              "displayLines": "MDF_AttackAddRatio",
              "constants": [],
              "variables": [
                "MDF_AttackAddRatio"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa_HaloMain",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Sub",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_DamageIncrease": {
                      "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                      "displayLines": "MDF_DamageIncrease",
                      "constants": [],
                      "variables": [
                        "MDF_DamageIncrease"
                      ]
                    },
                    "MDF_AttackAddRatio": {
                      "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                      "displayLines": "MDF_AttackAddRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AttackAddRatio"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AnaxaCount",
        "MDF_DamageIncrease",
        "MDF_AttackAddRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa[<span class=\"descriptionNumberColor\">Ode to Reason</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Skill02_ExtraHitCount",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] (MDF_AnaxaCount) || RETURN",
                "displayLines": "MDF_AnaxaCount",
                "constants": [],
                "variables": [
                  "MDF_AnaxaCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Skill02_ExtraHitCount",
              "context": "TargetEntity",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_AnaxaCount) || SUB || RETURN",
                "displayLines": "(0 - MDF_AnaxaCount)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_AnaxaCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AnaxaCount",
        "MDF_DamageIncrease",
        "MDF_AttackAddRatio"
      ],
      "latentQueue": [],
      "description": "The number of DMG instances dealt by the Skill increases by <span class=\"descriptionNumberColor\">MDF_AnaxaCount</span>.",
      "type": "Buff",
      "effectName": "Ode to Reason",
      "statusName": "Ode to Reason",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "CRIT DMG Boost",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Cerydra_Ability02_Target"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Cerydra[<span class=\"descriptionNumberColor\">Ode to Law</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_WindfuryCostFixValue",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] (MDF_ExtraPoint) || INVERT || RETURN",
                "displayLines": "-MDF_ExtraPoint",
                "constants": [],
                "variables": [
                  "MDF_ExtraPoint"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_WindfuryCostFixValue",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] (MDF_ExtraPoint) || RETURN",
                "displayLines": "MDF_ExtraPoint",
                "constants": [],
                "variables": [
                  "MDF_ExtraPoint"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Cerydra_Ability02_Target_Lv1[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "Cerydra_Ability02_Target_Lv2[<span class=\"descriptionNumberColor\">Peerage</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Cerydra's Promotion Target}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageIncrease": {
                      "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                      "displayLines": "MDF_DamageIncrease",
                      "constants": [],
                      "variables": [
                        "MDF_DamageIncrease"
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
        "MDF_DamageIncrease",
        "MDF_ExtraPoint"
      ],
      "latentQueue": [],
      "description": "The character with \"Military Merit\" has <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span> increased CRIT DMG. After Coup de Main ends, Cerydra gains <span class=\"descriptionNumberColor\">MDF_ExtraPoint</span> Charge.",
      "type": "Buff",
      "effectName": "Ode to Law",
      "statusName": "Ode to Law",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Cerydra's Promotion Target}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
              "displayLines": "MDF_DamageIncrease",
              "constants": [],
              "variables": [
                "MDF_DamageIncrease"
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
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub[<span class=\"descriptionNumberColor\">Flowing Warmth</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                "displayLines": "MDF_SPAdd",
                "constants": [],
                "variables": [
                  "MDF_SPAdd"
                ]
              },
              "isFixed": "* ERR"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_SPAdd"
      ],
      "latentQueue": [],
      "description": "After attacking, regenerates <span class=\"descriptionNumberColor\">MDF_SPAdd</span> Energy.",
      "type": "Buff",
      "statusName": "Flowing Warmth"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Harscyline[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HarscylineRatio) || RETURN",
                "displayLines": "MDF_HarscylineRatio",
                "constants": [],
                "variables": [
                  "MDF_HarscylineRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Basic ATK"
              },
              "passed": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT",
                  "value": {
                    "operator": "Variables[0] (MDF_DotRatio1) || RETURN",
                    "displayLines": "MDF_DotRatio1",
                    "constants": [],
                    "variables": [
                      "MDF_DotRatio1"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT",
                      "value": {
                        "operator": "Variables[0] (MDF_DotRatio2) || RETURN",
                        "displayLines": "MDF_DotRatio2",
                        "constants": [],
                        "variables": [
                          "MDF_DotRatio2"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HarscylineRatio",
        "MDF_DotRatio1",
        "MDF_DotRatio2"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_HarscylineRatio</span>. After using Basic ATK/Skill to attack enemy targets, DoT debuffs additionally produces 1 instance of DMG.",
      "type": "Buff",
      "effectName": "Ode to Ocean",
      "statusName": "Ode to Ocean",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2[<span class=\"descriptionNumberColor\">Romantic</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                "displayLines": "MDF_SPAdd",
                "constants": [],
                "variables": [
                  "MDF_SPAdd"
                ]
              },
              "isFixed": "* ERR"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                  "target": "{{Modifier Holder}}.[[getMemosprite]]"
                }
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                    "displayLines": "MDF_SPAdd",
                    "constants": [],
                    "variables": [
                      "MDF_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SPAdd"
      ],
      "latentQueue": [],
      "description": "Regenerates <span class=\"descriptionNumberColor\">MDF_SPAdd</span> Energy after Aglaea or Garmentmaker attacks.",
      "type": "Buff",
      "statusName": "Romantic"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
                  "value": "(0 - MDF_IgnoreDef)"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Aglaea[<span class=\"descriptionNumberColor\">Ode to Romance</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_IgnoreDef)"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}.[[getMemosprite]]"
                },
                "modifier": "Memosprite_AglaeaServant_Passive"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "Memosprite_AglaeaServant_Passive",
                  "variable": "_MaxLayer",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "_MaxLayer"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageIncrease",
        "MDF_IgnoreDef"
      ],
      "latentQueue": [],
      "description": "DMG dealt by Aglaea and Garmentmaker increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span> and ignores <span class=\"descriptionNumberColor\">MDF_IgnoreDef</span> of targets' DEF.",
      "type": "Buff",
      "effectName": "Ode to Romance",
      "statusName": "Ode to Romance",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}.[[getMemosprite]]"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
              "displayLines": "MDF_DamageIncrease",
              "constants": [],
              "variables": [
                "MDF_DamageIncrease"
              ]
            },
            "MDF_IgnoreDef": {
              "operator": "Variables[0] (MDF_IgnoreDef) || RETURN",
              "displayLines": "MDF_IgnoreDef",
              "constants": [],
              "variables": [
                "MDF_IgnoreDef"
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
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_ListenWindfury",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "ActionTag_Windfury"
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsWindfurySkill",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "ActionTag_Windfury"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsWindfurySkill",
                  "value": 0
                },
                "Modifier Deletes Itself"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Standard_Windfury_ModifyAbilityPropertyByType_Normal"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "Standard_Windfury_ModifyAbilityPropertyByType_Skill"
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Energy/Special Cost Value Change [Owner]: Before",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "changeIndex": 1,
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_IsWindfurySkill",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Override Special Cost Deductions",
                  "overrideValue": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
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
                  "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
              },
              "passed": [
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
                      "actionTag": "CyreneGivenMydeimos",
                      "skillIndex": 4,
                      "forceAction": true,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster"
                        }
                      ],
                      "abortFlags": [
                        "STAT_MydeimosRemoveTransfer"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster",
                      "addStacksPerTrigger": -1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Layer",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_Sub[<span class=\"descriptionNumberColor\">Ode to Strife</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritDamage) || RETURN",
                "displayLines": "MDF_CritDamage",
                "constants": [],
                "variables": [
                  "MDF_CritDamage"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_BPSkill21_Plus",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Standard_Windfury"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_ListenWindfury"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Energy/Special Cost Value Change [Owner]: Before",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Change_In_Current_Value",
                "changeIndex": 1,
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Override Special Cost Deductions",
                  "overrideValue": 0
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos[Counter]",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BPSkill21_Plus",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CritDamage</span>.",
      "type": "Buff",
      "effectName": "Ode to Strife",
      "statusName": "Ode to Strife"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "toRemove": [
                "STAT_CTRL"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
              },
              "passed": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "CyreneGivenMydeimos",
                  "skillIndex": 4,
                  "forceAction": true,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "afterInjection": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster"
                    }
                  ],
                  "abortFlags": [
                    "STAT_MydeimosRemoveTransfer"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "value": "-MDF_ActionDelay"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_NoTransferFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_NoTransferFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_NoTransferFlag",
                  "value": 0
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
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "CyreneGivenMydeimos"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_Sub[<span class=\"descriptionNumberColor\">Ode to Strife</span>]",
                  "valuePerStack": {
                    "MDF_CritDamage": {
                      "operator": "Variables[0] (MDF_CritDamage) || RETURN",
                      "displayLines": "MDF_CritDamage",
                      "constants": [],
                      "variables": [
                        "MDF_CritDamage"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "CyreneGivenMydeimos"
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CritDamage",
        "MDF_ActionDelay"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Tribbie[<span class=\"descriptionNumberColor\">Ode to Passage</span>]",
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
              "scope": "ContextOwner",
              "variableName": "MDF_ExtraLoopCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_IgnoreDef)"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextOwner",
                  "variableName": "MDF_ExtraLoopCount",
                  "value": {
                    "operator": "Variables[0] (MDF_TribbieLoopCount) || RETURN",
                    "displayLines": "MDF_TribbieLoopCount",
                    "constants": [],
                    "variables": [
                      "MDF_TribbieLoopCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextOwner",
                  "variableName": "MDF_ExtraLoopCount",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_TribbieLoopCount",
        "MDF_IgnoreDef",
        "MDF_TargetCount"
      ],
      "latentQueue": [],
      "description": "DMG dealt ignores <span class=\"descriptionNumberColor\">MDF_IgnoreDef</span> of the enemy's DEF. When Tribbie launches Follow-Up ATK and triggers the Additional DMG from Tribbie's Zone, it will further deal <span class=\"descriptionNumberColor\">MDF_TribbieLoopCount</span> instance(s) of Additional DMG.",
      "type": "Buff",
      "effectName": "Ode to Passage",
      "statusName": "Ode to Passage",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Cyrene_Player_InsertActionCheck",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Player_InsertRetarget"
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
              "functionName": "_T_Cyrene_Player_InsertRetarget"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Player_InsertRetarget"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Player_InsertRetarget"
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
                  "functionName": "_T_Cyrene_Player_InsertRetarget"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "_T_Cyrene_Player_InsertRetarget",
          "parse": [
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "_M_Cyrene_Player_Ability01Prepare",
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "CyreneServant_Ability01_PlayerExtra",
                          "forceAction": true,
                          "abilityName": "Servant_CyreneServant_FormationReset",
                          "castTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "afterInjection": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "_M_Cyrene_Player_Ability01Prepare",
                              "addStacksPerTrigger": -1
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "_M_Cyrene_Player_InsertActionCheck",
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "ignoreCost": true
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackLimit": 99999
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Cyrene_Player_Ability01Prepare",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "CyreneServant_Ability01_PlayerExtra"
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Ode to Genesis"
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
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "CyreneServant_Ability01_PlayerExtra"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsInPlayerAction",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "stackLimit": 99999
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Cyrene_Player_PropertySyncer",
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_AmazingBonus_Player_AttackSyncer"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_AmazingBonus_Player_AttackSyncer"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_AmazingBonus_Player_AttackSyncer"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CasterCritRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
                      "variableName": "MDF_CritAddRatio",
                      "value": {
                        "operator": "Variables[0] (0.72) || Variables[1] (CasterCritRatio) || MUL || RETURN",
                        "displayLines": "(0.72 * CasterCritRatio)",
                        "constants": [],
                        "variables": [
                          0.72,
                          "CasterCritRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "_T_AmazingBonus_Player_AttackSyncer",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "CasterHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "CasterHPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
                  "variableName": "MDF_AttackAddRatio",
                  "value": {
                    "operator": "Variables[0] (0.16) || Variables[1] (CasterHP) || Variables[2] (CasterHPConvert) || SUB || MUL || RETURN",
                    "displayLines": "(0.16 * (CasterHP - CasterHPConvert))",
                    "constants": [],
                    "variables": [
                      0.16,
                      "CasterHP",
                      "CasterHPConvert"
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
      "for": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
              "modifierNameUpdate": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterHPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AttackAddRatio",
              "value": {
                "operator": "Variables[0] (MDF_HPTransferRatio) || Variables[1] (CasterHP) || Variables[2] (CasterHPConvert) || SUB || MUL || RETURN",
                "displayLines": "(MDF_HPTransferRatio * (CasterHP - CasterHPConvert))",
                "constants": [],
                "variables": [
                  "MDF_HPTransferRatio",
                  "CasterHP",
                  "CasterHPConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                "displayLines": "MDF_AttackAddRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddRatio"
                ]
              },
              "isRefresh": true
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterCritRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CritAddRatio",
              "value": {
                "operator": "Variables[0] (MDF_CritTranferRatio) || Variables[1] (CasterCritRatio) || MUL || RETURN",
                "displayLines": "(MDF_CritTranferRatio * CasterCritRatio)",
                "constants": [],
                "variables": [
                  "MDF_CritTranferRatio",
                  "CasterCritRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                "displayLines": "MDF_CritAddRatio",
                "constants": [],
                "variables": [
                  "MDF_CritAddRatio"
                ]
              },
              "isRefresh": true
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_AttackAddRatio",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_CritAddRatio",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                    "displayLines": "MDF_CritAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CritAddRatio"
                    ]
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
      "for": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterHPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AttackAddRatio",
              "value": {
                "operator": "Variables[0] (MDF_HPTransferRatio) || Variables[1] (CasterHP) || Variables[2] (CasterHPConvert) || SUB || MUL || RETURN",
                "displayLines": "(MDF_HPTransferRatio * (CasterHP - CasterHPConvert))",
                "constants": [],
                "variables": [
                  "MDF_HPTransferRatio",
                  "CasterHP",
                  "CasterHPConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                "displayLines": "MDF_AttackAddRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddRatio"
                ]
              },
              "isRefresh": true
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterCritRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CritAddRatio",
              "value": {
                "operator": "Variables[0] (MDF_CritTranferRatio) || Variables[1] (CasterCritRatio) || MUL || RETURN",
                "displayLines": "(MDF_CritTranferRatio * CasterCritRatio)",
                "constants": [],
                "variables": [
                  "MDF_CritTranferRatio",
                  "CasterCritRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                "displayLines": "MDF_CritAddRatio",
                "constants": [],
                "variables": [
                  "MDF_CritAddRatio"
                ]
              },
              "isRefresh": true
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill11"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "_M_Cyrene_Player_Ability01Prepare",
                  "addStacksPerTrigger": 1
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "CyreneServant_Ability01_PlayerExtra",
                  "forceAction": true,
                  "abilityName": "Servant_CyreneServant_FormationReset",
                  "castTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "afterInjection": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "_M_Cyrene_Player_Ability01Prepare",
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "_M_Cyrene_Player_InsertActionCheck",
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "ignoreCost": true
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_AttackAddRatio",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifierName": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
                  "variableName": "MDF_AttackAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_CritAddRatio",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                    "displayLines": "MDF_CritAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CritAddRatio"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifierName": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
                  "variableName": "MDF_CritAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                    "displayLines": "MDF_CritAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CritAddRatio"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPTransferRatio",
        "MDF_CritTranferRatio"
      ],
      "latentQueue": [],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>, CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_CritAddRatio</span>. After using Enhanced Basic ATK, Demiurge immediately gains 1 extra turn and automatically uses \"Minuet of Blooms and Plumes.\"",
      "type": "Buff",
      "effectName": "Ode to Genesis",
      "statusName": "Ode to Genesis",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}.[[getMemosprite]]"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_HPTransferRatio": {
              "operator": "Variables[0] (MDF_HPTransferRatio) || RETURN",
              "displayLines": "MDF_HPTransferRatio",
              "constants": [],
              "variables": [
                "MDF_HPTransferRatio"
              ]
            },
            "MDF_CritTranferRatio": {
              "operator": "Variables[0] (MDF_CritTranferRatio) || RETURN",
              "displayLines": "MDF_CritTranferRatio",
              "constants": [],
              "variables": [
                "MDF_CritTranferRatio"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "_M_Cyrene_Player_PropertySyncer"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Castorice_Sub[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "SkillP04_P1_ExtraAddPercentage",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] (_FinalSuicideRatio) || INVERT || RETURN",
                "displayLines": "-_FinalSuicideRatio",
                "constants": [],
                "variables": [
                  "_FinalSuicideRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}.[[removeUnselectable]]"
                },
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_TargetCount) || RETURN",
                  "displayLines": "MDF_TargetCount",
                  "constants": [],
                  "variables": [
                    "MDF_TargetCount"
                  ]
                },
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_FinalSuicideRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_SuicideRatioBase) || Variables[1] (MDF_SuicideRatioBase2) || ADD || Variables[2] (MDF_ExtraSP_PercentCount) || MUL || RETURN",
                    "displayLines": "((MDF_SuicideRatioBase + MDF_SuicideRatioBase2) * MDF_ExtraSP_PercentCount)",
                    "constants": [],
                    "variables": [
                      "MDF_SuicideRatioBase",
                      "MDF_SuicideRatioBase2",
                      "MDF_ExtraSP_PercentCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_FinalSuicideRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_SuicideRatioBase) || Variables[1] (MDF_ExtraSP_PercentCount) || MUL || RETURN",
                    "displayLines": "(MDF_SuicideRatioBase * MDF_ExtraSP_PercentCount)",
                    "constants": [],
                    "variables": [
                      "MDF_SuicideRatioBase",
                      "MDF_ExtraSP_PercentCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "SkillP04_P1_ExtraAddPercentage",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] (_FinalSuicideRatio) || RETURN",
                "displayLines": "_FinalSuicideRatio",
                "constants": [],
                "variables": [
                  "_FinalSuicideRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "The multiplier increases by <span class=\"descriptionNumberColor\">_FinalSuicideRatio</span> for the DMG dealt when triggering the ability effect of the Talent \"Wings Sweep the Ruins.\"",
      "type": "Buff",
      "statusName": "Ode to Life and Death"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Castorice_MaxSP",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
              "variableName": "_MaxSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_MaxSpecialSP) || Variables[1] (MDF_ExtraRatio) || MUL || RETURN",
                "displayLines": "(_MaxSpecialSP * MDF_ExtraRatio)",
                "constants": [],
                "variables": [
                  "_MaxSpecialSP",
                  "MDF_ExtraRatio"
                ]
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_MaxSpecialSP) || Variables[1] (MDF_ExtraRatio) || MUL || RETURN",
                    "displayLines": "(_MaxSpecialSP * MDF_ExtraRatio)",
                    "constants": [],
                    "variables": [
                      "_MaxSpecialSP",
                      "MDF_ExtraRatio"
                    ]
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
      "for": "Cyrene_UITop",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
      "for": "Memosprite_CyreneServant_AmazingBonus_Castorice[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "state": "Mask_AliveOnly"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_ExtraSP_PercentCount",
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Castorice_Sub[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
                  "valuePerStack": {
                    "MDF_ExtraSP_PercentCount": {
                      "operator": "Variables[0] (_ExtraSP_PercentCount) || RETURN",
                      "displayLines": "_ExtraSP_PercentCount",
                      "constants": [],
                      "variables": [
                        "_ExtraSP_PercentCount"
                      ]
                    },
                    "MDF_SuicideRatioBase": {
                      "operator": "Variables[0] (MDF_SuicideRatioBase) || RETURN",
                      "displayLines": "MDF_SuicideRatioBase",
                      "constants": [],
                      "variables": [
                        "MDF_SuicideRatioBase"
                      ]
                    },
                    "MDF_SuicideRatioBase2": {
                      "operator": "Variables[0] (MDF_SuicideRatioBase2) || RETURN",
                      "displayLines": "MDF_SuicideRatioBase2",
                      "constants": [],
                      "variables": [
                        "MDF_SuicideRatioBase2"
                      ]
                    },
                    "MDF_TargetCount": {
                      "operator": "Variables[0] (MDF_TargetCount) || RETURN",
                      "displayLines": "MDF_TargetCount",
                      "constants": [],
                      "variables": [
                        "MDF_TargetCount"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurExtraSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ExtraSP_PercentCount",
                  "value": {
                    "operator": "Variables[0] (_CurExtraSpecialSP) || Variables[1] (_MaxSpecialSP) || DIV || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "((_CurExtraSpecialSP / _MaxSpecialSP) * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "_CurExtraSpecialSP",
                      "_MaxSpecialSP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Clamp Configuration",
                  "context": "ContextModifier",
                  "roundBy": "Floor",
                  "ignoreBelow": 0.00010000006,
                  "variableName": "_ExtraSP_PercentCount"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SuicideRatioBase",
        "MDF_SuicideRatioBase2",
        "MDF_MaxEnergy",
        "MDF_EnergyRatio",
        "MDF_TargetCount"
      ],
      "latentQueue": [],
      "description": "Castorice's Newbud can overflow up to <span class=\"descriptionNumberColor\">MDF_MaxEnergy</span>. When summoning Netherwing, consume all overflowing \"Newbud.\" Based on the amount of overflow consumed, increases the multiplier for the DMG dealt when this summoned Netherwing triggers the ability effect of its Talent \"Wings Sweep the Ruins.\"",
      "type": "Buff",
      "effectName": "Ode to Life and Death",
      "statusName": "Ode to Life and Death",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Castorice_MaxSP",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_ExtraRatio": {
              "operator": "Variables[0] (MDF_MaxEnergy) || Constants[0] (1) || SUB || RETURN",
              "displayLines": "(MDF_MaxEnergy - 1)",
              "constants": [
                1
              ],
              "variables": [
                "MDF_MaxEnergy"
              ]
            },
            "MDF_ReturnRatio": {
              "operator": "Variables[0] (MDF_EnergyRatio) || RETURN",
              "displayLines": "MDF_EnergyRatio",
              "constants": [],
              "variables": [
                "MDF_EnergyRatio"
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
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "ExtraHealRatio",
              "context": "ContextOwner",
              "value": {
                "operator": "Variables[0] (MDF_HyacineRatio) || RETURN",
                "displayLines": "MDF_HyacineRatio",
                "constants": [],
                "variables": [
                  "MDF_HyacineRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "ExtraHealRatio",
              "context": "ContextOwner",
              "value": {
                "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_HyacineRatio) || MUL || RETURN",
                "displayLines": "(-1 * MDF_HyacineRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_HyacineRatio"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
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
                    "value1": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
                    "compareType": ">",
                    "value2": 1,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
                      "valuePerStack": {
                        "MDF_HyacineRatio": {
                          "operator": "Variables[0] (0.72) || RETURN",
                          "displayLines": "0.72",
                          "constants": [],
                          "variables": [
                            0.72
                          ]
                        }
                      },
                      "addStacksPerTrigger": -1
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HyacineRatio"
      ],
      "latentQueue": [
        "IsInRank01Action",
        "IsInPlayerAction"
      ],
      "description": "The amount of Hyacine's healing included in the healing tally of Little Ica's Memosprite Skill is additionally increased by an amount equal to <span class=\"descriptionNumberColor\">MDF_HyacineRatio</span> of the current healing amount. After Hyacine uses Skill/Ultimate, consumes 1 stack of \"Ode to Sky.\"",
      "type": "Buff",
      "effectName": "Ode to Sky",
      "statusName": "Ode to Sky",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus_Normal[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_IncreaseRatio) || RETURN",
                "displayLines": "MDF_IncreaseRatio",
                "constants": [],
                "variables": [
                  "MDF_IncreaseRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_IncreaseRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_IncreaseRatio</span>.",
      "type": "Buff",
      "statusName": "This Ode, to All Lives",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}.[[getMemosprite]]"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_Normal_Sub[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
          "refModifier": "MReference_AllDamageTypeAddedRatio",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_IncreaseRatio) || RETURN",
              "displayLines": "MDF_IncreaseRatio",
              "constants": [],
              "variables": [
                "MDF_IncreaseRatio"
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
          "modifier": "Cyrene_UITop"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_AmazingBonus",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2,
                "target": {
                  "name": "Target Name",
                  "target": "{{Cyrene}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_Cyrene_Eidolon2_ThanksGift"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_Cyrene_Eidolon2_ThanksGift",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Demiurge}}"
              },
              "variableName": "CurAmazingCount",
              "context": "TargetEntity",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Cyrene}}"
              },
              "modifier": "Cyrene_Eidolon2_1",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_SummonerAbility03Disable",
      "stackType": "ReplaceByCaster",
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
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_Ability21Disable",
      "stackType": "ReplaceByCaster",
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
              "abilityTypes": null,
              "text": "Ability cannot be used",
              "controlTypes": [
                "ControlSkill04"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_Ability02Disable",
      "stackType": "ReplaceByCaster",
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
              "abilityTypes": null,
              "text": "Ability cannot be used",
              "controlTypes": [
                "ControlSkill02"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_Ability01Disable",
      "stackType": "ReplaceByCaster",
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
              "abilityTypes": null,
              "text": "Ability cannot be used",
              "controlTypes": [
                "ControlSkill01"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_Passive_Memory[<span class=\"descriptionNumberColor\">Engraved</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                  "target": "{{Modifier Holder}}.[[getMemosprite]]"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CyreneHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CyreneHP) || Variables[1] (MDF_Damage) || MUL || RETURN",
                    "displayLines": "(MDF_CyreneHP * MDF_Damage)",
                    "constants": [],
                    "variables": [
                      "MDF_CyreneHP",
                      "MDF_Damage"
                    ]
                  }
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Attack Targets}}.[[sortByHPCurrent]].[[reverse]]"
                      },
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
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] (MDF_Damage) || RETURN",
                              "displayLines": "MDF_Damage",
                              "constants": [],
                              "variables": [
                                "MDF_Damage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ],
                      "noTargetFound": [
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
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_Damage) || RETURN",
                                  "displayLines": "MDF_Damage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_Damage"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Debuff",
      "statusName": "Engraved"
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Cyrene_Eidolon1_Ability01Prepare",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "CyreneServant_Ability01_Eidolon1"
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Ode to Ego"
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
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "CyreneServant_Ability01_Eidolon1"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsInRank01Action",
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
      "for": "Memosprite_CyreneServant_Eidolon4_Count[<span class=\"descriptionNumberColor\">Please Write On, With a Smile</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_Count",
        "MDF_Damage"
      ],
      "latentQueue": [
        "TutorialSwitch"
      ],
      "description": "The multiplier for the bounce DMG of the Memosprite Skill \"Ode to Ego\" increases by <span class=\"descriptionNumberColor\">MDF_Damage</span>.",
      "type": "Buff",
      "statusName": "Please Write On, With a Smile"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_Energy[<span class=\"descriptionNumberColor\">Story</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]"
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
            }
          ]
        }
      ],
      "modifierFunctions": [],
      "stackData": [],
      "latentQueue": [],
      "description": "Upon reaching <span class=\"descriptionNumberColor\">#SkillCY14_P2_EnergyCost</span> points, immediately gains 1 extra turn and automatically uses \"Minuet of Blooms and Plumes.\"",
      "type": "Other",
      "effectName": "Story",
      "statusName": "Story"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CyreneServant_NegativeHP",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Allow NEGATIVE HP",
            {
              "name": "Define Custom Property",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "function": "="
            }
          ]
        }
      ]
    }
  ],
  "references": []
}