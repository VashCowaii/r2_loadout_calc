const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_IF_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": ">=",
        "value2": 2,
        "livingTargets": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": ">=",
        "value2": 3,
        "livingTargets": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": ">=",
        "value2": 4,
        "livingTargets": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": ">=",
        "value2": 2,
        "livingTargets": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": ">=",
        "value2": 3,
        "livingTargets": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}}"
        },
        "compareType": ">=",
        "value2": 4,
        "livingTargets": true
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
          "displayLines": "{[Skill12[0]]}",
          "constants": [],
          "variables": [
            "{[Skill12[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Action Delayed"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill12[1]]}"
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-563395337\">Monster_W2_Huanlong_IF_Break</a>"
              }
            }
          ]
        },
        "compareType": "=",
        "value2": 4,
        "livingTargets": true
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "UINotice",
      "value": 0
    },
    {
      "name": "Trigger Multiple Functions",
      "variables": {},
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1764510905\">Monster_W2_HuanlongPart_IF_P2_FirstMark_TriggerAnim</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1658236075\">Monster_W2_HuanlongPart_IF_P2_SecondMark_TriggerAnim</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1832333412\">Monster_W2_HuanlongPart_IF_P2_ThirdMark_TriggerAnim</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1973573318\">Monster_W2_HuanlongPart_IF_P2_ForthMark_TriggerAnim</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1764510905\">Monster_W2_HuanlongPart_IF_P2_FirstMark_TriggerAnim</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1296858925\">Monster_W2_HuanlongPart_IF_P2_FirstMark</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1603687642\">Monster_W2_HuanlongPart_IF_Mark</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "UINotice",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UINotice",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 3
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[Skill12[2]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[Skill12[2]]}"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 3
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                        "displayLines": "{[Skill04[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[3]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                        "displayLines": "{[Skill04[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[4]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                          "displayLines": "{[Skill04[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04[2]]}"
                          ]
                        }
                      },
                      "success": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "UINotice",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "UINotice",
                              "value": 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1658236075\">Monster_W2_HuanlongPart_IF_P2_SecondMark_TriggerAnim</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1190585947\">Monster_W2_HuanlongPart_IF_P2_SecondMark</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1603687642\">Monster_W2_HuanlongPart_IF_Mark</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "UINotice",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UINotice",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Target Index",
                            "indexValue": 2
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                            "displayLines": "(-1 * {[Skill12[2]]})",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "{[Skill12[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                            "displayLines": "(-1 * {[Skill12[2]]})",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "{[Skill12[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Target Index",
                            "indexValue": 2
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                            "displayLines": "{[Skill04[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[3]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                            "displayLines": "{[Skill04[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "UINotice",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "UINotice",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                            "displayLines": "{[Skill04[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[3]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                            "displayLines": "{[Skill04[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "UINotice",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "UINotice",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1832333412\">Monster_W2_HuanlongPart_IF_P2_ThirdMark_TriggerAnim</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1242033542\">Monster_W2_HuanlongPart_IF_P2_ThirdMark</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1603687642\">Monster_W2_HuanlongPart_IF_Mark</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "UINotice",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UINotice",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 3,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Target Index",
                            "indexValue": 1
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                            "displayLines": "(-1 * {[Skill12[2]]})",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "{[Skill12[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                            "displayLines": "(-1 * {[Skill12[2]]})",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "{[Skill12[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 3,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Target Index",
                            "indexValue": 1
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                            "displayLines": "{[Skill04[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[3]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                            "displayLines": "{[Skill04[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "UINotice",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "UINotice",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                            "displayLines": "{[Skill04[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[3]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                            "displayLines": "{[Skill04[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "UINotice",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "UINotice",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1973573318\">Monster_W2_HuanlongPart_IF_P2_ForthMark_TriggerAnim</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1084207204\">Monster_W2_HuanlongPart_IF_P2_ForthMark</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1603687642\">Monster_W2_HuanlongPart_IF_Mark</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "UINotice",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UINotice",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 4,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Target Index"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                            "displayLines": "(-1 * {[Skill12[2]]})",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "{[Skill12[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill12[2]]}) || MUL || RETURN",
                            "displayLines": "(-1 * {[Skill12[2]]})",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "{[Skill12[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 4,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Target Index"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                            "displayLines": "{[Skill04[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[3]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                            "displayLines": "{[Skill04[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "UINotice",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "UINotice",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                            "displayLines": "{[Skill04[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[3]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                            "displayLines": "{[Skill04[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "UINotice",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "UINotice",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}