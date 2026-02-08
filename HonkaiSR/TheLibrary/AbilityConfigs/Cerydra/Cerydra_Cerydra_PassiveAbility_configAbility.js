const configAbility = {
  "fileName": "Cerydra_Cerydra_PassiveAbility",
  "childAbilityList": [
    "Cerydra_Cerydra_PassiveAbility"
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
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (DV_CurrentPoint) || RETURN",
        "displayLines": "DV_CurrentPoint",
        "constants": [],
        "variables": [
          "DV_CurrentPoint"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (6) || RETURN",
        "displayLines": "6",
        "constants": [],
        "variables": [
          6
        ]
      },
      "assignState": "True",
      "priorState": "Disable",
      "bar#": 2
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2061740004\">Cerydra_PassiveAbility</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Veni"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1113467681\">Cerydra_PointB1</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Vidi"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"35466247\">Cerydra_PointB2_Self</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
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
      "modifier": "<a class=\"gModGreen\" id=\"1118409627\">Cerydra_BP_PreShow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2108963231\">Cerydra_BP_PreShow_End</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_CurrentPoint",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                      "displayLines": "(6 - 1)",
                      "constants": [],
                      "variables": [
                        6,
                        1
                      ]
                    }
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill",
                    "activeSkill": true
                  }
                ]
              }
            },
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
              }
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
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
                    },
                    "invertCondition": true
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
                        "value1": "DV_Rank02_Effcet",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Vidi",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                          "displayLines": "(6 - 1)",
                          "constants": [],
                          "variables": [
                            6,
                            1
                          ]
                        }
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                              "displayLines": "(6 - 1)",
                              "constants": [],
                              "variables": [
                                6,
                                1
                              ]
                            }
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
                        "value1": "DV_CurrentPoint",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                          "displayLines": "(6 - 1)",
                          "constants": [],
                          "variables": [
                            6,
                            1
                          ]
                        }
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                              "displayLines": "(6 - 1)",
                              "constants": [],
                              "variables": [
                                6,
                                1
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK",
                    "activeSkill": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                          "displayLines": "(6 - 1)",
                          "constants": [],
                          "variables": [
                            6,
                            1
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "activeSkill": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_Rank02_Effcet",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Trace Activated",
                            "conditionList": "Vidi",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (6) || Variables[1] (1) || SUB || Variables[2] (2) || SUB || RETURN",
                              "displayLines": "((6 - 1) - 2)",
                              "constants": [],
                              "variables": [
                                6,
                                1,
                                2
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
                            "value1": "DV_CurrentPoint",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (6) || Variables[1] (2) || SUB || RETURN",
                              "displayLines": "(6 - 2)",
                              "constants": [],
                              "variables": [
                                6,
                                2
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1118409627\">Cerydra_BP_PreShow</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2108963231\">Cerydra_BP_PreShow_End</a>"
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2108963231\">Cerydra_BP_PreShow_End</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill",
                    "activeSkill": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "team": "Player Team"
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
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                              "displayLines": "(6 - 1)",
                              "constants": [],
                              "variables": [
                                6,
                                1
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
                            "value1": "DV_CurrentPoint",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (6) || Variables[1] (1) || SUB || Variables[2] (1) || SUB || RETURN",
                              "displayLines": "((6 - 1) - 1)",
                              "constants": [],
                              "variables": [
                                6,
                                1,
                                1
                              ]
                            }
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
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "#CL_Cerydra_InBP",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_Isgolden",
                          "value": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_needtochange",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_Isgolden",
                          "value": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_needtochange",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_Cerydra_BPReady_Queen",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "#CL_Cerydra_InBP",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "#CL_Cerydra_BPReady_Queen",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_Isgolden",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_needtochange",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_Cerydra_BPReady_Queen",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "#CL_Cerydra_InBP",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "#CL_Cerydra_BPReady_Queen",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_Isgolden",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_needtochange",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "#CL_Cerydra_InBP",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "#CL_Cerydra_BPReady_Queen",
                                    "compareType": "=",
                                    "value2": 0
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_Isgolden",
                                  "value": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "#CL_Cerydra_Eff_chess_Ready_loop_needtochange",
                                  "value": 0
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
                  "name": "Define Custom Variable",
                  "variableName": "#CL_Cerydra_InBP",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_Cerydra_InBP",
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "team": "Player Team",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_Cerydra_BPReady_Queen",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_Cerydra_Eff_chess_Ready_loop",
              "value": {
                "operator": "Variables[0] (#CL_Cerydra_Eff_chess_Ready_loop_Isgolden) || Constants[0] (10) || MUL || Variables[1] (#CL_Cerydra_Eff_chess_Ready_loop_needtochange) || ADD || RETURN",
                "displayLines": "((#CL_Cerydra_Eff_chess_Ready_loop_Isgolden * 10) + #CL_Cerydra_Eff_chess_Ready_loop_needtochange)",
                "constants": [
                  10
                ],
                "variables": [
                  "#CL_Cerydra_Eff_chess_Ready_loop_Isgolden",
                  "#CL_Cerydra_Eff_chess_Ready_loop_needtochange"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1635182298\">Cerydra_BonusTargetHandler</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "#CL_HaveBuff"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2061740004\">Cerydra_PassiveAbility</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_Cerydra_InBP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_Cerydra_BPReady_Queen",
                  "value": 0
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
                "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (DV_CurrentPoint) || RETURN",
                    "displayLines": "DV_CurrentPoint",
                    "constants": [],
                    "variables": [
                      "DV_CurrentPoint"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (6) || RETURN",
                    "displayLines": "6",
                    "constants": [],
                    "variables": [
                      6
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Disable",
                  "bar#": 2
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "DV_CurrentPoint",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DV_CurrentPoint) || RETURN",
                            "displayLines": "DV_CurrentPoint",
                            "constants": [],
                            "variables": [
                              "DV_CurrentPoint"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (6) || RETURN",
                            "displayLines": "6",
                            "constants": [],
                            "variables": [
                              6
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 2
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "DV_DelayReachPromotionRank01_Flag",
                                "compareType": "=",
                                "value2": 1,
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Cerydra's Promotion Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
                                "invertCondition": true
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
                              "conditionActive": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "DV_CurrentPoint",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (6) || RETURN",
                                      "displayLines": "6",
                                      "constants": [],
                                      "variables": [
                                        6
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Cerydra's Promotion Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "abilityName": "Cerydra_Ability02_InsertEidolon1",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Cerydra's Promotion Target}}"
                              },
                              "priorityTag": "AvatarBuffOthers",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "customFlags": [
                                "HideEffectMarkAutoHideInSkill"
                              ],
                              "allowAbilityTriggers": true
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DV_CurrentPoint) || RETURN",
                            "displayLines": "DV_CurrentPoint",
                            "constants": [],
                            "variables": [
                              "DV_CurrentPoint"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (6) || RETURN",
                            "displayLines": "6",
                            "constants": [],
                            "variables": [
                              6
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 2
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_CurrentPoint) || RETURN",
                        "displayLines": "DV_CurrentPoint",
                        "constants": [],
                        "variables": [
                          "DV_CurrentPoint"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (6) || RETURN",
                        "displayLines": "6",
                        "constants": [],
                        "variables": [
                          6
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Disable",
                      "bar#": 2
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
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1635182298\">Cerydra_BonusTargetHandler</a>",
          "haloStatus": true
        }
      ]
    }
  ]
}