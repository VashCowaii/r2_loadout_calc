const compositeAbilityObject = {
  "fullCharacterName": "Lingsha",
  "trimCharacterName": "Lingsha",
  "abilityList": [
    "Lingsha_Lingsha_TechniqueInLevel",
    "Lingsha_Lingsha_PassiveAbility01",
    "Lingsha_Lingsha_Ability03_Part02",
    "Lingsha_Lingsha_Ability03_Part01",
    "Lingsha_Lingsha_Ability03_EnterReady",
    "Lingsha_Lingsha_BPAbility_BattleEvent_Part02",
    "Lingsha_Lingsha_BPAbility_BattleEvent_Part01",
    "Lingsha_Lingsha_BE_PassiveAbility",
    "Lingsha_Lingsha_Ability02_Part02",
    "Lingsha_Lingsha_Ability02_Part01",
    "Lingsha_Lingsha_Ability01_Part02",
    "Lingsha_Lingsha_Ability01_Part01",
    "Lingsha_Modifiers",
    "Lingsha_Functions",
    "Lingsha_BE_BattleEvents"
  ],
  "abilityObject": {
    "Lingsha_Lingsha_TechniqueInLevel": {
      "fileName": "Lingsha_Lingsha_TechniqueInLevel",
      "childAbilityList": [
        "Lingsha_Lingsha_TechniqueInLevel"
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
          "modifier": "StageAbility_Maze_Lingsha_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Lingsha_Modifier",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "Lingsha_BreakDamageUp[<span class=\"descriptionNumberColor\">Befog</span>]",
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
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Lingsha_AttackTime",
                      "value": {
                        "operator": "Variables[0] (Lingsha_AttackTime) || Variables[1] (3) || ADD || RETURN",
                        "displayLines": "(Lingsha_AttackTime + 3)",
                        "constants": [],
                        "variables": [
                          "Lingsha_AttackTime",
                          3
                        ]
                      }
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 11222,
                      "variables": {
                        "BattleEvent_Lingsha_BaseSpeed": {
                          "operator": "Variables[0] (90) || RETURN",
                          "displayLines": "90",
                          "constants": [],
                          "variables": [
                            90
                          ]
                        },
                        "BattleEvent_Lingsha_AttackTime": {
                          "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                          "displayLines": "Lingsha_AttackTime",
                          "constants": [],
                          "variables": [
                            "Lingsha_AttackTime"
                          ]
                        },
                        "BattleEvent_Lingsha_IndexID": {
                          "operator": "Variables[0] (BattleEvent_Lingsha_IndexID) || RETURN",
                          "displayLines": "BattleEvent_Lingsha_IndexID",
                          "constants": [],
                          "variables": [
                            "BattleEvent_Lingsha_IndexID"
                          ]
                        },
                        "BattleEvent_Lingsha_PointB3": 0
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                        "displayLines": "Lingsha_AttackTime",
                        "constants": [],
                        "variables": [
                          "Lingsha_AttackTime"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 4
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
                          "modifier": "Lingsha_Eidolon6_Listen"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Ember's Echo"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Self-Made Battle-Events}}"
                          },
                          "modifier": "Lingsha_PointB3_OnListen",
                          "valuePerStack": {
                            "MDF_HPRatio": {
                              "operator": "Variables[0] (0.6) || RETURN",
                              "displayLines": "0.6",
                              "constants": [],
                              "variables": [
                                0.6
                              ]
                            },
                            "MDF_LifeTime": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Lingsha_BENum",
                      "value": {
                        "operator": "Variables[0] (Lingsha_BENum) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Lingsha_BENum + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Lingsha_BENum"
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Lingsha_Lingsha_PassiveAbility01": {
      "fileName": "Lingsha_Lingsha_PassiveAbility01",
      "childAbilityList": [
        "Lingsha_Lingsha_PassiveAbility01",
        "Lingsha_Lingsha_BPAbility_BattleEvent_Part02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_Passive"
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            11222
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Vermilion Waft"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Lingsha_PointB1_OnListen"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_Olisten_BE_Create"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_Ability_ModifyBEAction"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_Ultimate_ModifyBEAction"
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
              "modifier": "Lingsha_Eidolon1_Listen",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
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
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Lingsha_Rank06_StanceDamage",
              "value": {
                "operator": "Variables[0] (5) || Constants[0] (3) || MUL || RETURN",
                "displayLines": "(5 * 3)",
                "constants": [
                  3
                ],
                "variables": [
                  5
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Ultimate_ModifyBEAction",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Fuyuan}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "Lingsha_BENum",
              "compareType": ">=",
              "value2": 1
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (1) || INVERT || RETURN",
                "displayLines": "-1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Ability_ModifyBEAction",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Fuyuan}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "Lingsha_BENum",
              "compareType": ">=",
              "value2": 1
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.2) || INVERT || RETURN",
                "displayLines": "-0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Olisten_BE_Create",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "BattleEvent",
            "entityID": 11222,
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "Lingsha_BENum",
              "compareType": "<=",
              "value2": 0
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.2) || INVERT || RETURN",
                "displayLines": "-0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_PointB1_Sub2",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
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
          "for": "Lingsha_PointB1_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Lingsha_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (Lingsha_BaseAttack) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyRatio * Lingsha_BaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio",
                      "Lingsha_BaseAttack"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_PointB1_OnListen",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Lingsha_BreakDamageAdded",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Lingsha_PointB1_Sub",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.25) || MUL || Variables[3] (0.5) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.25), 0.5)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "Lingsha_BreakDamageAdded",
                        0.25,
                        0.5
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
                  "modifier": "Lingsha_PointB1_Sub2",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.2) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.1), 0.2)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "Lingsha_BreakDamageAdded",
                        0.1,
                        0.2
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 999,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Lingsha_BreakDamageAdded",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Lingsha_PointB1_Sub",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.25) || MUL || Variables[3] (0.5) || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.25), 0.5)",
                          "constants": [],
                          "variables": [
                            "MIN",
                            "Lingsha_BreakDamageAdded",
                            0.25,
                            0.5
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
                      "modifier": "Lingsha_PointB1_Sub2",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.2) || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.1), 0.2)",
                          "constants": [],
                          "variables": [
                            "MIN",
                            "Lingsha_BreakDamageAdded",
                            0.1,
                            0.2
                          ]
                        }
                      }
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
          "for": "Lingsha_Passive",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Self-Made Battle-Events}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
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
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Lingsha_Eidolon1_PassiveStackProperty"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Lingsha_Eidolon1_ListenBreak",
                          "valuePerStack": {
                            "Eidolon1_MDF_PropertyValue": {
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
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
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
                        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                      },
                      "modifier": "Lingsha_Eidolon1_PassiveStackProperty"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                      },
                      "modifier": "Lingsha_Eidolon1_ListenBreak",
                      "valuePerStack": {
                        "Eidolon1_MDF_PropertyValue": {
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Lingsha_Lingsha_Ability03_Part02": {
      "fileName": "Lingsha_Lingsha_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "target": "{{All Team Members}}"
              },
              "modifier": "Lingsha_Eidolon2_BreakDamageAttackRatio[<span class=\"descriptionNumberColor\">Leisure in Carmine Smokeveil</span>]",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Lingsha_BreakDamageUp[<span class=\"descriptionNumberColor\">Befog</span>]",
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
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.12) || RETURN",
            "displayLines": "0.12",
            "constants": [],
            "variables": [
              0.12
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (360) || RETURN",
            "displayLines": "360",
            "constants": [],
            "variables": [
              360
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Lingsha_BENum",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "advanceType": "Advance",
              "multiAdd": "-1"
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Lingsha_Lingsha_Ability03_Part01": {
      "fileName": "Lingsha_Lingsha_Ability03_Part01",
      "childAbilityList": [
        "Lingsha_Lingsha_Ability03_Camera",
        "Lingsha_Lingsha_Ability03_EnterReady",
        "Lingsha_Lingsha_Ability03_Part01",
        "Lingsha_Lingsha_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
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
          "ability": "Lingsha_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Lingsha_Lingsha_Ability03_EnterReady": {
      "fileName": "Lingsha_Lingsha_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Lingsha_Lingsha_BPAbility_BattleEvent_Part02": {
      "fileName": "Lingsha_Lingsha_BPAbility_BattleEvent_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Self-Made Battle-Events}}"
            },
            "value1": "BattleEvent_Lingsha_00_PointB3",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "variableName": "BattleEvent_Lingsha_00_PointB3",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Lingsha_PointB3_CD[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
              "duration": {
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.75) || RETURN",
              "displayLines": "0.75",
              "constants": [],
              "variables": [
                0.75
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
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Lingsha_Passive_Target"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Lingsha_Passive_Target_Eidolon6"
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.12) || RETURN",
            "displayLines": "0.12",
            "constants": [],
            "variables": [
              0.12
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (360) || RETURN",
            "displayLines": "360",
            "constants": [],
            "variables": [
              360
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[living]].[[sortByHPCurrent]]"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.4) || RETURN",
                    "displayLines": "0.4",
                    "constants": [],
                    "variables": [
                      0.4
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
              "target": "{{Caster's Self-Made Battle-Events}}"
            },
            "modifier": "Lingsha_BPAbility_BattleEvent_LifeTime",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Lingsha_Eidolon6_Listen"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Lingsha_Lingsha_BPAbility_BattleEvent_Part01": {
      "fileName": "Lingsha_Lingsha_BPAbility_BattleEvent_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Lingsha_BPAbility_BattleEvent_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Lingsha_Lingsha_BE_PassiveAbility": {
      "fileName": "Lingsha_Lingsha_BE_PassiveAbility",
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
          "modifier": "Lingsha_BPAbility_BattleEvent",
          "counter": {
            "operator": "Variables[0] (BattleEvent_Lingsha_PointB3) || RETURN",
            "displayLines": "BattleEvent_Lingsha_PointB3",
            "constants": [],
            "variables": [
              "BattleEvent_Lingsha_PointB3"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_BPAbility_BattleEvent_LifeTime",
          "counter": {
            "operator": "Variables[0] (BattleEvent_Lingsha_AttackTime) || RETURN",
            "displayLines": "BattleEvent_Lingsha_AttackTime",
            "constants": [],
            "variables": [
              "BattleEvent_Lingsha_AttackTime"
            ]
          },
          "valuePerStack": {
            "_AttackTime": {
              "operator": "Variables[0] (BattleEvent_Lingsha_AttackTime) || RETURN",
              "displayLines": "BattleEvent_Lingsha_AttackTime",
              "constants": [],
              "variables": [
                "BattleEvent_Lingsha_AttackTime"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Lingsha_BPAbility_BattleEvent",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "variableName": "Lingsha_BENum",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 100
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "ownerState": "Mask_AliveOrRevivable",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_Lingsha_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Lingsha_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Lingsha_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Lingsha_Lingsha_Ability02_Part02": {
      "fileName": "Lingsha_Lingsha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Lingsha_BENum",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Lingsha_AttackTime",
              "value": {
                "operator": "Variables[0] (Lingsha_AttackTime) || Variables[1] (3) || ADD || RETURN",
                "displayLines": "(Lingsha_AttackTime + 3)",
                "constants": [],
                "variables": [
                  "Lingsha_AttackTime",
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "modifier": "Lingsha_BPAbility_BattleEvent_LifeTime",
              "counter": {
                "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                "displayLines": "Lingsha_AttackTime",
                "constants": [],
                "variables": [
                  "Lingsha_AttackTime"
                ]
              },
              "valuePerStack": {
                "_AttackTime": {
                  "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                  "displayLines": "Lingsha_AttackTime",
                  "constants": [],
                  "variables": [
                    "Lingsha_AttackTime"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Lingsha_AttackTime",
              "value": {
                "operator": "Variables[0] (Lingsha_AttackTime) || Variables[1] (3) || ADD || RETURN",
                "displayLines": "(Lingsha_AttackTime + 3)",
                "constants": [],
                "variables": [
                  "Lingsha_AttackTime",
                  3
                ]
              }
            },
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 11222,
              "variables": {
                "BattleEvent_Lingsha_BaseSpeed": {
                  "operator": "Variables[0] (90) || RETURN",
                  "displayLines": "90",
                  "constants": [],
                  "variables": [
                    90
                  ]
                },
                "BattleEvent_Lingsha_AttackTime": {
                  "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                  "displayLines": "Lingsha_AttackTime",
                  "constants": [],
                  "variables": [
                    "Lingsha_AttackTime"
                  ]
                },
                "BattleEvent_Lingsha_IndexID": {
                  "operator": "Variables[0] (BattleEvent_Lingsha_IndexID) || RETURN",
                  "displayLines": "BattleEvent_Lingsha_IndexID",
                  "constants": [],
                  "variables": [
                    "BattleEvent_Lingsha_IndexID"
                  ]
                },
                "BattleEvent_Lingsha_PointB3": 0
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                "displayLines": "Lingsha_AttackTime",
                "constants": [],
                "variables": [
                  "Lingsha_AttackTime"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 4
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
                  "modifier": "Lingsha_Eidolon6_Listen"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Ember's Echo"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Self-Made Battle-Events}}"
                  },
                  "modifier": "Lingsha_PointB3_OnListen",
                  "valuePerStack": {
                    "MDF_HPRatio": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    },
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Lingsha_BENum",
              "value": {
                "operator": "Variables[0] (Lingsha_BENum) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Lingsha_BENum + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Lingsha_BENum"
                ]
              }
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.14) || RETURN",
            "displayLines": "0.14",
            "constants": [],
            "variables": [
              0.14
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (420) || RETURN",
            "displayLines": "420",
            "constants": [],
            "variables": [
              420
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Lingsha_BENum",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "advanceType": "Advance",
              "multiAdd": "-0.2"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Lingsha_Lingsha_Ability02_Part01": {
      "fileName": "Lingsha_Lingsha_Ability02_Part01",
      "childAbilityList": [
        "Lingsha_Lingsha_Ability02_Camera",
        "Lingsha_Lingsha_Ability02_Part01",
        "Lingsha_Lingsha_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        10,
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
          "ability": "Lingsha_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Lingsha_Lingsha_Ability01_Part02": {
      "fileName": "Lingsha_Lingsha_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sylvan Smoke"
          },
          "passed": [
            {
              "name": "Update Energy",
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
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
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
      "references": []
    },
    "Lingsha_Lingsha_Ability01_Part01": {
      "fileName": "Lingsha_Lingsha_Ability01_Part01",
      "childAbilityList": [
        "Lingsha_Lingsha_Ability01_Camera",
        "Lingsha_Lingsha_Ability01_Part01",
        "Lingsha_Lingsha_Ability01_Part02"
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
          "ability": "Lingsha_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Lingsha_Modifiers": {
      "fileName": "Lingsha_Modifiers",
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
          "for": "Lingsha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Arcadia Under Deep Seclusion</span>]",
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
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Arcadia Under Deep Seclusion"
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Eidolon6_Listen",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Lingsha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Arcadia Under Deep Seclusion</span>]",
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
          "for": "Lingsha_Eidolon2_BreakDamageAttackRatio[<span class=\"descriptionNumberColor\">Leisure in Carmine Smokeveil</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
          "latentQueue": [],
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Leisure in Carmine Smokeveil"
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Eidolon1_DefenceRatioDown[<span class=\"descriptionNumberColor\">Bloom on Vileward Bouquet</span>]",
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
                  "modifier": "Lingsha_Eidolon1_PassiveStackProperty"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Bloom on Vileward Bouquet"
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Eidolon1_PassiveStackProperty",
          "stackType": "ReplaceByCaster",
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Eidolon1_ListenBreak",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Lingsha_Eidolon1_PassiveStackProperty",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Rank01_MDF_PropertyValue) || RETURN",
                      "displayLines": "Rank01_MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "Rank01_MDF_PropertyValue"
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
                  "modifier": "Lingsha_Eidolon1_DefenceRatioDown[<span class=\"descriptionNumberColor\">Bloom on Vileward Bouquet</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Rank01_MDF_PropertyValue) || RETURN",
                      "displayLines": "Rank01_MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "Rank01_MDF_PropertyValue"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "Rank01_MDF_PropertyValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_Eidolon1_Listen",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_PointB3_CD[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "stackData": [],
          "latentQueue": [
            "BattleEvent_Lingsha_00_PointB3"
          ],
          "description": "The Trace \"Ember's Echo\" effect's auto-trigger is still on cooldown.",
          "type": "Other",
          "statusName": "Ember's Echo",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_PointB3_OnListen",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Battle Event's Caster}}"
                            },
                            "modifier": "Lingsha_PointB3_CD[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "CurrentHP%",
                                    "compareType": "<=",
                                    "value2": {
                                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                                      "displayLines": "MDF_HPRatio",
                                      "constants": [],
                                      "variables": [
                                        "MDF_HPRatio"
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Battle Event's Caster}}"
                                    },
                                    "flagName": "STAT_CTRL_UnOperable",
                                    "invertCondition": true,
                                    "justAddedOrLiving": true
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEvent_Lingsha_00_PointB3",
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
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Battle Event's Caster}}"
                                    },
                                    "flagName": "STAT_CTRL_UnOperable",
                                    "invertCondition": true,
                                    "justAddedOrLiving": true
                                  },
                                  "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Hostile Entities(AOE)}}"
                                  },
                                  "priorityTag": "AvatarInsertAttackSelf",
                                  "ownerState": "Mask_AliveOrRevivable",
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
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEvent_Lingsha_00_PointB3",
                    "compareType": ">=",
                    "value2": 1
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
                          "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEvent_Lingsha_00_PointB3",
                    "compareType": ">=",
                    "value2": 1
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
                          "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "BattleEvent_Lingsha_00_PointB3",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
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
                          "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPRatio",
            "MDF_LifeTime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_BPAbility_BattleEvent_LifeTime",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "priorState": "Normal"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Lingsha_AttackTime",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackTime",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_AttackTime - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_AttackTime"
                    ]
                  }
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "on": null,
                  "show": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Lingsha_AttackTime",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  }
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
                  "variableName": "_AttackTime",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  }
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ]
            }
          ],
          "stackData": [
            "_AttackTime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lingsha_BreakDamageUp[<span class=\"descriptionNumberColor\">Befog</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
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
          "latentQueue": [],
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Befog",
          "statusName": "Befog"
        }
      ],
      "references": []
    },
    "Lingsha_Functions": {
      "fileName": "Lingsha_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Lingsha_Passive_Target",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Fire"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
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
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
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
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": "Fire"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (0.75) || RETURN",
                          "displayLines": "0.75",
                          "constants": [],
                          "variables": [
                            0.75
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
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
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
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (0.75) || RETURN",
                              "displayLines": "0.75",
                              "constants": [],
                              "variables": [
                                0.75
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
                            "Tags": [
                              "Summon-Tag DMG"
                            ],
                            "attackType": "Follow-up"
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
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] (0.75) || RETURN",
                                  "displayLines": "0.75",
                                  "constants": [],
                                  "variables": [
                                    0.75
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
                                "Tags": [
                                  "Summon-Tag DMG"
                                ],
                                "attackType": "Follow-up"
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
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Lingsha_Passive_Target_Eidolon6",
          "parse": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
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
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": "Fire"
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                          "displayLines": "Lingsha_Rank06_StanceDamage",
                          "constants": [],
                          "variables": [
                            "Lingsha_Rank06_StanceDamage"
                          ]
                        },
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
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
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Fire"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "Toughness": {
                              "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                              "displayLines": "Lingsha_Rank06_StanceDamage",
                              "constants": [],
                              "variables": [
                                "Lingsha_Rank06_StanceDamage"
                              ]
                            },
                            "Tags": [
                              "Summon-Tag DMG"
                            ],
                            "attackType": "Follow-up"
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
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] (0.5) || RETURN",
                                  "displayLines": "0.5",
                                  "constants": [],
                                  "variables": [
                                    0.5
                                  ]
                                },
                                "Toughness": {
                                  "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                                  "displayLines": "Lingsha_Rank06_StanceDamage",
                                  "constants": [],
                                  "variables": [
                                    "Lingsha_Rank06_StanceDamage"
                                  ]
                                },
                                "Tags": [
                                  "Summon-Tag DMG"
                                ],
                                "attackType": "Follow-up"
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
                              "includeDyingTargets": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Fire",
                                    "Damage": {
                                      "operator": "Variables[0] (0.5) || RETURN",
                                      "displayLines": "0.5",
                                      "constants": [],
                                      "variables": [
                                        0.5
                                      ]
                                    },
                                    "Toughness": {
                                      "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                                      "displayLines": "Lingsha_Rank06_StanceDamage",
                                      "constants": [],
                                      "variables": [
                                        "Lingsha_Rank06_StanceDamage"
                                      ]
                                    },
                                    "Tags": [
                                      "Summon-Tag DMG"
                                    ],
                                    "attackType": "Follow-up"
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
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Lingsha_BE_BattleEvents": {
      "fileName": "Lingsha_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 11222,
          "team": "Player Team",
          "eventType": "Summon",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;"
            }
          ]
        }
      ],
      "references": []
    }
  }
}