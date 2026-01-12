const configAbility = {
  "fileName": "Gepard_Gepard_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (2) || Constants[0] (0.15) || MUL || RETURN",
          "displayLines": "(2 * 0.15)",
          "constants": [
            0.15
          ],
          "variables": [
            2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.15) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.15)",
          "constants": [
            0.15
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "15%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (2) || Constants[0] (0.35) || MUL || RETURN",
          "displayLines": "(2 * 0.35)",
          "constants": [
            0.35
          ],
          "variables": [
            2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.35) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.35)",
          "constants": [
            0.35
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "35%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (2) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(2 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
      "duration": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (0.65) || Variables[1] (MDF_Rank01_P1_Chance) || ADD || RETURN",
        "displayLines": "(0.65 + MDF_Rank01_P1_Chance)",
        "constants": [],
        "variables": [
          0.65,
          "MDF_Rank01_P1_Chance"
        ]
      },
      "valuePerStack": {
        "Modifier_Frozen_DamagePercentage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        }
      },
      "success": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Gepard_Eidolon2_Delay",
              "valuePerStack": {
                "MDF_SPD": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_Lifetime": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}