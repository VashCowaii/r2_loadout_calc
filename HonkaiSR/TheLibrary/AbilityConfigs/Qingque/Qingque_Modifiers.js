const configAbility = {
  "fileName": "Qingque_Modifiers",
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
      "for": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Action Target List",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "QingQue_Passive_Hu_Flag"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Qingque_Eidolon4_ATK_Special",
                          "abilitySource": "Caster",
                          "abilityTarget": "Skill Point Entity",
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Eidolon4_ATK[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Qingque_Eidolon4_ATK",
                          "abilitySource": "Caster",
                          "abilityTarget": "Skill Point Entity",
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
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "description": "Launches 1 Follow-Up ATK immediately after using Basic ATK or Enhanced Basic ATK on an enemy, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
      "type": "Buff",
      "statusName": "Self-Sufficer"
    },
    {
      "name": "Modifier Construction",
      "for": "Qingque_SpeedUpPointB3[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                "displayLines": "MDF_SpeedUp",
                "constants": [],
                "variables": [
                  "MDF_SpeedUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUp"
      ],
      "latentQueue": [],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUp</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu_01",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu_Flag_Yu",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu_Flag_Tiao",
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu_Flag_Tong",
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu_Flag_Wan",
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu_Flag",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MWQingque_Attack_Transfer",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Show",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Disable Abilities",
              "target": "Owner of this Modifier",
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Yu",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Tiao",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "QingQue_PassiveCount"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tiao",
                  "value": {
                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_Tiao + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Tiao"
                    ]
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
      "for": "QingQue_Passive_Tong",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "QingQue_PassiveCount"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tong",
                  "value": {
                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_Tong + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Tong"
                    ]
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
      "for": "QingQue_Passive_Wan",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "QingQue_PassiveCount"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Wan",
                  "value": {
                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_Wan + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Wan"
                    ]
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
      "for": "QingQue_PassiveCount",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Passive_Hu_Flag",
              "removeAllInstances": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_PassiveCount_QingqueSelf",
              "valuePerStack": {
                "AbilityRank_Eidolon2_P1_SPAdd": {
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
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": "Caster"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tiao",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_CardCount",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                          "displayLines": "MDF_PropertyValue01",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue01"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Hu_Flag_Wan"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Wan",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
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
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 4
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_CardCount",
                            "compareType": "=",
                            "value2": 4
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                              "displayLines": "MDF_PropertyValue01",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue01"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Hu_Flag_Tong"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tong",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tong",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_CardCount",
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
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 4
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_CardCount",
                                "compareType": "=",
                                "value2": 4
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                                  "displayLines": "MDF_PropertyValue01",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue01"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Hu_Flag_Tiao"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao",
                              "removeAllInstances": true
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_CardCount",
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": "Caster",
                      "modifier": "QingQue_Passive_Hu_01"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Qingque_Bonus",
                      "abilitySource": "Caster",
                      "priorityTag": "AvatarBuffSelf",
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
            "Refresh QingQue Bar-State"
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Teammates (Excluding Owner)",
              "modifier": "QingQue_PassiveCount_Teammate",
              "valuePerStack": {
                "QingQue_CardCount_Teammate": {
                  "operator": "Variables[0] (QingQue_CardCount) || RETURN",
                  "displayLines": "QingQue_CardCount",
                  "constants": [],
                  "variables": [
                    "QingQue_CardCount"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "All Teammates (Excluding Owner)",
              "modifier": "QingQue_PassiveCount_Teammate"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue01"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_PassiveCount_Teammate",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "QingQue_PassiveCount"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_PassiveCount_QingqueSelf",
                  "valuePerStack": {
                    "AbilityRank_Eidolon2_P1_SPAdd": {
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
            "Refresh QingQue Bar-State"
          ]
        }
      ],
      "stackData": [
        "QingQue_CardCount_Teammate"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_PassiveCount_QingqueSelf",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "QingQue_PassiveCount"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": "Caster",
                      "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Qingque_ChangeCard"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (SkillRank_Rank02_P1_SPAdd) || RETURN",
                    "displayLines": "SkillRank_Rank02_P1_SPAdd",
                    "constants": [],
                    "variables": [
                      "SkillRank_Rank02_P1_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Qingque_ChangeCard",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_CardCount",
                "compareType": "<",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.33
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "QingQue_Passive_Wan"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tong"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tiao"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": {
                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_CardCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_CardCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 4
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 4
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 4
                              },
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_CardCount",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                                    "displayLines": "(QingQue_CardCount + 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_CardCount"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.33
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Wan"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tong"
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": "Caster",
                                          "modifier": "QingQue_Passive_Tiao"
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
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Wan",
                                        "compareType": ">=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_CardCount",
                                        "compareType": "=",
                                        "value2": 5
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_CardCount - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Tong",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tiao"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Wan"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Wan",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Wan - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Wan"
                                                ]
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
                                            "value1": "QingQue_Tiao",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tong"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Wan"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
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
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tiao"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tong"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tong"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tiao"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tiao",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tiao - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tiao"
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
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Tong",
                                        "compareType": ">=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_CardCount",
                                        "compareType": "=",
                                        "value2": 5
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_CardCount - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Wan",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tiao"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tong"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tong",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tong - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tong"
                                                ]
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
                                            "value1": "QingQue_Tiao",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tong"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Wan"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
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
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tiao"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                  "displayLines": "QingQue_Wan",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Wan"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Wan"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tiao"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tiao",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tiao - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tiao"
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
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Tiao",
                                        "compareType": ">=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_CardCount",
                                        "compareType": "=",
                                        "value2": 5
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_CardCount - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Wan",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tiao"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tong"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tong",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tong - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tong"
                                                ]
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
                                            "value1": "QingQue_Tong",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Tiao"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Wan"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
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
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                              "displayLines": "QingQue_Tong",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tong"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": "Caster",
                                              "modifier": "QingQue_Passive_Tong"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tong",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tong - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tong"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                  "displayLines": "QingQue_Wan",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Wan"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": "Caster",
                                                  "modifier": "QingQue_Passive_Wan"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Wan"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": "Caster",
                                                      "modifier": "QingQue_Passive_Tong"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
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
              ]
            }
          ]
        }
      ],
      "stackData": [
        "SkillRank_Rank02_P1_SPAdd"
      ],
      "latentQueue": [
        "QingQue_CardCount_Teammate",
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "MWQingque_Attack_Transfer"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_BPCount",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "description": "Basic ATK is Enhanced and increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Hidden Hand"
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "removeAllInstances": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "description": "Each stack increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, up to 4 stacks.",
      "type": "Buff",
      "statusName": "DMG Boost",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "QingQue_Ability11PreShowModifier",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "QingQue_Ability11PreShowModifier"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Basic ATK"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": "Owner of this Modifier",
            "modifier": "Qingque_SpeedUpPointB3[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.1(SPD Change)"
        }
      }
    }
  ],
  "references": []
}