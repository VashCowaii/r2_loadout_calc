const configAbility = {
  "fileName": "TheDahlia_Constance_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "Constance_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Wilt</span>]",
      "duration": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.18) || RETURN",
          "displayLines": "0.18",
          "constants": [],
          "variables": [
            0.18
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": "Caster"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)(Living)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
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
            "EnergyGainPercent": "100%"
          },
          "distributeEqually": true
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
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
            "EnergyGainPercent": "100%"
          },
          "distributeEqually": true
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}