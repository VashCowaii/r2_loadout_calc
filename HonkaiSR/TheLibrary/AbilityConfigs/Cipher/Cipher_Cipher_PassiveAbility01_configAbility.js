const configAbility = {
  "fileName": "Cipher_Cipher_PassiveAbility01",
  "childAbilityList": [
    "Cipher_Cipher_PassiveAbility01",
    "Cipher_Cipher_PassiveAbility01_Insert_Bonuser",
    "Cipher_Cipher_PassiveAbility01_Insert_Part01",
    "Cipher_Cipher_PassiveAbility01_Insert_Part02",
    "Cipher_Cipher_PassiveAbility01_Insert_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Passive_Trigger_Count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Passive_Max_Count",
      "value": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      }
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
          "modifier": "Cipher_Eidolon2"
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
          "name": "Define Custom Variable",
          "variableName": "Rank01_FinalRatio",
          "value": {
            "operator": "Variables[0] (1.5) || RETURN",
            "displayLines": "1.5",
            "constants": [],
            "variables": [
              1.5
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_FinalRatio",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank04_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cipher_Eidolon6",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (3.5) || RETURN",
              "displayLines": "3.5",
              "constants": [],
              "variables": [
                3.5
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
        "target": "{{Caster}}"
      },
      "modifier": "Cipher_Mark_Listen"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Insert_Count",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Cipher_BpKuoSan_Self[<span class=\"descriptionNumberColor\">Patron</span>]"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Snapshot Stat Source}}"
      },
      "variableName": "MDF_CasterAttack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_FinalDamage",
      "value": {
        "operator": "Constants[0] (0) || RETURN",
        "displayLines": "0",
        "constants": [
          0
        ],
        "variables": []
      }
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
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Empyrean Strides"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "PointB1_Add_2",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "PointB1_Add_1",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cipher_PointB1_ListenSpeedChange"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "300 Rogues"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cipher_PointB2_ListenNoKuosan"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sleight of Sky"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cipher_PointB3_Aura"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Cipher_Insert_Listen"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Cipher_BpKuoSan_Self[<span class=\"descriptionNumberColor\">Patron</span>]",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
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
                      "target": "{{Enemy Team All}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
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
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
              },
              "passed": [
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
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
              },
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
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
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
              },
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
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
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "<span class=\"descriptionNumberColor\">SkillP01_FinalDamage</span> DMG has been tallied.",
      "type": "Other",
      "statusName": "Patron"
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB2_ListenNoKuosan",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Anyone]: Any",
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
                    "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]",
                    "invertCondition": true
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "type": "Character",
                        "livingState": "Mask_NotDestroyed"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "type": "Character",
                        "livingState": "Mask_NotDestroyed"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
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
                      "target": "{{Parameter Target 2}}"
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
                    "target": "{{Parameter Target 2}}"
                  },
                  "variableName": "_TMP_Damage",
                  "value": "Result_FinalDamageBase"
                },
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target 2}}"
                  },
                  "variableName": "_TMP_OverflowDamage",
                  "value": "Result_OverflowHPDamage"
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
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
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
                          "target": "{{Parameter Target 2}}"
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
                            "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[4] (PointB1_Ratio) || MUL || Variables[3] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                            "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * PointB1_Ratio) * (0.12 * Rank01_FinalRatio)))",
                            "constants": [],
                            "variables": [
                              "SkillP01_FinalDamage",
                              "SkillP01_CurrentDamge",
                              "_TMP_Rate",
                              0.12,
                              "PointB1_Ratio",
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
                              "target": "{{Parameter Target 2}}"
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
                              "target": "{{Parameter Target 2}}"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[4] (2) || MUL || Variables[3] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                            "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * 2) * (0.12 * Rank01_FinalRatio)))",
                            "constants": [],
                            "variables": [
                              "SkillP01_FinalDamage",
                              "SkillP01_CurrentDamge",
                              "_TMP_Rate",
                              0.12,
                              2,
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_Insert_Listen",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Insert_Flag",
              "value": 0
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "Cipher_BpKuoSan_Insert_CD[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]",
                    "invertCondition": true
                  },
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Cipher_BpKuoSan_Insert_Hit"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Insert_Exec",
                        "compareType": "=",
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
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Cipher_BpKuoSan_Insert_Hit"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_Eidolon6",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Damage Tags",
                "damageTag": [
                  "Cipher's Insert"
                ]
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB3_Aura",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Cipher's Insert"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "1"
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
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Cipher_PointB3_Debuff[<span class=\"descriptionNumberColor\">Sleight of Sky</span>]",
          "haloStatus": true,
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
      "name": "Modifier Construction",
      "for": "Cipher_Mark_Listen",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Cipher_SpecialMark02",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_PointB1_ListenSpeedChange",
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
              "variableName": "_CUR_SPEED",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CUR_SPEED",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Cipher_PointB1_ListenSpeedChange_Bonus",
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
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CUR_SPEED",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Cipher_PointB1_ListenSpeedChange_Bonus",
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
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Cipher_PointB1_ListenSpeedChange_Bonus"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -99999,
              "maxValue": 99999,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CUR_SPEED",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CUR_SPEED",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Cipher_PointB1_ListenSpeedChange_Bonus",
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
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CUR_SPEED",
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Cipher_PointB1_ListenSpeedChange_Bonus",
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
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Cipher_PointB1_ListenSpeedChange_Bonus"
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
      "for": "Cipher_PointB1_ListenSpeedChange_Bonus",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
      "latentQueue": [
        "_CUR_SPEED"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cipher_Eidolon2",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cipher_Eidolon2_Debuff[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (1.2) || RETURN",
                    "displayLines": "1.2",
                    "constants": [],
                    "variables": [
                      1.2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Cipher_Eidolon2_Debuff[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_First",
                      "value": 0
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Cipher_Eidolon2_Debuff[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
                        "justAddedOrActive": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_First",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "0.3"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_First",
                      "value": 1
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
    }
  ]
}