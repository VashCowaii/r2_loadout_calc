const configAbility = {
  "fileName": "4014013_Monster_W4_Nikadory_IF_AbilityEX02",
  "skillTrigger": "SkillEX02",
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
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1278804632\">Enemy_W4_Nikadory_IF_AbilityEX02</a>"
        }
      ]
    }
  ],
  "references": []
}