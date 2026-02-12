const configAbility = {
  "fileName": "4012051_Monster_XP_Minion04_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"205528475\">Enemy_XP_Minion04_EscapingCharge01</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}