const configAbility = {
  "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate",
  "childAbilityList": [
    "4015010_Monster_W4_DawnsEye_PassiveAbility_Insert"
  ],
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
      "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}