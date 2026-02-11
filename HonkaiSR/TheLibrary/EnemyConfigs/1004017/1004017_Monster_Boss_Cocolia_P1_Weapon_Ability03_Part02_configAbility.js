const configAbility = {
  "fileName": "1004017_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
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
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED_1",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED_1"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Mark Entity For Immediate Death"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}