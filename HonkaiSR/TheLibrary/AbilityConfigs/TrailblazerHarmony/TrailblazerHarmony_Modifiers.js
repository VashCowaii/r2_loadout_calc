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
      "for": "<a class=\"gModGreen\" id=\"mod__-1758196772\">ADV_StageAbility_Maze_PlayerBoy_20</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1210211185\">PlayerBoy_20_Eidolon2</a>[<span class=\"descriptionNumberColor\">Jailbreaking Rainbowwalk</span>]",
      "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Jailbreaking Rainbowwalk",
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
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1193433566\">PlayerBoy_20_Eidolon1</a>",
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
                    "displayLines": "1"
                  },
                  "adjustmentType": "+"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1588077472\">PlayerBoy_20_PointB3_Bonus</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1962521181\">PlayerBoy_20_PointB3_Bonus_Preshow</a>",
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "displayLines": "MDF_PropertyValue"
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1962521181\">PlayerBoy_20_PointB3_Bonus_Preshow</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "displayLines": "MDF_PropertyValue"
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_PropertyValue"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1962521181\">PlayerBoy_20_PointB3_Bonus_Preshow</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [
        "MDF_PropertyValue2"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "conditions": {
          "name": "Has Toughness Reduction Preview",
          "abilityCaster": {
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
            "displayLines": "MDF_PropertyValue2"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1126601177\">PlayerBoy_20_PointB2_Bonus</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
        "multiplier": {
          "displayLines": "(1 + 1)"
        }
      },
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Attack Start [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__492165817\">PlayerBoy_20_Passive_SpecialMark</a>",
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1949564802\">PlayerBoy_20_AbilityP01_ListenBreakDamage_Self</a>"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1949564802\">PlayerBoy_20_AbilityP01_ListenBreakDamage_Self</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1679523029\">PlayerBoy_20_Passive_BonusArea</a>",
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
                "displayLines": "10"
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492165817\">PlayerBoy_20_Passive_SpecialMark</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"492165817\">PlayerBoy_20_Passive_SpecialMark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1873952341\">PlayerBoy_20_Ability03_ElementDamage</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "variables": {
                "DamagePercentage": {
                  "displayLines": "MDF_SuperBreakDamagePercentage"
                }
              },
              "damageSequence": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
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
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageBreak": {
                      "displayLines": "value_0_DamagePercentage"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1949564802\">PlayerBoy_20_AbilityP01_ListenBreakDamage_Self</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "type": "Buff",
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
              "modifierName": "<a class=\"gModGreen\" id=\"-1949564802\">PlayerBoy_20_AbilityP01_ListenBreakDamage_Self</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-197410613\">PlayerBoy_20_AbilityP01_ListenBreakDamage</a>[<span class=\"descriptionNumberColor\">Backup Dancer</span>]"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "MDF_PassiveDamage2"
              },
              "variableName": "MDF_PassiveDamageOrigin"
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
              "value": {
                "displayLines": "MDF_PassiveDamageOrigin"
              },
              "variableName": "MDF_PassiveDamage2"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "priorityLevel": 100,
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
                      "value": {
                        "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio1))"
                      },
                      "variableName": "MDF_PassiveDamage2"
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
                          "value": {
                            "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio2))"
                          },
                          "variableName": "MDF_PassiveDamage2"
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
                              "value": {
                                "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio3))"
                              },
                              "variableName": "MDF_PassiveDamage2"
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
                                  "value": {
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio4))"
                                  },
                                  "variableName": "MDF_PassiveDamage2"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio5))"
                                  },
                                  "variableName": "MDF_PassiveDamage2"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1873952341\">PlayerBoy_20_Ability03_ElementDamage</a>",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "displayLines": "MDF_PassiveDamage2"
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-197410613\">PlayerBoy_20_AbilityP01_ListenBreakDamage</a>[<span class=\"descriptionNumberColor\">Backup Dancer</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. And after attacking enemy targets that are Weakness Broken, converts the Toughness Reduction of the attack into 1 instance of Super Break DMG.",
      "type": "Buff",
      "effectName": "Backup Dancer",
      "statusName": "Backup Dancer",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "MDF_PassiveDamage2"
              },
              "variableName": "MDF_PassiveDamageOrigin"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
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
              "value": {
                "displayLines": "MDF_PassiveDamageOrigin"
              },
              "variableName": "MDF_PassiveDamage2"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "priorityLevel": 100,
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
                      "value": {
                        "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio1))"
                      },
                      "variableName": "MDF_PassiveDamage2"
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
                          "value": {
                            "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio2))"
                          },
                          "variableName": "MDF_PassiveDamage2"
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
                              "value": {
                                "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio3))"
                              },
                              "variableName": "MDF_PassiveDamage2"
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
                                  "value": {
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio4))"
                                  },
                                  "variableName": "MDF_PassiveDamage2"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(MDF_PassiveDamage2 * (1 + MDF_PointB1_DamageAddedRatio5))"
                                  },
                                  "variableName": "MDF_PassiveDamage2"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1873952341\">PlayerBoy_20_Ability03_ElementDamage</a>",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "displayLines": "MDF_PassiveDamage2"
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__610400910\">PlayerBoy_20_AbilityP01_ListenRedShieldModifier</a>",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-197410613\">PlayerBoy_20_AbilityP01_ListenBreakDamage</a>[<span class=\"descriptionNumberColor\">Backup Dancer</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_RealMaxStance": 30,
            "MDF_PropertyValue": {
              "displayLines": "0.3"
            },
            "MDF_PassiveDamage2": {
              "displayLines": "1"
            },
            "MDF_PointB1_DamageAddedRatio1": {
              "displayLines": "0.2"
            },
            "MDF_PointB1_DamageAddedRatio2": {
              "displayLines": "0.3"
            },
            "MDF_PointB1_DamageAddedRatio3": {
              "displayLines": "0.4"
            },
            "MDF_PointB1_DamageAddedRatio4": {
              "displayLines": "0.5"
            },
            "MDF_PointB1_DamageAddedRatio5": {
              "displayLines": "0.6"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1949564802\">PlayerBoy_20_AbilityP01_ListenBreakDamage_Self</a>",
          "haloStatus": true,
          "duration": {
            "displayLines": "MDF_LifeTime"
          },
          "valuePerStack": {
            "MDF_RealMaxStance": 30,
            "MDF_PropertyValue": {
              "displayLines": "0.3"
            },
            "MDF_PassiveDamage2": {
              "displayLines": "1"
            },
            "MDF_PointB1_DamageAddedRatio1": {
              "displayLines": "0.2"
            },
            "MDF_PointB1_DamageAddedRatio2": {
              "displayLines": "0.3"
            },
            "MDF_PointB1_DamageAddedRatio3": {
              "displayLines": "0.4"
            },
            "MDF_PointB1_DamageAddedRatio4": {
              "displayLines": "0.5"
            },
            "MDF_PointB1_DamageAddedRatio5": {
              "displayLines": "0.6"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1873952341\">PlayerBoy_20_Ability03_ElementDamage</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_SuperBreakDamagePercentage": 0
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "displayLines": "3"
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
              "modifier": "<a class=\"gModGreen\" id=\"-197410613\">PlayerBoy_20_AbilityP01_ListenBreakDamage</a>[<span class=\"descriptionNumberColor\">Backup Dancer</span>]"
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
              "modifierName": "<a class=\"gModGreen\" id=\"610400910\">PlayerBoy_20_AbilityP01_ListenRedShieldModifier</a>",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "MDF_HarmonyEnergy"
              },
              "maximum": {
                "displayLines": "3"
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1272032141\">PlayerBoy_20_Eidolon4_BreakDamageBonus</a>[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]",
      "stackType": "Replace",
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_AddBreakDamageRatio</span>.",
      "type": "Buff",
      "statusName": "Dove in Tophat",
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
                "displayLines": "MDF_BreakDamageAdd"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1584216137\">PlayerBoy_20_Eidolon4_Bonus</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1272032141\">PlayerBoy_20_Eidolon4_BreakDamageBonus</a>[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-517215747\">PlayerBoy_20_Eidolon4_Sub</a>"
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-517215747\">PlayerBoy_20_Eidolon4_Sub</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1272032141\">PlayerBoy_20_Eidolon4_BreakDamageBonus</a>[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-517215747\">PlayerBoy_20_Eidolon4_Sub</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_BreakDamageBase",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_BreakDamageBase * 0.15)"
              },
              "variableName": "MDF_BreakDamageAdd"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1272032141\">PlayerBoy_20_Eidolon4_BreakDamageBonus</a>[<span class=\"descriptionNumberColor\">Dove in Tophat</span>]",
              "valuePerStack": {
                "MDF_AddBreakDamageRatio": {
                  "displayLines": "MDF_BreakDamageAdd"
                }
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-517215747\">PlayerBoy_20_Eidolon4_Sub</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-517215747\">PlayerBoy_20_Eidolon4_Sub</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-517215747\">PlayerBoy_20_Eidolon4_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1971132539\">PlayerBoy_20_TechniqueUsage_Bonus</a>[<span class=\"descriptionNumberColor\">Now! I'm the Band!</span>]",
      "stackType": "ReplaceByCaster",
      "useEntitySnapshot": true,
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Now! I'm the Band!",
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
                "displayLines": "MDF_BreakDamageAddedRatio"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}