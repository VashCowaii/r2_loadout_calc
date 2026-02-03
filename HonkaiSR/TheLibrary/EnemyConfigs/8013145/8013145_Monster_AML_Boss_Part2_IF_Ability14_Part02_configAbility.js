const configAbility = {
  "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part02",
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        },
        "HitSplit": 0.16,
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
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        },
        "HitSplit": 0.16,
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        },
        "HitSplit": 0.16,
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
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        },
        "HitSplit": 0.16,
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        },
        "HitSplit": 0.18,
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
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        },
        "HitSplit": 0.18,
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
        "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Standard_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (SkillEX03_P1_AttackAddedRatio) || RETURN",
              "displayLines": "SkillEX03_P1_AttackAddedRatio",
              "constants": [],
              "variables": [
                "SkillEX03_P1_AttackAddedRatio"
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