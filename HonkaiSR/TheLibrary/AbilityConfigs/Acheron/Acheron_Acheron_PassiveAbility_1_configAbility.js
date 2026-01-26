const configAbility = {
  "fileName": "Acheron_Acheron_PassiveAbility_1",
  "childAbilityList": [
    "Acheron_Acheron_PassiveAbility_1"
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
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CurrentSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MaxSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_PassiveUltra"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (9) || RETURN",
        "displayLines": "9",
        "constants": [],
        "variables": [
          9
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_BlockModifySp"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Acheron_Eidolon1_Listen"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Acheron_Eidolon4_Listen"
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
          "modifier": "Acheron_Eidolon6_AddRegardAsAbilityType",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Acheron_Eidolon4_Listen_OnCharacterCreate",
      "execute": [
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Acheron_Eidolon4_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Ultimate DMG Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.08) || RETURN",
                      "displayLines": "0.08",
                      "constants": [],
                      "variables": [
                        0.08
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
      "for": "Acheron_Eidolon4_Listen",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Acheron_Eidolon4_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Ultimate DMG Vulnerability</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.08) || RETURN",
                  "displayLines": "0.08",
                  "constants": [],
                  "variables": [
                    0.08
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Acheron_Eidolon4_Listen_OnCharacterCreate"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CurrentSP",
        "MaxSP"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_Eidolon1_Listen",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target TAKING DMG}}"
              },
              "variableName": "Rank01_DebuffNumber"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Rank01_DebuffNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                      "value": "0.18"
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
        "CurrentSP",
        "MaxSP"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Acheron_PassiveUltra",
      "modifierFlags": [
        "ListenBattleEventSkill",
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
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Acheron_DebuffSpecialMark01_Empty"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1,
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Acheron_LimboTransfer"
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillUseFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillUseDubuff",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseDubuff",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillUseFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillUseDubuff",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseDubuff",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Character Path Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "The Abyss"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": null,
                  "matchToPathFrom": [
                    "Nihility"
                  ],
                  "variableName": "Acheron_BaseTypeCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_PointB2_Count",
                  "value": {
                    "operator": "Variables[0] (Acheron_BaseTypeCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Acheron_BaseTypeCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Acheron_BaseTypeCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Acheron_PointB2_Count",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Acheron_PointB2_Count",
                          "value": {
                            "operator": "Variables[0] (Acheron_PointB2_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Acheron_PointB2_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Acheron_PointB2_Count"
                            ]
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
                    "value1": "Acheron_PointB2_Count",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Acheron_PointB2_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (1.6) || RETURN",
                        "displayLines": "1.6",
                        "constants": [],
                        "variables": [
                          1.6
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Acheron_PointB2_Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Acheron_PointB2_DamageRatio",
                          "value": {
                            "operator": "Variables[0] (1.15) || RETURN",
                            "displayLines": "1.15",
                            "constants": [],
                            "variables": [
                              1.15
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Acheron_PointB2_DamageRatio",
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "Acheron_OnListenDeBonusAdd"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "Acheron_DebuffSpecialMark01_Empty"
            }
          ],
          "priorityLevel": -80
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
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_RuondDeBonusCD",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_Ability03_Special",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "OnEnterBattleFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Passive_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (9) || RETURN",
                      "displayLines": "9",
                      "constants": [],
                      "variables": [
                        9
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 1,
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Acheron_RuondDeBonusCD"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Acheron_SetEnergyBarState"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Red Oni"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 1,
                          "isFixed": "(Fixed)",
                          "ignoreBlock": true,
                          "isSpecialEnergy": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Acheron_RuondDeBonusCD"
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
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_RuondDeBonusCD",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Acheron_Ability03_Special",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Passive_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (9) || RETURN",
                      "displayLines": "9",
                      "constants": [],
                      "variables": [
                        9
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillUseFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseDubuff",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Acheron_LimboTransfer"
            }
          ]
        },
        {
          "eventTrigger": "Check Callback Flag Parameter",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBackBefore_OnListenCharacterCreate"
              },
              "passed": [
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
                      "modifier": "Acheron_OnListenDeBonusAdd"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Acheron_DebuffSpecialMark01_Empty"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "OnCharacterCreateFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillUseFlag",
                          "value": 0
                        },
                        {
                          "name": "Compare: Variable",
                          "value1": "MDF_SkillUseDubuff",
                          "compareType": "=",
                          "value2": 0
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
                "name": "Has Param Flag",
                "flagName": "CallBackBefore_MazeSkillEnterBattle"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "Acheron_OnListenDeBonusAdd"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "Acheron_DebuffSpecialMark01_Empty"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "OnEnterBattleFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_RuondDeBonusCD"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBackAfter_MazeSkillEnterBattle"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OnEnterBattleFlag",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_RuondDeBonusCD"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBackBefore_OnListenInsertAbilityStart"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_RuondDeBonusCD"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        }
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Neutral Team"
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnCharacterCreateFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBackBefore_OnListenBeforeSkillUse"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_RuondDeBonusCD"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseFlag",
                  "value": 1
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Acheron_LimboTransfer"
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
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
                      "value": 0,
                      "isFixed": "* ERR",
                      "isSetToValue": true,
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Acheron_Passive01Modifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Acheron_Ability03_Special"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Acheron_Ability03_Special",
                      "immediateEffect": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBack_SettleSkillOrInsertAbility"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OnCharacterCreateFlag",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseDubuff",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Acheron_FlowerCountBySp",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Acheron Debuff Gained Target}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Acheron_AddFlower_Passiv01"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillUseDubuff",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Acheron_FlowerCountBySp",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Acheron_Ability03_Special",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Acheron_AddFlower_Passiv01"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Acheron_LimboTransfer"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Acheron_CheckCurrentSpecialSPChange"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Red Oni"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "SpecialEnergy%",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Changes to Stats",
                          "variableName": "Acheron_PointB1_ClampedAdd",
                          "type": "ClampedAdd"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Acheron_PointB1_ClampedAdd",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Acheron_UltraAbilitySpareCount_PointB1[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (3) || RETURN",
                                  "displayLines": "3",
                                  "constants": [],
                                  "variables": [
                                    3
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (Acheron_PointB1_ClampedAdd) || RETURN",
                                "displayLines": "Acheron_PointB1_ClampedAdd",
                                "constants": [],
                                "variables": [
                                  "Acheron_PointB1_ClampedAdd"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Acheron_PointB1_ClampedAdd",
                          "value": 0
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
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Acheron_CheckCurrentSpecialSPChange",
          "parse": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "Acheron_ChangeValue"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Acheron_ChangeValue",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_FlowerCountBySp",
                  "value": {
                    "operator": "Variables[0] (Acheron_FlowerCountBySp) || Variables[1] (Acheron_ChangeValue) || ADD || RETURN",
                    "displayLines": "(Acheron_FlowerCountBySp + Acheron_ChangeValue)",
                    "constants": [],
                    "variables": [
                      "Acheron_FlowerCountBySp",
                      "Acheron_ChangeValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Acheron_FlowerCountBySp",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (9) || RETURN",
                      "displayLines": "9",
                      "constants": [],
                      "variables": [
                        9
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Acheron_FlowerCountBySp",
                      "value": {
                        "operator": "Variables[0] (9) || RETURN",
                        "displayLines": "9",
                        "constants": [],
                        "variables": [
                          9
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_ChangeValue",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Acheron_ChangeValue",
                "compareType": ">",
                "value2": 0
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
                    "modifier": "Acheron_Ability03_Special",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Passive_Count",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (9) || RETURN",
                              "displayLines": "9",
                              "constants": [],
                              "variables": [
                                9
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_SkillUseFlag",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Passive_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Passive_Count) || Variables[1] (Acheron_ChangeValue) || ADD || RETURN",
                            "displayLines": "(MDF_Passive_Count + Acheron_ChangeValue)",
                            "constants": [],
                            "variables": [
                              "MDF_Passive_Count",
                              "Acheron_ChangeValue"
                            ]
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Acheron_SetEnergyBarState"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Passive_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Passive_Count) || Variables[1] (Acheron_ChangeValue) || ADD || RETURN",
                            "displayLines": "(MDF_Passive_Count + Acheron_ChangeValue)",
                            "constants": [],
                            "variables": [
                              "MDF_Passive_Count",
                              "Acheron_ChangeValue"
                            ]
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Acheron_SetEnergyBarState"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Acheron_AddFlower_Passiv01"
                            }
                          ]
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
                    "name": "Compare: Variable",
                    "value1": "MDF_Passive_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (9) || RETURN",
                      "displayLines": "9",
                      "constants": [],
                      "variables": [
                        9
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                        "displayLines": "MDF_Passive_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Passive_Count"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (9) || RETURN",
                        "displayLines": "9",
                        "constants": [],
                        "variables": [
                          9
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                        "displayLines": "MDF_Passive_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Passive_Count"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (9) || RETURN",
                        "displayLines": "9",
                        "constants": [],
                        "variables": [
                          9
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_ChangeValue",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CurrentSP",
        "MaxSP"
      ]
    }
  ]
}