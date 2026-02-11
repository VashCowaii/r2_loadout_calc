const configAbility = {
  "fileName": "8024010_Monster_SW_Boss_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"484655132\">Monster_SW_Boss_Ability05Charge</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}