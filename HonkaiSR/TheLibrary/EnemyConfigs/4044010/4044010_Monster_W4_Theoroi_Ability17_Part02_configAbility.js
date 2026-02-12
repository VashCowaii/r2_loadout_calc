const configAbility = {
  "fileName": "4044010_Monster_W4_Theoroi_Ability17_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill03[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill03[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
          }
        }
      ]
    }
  ],
  "references": []
}