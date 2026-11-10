const configAbility = {
  "fileName": "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbilityInitiate",
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
      "name": "Set Enemy Phase"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "compareType": "=",
        "stageID": "426005 (Greatsword Guardian: Vanguard Wallbreaker)"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11163) || RETURN",
            "displayLines": "UnusedUnderThisBase_11163",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11163"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11164) || RETURN",
            "displayLines": "UnusedUnderThisBase_11164",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11164"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11120) || RETURN",
            "displayLines": "UnusedUnderThisBase_11120",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11120"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11165) || RETURN",
            "displayLines": "UnusedUnderThisBase_11165",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11165"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11130) || RETURN",
            "displayLines": "UnusedUnderThisBase_11130",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11130"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11166) || RETURN",
            "displayLines": "UnusedUnderThisBase_11166",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11166"
            ]
          },
          "variableName": "_Shooter_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_11125) || RETURN",
            "displayLines": "UnusedUnderThisBase_11125",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_11125"
            ]
          },
          "variableName": "_Avatar_LifeCount"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
            "displayLines": "{[Skill05[4]]}",
            "constants": [],
            "variables": [
              "{[Skill05[4]]}"
            ]
          },
          "variableName": "_Avatar_LifeCount"
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
            "stageID": "4260010 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260011 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260040 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260041 (Greatsword Guardian: Vanguard Wallbreaker)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[2]]}"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[3]]}"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[4]]}"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[5]]}"
            ]
          },
          "variableName": "_Shooter_LifeCount"
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
            "stageID": "4260012 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260042 (Greatsword Guardian: Vanguard Wallbreaker)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[0]]}"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[1]]}"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[2]]}"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[3]]}"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[4]]}"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[5]]}"
            ]
          },
          "variableName": "_Shooter_LifeCount"
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
            "stageID": "4260013 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260043 (Greatsword Guardian: Vanguard Wallbreaker)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[0]]}"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[1]]}"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[3]]}"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[5]]}"
            ]
          },
          "variableName": "_Shooter_LifeCount"
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
            "stageID": "4260014 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260044 (Greatsword Guardian: Vanguard Wallbreaker)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[0]]}"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[1]]}"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[2]]}"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[3]]}"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[4]]}"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill04[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[5]]}"
            ]
          },
          "variableName": "_Shooter_LifeCount"
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
            "stageID": "4260015 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260045 (Greatsword Guardian: Vanguard Wallbreaker)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[0]]}"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[1]]}"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[2]]}"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[3]]}"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[4]]}"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill05[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill05[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill05[5]]}"
            ]
          },
          "variableName": "_Shooter_LifeCount"
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
            "stageID": "4260016 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260046 (Greatsword Guardian: Vanguard Wallbreaker)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
            "displayLines": "{[Skill06[0]]}",
            "constants": [],
            "variables": [
              "{[Skill06[0]]}"
            ]
          },
          "variableName": "_Strongman_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          },
          "variableName": "_Scholar_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
            "displayLines": "{[Skill06[2]]}",
            "constants": [],
            "variables": [
              "{[Skill06[2]]}"
            ]
          },
          "variableName": "_Minion03_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "variableName": "_SelfP1_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
            "displayLines": "{[Skill06[4]]}",
            "constants": [],
            "variables": [
              "{[Skill06[4]]}"
            ]
          },
          "variableName": "_SelfP2_LifeCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
            "displayLines": "{[Skill06[5]]}",
            "constants": [],
            "variables": [
              "{[Skill06[5]]}"
            ]
          },
          "variableName": "_Shooter_LifeCount"
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
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}