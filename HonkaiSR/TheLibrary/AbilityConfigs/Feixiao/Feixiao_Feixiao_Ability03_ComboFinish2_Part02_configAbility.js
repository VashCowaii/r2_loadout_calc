const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_ComboFinish2_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
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
          "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
          "displayLines": "Skill21_DamagePercentage",
          "constants": [],
          "variables": [
            "Skill21_DamagePercentage"
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
      },
      "attackType": "Ultimate"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_EnterFinish"
    }
  ],
  "references": []
}