const configAbility = {
  "fileName": "1003012_Monster_W1_Soldier03_Ability06_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "{[Skill06[0]]}"
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
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "W1_Soldier03_00_AICounter",
      "value": 1
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 1
    }
  ],
  "references": []
}