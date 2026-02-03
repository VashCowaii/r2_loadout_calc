const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_IF_PassiveAbility01_Insert_Part01",
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
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
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
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Constants[0] (8032010) || RETURN",
                    "displayLines": "8032010",
                    "constants": [
                      8032010
                    ],
                    "variables": []
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Constants[0] (8032010) || RETURN",
                    "displayLines": "8032010",
                    "constants": [
                      8032010
                    ],
                    "variables": []
                  },
                  "locationType": "Last"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_IF_BeControled"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_BeControled",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Insert_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Insert_Flag"
      ]
    }
  ]
}