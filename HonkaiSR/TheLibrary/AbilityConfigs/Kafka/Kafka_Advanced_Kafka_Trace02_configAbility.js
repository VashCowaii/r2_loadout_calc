const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_Trace02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Advanced_Kafka_Tree02"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Kafka_Tree02",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": "Use Secondary Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": "Use Secondary Prior Target(s) Defined",
                          "team": "TeamDark"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_DOT_Electric"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}