const configAbility = {
  "fileName": "4012061_Monster_W4_Nikadory_IF_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_315) || RETURN",
          "displayLines": "UnusedUnderThisBase_315",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_315"
          ]
        },
        "HitSplit": 0.4,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_315) || RETURN",
          "displayLines": "UnusedUnderThisBase_315",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_315"
          ]
        },
        "HitSplit": 0.6,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "advanceType": "Set",
      "multiAdd": "UnusedUnderThisBase_549"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}