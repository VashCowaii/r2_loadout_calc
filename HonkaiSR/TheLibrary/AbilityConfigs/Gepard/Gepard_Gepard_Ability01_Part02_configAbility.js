const configAbility = {
  "fileName": "Gepard_Gepard_Ability01_Part02",
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
          "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            1
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
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            1
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
    "Trigger: Ability End"
  ],
  "references": []
}