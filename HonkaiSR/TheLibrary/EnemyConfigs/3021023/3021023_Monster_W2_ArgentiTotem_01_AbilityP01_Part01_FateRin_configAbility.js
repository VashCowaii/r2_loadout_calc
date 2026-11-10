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
          "modifier": "<a class=\"gModGreen\" id=\"1125306110\">Enemy_Argenti_DamageUP_FateRin</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "displayLines": "{[SkillP01[3]]}"
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "displayLines": "{[SkillP01[0]]}"
            }
          },
          "addStacksPerTrigger": {
            "displayLines": "{[SkillP01[2]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1125306110\">Enemy_Argenti_DamageUP_FateRin</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "displayLines": "{[SkillP01[3]]}"
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "displayLines": "{[SkillP01[0]]}"
            }
          },
          "addStacksPerTrigger": {
            "displayLines": "{[SkillP01[1]]}"
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