const configAbility = {
  "fileName": "3003043_Monster_W3_Figure_RLElite_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W3_Figure_RLElite_Ability07_Part01",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SleepCount",
            "compareType": ">=",
            "value2": 2,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_AllDamageAddedRatio": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                },
                "MDF_HealPercentage": {
                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                  "displayLines": "{[Skill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SleepCount",
              "value": {
                "operator": "Variables[0] (SleepCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(SleepCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "SleepCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SleepCount",
      "value": 0
    }
  ],
  "tag": "DOT",
  "references": []
}