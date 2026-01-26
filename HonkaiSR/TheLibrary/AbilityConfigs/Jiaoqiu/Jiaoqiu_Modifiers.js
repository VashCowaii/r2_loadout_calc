const configAbility = {
  "fileName": "Jiaoqiu_Modifiers",
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
      "for": "Jiaoqiu_AbilityEidolon6_ResistDown[<span class=\"descriptionNumberColor\">Nonamorphic Pyrobind</span>]",
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
                "operator": "Constants[0] (0) || Variables[0] (ResistDownRatio) || SUB || RETURN",
                "displayLines": "(0 - ResistDownRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "ResistDownRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases All-Type RES by <span class=\"descriptionNumberColor\">ResistDownRatio</span>.",
      "type": "Debuff",
      "statusName": "Nonamorphic Pyrobind",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Eidolon4_AttackDown[<span class=\"descriptionNumberColor\">Leisure In, Luster Out</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttackDown"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "description": "ATK decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "ATK Reduction",
      "statusName": "Leisure In, Luster Out",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_AbilityEidolon6_Flag",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Eidolon6_ListenFlavor",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                }
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target 2}}"
                          },
                          "team": "Enemy Team"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Jiaoqiu_Eidolon6_Sub"
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
          "functionName": "Jiaoqiu_Eidolon6_Sub",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "multiplier": 1
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "Jiaoqiu_AbilityEidolon6_Flag"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Jiaoqiu_AbilityEidolon6_Flag"
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
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "_TempLayer",
                          "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Layer_Min",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (_TempLayer) || RETURN",
                              "displayLines": "_TempLayer",
                              "constants": [],
                              "variables": [
                                "_TempLayer"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Layer_Min",
                              "value": {
                                "operator": "Variables[0] (_TempLayer) || RETURN",
                                "displayLines": "_TempLayer",
                                "constants": [],
                                "variables": [
                                  "_TempLayer"
                                ]
                              }
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All(with Unselectable)}}"
                              },
                              "modifier": "Jiaoqiu_AbilityEidolon6_Flag"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Jiaoqiu_AbilityEidolon6_Flag"
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
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Jiaoqiu_AbilityEidolon6_Flag"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DOT_Ratio": {
                          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                          "displayLines": "SkillP01_DotRatio",
                          "constants": [],
                          "variables": [
                            "SkillP01_DotRatio"
                          ]
                        },
                        "AbilityRank_Eidolon2_P1_Ratio": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "AbilityRank_Eidolon6_P3_DownRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "Jiaoqiu_AbilityEidolon6_Flag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Layer_Min",
                      "value": 99
                    }
                  ]
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
      "for": "Jiaoqiu_Eidolon1_ListenDamage[<span class=\"descriptionNumberColor\">Pentapathic Transference</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.4"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Increases DMG dealt to enemies afflicted with Ashen Roast by <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_ExtraRatio</span>.",
      "type": "Buff",
      "statusName": "Pentapathic Transference"
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Aura",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillRank_Rank04_Flag",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "priorState": "Normal",
              "bar#": 3
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Max_Count_Left",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            }
          ]
        },
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Seared Scent"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Layer_Total",
                        "compareType": ">",
                        "value2": 0
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Layer_Total",
                          "value": {
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "_Temp_Val",
                          "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Layer_Total",
                            "compareType": "<=",
                            "value2": {
                              "operator": "Variables[0] (_Temp_Val) || RETURN",
                              "displayLines": "_Temp_Val",
                              "constants": [],
                              "variables": [
                                "_Temp_Val"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Layer_Total",
                              "value": {
                                "operator": "Variables[0] (_Temp_Val) || RETURN",
                                "displayLines": "_Temp_Val",
                                "constants": [],
                                "variables": [
                                  "_Temp_Val"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DOT_Ratio": {
                          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                          "displayLines": "SkillP01_DotRatio",
                          "constants": [],
                          "variables": [
                            "SkillP01_DotRatio"
                          ]
                        },
                        "AbilityRank_Eidolon2_P1_Ratio": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "AbilityRank_Eidolon6_P3_DownRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Layer_Total) || RETURN",
                        "displayLines": "_Layer_Total",
                        "constants": [],
                        "variables": [
                          "_Layer_Total"
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
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "priorState": "Normal",
              "bar#": 3
            }
          ]
        }
      ],
      "stackData": [
        "Skill03_P1_DamagePercentage",
        "Skill03_P2_Ratio",
        "Skill03_P3_Value",
        "Skill03_P3_Ratio",
        "Skill03_P4_Duration"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "Jiaoqiu_Ultimate_FriendForShow",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Jiaoqiu_Aura_DebuffForShow",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Jiaoqiu_Debuff_Ultra[<span class=\"descriptionNumberColor\">Pyrograph Arcanum</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
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
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Jiaoqiu_Eidolon4_AttackDown[<span class=\"descriptionNumberColor\">Leisure In, Luster Out</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
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
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Tree02_AttackUp",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (SkillTree_PointB2_StatusProbabilityValue) || RETURN",
                "displayLines": "SkillTree_PointB2_StatusProbabilityValue",
                "constants": [],
                "variables": [
                  "SkillTree_PointB2_StatusProbabilityValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Ultimate_FriendForShow",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Skill03_P4_Duration",
        "Skill03_P3_Ratio",
        "Skill03_P3_Value",
        "Skill03_P2_Ratio",
        "Skill03_P1_DamagePercentage"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_PassiveAbility_Debuff",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": [
        "SkillRank_Rank04_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Aura_DebuffForShow",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [
        "Skill03_P4_Duration",
        "Skill03_P3_Ratio",
        "Skill03_P3_Value",
        "Skill03_P2_Ratio",
        "Skill03_P1_DamagePercentage"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "KeepOnDeathrattle",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Burn_DamageValue) || RETURN",
                  "displayLines": "Modifier_Burn_DamageValue",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamageValue"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || RETURN",
                  "displayLines": "Modifier_Burn_DamagePercentage_Defence",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamagePercentage_Defence"
                  ]
                },
                "dmgFormulaExtra": "DEF Scaling",
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Flags to Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagName": [
                "STAT_DOT_Burn"
              ],
              "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || Constants[0] (1) || SUB || Variables[2] (MDF_PropertyValue_2) || MUL || ADD || RETURN",
                "displayLines": "(MDF_PropertyValue + ((MDF_Layer - 1) * MDF_PropertyValue_2))",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer",
                  "MDF_PropertyValue_2"
                ]
              }
            },
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
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Snapshot Target's Source Owner}}"
                },
                "value1": "_Layer_Total",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (MDF_Layer) || RETURN",
                  "displayLines": "MDF_Layer",
                  "constants": [],
                  "variables": [
                    "MDF_Layer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Target's Source Owner}}"
                  },
                  "variableName": "_Layer_Total",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2,
                "target": {
                  "name": "Target Name",
                  "target": "{{Snapshot Target's Source Owner}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Ratio",
                  "value": {
                    "operator": "Variables[0] (DOT_Ratio) || Variables[1] (SkillRank_Rank02_P1_Ratio) || ADD || RETURN",
                    "displayLines": "(DOT_Ratio + SkillRank_Rank02_P1_Ratio)",
                    "constants": [],
                    "variables": [
                      "DOT_Ratio",
                      "SkillRank_Rank02_P1_Ratio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6,
                "target": {
                  "name": "Target Name",
                  "target": "{{Snapshot Target's Source Owner}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Jiaoqiu_AbilityEidolon6_ResistDown[<span class=\"descriptionNumberColor\">Nonamorphic Pyrobind</span>]",
                  "valuePerStack": {
                    "ResistDownRatio": {
                      "operator": "Variables[0] (MDF_Layer) || Variables[1] (SkillRank_Rank06_P3_DownRatio) || MUL || RETURN",
                      "displayLines": "(MDF_Layer * SkillRank_Rank06_P3_DownRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_Layer",
                        "SkillRank_Rank06_P3_DownRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamageValue)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamageValue"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamagePercentage_Defence"
                  ]
                },
                "dmgFormulaExtra": "DEF Scaling",
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "DOT_Ratio",
        "SkillRank_Rank02_P1_Ratio",
        "SkillRank_Rank06_P3_DownRatio",
        "MDF_PropertyValue",
        "MDF_PropertyValue_2"
      ],
      "latentQueue": [
        "Skill03_P4_Duration",
        "Skill03_P3_Ratio",
        "Skill03_P3_Value",
        "Skill03_P2_Ratio",
        "Skill03_P1_DamagePercentage",
        "SkillRank_Rank04_Flag"
      ],
      "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This unit can be considered as Burned. While Ashen Roast is active, takes Fire DMG at the start of each turn.",
      "type": "Debuff",
      "effectName": "Ashen Roast",
      "statusName": "Ashen Roast"
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Debuff_Ultra[<span class=\"descriptionNumberColor\">Pyrograph Arcanum</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TurnCD",
                  "value": 0
                }
              ]
            }
          ]
        },
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
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
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
                    "value1": "DV_TurnCD",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Max_Count_Left",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DOT_Ratio": {
                      "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                      "displayLines": "SkillP01_DotRatio",
                      "constants": [],
                      "variables": [
                        "SkillP01_DotRatio"
                      ]
                    },
                    "AbilityRank_Eidolon2_P1_Ratio": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "AbilityRank_Eidolon6_P3_DownRatio": {
                      "operator": "Variables[0] (0.03) || RETURN",
                      "displayLines": "0.03",
                      "constants": [],
                      "variables": [
                        0.03
                      ]
                    },
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1,
                  "success": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TurnCD",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Max_Count_Left",
                      "value": {
                        "operator": "Variables[0] (_Max_Count_Left) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_Max_Count_Left - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Max_Count_Left"
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
          "eventTrigger": "Injected Ability Use [Owner]: Start",
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
                    "value1": "DV_TurnCD",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Max_Count_Left",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DOT_Ratio": {
                      "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                      "displayLines": "SkillP01_DotRatio",
                      "constants": [],
                      "variables": [
                        "SkillP01_DotRatio"
                      ]
                    },
                    "AbilityRank_Eidolon2_P1_Ratio": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "AbilityRank_Eidolon6_P3_DownRatio": {
                      "operator": "Variables[0] (0.03) || RETURN",
                      "displayLines": "0.03",
                      "constants": [],
                      "variables": [
                        0.03
                      ]
                    },
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1,
                  "success": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TurnCD",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Max_Count_Left",
                      "value": {
                        "operator": "Variables[0] (_Max_Count_Left) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_Max_Count_Left - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Max_Count_Left"
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
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "Skill03_P4_Duration",
        "Skill03_P3_Ratio",
        "Skill03_P3_Value",
        "Skill03_P2_Ratio",
        "Skill03_P1_DamagePercentage"
      ],
      "description": "Enemy targets in the Zone take <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> increased Ultimate DMG, with a <span class=\"descriptionNumberColor\">#Skill03_P2_Chance</span> base chance of being inflicted with 1 stack of Ashen Roast when taking action. While the Zone exists, this effect can trigger up to <span class=\"descriptionNumberColor\">#Skill03_P5_Value</span> time(s). And it can only trigger once per enemy turn. This effect can still trigger for <span class=\"descriptionNumberColor\">_Max_Count_Left</span> more time(s).",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Pyrograph Arcanum",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Jiaoqiu_Aura"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Passive_TargetMark"
    },
    {
      "name": "Modifier Construction",
      "for": "Jiaoqiu_Tree02_StatusProbabilityShow",
      "stackType": "ReplaceByCaster",
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenEnteringRange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Jiaoqiu_Tree02_Sub"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Jiaoqiu_Tree02_Sub"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Jiaoqiu_Tree02_Sub",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "SkillTree_PointB2_StatusProbabilityValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB2_StatusProbabilityValue",
              "value": {
                "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB2_StatusProbabilityValue) || Variables[2] (0.8) || SUB || Variables[3] (0.15) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.6) || MUL || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB2_StatusProbabilityValue - 0.8) / 0.15)) * 0.6)",
                "constants": [],
                "variables": [
                  "WHOLE",
                  "SkillTree_PointB2_StatusProbabilityValue",
                  0.8,
                  0.15,
                  0.6
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SkillTree_PointB2_StatusProbabilityValue",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB2_StatusProbabilityValue",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jiaoqiu_Tree02_AttackUp"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB2_StatusProbabilityValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB2_StatusProbabilityValue",
                      "value": {
                        "operator": "Variables[0] (2.4) || RETURN",
                        "displayLines": "2.4",
                        "constants": [],
                        "variables": [
                          2.4
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
                  "modifier": "Jiaoqiu_Tree02_AttackUp"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}