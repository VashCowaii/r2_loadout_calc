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
          "variableName": "TDF_MaxSP",
          "scope": "ContextTaskTemplate",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "TDF_CurSP",
          "scope": "ContextTaskTemplate",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(TDF_MaxSP - TDF_CurSP)"
          },
          "variableName": "TDF_NeedSPForCharge"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "TDF_OverflowSPForCost",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
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
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(parameter[0]_AddValue, TDF_NeedSPForCharge)"
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
                  "displayLines": "TDF_NeedSPForCharge"
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
                    "displayLines": "(parameter[0]_AddValue - TDF_NeedSPForCharge)"
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
                    "displayLines": "(0 - &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue), TDF_OverflowSPForCost))"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": {
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue)"
                },
                "compareType": ">=",
                "value2": {
                  "displayLines": "TDF_OverflowSPForCost"
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
                    "displayLines": "(TDF_OverflowSPForCost - &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue))"
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
            "displayLines": "3"
          },
          "adjustment": "Add"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "TDF_EnemyCountForPerformance",
          "scope": "ContextTaskTemplate",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
              "name": "Define Custom Variable with Team Count",
              "variableName": "TDF_EnemyCountForDamage",
              "scope": "ContextTaskTemplate",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "living": true
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "TDF_EnemyCountForDamage",
              "scope": "ContextTaskTemplate",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              }
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "TDF_EnemyCountForPerformance"
          },
          "hasBreak": false,
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0.4,
                  "variableName": "#CL_TDF_Delay1"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "#CL_TDF_Delay1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.4,
                  "variableName": "#CL_TDF_Delay2"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "#CL_TDF_Delay1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.4,
                  "variableName": "#CL_TDF_Delay2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.6,
                  "variableName": "#CL_TDF_Delay3"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "#CL_TDF_Delay1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.4,
                  "variableName": "#CL_TDF_Delay2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.4,
                  "variableName": "#CL_TDF_Delay3"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.6,
                  "variableName": "#CL_TDF_Delay4"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "#CL_TDF_Delay1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "#CL_TDF_Delay2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.4,
                  "variableName": "#CL_TDF_Delay3"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.6,
                  "variableName": "#CL_TDF_Delay4"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0.6,
                  "variableName": "#CL_TDF_Delay5"
                }
              ]
            }
          ],
          "defaultTasks": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_TDF_Delay1"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_TDF_Delay2"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_TDF_Delay3"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_TDF_Delay4"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_TDF_Delay5"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "#CL_TDF_Index"
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
              "value": {
                "displayLines": "(#CL_TDF_Index + 1)"
              },
              "variableName": "#CL_TDF_Index"
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "displayLines": "#CL_TDF_Index"
              },
              "hasBreak": false,
              "caseTasks": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "#CL_TDF_Delay1"
                      },
                      "variableName": "#CL_TDF_Delay"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "#CL_TDF_Delay2"
                      },
                      "variableName": "#CL_TDF_Delay"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "#CL_TDF_Delay3"
                      },
                      "variableName": "#CL_TDF_Delay"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "#CL_TDF_Delay4"
                      },
                      "variableName": "#CL_TDF_Delay"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "#CL_TDF_Delay5"
                      },
                      "variableName": "#CL_TDF_Delay"
                    }
                  ]
                }
              ],
              "defaultTasks": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "#CL_TDF_Delay"
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "livingState": "Mask_AliveOnly"
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
                      "displayLines": "0.9"
                    },
                    "dmgFormula": "Elation Scaling",
                    "HitSplit": {
                      "displayLines": "(1 / TDF_EnemyCountForDamage)"
                    },
                    "Toughness": {
                      "displayLines": "AOE Toughness Value"
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
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "entityType": "Team Characters"
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
          "scope": "ContextTaskTemplate"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "TDF_CurBP"
          },
          "compareType": "<=",
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Item2Chance * 10)"
                  },
                  "variableName": "Item2Chance"
                }
              ]
            }
          ],
          "defaultTasks": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_CurBP",
                "compareType": ">=",
                "value2": {
                  "displayLines": "TDF_MaxBP"
                },
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Item2Chance * 0.0009999999)"
                  },
                  "variableName": "Item2Chance"
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
                      "value": {
                        "displayLines": "(Item2Chance * 0.1)"
                      },
                      "variableName": "Item2Chance"
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
            "displayLines": "CurScore"
          },
          "compareType": "<",
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": {
                "displayLines": "60"
              },
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Item3Chance * 10)"
                  },
                  "variableName": "Item3Chance"
                }
              ]
            }
          ],
          "defaultTasks": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurScore",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(60 + 240)"
                },
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Item3Chance * 0.0009999999)"
                  },
                  "variableName": "Item3Chance"
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
                      "displayLines": "(60 * 2)"
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Item3Chance * 0.1)"
                      },
                      "variableName": "Item3Chance"
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
              "displayLines": "Item1Chance"
            },
            {
              "displayLines": "Item2Chance"
            },
            {
              "displayLines": "Item3Chance"
            }
          ],
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "CurrentItem"
            },
            {
              "name": "Define Custom Variable",
              "value": 2,
              "variableName": "CurrentItem"
            },
            {
              "name": "Define Custom Variable",
              "value": 3,
              "variableName": "CurrentItem"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "check(value:(CurrentItem === 1), then:(Item1Chance * 0.01), else:1)"
          },
          "variableName": "Item1Chance"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "check(value:(CurrentItem === 2), then:(Item2Chance * 0.01), else:1)"
          },
          "variableName": "Item2Chance"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "check(value:(CurrentItem === 3), then:(Item3Chance * 0.01), else:1)"
          },
          "variableName": "Item3Chance"
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
            "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)"
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
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((Skill11_Shoot_TotalCount / Skill11_Item_TotalCount))"
              },
              "variableName": "TDF_MaxShootCount"
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
                  "value": 1,
                  "variableName": "TDF_MaxShootCount"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "Skill11_Shoot_LeftCount"
              },
              "variableName": "TDF_MaxShootCount"
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
                  "value": {
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__299 - ENEMIES_OBJECT_UNUSED__300) / TDF_MaxShootCount)"
                  },
                  "variableName": "TDF_DeltaFrame"
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
                  "value": {
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__301 - ENEMIES_OBJECT_UNUSED__302) / TDF_MaxShootCount)"
                  },
                  "variableName": "TDF_DeltaFrame"
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
                  "value": {
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__303 - ENEMIES_OBJECT_UNUSED__304) / TDF_MaxShootCount)"
                  },
                  "variableName": "TDF_DeltaFrame"
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
                  "value": {
                    "displayLines": "((ENEMIES_OBJECT_UNUSED__305 - ENEMIES_OBJECT_UNUSED__306) / TDF_MaxShootCount)"
                  },
                  "variableName": "TDF_DeltaFrame"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_TDF_CurIndex"
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "maxLoops": {
                "displayLines": "TDF_MaxShootCount"
              },
              "execute": [
                {
                  "name": "SW999 Test Data",
                  "value": {
                    "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)"
                  },
                  "value2": {
                    "displayLines": "((-&nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((Arg0_AddValue / TDF_MaxShootCount), 2) / 2) + ((3 / 2) * (Arg0_AddValue / TDF_MaxShootCount)))"
                  },
                  "value3": {
                    "displayLines": "(#CL_TDF_Delay / 60)"
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
                  "value": {
                    "displayLines": "(Arg0_AddValue + 1)"
                  },
                  "variableName": "#CL_TDF_CurIndex"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Skill11_Shoot_LeftCount - 1)"
                  },
                  "variableName": "Skill11_Shoot_LeftCount"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"637823618\">Standard_LockHPThresholdReached_Mark</a>",
              "invertCondition": true
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"637823618\">Standard_LockHPThresholdReached_Mark</a>",
              "invertCondition": true
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
                  "displayLines": "(2.4 / 100)"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "(Skill11_Shoot_Stance / 100)"
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
                  "displayLines": "(2.4 / 100)"
                },
                "Toughness": {
                  "displayLines": "(Skill11_Shoot_Stance / 100)"
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
          "value": {
            "displayLines": "(Skill11_Item_LeftCount - 1)"
          },
          "variableName": "Skill11_Item_LeftCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)"
          },
          "variableName": "#CL_UI_Skill11_ItemIndex"
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
            "displayLines": "#CL_UI_Skill11_ItemIndex"
          },
          "hasBreak": false,
          "caseTasks": [
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
            "displayLines": "CurrentItem"
          },
          "hasBreak": false,
          "caseTasks": [
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"637823618\">Standard_LockHPThresholdReached_Mark</a>",
              "invertCondition": true
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
          "conditions": "Battle is Over",
          "passed": [
            {
              "name": "WAIT FOR",
              "conditions": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "entityType": "Team Characters"
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