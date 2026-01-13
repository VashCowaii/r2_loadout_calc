const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_RatioAttack",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_Ratio_00_EnergyBar_Flag",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Dr_Ratio_Insert_Flag_Caster"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Enemies(All)",
      "modifier": "Dr_Ratio_Insert_Flag"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
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
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}