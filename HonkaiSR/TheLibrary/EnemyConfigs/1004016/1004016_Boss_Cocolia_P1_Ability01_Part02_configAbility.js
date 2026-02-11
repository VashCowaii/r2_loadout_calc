const configAbility = {
  "fileName": "1004016_Boss_Cocolia_P1_Ability01_Part02",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ENEMIES_OBJECT_UNUSED_1 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ENEMIES_OBJECT_UNUSED_1"
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ENEMIES_OBJECT_UNUSED_1 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ENEMIES_OBJECT_UNUSED_1"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}