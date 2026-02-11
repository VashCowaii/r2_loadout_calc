const configAbility = {
  "fileName": "8003022_Monster_XP_Elite01_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]",
          "valuePerStack": {
            "Modifier_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]",
          "valuePerStack": {
            "Modifier_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}