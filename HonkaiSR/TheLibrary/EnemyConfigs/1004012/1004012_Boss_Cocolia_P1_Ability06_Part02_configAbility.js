const configAbility = {
  "fileName": "1004012_Boss_Cocolia_P1_Ability06_Part02",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_109) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(UnusedUnderThisBase_109 * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "UnusedUnderThisBase_109"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "20%"
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
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_109) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(UnusedUnderThisBase_109 * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "UnusedUnderThisBase_109"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_109) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_109 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "UnusedUnderThisBase_109"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}