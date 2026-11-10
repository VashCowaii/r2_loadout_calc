const configAbility = {
  "fileName": "Evernight_Evernight_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1307478561\">Evernight_UltraMode_Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1497424763\">function_Evernight_TryCreateServant</a>",
      "variables": {
        "DV_Partner_Count": {
          "displayLines": "_Partner_Count"
        },
        "DV_Delay": -1,
        "DV_HP_Ratio": 0
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "ability": "Evernight_Ability03_Servant",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.6"
        },
        "MDF_PropertyValue_2": {
          "displayLines": "0.3"
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
        "modifier": "<a class=\"gModGreen\" id=\"339150756\">Evernight_UltraMode_Energy</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"339150756\">Evernight_UltraMode_Energy</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "function": "Add",
          "value": {
            "displayLines": "S03_Duration"
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
          "modifier": "<a class=\"gModGreen\" id=\"339150756\">Evernight_UltraMode_Energy</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "counter": {
            "displayLines": "S03_Duration"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
      "scope": "TargetEntity",
      "value": {
        "displayLines": "AOE Toughness Value"
      },
      "variableName": "_Skill03_Stance"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
      "scope": "TargetEntity",
      "value": {
        "displayLines": "2"
      },
      "variableName": "_Skill03_P1_DamagePercentage"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
      "ability": "Evernight_Ability03_Servant_Damage",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1307478561\">Evernight_UltraMode_Effect</a>",
      "casterAssign": "TargetSelf"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1950285194\">Evernight_S03</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}