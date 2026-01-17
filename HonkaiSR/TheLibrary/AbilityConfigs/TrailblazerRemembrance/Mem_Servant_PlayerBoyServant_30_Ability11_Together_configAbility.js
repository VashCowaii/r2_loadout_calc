const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Together",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (Ability11_P2_DamagePercentage) || RETURN",
          "displayLines": "Ability11_P2_DamagePercentage",
          "constants": [],
          "variables": [
            "Ability11_P2_DamagePercentage"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (Skill11_Stance) || RETURN",
          "displayLines": "Skill11_Stance",
          "constants": [],
          "variables": [
            "Skill11_Stance"
          ]
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      },
      "attackType": "Basic ATK"
    },
    "Trigger: Attack End"
  ],
  "references": []
}