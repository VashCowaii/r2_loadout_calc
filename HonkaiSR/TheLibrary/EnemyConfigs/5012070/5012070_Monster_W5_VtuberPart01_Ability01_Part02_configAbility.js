const configAbility = {
  "fileName": "5012070_Monster_W5_VtuberPart01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
          "variable": "MDF_InsertTrigger",
          "target2": null,
          "variable2": "MDF_InsertTrigger"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (MDF_InsertTrigger) || RETURN",
            "displayLines": "MDF_InsertTrigger",
            "constants": [],
            "variables": [
              "MDF_InsertTrigger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1989512262\">Enemy_W5_VtuberPart01_Charge_Insert</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}