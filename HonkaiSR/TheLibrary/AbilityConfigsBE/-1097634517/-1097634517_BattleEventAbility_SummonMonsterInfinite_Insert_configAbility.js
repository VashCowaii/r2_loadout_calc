const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_SummonMonsterInfinite_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
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
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Infinite Enemy Waves Remain"
          }
        ]
      },
      "Event": [
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
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (Value_NextMonsterId) || RETURN",
                "displayLines": "Value_NextMonsterId",
                "constants": [],
                "variables": [
                  "Value_NextMonsterId"
                ]
              },
              "locationType": "FormationRecord",
              "overrideActivityGroup": {
                "operator": "Variables[0] (Value_NextMonsterEliteGroup) || RETURN",
                "displayLines": "Value_NextMonsterEliteGroup",
                "constants": [],
                "variables": [
                  "Value_NextMonsterEliteGroup"
                ]
              },
              "slot": {
                "operator": "Variables[0] (Value_MonsterSlotKey) || RETURN",
                "displayLines": "Value_MonsterSlotKey",
                "constants": [],
                "variables": [
                  "Value_MonsterSlotKey"
                ]
              }
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
      "name": "Trigger Modifier Event",
      "target": {
        "name": "Target Name",
        "target": "{{Every Battle Entity}}"
      },
      "variableName": null,
      "eventType": "InfiniteRefresh",
      "value": null
    }
  ],
  "references": []
}