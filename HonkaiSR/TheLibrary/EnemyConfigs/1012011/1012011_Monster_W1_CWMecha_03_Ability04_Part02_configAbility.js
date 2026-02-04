const configAbility = {
  "fileName": "1012011_Monster_W1_CWMecha_03_Ability04_Part02",
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
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__28) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ENEMIES_OBJECT_UNUSED__28 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__28"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__29) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ENEMIES_OBJECT_UNUSED__29 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__29"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
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
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__28) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ENEMIES_OBJECT_UNUSED__28 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__28"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__29) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ENEMIES_OBJECT_UNUSED__29 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__29"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}