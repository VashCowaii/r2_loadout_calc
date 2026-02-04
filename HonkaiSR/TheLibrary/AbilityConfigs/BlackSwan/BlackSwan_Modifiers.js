const configAbility = {
  "fileName": "BlackSwan_Modifiers",
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
      "for": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_P01_AddDOTFlag",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Maze_StopAddDot",
      "counter": 1,
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": [
        "MazeSkill_Triggered",
        "_can_continue"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_ForbidEffectFlag",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_DOT_Eidolon4_AddSP",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (Rank04_SPAdded) || RETURN",
                "displayLines": "Rank04_SPAdded",
                "constants": [],
                "variables": [
                  "Rank04_SPAdded"
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP"
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -10
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
      "counter": 1,
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "FixedPerformTime",
        "RetainCountZero",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Flags from Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagName": [
                "STAT_DOT_Burn",
                "STAT_DOT_Bleed",
                "STAT_DOT_Electric"
              ],
              "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDown) || SUB || RETURN",
                    "displayLines": "(0 - MDF_ResistanceDown)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_ResistanceDown"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Reduces Effect RES by <span class=\"descriptionNumberColor\">MDF_ResistanceDown</span>. DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> during this unit's turn. While afflicted with Arcana, this unit is also considered to be simultaneously inflicted with Wind Shear, Bleed, Burn, and Shock. Additionally, after Arcana causes DMG at the start of each turn, its stacks do not reset. This effect can trigger <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s)."
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_DOT_Eidolon4_AddSP",
                  "valuePerStack": {
                    "Eidolon4_SPAdded": {
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "Add Flags to Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagName": [
                "STAT_DOT_Burn",
                "STAT_DOT_Bleed",
                "STAT_DOT_Electric"
              ],
              "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_ResistanceDown",
        "MDF_Count",
        "SecondLayer",
        "ThirdLayer"
      ],
      "latentQueue": [],
      "description": "The DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> during this unit's turn. While in Arcana state, this unit is also considered to be simultaneously inflicted with Wind Shear, Bleed, Burn, and Shock. Additionally, after Arcana causes DMG at the start of each turn, its stacks do not reset. This effect can trigger <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
      "type": "Debuff",
      "effectName": "Epiphany",
      "statusName": "Epiphany",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_DOTFlag",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
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
                "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                "invertCondition": true
              },
              "passed": [
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
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
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_DOT_DefenceIgnore",
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
                  "DOT"
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
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "DynamicInjectLoop"
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
              "modifier": "M_BlackSwan_P01_AddDOTFlag"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "valueType": "Layer",
              "variableName": "Dot_Layer_Count",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Snapshot Target's Source Owner}}"
                    },
                    "living": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Cast_By_Level",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
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
                  "modifier": "M_BlackSwan_ForbidEffectFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dot_Layer_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (SecondLayer) || RETURN",
                      "displayLines": "SecondLayer",
                      "constants": [],
                      "variables": [
                        "SecondLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
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
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LittleMonster",
                          "MiddleMonster"
                        ]
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Dot_Layer_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (ThirdLayer) || RETURN",
                          "displayLines": "ThirdLayer",
                          "constants": [],
                          "variables": [
                            "ThirdLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
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
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
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
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dot_Layer_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ThirdLayer) || RETURN",
                      "displayLines": "ThirdLayer",
                      "constants": [],
                      "variables": [
                        "ThirdLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_BlackSwan_DOT_DefenceIgnore",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (DefenceIgnore) || RETURN",
                          "displayLines": "DefenceIgnore",
                          "constants": [],
                          "variables": [
                            "DefenceIgnore"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                      },
                      "modifier": "M_BlackSwan_DOT_DefenceIgnore",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (DefenceIgnore) || RETURN",
                          "displayLines": "DefenceIgnore",
                          "constants": [],
                          "variables": [
                            "DefenceIgnore"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dot_Layer_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ThirdLayer) || RETURN",
                      "displayLines": "ThirdLayer",
                      "constants": [],
                      "variables": [
                        "ThirdLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
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
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                              "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                              "constants": [],
                              "variables": [
                                "Basic_DamagePercentage",
                                "Dot_Layer_Count",
                                "ExtraLayer_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                              "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                              "constants": [],
                              "variables": [
                                "Basic_DamagePercentage",
                                "Dot_Layer_Count",
                                "ExtraLayer_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
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
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Dot_Layer_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (SecondLayer) || RETURN",
                          "displayLines": "SecondLayer",
                          "constants": [],
                          "variables": [
                            "SecondLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
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
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                  "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                  "constants": [],
                                  "variables": [
                                    "Basic_DamagePercentage",
                                    "Dot_Layer_Count",
                                    "ExtraLayer_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                  "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                  "constants": [],
                                  "variables": [
                                    "Basic_DamagePercentage",
                                    "Dot_Layer_Count",
                                    "ExtraLayer_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
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
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
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
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                  "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                  "constants": [],
                                  "variables": [
                                    "Basic_DamagePercentage",
                                    "Dot_Layer_Count",
                                    "ExtraLayer_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                  "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                  "constants": [],
                                  "variables": [
                                    "Basic_DamagePercentage",
                                    "Dot_Layer_Count",
                                    "ExtraLayer_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
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
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dot_Layer_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (SecondLayer) || RETURN",
                      "displayLines": "SecondLayer",
                      "constants": [],
                      "variables": [
                        "SecondLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
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
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Flags from Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": [
                            "STAT_DOT_Poison",
                            "STAT_DOT_Burn",
                            "STAT_DOT_Bleed",
                            "STAT_DOT_Electric"
                          ],
                          "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] (Spread_DamagePercentage) || RETURN",
                              "displayLines": "Spread_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "Spread_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        },
                        {
                          "name": "Add Flags to Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagName": [
                            "STAT_DOT_Poison",
                            "STAT_DOT_Burn",
                            "STAT_DOT_Bleed",
                            "STAT_DOT_Electric"
                          ],
                          "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] (Spread_DamagePercentage) || RETURN",
                              "displayLines": "Spread_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "Spread_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                      },
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_BlackSwan_P01_AddDOTFlag"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Dot_Layer_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (ThirdLayer) || RETURN",
                              "displayLines": "ThirdLayer",
                              "constants": [],
                              "variables": [
                                "ThirdLayer"
                              ]
                            },
                            "contextScope": "ContextModifier"
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
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              }
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
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_DOT_DefenceIgnore"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                  },
                  "modifier": "M_BlackSwan_DOT_DefenceIgnore"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_ForbidEffectFlag"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_ForbidEffectFlag"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                      "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                      "constants": [],
                      "variables": [
                        "Basic_DamagePercentage",
                        "Dot_Layer_Count",
                        "ExtraLayer_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_ForbidEffectFlag"
                }
              ]
            },
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
                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_enhance_count",
                  "modifierName": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                  "value": {
                    "operator": "Variables[0] (_enhance_count) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_enhance_count - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_enhance_count"
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (_enhance_count) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_enhance_count - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_enhance_count"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_ForbidEffectFlag"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "valueType": "Layer",
                  "variableName": "Dot_Layer_Count",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Constants[0] (1) || Variables[0] (ExtraLayer_DamagePercentage) || SUB || RETURN",
                    "displayLines": "(1 - ExtraLayer_DamagePercentage)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "ExtraLayer_DamagePercentage"
                    ]
                  },
                  "silentAdd": true
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Reset Arcana Stacks"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_ForbidEffectFlag"
                }
              ]
            }
          ],
          "priorityLevel": 90
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
              "scope": "ContextModifier",
              "valueType": "MaxLayer",
              "variableName": "MDF_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "Add Flags to Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagName": [
                "STAT_DOT_Poison"
              ],
              "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Add Flags to Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "STAT_DOT_Burn",
                    "STAT_DOT_Bleed",
                    "STAT_DOT_Electric"
                  ],
                  "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_BlackSwan_DOTFlag"
            },
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
                    "modifier": "M_BlackSwan_ForbidEffectFlag",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Cast_By_Level",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
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
                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
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
                        "value1": null,
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ThirdLayer) || RETURN",
                          "displayLines": "ThirdLayer",
                          "constants": [],
                          "variables": [
                            "ThirdLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": null,
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (SecondLayer) || RETURN",
                              "displayLines": "SecondLayer",
                              "constants": [],
                              "variables": [
                                "SecondLayer"
                              ]
                            },
                            "valueType": "Layer"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ThirdLayer) || RETURN",
                          "displayLines": "ThirdLayer",
                          "constants": [],
                          "variables": [
                            "ThirdLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": null,
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (SecondLayer) || RETURN",
                              "displayLines": "SecondLayer",
                              "constants": [],
                              "variables": [
                                "SecondLayer"
                              ]
                            },
                            "valueType": "Layer"
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
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "valueType": "Layer",
              "variableName": "Dot_Layer_Count",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Basic_DamagePercentage) || Variables[2] (Dot_Layer_Count) || Variables[3] (ExtraLayer_DamagePercentage) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * (Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage)))",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Basic_DamagePercentage",
                        "Dot_Layer_Count",
                        "ExtraLayer_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Basic_DamagePercentage) || Variables[2] (Dot_Layer_Count) || Variables[3] (ExtraLayer_DamagePercentage) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * (Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage)))",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Basic_DamagePercentage",
                        "Dot_Layer_Count",
                        "ExtraLayer_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "Basic_DamagePercentage",
        "ExtraLayer_DamagePercentage",
        "SecondLayer",
        "Spread_DamagePercentage",
        "ThirdLayer",
        "DefenceIgnore",
        "Cast_By_Level"
      ],
      "latentQueue": [],
      "description": "Takes Wind DMG at the start of each turn. Being afflicted with Arcana will also be considered as suffering from Wind Shear. This state stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> times.",
      "type": "Debuff",
      "effectName": "Arcana",
      "statusName": "Arcana"
    }
  ],
  "references": []
}