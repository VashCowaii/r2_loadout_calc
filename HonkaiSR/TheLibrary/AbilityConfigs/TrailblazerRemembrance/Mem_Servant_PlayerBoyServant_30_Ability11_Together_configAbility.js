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
          "displayLines": "Ability11_P2_DamagePercentage"
        },
        "Toughness": {
          "displayLines": "Skill11_Stance"
        },
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      },
      "attackType": "Basic ATK"
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}