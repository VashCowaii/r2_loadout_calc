const configAbility = {
  "fileName": "8022021_Monster_SW_Boss_01_IF_Ability05_Part02",
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
            "operator": "Variables[0] (UnusedUnderThisBase_192) || Variables[1] (UnusedUnderThisBase_178) || ADD || RETURN",
            "displayLines": "(UnusedUnderThisBase_192 + UnusedUnderThisBase_178)",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_192",
              "UnusedUnderThisBase_178"
            ]
          },
          "valuePerStack": {
            "MDF_DamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_176) || RETURN",
              "displayLines": "UnusedUnderThisBase_176",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_176"
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
            "operator": "Variables[0] (UnusedUnderThisBase_192) || RETURN",
            "displayLines": "UnusedUnderThisBase_192",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_192"
            ]
          },
          "valuePerStack": {
            "MDF_DamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_176) || RETURN",
              "displayLines": "UnusedUnderThisBase_176",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_176"
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