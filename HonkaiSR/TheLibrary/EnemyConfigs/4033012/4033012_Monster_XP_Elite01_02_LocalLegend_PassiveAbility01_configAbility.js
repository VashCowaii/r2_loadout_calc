const configAbility = {
  "fileName": "4033012_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01",
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
      "display": true
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
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
            "displayLines": "{[Skill06[2]]}",
            "constants": [],
            "variables": [
              "{[Skill06[2]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID04) || RETURN",
                "displayLines": "SummonID04",
                "constants": [],
                "variables": [
                  "SummonID04"
                ]
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
        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
        "displayLines": "{[Skill06[1]]}",
        "constants": [],
        "variables": [
          "{[Skill06[1]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID02) || RETURN",
            "displayLines": "SummonID02",
            "constants": [],
            "variables": [
              "SummonID02"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
        "displayLines": "{[Skill06[0]]}",
        "constants": [],
        "variables": [
          "{[Skill06[0]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID01) || RETURN",
            "displayLines": "SummonID01",
            "constants": [],
            "variables": [
              "SummonID01"
            ]
          },
          "locationType": "AroundCasterOnEdge"
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
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
            "displayLines": "{[Skill06[4]]}",
            "constants": [],
            "variables": [
              "{[Skill06[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[3]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260030,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260031,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260080,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260081,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[10]]}) || RETURN",
            "displayLines": "{[Skill06[10]]}",
            "constants": [],
            "variables": [
              "{[Skill06[10]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[5]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260032,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260082,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[9]]}) || RETURN",
            "displayLines": "{[Skill06[9]]}",
            "constants": [],
            "variables": [
              "{[Skill06[9]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[4]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260033,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260083,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[8]]}) || RETURN",
            "displayLines": "{[Skill06[8]]}",
            "constants": [],
            "variables": [
              "{[Skill06[8]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[3]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260034,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260084,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[7]]}) || RETURN",
            "displayLines": "{[Skill06[7]]}",
            "constants": [],
            "variables": [
              "{[Skill06[7]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[2]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260035,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260085,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[6]]}) || RETURN",
            "displayLines": "{[Skill06[6]]}",
            "constants": [],
            "variables": [
              "{[Skill06[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[1]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260036,
            "compareType": "=",
            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
          },
          {
            "name": "Stage ID",
            "ID": 4260086,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ModifyActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
            "displayLines": "{[Skill06[5]]}",
            "constants": [],
            "variables": [
              "{[Skill06[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Basic_AllDamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[0]]}"
            ]
          }
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
              "scope": "TargetEntity",
              "variableName": "MDF_IsNegative"
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
                  "variableName": "MDF_IsNegative",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsNegative",
                  "value": 0
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
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
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
              "whenEnteringRange": [
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                "displayLines": "MDF_ShowValue1",
                "constants": [],
                "variables": [
                  "MDF_ShowValue1"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
      "type": "Buff",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__741408749\">Enemy_XP_Elite01_02_LocalLegend_Status</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
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
                  "operator": "Variables[0] (_Basic_AllDamageReduceRatio) || RETURN",
                  "displayLines": "_Basic_AllDamageReduceRatio",
                  "constants": [],
                  "variables": [
                    "_Basic_AllDamageReduceRatio"
                  ]
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
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}} + {{Player Team All}}"
              },
              "variableName": "_CharacterCount",
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
                      "operator": "Variables[0] (_CharacterCount) || Variables[1] ({[PassiveSkill01[1]]}) || MUL || RETURN",
                      "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})",
                      "constants": [],
                      "variables": [
                        "_CharacterCount",
                        "{[PassiveSkill01[1]]}"
                      ]
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "MDF_CharacterCount",
                  "livingTargets": true
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
                          "operator": "Variables[0] (_Basic_AllDamageReduceRatio) || RETURN",
                          "displayLines": "_Basic_AllDamageReduceRatio",
                          "constants": [],
                          "variables": [
                            "_Basic_AllDamageReduceRatio"
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
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
              "priorityTag": "LevelPerformMonster",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -90
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
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}} + {{Player Team All}}"
                  },
                  "variableName": "_CharacterCount",
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
                      "operator": "Variables[0] (_CharacterCount) || Variables[1] ({[PassiveSkill01[1]]}) || MUL || RETURN",
                      "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})",
                      "constants": [],
                      "variables": [
                        "_CharacterCount",
                        "{[PassiveSkill01[1]]}"
                      ]
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}} + {{Player Team All}}"
                  },
                  "variableName": "_CharacterCount",
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
                          "operator": "Variables[0] (_CharacterCount) || Variables[1] ({[PassiveSkill01[1]]}) || MUL || RETURN",
                          "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})",
                          "constants": [],
                          "variables": [
                            "_CharacterCount",
                            "{[PassiveSkill01[1]]}"
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
      "stackData": [],
      "latentQueue": [
        "_ModifyActionDelay"
      ]
    }
  ]
}