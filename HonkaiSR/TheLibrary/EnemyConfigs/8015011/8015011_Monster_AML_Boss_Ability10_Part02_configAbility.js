const configAbility = {
  "fileName": "8015011_Monster_AML_Boss_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Looped Event",
      "maxLoops": 2,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Constants[0] (1) || Constants[1] (0.25) || MUL || RETURN",
              "displayLines": "(1 * 0.25)",
              "constants": [
                1,
                0.25
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Constants[0] (1) || Constants[1] (0.25) || MUL || RETURN",
              "displayLines": "(1 * 0.25)",
              "constants": [
                1,
                0.25
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}