const configAbility = {
  "fileName": "3014020_Monster_W3_Death_Ability04_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}