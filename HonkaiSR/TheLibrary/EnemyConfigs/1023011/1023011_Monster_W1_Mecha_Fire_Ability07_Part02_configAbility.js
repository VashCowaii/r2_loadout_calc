const configAbility = {
  "fileName": "1023011_Monster_W1_Mecha_Fire_Ability07_Part02",
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
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill07[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill07[0]]}"
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
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill07[1]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill07[1]]}"
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
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill07[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill07[0]]}"
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
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill07[1]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill07[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}