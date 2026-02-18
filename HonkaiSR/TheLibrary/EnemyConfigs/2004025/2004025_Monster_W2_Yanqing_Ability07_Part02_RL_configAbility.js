const configAbility = {
  "fileName": "2004025_Monster_W2_Yanqing_Ability07_Part02_RL",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}