const configAbility = {
  "fileName": "3021023_Monster_W2_ArgentiTotem_01_AbilityP01_Part01_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PowerFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1125306110\">Enemy_Argenti_DamageUP_FateRin</a>",
          "duration": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
            "displayLines": "{[SkillP01[2]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[2]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1125306110\">Enemy_Argenti_DamageUP_FateRin</a>",
          "duration": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
            "displayLines": "{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}