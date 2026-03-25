const configAbility = {
  "fileName": "5013031_Monster_W5_Peacock_AbilityP01_Insert01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ColorInInsertFlag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047643861\">Enemy_W5_Peacock_AbilityP01_Colorful_Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]",
      "valuePerStack": {
        "MDF_ColorDiffDamageAddedRatio": {
          "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
          "displayLines": "{[SkillP01[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2014742101\">Enemy_W5_Peacock_Endurance</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ]
    }
  ],
  "references": []
}