const configAbility = {
  "fileName": "NetherwingPollux_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 8,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_RefreshActionBar",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_LifeTime"
              }
            ]
          },
          "passed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_0",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Set Netherwing Skill Phase"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Auto-Battle",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Force Auto-Battle on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_InsideExplode[<span class=\"descriptionNumberColor\">Back to the Black</span>]"
            }
          ],
          "failed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_Limit",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Set Netherwing Skill Phase"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_InsideExplode[<span class=\"descriptionNumberColor\">Back to the Black</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_SetDamageRatio",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio01) || RETURN",
              "displayLines": "CastoriceServant_Eidolon1_HPRatio01",
              "constants": [],
              "variables": [
                "CastoriceServant_Eidolon1_HPRatio01"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Castorice_Rank01_DamageRatio",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio01) || RETURN",
                      "displayLines": "CastoriceServant_Eidolon1_HPRatio01",
                      "constants": [],
                      "variables": [
                        "CastoriceServant_Eidolon1_HPRatio01"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio02) || RETURN",
                      "displayLines": "CastoriceServant_Eidolon1_HPRatio02",
                      "constants": [],
                      "variables": [
                        "CastoriceServant_Eidolon1_HPRatio02"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_Rank01_DamageRatio",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Eidolon1_DamageRatio01) || RETURN",
                    "displayLines": "CastoriceServant_Eidolon1_DamageRatio01",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Eidolon1_DamageRatio01"
                    ]
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
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio02) || RETURN",
                      "displayLines": "CastoriceServant_Eidolon1_HPRatio02",
                      "constants": [],
                      "variables": [
                        "CastoriceServant_Eidolon1_HPRatio02"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Castorice_Rank01_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (CastoriceServant_Eidolon1_DamageRatio02) || RETURN",
                        "displayLines": "CastoriceServant_Eidolon1_DamageRatio02",
                        "constants": [],
                        "variables": [
                          "CastoriceServant_Eidolon1_DamageRatio02"
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
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_GetMaxHP",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "CastoriceServant_SummonMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CastoriceServant_CurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CastoriceServant_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_BP_OneMore_Clean",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BPSkill_Level3_Loop",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Flag01"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BPCost_1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BPCost_2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BPCost_3"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BP_Explode"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_BP_OneMore_AbilityChange",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_3",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_2",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
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
              "target": "{{Caster}}"
            },
            "modifier": "Memosprite_CastoriceServant_LifeTime",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Disable"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle",
            "invertCondition": true
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Flag01"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Memosprite_CastoriceServant_BP_Explode"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_BPCost_1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_BPCost_2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_1"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_2"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_BPCost_3"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_1"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_2"
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
                "name": "HP Can be Damaged",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}.[[removeUnselectable]]"
                },
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_TiggerKiller",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "PointB2"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (CastoriceServant_PointB2_SpeedRatio) || RETURN",
                      "displayLines": "CastoriceServant_PointB2_SpeedRatio",
                      "constants": [],
                      "variables": [
                        "CastoriceServant_PointB2_SpeedRatio"
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
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 2
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 3
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_CastoriceServant_AnimEvents"
            },
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
                }
              ]
            },
            "Trigger: Ability End",
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Flag01"
            }
          ],
          "failed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            },
            {
              "name": "Trigger: Ability End",
              "skipAttackSettle": true
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_FlyToAbility23",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BPCost_3"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_OnPhase1Change",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BPCost_2"
            },
            {
              "name": "Set Netherwing Skill Phase",
              "level": 3
            },
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_3",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_ReadyAnimStateFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_ReadyAnimStateFlag",
                  "value": 1
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_BPCost_2"
                },
                {
                  "name": "Set Netherwing Skill Phase",
                  "level": 3
                },
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_3",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_ReadyAnimStateFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CastoriceServant_ReadyAnimStateFlag",
                      "value": 1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Netherwing Skill Phase",
                      "level": 2
                    },
                    {
                      "name": "Update Action Bar Display",
                      "triggerName": "Level_2",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_1"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_ReadyAnimStateFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CastoriceServant_ReadyAnimStateFlag",
                          "value": 1
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BattleViewModeLevel",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_BattleViewModeLevel",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_BattleViewModeLevel",
              "value": {
                "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(CastoriceServant_BattleViewModeLevel + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "CastoriceServant_BattleViewModeLevel"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BPSkill_Level3_Loop",
          "value": 0
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CastoriceServant_AnimEvents",
      "parse": [
        {
          "name": "Force Auto-Battle on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "<=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level",
            "compareType": ">=",
            "value2": 3
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BPCost_3"
        }
      ]
    }
  ],
  "references": []
}