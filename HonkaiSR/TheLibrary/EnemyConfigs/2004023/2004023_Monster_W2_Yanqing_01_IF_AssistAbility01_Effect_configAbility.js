const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Effect",
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
      "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
      },
      "passed": [
        {
          "name": "Shot Fired"
        }
      ],
      "failed": [
        {
          "name": "Shot Fired"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_295) || RETURN",
            "displayLines": "UnusedUnderThisBase_295",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_295"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_296) || RETURN",
            "displayLines": "UnusedUnderThisBase_296",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_296"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_294) || RETURN",
              "displayLines": "UnusedUnderThisBase_294",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_294"
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
      "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
        }
      ]
    }
  ],
  "references": []
}