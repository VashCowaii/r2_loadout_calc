const configAbility = {
  "fileName": "Arlan_Arlan_Ability01_Part02",
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
        "DamageType": "Thunder",
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
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.7) || MUL || RETURN",
          "displayLines": "(1 * 0.7)",
          "constants": [
            0.7
          ],
          "variables": [
            1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.7) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.7)",
          "constants": [
            0.7
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "70%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}