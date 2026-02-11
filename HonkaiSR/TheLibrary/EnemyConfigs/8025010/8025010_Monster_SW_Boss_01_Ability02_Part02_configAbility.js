const configAbility = {
  "fileName": "8025010_Monster_SW_Boss_01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "AbilityFlag",
      "value": 0
    },
    {
      "name": "Looped Event",
      "maxLoops": 7,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 1,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "HitSplit": 0.6,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
      "duration": 1,
      "baseChance": {
        "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
        "displayLines": "{[Skill02[3]]}",
        "constants": [],
        "variables": [
          "{[Skill02[3]]}"
        ]
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
          "displayLines": "{[Skill02[1]]}",
          "constants": [],
          "variables": [
            "{[Skill02[1]]}"
          ]
        },
        "Modifier_Entangle_DamagePercentage": {
          "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
          "displayLines": "{[Skill02[2]]}",
          "constants": [],
          "variables": [
            "{[Skill02[2]]}"
          ]
        },
        "Modifier_Entangle_DamageValue": 0
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
      "valuePerStack": {
        "MDF_SummonID": {
          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
          "displayLines": "SummonMonsterID01",
          "constants": [],
          "variables": [
            "SummonMonsterID01"
          ]
        },
        "MDF_SummonDelay": {
          "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
          "displayLines": "{[Skill02[4]]}",
          "constants": [],
          "variables": [
            "{[Skill02[4]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}