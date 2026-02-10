const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_IF_Ability04_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
      "counter": {
        "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
        "displayLines": "{[SkillP02[2]]}",
        "constants": [],
        "variables": [
          "{[SkillP02[2]]}"
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
    },
    "Trigger: Ability End"
  ],
  "references": []
}