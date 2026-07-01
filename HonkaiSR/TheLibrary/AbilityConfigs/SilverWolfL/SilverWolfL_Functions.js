const configAbility = {
  "fileName": "SilverWolfL_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 13,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2105895650\">SilverWolf999_ModifySP</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "TDF_MaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
          "context": "ContextTaskTemplate"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "TDF_CurSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "context": "ContextTaskTemplate"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TDF_NeedSPForCharge",
          "value": {
            "operator": "Variables[0] (TDF_MaxSP) || Variables[1] (TDF_CurSP) || SUB || RETURN",
            "displayLines": "(TDF_MaxSP - TDF_CurSP)",
            "constants": [],
            "variables": [
              "TDF_MaxSP",
              "TDF_CurSP"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "TDF_OverflowSPForCost",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Arg0_AddValue",
            "compareType": ">",
            "value2": 0,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (parameter[0]_AddValue) || Variables[2] (TDF_NeedSPForCharge) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(parameter[0]_AddValue, TDF_NeedSPForCharge)",
                "constants": [],
                "variables": [
                  "MIN",
                  "parameter[0]_AddValue",
                  "TDF_NeedSPForCharge"
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Arg0_AddValue",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (TDF_NeedSPForCharge) || RETURN",
                  "displayLines": "TDF_NeedSPForCharge",
                  "constants": [],
                  "variables": [
                    "TDF_NeedSPForCharge"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Property",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (parameter[0]_AddValue) || Variables[1] (TDF_NeedSPForCharge) || SUB || RETURN",
                    "displayLines": "(parameter[0]_AddValue - TDF_NeedSPForCharge)",
                    "constants": [],
                    "variables": [
                      "parameter[0]_AddValue",
                      "TDF_NeedSPForCharge"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Arg0_AddValue",
            "compareType": "<",
            "value2": 0,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_OverflowSPForCost",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Property",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MIN) || Variables[1] (ABS) || Variables[2] (parameter[0]_AddValue) || PARAM_1 || FUNCTION || Variables[3] (TDF_OverflowSPForCost) || PARAM_2 || FUNCTION || SUB || RETURN",
                    "displayLines": "(0 - &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue), TDF_OverflowSPForCost))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MIN",
                      "ABS",
                      "parameter[0]_AddValue",
                      "TDF_OverflowSPForCost"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": {
                  "operator": "Variables[0] (ABS) || Variables[1] (parameter[0]_AddValue) || PARAM_1 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue)",
                  "constants": [],
                  "variables": [
                    "ABS",
                    "parameter[0]_AddValue"
                  ]
                },
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (TDF_OverflowSPForCost) || RETURN",
                  "displayLines": "TDF_OverflowSPForCost",
                  "constants": [],
                  "variables": [
                    "TDF_OverflowSPForCost"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (TDF_OverflowSPForCost) || Variables[1] (ABS) || Variables[2] (parameter[0]_AddValue) || PARAM_1 || FUNCTION || SUB || RETURN",
                    "displayLines": "(TDF_OverflowSPForCost - &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue))",
                    "constants": [],
                    "variables": [
                      "TDF_OverflowSPForCost",
                      "ABS",
                      "parameter[0]_AddValue"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2134200315\">SilverWolf999_Item3_AfterBox</a>",
      "parse": [
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TDF_EnemyCountForPerformance",
          "context": "ContextTaskTemplate"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "TDF_EnemyCountForDamage",
              "livingTargets": true,
              "context": "ContextTaskTemplate"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "TDF_EnemyCountForDamage",
              "context": "ContextTaskTemplate"
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (TDF_EnemyCountForPerformance) || RETURN",
            "displayLines": "TDF_EnemyCountForPerformance",
            "constants": [],
            "variables": [
              "TDF_EnemyCountForPerformance"
            ]
          },
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay1",
                  "value": 0.4
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay2",
                  "value": 0.4
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay2",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay3",
                  "value": 0.6
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay2",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay3",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay4",
                  "value": 0.6
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay2",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay3",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay4",
                  "value": 0.6
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay5",
                  "value": 0.6
                }
              ]
            }
          ],
          "defaultEvents": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Delay1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Delay2",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Delay3",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Delay4",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Delay5",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_TDF_Index",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Index",
              "value": {
                "operator": "Variables[0] (#CL_TDF_Index) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(#CL_TDF_Index + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "#CL_TDF_Index"
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (#CL_TDF_Index) || RETURN",
                "displayLines": "#CL_TDF_Index",
                "constants": [],
                "variables": [
                  "#CL_TDF_Index"
                ]
              },
              "hasBreak": false,
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_TDF_Delay1) || RETURN",
                        "displayLines": "#CL_TDF_Delay1",
                        "constants": [],
                        "variables": [
                          "#CL_TDF_Delay1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_TDF_Delay2) || RETURN",
                        "displayLines": "#CL_TDF_Delay2",
                        "constants": [],
                        "variables": [
                          "#CL_TDF_Delay2"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_TDF_Delay3) || RETURN",
                        "displayLines": "#CL_TDF_Delay3",
                        "constants": [],
                        "variables": [
                          "#CL_TDF_Delay3"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_TDF_Delay4) || RETURN",
                        "displayLines": "#CL_TDF_Delay4",
                        "constants": [],
                        "variables": [
                          "#CL_TDF_Delay4"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_TDF_Delay5) || RETURN",
                        "displayLines": "#CL_TDF_Delay5",
                        "constants": [],
                        "variables": [
                          "#CL_TDF_Delay5"
                        ]
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "conditions": {
                      "name": "Living State",
                      "state": "Mask_AliveOnly",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Variables[0] (TDF_EnemyCountForDamage) || DIV || RETURN",
                      "displayLines": "(1 / TDF_EnemyCountForDamage)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "TDF_EnemyCountForDamage"
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
                    "ToughnessDMGType": {
                      "DamageType": "Imaginary"
                    },
                    "instanceTag": "SilverWolf999_00_Item_Damage",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TDF_EnemyCountForPerformance",
            "compareType": "<=",
            "value2": 2,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            "Trigger: Attack End"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TDF_EnemyCountForPerformance",
            "compareType": ">",
            "value2": 2,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            "Trigger: Attack End"
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__918776177\">SilverWolf999_Item3_Finish</a>",
      "parse": [
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1112298097\">SilverWolf999_RollItemIndex</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Skill Points",
          "scope": "ContextTaskTemplate",
          "variableName": "TDF_CurBP"
        },
        {
          "name": "Define Custom Variable with Skill Point Max",
          "variableName": "TDF_MaxBP",
          "context": "ContextTaskTemplate"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (TDF_CurBP) || RETURN",
            "displayLines": "TDF_CurBP",
            "constants": [],
            "variables": [
              "TDF_CurBP"
            ]
          },
          "compareType": "<=",
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Item2Chance",
                  "value": {
                    "operator": "Variables[0] (Item2Chance) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(Item2Chance * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "Item2Chance"
                    ]
                  }
                }
              ]
            }
          ],
          "defaultEvents": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_CurBP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (TDF_MaxBP) || RETURN",
                  "displayLines": "TDF_MaxBP",
                  "constants": [],
                  "variables": [
                    "TDF_MaxBP"
                  ]
                },
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Item2Chance",
                  "value": {
                    "operator": "Variables[0] (Item2Chance) || Constants[0] (0.0009999999) || MUL || RETURN",
                    "displayLines": "(Item2Chance * 0.0009999999)",
                    "constants": [
                      0.0009999999
                    ],
                    "variables": [
                      "Item2Chance"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TDF_CurBP",
                    "compareType": ">=",
                    "value2": 4,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Item2Chance",
                      "value": {
                        "operator": "Variables[0] (Item2Chance) || Constants[0] (0.1) || MUL || RETURN",
                        "displayLines": "(Item2Chance * 0.1)",
                        "constants": [
                          0.1
                        ],
                        "variables": [
                          "Item2Chance"
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
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurScore) || RETURN",
            "displayLines": "CurScore",
            "constants": [],
            "variables": [
              "CurScore"
            ]
          },
          "compareType": "<",
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": {
                "operator": "Variables[0] (60) || RETURN",
                "displayLines": "60",
                "constants": [],
                "variables": [
                  60
                ]
              },
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Item3Chance",
                  "value": {
                    "operator": "Variables[0] (Item3Chance) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(Item3Chance * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "Item3Chance"
                    ]
                  }
                }
              ]
            }
          ],
          "defaultEvents": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurScore",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (60) || Variables[1] (240) || ADD || RETURN",
                  "displayLines": "(60 + 240)",
                  "constants": [],
                  "variables": [
                    60,
                    240
                  ]
                },
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Item3Chance",
                  "value": {
                    "operator": "Variables[0] (Item3Chance) || Constants[0] (0.0009999999) || MUL || RETURN",
                    "displayLines": "(Item3Chance * 0.0009999999)",
                    "constants": [
                      0.0009999999
                    ],
                    "variables": [
                      "Item3Chance"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurScore",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (60) || Constants[0] (2) || MUL || RETURN",
                      "displayLines": "(60 * 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        60
                      ]
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Item3Chance",
                      "value": {
                        "operator": "Variables[0] (Item3Chance) || Constants[0] (0.1) || MUL || RETURN",
                        "displayLines": "(Item3Chance * 0.1)",
                        "constants": [
                          0.1
                        ],
                        "variables": [
                          "Item3Chance"
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
          "name": "Random Event",
          "odds": [
            {
              "operator": "Variables[0] (Item1Chance) || RETURN",
              "displayLines": "Item1Chance",
              "constants": [],
              "variables": [
                "Item1Chance"
              ]
            },
            {
              "operator": "Variables[0] (Item2Chance) || RETURN",
              "displayLines": "Item2Chance",
              "constants": [],
              "variables": [
                "Item2Chance"
              ]
            },
            {
              "operator": "Variables[0] (Item3Chance) || RETURN",
              "displayLines": "Item3Chance",
              "constants": [],
              "variables": [
                "Item3Chance"
              ]
            }
          ],
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentItem",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentItem",
              "value": 2
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentItem",
              "value": 3
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Item1Chance",
          "value": {
            "operator": "Variables[0] (CurrentItem) || Constants[0] (1) || EQUAL || Variables[1] (Item1Chance) || Constants[1] (0.01) || MUL || Constants[0] (1) || CHECK || RETURN",
            "displayLines": "check(value:(CurrentItem === 1), then:(Item1Chance * 0.01), else:1)",
            "constants": [
              1,
              0.01
            ],
            "variables": [
              "CurrentItem",
              "Item1Chance"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Item2Chance",
          "value": {
            "operator": "Variables[0] (CurrentItem) || Constants[0] (2) || EQUAL || Variables[1] (Item2Chance) || Constants[1] (0.01) || MUL || Constants[2] (1) || CHECK || RETURN",
            "displayLines": "check(value:(CurrentItem === 2), then:(Item2Chance * 0.01), else:1)",
            "constants": [
              2,
              0.01,
              1
            ],
            "variables": [
              "CurrentItem",
              "Item2Chance"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Item3Chance",
          "value": {
            "operator": "Variables[0] (CurrentItem) || Constants[0] (3) || EQUAL || Variables[1] (Item3Chance) || Constants[1] (0.01) || MUL || Constants[2] (1) || CHECK || RETURN",
            "displayLines": "check(value:(CurrentItem === 3), then:(Item3Chance * 0.01), else:1)",
            "constants": [
              3,
              0.01,
              1
            ],
            "variables": [
              "CurrentItem",
              "Item3Chance"
            ]
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1773570855\">SilverWolf999_ShowShooters</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1989702810\">SilverWolf999_HideShooters</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1468343614\">SilverWolf999_Ability11_Shoot</a>",
      "parse": [
        {
          "name": "SW999 Test Data",
          "value": {
            "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)",
            "constants": [
              1
            ],
            "variables": [
              "#CL_UI_Skill11_ItemIndex"
            ]
          },
          "value2": 0,
          "value3": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1773570855\">SilverWolf999_ShowShooters</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_MaxShootCount",
              "value": {
                "operator": "Variables[0] (CEIL) || Variables[1] (Skill11_Shoot_TotalCount) || Variables[2] (Skill11_Item_TotalCount) || DIV || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((Skill11_Shoot_TotalCount / Skill11_Item_TotalCount))",
                "constants": [],
                "variables": [
                  "CEIL",
                  "Skill11_Shoot_TotalCount",
                  "Skill11_Item_TotalCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "TDF_MaxShootCount",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Skill11_Shoot_LeftCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_MaxShootCount",
                  "value": 1
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_MaxShootCount",
              "value": {
                "operator": "Variables[0] (Skill11_Shoot_LeftCount) || RETURN",
                "displayLines": "Skill11_Shoot_LeftCount",
                "constants": [],
                "variables": [
                  "Skill11_Shoot_LeftCount"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TDF_MaxShootCount",
            "compareType": ">",
            "value2": 0,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill11"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill11"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_DeltaFrame",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__299) || Variables[1] (ENEMIES_OBJECT_UNUSED__300) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__299 - ENEMIES_OBJECT_UNUSED__300) / TDF_MaxShootCount)",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__299",
                      "ENEMIES_OBJECT_UNUSED__300",
                      "TDF_MaxShootCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill12"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_DeltaFrame",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__301) || Variables[1] (ENEMIES_OBJECT_UNUSED__302) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__301 - ENEMIES_OBJECT_UNUSED__302) / TDF_MaxShootCount)",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__301",
                      "ENEMIES_OBJECT_UNUSED__302",
                      "TDF_MaxShootCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill13"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_DeltaFrame",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__303) || Variables[1] (ENEMIES_OBJECT_UNUSED__304) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__303 - ENEMIES_OBJECT_UNUSED__304) / TDF_MaxShootCount)",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__303",
                      "ENEMIES_OBJECT_UNUSED__304",
                      "TDF_MaxShootCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill14"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_DeltaFrame",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__305) || Variables[1] (ENEMIES_OBJECT_UNUSED__306) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__305 - ENEMIES_OBJECT_UNUSED__306) / TDF_MaxShootCount)",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__305",
                      "ENEMIES_OBJECT_UNUSED__306",
                      "TDF_MaxShootCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_CurIndex",
              "value": 0
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (TDF_MaxShootCount) || RETURN",
                "displayLines": "TDF_MaxShootCount",
                "constants": [],
                "variables": [
                  "TDF_MaxShootCount"
                ]
              },
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "Event": [
                {
                  "name": "SW999 Test Data",
                  "value": {
                    "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "#CL_UI_Skill11_ItemIndex"
                    ]
                  },
                  "value2": {
                    "operator": "Variables[0] (EXP^) || Variables[1] (Arg0_AddValue) || Variables[2] (TDF_MaxShootCount) || DIV || Constants[0] (2) || PARAM_2 || FUNCTION || INVERT || Constants[0] (2) || DIV || Constants[1] (3) || Constants[0] (2) || DIV || Variables[1] (Arg0_AddValue) || Variables[2] (TDF_MaxShootCount) || DIV || MUL || ADD || RETURN",
                    "displayLines": "((-&nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((Arg0_AddValue / TDF_MaxShootCount), 2) / 2) + ((3 / 2) * (Arg0_AddValue / TDF_MaxShootCount)))",
                    "constants": [
                      2,
                      3
                    ],
                    "variables": [
                      "EXP^",
                      "Arg0_AddValue",
                      "TDF_MaxShootCount"
                    ]
                  },
                  "value3": {
                    "operator": "Variables[0] (#CL_TDF_Delay) || Constants[0] (60) || DIV || RETURN",
                    "displayLines": "(#CL_TDF_Delay / 60)",
                    "constants": [
                      60
                    ],
                    "variables": [
                      "#CL_TDF_Delay"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill11"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill12"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill13"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill14"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "paramSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1000512886\">SilverWolf999_Ability11_SingleShoot</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_CurIndex",
                  "value": {
                    "operator": "Variables[0] (Arg0_AddValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Arg0_AddValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Arg0_AddValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill11_Shoot_LeftCount",
                  "value": {
                    "operator": "Variables[0] (Skill11_Shoot_LeftCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Skill11_Shoot_LeftCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Skill11_Shoot_LeftCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2145619400\">SilverWolf999_Ability11_DamagePerformFinishOnKillAll</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Skill Name",
            "skillName": [
              "Skill11"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Skill Name",
            "skillName": [
              "Skill12"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Skill Name",
            "skillName": [
              "Skill13"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Skill Name",
            "skillName": [
              "Skill14"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"33782030\">SilverWolf999_Ability11_TriggerNextItemReady</a>"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1000512886\">SilverWolf999_Ability11_SingleShoot</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Skill Name",
            "skillName": "Skill11"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
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
                  "operator": "Variables[0] (2.4) || Variables[1] (100) || DIV || RETURN",
                  "displayLines": "(2.4 / 100)",
                  "constants": [],
                  "variables": [
                    2.4,
                    100
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (Skill11_Shoot_Stance) || Variables[1] (100) || DIV || RETURN",
                  "displayLines": "(Skill11_Shoot_Stance / 100)",
                  "constants": [],
                  "variables": [
                    "Skill11_Shoot_Stance",
                    100
                  ]
                },
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (2.4) || Variables[1] (100) || DIV || RETURN",
                  "displayLines": "(2.4 / 100)",
                  "constants": [],
                  "variables": [
                    2.4,
                    100
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Skill11_Shoot_Stance) || Variables[1] (100) || DIV || RETURN",
                  "displayLines": "(Skill11_Shoot_Stance / 100)",
                  "constants": [],
                  "variables": [
                    "Skill11_Shoot_Stance",
                    100
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__33782030\">SilverWolf999_Ability11_TriggerNextItemReady</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1112298097\">SilverWolf999_RollItemIndex</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Item_LeftCount",
          "value": {
            "operator": "Variables[0] (Skill11_Item_LeftCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(Skill11_Item_LeftCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill11_Item_LeftCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_UI_Skill11_ItemIndex",
          "value": {
            "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)",
            "constants": [
              1
            ],
            "variables": [
              "#CL_UI_Skill11_ItemIndex"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || RETURN",
            "displayLines": "#CL_UI_Skill11_ItemIndex",
            "constants": [],
            "variables": [
              "#CL_UI_Skill11_ItemIndex"
            ]
          },
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Auto-Battle",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentItem) || RETURN",
            "displayLines": "CurrentItem",
            "constants": [],
            "variables": [
              "CurrentItem"
            ]
          },
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Ability11_Item1_Prepare",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Ability11_Item2_Prepare",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Ability11_Item3_Prepare",
                  "isTrigger": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2145619400\">SilverWolf999_Ability11_DamagePerformFinishOnKillAll</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2145619400\">SilverWolf999_Ability11_DamagePerformFinishOnKillAll</a>",
      "parse": [
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team Entity}}"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1055848525\">_M_SilverWolf999_Ability11_AddBonusLifetime_CD</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Modifier_Callback_Value",
                "compareType": ">",
                "value2": 0,
                "valueType": "LifeTime"
              },
              "modifierType": "Buff",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "function": "Add",
                  "value": 1,
                  "valueType": "Duration"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1055848525\">_M_SilverWolf999_Ability11_AddBonusLifetime_CD</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>",
      "parse": [
        "Unknown EventType4 (Not always an error)[1 true]"
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Battle is Over"
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            }
          ],
          "failed": [
            "Trigger: Skip Death Handling",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
        },
        "Trigger: Ability End"
      ]
    }
  ],
  "references": []
}