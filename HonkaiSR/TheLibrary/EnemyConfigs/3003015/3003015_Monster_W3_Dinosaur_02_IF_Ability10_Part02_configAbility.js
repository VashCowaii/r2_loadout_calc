const configAbility = {
  "fileName": "3003015_Monster_W3_Dinosaur_02_IF_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1371722317\">MModifier_Monster_W3_Theater_IF_DuringAbility</a>"
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1792784435\">Enemy_W3_Dinosaur_02_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
        "displayLines": "{[Skill09[2]]}",
        "constants": [],
        "variables": [
          "{[Skill09[2]]}"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
        "displayLines": "{[Skill09[0]]}",
        "constants": [],
        "variables": [
          "{[Skill09[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
          "displayLines": "{[Skill09[1]]}",
          "constants": [],
          "variables": [
            "{[Skill09[1]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1792784435\">Enemy_W3_Dinosaur_02_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
        "displayLines": "{[Skill09[2]]}",
        "constants": [],
        "variables": [
          "{[Skill09[2]]}"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
        "displayLines": "{[Skill09[0]]}",
        "constants": [],
        "variables": [
          "{[Skill09[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
          "displayLines": "{[Skill09[1]]}",
          "constants": [],
          "variables": [
            "{[Skill09[1]]}"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1371722317\">MModifier_Monster_W3_Theater_IF_DuringAbility</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}