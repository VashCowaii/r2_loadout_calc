const configAbility = {
  "fileName": "Sampo_Sampo_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(1 * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(1 * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.4) || MUL || RETURN",
          "displayLines": "(1 * 0.4)",
          "constants": [
            0.4
          ],
          "variables": [
            1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.4) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.4)",
          "constants": [
            0.4
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "40%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}