const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033011,
  "trimCharacterName": 4033011,
  "abilityList": [
    "4033011_Modifiers",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01",
    "4033011_BE_BattleEvents",
    "4033011_Handling"
  ],
  "abilityObject": {
    "4033011_Modifiers": {
      "fileName": "4033011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1065867398\">XP_Elite01_02_LocalLegend_BattleScoreMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1219810118\">XP_Elite01_02_LocalLegend_BattleScore1</a>",
          "execute": [
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_IsLose",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Crazy Diamond",
                          "desc": "Clear the Nightmare difficulty combat against Corrupting Shadowfiend with all ally characters' \"HP Overload\" not exceeding #1",
                          "rarity": "Low",
                          "params": [
                            8000
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1065867398\">XP_Elite01_02_LocalLegend_BattleScoreMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "value": 1,
                      "variableName": "_IsLose"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
          "description": "Target has accumulated \"HP Overload,\" healing <span class=\"descriptionNumberColor\">MDF_NegativeBlood</span> HP will remove this state. When the \"Overload Settlement\" turn begins, the target will receive fatal damage.",
          "type": "Other",
          "statusName": "HP Overload"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
          "execute": [
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Property",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
                      "value": 0,
                      "function": "=",
                      "canModifyLimbo": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": ">=",
                        "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
                      },
                      {
                        "name": "Stage ID",
                        "compareType": "<=",
                        "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001812,
                      "variableName": "_BattleTarget_S3_2_Param"
                    },
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001813,
                      "variableName": "_BattleTarget_S3_3_Param"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage ID",
                    "compareType": "=",
                    "stageID": "426009 (Greatsword Guardian: Vanguard Wallbreaker)"
                  },
                  "passed": [
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001830,
                      "variableName": "_BattleTarget_S3_2_Param"
                    },
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001831,
                      "variableName": "_BattleTarget_S3_3_Param"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_NegativeHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variable": "_MonsterChangeCnt",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_LevelMaxNegativeHP",
                  "scope": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_NegativeHP",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
                          "variableName": "MDF_NegativeBlood",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
                          "valuePerStack": {
                            "MDF_NegativeBlood": {
                              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": ">=",
                        "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
                      },
                      {
                        "name": "Stage ID",
                        "compareType": "<=",
                        "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "_BattleTarget_S3_2_Param"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "value": 1,
                      "variableName": "_BattleTarget_LocalLegend_S3_2_Check"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": ">=",
                        "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
                      },
                      {
                        "name": "Stage ID",
                        "compareType": "<=",
                        "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "_BattleTarget_S3_3_Param"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "value": 1,
                      "variableName": "_BattleTarget_LocalLegend_S3_3_Check"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": "=",
                        "stageID": "426009 (Greatsword Guardian: Vanguard Wallbreaker)"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "_BattleTarget_S3_2_Param"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "value": 1,
                      "variableName": "_BattleTarget_LocalLegend_S3_6_Check"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": "=",
                        "stageID": "426009 (Greatsword Guardian: Vanguard Wallbreaker)"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "_BattleTarget_S3_3_Param"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "value": 1,
                      "variableName": "_BattleTarget_LocalLegend_S3_7_Check"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": "=",
                        "stageID": "426009 (Greatsword Guardian: Vanguard Wallbreaker)"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": 8000
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1065867398\">XP_Elite01_02_LocalLegend_BattleScoreMark</a>",
                      "casterAssign": "TargetSelf"
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
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "_BattleTarget_LocalLegend_S3_7_Check"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
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
                            "name": "Stage ID",
                            "compareType": ">=",
                            "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
                          },
                          {
                            "name": "Stage ID",
                            "compareType": "<=",
                            "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)"
                          },
                          "variableName": "_BattleTarget_LocalLegend_S3_1_ProgressInfo"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage ID",
                        "compareType": "=",
                        "stageID": "426009 (Greatsword Guardian: Vanguard Wallbreaker)"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)"
                          },
                          "variableName": "_BattleTarget_LocalLegend_S3_5_ProgressInfo"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "value": {
                        "displayLines": "MDF_NegativeHP"
                      },
                      "variableName": "_MonsterChangeCnt"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>",
          "latentQueue": [
            "MDF_LevelMaxNegativeHP",
            "_BattleTarget_LocalLegend_S3_2_Check",
            "_BattleTarget_LocalLegend_S3_3_Check",
            "_BattleTarget_LocalLegend_S3_6_Check",
            "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
            "_BattleTarget_LocalLegend_S3_5_ProgressInfo"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Allow NEGATIVE HP",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]",
          "latentQueue": [
            "_BattleTarget_LocalLegend_S3_5_ProgressInfo",
            "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
            "_BattleTarget_LocalLegend_S3_6_Check",
            "_BattleTarget_LocalLegend_S3_3_Check",
            "_BattleTarget_LocalLegend_S3_2_Check",
            "MDF_LevelMaxNegativeHP"
          ],
          "description": "Target's HP cannot be reduced below 1, and any excess damage beyond an amount of their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\"",
          "type": "Other",
          "effectName": "Overloadable",
          "statusName": "Overloadable"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1291270123\">Monster_XP_Elite01_02_LocalLegend_Ability03_Status</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
                  "casterAssign": "TargetSelf"
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
                          "casterAssign": "TargetSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "priorityLevel": -90,
              "execute": [
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "compareType": ">=",
                            "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
                          },
                          {
                            "name": "Stage ID",
                            "compareType": "<=",
                            "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "value": 1,
                          "variableName": "_BattleTarget_LocalLegend_S3_1_Check"
                        }
                      ]
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "InsertCheck",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1526505902\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent_SpeedAddedRatio</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "_SpeedAddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__416601415\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Anyone",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": ">=",
                        "stageID": "4260080 (Greatsword Guardian: Vanguard Wallbreaker)"
                      },
                      {
                        "name": "Stage ID",
                        "compareType": "<=",
                        "stageID": "4260086 (Greatsword Guardian: Vanguard Wallbreaker)"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 2,
                      "variableName": "_OriginCharacterCount"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 4,
                      "variableName": "_OriginCharacterCount"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "variableName": "_CharacterCount",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                      },
                      "living": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1526505902\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent_SpeedAddedRatio</a>",
                      "valuePerStack": {
                        "_SpeedAddedRatio": {
                          "displayLines": "((_OriginCharacterCount - _CharacterCount) * {[Skill03[1]]})"
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
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_TargetNegativeHp",
              "scope": "ContextAbility",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Null Type",
                "DamageFlat": {
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_TargetNegativeHp",
              "scope": "ContextAbility",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Null Type",
                "DamageFlat": {
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_MonsterChangeCnt02",
          "context": "TargetEntity",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage ID",
                    "compareType": ">=",
                    "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
                  },
                  {
                    "name": "Stage ID",
                    "compareType": "<=",
                    "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "value": 1,
                  "variableName": "_BattleTarget_LocalLegend_S3_1_Check"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Set Enemy Phase",
              "mode": "Inc"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
              "priorityTag": "EnemyPhaseChange",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "compareType": "<=",
            "value2": 1,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "add": {
                "displayLines": "_BattleTarget_LocalLegend_S3_1_Check"
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          }
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "FirstSummon"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20036,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
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
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AIFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "_Basic_AllDamageReduceRatio"
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"999869963\">Enemy_XP_Elite01_02_LocalLegend_AbilityP01</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4033011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Enemy ID",
                "ID": 403301100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
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
              "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>"
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[Skill06[3]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonID01"
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[Skill06[2]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonID04"
                  },
                  "locationType": "AfterCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[Skill06[1]]}"
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonID02"
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[Skill06[0]]}"
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonID01"
              },
              "locationType": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "426009 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1219810118\">XP_Elite01_02_LocalLegend_BattleScore1</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[4]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill01[3]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260030 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260031 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260080 (Greatsword Guardian: Vanguard Wallbreaker)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260081 (Greatsword Guardian: Vanguard Wallbreaker)"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[10]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[5]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260032 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260082 (Greatsword Guardian: Vanguard Wallbreaker)"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[9]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[4]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260033 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260083 (Greatsword Guardian: Vanguard Wallbreaker)"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[8]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[3]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260034 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260084 (Greatsword Guardian: Vanguard Wallbreaker)"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[7]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[2]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260035 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260085 (Greatsword Guardian: Vanguard Wallbreaker)"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[6]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[1]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260036 (Corrupting Shadowfiend: Torrential Rotbringer)"
              },
              {
                "name": "Stage ID",
                "compareType": "=",
                "stageID": "4260086 (Greatsword Guardian: Vanguard Wallbreaker)"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill06[5]]}"
              },
              "variableName": "_ModifyActionDelay"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[0]]}"
              },
              "variableName": "_Basic_AllDamageReduceRatio"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"741408749\">Enemy_XP_Elite01_02_LocalLegend_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__999869963\">Enemy_XP_Elite01_02_LocalLegend_AbilityP01</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_IsNegative",
                  "scope": "TargetEntity"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_NegativeHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_NegativeHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_IsNegative"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_IsNegative"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_IsNegative",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
          "type": "Buff",
          "statusName": "DMG Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_ShowValue1"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__741408749\">Enemy_XP_Elite01_02_LocalLegend_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "latentQueue": [
            "_ModifyActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "_Basic_AllDamageReduceRatio"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "_CharacterCount",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}} + {{Player Team All}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      }
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
                    "value1": "_CharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_ShowValue1": {
                          "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})"
                        }
                      }
                    }
                  ]
                },
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
                      "name": "Define Custom Variable with Team Count",
                      "variableName": "MDF_CharacterCount",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "living": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CharacterCount",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "_Basic_AllDamageReduceRatio"
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
                          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "Battle Event ID",
                            "ID": 20036,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
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
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -90,
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
                  "priorityTag": "STAGE_Enemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "AIFlag",
                  "resetValue": 1,
                  "scope": "TargetEntity"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "variableName": "_CharacterCount",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}} + {{Player Team All}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_ShowValue1": {
                          "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "variableName": "_CharacterCount",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}} + {{Player Team All}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          }
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
                        "value1": "_CharacterCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_ShowValue1": {
                              "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})"
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
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID01"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[0]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID01"
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[3]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID01"
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": {
                              "displayLines": "SummonID01"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          }
                        }
                      ]
                    },
                    "compareType": "=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "displayLines": "{[Skill06[0]]}"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonID01"
                          },
                          "locationType": "AroundCasterOnEdge"
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
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID02"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[1]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID02"
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID04"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[1]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID04"
                      },
                      "locationType": "AfterCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "FirstSummon"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID04"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[0]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID04"
                      },
                      "locationType": "AroundCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID01"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[0]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID01"
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID03"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[1]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID03"
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "displayLines": "SummonID02"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[Skill06[2]]}"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID02"
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "SummonID01"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "SummonID02"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "SummonID03"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "SummonID04"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Add Battle Event",
          "eventID": 20036,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"416601415\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "displayLines": "{[Skill03[0]]}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "displayLines": "{[Skill03[2]]}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "MDF_CharacterCount",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "living": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "_Basic_AllDamageReduceRatio"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_TargetMaxHp",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Null Type",
                "DamageFlat": {
                  "displayLines": "({[Skill05[0]]} * _TargetMaxHp)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
        "4033011_Monster_XP_Elite01_02_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Heartmarrow Corrosion"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1291270123\">Monster_XP_Elite01_02_LocalLegend_Ability03_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "Add Battle Event",
          "eventID": 20036,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"416601415\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "displayLines": "{[Skill03[0]]}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "displayLines": "{[Skill03[2]]}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": 1,
          "variableName": "FireBallNum"
        },
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
              "delayInterval": 0.2537,
              "parallelCount": 5
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FireBallNum",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Random Aggro}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Multiple Functions",
                      "functionList": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Multiple Functions",
                      "functionList": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "displayLines": "SummonType"
              },
              "caseTasks": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5
                }
              ]
            },
            {
              "name": "Shot Fired"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallNum",
              "context": "ContextAbility",
              "value": 1,
              "max": 100
            },
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
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_TargetMaxHp",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_TargetCurrentHp",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "({[Skill02[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill02[1]]})))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
        "4033011_Monster_XP_Elite01_02_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_TargetMaxHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "({[Skill01[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill01[1]]})))"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
        "4033011_Monster_XP_Elite01_02_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4033011_BE_BattleEvents": {
      "fileName": "4033011_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "beID": 20036,
          "team": "Neutral Team",
          "eventType": "Assist",
          "icon": "BattleEvent_NegativeHP.png",
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 65
            }
          ],
          "hardLevel": true,
          "actionDescription": "When \"Overload Settlement\" on the action bar takes action, HP calculation will be performed. Units with HP below 0 will receive fatal damage. \"Overload Settlement\" will increase in speed as the number of enemy summons decreases, and will be removed when all enemy summons are defeated."
        }
      ],
      "references": []
    },
    "4033011_Handling": {
      "fileName": "4033011_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "XP_Elite01_01_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Compare: Target Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "compareType": "=",
                          "value2": 0,
                          "livingTargets": true
                        },
                        {
                          "name": "Compare: Variable",
                          "value1": "HP_Bars_Remaining",
                          "compareType": "=",
                          "value2": 2
                        }
                      ]
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill06"
                      }
                    ],
                    "failed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "value1": "SkillStep",
                          "compareType": "=",
                          "value2": 0
                        },
                        "passed": [
                          {
                            "name": "Define Custom Variable",
                            "value": 1,
                            "variableName": "SkillStep"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Define Custom Variable",
                            "value": 0,
                            "variableName": "SkillStep"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Compare: Target Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "compareType": "=",
                          "value2": 0,
                          "livingTargets": true
                        },
                        {
                          "name": "Compare: Variable",
                          "value1": "HP_Bars_Remaining",
                          "compareType": "=",
                          "value2": 2
                        }
                      ]
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill06"
                      }
                    ],
                    "failed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "value1": "SkillStep",
                          "compareType": "=",
                          "value2": 0
                        },
                        "passed": [
                          {
                            "name": "Define Custom Variable",
                            "value": 1,
                            "variableName": "SkillStep"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Define Custom Variable",
                            "value": 0,
                            "variableName": "SkillStep"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "HP_Bars_Remaining",
                      "compareType": "=",
                      "value2": 1
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 1
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 3
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision03",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Compare: Target Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "compareType": "=",
                          "value2": 0,
                          "livingTargets": true
                        },
                        {
                          "name": "Compare: Variable",
                          "value1": "HP_Bars_Remaining",
                          "compareType": "=",
                          "value2": 2
                        }
                      ]
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill06"
                      }
                    ],
                    "failed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "value1": "SkillStep",
                          "compareType": "=",
                          "value2": 0
                        },
                        "passed": [
                          {
                            "name": "Define Custom Variable",
                            "value": 1,
                            "variableName": "SkillStep"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Define Custom Variable",
                            "value": 0,
                            "variableName": "SkillStep"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision05",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill05"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
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