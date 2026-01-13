const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "CasterCurrentHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": "Caster",
      "consumePercent": {
        "operator": "Variables[0] (0.1) || RETURN",
        "displayLines": "0.1",
        "constants": [],
        "variables": [
          0.1
        ]
      },
      "consumeFloor": 1,
      "attackType": "BPSkill"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CasterLostHPPercentage",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (0.9) || RETURN",
          "displayLines": "0.9",
          "constants": [],
          "variables": [
            0.9
          ]
        },
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CasterFinalLostHP",
          "value": {
            "operator": "Variables[0] (CasterMaxHP) || Variables[1] (0.9) || MUL || RETURN",
            "displayLines": "(CasterMaxHP * 0.9)",
            "constants": [],
            "variables": [
              "CasterMaxHP",
              0.9
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CasterFinalLostHP",
          "value": {
            "operator": "Variables[0] (CasterLostHP) || RETURN",
            "displayLines": "CasterLostHP",
            "constants": [],
            "variables": [
              "CasterLostHP"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1.5) || MUL || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "((CasterFinalLostHP * 1.5) * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "CasterFinalLostHP",
                1.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.3) || RETURN",
              "displayLines": "1.3",
              "constants": [],
              "variables": [
                1.3
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CasterLostHPPercentage",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (0.9) || RETURN",
          "displayLines": "0.9",
          "constants": [],
          "variables": [
            0.9
          ]
        },
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CasterFinalLostHP",
          "value": {
            "operator": "Variables[0] (CasterMaxHP) || Variables[1] (0.9) || MUL || RETURN",
            "displayLines": "(CasterMaxHP * 0.9)",
            "constants": [],
            "variables": [
              "CasterMaxHP",
              0.9
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CasterFinalLostHP",
          "value": {
            "operator": "Variables[0] (CasterLostHP) || RETURN",
            "displayLines": "CasterLostHP",
            "constants": [],
            "variables": [
              "CasterLostHP"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1.5) || MUL || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "((CasterFinalLostHP * 1.5) * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "CasterFinalLostHP",
                1.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.52) || RETURN",
              "displayLines": "0.52",
              "constants": [],
              "variables": [
                0.52
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.3) || RETURN",
              "displayLines": "1.3",
              "constants": [],
              "variables": [
                1.3
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.52) || RETURN",
              "displayLines": "0.52",
              "constants": [],
              "variables": [
                0.52
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}