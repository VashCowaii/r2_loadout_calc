const configAbility = {
  "fileName": "1912336050_PeakBattle_Standard_Elation_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-869958192\">VS_PFM_CameraDarkTeamFar</a>"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1941769548\">ElationTime_PeakBattle_Standard_Mark</a>",
      "variable": "MDF_DamagePercentage",
      "target2": null,
      "variable2": "MDF_DamagePercentage",
      "scope": "ContextAbility"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "variableName": "MDF_EnemyCount"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_FirstHit",
      "value": 1
    },
    {
      "name": "Trigger Multiple Functions",
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-603009472\">T_GridFight_Equipment_Emblem_2012_TriggerHit</a>",
          "overrideParamEntity": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Sort by Physical Positioning"
              }
            ]
          },
          "baseDelay": {
            "operator": "Variables[0] (MDF_FirstHit) || Variables[1] (MDF_EnemyCount) || Constants[0] (1) || ADD || Constants[1] (2) || DIV || DIV || RETURN",
            "displayLines": "(MDF_FirstHit / ((MDF_EnemyCount + 1) / 2))",
            "constants": [
              1,
              2
            ],
            "variables": [
              "MDF_FirstHit",
              "MDF_EnemyCount"
            ]
          },
          "delayInterval": {
            "operator": "Variables[0] (MDF_FirstHit) || Variables[1] (MDF_EnemyCount) || Constants[0] (1) || ADD || Constants[1] (2) || DIV || DIV || RETURN",
            "displayLines": "(MDF_FirstHit / ((MDF_EnemyCount + 1) / 2))",
            "constants": [
              1,
              2
            ],
            "variables": [
              "MDF_FirstHit",
              "MDF_EnemyCount"
            ]
          },
          "useParamEntitiesForParallelCount": true
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_FirstHit",
      "value": 0
    },
    {
      "name": "Trigger Multiple Functions",
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-603009472\">T_GridFight_Equipment_Emblem_2012_TriggerHit</a>",
          "overrideParamEntity": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              }
            ]
          },
          "baseDelay": {
            "operator": "Variables[0] (MDF_FirstHit) || Variables[1] (MDF_EnemyCount) || Constants[0] (1) || ADD || Constants[1] (2) || DIV || DIV || RETURN",
            "displayLines": "(MDF_FirstHit / ((MDF_EnemyCount + 1) / 2))",
            "constants": [
              1,
              2
            ],
            "variables": [
              "MDF_FirstHit",
              "MDF_EnemyCount"
            ]
          },
          "delayInterval": {
            "operator": "Variables[0] (MDF_FirstHit) || Variables[1] (MDF_EnemyCount) || Constants[0] (1) || ADD || Constants[1] (2) || DIV || DIV || RETURN",
            "displayLines": "(MDF_FirstHit / ((MDF_EnemyCount + 1) / 2))",
            "constants": [
              1,
              2
            ],
            "variables": [
              "MDF_FirstHit",
              "MDF_EnemyCount"
            ]
          },
          "useParamEntitiesForParallelCount": true
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-603009472\">T_GridFight_Equipment_Emblem_2012_TriggerHit</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_FirstHit",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"664881127\">VS_PFM_CameraShakeSmall</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}