const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "TMP_Round",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TMP_Gem_Cost",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TMP_Shadow_Gem_Cost",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TMP_Gem_Num",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TMP_Shadow_Gem_Num",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "TMP_Flag",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnergyBar_GemNum_Shadow",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Shadow_Gem_Num",
          "value": {
            "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
            "displayLines": "EnergyBar_GemNum_Shadow",
            "constants": [],
            "variables": [
              "EnergyBar_GemNum_Shadow"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Interval",
          "value": 0.1
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
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
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "TMP_Round",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (33) || RETURN",
                  "displayLines": "33",
                  "constants": [],
                  "variables": [
                    33
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "TMP_Shadow_Gem_Num",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (EnergyBar_CostGemNum) || RETURN",
                  "displayLines": "EnergyBar_CostGemNum",
                  "constants": [],
                  "variables": [
                    "EnergyBar_CostGemNum"
                  ]
                }
              }
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Flag",
                "compareType": "<",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Flag",
                  "value": {
                    "operator": "Variables[0] (TMP_Flag) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TMP_Flag + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TMP_Flag"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Flag",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Interval",
                "compareType": ">",
                "value2": {
                  "operator": "Constants[0] (0.021) || RETURN",
                  "displayLines": "0.021",
                  "constants": [
                    0.021
                  ],
                  "variables": []
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Interval",
                  "value": {
                    "operator": "Variables[0] (TMP_Interval) || Constants[0] (0.011) || SUB || RETURN",
                    "displayLines": "(TMP_Interval - 0.011)",
                    "constants": [
                      0.011
                    ],
                    "variables": [
                      "TMP_Interval"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Round",
              "value": {
                "operator": "Variables[0] (TMP_Round) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(TMP_Round + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "TMP_Round"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Shadow_Gem_Num",
              "value": {
                "operator": "Variables[0] (TMP_Shadow_Gem_Num) || Variables[1] (EnergyBar_CostGemNum) || SUB || RETURN",
                "displayLines": "(TMP_Shadow_Gem_Num - EnergyBar_CostGemNum)",
                "constants": [],
                "variables": [
                  "TMP_Shadow_Gem_Num",
                  "EnergyBar_CostGemNum"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Shadow_Gem_Cost",
              "value": {
                "operator": "Variables[0] (TMP_Shadow_Gem_Cost) || Variables[1] (EnergyBar_CostGemNum) || ADD || RETURN",
                "displayLines": "(TMP_Shadow_Gem_Cost + EnergyBar_CostGemNum)",
                "constants": [],
                "variables": [
                  "TMP_Shadow_Gem_Cost",
                  "EnergyBar_CostGemNum"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
              },
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (TMP_Shadow_Gem_Num) || RETURN",
                    "displayLines": "TMP_Shadow_Gem_Num",
                    "constants": [],
                    "variables": [
                      "TMP_Shadow_Gem_Num"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 1,
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.9) || RETURN",
                          "displayLines": "0.9",
                          "constants": [],
                          "variables": [
                            0.9
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
                        "Tags": null
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "EnergyBar_GemNum_Shadow",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyBar_GemNum_Shadow",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                "displayLines": "EnergyBar_GemNum_Shadow",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum_Shadow"
                ]
              },
              "priorState": "Normal"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                "displayLines": "EnergyBar_GemNum",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum"
                ]
              },
              "priorState": "Normal"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "failed": [
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentSkillPoints",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          },
          "Event": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": -1,
              "adjustmentType": "+"
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                "displayLines": "EnergyBar_GemNum",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Gem_Num",
          "value": {
            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
            "displayLines": "EnergyBar_GemNum",
            "constants": [],
            "variables": [
              "EnergyBar_GemNum"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TMP_Interval",
          "value": 0.1
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
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
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "TMP_Round",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (33) || RETURN",
                  "displayLines": "33",
                  "constants": [],
                  "variables": [
                    33
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "TMP_Gem_Num",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (EnergyBar_CostGemNum) || RETURN",
                  "displayLines": "EnergyBar_CostGemNum",
                  "constants": [],
                  "variables": [
                    "EnergyBar_CostGemNum"
                  ]
                }
              },
              {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP",
                  "compareType": ">",
                  "value2": 0
                }
              }
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Flag",
                "compareType": "<",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Flag",
                  "value": {
                    "operator": "Variables[0] (TMP_Flag) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TMP_Flag + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TMP_Flag"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Flag",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Interval",
                "compareType": ">",
                "value2": {
                  "operator": "Constants[0] (0.021) || RETURN",
                  "displayLines": "0.021",
                  "constants": [
                    0.021
                  ],
                  "variables": []
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TMP_Interval",
                  "value": {
                    "operator": "Variables[0] (TMP_Interval) || Constants[0] (0.011) || SUB || RETURN",
                    "displayLines": "(TMP_Interval - 0.011)",
                    "constants": [
                      0.011
                    ],
                    "variables": [
                      "TMP_Interval"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Round",
              "value": {
                "operator": "Variables[0] (TMP_Round) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(TMP_Round + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "TMP_Round"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Gem_Num",
              "value": {
                "operator": "Variables[0] (TMP_Gem_Num) || Variables[1] (EnergyBar_CostGemNum) || SUB || RETURN",
                "displayLines": "(TMP_Gem_Num - EnergyBar_CostGemNum)",
                "constants": [],
                "variables": [
                  "TMP_Gem_Num",
                  "EnergyBar_CostGemNum"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TMP_Gem_Cost",
              "value": {
                "operator": "Variables[0] (TMP_Gem_Cost) || Variables[1] (EnergyBar_CostGemNum) || ADD || RETURN",
                "displayLines": "(TMP_Gem_Cost + EnergyBar_CostGemNum)",
                "constants": [],
                "variables": [
                  "TMP_Gem_Cost",
                  "EnergyBar_CostGemNum"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TohsakaRin_00_Achievement_Gemstone",
                  "value": {
                    "operator": "Variables[0] (TohsakaRin_00_Achievement_Gemstone) || Variables[1] (EnergyBar_CostGemNum) || ADD || RETURN",
                    "displayLines": "(TohsakaRin_00_Achievement_Gemstone + EnergyBar_CostGemNum)",
                    "constants": [],
                    "variables": [
                      "TohsakaRin_00_Achievement_Gemstone",
                      "EnergyBar_CostGemNum"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (TMP_Gem_Num) || RETURN",
                    "displayLines": "TMP_Gem_Num",
                    "constants": [],
                    "variables": [
                      "TMP_Gem_Num"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 1,
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.9) || RETURN",
                          "displayLines": "0.9",
                          "constants": [],
                          "variables": [
                            0.9
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
                        "Tags": null
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "EnergyBar_GemNum",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (TMP_Gem_Cost) || SUB || RETURN",
            "displayLines": "(0 - TMP_Gem_Cost)",
            "constants": [
              0
            ],
            "variables": [
              "TMP_Gem_Cost"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1161328360\">TohsakaRin_Eidolon1_Enhance</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "TMP_Gem_Cost",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (30) || RETURN",
                  "displayLines": "30",
                  "constants": [],
                  "variables": [
                    30
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum_Shadow",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (TMP_Gem_Cost) || RETURN",
                "displayLines": "TMP_Gem_Cost",
                "constants": [],
                "variables": [
                  "TMP_Gem_Cost"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyBar_GemNum_Shadow",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                "displayLines": "EnergyBar_GemNum_Shadow",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum_Shadow"
                ]
              },
              "priorState": "Normal"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                "displayLines": "EnergyBar_GemNum",
                "constants": [],
                "variables": [
                  "EnergyBar_GemNum"
                ]
              },
              "priorState": "Normal"
            }
          ]
        },
        "Trigger: Ability End"
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}