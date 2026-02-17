const configAbility = {
  "fileName": "3004022_Monster_W1_Mecha01_03_IF_PassiveAbilityInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"566459392\">MModifier_Monster_W3_Theater_IF_FlopHandler_Mecha01</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlopSide",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Int",
            "paramName": "Side",
            "compareType": "=",
            "compareValue": 1
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
          "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1262827161\">MModifier_Monster_W3_TV_02_SideCheck</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1954613914\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmorController</a>",
      "valuePerStack": {
        "MDF_MinionsSuperArmor_AllDamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_120) || RETURN",
          "displayLines": "UnusedUnderThisBase_120",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_120"
          ]
        },
        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_121) || RETURN",
          "displayLines": "UnusedUnderThisBase_121",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_121"
          ]
        },
        "MDF_SetActionDelayValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_122) || RETURN",
          "displayLines": "UnusedUnderThisBase_122",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_122"
          ]
        }
      }
    }
  ],
  "references": []
}