const configAbility = {
  "fileName": "8022031_Monster_SW_Boss_01_IF_AbilityEX04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>"
        }
      ]
    }
  ],
  "references": []
}