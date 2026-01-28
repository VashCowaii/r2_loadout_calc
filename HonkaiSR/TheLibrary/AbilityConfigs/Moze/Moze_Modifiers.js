const configAbility = {
  "fileName": "Moze_Modifiers",
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
      "for": "Moze_Ability02_InShadowModifier",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_SkillP01_CurrentCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EnergyCost",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                "displayLines": "MDF_SkillP01_CurrentCount",
                "constants": [],
                "variables": [
                  "MDF_SkillP01_CurrentCount"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                "displayLines": "MDF_MaxEnergy",
                "constants": [],
                "variables": [
                  "MDF_MaxEnergy"
                ]
              },
              "assignState": "True",
              "priorState": "Disable",
              "bar#": 2
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Assign DEPARTED(Modifier: Standard_Departed)",
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Basic ATK",
                "Skill"
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_SkillP01_CurrentCount",
              "value": {
                "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                "displayLines": "MDF_MaxEnergy",
                "constants": [],
                "variables": [
                  "MDF_MaxEnergy"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EnergyCost",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                "displayLines": "MDF_SkillP01_CurrentCount",
                "constants": [],
                "variables": [
                  "MDF_SkillP01_CurrentCount"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                "displayLines": "MDF_MaxEnergy",
                "constants": [],
                "variables": [
                  "MDF_MaxEnergy"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 2
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_InInsert_Tag",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_Eidolon1_DeBonus[<span class=\"descriptionNumberColor\">Vengewise</span>]",
      "modifierFlags": [
        "BlockInfect"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
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
      "description": "Follow-Up ATK DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Follow-Up ATK DMG Vulnerability",
      "statusName": "Vengewise"
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "stackData": [],
      "latentQueue": [],
      "description": "The Trace \"Nightfeather\" effect's auto-trigger is still on cooldown.",
      "type": "Other",
      "statusName": "Nightfeather"
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "BlockInfect",
        "RemoveWhenOwnerUnstage"
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
              "modifier": "Moze_Eidolon1_DeBonus[<span class=\"descriptionNumberColor\">Vengewise</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Moze_Ability02_InShadowModifier"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Deathrattle",
                "invertCondition": true
              }
            },
            {
              "name": "Toggle Skill Mark"
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
                "value1": "MDF_SkillP01_CurrentCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Moze_Ability02_InShadowModifier"
                },
                "Modifier Deletes Itself"
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
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "MDF_TotalDamage"
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
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "This unit is marked as the Prey. After every attack it receives, it will receive Lightning Additional DMG equal to <span class=\"descriptionNumberColor\">#SkillP01_P1_ExtraDamagePercentage</span> of Moze's ATK, and Moze will consume 1 point of Charge. When ally targets attack the enemy marked as \"Prey,\" the CRIT DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_TotalDamage</span>."
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalDamage",
                  "value": {
                    "operator": "Variables[0] (0.4) || RETURN",
                    "displayLines": "0.4",
                    "constants": [],
                    "variables": [
                      0.4
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Vengewise"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Moze_Eidolon1_DeBonus[<span class=\"descriptionNumberColor\">Vengewise</span>]",
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
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                  "functionName": "PursuedDamage_PerformanceDelay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Moze_InInsert_Tag",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillP01_CurrentCount",
                      "value": {
                        "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_SkillP01_CurrentCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SkillP01_CurrentCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_EnergyCost",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyCost) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_EnergyCost + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_EnergyCost"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillP01_CurrentCount",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillP01_CurrentCount",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_EnergyCost",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (3) || Constants[0] (1) || SUB || RETURN",
                              "displayLines": "(3 - 1)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                3
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_EnergyCost",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (3) || Constants[0] (2) || ADD || RETURN",
                              "displayLines": "(3 + 2)",
                              "constants": [
                                2
                              ],
                              "variables": [
                                3
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_EnergyCost",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (3) || Constants[0] (5) || ADD || RETURN",
                              "displayLines": "(3 + 5)",
                              "constants": [
                                5
                              ],
                              "variables": [
                                3
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                            "displayLines": "MDF_SkillP01_CurrentCount",
                            "constants": [],
                            "variables": [
                              "MDF_SkillP01_CurrentCount"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                            "displayLines": "MDF_MaxEnergy",
                            "constants": [],
                            "variables": [
                              "MDF_MaxEnergy"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_SkillP01_CurrentCount",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                                "displayLines": "MDF_SkillP01_CurrentCount",
                                "constants": [],
                                "variables": [
                                  "MDF_SkillP01_CurrentCount"
                                ]
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                                "displayLines": "MDF_MaxEnergy",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxEnergy"
                                ]
                              },
                              "assignState": "True",
                              "priorState": "Normal",
                              "bar#": 2
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                                "displayLines": "MDF_SkillP01_CurrentCount",
                                "constants": [],
                                "variables": [
                                  "MDF_SkillP01_CurrentCount"
                                ]
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                                "displayLines": "MDF_MaxEnergy",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxEnergy"
                                ]
                              },
                              "assignState": "True",
                              "priorState": "Disable",
                              "bar#": 2
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_EnergyCost",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
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
                          "abilityName": "Moze_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
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
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "trigger": "State_Active"
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "trigger": "State_Normal"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
          "execute": [
            {
              "name": "Toggle Skill Mark",
              "toggle": true
            }
          ]
        },
        {
          "eventTrigger": "Member Removed from Team [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Moze_Ability02_InShadowModifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Get Revived [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EnergyCost",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
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
                  "abilityName": "Moze_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
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
          "eventTrigger": "Unselectable Adjustment [Owner]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Moze_Ability02_InShadowModifier"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "This unit is marked as \"Prey.\" After every time it receives an attack, it will receive Lightning Additional DMG equal to <span class=\"descriptionNumberColor\">#SkillP01_P1_ExtraDamagePercentage</span> of Moze's ATK, and Moze will consume 1 point of Charge.",
      "type": "Debuff",
      "effectName": "Prey",
      "statusName": "Prey"
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_InsertAction_Modifier",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill02"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Remove",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill02"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Remove"
                }
              ]
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Basic ATK"
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
                "name": "Skill Type",
                "skillType": "Skill"
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
  "references": []
}