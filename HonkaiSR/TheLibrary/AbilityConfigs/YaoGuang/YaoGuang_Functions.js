const configAbility = {
  "fileName": "YaoGuang_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-824591763\">1502_Ability01_Attack</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DeltaY",
          "value": {
            "operator": "Variables[0] ([object Object]) || Constants[0] (1000) || DIV || Constants[1] (1.15) || ADD || RETURN",
            "displayLines": "(([object Object] / 1000) + 1.15)",
            "constants": [
              1000,
              1.15
            ],
            "variables": [
              {}
            ]
          }
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_R"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DeltaY_R",
          "value": {
            "operator": "Variables[0] (_DeltaY_R) || Constants[0] (1000) || DIV || Constants[1] (1.3) || ADD || RETURN",
            "displayLines": "((_DeltaY_R / 1000) + 1.3)",
            "constants": [
              1000,
              1.3
            ],
            "variables": [
              "_DeltaY_R"
            ]
          }
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_L"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DeltaY_L",
          "value": {
            "operator": "Variables[0] (_DeltaY_L) || Constants[0] (1000) || DIV || Constants[1] (1.1) || ADD || RETURN",
            "displayLines": "((_DeltaY_L / 1000) + 1.1)",
            "constants": [
              1000,
              1.1
            ],
            "variables": [
              "_DeltaY_L"
            ]
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-4095277\">1502_Ability01_Attack_End</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DeltaY",
          "value": {
            "operator": "Variables[0] ([object Object]) || Constants[0] (1000) || DIV || Constants[1] (1.15) || ADD || RETURN",
            "displayLines": "(([object Object] / 1000) + 1.15)",
            "constants": [
              1000,
              1.15
            ],
            "variables": [
              {}
            ]
          }
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_R"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DeltaY_R",
          "value": {
            "operator": "Variables[0] (_DeltaY_R) || Constants[0] (1000) || DIV || Constants[1] (1.3) || ADD || RETURN",
            "displayLines": "((_DeltaY_R / 1000) + 1.3)",
            "constants": [
              1000,
              1.3
            ],
            "variables": [
              "_DeltaY_R"
            ]
          }
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_L"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DeltaY_L",
          "value": {
            "operator": "Variables[0] (_DeltaY_L) || Constants[0] (1000) || DIV || Constants[1] (1.1) || ADD || RETURN",
            "displayLines": "((_DeltaY_L / 1000) + 1.1)",
            "constants": [
              1000,
              1.1
            ],
            "variables": [
              "_DeltaY_L"
            ]
          }
        }
      ]
    }
  ],
  "references": []
}