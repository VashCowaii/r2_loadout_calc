const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_IF_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
              "delayPercent": 0,
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
              "modifier": "Monster_W2_Kafka_IF_SummonRotation"
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
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
              "modifier": "Monster_W2_Kafka_IF_SummonRotation"
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
        "modifier": "Monster_W2_Kafka_IF_SummonRotation"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_IF_BPAdd"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonRotation"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Monster_W2_Kafka_IF_SummonRotation"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Monster_W2_Kafka_IF_StartRotation"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Monster_W2_Kafka_IF_SummonRotation"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_BPAdd",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              },
              "adjustmentType": "+"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_BeControled",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_StartRotation",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}