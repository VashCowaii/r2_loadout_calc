const configAbility = {
  "fileName": "Evanescia_Evanescia_Ability02_Part02",
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
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.4,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "1.5"
        },
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null,
        "attackType": "Skill"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "ElationEchoPoint"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageElation": {
              "displayLines": "0.16"
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "Tags": null,
            "attackType": "Elation DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "displayLines": "10"
      },
      "adjustment": "Add"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}