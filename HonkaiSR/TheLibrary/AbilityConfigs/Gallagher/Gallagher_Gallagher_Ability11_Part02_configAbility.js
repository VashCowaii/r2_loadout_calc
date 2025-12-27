const configAbility = {
  "fileName": "Gallagher_Gallagher_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (2.5) || RETURN",
          "displayLines": "2.5",
          "constants": [],
          "variables": [
            2.5
          ]
        },
        "HitSplit": 0.25,
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
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (2.5) || RETURN",
          "displayLines": "2.5",
          "constants": [],
          "variables": [
            2.5
          ]
        },
        "HitSplit": 0.15,
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
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (2.5) || RETURN",
          "displayLines": "2.5",
          "constants": [],
          "variables": [
            2.5
          ]
        },
        "HitSplit": 0.6,
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
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "MWGallagher_Ability11_AttackDownModifier[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
    },
    "Trigger: Ability End"
  ],
  "references": []
}