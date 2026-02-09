const configAbility = {
  "fileName": "-1285159557_CommonActiveAbility_Fire_Single_Part02",
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
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__48) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__48",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__48"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}