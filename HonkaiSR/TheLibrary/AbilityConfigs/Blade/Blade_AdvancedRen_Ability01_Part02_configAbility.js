const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability01_Part02",
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}