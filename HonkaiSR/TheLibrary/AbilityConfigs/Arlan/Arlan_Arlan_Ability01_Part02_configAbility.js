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
          "displayLines": "(1 * 0.3)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.3)"
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
          "displayLines": "(1 * 0.7)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.7)"
        },
        "Tags": null,
        "EnergyGainPercent": "70%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}