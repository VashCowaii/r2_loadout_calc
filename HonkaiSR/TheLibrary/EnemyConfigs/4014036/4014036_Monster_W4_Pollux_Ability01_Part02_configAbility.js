const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (UnusedUnderThisBase_127) || RETURN",
              "displayLines": "UnusedUnderThisBase_127",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_127"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_125) || Constants[0] (1) || Variables[1] (_DamageUpTemp) || ADD || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_125 * (1 + _DamageUpTemp))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "UnusedUnderThisBase_125",
                    "_DamageUpTemp"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_126) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_126)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_126"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
              "displayLines": "UnusedUnderThisBase_124",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_124"
              ]
            },
            "MDF_DamageHpAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
              "displayLines": "UnusedUnderThisBase_123",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_123"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}