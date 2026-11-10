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
                "displayLines": "{[Skill05[2]]}"
              },
              "baseChance": {
                "displayLines": "{[Skill05[1]]}"
              },
              "valuePerStack": {
                "MDF_AllDamageAddedRatio": {
                  "displayLines": "{[Skill02[2]]}"
                },
                "MDF_HealPercentage": {
                  "displayLines": "{[Skill02[3]]}"
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
              "value": {
                "displayLines": "(SleepCount + 1)"
              },
              "variableName": "SleepCount"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "SleepCount"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}