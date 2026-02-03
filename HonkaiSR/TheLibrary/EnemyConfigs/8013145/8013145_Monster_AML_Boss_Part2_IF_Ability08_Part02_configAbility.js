const configAbility = {
  "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Effect"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Frensnel"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement",
      "addStacksPerTrigger": 1
    },
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "healPercent": {
            "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
            "displayLines": "SkillEX03_P3_HealHPRatio",
            "constants": [],
            "variables": [
              "SkillEX03_P3_HealHPRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}