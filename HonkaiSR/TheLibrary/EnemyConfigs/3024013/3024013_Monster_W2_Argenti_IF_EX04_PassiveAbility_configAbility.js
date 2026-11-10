const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_IF_EX04_PassiveAbility",
  "skillTrigger": "SkillEX04",
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
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1397396521\">Enemy_W2_Argenti_IF_EX_EnemyCount</a>",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "displayLines": "{[SkillEX04[0]]}"
            },
            "MDF_ShowValue2": {
              "displayLines": "{[SkillEX04[1]]}"
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}