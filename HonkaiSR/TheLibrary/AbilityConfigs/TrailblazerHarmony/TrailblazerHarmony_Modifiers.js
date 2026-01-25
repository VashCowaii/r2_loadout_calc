const configAbility = {
  "fileName": "TrailblazerHarmony_Modifiers",
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
      "for": "PlayerBoy_20_Eidolon2[<span class=\"descriptionNumberColor\">Jailbreaking Rainbowwalk</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
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
      "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Jailbreaking Rainbowwalk"
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
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
                "Modifier Deletes Itself"
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
      "for": "PlayerBoy_20_PointB3_Bonus",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "PlayerBoy_20_PointB3_Bonus_Preshow",
              "valuePerStack": {
                "MDF_PropertyValue2": {
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
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "PlayerBoy_20_PointB3_Bonus_Preshow",
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
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
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                },
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_PointB3_Bonus_Preshow",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [
        "MDF_PropertyValue2"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "conditions": {
          "name": "Has Toughness Reduction Preview",
          "caster": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
            "displayLines": "MDF_PropertyValue2",
            "constants": [],
            "variables": [
              "MDF_PropertyValue2"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_PointB2_Bonus",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Attack Start [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
        "multiplier": {
          "operator": "Variables[0] (1) || Constants[0] (1) || ADD || RETURN",
          "displayLines": "(1 + 1)",
          "constants": [
            1
          ],
          "variables": [
            1
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_Passive_SpecialMark",
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
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "PlayerBoy_20_AbilityP01_ListenBreakDamage_Self"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [
                    "Basic ATK",
                    "Ultimate",
                    "Skill"
                  ],
                  "trigger": "State_Active"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "PlayerBoy_20_AbilityP01_ListenBreakDamage_Self"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [
                    "Basic ATK",
                    "Ultimate",
                    "Skill"
                  ],
                  "trigger": "State_Normal"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_Passive_BonusArea",
      "execute": [
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
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
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "PlayerBoy_20_Passive_SpecialMark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "PlayerBoy_20_Passive_SpecialMark"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_Ability03_ElementDamage",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "DealSuperBreakDamage_DamagePerformance",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "variables": {
                "value_0_DamagePercentage": {
                  "operator": "Variables[0] (MDF_SuperBreakDamagePercentage) || RETURN",
                  "displayLines": "MDF_SuperBreakDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_SuperBreakDamagePercentage"
                  ]
                }
              },
              "damageSequence": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PursuedDamage_PerformanceDelay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageBreak": {
                      "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                      "displayLines": "value_0_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "value_0_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "instanceTag": "Player_20_Skill03_ElementDamage",
                    "Tags": [
                      "Super Break"
                    ],
                    "attackType": "Break DMG"
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
      "for": "PlayerBoy_20_AbilityP01_ListenBreakDamage_Self",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "PlayerBoy_20_AbilityP01_ListenBreakDamage_Self",
              "modifierNameUpdate": "PlayerBoy_20_AbilityP01_ListenBreakDamage[<span class=\"descriptionNumberColor\">Backup Dancer</span>]"
            },
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
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PassiveDamageOrigin",
              "value": {
                "operator": "Variables[0] (MDF_PassiveDamage2) || RETURN",
                "displayLines": "MDF_PassiveDamage2",
                "constants": [],
                "variables": [
                  "MDF_PassiveDamage2"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]"
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PassiveDamage2",
              "value": {
                "operator": "Variables[0] (MDF_PassiveDamageOrigin) || RETURN",
                "displayLines": "MDF_PassiveDamageOrigin",
                "constants": [],
                "variables": [
                  "MDF_PassiveDamageOrigin"
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
                "name": "Trace Activated",
                "conditionList": "Dance With the One"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "compareType": ">=",
                    "value2": 5,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PassiveDamage2",
                      "value": {
                        "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio1) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio1))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_PassiveDamage2",
                          "MDF_PointB1_DamageAddedRatio1"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "compareType": "=",
                        "value2": 4,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PassiveDamage2",
                          "value": {
                            "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio2) || ADD || MUL || RETURN",
                            "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio2))",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_PassiveDamage2",
                              "MDF_PointB1_DamageAddedRatio2"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Hostile Entities(AOE)}}"
                            },
                            "compareType": "=",
                            "value2": 3,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_PassiveDamage2",
                              "value": {
                                "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio3) || ADD || MUL || RETURN",
                                "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio3))",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_PassiveDamage2",
                                  "MDF_PointB1_DamageAddedRatio3"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Target Count",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Hostile Entities(AOE)}}"
                                },
                                "compareType": "=",
                                "value2": 2,
                                "livingTargets": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_PassiveDamage2",
                                  "value": {
                                    "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio4) || ADD || MUL || RETURN",
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio4))",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "MDF_PassiveDamage2",
                                      "MDF_PointB1_DamageAddedRatio4"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_PassiveDamage2",
                                  "value": {
                                    "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio5) || ADD || MUL || RETURN",
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio5))",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "MDF_PassiveDamage2",
                                      "MDF_PointB1_DamageAddedRatio5"
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
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "PlayerBoy_20_Ability03_ElementDamage",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "operator": "Variables[0] (MDF_PassiveDamage2) || RETURN",
                  "displayLines": "MDF_PassiveDamage2",
                  "constants": [],
                  "variables": [
                    "MDF_PassiveDamage2"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "priorityLevel": 100
        }
      ],
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_AbilityP01_ListenBreakDamage[<span class=\"descriptionNumberColor\">Backup Dancer</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PassiveDamageOrigin",
              "value": {
                "operator": "Variables[0] (MDF_PassiveDamage2) || RETURN",
                "displayLines": "MDF_PassiveDamage2",
                "constants": [],
                "variables": [
                  "MDF_PassiveDamage2"
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
          "eventTrigger": "Got a Kill [Owner]"
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PassiveDamage2",
              "value": {
                "operator": "Variables[0] (MDF_PassiveDamageOrigin) || RETURN",
                "displayLines": "MDF_PassiveDamageOrigin",
                "constants": [],
                "variables": [
                  "MDF_PassiveDamageOrigin"
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
                "name": "Trace Activated",
                "conditionList": "Dance With the One"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "compareType": ">=",
                    "value2": 5,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PassiveDamage2",
                      "value": {
                        "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio1) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio1))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_PassiveDamage2",
                          "MDF_PointB1_DamageAddedRatio1"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "compareType": "=",
                        "value2": 4,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PassiveDamage2",
                          "value": {
                            "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio2) || ADD || MUL || RETURN",
                            "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio2))",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_PassiveDamage2",
                              "MDF_PointB1_DamageAddedRatio2"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Hostile Entities(AOE)}}"
                            },
                            "compareType": "=",
                            "value2": 3,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_PassiveDamage2",
                              "value": {
                                "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio3) || ADD || MUL || RETURN",
                                "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio3))",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_PassiveDamage2",
                                  "MDF_PointB1_DamageAddedRatio3"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Target Count",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Hostile Entities(AOE)}}"
                                },
                                "compareType": "=",
                                "value2": 2,
                                "livingTargets": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_PassiveDamage2",
                                  "value": {
                                    "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio4) || ADD || MUL || RETURN",
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio4))",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "MDF_PassiveDamage2",
                                      "MDF_PointB1_DamageAddedRatio4"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_PassiveDamage2",
                                  "value": {
                                    "operator": "Variables[0] (MDF_PassiveDamage2) || Constants[0] (1) || Variables[1] (MDF_PointB1_DamageAddedRatio5) || ADD || MUL || RETURN",
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio5))",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "MDF_PassiveDamage2",
                                      "MDF_PointB1_DamageAddedRatio5"
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
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "PlayerBoy_20_Ability03_ElementDamage",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "operator": "Variables[0] (MDF_PassiveDamage2) || RETURN",
                  "displayLines": "MDF_PassiveDamage2",
                  "constants": [],
                  "variables": [
                    "MDF_PassiveDamage2"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "priorityLevel": 100
        }
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. And after attacking enemy targets that are Weakness Broken, converts the Toughness Reduction of the attack into 1 instance of Super Break DMG.",
      "type": "Buff",
      "effectName": "Backup Dancer",
      "statusName": "Backup Dancer"
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_AbilityP01_ListenRedShieldModifier",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "PlayerBoy_20_AbilityP01_ListenBreakDamage[<span class=\"descriptionNumberColor\">Backup Dancer</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "LifeTime",
              "variableName": "MDF_HarmonyEnergy",
              "modifierName": "PlayerBoy_20_AbilityP01_ListenRedShieldModifier",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_HarmonyEnergy) || RETURN",
                "displayLines": "MDF_HarmonyEnergy",
                "constants": [],
                "variables": [
                  "MDF_HarmonyEnergy"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LifeTime"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "PlayerBoy_20_AbilityP01_ListenBreakDamage[<span class=\"descriptionNumberColor\">Backup Dancer</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_RealMaxStance": 30,
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PassiveDamage2": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_PointB1_DamageAddedRatio1": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_PointB1_DamageAddedRatio2": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PointB1_DamageAddedRatio3": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_PointB1_DamageAddedRatio4": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_PointB1_DamageAddedRatio5": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "PlayerBoy_20_AbilityP01_ListenBreakDamage_Self",
          "haloStatus": true,
          "duration": {
            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
            "displayLines": "MDF_LifeTime",
            "constants": [],
            "variables": [
              "MDF_LifeTime"
            ]
          },
          "valuePerStack": {
            "MDF_RealMaxStance": 30,
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PassiveDamage2": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_PointB1_DamageAddedRatio1": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_PointB1_DamageAddedRatio2": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PointB1_DamageAddedRatio3": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_PointB1_DamageAddedRatio4": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_PointB1_DamageAddedRatio5": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "PlayerBoy_20_Ability03_ElementDamage",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_SuperBreakDamagePercentage": 0
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_Eidolon4_BreakDamageBonus[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                "displayLines": "MDF_BreakDamageAdd",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAdd"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_AddBreakDamageRatio</span>.",
      "type": "Buff",
      "statusName": "Dove in Tophat"
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_20_Eidolon4_Bonus",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "PlayerBoy_20_Eidolon4_BreakDamageBonus[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "PlayerBoy_20_Eidolon4_Sub"
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
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PlayerBoy_20_Eidolon4_Sub"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "PlayerBoy_20_Eidolon4_BreakDamageBonus[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PlayerBoy_20_Eidolon4_Sub"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PlayerBoy_20_Eidolon4_Sub"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "PlayerBoy_20_Eidolon4_Sub"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "PlayerBoy_20_Eidolon4_Sub",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_BreakDamageBase",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BreakDamageAdd",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageBase) || Variables[1] (0.15) || MUL || RETURN",
                "displayLines": "(MDF_BreakDamageBase * 0.15)",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageBase",
                  0.15
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "PlayerBoy_20_Eidolon4_BreakDamageBonus[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]",
              "valuePerStack": {
                "MDF_AddBreakDamageRatio": {
                  "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                  "displayLines": "MDF_BreakDamageAdd",
                  "constants": [],
                  "variables": [
                    "MDF_BreakDamageAdd"
                  ]
                }
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
      "for": "PlayerBoy_20_TechniqueUsage_Bonus[<span class=\"descriptionNumberColor\">Now! I'm the Band!</span>]",
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
                "operator": "Variables[0] (MDF_BreakDamageAddedRatio) || RETURN",
                "displayLines": "MDF_BreakDamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_BreakDamageAddedRatio"
      ],
      "latentQueue": [],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Now! I'm the Band!"
    }
  ],
  "references": []
}