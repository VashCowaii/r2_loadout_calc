const configAbility = {
  "fileName": "8022031_Monster_SW_Boss_01_IF_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "variableName": "Skill07ArmorCount",
          "modifierName": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
          "multiplier": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill07ArmorCount",
          "value": 0
        }
      ]
    },
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 0
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0,
            "conditions": {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                  "invertCondition": true
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                  "compareType": "<",
                  "value2": 3,
                  "valueType": "Layer"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Skill07ArmorCount) || RETURN",
        "displayLines": "Skill07ArmorCount",
        "constants": [],
        "variables": [
          "Skill07ArmorCount"
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Sting Bug: Lowest Enhancement Level}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
                  "displayLines": "UnusedUnderThisBase_27",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_27"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-937628746\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}