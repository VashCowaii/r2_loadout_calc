const configAbility = {
  "fileName": "DanHengPT_DanHengPT_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
        "invertCondition": true
      },
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_Skill02_Flag",
          "value": 1
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Empyreanity"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]"
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sylvanity"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
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
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PointB2_P2_AddSP": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        },
                        "MDF_Eidolon4_AllDamageReduceRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_Eidolon6_DefPentRatio": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
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
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PointB2_P2_AddSP": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        },
                        "MDF_Eidolon4_AllDamageReduceRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                        "MDF_Eidolon6_DefPentRatio": 0
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                  "valuePerStack": {
                    "MDF_PointB2_P3_DelayUp": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PointB2_P2_AddSP": {
                      "operator": "Variables[0] (6) || RETURN",
                      "displayLines": "6",
                      "constants": [],
                      "variables": [
                        6
                      ]
                    },
                    "MDF_Eidolon4_AllDamageReduceRatio": 0,
                    "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                    "MDF_Eidolon6_DefPentRatio": 0
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
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
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": 0,
                        "MDF_PointB2_P2_AddSP": 0,
                        "MDF_Eidolon4_AllDamageReduceRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_Eidolon6_DefPentRatio": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
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
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": 0,
                        "MDF_PointB2_P2_AddSP": 0,
                        "MDF_Eidolon4_AllDamageReduceRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                        "MDF_Eidolon6_DefPentRatio": 0
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                  "valuePerStack": {
                    "MDF_PointB2_P3_DelayUp": 0,
                    "MDF_PointB2_P2_AddSP": 0,
                    "MDF_Eidolon4_AllDamageReduceRatio": 0,
                    "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                    "MDF_Eidolon6_DefPentRatio": 0
                  }
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sylvanity"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
              "valuePerStack": {
                "MDF_PointB2_P3_DelayUp": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PointB2_P2_AddSP": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
                  ]
                },
                "MDF_Eidolon4_AllDamageReduceRatio": 0,
                "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                "MDF_Eidolon6_DefPentRatio": 0
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
              "valuePerStack": {
                "MDF_PointB2_P3_DelayUp": 0,
                "MDF_PointB2_P2_AddSP": 0,
                "MDF_Eidolon4_AllDamageReduceRatio": 0,
                "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                "MDF_Eidolon6_DefPentRatio": 0
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DanHengPT_Attack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Empyreanity"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DanHengPT_ConvertAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
          "valuePerStack": {
            "MDF_AttackDelta": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (DanHengPT_ConvertAttack) || SUB || Variables[2] (0.15) || MUL || RETURN",
              "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "DanHengPT_ConvertAttack",
                0.15
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
        "value1": "DanHengPT_Skill02_Flag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{Souldragon}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sublimity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Change Battle Event Owner",
                      "eventName": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_Point03_P1_DamageRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_DisperseNum": {
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
                      "name": "Change Battle Event Owner",
                      "eventName": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": 0,
                        "MDF_Point03_P1_DamageRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_DisperseNum": {
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
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Change Battle Event Owner",
                      "eventName": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_Point03_P1_DamageRatio": 0,
                        "MDF_DisperseNum": {
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
                      "name": "Change Battle Event Owner",
                      "eventName": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": 0,
                        "MDF_Point03_P1_DamageRatio": 0,
                        "MDF_DisperseNum": {
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
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sublimity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 11414,
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_Point03_P1_DamageRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_DisperseNum": {
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
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 11414,
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": 0,
                        "MDF_Point03_P1_DamageRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_DisperseNum": {
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
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 11414,
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_Point03_P1_DamageRatio": 0,
                        "MDF_DisperseNum": {
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
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 11414,
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "variables": {
                        "MDF_Ability03_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Stance": {
                          "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                          "displayLines": "DanHengPT_Stance_All",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Stance_All"
                          ]
                        },
                        "MDF_Eidolon2_P1_DamageRatio": 0,
                        "MDF_Point03_P1_DamageRatio": 0,
                        "MDF_DisperseNum": {
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DanHengPT_Passive_Count",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Show Attack Time",
              "time": {
                "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                "displayLines": "DanHengPT_Passive_Count",
                "constants": [],
                "variables": [
                  "DanHengPT_Passive_Count"
                ]
              },
              "on": null,
              "show": true
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
            "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_Skill02_Flag",
          "value": 0
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1290948349\">DanHengPT_AddShield</a>"
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
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}