const configAbility = {
  "fileName": "4015012_Monster_W4_DawnsEye_PassiveAbilityInitiate_FateRin",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemy as Body Part",
      "partName": "Gun_L",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": 1,
      "linkHitByPart": true
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Gun_R",
      "value": {
        "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
        "displayLines": "PartEntity3_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity3_MonsterID"
        ]
      },
      "offset": -1,
      "type": 3,
      "linkHitByPart": true
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
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"956012826\">Enemy_W4_DawnsEye_PartController_FateRin</a>"
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
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 429302,
        "compareType": "NOT=",
        "characterName": null
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
            "displayLines": "{[SkillP03[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[0]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                "displayLines": "SummonedMonsterID",
                "constants": [],
                "variables": [
                  "SummonedMonsterID"
                ]
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
            "displayLines": "{[SkillP03[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[1]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                "displayLines": "SummonedMonsterID",
                "constants": [],
                "variables": [
                  "SummonedMonsterID"
                ]
              },
              "locationType": "Last"
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
          "target": "{{Level Entity}}"
        },
        "value1": "PauseLevelForCameraPerform",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
      "valuePerStack": {
        "MDF_SunnyBreakCold": {
          "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
          "displayLines": "{[SkillP01[3]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[3]]}"
          ]
        },
        "MDF_SunnyBreakColdRatio": {
          "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
          "displayLines": "{[SkillP01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[2]]}"
          ]
        }
      },
      "casterAssign": "CasterSelf"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "MonsterType_W4_BossPart"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
          "valuePerStack": {
            "MDF_SunnyBreakCold": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            }
          },
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
          "valuePerStack": {
            "MDF_SunnyBreakCold": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "MDF_SunnyBreakColdRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            }
          },
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 2145,
        "compareType": "=",
        "characterName": null
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
          "valuePerStack": {
            "Weather_SunnyHeatInitial": {
              "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
              "displayLines": "{[SkillP05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP05[1]]}"
              ]
            },
            "Weather_SunnyHeat": {
              "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
              "displayLines": "{[SkillP05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP05[1]]}"
              ]
            },
            "Weather_SunnyChange": 0,
            "Weather_HeatDamage": {
              "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
              "displayLines": "{[SkillP04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[0]]}"
              ]
            },
            "Weather_Delay": {
              "operator": "Variables[0] ({[Skill03P1[2]]}) || RETURN",
              "displayLines": "{[Skill03P1[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03P1[2]]}"
              ]
            },
            "MDF_Ability04SunnyHeatInit": {
              "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
              "displayLines": "{[Skill04P1[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04P1[0]]}"
              ]
            },
            "MDF_Ability04SunnyHeatColdDown": {
              "operator": "Variables[0] ({[Skill04P1[1]]}) || RETURN",
              "displayLines": "{[Skill04P1[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04P1[1]]}"
              ]
            },
            "MDF_HeatMin": {
              "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
              "displayLines": "{[Skill04P1[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04P1[3]]}"
              ]
            },
            "Weather_HeatAddPerAction": {
              "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
              "displayLines": "{[SkillP04[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[1]]}"
              ]
            },
            "Weather_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
              "displayLines": "{[SkillP04[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[2]]}"
              ]
            },
            "isDev": 1
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
          "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
          "valuePerStack": {
            "Weather_SunnyHeatInitial": {
              "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
              "displayLines": "{[SkillP05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP05[1]]}"
              ]
            },
            "Weather_SunnyHeat": {
              "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
              "displayLines": "{[SkillP05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP05[1]]}"
              ]
            },
            "Weather_SunnyChange": 0,
            "Weather_HeatDamage": {
              "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
              "displayLines": "{[SkillP04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[0]]}"
              ]
            },
            "Weather_Delay": {
              "operator": "Variables[0] ({[Skill03P1[2]]}) || RETURN",
              "displayLines": "{[Skill03P1[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03P1[2]]}"
              ]
            },
            "MDF_Ability04SunnyHeatInit": {
              "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
              "displayLines": "{[Skill04P1[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04P1[0]]}"
              ]
            },
            "MDF_Ability04SunnyHeatColdDown": {
              "operator": "Variables[0] ({[Skill04P1[1]]}) || RETURN",
              "displayLines": "{[Skill04P1[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04P1[1]]}"
              ]
            },
            "MDF_HeatMin": {
              "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
              "displayLines": "{[Skill04P1[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04P1[3]]}"
              ]
            },
            "Weather_HeatAddPerAction": {
              "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
              "displayLines": "{[SkillP04[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[1]]}"
              ]
            },
            "Weather_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
              "displayLines": "{[SkillP04[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[2]]}"
              ]
            },
            "isDev": 0
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseAttack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
      "valuePerStack": {
        "StanceDamage": {
          "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
          "displayLines": "{[SkillP01[5]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[5]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 2145,
        "compareType": "=",
        "characterName": null
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Delay",
          "multiAdd": 1
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "advanceType": "Delay",
          "multiAdd": 99
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1803162686\">Enemy_W4_DawnsEye_SoundController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-679796604\">Enemy_W4_DawnsEye_PartHPBarControl_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-670918916\">Enemy_W4_DawnsEye_RemoveMDF_FateRin</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__956012826\">Enemy_W4_DawnsEye_PartController_FateRin</a>",
      "counter": 1,
      "latentQueue": [
        "AIFlag"
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
              "variableName": "ChangePhase_InsertController"
            }
          ]
        },
        {
          "eventTrigger": "Waiting in Limbo [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Enemy ID",
                              "ID": {
                                "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                                "displayLines": "PartEntity1_MonsterID",
                                "constants": [],
                                "variables": [
                                  "PartEntity1_MonsterID"
                                ]
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null
                            },
                            {
                              "name": "Enemy ID",
                              "ID": {
                                "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                                "displayLines": "PartEntity3_MonsterID",
                                "constants": [],
                                "variables": [
                                  "PartEntity3_MonsterID"
                                ]
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": {
                            "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                            "displayLines": "SummonedMonsterID",
                            "constants": [],
                            "variables": [
                              "SummonedMonsterID"
                            ]
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": null
                        }
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
                "value1": "ChangePhase_InsertController",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhase_InsertController",
                      "value": 1
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-679796604\">Enemy_W4_DawnsEye_PartHPBarControl_FateRin</a>",
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ],
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
              },
              "passed": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1708281129\">Enemy_W4_DawnsEye_WeatherEnhanced_FateRin</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-670918916\">Enemy_W4_DawnsEye_RemoveMDF_FateRin</a>",
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
              },
              "passed": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-782819442\">Empty</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
              },
              "passed": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-782819442\">Empty</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}