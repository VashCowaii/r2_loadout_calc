const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_05_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "In Aha-Instant"
      },
      "passed": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "AllDarkTeamDyingCharacter"
          },
          "dieNow": true
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        }
      ],
      "failed": [
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Constants[0] (201201010) || RETURN",
            "displayLines": "201201010",
            "constants": [
              201201010
            ],
            "variables": []
          },
          "locationType": "FormationRecord"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "In Aha-Instant"
      }
    }
  ],
  "references": []
}