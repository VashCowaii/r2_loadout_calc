const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            1,
            0.5
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            1,
            0.5
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}