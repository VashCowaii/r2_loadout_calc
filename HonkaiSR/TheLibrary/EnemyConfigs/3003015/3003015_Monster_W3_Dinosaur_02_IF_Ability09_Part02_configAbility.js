const configAbility = {
  "fileName": "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-720232452\">MModifier_Monster_W3_Theater_RLBoss_StanceDamage</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
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
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-396183840\">Enemy_W3_Dinosaur_02_IF_StanceBreakRatioUp</a>[<span class=\"descriptionNumberColor\">Weakness Break Efficiency Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
            "displayLines": "{[Skill09[2]]}",
            "constants": [],
            "variables": [
              "{[Skill09[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill09[3]]}) || RETURN",
              "displayLines": "{[Skill09[3]]}",
              "constants": [],
              "variables": [
                "{[Skill09[3]]}"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}