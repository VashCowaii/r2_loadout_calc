const configAbility = {
  "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part02",
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
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
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