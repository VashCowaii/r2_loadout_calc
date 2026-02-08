const configAbility = {
  "fileName": "2022020_Monster_W2_Abomi02_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1875575825\">Monster_W2_Abomi02_Mark</a>[<span class=\"descriptionNumberColor\">Spur of Thunderwoe</span>]"
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "AttackCount",
      "context": "TargetEntity",
      "value": 1,
      "max": 2
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MarkRemainCount",
      "context": "TargetEntity",
      "value": 1,
      "max": 2
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1723051927\">Monster_W2_Abomi02_TargetList</a>[<span class=\"descriptionNumberColor\">Core Formation</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}