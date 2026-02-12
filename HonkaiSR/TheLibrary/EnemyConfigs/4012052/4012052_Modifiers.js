const configAbility = {
  "fileName": "4012052_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1781853909\">Enemy_W4_Mascot_LocalLegend_MuteBreak</a>",
      "modifierFlags": [
        "MuteBreak"
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
                  "True DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage ID",
                    "ID": 426007,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_DamagaData"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": "(MDF_DamagaData * {[SkillP02[0]]})"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Stage ID",
                "ID": 426007,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                    "displayLines": "{[SkillP02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[0]]}"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AISequence"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-71309847\">Enemy_W4_Mascot_LocalLegend_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Mark Entity For Immediate Death"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Mascot_Ability04_LocalLegend_Insert_Part01",
              "priorityTag": "MonsterForceKill",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AISequence"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1597331632\">Enemy_W4_Mascot_LocalLegend_ListenCorrectInteract</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ListenCorrectInteract",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 0
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                          "priorityTag": "MonsterChangePhase",
                          "canHitNonTargets": true,
                          "abortFlags": [
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                          "priorityTag": "MonsterChangePhase",
                          "canHitNonTargets": true,
                          "abortFlags": [
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "ID": 4260026,
                            "compareType": "=",
                            "characterName": "Earthshaker Leo: Solblaze Winged Beast"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 426007,
                            "compareType": "=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
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
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_SuccessDamageRatio) || MUL || RETURN",
                              "displayLines": "(MDF_MaxHP * MDF_SuccessDamageRatio)",
                              "constants": [],
                              "variables": [
                                "MDF_MaxHP",
                                "MDF_SuccessDamageRatio"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "attackType": "Additional DMG"
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (MDF_MaxHP) || RETURN",
                              "displayLines": "MDF_MaxHP",
                              "constants": [],
                              "variables": [
                                "MDF_MaxHP"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "attackType": "Additional DMG"
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
      "stackData": [
        "MDF_SuccessDamageRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__222306094\">Enemy_XP_Minion04_EscapingCharge02</a>",
      "modifierFlags": [
        "MuteHitFly",
        "Endurance",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Charge02"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
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
      "for": "<a class=\"gModGreen\" id=\"mod__205528475\">Enemy_XP_Minion04_EscapingCharge01</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Charge01"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-348410444\">Enemy_W4_Mascot_MuteBreak</a>",
      "modifierFlags": [
        "MuteBreak"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageReduce"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1866632092\">Enemy_W4_Mascot_BlockDamage</a>",
      "modifierFlags": [],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1549112384\">Enemy_W4_Mascot_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Mascot_Ability04_Insert_Part01",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1842024628\">Enemy_W4_Mascot_EnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "AISequence_1",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ForwardReverseFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ForwardReverseFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    1,
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 2
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 3
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Sequence_i",
                  "value": 0.5
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__407991733\">Enemy_W4_Mascot_ListenCorrectInteract</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1102283112\">Enemy_W4_Mascot_EscapingCharge00</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
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
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (InsertFlag) || RETURN",
                        "displayLines": "InsertFlag",
                        "constants": [],
                        "variables": [
                          "InsertFlag"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1102283112\">Enemy_W4_Mascot_EscapingCharge00</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
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
                                    "value1": "ForwardReverseFlag",
                                    "compareType": "=",
                                    "value2": 0,
                                    "contextScope": "TargetEntity"
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "abortFlags": [
                                        "Break"
                                      ],
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "abortFlags": [
                                        "Break"
                                      ],
                                      "allowAbilityTriggers": false
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
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
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
                                    "value1": "ForwardReverseFlag",
                                    "compareType": "=",
                                    "value2": 0,
                                    "contextScope": "TargetEntity"
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "abortFlags": [
                                        "Break"
                                      ],
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_Mascot_Ability01_Insert_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "abortFlags": [
                                        "Break"
                                      ],
                                      "allowAbilityTriggers": false
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
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
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
                                    "value1": "ForwardReverseFlag",
                                    "compareType": "=",
                                    "value2": 0,
                                    "contextScope": "TargetEntity"
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_Mascot_Ability01_Insert_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "abortFlags": [
                                        "Break"
                                      ],
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "abortFlags": [
                                        "Break"
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
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1699413228\">TaskList_W4_Mascot_ChangePose_Sequence_2</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AISequence_2",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "<a class=\"gTempYellow\" id=\"-1649080371\">TaskList_W4_Mascot_ChangePose_Sequence_1</a>"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1682635609\">TaskList_W4_Mascot_ChangePose_Sequence_3</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AISequence_3",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "<a class=\"gTempYellow\" id=\"-1649080371\">TaskList_W4_Mascot_ChangePose_Sequence_1</a>"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1649080371\">TaskList_W4_Mascot_ChangePose_Sequence_1</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_SuccessDamageRatio) || MUL || RETURN",
                          "displayLines": "(MDF_MaxHP * MDF_SuccessDamageRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_MaxHP",
                            "MDF_SuccessDamageRatio"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "attackType": "Additional DMG"
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1649080371\">TaskList_W4_Mascot_ChangePose_Sequence_1</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "AISequence_1",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability01_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
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
                "value1": "AISequence_1",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
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
                "value1": "AISequence_1",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Sequence_i",
              "value": 1
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1699413228\">TaskList_W4_Mascot_ChangePose_Sequence_2</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "AISequence_2",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability01_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
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
                "value1": "AISequence_2",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
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
                "value1": "AISequence_2",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Sequence_i",
              "value": 2
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1682635609\">TaskList_W4_Mascot_ChangePose_Sequence_3</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "AISequence_3",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability01_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
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
                "value1": "AISequence_3",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
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
                "value1": "AISequence_3",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Sequence_i",
              "value": 3
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SuccessDamageRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Ultimate",
              "living": true
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]",
      "modifierFlags": [
        "MuteHitFly",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Charge02"
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
              "modifier": "<a class=\"gModGreen\" id=\"965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"965815896\">Enemy_W4_Mascot_EscapingCharge02_LoopEffect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "\"Bartholos\" presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with \"Basic ATK,\" \"Skill,\" or \"Ultimate.\" Each brainteaser requires the correct type of attack to solve. Upon successfully solving the brainteaser, \"Bartholos\" will immediately change the brainteaser and take Physical DMG based on a percentage of its Max HP.",
      "type": "Other",
      "statusName": "Brainteaser"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Skill",
              "living": true
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]",
      "modifierFlags": [
        "MuteHitFly",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Charge01"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1417889137\">Enemy_W4_Mascot_EscapingCharge01_LoopEffect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "\"Bartholos\" presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with \"Basic ATK,\" \"Skill,\" or \"Ultimate.\" Each brainteaser requires the correct type of attack to solve. Upon successfully solving the brainteaser, \"Bartholos\" will immediately change the brainteaser and take Physical DMG based on a percentage of its Max HP.",
      "type": "Other",
      "statusName": "Brainteaser"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Basic ATK",
              "living": true
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1102283112\">Enemy_W4_Mascot_EscapingCharge00</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]",
      "modifierFlags": [
        "MuteHitFly",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Charge00"
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
              "modifier": "<a class=\"gModGreen\" id=\"-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-936810546\">Enemy_W4_Mascot_EscapingCharge00_LoopEffect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "\"Bartholos\" presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with \"Basic ATK,\" \"Skill,\" or \"Ultimate.\" Each brainteaser requires the correct type of attack to solve. Upon successfully solving the brainteaser, \"Bartholos\" will immediately change the brainteaser and take Physical DMG based on a percentage of its Max HP.",
      "type": "Other",
      "statusName": "Brainteaser"
    }
  ],
  "references": []
}