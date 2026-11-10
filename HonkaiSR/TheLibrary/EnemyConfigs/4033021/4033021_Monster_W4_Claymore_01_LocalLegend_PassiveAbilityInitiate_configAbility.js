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
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "identifier": "SelectTarget"
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
      "value": {
        "displayLines": "{[PassiveSkill03[15]]}"
      },
      "variableName": "_DelayAddedRatio"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "compareType": "=",
        "stageID": "426011 (Synergy Duo: Bloodbound Dark Duelist)"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[0]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[0]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[2]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[0]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[1]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260100 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260101 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260120 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260121 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[6]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[13]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[14]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[12]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[13]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260102 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260122 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[5]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[11]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[12]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[10]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[11]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260103 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260123 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[4]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[9]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[10]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[8]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[9]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260104 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260124 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[3]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[7]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[8]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[6]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[7]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260105 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260125 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[2]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[5]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[6]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[4]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[5]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260106 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "4260126 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[1]]}"
          },
          "variableName": "_AttackDownRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[3]]}"
          },
          "variableName": "_DelayRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill03[4]]}"
          },
          "variableName": "_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[2]]}"
          },
          "variableName": "_DamageAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[3]]}"
          },
          "variableName": "_DamageReduceRatio"
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
            "stageID": "4260120 (Synergy Duo: Bloodbound Dark Duelist)"
          },
          {
            "name": "Stage ID",
            "compareType": "<=",
            "stageID": "4260126 (Synergy Duo: Bloodbound Dark Duelist)"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "InsertCheck"
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
            "displayLines": "SummonList_ADF_3"
          },
          "locationType": "BeforeCaster"
        }
      ]
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