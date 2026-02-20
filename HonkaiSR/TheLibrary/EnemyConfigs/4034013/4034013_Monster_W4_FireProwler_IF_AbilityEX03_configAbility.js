const configAbility = {
  "fileName": "4034013_Monster_W4_FireProwler_IF_AbilityEX03",
  "skillTrigger": "SkillEX03",
  "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1986869569\">Enemy_W4_FireProwler_IF_AbilityEX03</a>"
        }
      ]
    }
  ],
  "references": []
}