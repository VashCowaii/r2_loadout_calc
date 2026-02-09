const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "DamageFlat": {
          "operator": "Variables[0] (MDF_DamageValue2) || RETURN",
          "displayLines": "MDF_DamageValue2",
          "constants": [],
          "variables": [
            "MDF_DamageValue2"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "DOT"
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}