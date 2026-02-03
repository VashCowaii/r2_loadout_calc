const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_Passive01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Kafka_BattleScore1"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "DisPelCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "OneMorePerTurn"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Kafka_Pursuit",
      "valuePerStack": {
        "MDF_Count": {
          "operator": "Variables[0] (UnusedUnderThisBase_16) || RETURN",
          "displayLines": "UnusedUnderThisBase_16",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_16"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Kafka_AIChange"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 200401010,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Stellaron Hunter: Kafka"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Character ID",
                "ID": 1001,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "March 7th"
              },
              {
                "name": "Character ID",
                "ID": 1101,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Bronya"
              },
              {
                "name": "Character ID",
                "ID": 1105,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Natasha"
              },
              {
                "name": "Character ID",
                "ID": 1203,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Luocha"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_TargetFilter"
            }
          ]
        }
      ]
    }
  ],
  "whenAdded": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_TargetFilter",
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_AIChange",
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_BattleScore1",
      "execute": [
        {
          "eventTrigger": "Modifier Cleansed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
                  },
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DisPelCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DisPelCount",
                    "compareType": ">=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Will of Steel",
                          "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
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