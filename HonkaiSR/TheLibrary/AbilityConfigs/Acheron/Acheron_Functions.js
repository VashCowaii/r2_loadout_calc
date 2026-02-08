const configAbility = {
  "fileName": "Acheron_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 7,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1427559472\">Acheron_SetEnergyBarState</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>",
              "counter": {
                "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                "displayLines": "MDF_Passive_Count",
                "constants": [],
                "variables": [
                  "MDF_Passive_Count"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Passive_Count",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Passive_Count",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (9) || RETURN",
                  "displayLines": "9",
                  "constants": [],
                  "variables": [
                    9
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                    "displayLines": "MDF_Passive_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Passive_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (9) || RETURN",
                    "displayLines": "9",
                    "constants": [],
                    "variables": [
                      9
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                    "displayLines": "MDF_Passive_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Passive_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (9) || RETURN",
                    "displayLines": "9",
                    "constants": [],
                    "variables": [
                      9
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                "displayLines": "MDF_Passive_Count",
                "constants": [],
                "variables": [
                  "MDF_Passive_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (9) || RETURN",
                "displayLines": "9",
                "constants": [],
                "variables": [
                  9
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-64481768\">Acheron_AddFlower_Ability</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentCountFlag01",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_CurrentCountFlag01",
              "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentCountFlag01",
              "value": {
                "operator": "Variables[0] (MDF_CurrentCountFlag01) || Variables[1] (Acheron_FlowerCountBySp) || ADD || RETURN",
                "displayLines": "(MDF_CurrentCountFlag01 + Acheron_FlowerCountBySp)",
                "constants": [],
                "variables": [
                  "MDF_CurrentCountFlag01",
                  "Acheron_FlowerCountBySp"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "operator": "Variables[0] (MDF_CurrentCountFlag01) || RETURN",
                "displayLines": "MDF_CurrentCountFlag01",
                "constants": [],
                "variables": [
                  "MDF_CurrentCountFlag01"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "operator": "Variables[0] (Acheron_FlowerCountBySp) || RETURN",
                "displayLines": "Acheron_FlowerCountBySp",
                "constants": [],
                "variables": [
                  "Acheron_FlowerCountBySp"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Acheron_FlowerCountBySp",
          "value": 0
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1879158642\">Acheron_AddFlower_Passiv01</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentCountFlag01",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_CurrentCountFlag01",
              "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentCountFlag01",
              "value": {
                "operator": "Variables[0] (MDF_CurrentCountFlag01) || Variables[1] (Acheron_FlowerCountBySp) || ADD || RETURN",
                "displayLines": "(MDF_CurrentCountFlag01 + Acheron_FlowerCountBySp)",
                "constants": [],
                "variables": [
                  "MDF_CurrentCountFlag01",
                  "Acheron_FlowerCountBySp"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "operator": "Variables[0] (MDF_CurrentCountFlag01) || RETURN",
                "displayLines": "MDF_CurrentCountFlag01",
                "constants": [],
                "variables": [
                  "MDF_CurrentCountFlag01"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_FlowerCountBySp",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "operator": "Variables[0] (Acheron_FlowerCountBySp) || RETURN",
                "displayLines": "Acheron_FlowerCountBySp",
                "constants": [],
                "variables": [
                  "Acheron_FlowerCountBySp"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_FlowerCountBySp",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1830638488\">Acheron_LimboTransfer</a>",
      "parse": [
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
                "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "Acheron_FlowerCountBySp",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Limbo_Count",
              "value": {
                "operator": "Variables[0] (Limbo_Count) || Variables[1] (Acheron_FlowerCountBySp) || ADD || RETURN",
                "displayLines": "(Limbo_Count + Acheron_FlowerCountBySp)",
                "constants": [],
                "variables": [
                  "Limbo_Count",
                  "Acheron_FlowerCountBySp"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_FlowerCountBySp",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Limbo_Count",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Acheron_FlagCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_Acheron_FlagCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Acheron_FlagCount",
                      "value": {
                        "operator": "Variables[0] (MDF_Acheron_FlagCount) || Variables[1] (Limbo_Count) || ADD || RETURN",
                        "displayLines": "(MDF_Acheron_FlagCount + Limbo_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_Acheron_FlagCount",
                          "Limbo_Count"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "counter": {
                        "operator": "Variables[0] (MDF_Acheron_FlagCount) || RETURN",
                        "displayLines": "MDF_Acheron_FlagCount",
                        "constants": [],
                        "variables": [
                          "MDF_Acheron_FlagCount"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue01": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue02": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "counter": {
                        "operator": "Variables[0] (Limbo_Count) || RETURN",
                        "displayLines": "Limbo_Count",
                        "constants": [],
                        "variables": [
                          "Limbo_Count"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue01": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue02": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_Count",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__77299136\">Acheron_HitFlower</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-535608708\">Acheron_PointB3_DamageUp</a>[<span class=\"descriptionNumberColor\">Thunder Core</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1252175641\">Acheron_TiggerFlower</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "TargetEntity_CurrentFlagCount",
          "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TargetEntity_CurrentFlagCount",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TargetEntity_UltraFlagCount",
              "value": {
                "operator": "Variables[0] (TargetEntity_CurrentFlagCount) || RETURN",
                "displayLines": "TargetEntity_CurrentFlagCount",
                "constants": [],
                "variables": [
                  "TargetEntity_CurrentFlagCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TargetEntity_UltraFlagCount",
              "value": {
                "operator": "Variables[0] (TargetEntity_UltraFlagCount) || Constants[0] (3) || SUB || RETURN",
                "displayLines": "(TargetEntity_UltraFlagCount - 3)",
                "constants": [
                  3
                ],
                "variables": [
                  "TargetEntity_UltraFlagCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TargetEntity_UltraFlagCount",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetEntity_LoopFlagCount",
                  "value": 3
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "UltraFlagCount",
                  "value": {
                    "operator": "Variables[0] (TargetEntity_LoopFlagCount) || Constants[0] (3) || ADD || RETURN",
                    "displayLines": "(TargetEntity_LoopFlagCount + 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "TargetEntity_LoopFlagCount"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetEntity_LoopFlagCount",
                  "value": 3
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "UltraFlagCount",
                  "value": {
                    "operator": "Variables[0] (TargetEntity_LoopFlagCount) || Constants[0] (3) || ADD || RETURN",
                    "displayLines": "(TargetEntity_LoopFlagCount + 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "TargetEntity_LoopFlagCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (TargetEntity_UltraFlagCount) || RETURN",
                    "displayLines": "TargetEntity_UltraFlagCount",
                    "constants": [],
                    "variables": [
                      "TargetEntity_UltraFlagCount"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TargetEntity_LoopFlagCount",
              "value": {
                "operator": "Variables[0] (TargetEntity_CurrentFlagCount) || RETURN",
                "displayLines": "TargetEntity_CurrentFlagCount",
                "constants": [],
                "variables": [
                  "TargetEntity_CurrentFlagCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "UltraFlagCount",
              "value": {
                "operator": "Variables[0] (TargetEntity_LoopFlagCount) || Variables[1] (TargetEntity_CurrentFlagCount) || ADD || RETURN",
                "displayLines": "(TargetEntity_LoopFlagCount + TargetEntity_CurrentFlagCount)",
                "constants": [],
                "variables": [
                  "TargetEntity_LoopFlagCount",
                  "TargetEntity_CurrentFlagCount"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Skill Name",
            "skillName": "Skill33"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.15) || Variables[0] (0.15) || Variables[1] (UltraFlagCount) || MUL || ADD || Variables[2] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "((0.15 + (0.15 * UltraFlagCount)) * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.15,
                    "UltraFlagCount",
                    "Acheron_PointB2_DamageRatio"
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
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.15) || Variables[0] (0.15) || Variables[1] (UltraFlagCount) || MUL || ADD || RETURN",
                  "displayLines": "(0.15 + (0.15 * UltraFlagCount))",
                  "constants": [],
                  "variables": [
                    0.15,
                    "UltraFlagCount"
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
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": "<=",
                "value2": 0
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Limbo_FlowerCurrentCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Limbo_FlowerTotalCount",
              "value": {
                "operator": "Variables[0] (Limbo_FlowerTotalCount) || Variables[1] (Limbo_FlowerCurrentCount) || ADD || RETURN",
                "displayLines": "(Limbo_FlowerTotalCount + Limbo_FlowerCurrentCount)",
                "constants": [],
                "variables": [
                  "Limbo_FlowerTotalCount",
                  "Limbo_FlowerCurrentCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Limbo_FlowerCurrentCount",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Limbo_FlowerTotalCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1895936261\">Acheron_AddFlower_Passiv02</a>",
                      "variables": {
                        "Limbo_FlowerCount": {
                          "operator": "Variables[0] (Limbo_FlowerTotalCount) || RETURN",
                          "displayLines": "Limbo_FlowerTotalCount",
                          "constants": [],
                          "variables": [
                            "Limbo_FlowerTotalCount"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Acheron: Crimson Knot Transfer Target[v2]}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1895936261\">Acheron_AddFlower_Passiv02</a>",
                      "variables": {
                        "Limbo_FlowerCount": {
                          "operator": "Variables[0] (Limbo_FlowerTotalCount) || RETURN",
                          "displayLines": "Limbo_FlowerTotalCount",
                          "constants": [],
                          "variables": [
                            "Limbo_FlowerTotalCount"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Limbo_FlowerTotalCount",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1895936261\">Acheron_AddFlower_Passiv02</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Limbo_FlowerTotalCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_Acheron_FlagCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Acheron_FlagCount",
              "value": {
                "operator": "Variables[0] (MDF_Acheron_FlagCount) || Variables[1] (Limbo_FlowerCount) || ADD || RETURN",
                "displayLines": "(MDF_Acheron_FlagCount + Limbo_FlowerCount)",
                "constants": [],
                "variables": [
                  "MDF_Acheron_FlagCount",
                  "Limbo_FlowerCount"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "operator": "Variables[0] (MDF_Acheron_FlagCount) || RETURN",
                "displayLines": "MDF_Acheron_FlagCount",
                "constants": [],
                "variables": [
                  "MDF_Acheron_FlagCount"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Limbo_FlowerTotalCount",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "operator": "Variables[0] (Limbo_FlowerCount) || RETURN",
                "displayLines": "Limbo_FlowerCount",
                "constants": [],
                "variables": [
                  "Limbo_FlowerCount"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}