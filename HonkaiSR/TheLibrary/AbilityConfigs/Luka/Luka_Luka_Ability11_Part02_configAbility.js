const configAbility = {
  "fileName": "Luka_Luka_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
            "flagName": "STAT_DOT_Bleed"
          },
          {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "stackLimit": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "BulletCount",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Constants[0] (2) || INVERT || RETURN",
        "displayLines": "-2",
        "constants": [
          2
        ],
        "variables": []
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "PunchCount",
      "value": 3
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Crush Fighting Will"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "_PointB3_Trigger",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_PointB3_FirstPunch",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "PunchCount",
              "value": {
                "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(PunchCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "PunchCount"
                ]
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "PunchCount",
          "value": {
            "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(PunchCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "PunchCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (BulletCount) || RETURN",
        "displayLines": "BulletCount",
        "constants": [],
        "variables": [
          "BulletCount"
        ]
      },
      "maximum": {
        "operator": "Constants[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [
          4
        ],
        "variables": []
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || Constants[1] (0.4) || MUL || RETURN",
          "displayLines": "((ST Toughness Value * 0.5) * 0.4)",
          "constants": [
            0.5,
            0.4
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "HitCount",
      "value": 1
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "PunchCount",
            "compareType": ">",
            "value2": 0
          }
        ]
      },
      "Event": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crush Fighting Will"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_PointB3_Trigger",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_PointB3_FirstPunch",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PointB3_Trigger",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PunchCount",
                  "value": {
                    "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(PunchCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "PunchCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PointB3_Trigger",
                  "value": 0
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "PunchCount",
              "value": {
                "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(PunchCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "PunchCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_PointB3_Trigger",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextAbility"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_PointB3_FirstPunch",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PointB3_FirstPunch",
                  "value": 0
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || Constants[1] (0.3) || MUL || RETURN",
                      "displayLines": "((ST Toughness Value * 0.5) * 0.3)",
                      "constants": [
                        0.5,
                        0.3
                      ],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "HitCount",
          "value": {
            "operator": "Variables[0] (HitCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(HitCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "HitCount"
            ]
          }
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (BulletCount) || RETURN",
        "displayLines": "BulletCount",
        "constants": [],
        "variables": [
          "BulletCount"
        ]
      },
      "maximum": {
        "operator": "Constants[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [
          4
        ],
        "variables": []
      },
      "assignState": "True",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "STAT_DOT_Bleed"
      },
      "passed": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Bleed",
          "value": {
            "operator": "Variables[0] (0.85) || RETURN",
            "displayLines": "0.85",
            "constants": [],
            "variables": [
              0.85
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "failed": [
            "Trigger: Attack End"
          ]
        }
      ],
      "failed": [
        "Trigger: Attack End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Bleed"
          }
        ]
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (HitCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(HitCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "HitCount"
            ]
          },
          "Event": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Bleed",
              "value": {
                "operator": "Variables[0] (0.08) || RETURN",
                "displayLines": "0.08",
                "constants": [],
                "variables": [
                  0.08
                ]
              }
            }
          ]
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Bleed",
          "value": {
            "operator": "Variables[0] (0.08) || RETURN",
            "displayLines": "0.08",
            "constants": [],
            "variables": [
              0.08
            ]
          }
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BulletCount",
        "compareType": "<",
        "value2": 2
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Luka_ChangeAttack"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}