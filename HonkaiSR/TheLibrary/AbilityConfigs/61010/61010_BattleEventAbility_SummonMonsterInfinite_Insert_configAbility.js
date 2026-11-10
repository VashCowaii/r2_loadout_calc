const configAbility = {
  "fileName": "61010_BattleEventAbility_SummonMonsterInfinite_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "In Aha-Instant",
      "passed": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Dying Enemies}}"
          },
          "dieNow": true
        }
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Insert_Flag",
      "scope": "TargetEntity"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          "Infinite Enemy Waves Remain"
        ]
      },
      "execute": [
        {
          "name": "Update Next Wave Enemy",
          "context": "ContextAbility",
          "enemyID": "Value_NextMonsterId",
          "activityGroupScaling": "Value_NextMonsterEliteGroup",
          "slot": "Value_MonsterSlotKey"
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "#BattleEvent_P1_ADF"
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "Value_NextMonsterId"
              },
              "locationType": "FormationRecord",
              "overrideActivityGroup": {
                "displayLines": "Value_NextMonsterEliteGroup"
              },
              "slot": {
                "displayLines": "Value_MonsterSlotKey"
              }
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "popUpText": "Enemy Reinforcement"
        }
      ]
    },
    {
      "name": "Trigger Modifier Event",
      "target": {
        "name": "Target Name",
        "target": "{{Every Battle Entity}}"
      },
      "variableName": null,
      "eventType": "InfiniteRefresh",
      "value": null
    },
    {
      "name": "IF",
      "conditions": "In Aha-Instant"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}