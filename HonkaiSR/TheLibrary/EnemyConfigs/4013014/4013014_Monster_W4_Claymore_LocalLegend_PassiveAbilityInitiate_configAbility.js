const configAbility = {
  "fileName": "4013014_Monster_W4_Claymore_LocalLegend_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"983561949\">W4_Claymore_LocalLegend_BattleScore1</a>",
      "casterAssign": "TargetSelf"
    },
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
      "name": "Set Enemy Phase"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426005,
        "compareType": "=",
        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill06[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill06[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill06[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill06[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill06[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill06[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill06[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill06[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill06[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill06[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill06[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill06[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill06[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill06[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill06[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill06[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill06[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill06[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Avatar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill07[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill07[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill07[0]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Avatar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
            "displayLines": "{[Skill05[4]]}",
            "constants": [],
            "variables": [
              "{[Skill05[4]]}"
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
            "ID": 4260010,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260011,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260040,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260041,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[5]]}"
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
            "ID": 4260012,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260042,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
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
            "ID": 4260013,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260043,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[5]]}"
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
            "ID": 4260014,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260044,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[5]]}"
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
            "ID": 4260015,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260045,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[5]]}"
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
            "ID": 4260016,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260046,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
            "displayLines": "{[Skill06[0]]}",
            "constants": [],
            "variables": [
              "{[Skill06[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
            "displayLines": "{[Skill06[2]]}",
            "constants": [],
            "variables": [
              "{[Skill06[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
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
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
            "displayLines": "{[Skill06[5]]}",
            "constants": [],
            "variables": [
              "{[Skill06[5]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-468473895\">Monster_W4_Claymore_LocalLegend_Status</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4013014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Enemy ID",
            "ID": 401301400,
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
          "modifier": "<a class=\"gModGreen\" id=\"-479922792\">Monster_W4_Claymore_LocalLegend_PartController_LockHP</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
        "displayLines": "{[Skill05[3]]}",
        "constants": [],
        "variables": [
          "{[Skill05[3]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID03) || RETURN",
            "displayLines": "SummonID03",
            "constants": [],
            "variables": [
              "SummonID03"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
        "displayLines": "{[Skill05[1]]}",
        "constants": [],
        "variables": [
          "{[Skill05[1]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID03) || RETURN",
            "displayLines": "SummonID03",
            "constants": [],
            "variables": [
              "SummonID03"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
        "displayLines": "{[Skill05[2]]}",
        "constants": [],
        "variables": [
          "{[Skill05[2]]}"
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
        "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
        "displayLines": "{[Skill05[0]]}",
        "constants": [],
        "variables": [
          "{[Skill05[0]]}"
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
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>"
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
  "references": []
}