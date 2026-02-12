const configAbility = {
  "fileName": "4044012_Monster_W4_Theoroi_Ability03_Part02",
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
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2105282223\">Monster_W4_Theoroi_Reversion</a>[<span class=\"descriptionNumberColor\">Antinomy</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_CostHPRatio": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "set": 0
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "flagNames": []
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP",
            "compareType": ">",
            "value2": 0
          }
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}