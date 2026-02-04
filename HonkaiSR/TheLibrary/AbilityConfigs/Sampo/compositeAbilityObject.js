const compositeAbilityObject = {
  "fullCharacterName": "Sampo",
  "trimCharacterName": "Sampo",
  "abilityList": [
    "Sampo_Sampo_Eidolon2",
    "Sampo_Sampo_Trace03",
    "Sampo_Sampo_Trace02",
    "Sampo_Sampo_TechniqueInLevel",
    "Sampo_Sampo_PassiveAbility01",
    "Sampo_Sampo_Ability03_Part02",
    "Sampo_Sampo_Ability03_Part01",
    "Sampo_Sampo_Ability03_EnterReady",
    "Sampo_FireBullet_Ability",
    "Sampo_Sampo_Ability02_Part02",
    "Sampo_Sampo_Ability02_Part01",
    "Sampo_Sampo_Ability01_Part02",
    "Sampo_Sampo_Ability01_Part01",
    "Sampo_Modifiers"
  ],
  "abilityObject": {
    "Sampo_Sampo_Eidolon2": {
      "fileName": "Sampo_Sampo_Eidolon2",
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
          "modifier": "Sampo_Eidolon2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sampo_Eidolon2",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
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
                            "team": "Enemy Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
                              },
                              "team": "Enemy Team"
                            }
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_DOT_Poison"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Trap"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Tree01_LifeTimeAdd",
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
                              "variableName": "_Tree01_LifeTimeAdd",
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
                              "variableName": "_Rank06_DamagePercentageAdd",
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
                              "variableName": "_Rank06_DamagePercentageAdd",
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
                          "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || Variables[1] (_Tree01_LifeTimeAdd) || ADD || RETURN",
                            "displayLines": "(3 + _Tree01_LifeTimeAdd)",
                            "constants": [],
                            "variables": [
                              3,
                              "_Tree01_LifeTimeAdd"
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
                          "stackLimit": {
                            "operator": "Variables[0] (5) || RETURN",
                            "displayLines": "5",
                            "constants": [],
                            "variables": [
                              5
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "operator": "Variables[0] (0.52) || Variables[1] (_Rank06_DamagePercentageAdd) || ADD || RETURN",
                              "displayLines": "(0.52 + _Rank06_DamagePercentageAdd)",
                              "constants": [],
                              "variables": [
                                0.52,
                                "_Rank06_DamagePercentageAdd"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "stackFlag": "CharacterSkill"
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
        }
      ]
    },
    "Sampo_Sampo_Trace03": {
      "fileName": "Sampo_Sampo_Trace03",
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
          "modifier": "M_Sampo_Tree03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Sampo_Tree03",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "flagName": "STAT_DOT_Poison"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Poison"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                          "value": "0.15"
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
        }
      ]
    },
    "Sampo_Sampo_Trace02": {
      "fileName": "Sampo_Sampo_Trace02",
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
          "modifier": "M_Ultimate_ExtraSP",
          "valuePerStack": {
            "MDF_AddValue": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Sampo_Sampo_TechniqueInLevel": {
      "fileName": "Sampo_Sampo_TechniqueInLevel",
      "childAbilityList": [
        "Sampo_Sampo_TechniqueInLevel"
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
          "modifier": "StageAbility_Maze_Sampo_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Sampo_Modifier",
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
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "advanceType": "Delay",
                              "multiAdd": "0.25"
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
    "Sampo_Sampo_PassiveAbility01": {
      "fileName": "Sampo_Sampo_PassiveAbility01",
      "childAbilityList": [
        "Sampo_Sampo_PassiveAbility01"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sampo_Passive"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sampo_Passive",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Trap"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Tree01_LifeTimeAdd",
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
                      "variableName": "_Tree01_LifeTimeAdd",
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
                      "variableName": "_Rank06_DamagePercentageAdd",
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
                      "variableName": "_Rank06_DamagePercentageAdd",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target TAKING DMG}}"
                  },
                  "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || Variables[1] (_Tree01_LifeTimeAdd) || ADD || RETURN",
                    "displayLines": "(3 + _Tree01_LifeTimeAdd)",
                    "constants": [],
                    "variables": [
                      3,
                      "_Tree01_LifeTimeAdd"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.65) || RETURN",
                    "displayLines": "0.65",
                    "constants": [],
                    "variables": [
                      0.65
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (0.52) || Variables[1] (_Rank06_DamagePercentageAdd) || ADD || RETURN",
                      "displayLines": "(0.52 + _Rank06_DamagePercentageAdd)",
                      "constants": [],
                      "variables": [
                        0.52,
                        "_Rank06_DamagePercentageAdd"
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
                }
              ]
            },
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
                      "name": "Update Ability Description",
                      "popUpText": "Deals minor Wind DMG to single enemy targets with 6 Bounces in total.",
                      "skillTrigger": "Skill02"
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
    "Sampo_Sampo_Ability03_Part02": {
      "fileName": "Sampo_Sampo_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "(1.6 * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    1.6
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "(AOE Toughness Value * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Sampo_Ultimate_DOTTakenUp[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
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
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sampo_Sampo_Ability03_Part01": {
      "fileName": "Sampo_Sampo_Ability03_Part01",
      "childAbilityList": [
        "Sampo_Sampo_Ability03_Camera",
        "Sampo_Sampo_Ability03_Part01",
        "Sampo_Sampo_Ability03_Part02",
        "Sampo_Sampo_Ability03_EnterReady"
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
          "ability": "Sampo_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Sampo_Sampo_Ability03_EnterReady": {
      "fileName": "Sampo_Sampo_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Sampo_FireBullet_Ability": {
      "fileName": "Sampo_FireBullet_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank01_LoopTimeAdd",
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
              "variableName": "_Rank01_LoopTimeAdd",
              "value": 0
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (4) || Variables[1] (_Rank01_LoopTimeAdd) || ADD || RETURN",
            "displayLines": "(4 + _Rank01_LoopTimeAdd)",
            "constants": [],
            "variables": [
              4,
              "_Rank01_LoopTimeAdd"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "Shot Fired",
                  "projectileCount": 1,
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_has_poison_layer_greaterequal_5",
                          "value": 0
                        },
                        {
                          "name": "Reconstruct Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "counter": 99,
                          "flagFilter": [
                            "STAT_DOT_Poison"
                          ],
                          "execute": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Modifier_Callback_Value",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (5) || RETURN",
                                  "displayLines": "5",
                                  "constants": [],
                                  "variables": [
                                    5
                                  ]
                                },
                                "valueType": "Layer"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_has_poison_layer_greaterequal_5",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_has_poison_layer_greaterequal_5",
                            "compareType": ">=",
                            "value2": 1,
                            "contextScope": "ContextAbility"
                          },
                          "passed": [
                            {
                              "name": "Trigger Modifier Event",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "variableName": "DOT_TriggerRatio",
                              "eventType": "DOT_Poison",
                              "value": {
                                "operator": "Variables[0] (0.08) || RETURN",
                                "displayLines": "0.08",
                                "constants": [],
                                "variables": [
                                  0.08
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (0.56) || RETURN",
                          "displayLines": "0.56",
                          "constants": [],
                          "variables": [
                            0.56
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
                          "displayLines": "(ST Toughness Value * 0.5)",
                          "constants": [
                            0.5
                          ],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Shot Fired"
        },
        "Deleted bullshit",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sampo_Sampo_Ability02_Part02": {
      "fileName": "Sampo_Sampo_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_has_poison_layer_greaterequal_5",
                  "value": 0
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "counter": 99,
                  "flagFilter": [
                    "STAT_DOT_Poison"
                  ],
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Value",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (5) || RETURN",
                          "displayLines": "5",
                          "constants": [],
                          "variables": [
                            5
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_has_poison_layer_greaterequal_5",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_has_poison_layer_greaterequal_5",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextAbility"
                  },
                  "passed": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT_Poison",
                      "value": {
                        "operator": "Variables[0] (0.08) || RETURN",
                        "displayLines": "0.08",
                        "constants": [],
                        "variables": [
                          0.08
                        ]
                      }
                    }
                  ]
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
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (0.56) || RETURN",
                  "displayLines": "0.56",
                  "constants": [],
                  "variables": [
                    0.56
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
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "FireBullet_Ability",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Sampo_Sampo_Ability02_Part01": {
      "fileName": "Sampo_Sampo_Ability02_Part01",
      "childAbilityList": [
        "Sampo_Sampo_Ability02_Camera",
        "Sampo_Sampo_Ability02_Part01",
        "Sampo_Sampo_Ability02_Part02",
        "Sampo_FireBullet_Ability",
        "Sampo_Sampo_Ability02_End_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 6,
      "toughnessList": [
        10,
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
          "ability": "Sampo_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Sampo_Sampo_Ability01_Part02": {
      "fileName": "Sampo_Sampo_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(1 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(1 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "(1 * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "40%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sampo_Sampo_Ability01_Part01": {
      "fileName": "Sampo_Sampo_Ability01_Part01",
      "childAbilityList": [
        "Sampo_Sampo_Ability01_Camera",
        "Sampo_Sampo_Ability01_Part01",
        "Sampo_Sampo_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sampo_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Sampo_Modifiers": {
      "fileName": "Sampo_Modifiers",
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
          "for": "Sampo_Ultimate_DOTTakenUp[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DoT taken +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DoT Vulnerability",
          "statusName": "DoT Vulnerability"
        }
      ],
      "references": []
    }
  }
}