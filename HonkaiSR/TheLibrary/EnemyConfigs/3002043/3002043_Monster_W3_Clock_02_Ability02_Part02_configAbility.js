const configAbility = {
  "fileName": "3002043_Monster_W3_Clock_02_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "popUpText": "Action Advanced"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2064893309\">Enemy_W3_Clock_Ability01_Charge</a>[<span class=\"descriptionNumberColor\">Set Alarm</span>]"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "advanceType": "Set",
      "multiAdd": "(0 - {[Skill02[0]]})"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}