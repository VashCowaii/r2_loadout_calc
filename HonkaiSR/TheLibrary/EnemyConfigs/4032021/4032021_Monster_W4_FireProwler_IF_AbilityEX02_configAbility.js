const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityEX02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2003647188\">Enemy_W4_FireProwler_IF_AbilityEX02</a>"
        }
      ]
    }
  ],
  "references": []
}