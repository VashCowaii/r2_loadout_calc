const configAbility = {
  "fileName": "Saber_Saber_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_S03_Stance_Ratio",
      "value": {
        "operator": "Constants[0] (1) || Variables[0] (10) || DIV || RETURN",
        "displayLines": "(1 / 10)",
        "constants": [
          1
        ],
        "variables": [
          10
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (2.8) || RETURN",
          "displayLines": "2.8",
          "constants": [],
          "variables": [
            2.8
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
        "Tags": [
          "Ultimate"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (10) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(10 - 1)",
        "constants": [
          1
        ],
        "variables": [
          10
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP",
            "compareType": ">",
            "value2": 0
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.1) || RETURN",
                  "displayLines": "1.1",
                  "constants": [],
                  "variables": [
                    1.1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "_S03_Stance_Ratio"
                  ]
                },
                "Tags": [
                  "Ultimate"
                ]
              }
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.1) || RETURN",
                      "displayLines": "1.1",
                      "constants": [],
                      "variables": [
                        1.1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "_S03_Stance_Ratio"
                      ]
                    },
                    "Tags": [
                      "Ultimate"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "CurrentHP",
        "compareType": ">",
        "value2": 0
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.1) || RETURN",
              "displayLines": "1.1",
              "constants": [],
              "variables": [
                1.1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "_S03_Stance_Ratio"
              ]
            },
            "Tags": [
              "Ultimate"
            ]
          }
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.1) || RETURN",
                  "displayLines": "1.1",
                  "constants": [],
                  "variables": [
                    1.1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "_S03_Stance_Ratio"
                  ]
                },
                "Tags": [
                  "Ultimate"
                ]
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}