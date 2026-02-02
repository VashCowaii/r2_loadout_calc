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
          "modifier": "Enemy_W2_Argenti_IF_EX_EnemyCount",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
              "displayLines": "{[SkillEX04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX04[0]]}"
              ]
            },
            "MDF_ShowValue2": {
              "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
              "displayLines": "{[SkillEX04[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX04[1]]}"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}