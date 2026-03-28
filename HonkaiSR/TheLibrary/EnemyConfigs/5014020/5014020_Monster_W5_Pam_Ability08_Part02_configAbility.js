const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_31) || RETURN",
          "displayLines": "UnusedUnderThisBase_31",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_31"
          ]
        },
        "HitSplit": 0.6,
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_31) || RETURN",
          "displayLines": "UnusedUnderThisBase_31",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_31"
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
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__208) || RETURN",
        "displayLines": "ENEMIES_OBJECT_UNUSED__208",
        "constants": [],
        "variables": [
          "ENEMIES_OBJECT_UNUSED__208"
        ]
      },
      "adjustment": "Add"
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}