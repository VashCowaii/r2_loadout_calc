const configAbility = {
  "fileName": "8002053_Monster_XP_Minion04_01_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"605655574\">Enemy_XP_Minion04_01_EscapingCharge01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"588877955\">Enemy_XP_Minion04_01_EscapingCharge02</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}