const compositeAbilityObject = {
  "fullCharacterName": "March 7th - Preservation",
  "trimCharacterName": "March7thP",
  "abilityList": [
    "March7thP_March7th_Eidolon2",
    "March7thP_Mar_7th_TechniqueInLevel",
    "March7thP_Mar_7th_PassiveAbility01_InsertAbility",
    "March7thP_Mar_7th_PassiveAbility01",
    "March7thP_Mar_7th_Ability03_Part02",
    "March7thP_Mar_7th_Ability03_Part01",
    "March7thP_Mar_7th_Ability03_EnterReady",
    "March7thP_Mar_7th_Ability02_Part02",
    "March7thP_Mar_7th_Ability02_Part01",
    "March7thP_Mar_7th_Ability01_Part02",
    "March7thP_Mar_7th_Ability01_Part01",
    "March7thP_Modifiers"
  ],
  "abilityObject": {
    "March7thP_March7th_Eidolon2": {
      "fileName": "March7thP_March7th_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "March7th_Eidolon2_Shield_pre"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "March7th_Eidolon2_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "March7th_Eidolon2_Shield_pre",
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterDefence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Target Has Lowest/Highest Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "partOf": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                        "minOrMax": "Min"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "March7th_Eidolon2_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "valuePerStack": {
                            "MDF_ShieldValue": {
                              "operator": "Variables[0] (0.24) || Variables[1] (CasterDefence) || MUL || Variables[2] (320) || ADD || RETURN",
                              "displayLines": "((0.24 * CasterDefence) + 320)",
                              "constants": [],
                              "variables": [
                                0.24,
                                "CasterDefence",
                                320
                              ]
                            }
                          }
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
        }
      ]
    },
    "March7thP_Mar_7th_TechniqueInLevel": {
      "fileName": "March7thP_Mar_7th_TechniqueInLevel",
      "childAbilityList": [
        "March7thP_Mar_7th_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "StageAbility_Maze_Mar_7th_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Mar_7th_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Resistance Chance",
                        "resistanceList": [
                          "STAT_CTRL_Frozen",
                          "STAT_CTRL"
                        ],
                        "compareType": "<=",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareValue": 0.8
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
                          "duration": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Frozen_DamagePercentage": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
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
                              "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
                              "duration": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              },
                              "baseChance": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              },
                              "valuePerStack": {
                                "Modifier_Frozen_DamagePercentage": {
                                  "operator": "Variables[0] (0.5) || RETURN",
                                  "displayLines": "0.5",
                                  "constants": [],
                                  "variables": [
                                    0.5
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
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thP_Mar_7th_PassiveAbility01_InsertAbility": {
      "fileName": "March7thP_Mar_7th_PassiveAbility01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Girl Power"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterDefence",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank01_DefenceRatio",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank01_DefenceRatio",
                  "value": 0
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
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (_Rank01_DefenceRatio) || RETURN",
                  "displayLines": "_Rank01_DefenceRatio",
                  "constants": [],
                  "variables": [
                    "_Rank01_DefenceRatio"
                  ]
                },
                "dmgFormulaExtra": "DEF Scaling",
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
          "function": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "scope": "ContextCaster",
              "variableName": "Mar7th_00_Passive_CounterView",
              "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
              "multiplier": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Mar7th_00_Passive_CounterView",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Mar7th_00_Passive_CounterView",
            "compareType": ">=",
            "value2": 0.5,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Shield"
              },
              "ifTargetFound": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Mar7th_00_Passive_CounterView) || RETURN",
                    "displayLines": "Mar7th_00_Passive_CounterView",
                    "constants": [],
                    "variables": [
                      "Mar7th_00_Passive_CounterView"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "noTargetFound": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Mar7th_00_Passive_CounterView) || RETURN",
                    "displayLines": "Mar7th_00_Passive_CounterView",
                    "constants": [],
                    "variables": [
                      "Mar7th_00_Passive_CounterView"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "assignState": "True",
              "priorState": "CoolDown",
              "bar#": 3,
              "cooldown": 1
            }
          ]
        }
      ],
      "references": []
    },
    "March7thP_Mar_7th_PassiveAbility01": {
      "fileName": "March7thP_Mar_7th_PassiveAbility01",
      "childAbilityList": [
        "March7thP_Mar_7th_PassiveAbility01",
        "March7thP_Mar_7th_PassiveAbility01_InsertAbility",
        "March7thP_Mar_7th_PassiveAbility01_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        10,
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
          "modifier": "March7th_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "March7th_ListenEnergyBar"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
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
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Mar7th_00_Passive_CounterView",
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
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  2
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Mar7th_00_Passive_CounterView",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "March7th_ListenEnergyBar",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Mar7th_00_Passive_CounterView",
                    "compareType": ">=",
                    "value2": 0.5,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Active"
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Normal"
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
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Mar7th_00_Passive_CounterView",
                    "compareType": ">=",
                    "value2": 0.5,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Active"
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Normal"
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
          "counter": 3,
          "stackData": [],
          "latentQueue": [],
          "description": "Remaining Counter attempt(s).",
          "type": "Other",
          "statusName": "Counter"
        },
        {
          "name": "Modifier Construction",
          "for": "March7th_Passive",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "Mar7th_00_Passive_CounterView",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(2 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              2
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(2 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              2
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(2 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              2
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(2 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              2
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "Mar7th_00_Passive_CounterView",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "March7th_BPAbility_Shield_Counter"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "March7th_BPAbility_Shield_Counter"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "March7th_BPAbility_Shield_Counter",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Mar7th_00_Passive_CounterView",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "maximum": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thP_Mar_7th_Ability03_Part02": {
      "fileName": "March7thP_Mar_7th_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL_Frozen",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Mar_7th_FrozenFlag"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
                }
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
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
          "valuePercent": 0.25,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "March7th_UltraTarget"
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
                }
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
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
          "valuePercent": 0.25,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "March7th_UltraTarget"
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
                }
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
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
          "valuePercent": 0.25,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "March7th_UltraTarget"
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
                }
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "March7th_UltraTarget"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 0.25,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "March7th_UltraTarget"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Ice Spell"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Tree03_ChanceAdd",
              "value": {
                "operator": "Variables[0] (0.15) || RETURN",
                "displayLines": "0.15",
                "constants": [],
                "variables": [
                  0.15
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Tree03_ChanceAdd",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank01_SPAdd",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank01_SPAdd",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (0.5) || Variables[1] (_Tree03_ChanceAdd) || ADD || RETURN",
            "displayLines": "(0.5 + _Tree03_ChanceAdd)",
            "constants": [],
            "variables": [
              0.5,
              "_Tree03_ChanceAdd"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Fix_Rank01_SPAdd",
          "value": {
            "operator": "Variables[0] (_Rank01_SPAdd) || Variables[1] (MDF_FrozenCount) || MUL || RETURN",
            "displayLines": "(_Rank01_SPAdd * MDF_FrozenCount)",
            "constants": [],
            "variables": [
              "_Rank01_SPAdd",
              "MDF_FrozenCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Fix_Rank01_SPAdd",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Fix_Rank01_SPAdd",
              "value": 0
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Fix_Rank01_SPAdd) || RETURN",
            "displayLines": "Fix_Rank01_SPAdd",
            "constants": [],
            "variables": [
              "Fix_Rank01_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Mar_7th_Ability03_ListenFrozen"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Mar_7th_FrozenFlag"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_FrozenCount",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "March7th_UltraTarget",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thP_Mar_7th_Ability03_Part01": {
      "fileName": "March7thP_Mar_7th_Ability03_Part01",
      "childAbilityList": [
        "March7thP_Mar_7th_Ability03_Part01",
        "March7thP_Mar_7th_Ability03_Part02",
        "March7thP_Mar_7th_Ability03_Camera",
        "March7thP_Mar_7th_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "Mar_7th_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "March7thP_Mar_7th_Ability03_EnterReady": {
      "fileName": "March7thP_Mar_7th_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "March7thP_Mar_7th_Ability02_Part02": {
      "fileName": "March7thP_Mar_7th_Ability02_Part02",
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
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Reinforce"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Tree02_LifeTimeAdd",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Tree02_LifeTimeAdd",
              "value": 0
            }
          ]
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
              "variableName": "_Rank06_HealPercentage",
              "value": {
                "operator": "Variables[0] (0.04) || RETURN",
                "displayLines": "0.04",
                "constants": [],
                "variables": [
                  0.04
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_HealValue",
              "value": {
                "operator": "Variables[0] (106) || RETURN",
                "displayLines": "106",
                "constants": [],
                "variables": [
                  106
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_HealPercentage",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_HealValue",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Purify"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "dispelCount": 1,
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "March7th_BPAbility_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (3) || Variables[1] (_Tree02_LifeTimeAdd) || ADD || RETURN",
                "displayLines": "(3 + _Tree02_LifeTimeAdd)",
                "constants": [],
                "variables": [
                  3,
                  "_Tree02_LifeTimeAdd"
                ]
              },
              "valuePerStack": {
                "MDF_HealPercentage": {
                  "operator": "Variables[0] (_Rank06_HealPercentage) || RETURN",
                  "displayLines": "_Rank06_HealPercentage",
                  "constants": [],
                  "variables": [
                    "_Rank06_HealPercentage"
                  ]
                },
                "MDF_HealValue": {
                  "operator": "Variables[0] (_Rank06_HealValue) || RETURN",
                  "displayLines": "_Rank06_HealValue",
                  "constants": [],
                  "variables": [
                    "_Rank06_HealValue"
                  ]
                },
                "MDF_ShieldPercentage": {
                  "operator": "Variables[0] (0.57) || RETURN",
                  "displayLines": "0.57",
                  "constants": [],
                  "variables": [
                    0.57
                  ]
                },
                "MDF_ShieldValue": {
                  "operator": "Variables[0] (760) || RETURN",
                  "displayLines": "760",
                  "constants": [],
                  "variables": [
                    760
                  ]
                },
                "MDF_AggroUp": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
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
              "modifier": "March7th_BPAbility_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (3) || Variables[1] (_Tree02_LifeTimeAdd) || ADD || RETURN",
                "displayLines": "(3 + _Tree02_LifeTimeAdd)",
                "constants": [],
                "variables": [
                  3,
                  "_Tree02_LifeTimeAdd"
                ]
              },
              "valuePerStack": {
                "MDF_HealPercentage": {
                  "operator": "Variables[0] (_Rank06_HealPercentage) || RETURN",
                  "displayLines": "_Rank06_HealPercentage",
                  "constants": [],
                  "variables": [
                    "_Rank06_HealPercentage"
                  ]
                },
                "MDF_HealValue": {
                  "operator": "Variables[0] (_Rank06_HealValue) || RETURN",
                  "displayLines": "_Rank06_HealValue",
                  "constants": [],
                  "variables": [
                    "_Rank06_HealValue"
                  ]
                },
                "MDF_ShieldPercentage": {
                  "operator": "Variables[0] (0.57) || RETURN",
                  "displayLines": "0.57",
                  "constants": [],
                  "variables": [
                    0.57
                  ]
                },
                "MDF_ShieldValue": {
                  "operator": "Variables[0] (760) || RETURN",
                  "displayLines": "760",
                  "constants": [],
                  "variables": [
                    760
                  ]
                },
                "MDF_AggroUp": 0
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
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "March7thP_Mar_7th_Ability02_Part01": {
      "fileName": "March7thP_Mar_7th_Ability02_Part01",
      "childAbilityList": [
        "March7thP_Mar_7th_Ability02_Part01",
        "March7thP_Mar_7th_Ability02_Part02",
        "March7thP_Mar_7th_Ability02_Camera_Self",
        "March7thP_Mar_7th_Ability02_Camera_Other"
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Mar_7th_Ability02_Part02",
          "isTrigger": true
        },
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
        }
      ],
      "references": []
    },
    "March7thP_Mar_7th_Ability01_Part02": {
      "fileName": "March7thP_Mar_7th_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
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
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "March7thP_Mar_7th_Ability01_Part01": {
      "fileName": "March7thP_Mar_7th_Ability01_Part01",
      "childAbilityList": [
        "March7thP_Mar_7th_Ability01_Part01",
        "March7thP_Mar_7th_Ability01_Part02",
        "March7thP_Mar_7th_Ability01_Camera"
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
          "ability": "Mar_7th_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "March7thP_Modifiers": {
      "fileName": "March7thP_Modifiers",
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
          "for": "March7th_BPAbility_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HealPercentage",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                        "displayLines": "MDF_HealPercentage",
                        "constants": [],
                        "variables": [
                          "MDF_HealPercentage"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_HealValue) || RETURN",
                        "displayLines": "MDF_HealValue",
                        "constants": [],
                        "variables": [
                          "MDF_HealValue"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AggroUp",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Gains a Shield that absorbs DMG, and greatly increases the chance to be attacked by enemies. While the Shield persists, enemy attacks will not reduce Shielded characters' HP."
                    }
                  ]
                },
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || RETURN",
                    "displayLines": "MDF_ShieldPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage"
                    ]
                  },
                  "formula": "DEF Scaling (Shield)"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AggroUp) || RETURN",
                    "displayLines": "MDF_AggroUp",
                    "constants": [],
                    "variables": [
                      "MDF_AggroUp"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_HealPercentage",
            "MDF_HealValue",
            "MDF_ShieldPercentage",
            "MDF_ShieldValue",
            "MDF_AggroUp"
          ],
          "latentQueue": [],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "March7th_BPAbility_Shield_Counter",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Shield"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "March7th_BPAbility_Shield_Mark"
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
          "for": "March7th_BPAbility_Shield_Mark",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Mar_7th_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "March7th_BPAbility_Shield_Mark",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Mar_7th_FrozenFlag",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextCaster",
                          "variableName": "MDF_FrozenCount",
                          "value": {
                            "operator": "Variables[0] (MDF_FrozenCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_FrozenCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_FrozenCount"
                            ]
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
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
  }
}