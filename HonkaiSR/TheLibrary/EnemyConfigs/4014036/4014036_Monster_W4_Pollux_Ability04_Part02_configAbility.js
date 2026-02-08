const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_Ability04_Part02",
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
        "operator": "Variables[0] (UnusedUnderThisBase_131) || RETURN",
        "displayLines": "UnusedUnderThisBase_131",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_131"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}