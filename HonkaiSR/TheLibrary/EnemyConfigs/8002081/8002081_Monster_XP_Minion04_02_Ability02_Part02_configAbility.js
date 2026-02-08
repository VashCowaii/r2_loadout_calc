const configAbility = {
  "fileName": "8002081_Monster_XP_Minion04_02_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1500151389\">Enemy_XP_Minion04_02_EscapingCharge01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1449818532\">Enemy_XP_Minion04_02_EscapingCharge02</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}