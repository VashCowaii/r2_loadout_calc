const configAbility = {
  "fileName": "Yanqing_Yanqing_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Yanqing_BonusTargetMark"
    },
    {
      "name": "Shot Fired",
      "caster": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 3,
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
              "operator": "Variables[0] (2.2) || RETURN",
              "displayLines": "2.2",
              "constants": [],
              "variables": [
                2.2
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (2.2) || RETURN",
          "displayLines": "2.2",
          "constants": [],
          "variables": [
            2.2
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}