const configAbility = {
  "fileName": "1013020_WMonster_W1_Mecha_05_Ability07_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "counter": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}