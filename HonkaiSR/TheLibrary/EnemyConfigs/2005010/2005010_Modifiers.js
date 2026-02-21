const configAbility = {
  "fileName": "2005010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-169365632\">W2_Feixiao_BattleScore2</a>",
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
              "variableName": "Feixiao_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill07"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Charge",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Feixiao_BattleScore2_Flag",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill08"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Charge",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Charge",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Feixiao_BattleScore2_Flag",
                  "value": {
                    "operator": "Variables[0] (Feixiao_BattleScore2_Flag) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Feixiao_BattleScore2_Flag + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Feixiao_BattleScore2_Flag"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Feixiao_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Are You Upset?",
                          "desc": "Shadow of \"Feixiao\" uses \"Wreathed in Storm,\" and all of Ecliptic Inner Beast's parts become Weakness Broken during the Charging phase of \"Wreathed in Storm\" in the battle against the Shadow of \"Feixiao\"",
                          "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-119032775\">W2_Feixiao_BattleScore1</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
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
              "variableName": "Feixiao_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 200501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true,
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "When This Stormy Rain Has Stopped...",
                      "desc": "None of Ecliptic Inner Beast's parts manages to use an Enhanced action in the battle against the Shadow of \"Feixiao\"",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Battle was Victory",
                  {
                    "name": "Enemy ID",
                    "ID": 200501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true,
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "When This Stormy Rain Has Stopped...",
                      "desc": "None of Ecliptic Inner Beast's parts manages to use an Enhanced action in the battle against the Shadow of \"Feixiao\"",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-969657750\">Monster_W2_Feixiao_BattleEventTailMove</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Tail}}"
              },
              "isStartingAV": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1326714600\">Monster_W2_Feixiao_BattleEventLimbMove</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Claws}}"
              },
              "isStartingAV": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__376676106\">Monster_W2_Feixiao_BattleEventHeadMove</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Head}}"
              },
              "isStartingAV": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__847148558\">Monster_W2_Feixiao_BattleEventAlreadyMove</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__111887657\">Monster_W2_Feixiao_SpecialEndurance</a>",
      "modifierFlags": [
        "STAT_ForceActionable"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1409624361\">Monster_W2_Feixiao_SpecialLockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.3
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__354882084\">Monster_W2_Feixiao_MainStart</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1220,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Feixiao"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1409624361\">Monster_W2_Feixiao_SpecialLockHP</a>"
                }
              ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1409624361\">Monster_W2_Feixiao_SpecialLockHP</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1052158609\">Monster_W2_Feixiao_MainLockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.8
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1271577147\">Monster_W2_Feixiao_TalkSentence_06</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-664793449\">Monster_W2_Feixiao_AlreadyConnectRemove</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AlreadyConnect",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_AlreadyConnect",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                  "valuePerStack": {
                    "MDF_StanceBreakTakenRatio": {
                      "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                      "displayLines": "MDF_StanceBreakTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_StanceBreakTakenRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_StanceBreakTakenRatio"
      ],
      "latentQueue": [
        "SpecialTalkHead",
        "SpecialTalkFinish",
        "MissionTalkStart"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-39431749\">Monster_W2_Feixiao_EnhanceAbilityMark</a>",
      "stackData": [],
      "latentQueue": [
        "SpecialTalkHead",
        "SpecialTalkFinish",
        "MissionTalkStart"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1817449894\">Monster_W2_Feixiao_MainTutorial</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"354882084\">Monster_W2_Feixiao_MainStart</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1052158609\">Monster_W2_Feixiao_MainLockHP</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MainTrigger2",
        "EnhanceFlag",
        "CurrentStance",
        "BattleEventPartFlag",
        "MainDelay",
        "MainBeforeHead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__908013757\">Monster_W2_Feixiao_MainEnd</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillType": "ControlSkill03",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "afterInjection": []
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1306733131\">Monster_W2_Feixiao_Stop</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "BaseSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (BaseSpeed) || SUB || RETURN",
                "displayLines": "(0 - BaseSpeed)",
                "constants": [
                  0
                ],
                "variables": [
                  "BaseSpeed"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-171858273\">Monster_W2_Feixiao_LostConnect</a>",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1057448385\">Monster_W2_Feixiao_Charge</a>",
      "modifierFlags": [
        "FloatingAnimPerform"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
                "modifier": "<a class=\"gModGreen\" id=\"1057448385\">Monster_W2_Feixiao_Charge</a>"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "SpecialTalkCharge",
        "EnhanceHead_Flag",
        "EnhanceLimb_Flag",
        "EnhanceTail_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__284964038\">Monster_W2_Feixiao_Unselectable</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "SpecialTalkCharge",
        "EnhanceHead_Flag",
        "EnhanceLimb_Flag",
        "EnhanceTail_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__221422164\">Monster_W2_Feixiao_ModifyActionDelay</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_BreakActionDelay"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-643293953\">Monster_W2_Feixiao_SuperArmorController</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"221422164\">Monster_W2_Feixiao_ModifyActionDelay</a>",
              "valuePerStack": {
                "MDF_BreakActionDelay": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeTakenRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__411947426\">Monster_W2_Feixiao_EnhanceAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
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
                      "target": "{{Modifier Creator}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Battle Event List}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Creator}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Creator}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1423053696\">Monster_W2_Feixiao_BreakController</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]"
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 203501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 203501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1478246975\">Monster_W2_Feixiao_BattleEventController</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-977223255\">Monster_W2_Feixiao_SummonMinions</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnhanceHead_Flag",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceLimb_Flag",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 203206,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceTail_Flag",
                          "value": 0
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
                "value1": "MDF_LostConnect",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_LostConnect",
                    "compareType": "=",
                    "value2": 1
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LostConnect",
                  "value": 0
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - {[PassiveSkill01[1]]})"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-171858273\">Monster_W2_Feixiao_LostConnect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__734224904\">Monster_W2_Feixiao_CurrentConnect</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1847577011\">Monster_W2_Feixiao_AfterConnect</a>",
      "stackData": [],
      "latentQueue": [
        "BattleEventPartFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Set Enemy Toughness to Vulnerable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Modifier-Specific Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>",
              "variableName": "MDF_LostConnect",
              "value": 2
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                "displayLines": "MDF_StanceBreakTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakTakenRatio"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Set Enemy Toughness to Vulnerable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isVuln": true
            }
          ]
        }
      ],
      "stackData": [
        "MDF_StanceBreakTakenRatio"
      ],
      "latentQueue": [
        "SpecialTalkCharge"
      ],
      "description": "While in the Resonance state, this unit is immune to changes in the order of the action bar (except changes made by itself). At the same time, any Toughness reduction this unit receives will increase by <span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>. When this unit is Weakness Broken, all targets' actions are Advanced Forward.",
      "type": "Other",
      "effectName": "Resonate",
      "statusName": "Resonate"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1482768789\">Monster_W2_Feixiao_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
      "modifierFlags": [
        "STAT_AITargetHigherPriority"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            },
            {
              "name": "Set Enemy Toughness to Vulnerable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Modifier-Specific Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>",
              "variableName": "MDF_LostConnect",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 203206,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                "displayLines": "MDF_StanceBreakTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakTakenRatio"
                ]
              }
            },
            {
              "name": "Set Enemy Toughness to Vulnerable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isVuln": true
            }
          ]
        }
      ],
      "stackData": [
        "MDF_StanceBreakTakenRatio"
      ],
      "latentQueue": [
        "MissionTalkStart",
        "SpecialTalkFinish",
        "SpecialTalkHead",
        "MDF_AlreadyConnect"
      ],
      "description": "While in the Resonance state, this unit is immune to changes in the order of the action bar (except changes made by itself). At the same time, any Toughness reduction this unit receives will increase by <span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>. When this unit is Weakness Broken, all targets' actions are Advanced Forward.",
      "type": "Other",
      "effectName": "Resonate",
      "statusName": "Resonate"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "SpecialTalkUltraSkill",
        "EnhanceHead_Flag",
        "EnhanceTail_Flag",
        "EnhanceLimb_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>",
      "stackData": [],
      "latentQueue": [
        "SpecialTalkLimb",
        "SpecialTalkFinish",
        "MissionTalkStart"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1070872392\">Monster_W2_Feixiao_Part3Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1540195907\">Monster_W2_Feixiao_Part2Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1508080226\">Monster_W2_Feixiao_Part1Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1620569542\">Monster_W2_Feixiao_MainPhase1</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Step",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MainTrigger",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step",
                      "value": 2
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
                        "value1": "MDF_Step",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MainTrigger",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step",
                      "value": 1
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
              "name": "Lock HP",
              "threshold": 1.0011718e-7
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MainTrigger",
              "value": 1
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": 0
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2043551800\">Monster_W2_Feixiao_Main</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                        "value1": "MDF_Step",
                        "compareType": "=",
                        "value2": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MissionTalkStart",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step",
                      "value": 5
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MissionTalkStart",
                      "value": 1
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
                        "value1": "MDF_Step",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MissionTalkStart",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MissionTalkStart",
                      "value": 1
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
                        "value1": "MDF_Step",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MissionTalkStart",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step",
                      "value": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MissionTalkStart",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Weapon",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Weapon",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1220,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Feixiao"
              },
              "passed": [
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL",
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
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 6
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "SpecialTalkFinish",
                          "value": 1
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
                            "value1": "MDF_Step",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MissionTalkStart",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step",
                          "value": 4
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MissionTalkStart",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Step2",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Step2",
                          "value": 1
                        }
                      ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 2
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "SpecialTalkFinish",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Step3",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MissionTalkStart",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step3",
                      "value": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MissionTalkStart",
                      "value": 1
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "SpecialTalkFinish",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Step3",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MissionTalkStart",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Step3",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MissionTalkStart",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1220,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Feixiao"
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-914591810\">Monster_W2_Feixiao_Main2</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Step",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Step",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1271577147\">Monster_W2_Feixiao_TalkSentence_06</a>"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Feixiao_Ability06_Part01",
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
                  }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-881036572\">Monster_W2_Feixiao_Main4</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Character ID",
                "ID": 1220,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Feixiao"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"111887657\">Monster_W2_Feixiao_SpecialEndurance</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"284964038\">Monster_W2_Feixiao_Unselectable</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-977223255\">Monster_W2_Feixiao_SummonMinions</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"336936166\">Monster_W2_FeixiaoPart_MainUnselectable</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "constantValue": 90
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": 12,
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-897814191\">Monster_W2_Feixiao_Main3</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.05
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HPLock",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPLock",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-881036572\">Monster_W2_Feixiao_Main4</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      "passed": [
                        {
                          "name": "Remove Modifier Behavior Flag(s)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagNames": []
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
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1717437472\">Monster_W2_Feixiao_Main2_End</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-897814191\">Monster_W2_Feixiao_Main3</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-914591810\">Monster_W2_Feixiao_Main2</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-914591810\">Monster_W2_Feixiao_Main2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.3
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1717437472\">Monster_W2_Feixiao_Main2_End</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_Step",
        "MissionTalkStart",
        "MDF_Weapon",
        "SpecialTalkFinish",
        "MDF_Step2",
        "MDF_Step3"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2027662282\">Monster_W2_Feixiao_Endurance</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2065920939\">Monster_W2_Feixiao_Destroy</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__130339168\">Monster_W2_Feixiao_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Feixiao_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "phase": 3,
                      "applyOverride": false
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Feixiao_PassiveAbility_Insert2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}