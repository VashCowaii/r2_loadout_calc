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
      "AttackScaling": {
        "DamageType": "Wind",
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(1 * 0.4)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.4)"
        },
        "Tags": null,
        "EnergyGainPercent": "40%"
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