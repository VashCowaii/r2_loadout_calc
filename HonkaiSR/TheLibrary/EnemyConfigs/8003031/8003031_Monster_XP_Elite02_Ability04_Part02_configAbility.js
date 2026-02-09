const configAbility = {
  "fileName": "8003031_Monster_XP_Elite02_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}