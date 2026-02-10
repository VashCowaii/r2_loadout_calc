const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_IF_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
          "counter": {
            "operator": "Variables[0] ({[SkillP02[3]]}) || Variables[1] ({[SkillEX04[1]]}) || ADD || RETURN",
            "displayLines": "({[SkillP02[3]]} + {[SkillEX04[1]]})",
            "constants": [],
            "variables": [
              "{[SkillP02[3]]}",
              "{[SkillEX04[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageReduce": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
          "counter": {
            "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
            "displayLines": "{[SkillP02[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP02[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageReduce": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}