const configAbility = {
  "fileName": "5023012_Monster_XP_Elite02_03_Deathrattle_LV2",
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
            "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[4]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID2",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[5]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID2",
              "summonLocation": "AfterCaster"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[4]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID2",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[5]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID2",
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
      "modifier": "<a class=\"gModGreen\" id=\"1061041544\">Monster_XP_Elite02_03_InitHP_LV2</a>",
      "valuePerStack": {
        "MDF_InitHP_LV2": {
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
          ]
        },
        "MDF_InitStance_LV2": {
          "operator": "Variables[0] ({[PassiveSkill01[8]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[8]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[8]]}"
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