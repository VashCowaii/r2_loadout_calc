const configAbility = {
  "fileName": "1013012_WMonster_W1_Mecha_02_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Looped Event",
      "Event": [
        "Move to Next Listed Target",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ResistedFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
            "displayLines": "{[Skill04[2]]}",
            "constants": [],
            "variables": [
              "{[Skill04[2]]}"
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ResistedFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Not Effective"
                }
              ]
            }
          ],
          "resisted": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ResistedFlag",
              "value": 1
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}