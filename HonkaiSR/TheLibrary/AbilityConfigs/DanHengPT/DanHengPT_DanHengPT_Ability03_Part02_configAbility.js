const configAbility = {
  "fileName": "DanHengPT_DanHengPT_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DanHengPT_LongLing_Flag",
            "compareType": "=",
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "ReadTargetType",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  }
                },
                "Damage": {
                  "operator": "Variables[0] (3.3) || RETURN",
                  "displayLines": "3.3",
                  "constants": [],
                  "variables": [
                    3.3
                  ]
                },
                "Toughness": null,
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Additional DMG"
              },
              "overrideDamageOwner": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              },
              "overrideDamageStatSource": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_Passive_Count",
          "value": {
            "operator": "Variables[0] (DanHengPT_Passive_Count) || Variables[1] (2) || ADD || Variables[2] (2) || ADD || RETURN",
            "displayLines": "((DanHengPT_Passive_Count + 2) + 2)",
            "constants": [],
            "variables": [
              "DanHengPT_Passive_Count",
              2,
              2
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_Passive_Count",
          "value": {
            "operator": "Variables[0] (DanHengPT_Passive_Count) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(DanHengPT_Passive_Count + 2)",
            "constants": [],
            "variables": [
              "DanHengPT_Passive_Count",
              2
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Show Attack Time",
          "time": {
            "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
            "displayLines": "DanHengPT_Passive_Count",
            "constants": [],
            "variables": [
              "DanHengPT_Passive_Count"
            ]
          },
          "on": null,
          "show": true
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "DanHengPT_BoostEnergy",
      "valuePerStack": {
        "MDF_IsStack": 1
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DanHengPT_Attack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "DanHengPT_Ability03_AddShield"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}