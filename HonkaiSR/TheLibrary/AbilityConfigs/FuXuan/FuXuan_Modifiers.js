const configAbility = {
  "fileName": "FuXuan_Modifiers",
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
      "for": "FuXuan_Eidolon2TeamCheck",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "FuXuan_Eidolon2_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "FuXuan_Eidolon2_Insert",
                  "priorityTag": "AvatarReviveOthers",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "AADF_1": {
                      "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                      "displayLines": "MDF_HealPercentage",
                      "constants": [],
                      "variables": [
                        "MDF_HealPercentage"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "FuXuan_Eidolon2TeamCheck"
                }
              ]
            }
          ],
          "priorityLevel": -70
        }
      ],
      "description": "When struck with a killing blow, instead of becoming downed, the character immediately restores HP equal to <span class=\"descriptionNumberColor\">MDF_HealPercentage</span> of Max HP.",
      "type": "Buff",
      "effectName": "Optimus Felix",
      "statusName": "Optimus Felix"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_Tree02TeamCheck",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "EnduranceEnemyOnly"
      ],
      "execute": [
        {
          "eventTrigger": "Debuff Immunity[?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "FuXuan_Tree02TeamCheck"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "This status can be consumed to resist Crowd Control debuffs.",
      "type": "Buff",
      "effectName": "Resist Crowd Control debuffs",
      "statusName": "Liuren, the Sexagenary"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_Eidolon6[<span class=\"descriptionNumberColor\">Total HP lost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Battle Event",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "FuXuan_ListenLifeTime[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HPChangeValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "GDF_AllTeamMemberLoseHPValue",
                      "value": {
                        "operator": "Variables[0] (GDF_AllTeamMemberLoseHPValue) || Variables[1] (HPChangeValue) || SUB || RETURN",
                        "displayLines": "(GDF_AllTeamMemberLoseHPValue - HPChangeValue)",
                        "constants": [],
                        "variables": [
                          "GDF_AllTeamMemberLoseHPValue",
                          "HPChangeValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "CasterMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "GDF_AllTeamMemberLoseHPValue",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (CasterMaxHP) || Variables[1] (1.2) || MUL || RETURN",
                          "displayLines": "(CasterMaxHP * 1.2)",
                          "constants": [],
                          "variables": [
                            "CasterMaxHP",
                            1.2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (GDF_AllTeamMemberLoseHPValue) || RETURN",
                            "displayLines": "GDF_AllTeamMemberLoseHPValue",
                            "constants": [],
                            "variables": [
                              "GDF_AllTeamMemberLoseHPValue"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (CasterMaxHP) || Variables[1] (1.2) || MUL || RETURN",
                            "displayLines": "(CasterMaxHP * 1.2)",
                            "constants": [],
                            "variables": [
                              "CasterMaxHP",
                              1.2
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
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDamage",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "CasterMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "GDF_AllTeamMemberLoseHPValue",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (CasterMaxHP) || Variables[1] (1.2) || MUL || RETURN",
                      "displayLines": "(CasterMaxHP * 1.2)",
                      "constants": [],
                      "variables": [
                        "CasterMaxHP",
                        1.2
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamage",
                      "value": {
                        "operator": "Variables[0] (GDF_AllTeamMemberLoseHPValue) || RETURN",
                        "displayLines": "GDF_AllTeamMemberLoseHPValue",
                        "constants": [],
                        "variables": [
                          "GDF_AllTeamMemberLoseHPValue"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamage",
                      "value": {
                        "operator": "Variables[0] (CasterMaxHP) || Variables[1] (1.2) || MUL || RETURN",
                        "displayLines": "(CasterMaxHP * 1.2)",
                        "constants": [],
                        "variables": [
                          "CasterMaxHP",
                          1.2
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
      "stackData": [],
      "latentQueue": [],
      "description": "Allies have lost <span class=\"descriptionNumberColor\">MDF_FinalDamage</span> HP in total.",
      "type": "Other",
      "statusName": "Total HP lost"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_ListenLifeTime[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_HitDamageSplit[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_JianZhi_Eidolon1[<span class=\"descriptionNumberColor\">Knowledge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_JianZhi[<span class=\"descriptionNumberColor\">Knowledge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": null,
                "compareType": "=",
                "value2": 2,
                "valueType": "LifeTime"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "GDF_BPSkill_LifeTime",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "AlwaysNeedBP",
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
              "name": "Define Custom Variable",
              "variableName": "GDF_BPSkill_LifeTime",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "AlwaysNeedBP",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "FuXuan_Eidolon2TeamCheck",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Team Members(In Context, with Untargetable, NO Memosprites)",
                      "modifier": "FuXuan_Eidolon2[<span class=\"descriptionNumberColor\">Optimus Felix</span>]",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "operator": "Variables[0] (0.7) || RETURN",
                          "displayLines": "0.7",
                          "constants": [],
                          "variables": [
                            0.7
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": "Allied Team",
              "variableName": "AliveNum",
              "livingTargets": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AliveNum",
                "compareType": ">",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AliveNum",
                  "value": 4
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
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "FuXuan_JianZhi_Eidolon1[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                  "valuePerStack": {
                    "MDF_MaxHPUpRatio": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    },
                    "MDF_CritChanceUpRatio": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "MDF_CritDamageUpRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "FuXuan_JianZhi[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                  "valuePerStack": {
                    "MDF_MaxHPUpRatio": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    },
                    "MDF_CritChanceUpRatio": {
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
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": "Use Prior Target(s) Defined",
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "FuXuan_HitDamageSplit[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
                  "valuePerStack": {
                    "MDF_SplitPercentage": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    },
                    "Ability02_P2_DamageResistance": {
                      "operator": "Variables[0] (0) || RETURN",
                      "displayLines": "0",
                      "constants": [],
                      "variables": [
                        0
                      ]
                    },
                    "AddSP": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
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
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "FuXuan_JianZhi_Eidolon1[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                      "valuePerStack": {
                        "MDF_MaxHPUpRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_CritChanceUpRatio": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        },
                        "MDF_CritDamageUpRatio": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "FuXuan_JianZhi[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                      "valuePerStack": {
                        "MDF_MaxHPUpRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_CritChanceUpRatio": {
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
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "Skill02_P2_DamageResistance"
      ],
      "latentQueue": [],
      "description": "Receive DMG distributed by other teammates.",
      "type": "Buff",
      "statusName": "Matrix of Prescience"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_ExChangeHP",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Caster",
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_LimboHPChangeFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_ExChangeHPCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FuXuan_Passive_Ability",
                      "abilitySource": "Caster",
                      "abilityTarget": "Caster",
                      "priorityTag": "AvatarHealSelf",
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
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Caster",
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_LimboHPChangeFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_ExChangeHPCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FuXuan_Passive_Ability",
                      "abilitySource": "Caster",
                      "abilityTarget": "Caster",
                      "priorityTag": "AvatarHealSelf",
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
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "DisableAction"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "FLAG_BanAction",
                  "value": 1
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
                "name": "Compare: Variable",
                "value1": "FLAG_BanAction",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "FLAG_BanAction",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": "Caster",
                                "value1": "CurrentHP%",
                                "compareType": "<=",
                                "value2": {
                                  "operator": "Variables[0] (0.5) || RETURN",
                                  "displayLines": "0.5",
                                  "constants": [],
                                  "variables": [
                                    0.5
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "GDF_LimboHPChangeFlag",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "GDF_ExChangeHPCount",
                                "compareType": ">",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FuXuan_Passive_Ability",
                              "abilitySource": "Caster",
                              "abilityTarget": "Caster",
                              "priorityTag": "AvatarHealSelf",
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_JianZhi_Eidolon1[<span class=\"descriptionNumberColor\">Knowledge</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "_HPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_MaxHPUpRatio",
              "value": {
                "operator": "Variables[0] (0.06) || Variables[1] (_MaxHP) || Variables[2] (_HPConvert) || SUB || MUL || RETURN",
                "displayLines": "(0.06 * (_MaxHP - _HPConvert))",
                "constants": [],
                "variables": [
                  0.06,
                  "_MaxHP",
                  "_HPConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_MaxHPUpRatio) || RETURN",
                "displayLines": "MDF_MaxHPUpRatio",
                "constants": [],
                "variables": [
                  "MDF_MaxHPUpRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritChanceUpRatio) || RETURN",
                "displayLines": "MDF_CritChanceUpRatio",
                "constants": [],
                "variables": [
                  "MDF_CritChanceUpRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritDamageUpRatio) || RETURN",
                "displayLines": "MDF_CritDamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_CritDamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxHPUpRatio",
        "MDF_CritChanceUpRatio",
        "MDF_CritDamageUpRatio"
      ],
      "latentQueue": [
        "GDF_BPSkill_LifeTime"
      ],
      "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_MaxHPUpRatio</span>, CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUpRatio</span>, and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>.",
      "type": "Buff",
      "effectName": "Increases Max HP, CRIT Rate, and CRIT DMG",
      "statusName": "Knowledge"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_JianZhi[<span class=\"descriptionNumberColor\">Knowledge</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "_HPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_MaxHPUpRatio",
              "value": {
                "operator": "Variables[0] (0.06) || Variables[1] (_MaxHP) || Variables[2] (_HPConvert) || SUB || MUL || RETURN",
                "displayLines": "(0.06 * (_MaxHP - _HPConvert))",
                "constants": [],
                "variables": [
                  0.06,
                  "_MaxHP",
                  "_HPConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_MaxHPUpRatio) || RETURN",
                "displayLines": "MDF_MaxHPUpRatio",
                "constants": [],
                "variables": [
                  "MDF_MaxHPUpRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritChanceUpRatio) || RETURN",
                "displayLines": "MDF_CritChanceUpRatio",
                "constants": [],
                "variables": [
                  "MDF_CritChanceUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxHPUpRatio",
        "MDF_CritChanceUpRatio"
      ],
      "latentQueue": [
        "GDF_BPSkill_LifeTime"
      ],
      "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_MaxHPUpRatio</span>, CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CritChanceUpRatio</span>.",
      "type": "Buff",
      "effectName": "Increases Max HP and CRIT Rate",
      "statusName": "Knowledge"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_DamageReduce[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageResistanceRatio) || RETURN",
                "displayLines": "MDF_DamageResistanceRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageResistanceRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageResistanceRatio"
      ],
      "latentQueue": [
        "HitFlag"
      ],
      "description": "Reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistanceRatio</span>.",
      "type": "Buff",
      "statusName": "Misfortune Avoidance"
    },
    {
      "name": "Modifier Construction",
      "for": "FuXuan_HitDamageSplit[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Is Joint-Attack",
                  "target": "Owner of this Modifier"
                }
              },
              "passed": [
                {
                  "name": "Share DMG Taken",
                  "target": "Caster",
                  "state": "Mask_AliveOrLimbo",
                  "selfSplit": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_SplitPercentage) || SUB || RETURN",
                    "displayLines": "(1 - MDF_SplitPercentage)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_SplitPercentage"
                    ]
                  },
                  "targetSplit": {
                    "operator": "Variables[0] (MDF_SplitPercentage) || RETURN",
                    "displayLines": "MDF_SplitPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_SplitPercentage"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": "Allied Team",
              "variableName": "AliveNum",
              "livingTargets": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AliveNum",
                "compareType": ">",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AliveNum",
                  "value": 4
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (AddSP) || RETURN",
                    "displayLines": "AddSP",
                    "constants": [],
                    "variables": [
                      "AddSP"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SplitPercentage",
        "Skill02_P2_DamageResistance",
        "AddSP"
      ],
      "latentQueue": [
        "GDF_BPSkill_LifeTime"
      ],
      "description": "Distribute to Fu Xuan <span class=\"descriptionNumberColor\">MDF_SplitPercentage</span> of the DMG this unit receives (before this DMG is mitigated by any Shields).",
      "type": "Buff",
      "statusName": "Matrix of Prescience"
    }
  ],
  "references": []
}