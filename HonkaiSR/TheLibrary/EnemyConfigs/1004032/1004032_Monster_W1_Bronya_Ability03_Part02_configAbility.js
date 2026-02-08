const configAbility = {
  "fileName": "1004032_Monster_W1_Bronya_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "value1": "Bronya_SummonMode",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Constants[0] (1002040) || RETURN",
                "displayLines": "1002040",
                "constants": [
                  1002040
                ],
                "variables": []
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Constants[0] (1002050) || RETURN",
                "displayLines": "1002050",
                "constants": [
                  1002050
                ],
                "variables": []
              },
              "locationType": "Last"
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
          "variableName": "Bronya_SummonMode",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Bronya_SummonCounter",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
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
                    "operator": "Constants[0] (1002040) || RETURN",
                    "displayLines": "1002040",
                    "constants": [
                      1002040
                    ],
                    "variables": []
                  },
                  "locationType": "First"
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
              "variableName": "Bronya_SummonCounter",
              "value": 1
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
                    "operator": "Constants[0] (1002050) || RETURN",
                    "displayLines": "1002050",
                    "constants": [
                      1002050
                    ],
                    "variables": []
                  },
                  "locationType": "Last"
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
              "variableName": "Bronya_SummonCounter"
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
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}