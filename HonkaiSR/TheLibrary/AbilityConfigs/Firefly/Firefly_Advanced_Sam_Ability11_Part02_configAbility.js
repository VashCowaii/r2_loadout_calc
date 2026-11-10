const configAbility = {
  "fileName": "Firefly_Advanced_Sam_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.2"
        }
      }
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": {
        "displayLines": "0.2"
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "2"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "2"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "2"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "2"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "2"
        },
        "HitSplit": 0.4,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}