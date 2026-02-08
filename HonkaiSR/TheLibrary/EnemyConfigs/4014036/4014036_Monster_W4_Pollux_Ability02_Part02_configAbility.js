const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "_PlayerNum",
      "livingTargets": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
              "operator": "Variables[0] (UnusedUnderThisBase_134) || RETURN",
              "displayLines": "UnusedUnderThisBase_134",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_134"
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
                  "operator": "Variables[0] ([object Object]) || Variables[1] (_PlayerNum) || DIV || Constants[0] (1) || Variables[2] (_DamageUpTemp) || ADD || MUL || RETURN",
                  "displayLines": "(([object Object] / _PlayerNum) * (1 + _DamageUpTemp))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    {},
                    "_PlayerNum",
                    "_DamageUpTemp"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_133) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_133)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_133"
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
                  "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_PlayerNum) || DIV || RETURN",
                  "displayLines": "({[Skill02[0]]} / _PlayerNum)",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}",
                    "_PlayerNum"
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
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