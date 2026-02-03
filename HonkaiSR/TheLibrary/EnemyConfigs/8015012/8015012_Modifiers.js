const configAbility = {
  "fileName": "8015012_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Monster_AML_Boss_IF_BattleAlert",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill12"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Attack targets marked by the same Type",
                  "type": "Warning"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill13"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Attack targets marked by the same Type",
                  "type": "Warning"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                        }
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_Part1_Alive",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0.5,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PartAliveNumber",
                  "value": {
                    "operator": "Variables[0] (_Part1_Alive) || Variables[1] (_Part2_Alive) || ADD || Variables[2] (_Part3_Alive) || ADD || RETURN",
                    "displayLines": "((_Part1_Alive + _Part2_Alive) + _Part3_Alive)",
                    "constants": [],
                    "variables": [
                      "_Part1_Alive",
                      "_Part2_Alive",
                      "_Part3_Alive"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat all parts to inflict Weakness Break on the boss",
                      "type": "Warning"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel"
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PartAliveNumber",
                  "value": {
                    "operator": "Variables[0] (_Part1_Alive) || Variables[1] (_Part2_Alive) || ADD || Variables[2] (_Part3_Alive) || ADD || RETURN",
                    "displayLines": "((_Part1_Alive + _Part2_Alive) + _Part3_Alive)",
                    "constants": [],
                    "variables": [
                      "_Part1_Alive",
                      "_Part2_Alive",
                      "_Part3_Alive"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": "<=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat all parts to inflict Weakness Break on the boss",
                      "type": "Warning"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 1,
                        "conditions": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                            }
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Enemy InfoPanel",
                          "text": "Attack targets marked by the same Type",
                          "type": "Warning"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Enemy InfoPanel"
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
          "name": "Variable Value Changes",
          "variableName": "_Part2_Alive",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0.5,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PartAliveNumber",
                  "value": {
                    "operator": "Variables[0] (_Part1_Alive) || Variables[1] (_Part2_Alive) || ADD || Variables[2] (_Part3_Alive) || ADD || RETURN",
                    "displayLines": "((_Part1_Alive + _Part2_Alive) + _Part3_Alive)",
                    "constants": [],
                    "variables": [
                      "_Part1_Alive",
                      "_Part2_Alive",
                      "_Part3_Alive"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat all parts to inflict Weakness Break on the boss",
                      "type": "Warning"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel"
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PartAliveNumber",
                  "value": {
                    "operator": "Variables[0] (_Part1_Alive) || Variables[1] (_Part2_Alive) || ADD || Variables[2] (_Part3_Alive) || ADD || RETURN",
                    "displayLines": "((_Part1_Alive + _Part2_Alive) + _Part3_Alive)",
                    "constants": [],
                    "variables": [
                      "_Part1_Alive",
                      "_Part2_Alive",
                      "_Part3_Alive"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": "<=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat all parts to inflict Weakness Break on the boss",
                      "type": "Warning"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 1,
                        "conditions": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                            }
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Enemy InfoPanel",
                          "text": "Attack targets marked by the same Type",
                          "type": "Warning"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Enemy InfoPanel"
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
          "name": "Variable Value Changes",
          "variableName": "_Part3_Alive",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0.5,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PartAliveNumber",
                  "value": {
                    "operator": "Variables[0] (_Part1_Alive) || Variables[1] (_Part2_Alive) || ADD || Variables[2] (_Part3_Alive) || ADD || RETURN",
                    "displayLines": "((_Part1_Alive + _Part2_Alive) + _Part3_Alive)",
                    "constants": [],
                    "variables": [
                      "_Part1_Alive",
                      "_Part2_Alive",
                      "_Part3_Alive"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat all parts to inflict Weakness Break on the boss",
                      "type": "Warning"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel"
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PartAliveNumber",
                  "value": {
                    "operator": "Variables[0] (_Part1_Alive) || Variables[1] (_Part2_Alive) || ADD || Variables[2] (_Part3_Alive) || ADD || RETURN",
                    "displayLines": "((_Part1_Alive + _Part2_Alive) + _Part3_Alive)",
                    "constants": [],
                    "variables": [
                      "_Part1_Alive",
                      "_Part2_Alive",
                      "_Part3_Alive"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartAliveNumber",
                    "compareType": "<=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat all parts to inflict Weakness Break on the boss",
                      "type": "Warning"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 1,
                        "conditions": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                            }
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Enemy InfoPanel",
                          "text": "Attack targets marked by the same Type",
                          "type": "Warning"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Enemy InfoPanel"
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
      "stackData": [],
      "latentQueue": [
        "SkillEX03_P4_ActionDelayRatio"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_AbilityEX04",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_AbilityEX03",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_AbilityEX02",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_AbilityEX01",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_ReactTarget_Q"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_ReactTarget_I"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle[<span class=\"descriptionNumberColor\">Snarelock</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_Entangle",
        "STAT_Confine",
        "STAT_SpeedDown",
        "DisableAction",
        "AvatarBreak",
        "STAT_CTRL"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Entangle_DamageValue) || RETURN",
                  "displayLines": "Modifier_Entangle_DamageValue",
                  "constants": [],
                  "variables": [
                    "Modifier_Entangle_DamageValue"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_BeingHitDamageValue",
                "compareType": "<=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": ">",
                    "value2": 1,
                    "valueType": "LifeTime"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 3,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": ">",
                        "value2": 1,
                        "valueType": "LifeTime"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": ">",
                        "value2": 1,
                        "valueType": "LifeTime"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedDownRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_SpeedDownRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_SpeedDownRatio"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_ActionDelayRatio"
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "value": {
                "operator": "Variables[0] (MDF_BeingHitDamageValue) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_BeingHitDamageValue + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_BeingHitDamageValue"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BeHitFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_BeHitFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_BeingHitDamageValue",
                      "value": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_BeingHitDamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_BeingHitDamageValue) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_BeingHitDamageValue + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_BeingHitDamageValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_BeingHitDamageValue",
                "compareType": "<=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 3,
                    "contextScope": "ContextModifier"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_BeingHitDamageValue",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_BeingHitDamageValue",
                  "value": 4
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_BeingHitDamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_BeingHitDamageValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_BeingHitDamageValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_BeingHitDamageValue"
                    ]
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add",
                  "value": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_BeingHitDamageValue",
                "compareType": "<=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BeingHitDamageValue",
                    "compareType": "<=",
                    "value2": 3,
                    "contextScope": "ContextModifier"
                  }
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Action delayed and SPD reduced. Takes Quantum Additional DMG at the start of the next turn.<br>This Additional DMG is increased whenever the target under the Snarelock status is attacked, up to 5 stacks. This status is considered to be both Quantum Entanglement and Imprisonment.",
      "type": "Debuff",
      "effectName": "Snarelock",
      "statusName": "Snarelock",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Enhance_Imaginary_SpecialMark",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Enhance_Quantum_SpecialMark",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ReleaseFlag",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary_SpecialMark"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary_SpecialMark"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Weak to Attacker",
                    "weakTo": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ReleaseFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakAddedRatio) || RETURN",
                "displayLines": "MDF_StanceBreakAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ReleaseFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "This unit can deal Toughness Reduction to targets with Imaginary Mark with increased Weakness Break Efficiency. After attacking a target with Imaginary Mark, Imaginary Infusion is dispelled. Having both Quantum Infusion and Imaginary Infusion states at the same time triggers Ruinous Collision with a high chance of being inflicted with the Snarelock state.",
      "type": "Other",
      "effectName": "Imaginary Infused",
      "statusName": "Imaginary Infusion",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "invertCondition": true
            },
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
                }
              ]
            }
          ]
        },
        "toughnessForcedReductionPreview": 1
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ReleaseFlag",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum_SpecialMark"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum_SpecialMark"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Weak to Attacker",
                    "weakTo": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ReleaseFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakAddedRatio) || RETURN",
                "displayLines": "MDF_StanceBreakAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ReleaseFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "This unit can deal Toughness Reduction to targets with Quantum Mark with increased Weakness Break Efficiency. After attacking a target with Quantum Mark, Quantum Infusion is dispelled. Having both Quantum Infusion and Imaginary Infusion states at the same time triggers Ruinous Collision with a high chance of being inflicted with the Snarelock state.",
      "type": "Other",
      "effectName": "Quantum Infused",
      "statusName": "Quantum Infusion",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "invertCondition": true
            },
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
                }
              ]
            }
          ]
        },
        "toughnessForcedReductionPreview": 1
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_DamageTakenUp",
      "modifierFlags": [
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_AML_Boss_IF_Insert_Recover_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_ListenAllPartLimbo",
      "execute": [
        {
          "eventTrigger": "Entity Put Into Limbo [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_Part1_Alive",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_Part2_Alive",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_Part3_Alive",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ListenAllDieController",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ListenAllDieController",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_AML_Boss_IF_Insert02_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_ListenPartDie",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_Monster_AML_Boss_IF_PartRevive"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_Monster_AML_Boss_IF_PartRevive",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 1}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Part2_Alive",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Part3_Alive",
                        "compareType": "=",
                        "value2": 0
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_DamageTakenUp",
                    "invertCondition": true
                  },
                  "abilityName": "Monster_AML_Boss_IF_InsertPart1_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterReviveSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 2}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Part1_Alive",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Part3_Alive",
                        "compareType": "=",
                        "value2": 0
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_DamageTakenUp",
                    "invertCondition": true
                  },
                  "abilityName": "Monster_AML_Boss_IF_InsertPart2_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterReviveSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 3}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Part1_Alive",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Part2_Alive",
                        "compareType": "=",
                        "value2": 0
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_DamageTakenUp",
                    "invertCondition": true
                  },
                  "abilityName": "Monster_AML_Boss_IF_InsertPart3_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterReviveSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_PassiveAbilityInitiate_ChangePhaseController",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "AML_Boss_00_IF_PassiveSkillInitiate_InsertFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_DamageTakenUp",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_AML_Boss_IF_Insert_DownAndChangePhase_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_AML_Boss_IF_Insert_ChangePhase_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AML_Boss_00_IF_PassiveSkillInitiate_InsertFlag",
                  "value": 1
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Sign_Part3",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part3_Alive"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part3_Alive",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "PartLoseHpValue"
                },
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                    "displayLines": "(0 - PartLoseHpValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PartLoseHpValue"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Sign_Part2",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part2_Alive"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part2_Alive",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "PartLoseHpValue"
                },
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                    "displayLines": "(0 - PartLoseHpValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PartLoseHpValue"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Sign_Part1",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part1_Alive"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part1_Alive",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "PartLoseHpValue"
                },
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                    "displayLines": "(0 - PartLoseHpValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PartLoseHpValue"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Part_Unselectable",
      "modifierFlags": [
        "Stealth",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            },
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Part_Resistance",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Part_Unselectable"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Part_Unselectable"
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Sign_Part1"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part1_Alive",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Sign_Part2"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part2_Alive",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Sign_Part3"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part3_Alive",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "SkillEX03_P4_ActionDelayRatio"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Part_Revive",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Part_Resistance"
              },
              "passed": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChangePhase_MaxHPValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ChangePhase_MaxHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (ChangePhase_MaxHPValue) || RETURN",
                    "displayLines": "ChangePhase_MaxHPValue",
                    "constants": [],
                    "variables": [
                      "ChangePhase_MaxHPValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Part_Resistance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MoreOneMorePerTurn"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PartReviveDelay"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]",
      "modifierFlags": [
        "Stealth",
        "MuteSpeed",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "AML_Boss_00"
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "AML_Boss_00",
              "state": false
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": [],
      "description": "Cannot be targeted until Disaster's Right Hand, Dawn's Left Hand, and Antimatter Engine have all been destroyed.",
      "type": "Buff",
      "statusName": "Vestige Valor"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_IF_Die_Camera",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Die_Camera"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}