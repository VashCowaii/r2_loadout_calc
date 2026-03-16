const configAbility = {
  "fileName": "4012061_Monster_W4_Nikadory_IF_AbilityEX03",
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
        "value2": 3
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1262027013\">Enemy_W4_Nikadory_IF_AbilityEX03</a>"
        }
      ]
    }
  ],
  "references": []
}