const configAbility = {
  "fileName": "5023012_Monster_XP_Elite02_03_Deathrattle_LV1",
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
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "stayInTeam": false
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
          "variableName": "SummonMonsterNum",
          "value": 2
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
              "variableName": "SummonMonsterNum",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "SummonMonsterNum",
              "value": 0
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
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
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
            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[2]]}"
            ]
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
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
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
            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[2]]}"
            ]
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
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        },
        "MDF_InitStance_LV1": {
          "operator": "Variables[0] ({[PassiveSkill01[7]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[7]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[7]]}"
          ]
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
        "operator": "Variables[0] ({[PassiveSkill01[6]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[6]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[6]]}"
        ]
      },
      "adjustment": "Add"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}