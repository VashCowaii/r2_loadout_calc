const configAbility = {
  "fileName": "4022011_Monster_W4_Harpy_LocalLegend_PassiveAbility",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"871785754\">Monster_W4_Harpy_Status</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426007,
        "compareType": "=",
        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_GlobalDelay",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_GlobalDelay",
          "value": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__871785754\">Monster_W4_Harpy_Status</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "Team_Row_Count",
                "compareType": "=",
                "value2": 1,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "row": 1
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