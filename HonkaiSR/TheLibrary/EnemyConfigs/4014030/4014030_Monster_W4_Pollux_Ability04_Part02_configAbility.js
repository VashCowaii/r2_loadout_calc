const configAbility = {
  "fileName": "4014030_Monster_W4_Pollux_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
        "displayLines": "{[Skill04[1]]}",
        "constants": [],
        "variables": [
          "{[Skill04[1]]}"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}