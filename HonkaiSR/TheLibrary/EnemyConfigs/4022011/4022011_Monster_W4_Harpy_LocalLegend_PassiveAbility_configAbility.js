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
        "compareType": "=",
        "stageID": "426007 (Greatsword Guardian: Vanguard Wallbreaker)"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[0]]}"
          },
          "variableName": "_GlobalDelay"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[Skill02[1]]}"
          },
          "variableName": "_GlobalDelay"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
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
      ]
    }
  ]
}