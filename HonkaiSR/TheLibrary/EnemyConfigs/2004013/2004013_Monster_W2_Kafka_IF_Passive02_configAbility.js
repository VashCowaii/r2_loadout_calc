const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_IF_Passive02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Monster_W2_Kafka_IF_Suicide"
    }
  ],
  "whenAdded": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Suicide",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 9004074,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Entity Exit Stage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "reason": "Vanish",
                  "living": false
                },
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}