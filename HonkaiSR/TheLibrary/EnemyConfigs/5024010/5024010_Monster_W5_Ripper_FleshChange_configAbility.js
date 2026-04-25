const configAbility = {
  "fileName": "5024010_Monster_W5_Ripper_FleshChange",
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
        "modifier": "<a class=\"gModGreen\" id=\"-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ripper: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-100211662\">Monster_W5_Ripper_AddFleshImmediately</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}