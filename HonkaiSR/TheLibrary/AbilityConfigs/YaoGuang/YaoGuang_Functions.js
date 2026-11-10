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
              "displayLines": "0.9"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
              "displayLines": "0.3"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "Blast Toughness Value"
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
          "value": {
            "displayLines": "((_DeltaY / 1000) + 1.15)"
          },
          "variableName": "_DeltaY"
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_R"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((_DeltaY_R / 1000) + 1.3)"
          },
          "variableName": "_DeltaY_R"
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_L"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((_DeltaY_L / 1000) + 1.1)"
          },
          "variableName": "_DeltaY_L"
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
              "displayLines": "0.9"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
              "displayLines": "0.3"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "Blast Toughness Value"
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
          "value": {
            "displayLines": "((_DeltaY / 1000) + 1.15)"
          },
          "variableName": "_DeltaY"
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_R"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((_DeltaY_R / 1000) + 1.3)"
          },
          "variableName": "_DeltaY_R"
        },
        {
          "name": "Define Variable in Range",
          "min": -300,
          "max": 300,
          "variableName": "_DeltaY_L"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((_DeltaY_L / 1000) + 1.1)"
          },
          "variableName": "_DeltaY_L"
        }
      ]
    }
  ],
  "references": []
}