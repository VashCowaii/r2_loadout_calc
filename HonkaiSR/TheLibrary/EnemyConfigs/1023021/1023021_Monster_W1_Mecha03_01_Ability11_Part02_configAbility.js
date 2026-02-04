const configAbility = {
  "fileName": "1023021_Monster_W1_Mecha03_01_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterEatCount",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": "=",
            "value2": 2
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterEatCount",
                "compareType": "=",
                "value2": 3
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMonsterEatCount",
                    "compareType": "=",
                    "value2": 4
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
          "displayLines": "{[Skill11[0]]}",
          "constants": [],
          "variables": [
            "{[Skill11[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterEatCount",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
              "displayLines": "{[Skill11[1]]}",
              "constants": [],
              "variables": [
                "{[Skill11[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterEatCount",
        "compareType": ">",
        "value2": 2
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill11[2]]}) || RETURN",
              "displayLines": "{[Skill11[2]]}",
              "constants": [],
              "variables": [
                "{[Skill11[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonMonsterEatCount",
        "compareType": ">",
        "value2": 3
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill11[3]]}) || RETURN",
              "displayLines": "{[Skill11[3]]}",
              "constants": [],
              "variables": [
                "{[Skill11[3]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Monster_W1_Mecha03_01_Frozen[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
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
        "MDF_IceResistanceRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
          "displayLines": "{[Skill06[1]]}",
          "constants": [],
          "variables": [
            "{[Skill06[1]]}"
          ]
        },
        "MDF_SpeedAddedDelta_PerLayer": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
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
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}