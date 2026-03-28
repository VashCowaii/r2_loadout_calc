const configAbility = {
  "fileName": "4023021_Monster_W4_Unicorn_Ability02_Part02",
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
          "target": "{{Player Team All}}"
        },
        "compareType": ">=",
        "value2": 3,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Moonlit Pegasus: Skill02 Target}}"
              },
              {
                "name": "Target Index"
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Moonlit Pegasus: Skill02 Target}}"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Moonlit Pegasus: Skill02 Target}}"
              },
              {
                "name": "Target Index",
                "indexValue": 2
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1016064927\">Monster_W4_Unicorn_Ability02_Attack01</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1032842546\">Monster_W4_Unicorn_Ability02_Attack02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1049620165\">Monster_W4_Unicorn_Ability02_Attack03</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": ">=",
            "value2": 2,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 1
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1016064927\">Monster_W4_Unicorn_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1032842546\">Monster_W4_Unicorn_Ability02_Attack02</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-990219319\">Monster_W4_Unicorn_Ability02_Attack01_1P</a>"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-990219319\">Monster_W4_Unicorn_Ability02_Attack01_1P</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
          "valuePerStack": {
            "_GriffinMark_SPCost": {
              "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
              "displayLines": "UnusedUnderThisBase_379",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_379"
              ]
            },
            "_GriffinMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
              "displayLines": "UnusedUnderThisBase_380",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_380"
              ]
            },
            "_MixedMark_LoseHpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
              "displayLines": "UnusedUnderThisBase_381",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_381"
              ]
            },
            "_UnicornMark_Chance": {
              "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
              "displayLines": "UnusedUnderThisBase_382",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_382"
              ]
            },
            "_UnicornMark_LifeTime": {
              "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
              "displayLines": "UnusedUnderThisBase_383",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_383"
              ]
            },
            "_UnicornMark_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
              "displayLines": "UnusedUnderThisBase_384",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_384"
              ]
            },
            "_UnicornMark_DebuffDamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
              "displayLines": "UnusedUnderThisBase_385",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_385"
              ]
            },
            "_UnicornMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
              "displayLines": "UnusedUnderThisBase_386",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_386"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1016064927\">Monster_W4_Unicorn_Ability02_Attack01</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
          "valuePerStack": {
            "_GriffinMark_SPCost": {
              "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
              "displayLines": "UnusedUnderThisBase_379",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_379"
              ]
            },
            "_GriffinMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
              "displayLines": "UnusedUnderThisBase_380",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_380"
              ]
            },
            "_MixedMark_LoseHpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
              "displayLines": "UnusedUnderThisBase_381",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_381"
              ]
            },
            "_UnicornMark_Chance": {
              "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
              "displayLines": "UnusedUnderThisBase_382",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_382"
              ]
            },
            "_UnicornMark_LifeTime": {
              "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
              "displayLines": "UnusedUnderThisBase_383",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_383"
              ]
            },
            "_UnicornMark_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
              "displayLines": "UnusedUnderThisBase_384",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_384"
              ]
            },
            "_UnicornMark_DebuffDamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
              "displayLines": "UnusedUnderThisBase_385",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_385"
              ]
            },
            "_UnicornMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
              "displayLines": "UnusedUnderThisBase_386",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_386"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1032842546\">Monster_W4_Unicorn_Ability02_Attack02</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
          "valuePerStack": {
            "_GriffinMark_SPCost": {
              "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
              "displayLines": "UnusedUnderThisBase_379",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_379"
              ]
            },
            "_GriffinMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
              "displayLines": "UnusedUnderThisBase_380",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_380"
              ]
            },
            "_MixedMark_LoseHpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
              "displayLines": "UnusedUnderThisBase_381",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_381"
              ]
            },
            "_UnicornMark_Chance": {
              "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
              "displayLines": "UnusedUnderThisBase_382",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_382"
              ]
            },
            "_UnicornMark_LifeTime": {
              "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
              "displayLines": "UnusedUnderThisBase_383",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_383"
              ]
            },
            "_UnicornMark_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
              "displayLines": "UnusedUnderThisBase_384",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_384"
              ]
            },
            "_UnicornMark_DebuffDamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
              "displayLines": "UnusedUnderThisBase_385",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_385"
              ]
            },
            "_UnicornMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
              "displayLines": "UnusedUnderThisBase_386",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_386"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1049620165\">Monster_W4_Unicorn_Ability02_Attack03</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
                      }
                    }
                  ]
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
          "valuePerStack": {
            "_GriffinMark_SPCost": {
              "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
              "displayLines": "UnusedUnderThisBase_379",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_379"
              ]
            },
            "_GriffinMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
              "displayLines": "UnusedUnderThisBase_380",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_380"
              ]
            },
            "_MixedMark_LoseHpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
              "displayLines": "UnusedUnderThisBase_381",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_381"
              ]
            },
            "_UnicornMark_Chance": {
              "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
              "displayLines": "UnusedUnderThisBase_382",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_382"
              ]
            },
            "_UnicornMark_LifeTime": {
              "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
              "displayLines": "UnusedUnderThisBase_383",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_383"
              ]
            },
            "_UnicornMark_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
              "displayLines": "UnusedUnderThisBase_384",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_384"
              ]
            },
            "_UnicornMark_DebuffDamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
              "displayLines": "UnusedUnderThisBase_385",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_385"
              ]
            },
            "_UnicornMark_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
              "displayLines": "UnusedUnderThisBase_386",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_386"
              ]
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1034438552\">Monster_W4_Unicorn_Ability02_Target03</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1017660933\">Monster_W4_Unicorn_Ability02_Target02</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1000883314\">Monster_W4_Unicorn_Ability02_Target01</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}