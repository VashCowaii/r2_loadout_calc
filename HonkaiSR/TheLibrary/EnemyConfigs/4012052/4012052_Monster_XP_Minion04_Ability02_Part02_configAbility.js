const configAbility = {
  "fileName": "4012052_Monster_XP_Minion04_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"205528475\">Enemy_XP_Minion04_EscapingCharge01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"222306094\">Enemy_XP_Minion04_EscapingCharge02</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}