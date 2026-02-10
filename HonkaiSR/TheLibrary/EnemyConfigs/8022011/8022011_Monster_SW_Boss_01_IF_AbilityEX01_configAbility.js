const configAbility = {
  "fileName": "8022011_Monster_SW_Boss_01_IF_AbilityEX01",
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
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1984176167\">Enemy_SW_Boss_01_IF_AbilityEX01</a>"
        }
      ]
    }
  ],
  "references": []
}