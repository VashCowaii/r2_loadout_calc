const configAbility = {
  "fileName": "Castorice_Castorice_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Consume",
      "consumeFrom": "CurrentHP",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}} - {{Caster's Memosprite}}"
      },
      "consumePercent": {
        "displayLines": "0.3"
      },
      "consumeFloor": 1,
      "attackType": "Unknown"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "0.5"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Quantum"
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "0.3"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Quantum"
        },
        "Tags": null,
        "attackType": "Skill"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}