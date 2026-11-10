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
            "displayLines": "CurrentColorSlotIndex"
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "TaskListDF_ColorValue"
                  },
                  "variableName": "ColorSlot1"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.16,
                    "TaskListDF_ColorValue": {
                      "displayLines": "TaskListDF_ColorValue"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 2,
                  "variableName": "CurrentColorSlotIndex"
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
                    "displayLines": "TaskListDF_ColorValue"
                  },
                  "variableName": "ColorSlot2"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.08,
                    "TaskListDF_ColorValue": {
                      "displayLines": "TaskListDF_ColorValue"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 3,
                  "variableName": "CurrentColorSlotIndex"
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
                    "displayLines": "TaskListDF_ColorValue"
                  },
                  "variableName": "ColorSlot3"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.04,
                    "TaskListDF_ColorValue": {
                      "displayLines": "TaskListDF_ColorValue"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 4,
                  "variableName": "CurrentColorSlotIndex"
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
                    "displayLines": "TaskListDF_ColorValue"
                  },
                  "variableName": "ColorSlot4"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.02,
                    "TaskListDF_ColorValue": {
                      "displayLines": "TaskListDF_ColorValue"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 5,
                  "variableName": "CurrentColorSlotIndex"
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
                    "displayLines": "TaskListDF_ColorValue"
                  },
                  "variableName": "ColorSlot5"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1.01,
                    "TaskListDF_ColorValue": {
                      "displayLines": "TaskListDF_ColorValue"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 6,
                  "variableName": "CurrentColorSlotIndex"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "TaskListDF_ColorValue"
                  },
                  "variableName": "ColorSlot6"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1805655104\">TaskList_Monster_W5_Peacock_Ability01_ColorScoreRefresh</a>",
                  "variables": {
                    "TaskListDF_ColorScoreValue": 1,
                    "TaskListDF_ColorValue": {
                      "displayLines": "TaskListDF_ColorValue"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 7,
                  "variableName": "CurrentColorSlotIndex"
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
                      "variableName": "ColorInInsertFlag",
                      "resetValue": 1,
                      "scope": "TargetEntity"
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
            "displayLines": "TaskListDF_ColorValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
                    "displayLines": "TaskListDF_ColorScoreValue"
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
            "displayLines": "DynamicString_ColorSlotX"
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "ColorSlot1"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot1"
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
                    "displayLines": "ColorSlot2"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot2"
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
                    "displayLines": "ColorSlot3"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot3"
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
                    "displayLines": "ColorSlot4"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot4"
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
                    "displayLines": "ColorSlot5"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot5"
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
                    "displayLines": "ColorSlot6"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot6"
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
            "displayLines": "DynamicString_ColorSlotX"
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "ColorSlot1"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot1"
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
                    "displayLines": "ColorSlot2"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot2"
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
                    "displayLines": "ColorSlot3"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot3"
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
                    "displayLines": "ColorSlot4"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot4"
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
                    "displayLines": "ColorSlot5"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot5"
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
                    "displayLines": "ColorSlot6"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                              "displayLines": "{[SkillP01[2]]}"
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
                  "value": 0,
                  "variableName": "ColorSlot6"
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
            "displayLines": "DynamicString_ColorSlotX"
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
            "displayLines": "DynamicString_ColorSlotX"
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "ColorSlot1"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                    "displayLines": "ColorSlot2"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                    "displayLines": "ColorSlot3"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                    "displayLines": "ColorSlot4"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                    "displayLines": "ColorSlot5"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                    "displayLines": "ColorSlot6"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                            "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
                                  "displayLines": "{[SkillP01[1]]}"
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
            "displayLines": "ColorInInsertFlag"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__181"
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
                          "displayLines": "{[SkillP01[1]]}"
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
                          "displayLines": "{[SkillP01[1]]}"
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
            "displayLines": "DynamicString_ColorSlotX"
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "ColorSlot1"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                    "displayLines": "ColorSlot2"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                    "displayLines": "ColorSlot3"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                    "displayLines": "ColorSlot4"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                    "displayLines": "ColorSlot5"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                    "displayLines": "ColorSlot6"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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
                              "displayLines": "{[SkillP01[3]]}"
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