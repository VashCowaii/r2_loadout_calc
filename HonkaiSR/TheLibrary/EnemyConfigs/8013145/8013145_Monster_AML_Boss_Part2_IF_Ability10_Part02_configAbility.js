const configAbility = {
  "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part02",
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
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.5,
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
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
          "displayLines": "{[Skill10[0]]}",
          "constants": [],
          "variables": [
            "{[Skill10[0]]}"
          ]
        },
        "HitSplit": 0.5,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2003084081\">Standard_SpeedRatioUp</a>",
          "duration": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (SkillEX03_P2_SpeedAddedRatio) || RETURN",
              "displayLines": "SkillEX03_P2_SpeedAddedRatio",
              "constants": [],
              "variables": [
                "SkillEX03_P2_SpeedAddedRatio"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}