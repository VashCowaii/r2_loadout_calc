const compositeAbilityObject = {
  "fullCharacterName": "Cerydra",
  "trimCharacterName": "Cerydra",
  "abilityList": [
    "Cerydra_Cerydra_TechniqueInLevel",
    "Cerydra_Cerydra_Eidolon6",
    "Cerydra_Cerydra_Ability02_InsertEidolon1",
    "Cerydra_Cerydra_PassiveAbility",
    "Cerydra_Cerydra_Ability03_Part02",
    "Cerydra_Cerydra_Ability03_Part01",
    "Cerydra_Cerydra_Ability03_EnterReady",
    "Cerydra_Cerydra_Ability02_Others_Part02",
    "Cerydra_Cerydra_Ability02_Part01",
    "Cerydra_Cerydra_Ability01_Part02",
    "Cerydra_Cerydra_Ability01_Part01",
    "Cerydra_Modifiers",
    "Cerydra_Functions"
  ],
  "abilityObject": {
    "Cerydra_Cerydra_TechniqueInLevel": {
      "fileName": "Cerydra_Cerydra_TechniqueInLevel",
      "childAbilityList": [
        "Cerydra_Cerydra_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1690765176\">Cerydra_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1690765176\">Cerydra_Maze_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Multiply(by 0 if undefined)"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill02",
                  "forceAction": true,
                  "castTarget": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-636149171\">StageAbility_MazeStandard_EnterBattle_MarkTeamLeader</a>"
                        }
                      }
                    ]
                  },
                  "afterInjection": [],
                  "runsAfterBattleEnd": true
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Cerydra_Cerydra_Eidolon6": {
      "fileName": "Cerydra_Cerydra_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"1076811702\">Cerydra_Eidolon6_AddDamageCarry</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1076811702\">Cerydra_Eidolon6_AddDamageCarry</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Cerydra_Cerydra_Ability02_InsertEidolon1": {
      "fileName": "Cerydra_Cerydra_Ability02_InsertEidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Ave Imperator"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1336664335\">Cerydra_Template_ReachPromotionEidolon1</a>"
        }
      ],
      "references": []
    },
    "Cerydra_Cerydra_PassiveAbility": {
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
    },
    "Cerydra_Cerydra_Ability03_Part02": {
      "fileName": "Cerydra_Cerydra_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "DV_PursuedDamage_LimitCount",
          "value": {
            "operator": "Variables[0] (20) || RETURN",
            "displayLines": "20",
            "constants": [],
            "variables": [
              20
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>"
          },
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
                  "valuePerStack": {
                    "DV_PointAdded_Get": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
                      "valuePerStack": {
                        "DV_PointAdded_Get": {
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
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
          "variables": {
            "DV_AddPoint": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.4) || Variables[1] (2.4) || ADD || RETURN",
              "displayLines": "(2.4 + 2.4)",
              "constants": [],
              "variables": [
                2.4,
                2.4
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "instanceTag": "Cerydra_Skill03_Attack",
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cerydra_Cerydra_Ability03_Part01": {
      "fileName": "Cerydra_Cerydra_Ability03_Part01",
      "childAbilityList": [
        "Cerydra_Cerydra_Ability03_Camera",
        "Cerydra_Cerydra_Ability03_EnterReady",
        "Cerydra_Cerydra_Ability03_Part01",
        "Cerydra_Cerydra_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "Cerydra_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Cerydra Ult Target List}}"
            },
            "compareType": ">=",
            "value2": 2,
            "isClientOnly": true
          }
        }
      ],
      "references": []
    },
    "Cerydra_Cerydra_Ability03_EnterReady": {
      "fileName": "Cerydra_Cerydra_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Cerydra_Cerydra_Ability02_Others_Part02": {
      "fileName": "Cerydra_Cerydra_Ability02_Others_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Vici"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} | {{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1079912443\">Cerydra_PointB3</a>[<span class=\"descriptionNumberColor\">Vici</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (20) || RETURN",
                  "displayLines": "20",
                  "constants": [],
                  "variables": [
                    20
                  ]
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
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "isFixed": "(Fixed)",
              "tag": "ActiveSkillAdd"
            }
          ]
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
            "invertCondition": true,
            "justAddedOrActive": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
              "valuePerStack": {
                "DV_PointAdded_Get": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
              "variables": {
                "DV_AddPoint": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                  },
                  {
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
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_DelayReachPromotionRank01_Flag",
                  "value": 1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
                  "variables": {
                    "DV_AddPoint": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1336664335\">Cerydra_Template_ReachPromotionEidolon1</a>"
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
                  "variables": {
                    "DV_AddPoint": {
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1690765176\">Cerydra_Maze_Modifier</a>"
          },
          "passed": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1690765176\">Cerydra_Maze_Modifier</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_DelayReachPromotionRank01_Flag",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cerydra_Cerydra_Ability02_Part01": {
      "fileName": "Cerydra_Cerydra_Ability02_Part01",
      "childAbilityList": [
        "Cerydra_Cerydra_Ability02_Part01",
        "Cerydra_Cerydra_Ability02_Camera_TimeLine",
        "Cerydra_Cerydra_Ability02_1_Camera_TimeLine",
        "Cerydra_Cerydra_Ability02_2_Camera_TimeLine",
        "Cerydra_Cerydra_Ability02_Others_Part02",
        "Cerydra_Cerydra_Ability02_InsertEidolon1",
        "Cerydra_Cerydra_Ability02_Insert_Camera",
        "Cerydra_Cerydra_Ability02_3_Camera_TimeLine"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
            "invertCondition": true,
            "justAddedOrActive": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              }
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Cerydra_Ability02_Others_Part02"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
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
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Cerydra_Ability02_Others_Part02"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    }
                  ],
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "=",
                            "value2": 4
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_CurrentPoint",
                            "compareType": "=",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Cerydra_Ability02_Others_Part02"
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Cerydra_Ability02_Others_Part02"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Cerydra_Ability02_Others_Part02"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Cerydra_Cerydra_Ability01_Part02": {
      "fileName": "Cerydra_Cerydra_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cerydra_Cerydra_Ability01_Part01": {
      "fileName": "Cerydra_Cerydra_Ability01_Part01",
      "childAbilityList": [
        "Cerydra_Cerydra_Ability01_Camera",
        "Cerydra_Cerydra_Ability01_Part01",
        "Cerydra_Cerydra_Ability01_Part02"
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
          "ability": "Cerydra_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Cerydra_Modifiers": {
      "fileName": "Cerydra_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__358533823\">Cerydra_Ability02_ListenSelf</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1980210861\">Cerydra_Template_PromotionEidolon0</a>"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1980210861\">Cerydra_Template_PromotionEidolon0</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1980210861\">Cerydra_Template_PromotionEidolon0</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1980210861\">Cerydra_Template_PromotionEidolon0</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "PromotionRank_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "PromotionRank_AttackConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "PromotionRank_CleanAttack",
                  "value": {
                    "operator": "Variables[0] (PromotionRank_BaseAttack) || Variables[1] (PromotionRank_AttackConvert) || SUB || RETURN",
                    "displayLines": "(PromotionRank_BaseAttack - PromotionRank_AttackConvert)",
                    "constants": [],
                    "variables": [
                      "PromotionRank_BaseAttack",
                      "PromotionRank_AttackConvert"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "PromotionRank_CleanAttack",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PromotionRank_CleanAttack",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "PromotionRank_AttackAddedValue",
                  "value": {
                    "operator": "Variables[0] (PromotionRank_CleanAttack) || Variables[1] (0.24) || MUL || RETURN",
                    "displayLines": "(PromotionRank_CleanAttack * 0.24)",
                    "constants": [],
                    "variables": [
                      "PromotionRank_CleanAttack",
                      0.24
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Cerydra's Promotion Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Cerydra's Promotion Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (PromotionRank_AttackAddedValue) || RETURN",
                          "displayLines": "PromotionRank_AttackAddedValue",
                          "constants": [],
                          "variables": [
                            "PromotionRank_AttackAddedValue"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Cerydra's Promotion Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (PromotionRank_AttackAddedValue) || RETURN",
                          "displayLines": "PromotionRank_AttackAddedValue",
                          "constants": [],
                          "variables": [
                            "PromotionRank_AttackAddedValue"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"358533823\">Cerydra_Ability02_ListenSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "variableName": "_RemoveFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1107046497\">Cerydra_Eidolon1</a>[<span class=\"descriptionNumberColor\">Seize the Crowns of All</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "#CL_HaveBuff",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "0.72"
                        }
                      ]
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                          "value": "0.1"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1107046497\">Cerydra_Eidolon1</a>[<span class=\"descriptionNumberColor\">Seize the Crowns of All</span>]"
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
                  "variableName": "#CL_HaveBuff",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_RemoveFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Modifier Was",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "DV_CurrentPoint",
                      "value": {
                        "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (6) || SUB || Variables[2] (_WindfuryCostFixValue) || ADD || RETURN",
                        "displayLines": "((DV_CurrentPoint - 6) + _WindfuryCostFixValue)",
                        "constants": [],
                        "variables": [
                          "DV_CurrentPoint",
                          6,
                          "_WindfuryCostFixValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "Rank01toRank00",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Modifier Was",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                      "execute": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextCaster",
                          "valueType": "Layer",
                          "variableName": "InsertActionCount",
                          "modifierName": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                          "multiplier": 1
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
          "latentQueue": [],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, CRIT DMG for the Skill DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>, and All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>. After using an attack, Cerydra additionally deals 1 instance of Additional DMG, with <span class=\"descriptionNumberColor\">DV_PursuedDamage_LimitCount</span> trigger count(s) remaining. Triggers Coup de Main when using Skill on enemy targets.",
          "type": "Buff",
          "effectName": "Peerage",
          "statusName": "Peerage"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"358533823\">Cerydra_Ability02_ListenSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "#CL_HaveBuff",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertActionCount",
                  "value": -99
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "#CL_HaveBuff"
          ],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, Cerydra additionally deals 1 instance of Additional DMG, with <span class=\"descriptionNumberColor\">DV_PursuedDamage_LimitCount</span> trigger count(s) remaining.",
          "type": "Buff",
          "effectName": "Military Merit",
          "statusName": "Military Merit"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__65541591\">Cerydra_Ability02_UITop</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_CurrentPoint",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Rank01toRank00",
                        "compareType": "<=",
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
                            "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
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
                                  "operator": "Variables[0] (6) || RETURN",
                                  "displayLines": "6",
                                  "constants": [],
                                  "variables": [
                                    6
                                  ]
                                }
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
                            "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Rank01toRank00",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "_RemoveFlag",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 99,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank01toRank00",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1716749059\">Cerydra_Ability02_Target</a>",
          "stackType": "RetainGlobalLatest",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "DV_CurrentPoint",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Windfury_Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Windfury_Flag_Sum",
                  "value": 0
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                  "execute": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                      "variable": "Windfury_Flag",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_Windfury_Flag",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Windfury_Flag_Sum",
                      "value": {
                        "operator": "Variables[0] (MDF_Windfury_Flag_Sum) || Variables[1] (MDF_Windfury_Flag) || ADD || RETURN",
                        "displayLines": "(MDF_Windfury_Flag_Sum + MDF_Windfury_Flag)",
                        "constants": [],
                        "variables": [
                          "MDF_Windfury_Flag_Sum",
                          "MDF_Windfury_Flag"
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
                    "value1": "MDF_Windfury_Flag_Sum",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
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
                              "target": "{{Caster}}"
                            },
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1940085870\">Cerydra_Template_SelfHandle</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variables": {
                            "DV_AddPoint": {
                              "operator": "Variables[0] (DV_PointAdded_Get) || RETURN",
                              "displayLines": "DV_PointAdded_Get",
                              "constants": [],
                              "variables": [
                                "DV_PointAdded_Get"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
                          "variables": {
                            "DV_AddPoint": {
                              "operator": "Variables[0] (DV_PointAdded_Get) || RETURN",
                              "displayLines": "DV_PointAdded_Get",
                              "constants": [],
                              "variables": [
                                "DV_PointAdded_Get"
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
            "DV_PointAdded_Get"
          ],
          "latentQueue": [
            "DV_DelayReachPromotionRank01_Flag"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"358533823\">Cerydra_Ability02_ListenSelf</a>",
              "includeBattleEvent": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1063134824\">Cerydra_PointB2</a>[<span class=\"descriptionNumberColor\">Vidi</span>]",
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
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1552806020\">Cerydra_PointB3_RecoverEnergy</a>",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Vici",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"65541591\">Cerydra_Ability02_UITop</a>"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1107046497\">Cerydra_Eidolon1</a>[<span class=\"descriptionNumberColor\">Seize the Crowns of All</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.16) || RETURN",
                  "displayLines": "0.16",
                  "constants": [],
                  "variables": [
                    0.16
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1571294173\">Cerydra_Ability02_Eidolon2_DamageAddedBonus</a>[<span class=\"descriptionNumberColor\">Forge the Dreams of Many</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
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
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"809988888\">Cerydra_Eidolon2_DamageAddedBonus_Self</a>[<span class=\"descriptionNumberColor\">Forge the Dreams of Many</span>]",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
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
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "includeBattleEvent": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1.6) || RETURN",
                  "displayLines": "1.6",
                  "constants": [],
                  "variables": [
                    1.6
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1787273880\">Cerydra_Pursued</a>"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2146072212\">Cerydra_Ability02_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">A Journey Set Starward</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1564398907\">Cerydra_Eidolon6_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">A Journey Set Starward</span>]",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 6,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
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
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "includeBattleEvent": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__809988888\">Cerydra_Eidolon2_DamageAddedBonus_Self</a>[<span class=\"descriptionNumberColor\">Forge the Dreams of Many</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Forge the Dreams of Many"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1571294173\">Cerydra_Ability02_Eidolon2_DamageAddedBonus</a>[<span class=\"descriptionNumberColor\">Forge the Dreams of Many</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Forge the Dreams of Many"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1107046497\">Cerydra_Eidolon1</a>[<span class=\"descriptionNumberColor\">Seize the Crowns of All</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-MDF_PropertyValue"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Skill"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "-MDF_PropertyValue2"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of enemy targets' DEF. When dealing Skill DMG, additionally ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> of targets' DEF."
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the enemy target's DEF.",
          "type": "Buff",
          "effectName": "Seize the Crowns of All",
          "statusName": "Seize the Crowns of All"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1564398907\">Cerydra_Eidolon6_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">A Journey Set Starward</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          "stackData": [],
          "latentQueue": [
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "A Journey Set Starward"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2146072212\">Cerydra_Ability02_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">A Journey Set Starward</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_AllDamageTypePenetrate",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_AllDamageTypePenetrate) || RETURN",
                    "displayLines": "DV_AllDamageTypePenetrate",
                    "constants": [],
                    "variables": [
                      "DV_AllDamageTypePenetrate"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ],
          "description": "Increases All-Type RES PEN by <span class=\"descriptionNumberColor\">#SkillRank_Rank06_P1_AllDamageTypePenetrate</span>.",
          "type": "Buff",
          "effectName": "A Journey Set Starward",
          "statusName": "A Journey Set Starward"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1787273880\">Cerydra_Pursued</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_PursuedDamage_LimitCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (0.6) || Variables[1] (3) || ADD || RETURN",
                                  "displayLines": "(0.6 + 3)",
                                  "constants": [],
                                  "variables": [
                                    0.6,
                                    3
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Cerydra_Rank06_PursuedDamage",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "scope": "ContextCaster",
                              "variableName": "DV_PursuedDamage_LimitCount",
                              "value": {
                                "operator": "Variables[0] (DV_PursuedDamage_LimitCount) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(DV_PursuedDamage_LimitCount - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "DV_PursuedDamage_LimitCount"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (0.6) || RETURN",
                                  "displayLines": "0.6",
                                  "constants": [],
                                  "variables": [
                                    0.6
                                  ]
                                },
                                "Toughness": null,
                                "instanceTag": "Cerydra_Rank06_PursuedDamage",
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "scope": "ContextCaster",
                              "variableName": "DV_PursuedDamage_LimitCount",
                              "value": {
                                "operator": "Variables[0] (DV_PursuedDamage_LimitCount) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(DV_PursuedDamage_LimitCount - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "DV_PursuedDamage_LimitCount"
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
          ],
          "stackData": [],
          "latentQueue": [
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1552806020\">Cerydra_PointB3_RecoverEnergy</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Cerydra's Promotion Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          }
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
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1079912443\">Cerydra_PointB3</a>[<span class=\"descriptionNumberColor\">Vici</span>]",
          "stackType": "Refresh",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
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
          "description": "SPD increases by <span class=\"descriptionNumberColor\">#SkillTree_PointB3_P2_Value</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Vici"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__35466247\">Cerydra_PointB2_Self</a>",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1063134824\">Cerydra_PointB2</a>[<span class=\"descriptionNumberColor\">Vidi</span>]",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (8) || RETURN",
                          "displayLines": "8",
                          "constants": [],
                          "variables": [
                            8
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
                          "variables": {
                            "DV_AddPoint": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextCaster",
                          "variableName": "DV_Rank02_Effcet",
                          "value": 0
                        },
                        "Modifier Deletes Itself"
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
          "latentQueue": [
            "DV_DelayReachPromotionRank01_Flag",
            "DV_Rank02_Effcet"
          ],
          "description": "Using Ultimate grants Cerydra <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Charge.",
          "type": "Other",
          "statusName": "Vidi"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1777978570\">Cerydra_PointB1_CriticalDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Veni</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Multipler",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Variables[2] (100) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue / 100))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "MDF_PropertyValue",
                      100
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.18) || MUL || RETURN",
                    "displayLines": "(MDF_Multipler * 0.18)",
                    "constants": [],
                    "variables": [
                      "MDF_Multipler",
                      0.18
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_PropertyValue2",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_PropertyValue2_Max) || RETURN",
                      "displayLines": "MDF_PropertyValue2_Max",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue2_Max"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2_Max) || RETURN",
                        "displayLines": "MDF_PropertyValue2_Max",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2_Max"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Veni"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1113467681\">Cerydra_PointB1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"285180959\">Cerydra_PointB1_CriticalCriticalDamageAddedRatio</a>"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"285180959\">Cerydra_PointB1_CriticalCriticalDamageAddedRatio</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"285180959\">Cerydra_PointB1_CriticalCriticalDamageAddedRatio</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"285180959\">Cerydra_PointB1_CriticalCriticalDamageAddedRatio</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__285180959\">Cerydra_PointB1_CriticalCriticalDamageAddedRatio</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttackConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentAttack2",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentAttack) || Variables[1] (MDF_CurrentAttackConvert) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentAttack - MDF_CurrentAttackConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentAttack",
                      "MDF_CurrentAttackConvert"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentAttack2",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (2000) || Variables[1] (100) || ADD || RETURN",
                      "displayLines": "(2000 + 100)",
                      "constants": [],
                      "variables": [
                        2000,
                        100
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1777978570\">Cerydra_PointB1_CriticalDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Veni</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1777978570\">Cerydra_PointB1_CriticalDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Veni</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue2_Max": {
                              "operator": "Variables[0] (3.6) || RETURN",
                              "displayLines": "3.6",
                              "constants": [],
                              "variables": [
                                3.6
                              ]
                            },
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (2000) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttack2 - 2000)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttack2",
                                2000
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1777978570\">Cerydra_PointB1_CriticalDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Veni</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue2_Max": {
                              "operator": "Variables[0] (3.6) || RETURN",
                              "displayLines": "3.6",
                              "constants": [],
                              "variables": [
                                3.6
                              ]
                            },
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (2000) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttack2 - 2000)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttack2",
                                2000
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1777978570\">Cerydra_PointB1_CriticalDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Veni</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "Cerydra_Functions": {
      "fileName": "Cerydra_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1336664335\">Cerydra_Template_ReachPromotionEidolon1</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (PromotionRank_AttackAddedValue) || RETURN",
                  "displayLines": "PromotionRank_AttackAddedValue",
                  "constants": [],
                  "variables": [
                    "PromotionRank_AttackAddedValue"
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                },
                "MDF_PropertyValue3": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
              "valuePerStack": {
                "_ReplayAbility": 1
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (InsertActionCount) || RETURN",
                "displayLines": "InsertActionCount",
                "constants": [],
                "variables": [
                  "InsertActionCount"
                ]
              }
            },
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "counter": 1,
              "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Cerydra's Promotion Target}}"
                  },
                  "scope": "ContextCaster",
                  "valueType": "Layer",
                  "variableName": "InsertActionCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>",
                  "multiplier": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_DelayReachPromotionRank01_Flag",
              "value": 0
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "toRemove": [
                "STAT_CTRL"
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1612575312\">Cerydra_Template_MaxPointHandle</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_CurrentPoint_Temp",
              "value": {
                "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (DV_AddPoint) || ADD || RETURN",
                "displayLines": "(DV_CurrentPoint + DV_AddPoint)",
                "constants": [],
                "variables": [
                  "DV_CurrentPoint",
                  "DV_AddPoint"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_CurrentPoint_Temp",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (8) || RETURN",
                  "displayLines": "8",
                  "constants": [],
                  "variables": [
                    8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CurrentPoint",
                  "value": {
                    "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (DV_AddPoint) || ADD || RETURN",
                    "displayLines": "(DV_CurrentPoint + DV_AddPoint)",
                    "constants": [],
                    "variables": [
                      "DV_CurrentPoint",
                      "DV_AddPoint"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CurrentPoint",
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1940085870\">Cerydra_Template_SelfHandle</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>[<span class=\"descriptionNumberColor\">Peerage</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CurrentPoint_Temp_SelfHandle",
                  "value": {
                    "operator": "Variables[0] (DV_CurrentPoint) || Variables[1] (DV_AddPoint) || ADD || RETURN",
                    "displayLines": "(DV_CurrentPoint + DV_AddPoint)",
                    "constants": [],
                    "variables": [
                      "DV_CurrentPoint",
                      "DV_AddPoint"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DV_CurrentPoint_Temp_SelfHandle",
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
                      "name": "Define Custom Variable",
                      "variableName": "DV_DelayReachPromotionRank01_Flag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_CurrentPoint_Temp_SelfHandle",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_DelayReachPromotionRank01_Flag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_CurrentPoint_Temp_SelfHandle",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}