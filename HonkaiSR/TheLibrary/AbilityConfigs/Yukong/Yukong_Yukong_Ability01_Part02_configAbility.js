const configAbility = {
  "fileName": "Yukong_Yukong_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "condition": {
          "name": "Has Modifier",
          "target": "Caster",
          "modifier": "Yukong_Passive_BonusCD"
        }
      },
      "passed": [
        {
          "name": "Set Enhanced-State",
          "type": "YukongV2"
        }
      ],
      "failed": [
        {
          "name": "Set Enhanced-State"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "condition": {
          "name": "Has Modifier",
          "target": "Caster",
          "modifier": "Yukong_Passive_BonusCD"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Passive_BonusCD",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_AddDamagePercentage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_StanceBreakAddedRatio": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Yukong_Ability01_ShootV2"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Yukong_Ability01_Shoot"
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Set Enhanced-State",
      "type": "YukongV2"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Yukong_Ability01_Preshow"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Yukong_Ability01_Shoot",
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
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
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Yukong_Ability01_ShootV2",
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                  "displayLines": "(1 + 0.8)",
                  "constants": [],
                  "variables": [
                    1,
                    0.8
                  ]
                },
                "HitSplit": 0.2,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (1) || ADD || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * (1 + 1))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ST Toughness Value",
                    1
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                  "displayLines": "(1 + 0.8)",
                  "constants": [],
                  "variables": [
                    1,
                    0.8
                  ]
                },
                "HitSplit": 0.2,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (1) || ADD || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * (1 + 1))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ST Toughness Value",
                    1
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                  "displayLines": "(1 + 0.8)",
                  "constants": [],
                  "variables": [
                    1,
                    0.8
                  ]
                },
                "HitSplit": 0.6,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (1) || ADD || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * (1 + 1))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ST Toughness Value",
                    1
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Yukong_Ability01_Preshow",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "Has Modifier",
          "target": "Caster",
          "modifier": "Yukong_Passive_BonusCD",
          "invertCondition": true
        },
        "multiplier": {
          "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
          "displayLines": "(1 + 1)",
          "constants": [
            1
          ],
          "variables": [
            1
          ]
        }
      }
    }
  ]
}