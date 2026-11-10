const configAbility = {
  "fileName": "Castorice_Castorice_Ability01_Part02",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "0.5"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Quantum"
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "0.5"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.8,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Quantum"
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
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