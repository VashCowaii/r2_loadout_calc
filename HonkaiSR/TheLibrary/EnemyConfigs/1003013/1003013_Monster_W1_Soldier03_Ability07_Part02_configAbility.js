const configAbility = {
  "fileName": "1003013_Monster_W1_Soldier03_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1003011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Silvermane Lieutenant (Bug)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1398382688\">Monster_W1_Soldier03_HoldShield</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-387357924\">Enemy_W1_Soldier03_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}