const configAbility = {
  "fileName": "1004028_Monster_W1_Gepard_RL_Ability08_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
      "duration": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}