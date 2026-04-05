const configAbility = {
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
                  "variableName": "_IsLose",
                  "value": 1
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
          "eventTrigger": "When Put in Deathstate Limbo",
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
                    "ID": 4260030,
                    "compareType": ">=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260036,
                    "compareType": "<=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
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
                "ID": 426009,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_NegativeHP",
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
                        "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                        "constants": [],
                        "variables": [
                          "CEIL",
                          "MDF_NegativeHP"
                        ]
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
                          "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                          "constants": [],
                          "variables": [
                            "CEIL",
                            "MDF_NegativeHP"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage ID",
                    "ID": 4260030,
                    "compareType": ">=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260036,
                    "compareType": "<=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
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
                      "operator": "Variables[0] (_BattleTarget_S3_2_Param) || RETURN",
                      "displayLines": "_BattleTarget_S3_2_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S3_2_Param"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
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
                  "variableName": "_BattleTarget_LocalLegend_S3_2_Check",
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
                    "name": "Stage ID",
                    "ID": 4260030,
                    "compareType": ">=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260036,
                    "compareType": "<=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
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
                      "operator": "Variables[0] (_BattleTarget_S3_3_Param) || RETURN",
                      "displayLines": "_BattleTarget_S3_3_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S3_3_Param"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
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
                  "variableName": "_BattleTarget_LocalLegend_S3_3_Check",
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
                    "name": "Stage ID",
                    "ID": 426009,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
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
                      "operator": "Variables[0] (_BattleTarget_S3_2_Param) || RETURN",
                      "displayLines": "_BattleTarget_S3_2_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S3_2_Param"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
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
                  "variableName": "_BattleTarget_LocalLegend_S3_6_Check",
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
                    "name": "Stage ID",
                    "ID": 426009,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
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
                      "operator": "Variables[0] (_BattleTarget_S3_3_Param) || RETURN",
                      "displayLines": "_BattleTarget_S3_3_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S3_3_Param"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
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
                  "variableName": "_BattleTarget_LocalLegend_S3_7_Check",
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
                    "name": "Stage ID",
                    "ID": 426009,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
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
                    "type": "Character"
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
                      "operator": "Variables[0] (_BattleTarget_LocalLegend_S3_7_Check) || RETURN",
                      "displayLines": "_BattleTarget_LocalLegend_S3_7_Check",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_LocalLegend_S3_7_Check"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
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
                        "ID": 4260030,
                        "compareType": ">=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260036,
                        "compareType": "<=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
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
                      "variableName": "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
                      "value": {
                        "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                        "constants": [],
                        "variables": [
                          "CEIL",
                          "MDF_NegativeHP"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage ID",
                    "ID": 426009,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S3_5_ProgressInfo",
                      "value": {
                        "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                        "constants": [],
                        "variables": [
                          "CEIL",
                          "MDF_NegativeHP"
                        ]
                      }
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
                  "variableName": "_MonsterChangeCnt",
                  "value": {
                    "operator": "Variables[0] (MDF_NegativeHP) || RETURN",
                    "displayLines": "MDF_NegativeHP",
                    "constants": [],
                    "variables": [
                      "MDF_NegativeHP"
                    ]
                  }
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
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_LevelMaxNegativeHP",
        "_BattleTarget_LocalLegend_S3_2_Check",
        "_BattleTarget_LocalLegend_S3_3_Check",
        "_BattleTarget_LocalLegend_S3_6_Check",
        "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
        "_BattleTarget_LocalLegend_S3_5_ProgressInfo"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]",
      "stackData": [],
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>",
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
                        "ID": 4260030,
                        "compareType": ">=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260036,
                        "compareType": "<=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
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
                      "variableName": "_BattleTarget_LocalLegend_S3_1_Check",
                      "value": 1
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
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
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
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_SpeedAddedRatio) || RETURN",
                "displayLines": "_SpeedAddedRatio",
                "constants": [],
                "variables": [
                  "_SpeedAddedRatio"
                ]
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
          "eventTrigger": "Turn [Pre-action Phase]",
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
                    "ID": 4260080,
                    "compareType": ">=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260086,
                    "compareType": "<=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_OriginCharacterCount",
                  "value": 2
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_OriginCharacterCount",
                  "value": 4
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "_CharacterCount",
                  "livingTargets": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                  }
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
                      "operator": "Variables[0] (_OriginCharacterCount) || Variables[1] (_CharacterCount) || SUB || Variables[2] ({[Skill03[1]]}) || MUL || RETURN",
                      "displayLines": "((_OriginCharacterCount - _CharacterCount) * {[Skill03[1]]})",
                      "constants": [],
                      "variables": [
                        "_OriginCharacterCount",
                        "_CharacterCount",
                        "{[Skill03[1]]}"
                      ]
                    }
                  }
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
}