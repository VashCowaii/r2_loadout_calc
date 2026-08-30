const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "ElationEchoPoint"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageElation": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "Tags": null,
            "attackType": "Elation DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1660848210\">AventurineW_Ability03_SpeedRatioUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "duration": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        }
      }
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (6) || RETURN",
        "displayLines": "6",
        "constants": [],
        "variables": [
          6
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
      "stackLimit": {
        "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
        "displayLines": "_MaxEnergyPoint",
        "constants": [],
        "variables": [
          "_MaxEnergyPoint"
        ]
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (8) || RETURN",
        "displayLines": "8",
        "constants": [],
        "variables": [
          8
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}