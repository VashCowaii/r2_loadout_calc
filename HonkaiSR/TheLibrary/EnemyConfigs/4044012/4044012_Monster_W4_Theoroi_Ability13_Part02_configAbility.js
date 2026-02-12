const configAbility = {
  "fileName": "4044012_Monster_W4_Theoroi_Ability13_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemies by Aggro OR Random(Exclude Memosprites)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
        }
      ]
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Zandar: Skill13 Target}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
          "displayLines": "{[Skill13[0]]}",
          "constants": [],
          "variables": [
            "{[Skill13[0]]}"
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
        "target": "{{Zandar: Skill13 Target}}"
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
        "target": "{{Zandar: Skill13 Target}}"
      },
      "set": 0
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Zandar: Skill13 Target}}"
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
              "target": "{{Zandar: Skill13 Target}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value1": "CurrentHP",
              "compareType": ">",
              "value2": 0
            }
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}