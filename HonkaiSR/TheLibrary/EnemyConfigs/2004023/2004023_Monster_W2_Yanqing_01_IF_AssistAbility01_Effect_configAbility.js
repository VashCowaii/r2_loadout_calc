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
            "operator": "Variables[0] (UnusedUnderThisBase_10062) || RETURN",
            "displayLines": "UnusedUnderThisBase_10062",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_10062"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_10065) || RETURN",
            "displayLines": "UnusedUnderThisBase_10065",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_10065"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_10063) || RETURN",
              "displayLines": "UnusedUnderThisBase_10063",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_10063"
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
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}