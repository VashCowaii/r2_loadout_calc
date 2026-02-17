const configAbility = {
  "fileName": "3002042_Monster_W3_Dinosaur_02_IF_Ability09_Part02",
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
        "operator": "Variables[0] (UnusedUnderThisBase_240) || RETURN",
        "displayLines": "UnusedUnderThisBase_240",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_240"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] (UnusedUnderThisBase_243) || RETURN",
        "displayLines": "UnusedUnderThisBase_243",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_243"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_242) || RETURN",
          "displayLines": "UnusedUnderThisBase_242",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_242"
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
            "operator": "Variables[0] (UnusedUnderThisBase_240) || RETURN",
            "displayLines": "UnusedUnderThisBase_240",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_240"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_241) || RETURN",
              "displayLines": "UnusedUnderThisBase_241",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_241"
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