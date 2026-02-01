const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Amor of Destined Death"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PowerFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "W2_ArgentiTotem_BattleScore1"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[SkillP01[2]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[SkillP01[3]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || Constants[0] (0.7) || MUL || RETURN",
              "displayLines": "({[SkillP01[2]]} * 0.7)",
              "constants": [
                0.7
              ],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || Constants[0] (0.7) || MUL || RETURN",
              "displayLines": "({[SkillP01[3]]} * 0.7)",
              "constants": [
                0.7
              ],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCount",
        "compareType": "=",
        "value2": 0
      }
    }
  ],
  "references": []
}