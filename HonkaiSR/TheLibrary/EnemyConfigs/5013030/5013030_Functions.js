const configAbility = {
  "fileName": "5013030_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 8,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-631197406\">TaskList_Monster_W5_Peacock_Ability01_GetTargetColor</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentColorSlotIndex) || RETURN",
            "displayLines": "CurrentColorSlotIndex",
            "constants": [],
            "variables": [
              "CurrentColorSlotIndex"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot1",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                    "displayLines": "TaskListDF_ColorValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorValue"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.16,
                    "TaskListDF_ColorValue": {
                      "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                      "displayLines": "TaskListDF_ColorValue",
                      "constants": [],
                      "variables": [
                        "TaskListDF_ColorValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 2
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot2",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                    "displayLines": "TaskListDF_ColorValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorValue"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.08,
                    "TaskListDF_ColorValue": {
                      "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                      "displayLines": "TaskListDF_ColorValue",
                      "constants": [],
                      "variables": [
                        "TaskListDF_ColorValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 3
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot3",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                    "displayLines": "TaskListDF_ColorValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorValue"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.04,
                    "TaskListDF_ColorValue": {
                      "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                      "displayLines": "TaskListDF_ColorValue",
                      "constants": [],
                      "variables": [
                        "TaskListDF_ColorValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 4
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot4",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                    "displayLines": "TaskListDF_ColorValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorValue"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.02,
                    "TaskListDF_ColorValue": {
                      "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                      "displayLines": "TaskListDF_ColorValue",
                      "constants": [],
                      "variables": [
                        "TaskListDF_ColorValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 5
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot5",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                    "displayLines": "TaskListDF_ColorValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorValue"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.01,
                    "TaskListDF_ColorValue": {
                      "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                      "displayLines": "TaskListDF_ColorValue",
                      "constants": [],
                      "variables": [
                        "TaskListDF_ColorValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 6
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot6",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                    "displayLines": "TaskListDF_ColorValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorValue"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1,
                    "TaskListDF_ColorValue": {
                      "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
                      "displayLines": "TaskListDF_ColorValue",
                      "constants": [],
                      "variables": [
                        "TaskListDF_ColorValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentColorSlotIndex",
                  "value": 7
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ColorInInsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2014742101\">Enemy_W5_Peacock_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ColorInInsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      "abilityName": "Monster_W5_Peacock_AbilityP01_Insert01_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "Break"
                      ],
                      "allowAbilityTriggers": false
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (TaskListDF_ColorValue) || RETURN",
            "displayLines": "TaskListDF_ColorValue",
            "constants": [],
            "variables": [
              "TaskListDF_ColorValue"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "IceScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ImaginaryScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "PhysicalScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "QuantumScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ThunderScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7,
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "WindScore",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (TaskListDF_ColorScoreValue) || RETURN",
                    "displayLines": "TaskListDF_ColorScoreValue",
                    "constants": [],
                    "variables": [
                      "TaskListDF_ColorScoreValue"
                    ]
                  },
                  "max": 100
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1978233524\">TaskList_Monster_W5_Peacock_Ability01_UseColor</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
            "displayLines": "DynamicString_ColorSlotX",
            "constants": [],
            "variables": [
              "DynamicString_ColorSlotX"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot1) || RETURN",
                    "displayLines": "ColorSlot1",
                    "constants": [],
                    "variables": [
                      "ColorSlot1"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot1",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot2) || RETURN",
                    "displayLines": "ColorSlot2",
                    "constants": [],
                    "variables": [
                      "ColorSlot2"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot2",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot3) || RETURN",
                    "displayLines": "ColorSlot3",
                    "constants": [],
                    "variables": [
                      "ColorSlot3"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot3",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot4) || RETURN",
                    "displayLines": "ColorSlot4",
                    "constants": [],
                    "variables": [
                      "ColorSlot4"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot4",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot5) || RETURN",
                    "displayLines": "ColorSlot5",
                    "constants": [],
                    "variables": [
                      "ColorSlot5"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot5",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot6) || RETURN",
                    "displayLines": "ColorSlot6",
                    "constants": [],
                    "variables": [
                      "ColorSlot6"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot6",
                  "value": 0
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentColorSlotIndex",
          "value": -1,
          "max": 7
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1548220737\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Skill05</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
            "displayLines": "DynamicString_ColorSlotX",
            "constants": [],
            "variables": [
              "DynamicString_ColorSlotX"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot1) || RETURN",
                    "displayLines": "ColorSlot1",
                    "constants": [],
                    "variables": [
                      "ColorSlot1"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot1",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot2) || RETURN",
                    "displayLines": "ColorSlot2",
                    "constants": [],
                    "variables": [
                      "ColorSlot2"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot2",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot3) || RETURN",
                    "displayLines": "ColorSlot3",
                    "constants": [],
                    "variables": [
                      "ColorSlot3"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot3",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot4) || RETURN",
                    "displayLines": "ColorSlot4",
                    "constants": [],
                    "variables": [
                      "ColorSlot4"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot4",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot5) || RETURN",
                    "displayLines": "ColorSlot5",
                    "constants": [],
                    "variables": [
                      "ColorSlot5"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot5",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot6) || RETURN",
                    "displayLines": "ColorSlot6",
                    "constants": [],
                    "variables": [
                      "ColorSlot6"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Function's Target List}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                              "displayLines": "{[SkillP01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[2]]}"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "Peacock_UseColor",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ColorSlot6",
                  "value": 0
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentColorSlotIndex",
          "value": -1,
          "max": 7
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1174046786\">TaskList_Monster_W5_Peacock_Ability01_UseColor_Pre</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
            "displayLines": "DynamicString_ColorSlotX",
            "constants": [],
            "variables": [
              "DynamicString_ColorSlotX"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-786751512\">Enemy_W5_Peacock_AbilityP01_Color_Slot1</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-736418655\">Enemy_W5_Peacock_AbilityP01_Color_Slot2</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-753196274\">Enemy_W5_Peacock_AbilityP01_Color_Slot3</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-702863417\">Enemy_W5_Peacock_AbilityP01_Color_Slot4</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-719641036\">Enemy_W5_Peacock_AbilityP01_Color_Slot5</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-669308179\">Enemy_W5_Peacock_AbilityP01_Color_Slot6</a>"
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__831198684\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
            "displayLines": "DynamicString_ColorSlotX",
            "constants": [],
            "variables": [
              "DynamicString_ColorSlotX"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot1) || RETURN",
                    "displayLines": "ColorSlot1",
                    "constants": [],
                    "variables": [
                      "ColorSlot1"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot2) || RETURN",
                    "displayLines": "ColorSlot2",
                    "constants": [],
                    "variables": [
                      "ColorSlot2"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot3) || RETURN",
                    "displayLines": "ColorSlot3",
                    "constants": [],
                    "variables": [
                      "ColorSlot3"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot4) || RETURN",
                    "displayLines": "ColorSlot4",
                    "constants": [],
                    "variables": [
                      "ColorSlot4"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot5) || RETURN",
                    "displayLines": "ColorSlot5",
                    "constants": [],
                    "variables": [
                      "ColorSlot5"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot6) || RETURN",
                    "displayLines": "ColorSlot6",
                    "constants": [],
                    "variables": [
                      "ColorSlot6"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
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
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__181"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "stackLimit": 10,
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1476300771\">TaskList_Monster_W5_Peacock_Ability01_ColorChangeIntoWeakness_V2</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (ColorInInsertFlag) || RETURN",
            "displayLines": "ColorInInsertFlag",
            "constants": [],
            "variables": [
              "ColorInInsertFlag"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1436335976\">Enemy_W5_Peacock_AbilityP01_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-773592435\">Enemy_W5_Peacock_AbilityP01_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-178254661\">Enemy_W5_Peacock_AbilityP01_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2088030707\">Enemy_W5_Peacock_AbilityP01_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-557658473\">Enemy_W5_Peacock_AbilityP01_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1987684272\">Enemy_W5_Peacock_AbilityP01_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 7,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__181"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                      "stackLimit": 10,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"245030982\">Enemy_W5_Peacock_AbilityP01_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind Weakness</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__81149260\">TaskList_Monster_W5_Peacock_Ability01_ColorBreak</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DynamicString_ColorSlotX) || RETURN",
            "displayLines": "DynamicString_ColorSlotX",
            "constants": [],
            "variables": [
              "DynamicString_ColorSlotX"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot1) || RETURN",
                    "displayLines": "ColorSlot1",
                    "constants": [],
                    "variables": [
                      "ColorSlot1"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot2) || RETURN",
                    "displayLines": "ColorSlot2",
                    "constants": [],
                    "variables": [
                      "ColorSlot2"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot3) || RETURN",
                    "displayLines": "ColorSlot3",
                    "constants": [],
                    "variables": [
                      "ColorSlot3"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot4) || RETURN",
                    "displayLines": "ColorSlot4",
                    "constants": [],
                    "variables": [
                      "ColorSlot4"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot5) || RETURN",
                    "displayLines": "ColorSlot5",
                    "constants": [],
                    "variables": [
                      "ColorSlot5"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (ColorSlot6) || RETURN",
                    "displayLines": "ColorSlot6",
                    "constants": [],
                    "variables": [
                      "ColorSlot6"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Ice",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 7,
                      "execute": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    }
  ],
  "references": []
}