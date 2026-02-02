const compositeAbilityObject = {
  "fullCharacterName": "Sparkle",
  "trimCharacterName": "Sparkle",
  "abilityList": [
    "Sparkle_Sparkle_Trace02",
    "Sparkle_Sparkle_TechniqueInLevel",
    "Sparkle_Sparkle_PassiveAbility_1",
    "Sparkle_Sparkle_Eidolon6_BP",
    "Sparkle_Sparkle_Ability03_Part02",
    "Sparkle_Sparkle_Ability03_Part01",
    "Sparkle_Sparkle_Ability03_EnterReady",
    "Sparkle_Sparkle_Ability02_Self_Part02",
    "Sparkle_Sparkle_Ability02_Others_Part02",
    "Sparkle_Sparkle_Ability02_Part01",
    "Sparkle_Sparkle_Ability01_Part02",
    "Sparkle_Sparkle_Ability01_Part01",
    "Sparkle_Modifiers"
  ],
  "abilityObject": {
    "Sparkle_Sparkle_Trace02": {
      "fileName": "Sparkle_Sparkle_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Sparkle_Sparkle_TechniqueInLevel": {
      "fileName": "Sparkle_Sparkle_TechniqueInLevel",
      "childAbilityList": [
        "Sparkle_Sparkle_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sparkle_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Maze_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "adjustmentType": "+"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Sparkle_Sparkle_PassiveAbility_1": {
      "fileName": "Sparkle_Sparkle_PassiveAbility_1",
      "childAbilityList": [
        "Sparkle_Sparkle_PassiveAbility_1",
        "Sparkle_Sparkle_Eidolon6_BP"
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
          "modifier": "Sparkle_PassiveAbility_Listen"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sparkle_AbilityPreshow"
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
          "for": "Sparkle_PassiveAbility_Listen",
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
                            "modifier": "Sparkle_PointB3_Mark",
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
                          "modifier": "Sparkle_PointB3_Mark"
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
                          "modifier": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
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
                              "modifier": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
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
                                  "modifier": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
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
                      "modifier": "Sparkle_PassiveAbility_AllDamageAddedRatio02[<span class=\"descriptionNumberColor\">Red Herring</span>]",
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
                            "modifier": "Sparkle_PointB3_Mark",
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
                          "modifier": "Sparkle_PointB3_Mark"
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
                          "modifier": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
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
                              "modifier": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
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
                                  "modifier": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
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
          "for": "Sparkle_AbilityPreshow",
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
    },
    "Sparkle_Sparkle_Eidolon6_BP": {
      "fileName": "Sparkle_Sparkle_Eidolon6_BP",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
            "displayLines": "MDF_Sparkle_CritDmgValue",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.24
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
              "displayLines": "MDF_CriticalDamageBase_change",
              "constants": [],
              "variables": [
                "MDF_CriticalDamageBase_change"
              ]
            },
            "MDF_PropertyValueBase": {
              "operator": "Variables[0] (0.45) || RETURN",
              "displayLines": "0.45",
              "constants": [],
              "variables": [
                0.45
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "of": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "mustBeAlive2": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "advanceType": "Advance",
              "multi": "-0.5"
            }
          ]
        }
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability03_Part02": {
      "fileName": "Sparkle_Sparkle_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayer01"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            ]
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (4) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(4 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  4
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_PassiveLayer02"
            }
          ],
          "failed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_PassiveLayer02"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_Sparkle_CritDmgValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "NDF_Sparkle_Rank06_CritDmg",
              "value": {
                "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
                "constants": [],
                "variables": [
                  "MDF_Sparkle_CritDmgValue",
                  0.3
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValueConvert": {
                      "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                      "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                      "constants": [],
                      "variables": [
                        "MDF_CriticalDamageBase_change",
                        "NDF_Sparkle_Rank06_CritDmg"
                      ]
                    },
                    "MDF_PropertyValueBase": {
                      "operator": "Variables[0] (0.45) || RETURN",
                      "displayLines": "0.45",
                      "constants": [],
                      "variables": [
                        0.45
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                          "invertCondition": true
                        }
                      }
                    ]
                  },
                  "modifier": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValueConvert2": {
                      "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                      "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                      "constants": [],
                      "variables": [
                        "MDF_CriticalDamageBase_change",
                        "NDF_Sparkle_Rank06_CritDmg"
                      ]
                    },
                    "MDF_PropertyValueBase2": {
                      "operator": "Variables[0] (0.45) || RETURN",
                      "displayLines": "0.45",
                      "constants": [],
                      "variables": [
                        0.45
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability03_Part01": {
      "fileName": "Sparkle_Sparkle_Ability03_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability03_Camera",
        "Sparkle_Sparkle_Ability03_EnterReady",
        "Sparkle_Sparkle_Ability03_Part01",
        "Sparkle_Sparkle_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparkle_Ability03_Part02"
        }
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability03_EnterReady": {
      "fileName": "Sparkle_Sparkle_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Sparkle_Sparkle_Ability02_Self_Part02": {
      "fileName": "Sparkle_Sparkle_Ability02_Self_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
            "displayLines": "MDF_Sparkle_CritDmgValue",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.24
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "NDF_Sparkle_Rank06_CritDmg",
              "value": {
                "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
                "constants": [],
                "variables": [
                  "MDF_Sparkle_CritDmgValue",
                  0.3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]"
                        }
                      ]
                    }
                  }
                ]
              },
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
                  "displayLines": "MDF_CriticalDamageBase_change",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability02_Others_Part02": {
      "fileName": "Sparkle_Sparkle_Ability02_Others_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
            "displayLines": "MDF_Sparkle_CritDmgValue",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.24
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "NDF_Sparkle_Rank06_CritDmg",
              "value": {
                "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
                "constants": [],
                "variables": [
                  "MDF_Sparkle_CritDmgValue",
                  0.3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]"
                        },
                        {
                          "name": "Is Part Of",
                          "of": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "mustBeAlive2": true
                        }
                      ]
                    }
                  }
                ]
              },
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
                  "displayLines": "MDF_CriticalDamageBase_change",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multi": "-0.5"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability02_Part01": {
      "fileName": "Sparkle_Sparkle_Ability02_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability02_Part01",
        "Sparkle_Sparkle_Ability02_Self_Camera",
        "Sparkle_Sparkle_Ability02_Self_Part02",
        "Sparkle_Sparkle_Ability02_Others_Camera",
        "Sparkle_Sparkle_Ability02_Others_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Sparkle_Ability02_Self_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Sparkle_Ability02_Others_Part02",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability01_Part02": {
      "fileName": "Sparkle_Sparkle_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Almanac"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sparkle_Sparkle_Ability01_Part01": {
      "fileName": "Sparkle_Sparkle_Ability01_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability01_Camera",
        "Sparkle_Sparkle_Ability01_Part01",
        "Sparkle_Sparkle_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparkle_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Sparkle_Modifiers": {
      "fileName": "Sparkle_Modifiers",
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
          "for": "Sparkle_Tree03[<span class=\"descriptionNumberColor\">Nocturne</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue3",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue2) || ADD || RETURN",
                        "displayLines": "(MDF_PropertyValue + MDF_PropertyValue2)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue",
                          "MDF_PropertyValue2"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue2) || ADD || RETURN",
                        "displayLines": "(MDF_PropertyValue + MDF_PropertyValue2)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue",
                          "MDF_PropertyValue2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue3",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                        "displayLines": "MDF_PropertyValue",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                        "displayLines": "MDF_PropertyValue",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
          "type": "Buff",
          "effectName": "Nocturne",
          "statusName": "Nocturne"
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Eidolon6_Mark",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Sparkle_Eidolon6_Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_PassiveAbility_Real_AllDamageAddedRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(0 - MDF_DefenceAddedRatio)"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageAddedRatio) || RETURN",
                    "displayLines": "MDF_AllDamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_PointB3_Mark",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_PassiveAbility_AllDamageAddedRatio02[<span class=\"descriptionNumberColor\">Red Herring</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sparkle_PassiveAbility_Real_AllDamageAddedRatio"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                      "displayLines": "MDF_PassiveMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_PassiveMaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                        "displayLines": "MDF_PassiveMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_PassiveMaxLayer"
                        ]
                      }
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
                    "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_PropertyValue3) || ADD || Variables[2] (MDF_Count) || MUL || RETURN",
                        "displayLines": "((MDF_PropertyValue2 + MDF_PropertyValue3) * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_PropertyValue3",
                          "MDF_Count"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_PropertyValue2 * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_Count"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Ignores <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio2</span> of the target's DEF when dealing DMG."
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DefenceAddedRatio2",
                      "value": {
                        "operator": "Variables[0] (MDF_DefenceAddedRatio2) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_DefenceAddedRatio2 * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_DefenceAddedRatio2",
                          "MDF_Count"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sparkle_PassiveAbility_Real_AllDamageAddedRatio",
                  "valuePerStack": {
                    "MDF_AllDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    },
                    "MDF_DefenceAddedRatio": {
                      "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                      "displayLines": "MDF_DefenceAddedRatio2",
                      "constants": [],
                      "variables": [
                        "MDF_DefenceAddedRatio2"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_PropertyValue2 * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sparkle_PassiveAbility_Real_AllDamageAddedRatio",
                      "valuePerStack": {
                        "MDF_AllDamageAddedRatio": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        },
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                          "displayLines": "MDF_DefenceAddedRatio2",
                          "constants": [],
                          "variables": [
                            "MDF_DefenceAddedRatio2"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_PropertyValue3) || ADD || Variables[2] (MDF_Count) || MUL || RETURN",
                        "displayLines": "((MDF_PropertyValue2 + MDF_PropertyValue3) * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_PropertyValue3",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sparkle_PassiveAbility_Real_AllDamageAddedRatio",
                      "valuePerStack": {
                        "MDF_AllDamageAddedRatio": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        },
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                          "displayLines": "MDF_DefenceAddedRatio2",
                          "constants": [],
                          "variables": [
                            "MDF_DefenceAddedRatio2"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue2",
            "MDF_PropertyValue3",
            "MDF_DefenceAddedRatio2"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Red Herring"
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Eidolon6_CritDmgAddedRatio01",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                    "displayLines": "MDF_PropertyValueConvert",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                    "displayLines": "MDF_PropertyValueConvert",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert2) || Variables[1] (MDF_PropertyValueBase2) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValueConvert2 + MDF_PropertyValueBase2)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert2",
                      "MDF_PropertyValueBase2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValueConvert2",
            "MDF_PropertyValueBase2"
          ],
          "latentQueue": [
            "MDF_PassiveLayer01",
            "MDF_PassiveLayer02"
          ],
          "description": "Increase CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Dreamdiver"
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Artificial Flower"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_PropertyValueConvert2": {
                          "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                          "displayLines": "MDF_PropertyValueConvert",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValueConvert"
                          ]
                        },
                        "MDF_PropertyValueBase2": {
                          "operator": "Variables[0] (MDF_PropertyValueBase) || RETURN",
                          "displayLines": "MDF_PropertyValueBase",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValueBase"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || Variables[1] (MDF_PropertyValueBase) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert",
                      "MDF_PropertyValueBase"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || Variables[1] (MDF_PropertyValueBase) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert",
                      "MDF_PropertyValueBase"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValueConvert",
            "MDF_PropertyValueBase"
          ],
          "latentQueue": [],
          "description": "Increase CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Dreamdiver"
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Eidolon4_CD",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add",
                      "value": 1,
                      "valueType": "Duration"
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                        "displayLines": "MDF_PropertyValue2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> and additionally enhances the DMG Boost effect provided by each stack of Sparkle's talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End"
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [
            "MDF_PassiveLayer01",
            "MDF_PassiveLayer02"
          ],
          "description": "Additionally enhances the DMG Boost effect provided by each stack of Sparkle's talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Cipher",
          "statusName": "Cipher"
        }
      ],
      "references": []
    }
  }
}