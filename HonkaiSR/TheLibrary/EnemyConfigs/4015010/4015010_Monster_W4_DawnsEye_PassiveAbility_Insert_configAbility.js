const configAbility = {
  "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "silent": true
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "assignState": "False"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Change Character Model"
        },
        {
          "name": "Change Battle Arena",
          "status": "Inactive",
          "arenaID": 2043101
        },
        {
          "name": "Change Battle Arena",
          "arenaID": 2043102
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"357250261\">Enemy_W4_DawnsEye_Part02Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
        },
        {
          "name": "Change Character Model"
        },
        {
          "name": "Change Battle Arena",
          "status": "Inactive",
          "arenaID": 2043102
        },
        {
          "name": "Change Battle Arena",
          "arenaID": 2043202
        },
        {
          "name": "Change Character UI",
          "characterName": "Decimator, Karma of Daythunder, Eye of Twilight",
          "icon": "Monster_4015020.png"
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
      "multiBase": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "<=",
        "value2": 2
      },
      "passed": [
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"357250261\">Enemy_W4_DawnsEye_Part02Effect</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
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
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            }
          ],
          "noTargetFound": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
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
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
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
          },
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            }
          ],
          "noTargetFound": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
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
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPartP3"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
            }
          ],
          "noTargetFound": [
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
              "name": "Set Enemy Phase",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "phase": 2
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
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
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPartP3"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
            }
          ],
          "noTargetFound": [
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
            },
            {
              "name": "Set Enemy Phase",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "phase": 2
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
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
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>",
          "valuePerStack": {
            "Weather_Thunder": 0,
            "Weather_ThunderChange": 0,
            "Weather_ThunderDamageLight": {
              "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
              "displayLines": "{[SkillP02[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[0]]}"
              ]
            },
            "Weather_ThunderDamageDark": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            },
            "Weather_ThunderCount": {
              "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
              "displayLines": "{[SkillP02[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[3]]}"
              ]
            },
            "Weather_ThunderChance": {
              "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
              "displayLines": "{[SkillP02[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[2]]}"
              ]
            },
            "Weather_ThunderKillCount": {
              "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
              "displayLines": "{[SkillP02[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[4]]}"
              ]
            },
            "Weather_Ability05MaxCount": {
              "operator": "Variables[0] ({[Skill05P2[1]]}) || RETURN",
              "displayLines": "{[Skill05P2[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05P2[1]]}"
              ]
            }
          }
        }
      ],
      "failed": [
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
          "name": "Define Custom Variable",
          "variableName": "PartEntity1_MonsterID",
          "value": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__160) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__160",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__160"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "PartEntity3_MonsterID",
          "value": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__159) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__159",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__159"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Head_R",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": -2,
          "linkHitByPart": true
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Head_L",
          "value": {
            "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
            "displayLines": "PartEntity3_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity3_MonsterID"
            ]
          },
          "offset": 2,
          "type": 3,
          "linkHitByPart": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20015,
          "variables": {
            "BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
              "valuePerStack": {
                "MDF_Speed": {
                  "operator": "Variables[0] (UnusedUnderThisBase_321) || RETURN",
                  "displayLines": "UnusedUnderThisBase_321",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_321"
                  ]
                }
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_322) || RETURN",
                "displayLines": "UnusedUnderThisBase_322",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_322"
                ]
              }
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "RagBattleEvent",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": {
                  "operator": "Variables[0] (UnusedUnderThisBase_323) || RETURN",
                  "displayLines": "UnusedUnderThisBase_323",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_323"
                  ]
                },
                "MDF_TotalDamageRatioCut": 0
              },
              "casterAssign": "CasterSelf"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
          "valuePerStack": {
            "MDF_TotalDamageRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_324) || RETURN",
              "displayLines": "UnusedUnderThisBase_324",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_324"
              ]
            },
            "MDF_TotalDamageRatioMin": {
              "operator": "Variables[0] (UnusedUnderThisBase_324) || RETURN",
              "displayLines": "UnusedUnderThisBase_324",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_324"
              ]
            },
            "MDF_TotalDamageRatioMax": {
              "operator": "Variables[0] (UnusedUnderThisBase_320) || RETURN",
              "displayLines": "UnusedUnderThisBase_320",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_320"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
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
          "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
          "valuePerStack": {
            "MDF_TotalDamageRatioAdd": {
              "operator": "Variables[0] (UnusedUnderThisBase_323) || RETURN",
              "displayLines": "UnusedUnderThisBase_323",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_323"
              ]
            },
            "MDF_TotalDamageRatioCut": 0
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1480712068\">W4_DawnsEye_BattleScore3</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
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
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": 0,
                "MDF_TotalDamageRatioCut": {
                  "operator": "Variables[0] (UnusedUnderThisBase_325) || RETURN",
                  "displayLines": "UnusedUnderThisBase_325",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_325"
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
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "MonsterType_W4_BossSummon",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 60029,
              "variables": {
                "BaseAttack": {
                  "operator": "Variables[0] (BaseAttack) || RETURN",
                  "displayLines": "BaseAttack",
                  "constants": [],
                  "variables": [
                    "BaseAttack"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": -200,
                  "isFixed": "* ERR"
                },
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "HealBattleEvent",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_326) || RETURN",
                    "displayLines": "UnusedUnderThisBase_326",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_326"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 60037,
              "variables": {
                "BaseAttack": {
                  "operator": "Variables[0] (BaseAttack) || RETURN",
                  "displayLines": "BaseAttack",
                  "constants": [],
                  "variables": [
                    "BaseAttack"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "HealBattleEvent",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
          "valuePerStack": {
            "MDF_DirtyHPBase": {
              "operator": "Variables[0] (UnusedUnderThisBase_327) || RETURN",
              "displayLines": "UnusedUnderThisBase_327",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_327"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
              ]
            },
            "MDF_DeathSPAdd": {
              "operator": "Variables[0] (UnusedUnderThisBase_328) || RETURN",
              "displayLines": "UnusedUnderThisBase_328",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_328"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_Monster_DawnEye_01_RognarokTrigger"
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W4_DawnsEye_01_Rognarok_Camera"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
          "valuePerStack": {
            "StanceDamage": {
              "operator": "Variables[0] (UnusedUnderThisBase_329) || RETURN",
              "displayLines": "UnusedUnderThisBase_329",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_329"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Dawnseye_AllPhase",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 2145,
        "compareType": "=",
        "characterName": null
      },
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
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "ChangePhase_InsertController",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
      },
      "passed": [
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "abilityName": "Monster_W4_DawnsEye_MainStoryOpeningPhase02",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "MonsterChangeState",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ]
    },
    {
      "name": "Reset Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Toughness Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}