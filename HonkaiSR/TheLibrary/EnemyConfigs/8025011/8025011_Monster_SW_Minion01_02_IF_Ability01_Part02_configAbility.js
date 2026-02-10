const configAbility = {
  "fileName": "8025011_Monster_SW_Minion01_02_IF_Ability01_Part02",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Trigger Modifier Event",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": null,
      "eventType": "DOT_Entangle",
      "value": null
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
          "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_Entangle",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_181) || RETURN",
            "displayLines": "UnusedUnderThisBase_181",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_181"
            ]
          },
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_180) || RETURN",
              "displayLines": "UnusedUnderThisBase_180",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_180"
              ]
            },
            "Modifier_Entangle_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_179) || RETURN",
              "displayLines": "UnusedUnderThisBase_179",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_179"
              ]
            },
            "Modifier_Entangle_DamageValue": 0
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-670541105\">Monster_SW_Minion01_02_Ability01Target</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}