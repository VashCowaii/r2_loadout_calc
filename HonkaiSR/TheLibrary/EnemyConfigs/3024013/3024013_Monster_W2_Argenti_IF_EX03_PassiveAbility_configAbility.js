const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_IF_EX03_PassiveAbility",
  "skillTrigger": "SkillEX03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
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
          "modifier": "<a class=\"gModGreen\" id=\"806413908\">Enemy_W2_Argenti_IF_EX_ExtraEnhanceController</a>"
        }
      ]
    }
  ],
  "references": []
}