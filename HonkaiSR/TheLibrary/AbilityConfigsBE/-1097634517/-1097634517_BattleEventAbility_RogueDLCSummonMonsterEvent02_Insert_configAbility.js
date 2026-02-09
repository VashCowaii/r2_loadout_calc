const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCSummonMonsterEvent02_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "type": "Team Characters"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Insert_Flag"
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "variableName": "Value_SummonCount",
      "value": {
        "operator": "Variables[0] (Value_SummonCount) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(Value_SummonCount - 1)",
        "constants": [
          1
        ],
        "variables": [
          "Value_SummonCount"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonCount) || RETURN",
        "displayLines": "Monster_W1_CocoliaP2_00_SummonCount",
        "constants": [],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonCount"
        ]
      },
      "Event": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.6
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 1002040,
                  "locationType": "FormationRecord"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 1002050,
                  "locationType": "FormationRecord"
                }
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          }
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "SummonCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Value_SummonCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    }
  ],
  "references": []
}