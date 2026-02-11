const configAbility = {
  "fileName": "1004026_Monster_W1_Gepard_IF_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ReturnAttackCounter"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1831540372\">Enemy_W1_Gepard_IF_ListenBeingAttacked</a>",
      "duration": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}