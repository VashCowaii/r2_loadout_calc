const configAbility = {
  "fileName": "5013030_Monster_W5_Peacock_AbilityP01_Insert02_Part02",
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
      "variableName": "ColorOutInsertFlag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"973037691\">Enemy_W5_Peacock_AbilityP01_Colorful</a>[<span class=\"descriptionNumberColor\">Color</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047643861\">Enemy_W5_Peacock_AbilityP01_Colorful_Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1506777447\">Enemy_W5_Peacock_AbilityP01_Colorless</a>[<span class=\"descriptionNumberColor\">Colorless</span>]",
      "valuePerStack": {
        "MDF_ElationDamageExtraColorCount": {
          "operator": "Variables[0] ({[SkillP01[6]]}) || RETURN",
          "displayLines": "{[SkillP01[6]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[6]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}