const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Trailblazer - Harmony",
  "trimCharacterName": "TrailblazerHarmony",
  "abilityList": [
    "TrailblazerHarmony_Modifiers",
    "TrailblazerHarmony_LocalPlayer_StandardAbility_AttackBreak",
    "TrailblazerHarmony_LocalPlayer_PlayerBoy_20_TechniqueUsage",
    "TrailblazerHarmony_LocalPlayer_PlayerBoy_20_NormalAtk01",
    "TrailblazerHarmony_PlayerBoy_20_TechniqueInLevel",
    "TrailblazerHarmony_PlayerBoy_20_PassiveAbility_01",
    "TrailblazerHarmony_PlayerBoy_20_Ability03_Part02",
    "TrailblazerHarmony_PlayerBoy_20_Ability03_Part01",
    "TrailblazerHarmony_PlayerBoy_20_Ability03_EnterReady",
    "TrailblazerHarmony_PlayerBoy_20_Ability02_Part02",
    "TrailblazerHarmony_PlayerBoy_20_Ability02_Part01",
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Part02",
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Part01"
  ],
  "abilityObject": {
    "TrailblazerHarmony_Modifiers": {
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "statValue": {
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
                  "statValue": {
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_BreakDamageAddedRatio"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "TrailblazerHarmony_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "TrailblazerHarmony_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "damageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerHarmony_LocalPlayer_PlayerBoy_20_TechniqueUsage": {
      "fileName": "TrailblazerHarmony_LocalPlayer_PlayerBoy_20_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "800501(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerHarmony_LocalPlayer_PlayerBoy_20_NormalAtk01": {
      "fileName": "TrailblazerHarmony_LocalPlayer_PlayerBoy_20_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "from": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "to": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "Distance_Between_Entities",
                "compareType": "<=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ],
                  "projectileFinished": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ],
                  "projectileFinished": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_TechniqueInLevel": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_TechniqueInLevel",
      "childAbilityList": [
        "TrailblazerHarmony_PlayerBoy_20_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-632230246\">StageAbility_Maze_PlayerBoy_20_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-632230246\">StageAbility_Maze_PlayerBoy_20_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1971132539\">PlayerBoy_20_TechniqueUsage_Bonus</a>[<span class=\"descriptionNumberColor\">Now! I'm the Band!</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "valuePerStack": {
                        "MDF_BreakDamageAddedRatio": {
                          "displayLines": "0.3"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_PassiveAbility_01": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_PassiveAbility_01",
      "childAbilityList": [
        "TrailblazerHarmony_PlayerBoy_20_PassiveAbility_01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1584216137\">PlayerBoy_20_Eidolon4_Bonus</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Shuffle Along"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1126601177\">PlayerBoy_20_PointB2_Bonus</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Hat of the Theater"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1588077472\">PlayerBoy_20_PointB3_Bonus</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.3"
                }
              }
            }
          ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1193433566\">PlayerBoy_20_Eidolon1</a>"
            }
          ]
        },
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1210211185\">PlayerBoy_20_Eidolon2</a>[<span class=\"descriptionNumberColor\">Jailbreaking Rainbowwalk</span>]",
              "duration": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.25"
                }
              }
            }
          ]
        },
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1679523029\">PlayerBoy_20_Passive_BonusArea</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability03_Part02": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610400910\">PlayerBoy_20_AbilityP01_ListenRedShieldModifier</a>",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_LifeTime": {
              "displayLines": "3"
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "3"
          },
          "variableName": "MDF_HarmonyEnergy"
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
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability03_Part01": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability03_Part01",
      "childAbilityList": [
        "TrailblazerHarmony_PlayerBoy_20_Ability03_Camera",
        "TrailblazerHarmony_PlayerBoy_20_Ability03_EnterReady",
        "TrailblazerHarmony_PlayerBoy_20_Ability03_Part01",
        "TrailblazerHarmony_PlayerBoy_20_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
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
          "ability": "PlayerBoy_20_Ability03_Part02"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability03_EnterReady": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability02_Part02": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Shuffle Along"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "0.5"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value * (1 + 1))"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "0.5"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
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
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Bounce_Count",
              "resetValue": {
                "displayLines": "(4 + 2)"
              },
              "scope": "ContextCaster"
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Bounce_Count",
              "resetValue": 4,
              "scope": "ContextCaster"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "Bounce_Count"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "0.5"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * 0.5)"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability02_Part01": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability02_Part01",
      "childAbilityList": [
        "TrailblazerHarmony_PlayerBoy_20_Ability02_Camera",
        "TrailblazerHarmony_PlayerBoy_20_Ability02_Part01",
        "TrailblazerHarmony_PlayerBoy_20_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 6,
      "toughnessList": [
        10,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "PlayerBoy_20_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "All Other Team Members"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Part02": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Part01": {
      "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability01_Part01",
      "childAbilityList": [
        "TrailblazerHarmony_PlayerBoy_20_Ability01_Camera",
        "TrailblazerHarmony_PlayerBoy_20_Ability01_Part01",
        "TrailblazerHarmony_PlayerBoy_20_Ability01_Part02"
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
          "ability": "PlayerBoy_20_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    }
  }
}