const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Fighting Will"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_Trace03_DamageAddedRatio"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (1.25) || RETURN",
          "displayLines": "1.25",
          "constants": [],
          "variables": [
            1.25
          ]
        },
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
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Fighting Will"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_Trace03_DamageAddedRatio"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (1.25) || RETURN",
          "displayLines": "1.25",
          "constants": [],
          "variables": [
            1.25
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}