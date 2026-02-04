const configAbility = {
  "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part02",
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "({[Skill08[0]]} * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "{[Skill08[0]]}"
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (0.8) || MUL || RETURN",
          "displayLines": "({[Skill08[0]]} * 0.8)",
          "constants": [
            0.8
          ],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "80%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "duration": 2,
      "baseChance": 1,
      "stackLimit": {
        "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
        "displayLines": "{[Skill06[3]]}",
        "constants": [],
        "variables": [
          "{[Skill06[3]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Bleed_DamagePercentage": {
          "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
          "displayLines": "{[Skill06[1]]}",
          "constants": [],
          "variables": [
            "{[Skill06[1]]}"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
          "displayLines": "{[Skill06[3]]}",
          "constants": [],
          "variables": [
            "{[Skill06[3]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
        "displayLines": "{[Skill08[1]]}",
        "constants": [],
        "variables": [
          "{[Skill08[1]]}"
        ]
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}