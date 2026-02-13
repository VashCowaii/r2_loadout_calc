const configAbility = {
  "fileName": "Sparklev0_Sparkle_PassiveAbility_1",
  "childAbilityList": [
    "Sparklev0_Sparkle_PassiveAbility_1",
    "Sparklev0_Sparkle_Eidolon6_BP"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable with Skill Point Max",
      "variableName": "TeamBpMax"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1311234937\">Sparkle_PassiveAbility_Listen</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"705433852\">Sparkle_AbilityPreshow</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_PassiveMaxLayer",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1311234937\">Sparkle_PassiveAbility_Listen</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(2 + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      2
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Skill Point Max",
              "function": "Add",
              "value": {
                "operator": "Variables[0] (2) || INVERT || RETURN",
                "displayLines": "-2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Nocturne"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1668382571\">Sparkle_PointB3_Mark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_QuantumCount",
                      "value": {
                        "operator": "Variables[0] (MDF_QuantumCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_QuantumCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_QuantumCount"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1668382571\">Sparkle_PointB3_Mark</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_QuantumCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_QuantumCount",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_QuantumCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (0.15) || RETURN",
                                  "displayLines": "0.15",
                                  "constants": [],
                                  "variables": [
                                    0.15
                                  ]
                                },
                                "MDF_PropertyValue2": {
                                  "operator": "Variables[0] (0.05) || RETURN",
                                  "displayLines": "0.05",
                                  "constants": [],
                                  "variables": [
                                    0.05
                                  ]
                                }
                              }
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
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "MDF_BPCount",
              "value": "ParamValue"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BPCount",
              "value": {
                "operator": "Variables[0] (MDF_BPCount) || INVERT || RETURN",
                "displayLines": "-MDF_BPCount",
                "constants": [],
                "variables": [
                  "MDF_BPCount"
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
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1017813291\">Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Red Herring</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                    "displayLines": "MDF_PassiveMaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_PassiveMaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    },
                    "MDF_PropertyValue3": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_DefenceAddedRatio2": {
                      "operator": "Variables[0] (0.08) || RETURN",
                      "displayLines": "0.08",
                      "constants": [],
                      "variables": [
                        0.08
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_BPCount) || RETURN",
                    "displayLines": "MDF_BPCount",
                    "constants": [],
                    "variables": [
                      "MDF_BPCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]"
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Nocturne"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1668382571\">Sparkle_PointB3_Mark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_QuantumCount",
                      "value": {
                        "operator": "Variables[0] (MDF_QuantumCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_QuantumCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_QuantumCount"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1668382571\">Sparkle_PointB3_Mark</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_QuantumCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_QuantumCount",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_QuantumCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (0.15) || RETURN",
                                  "displayLines": "0.15",
                                  "constants": [],
                                  "variables": [
                                    0.15
                                  ]
                                },
                                "MDF_PropertyValue2": {
                                  "operator": "Variables[0] (0.05) || RETURN",
                                  "displayLines": "0.05",
                                  "constants": [],
                                  "variables": [
                                    0.05
                                  ]
                                }
                              }
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
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__705433852\">Sparkle_AbilityPreshow</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Is Part Of",
          "of": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "mustBeAlive2": true,
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": -0.5
        }
      }
    }
  ]
}