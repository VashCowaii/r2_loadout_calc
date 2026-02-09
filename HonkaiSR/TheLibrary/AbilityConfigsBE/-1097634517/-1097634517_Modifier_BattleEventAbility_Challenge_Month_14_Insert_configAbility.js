const configAbility = {
  "fileName": "-1097634517_Modifier_BattleEventAbility_Challenge_Month_14_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
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