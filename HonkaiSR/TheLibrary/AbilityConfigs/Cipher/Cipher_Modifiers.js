const configAbility = {
  "fileName": "Cipher_Modifiers",
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
      "for": "Cipher_SpecialMark01",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cipher_SpecialMark01"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Action Owner}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_SpecialMark02",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
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
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Action Owner}}"
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
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
                        "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Skill",
                            "Ultimate"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill",
                            "Ultimate"
                          ]
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
                        "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Action Owner}}"
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
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
                        "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Skill",
                            "Ultimate"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill",
                            "Ultimate"
                          ]
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
                        "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
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
      "for": "Cipher_Ability03_Force_Preshow",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "toughnessForcedReductionPreview": 1,
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_Ability03_Force",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan_Insert_Bonuser",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Cipher_InsertRetargetSelf"
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
              "functionName": "Cipher_InsertRetargetSelf"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Cipher_InsertRetargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Cipher_InsertRetargetSelf"
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
                  "functionName": "Cipher_InsertRetargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Cipher_InsertRetargetSelf",
          "parse": [
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
                  "abilityName": "Cipher_PassiveAbility01_Insert_Bonuser",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan_Insert_CD[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Passive_Trigger_Count",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Talent's Follow-Up ATK cannot yet be triggered.",
      "type": "Other",
      "statusName": "The Hospitable Dolosian"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB2_CD",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "STAT_AITargetHigherPriority",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cipher_SpecialMark01"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cipher_SpecialMark01"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cipher_SpecialMark01"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Cipher_Insert_Listen",
                    "invertCondition": true
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Cipher_BpKuoSan_Insert_Hit"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSourceCreator]]"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character",
                        "livingState": "Mask_NotDestroyed"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSourceCreator]]"
                        },
                        "type": "Character",
                        "livingState": "Mask_NotDestroyed"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSourceCreator]]"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "True DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TMP_Damage",
                  "value": "Result_FinalDamageBase",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TMP_OverflowDamage",
                  "value": "Result_OverflowHPDamage",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_Damage",
                  "value": {
                    "operator": "Variables[0] (_TMP_Damage) || Variables[1] (_TMP_OverflowDamage) || SUB || RETURN",
                    "displayLines": "(_TMP_Damage - _TMP_OverflowDamage)",
                    "constants": [],
                    "variables": [
                      "_TMP_Damage",
                      "_TMP_OverflowDamage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_Rate",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Damage Tags",
                        "damageTag": [
                          "Cipher's Insert"
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
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_Rate",
                      "value": {
                        "operator": "Variables[0] (_TMP_Rate) || Variables[1] (0.16) || ADD || RETURN",
                        "displayLines": "(_TMP_Rate + 0.16)",
                        "constants": [],
                        "variables": [
                          "_TMP_Rate",
                          0.16
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TMP_Damage",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillP01_CurrentDamge",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (_TMP_Damage) || SUB || RETURN",
                        "displayLines": "(0 - _TMP_Damage)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_TMP_Damage"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillP01_FinalDamage",
                      "value": {
                        "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[3] (0.12) || Variables[4] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                        "displayLines": "(SkillP01_FinalDamage + (((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                        "constants": [],
                        "variables": [
                          "SkillP01_FinalDamage",
                          "SkillP01_CurrentDamge",
                          "_TMP_Rate",
                          0.12,
                          "Rank01_FinalRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Trace Activated",
                            "conditionList": "Empyrean Strides"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "PointB1_Speed",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "PointB1_Speed",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (OBJECT_[170]) || RETURN",
                              "displayLines": "OBJECT_[170]",
                              "constants": [],
                              "variables": [
                                "OBJECT_[170]"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "PointB1_Ratio",
                              "value": {
                                "operator": "Variables[0] (PointB1_Add_2) || RETURN",
                                "displayLines": "PointB1_Add_2",
                                "constants": [],
                                "variables": [
                                  "PointB1_Add_2"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "PointB1_Speed",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (OBJECT_[140]) || RETURN",
                                  "displayLines": "OBJECT_[140]",
                                  "constants": [],
                                  "variables": [
                                    "OBJECT_[140]"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB1_Ratio",
                                  "value": {
                                    "operator": "Variables[0] (PointB1_Add_1) || RETURN",
                                    "displayLines": "PointB1_Add_1",
                                    "constants": [],
                                    "variables": [
                                      "PointB1_Add_1"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB1_Ratio",
                                  "value": 0
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (PointB1_Ratio) || MUL || Variables[3] (_TMP_Rate) || MUL || Variables[4] (0.12) || DIV || Variables[4] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                            "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * PointB1_Ratio) * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                            "constants": [],
                            "variables": [
                              "SkillP01_FinalDamage",
                              "SkillP01_CurrentDamge",
                              "PointB1_Ratio",
                              "_TMP_Rate",
                              0.12,
                              "Rank01_FinalRatio"
                            ]
                          }
                        }
                      ]
                    },
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
                            }
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "Technique"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (2) || MUL || Variables[3] (_TMP_Rate) || MUL || Variables[4] (0.12) || DIV || Variables[4] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                            "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * 2) * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                            "constants": [],
                            "variables": [
                              "SkillP01_FinalDamage",
                              "SkillP01_CurrentDamge",
                              2,
                              "_TMP_Rate",
                              0.12,
                              "Rank01_FinalRatio"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (1000) || DIV || RETURN",
                    "displayLines": "(SkillP01_FinalDamage / 1000)",
                    "constants": [
                      1000
                    ],
                    "variables": [
                      "SkillP01_FinalDamage"
                    ]
                  },
                  "maximum": {
                    "operator": "Constants[0] (99999) || RETURN",
                    "displayLines": "99999",
                    "constants": [
                      99999
                    ],
                    "variables": []
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Left Battle [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "CurrentHP%",
                      "compareType": ">",
                      "value2": 0
                    }
                  },
                  "Shuffle Targets",
                  {
                    "name": "Sort by Stat",
                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                    "sortByHighest": true
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]",
                  "valuePerStack": {}
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (Rank04_DamagePercentage) || RETURN",
                      "displayLines": "Rank04_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Rank04_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Unselectable Adjustment [Owner]: Start",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "CurrentHP%",
                      "compareType": ">",
                      "value2": 0
                    }
                  },
                  "Shuffle Targets",
                  {
                    "name": "Sort by Stat",
                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                    "sortByHighest": true
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]",
                  "valuePerStack": {}
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "While the \"Patron\" state is active, a tally of the DMG dealt by ally targets will be kept by Cipher. And Cipher's Ultimate will deal True DMG based on this tally.",
      "type": "Debuff",
      "effectName": "Become a Patron",
      "statusName": "Patron"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan_Adj",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                      "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                    },
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                          }
                        }
                      ]
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "300 Rogues"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
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
                      "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                    },
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                          }
                        }
                      ]
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "300 Rogues"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan_Insert_Hit_PointB1"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan_Insert_Hit",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB1_Debuff",
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
                  "Skill"
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BP_Bonus[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
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
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Hey, Jackpot for the Taking"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_BP_Debuff[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_Fatigue"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
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
      "description": "DMG dealt to allies decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Weaken",
      "statusName": "Hey, Jackpot for the Taking"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB3_Debuff[<span class=\"descriptionNumberColor\">Sleight of Sky</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Sleight of Sky"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB1_InsertBonus",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_PropertyValue"
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
      "name": "Modifier Construction",
      "for": "Cipher_Eidolon6_Debuff",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": "(0 - MDF_PropertyValue)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_Eidolon1_Bonus[<span class=\"descriptionNumberColor\">Read the Room, Seek the Glee</span>]",
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
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Read the Room, Seek the Glee"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_Eidolon2_Debuff[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "In the Fray, Nab On a Spree"
    }
  ],
  "references": []
}