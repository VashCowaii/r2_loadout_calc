const configAbility = {
  "fileName": "4033021_Monster_W4_Claymore_01_LocalLegend_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkill01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-223570948\">W4_Claymore_01_LocalLegend_BattleScore1</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-23920605\">Enemy_W4_Claymore_01_LocalLegend_Status</a>"
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
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Add Battle Event",
      "teamName": "Neutral Team",
      "eventID": 20034,
      "variables": null,
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "SelectTarget",
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
          "modifier": "<a class=\"gModGreen\" id=\"1977157728\">Enemy_W4_Claymore_01_LocalLegend_PickUpMessage</a>"
        },
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_DelayAddedRatio",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill03[15]]}) || RETURN",
        "displayLines": "{[PassiveSkill03[15]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill03[15]]}"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426011,
        "compareType": "=",
        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
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
          "variableName": "_DelayRatio",
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
          "variableName": "_HealHPRatio",
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
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
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
            "ID": 4260100,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260101,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260120,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260121,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[13]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[13]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[13]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[14]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[14]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[14]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[12]]}) || RETURN",
            "displayLines": "{[Skill02[12]]}",
            "constants": [],
            "variables": [
              "{[Skill02[12]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[13]]}) || RETURN",
            "displayLines": "{[Skill02[13]]}",
            "constants": [],
            "variables": [
              "{[Skill02[13]]}"
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
            "ID": 4260102,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260122,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[11]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[11]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[11]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[12]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[12]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[12]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[10]]}) || RETURN",
            "displayLines": "{[Skill02[10]]}",
            "constants": [],
            "variables": [
              "{[Skill02[10]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[11]]}) || RETURN",
            "displayLines": "{[Skill02[11]]}",
            "constants": [],
            "variables": [
              "{[Skill02[11]]}"
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
            "ID": 4260103,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260123,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
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
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[9]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[9]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[9]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[10]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[10]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[10]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[8]]}) || RETURN",
            "displayLines": "{[Skill02[8]]}",
            "constants": [],
            "variables": [
              "{[Skill02[8]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[9]]}) || RETURN",
            "displayLines": "{[Skill02[9]]}",
            "constants": [],
            "variables": [
              "{[Skill02[9]]}"
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
            "ID": 4260104,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260124,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
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
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[7]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[7]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[7]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[8]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[8]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[8]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[6]]}) || RETURN",
            "displayLines": "{[Skill02[6]]}",
            "constants": [],
            "variables": [
              "{[Skill02[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[7]]}) || RETURN",
            "displayLines": "{[Skill02[7]]}",
            "constants": [],
            "variables": [
              "{[Skill02[7]]}"
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
            "ID": 4260105,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260125,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
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
          "variableName": "_DelayRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[5]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[6]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
            "displayLines": "{[Skill02[4]]}",
            "constants": [],
            "variables": [
              "{[Skill02[4]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
            "displayLines": "{[Skill02[5]]}",
            "constants": [],
            "variables": [
              "{[Skill02[5]]}"
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
            "ID": 4260106,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260126,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AttackDownRatio",
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
          "variableName": "_DelayRatio",
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
          "variableName": "_HealHPRatio",
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
          "variableName": "_DamageAddedRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DamageReduceRatio",
          "value": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
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
            "name": "Stage ID",
            "ID": 4260120,
            "compareType": ">=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260126,
            "compareType": "<=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1121280189\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
            "displayLines": "SummonList_ADF_3",
            "constants": [],
            "variables": [
              "SummonList_ADF_3"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}