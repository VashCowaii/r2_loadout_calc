const configAbility = {
  "fileName": "5023010_Monster_XP_Elite02_03_Deathrattle_LV1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Illwish Fission"
    },
    "Deleted bullshit",
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
      }
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<",
        "value2": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "value": 2,
          "variableName": "SummonMonsterNum"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 5
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "value": 1,
              "variableName": "SummonMonsterNum"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "value": 0,
              "variableName": "SummonMonsterNum"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "stateType": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[PassiveSkill01[1]]}"
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[PassiveSkill01[2]]}"
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "AfterCaster"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[PassiveSkill01[1]]}"
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[PassiveSkill01[2]]}"
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID1",
              "summonLocation": "BeforeCaster"
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
      "modifier": "<a class=\"gModGreen\" id=\"1111374401\">Monster_XP_Elite02_03_InitHP_LV1</a>",
      "valuePerStack": {
        "MDF_InitHP_LV1": {
          "displayLines": "{[PassiveSkill01[0]]}"
        },
        "MDF_InitStance_LV1": {
          "displayLines": "{[PassiveSkill01[7]]}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterNum",
        "compareType": ">=",
        "value2": 2,
        "contextScope": "TargetEntity"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterNum",
        "compareType": ">=",
        "value2": 2,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>"
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "displayLines": "{[PassiveSkill01[6]]}"
      },
      "adjustment": "Add"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}