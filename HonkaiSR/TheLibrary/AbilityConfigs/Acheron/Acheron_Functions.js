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
                "displayLines": "MDF_Passive_Count"
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
                  "displayLines": "9"
                }
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Passive_Count"
                  },
                  "maximum": {
                    "displayLines": "9"
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
                    "displayLines": "MDF_Passive_Count"
                  },
                  "maximum": {
                    "displayLines": "9"
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
                "displayLines": "MDF_Passive_Count"
              },
              "maximum": {
                "displayLines": "9"
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
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "Acheron_FlowerCountBySp"
          },
          "variableName": "Acheron_FlowerCountBySp_Snapshot"
        },
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
              "value": 0,
              "variableName": "MDF_CurrentCountFlag01"
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
              "value": {
                "displayLines": "(MDF_CurrentCountFlag01 + Acheron_FlowerCountBySp)"
              },
              "variableName": "MDF_CurrentCountFlag01"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "displayLines": "MDF_CurrentCountFlag01"
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "displayLines": "0.15"
                },
                "MDF_PropertyValue02": {
                  "displayLines": "0.6"
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
                "displayLines": "Acheron_FlowerCountBySp"
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "displayLines": "0.15"
                },
                "MDF_PropertyValue02": {
                  "displayLines": "0.6"
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Acheron_FlowerCountBySp - Acheron_FlowerCountBySp_Snapshot)"
          },
          "variableName": "Acheron_FlowerCountBySp"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1879158642\">Acheron_AddFlower_Passiv01</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "Acheron_FlowerCountBySp"
          },
          "variableName": "Acheron_FlowerCountBySp_Snapshot"
        },
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
              "value": 0,
              "variableName": "MDF_CurrentCountFlag01"
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
              "value": {
                "displayLines": "(MDF_CurrentCountFlag01 + Acheron_FlowerCountBySp)"
              },
              "variableName": "MDF_CurrentCountFlag01"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "displayLines": "MDF_CurrentCountFlag01"
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "displayLines": "0.15"
                },
                "MDF_PropertyValue02": {
                  "displayLines": "0.6"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Acheron_FlowerCountBySp - Acheron_FlowerCountBySp_Snapshot)"
              },
              "variableName": "Acheron_FlowerCountBySp"
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
                "displayLines": "Acheron_FlowerCountBySp"
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "displayLines": "0.15"
                },
                "MDF_PropertyValue02": {
                  "displayLines": "0.6"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Acheron_FlowerCountBySp - Acheron_FlowerCountBySp_Snapshot)"
              },
              "variableName": "Acheron_FlowerCountBySp"
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
              "value": {
                "displayLines": "(Limbo_Count + Acheron_FlowerCountBySp)"
              },
              "variableName": "Limbo_Count"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Acheron_FlowerCountBySp"
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
                      "value": 0,
                      "variableName": "MDF_Acheron_FlagCount"
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
                      "value": {
                        "displayLines": "(MDF_Acheron_FlagCount + Limbo_Count)"
                      },
                      "variableName": "MDF_Acheron_FlagCount"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "counter": {
                        "displayLines": "MDF_Acheron_FlagCount"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue01": {
                          "displayLines": "0.15"
                        },
                        "MDF_PropertyValue02": {
                          "displayLines": "0.6"
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
                        "displayLines": "Limbo_Count"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue01": {
                          "displayLines": "0.15"
                        },
                        "MDF_PropertyValue02": {
                          "displayLines": "0.6"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Limbo_Count"
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
                "displayLines": "3"
              },
              "stackLimit": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.3"
                },
                "MDF_MaxLayer": {
                  "displayLines": "3"
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
              "value": {
                "displayLines": "TargetEntity_CurrentFlagCount"
              },
              "variableName": "TargetEntity_UltraFlagCount"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TargetEntity_UltraFlagCount - 3)"
              },
              "variableName": "TargetEntity_UltraFlagCount"
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
                  "value": 3,
                  "variableName": "TargetEntity_LoopFlagCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TargetEntity_LoopFlagCount + 3)"
                  },
                  "variableName": "UltraFlagCount"
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
                  "value": 3,
                  "variableName": "TargetEntity_LoopFlagCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TargetEntity_LoopFlagCount + 3)"
                  },
                  "variableName": "UltraFlagCount"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "displayLines": "TargetEntity_UltraFlagCount"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "displayLines": "0.15"
                    },
                    "MDF_PropertyValue02": {
                      "displayLines": "0.6"
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "TargetEntity_CurrentFlagCount"
              },
              "variableName": "TargetEntity_LoopFlagCount"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TargetEntity_LoopFlagCount + TargetEntity_CurrentFlagCount)"
              },
              "variableName": "UltraFlagCount"
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
                  "displayLines": "((0.15 + (0.15 * UltraFlagCount)) * Acheron_PointB2_DamageRatio)"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
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
                  "displayLines": "(0.15 + (0.15 * UltraFlagCount))"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
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
              "value": {
                "displayLines": "(Limbo_FlowerTotalCount + Limbo_FlowerCurrentCount)"
              },
              "variableName": "Limbo_FlowerTotalCount"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Limbo_FlowerCurrentCount"
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
                          "displayLines": "Limbo_FlowerTotalCount"
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
                          "displayLines": "Limbo_FlowerTotalCount"
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
              "value": 0,
              "variableName": "Limbo_FlowerTotalCount"
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
              "value": 0,
              "variableName": "Limbo_FlowerTotalCount"
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
              "value": {
                "displayLines": "(MDF_Acheron_FlagCount + Limbo_FlowerCount)"
              },
              "variableName": "MDF_Acheron_FlagCount"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "displayLines": "MDF_Acheron_FlagCount"
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "displayLines": "0.15"
                },
                "MDF_PropertyValue02": {
                  "displayLines": "0.6"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Limbo_FlowerTotalCount"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "counter": {
                "displayLines": "Limbo_FlowerCount"
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "displayLines": "0.15"
                },
                "MDF_PropertyValue02": {
                  "displayLines": "0.6"
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