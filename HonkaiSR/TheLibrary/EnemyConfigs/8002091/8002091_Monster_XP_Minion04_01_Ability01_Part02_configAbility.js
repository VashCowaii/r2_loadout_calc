const configAbility = {
  "fileName": "8002091_Monster_XP_Minion04_01_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"605655574\">Enemy_XP_Minion04_01_EscapingCharge01</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}