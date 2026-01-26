const compositeAbilityObject = {
  "fullCharacterName": "Rappa",
  "trimCharacterName": "Rappa",
  "abilityList": [
    "Rappa_Rappa_TechniqueInLevel",
    "Rappa_Rappa_PassiveAbility01",
    "Rappa_Rappa_Ability03_SP0_Part01",
    "Rappa_Rappa_Ability03_Part02",
    "Rappa_Rappa_Ability03_Part01",
    "Rappa_Rappa_Ability03_EnterReady",
    "Rappa_Rappa_Ability02_Part02",
    "Rappa_Rappa_Ability02_Part01",
    "Rappa_Rappa_Ability13_Part02",
    "Rappa_Rappa_Ability13_Part01",
    "Rappa_Rappa_Ability12_Part02",
    "Rappa_Rappa_Ability12_Part01",
    "Rappa_Rappa_Ability11_Part02",
    "Rappa_Rappa_Ability11_Part01",
    "Rappa_Rappa_Ability01_Part02",
    "Rappa_Rappa_Ability01_Part01",
    "Rappa_Modifiers",
    "Rappa_Functions"
  ],
  "abilityObject": {
    "Rappa_Rappa_TechniqueInLevel": {
      "fileName": "Rappa_Rappa_TechniqueInLevel",
      "childAbilityList": [
        "Rappa_Rappa_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        30,
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
          "modifier": "StageAbility_Maze_Rappa_Modifier_Dmg"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_Rappa_Modifier_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Rappa_Modifier_Bonus",
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
          "for": "StageAbility_Maze_Rappa_Modifier_Dmg",
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
                        "target": "{{Enemy Team All}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "DV_Ultra_Damage_MaxStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                          "warningType": "MaxToughness"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_Ratio",
                          "value": {
                            "operator": "Constants[0] (0.5) || Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[1] (30) || DIV || Constants[2] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (2) || MUL || RETURN",
                            "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * 2)",
                            "constants": [
                              0.5,
                              30,
                              2,
                              4
                            ],
                            "variables": [
                              "DV_Ultra_Damage_MaxStance",
                              2
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "DamageBreak": {
                              "operator": "Variables[0] (DV_Ratio) || RETURN",
                              "displayLines": "DV_Ratio",
                              "constants": [],
                              "variables": [
                                "DV_Ratio"
                              ]
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Break DMG"
                          }
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "maxTargets": 2,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "DV_Ultra_Damage_MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_Ratio2",
                              "value": {
                                "operator": "Constants[0] (0.5) || Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[1] (30) || DIV || Constants[2] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (1.8) || MUL || RETURN",
                                "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * 1.8)",
                                "constants": [
                                  0.5,
                                  30,
                                  2,
                                  4
                                ],
                                "variables": [
                                  "DV_Ultra_Damage_MaxStance",
                                  1.8
                                ]
                              }
                            },
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "DamageBreak": {
                                  "operator": "Variables[0] (DV_Ratio2) || RETURN",
                                  "displayLines": "DV_Ratio2",
                                  "constants": [],
                                  "variables": [
                                    "DV_Ratio2"
                                  ]
                                },
                                "dmgFormula": "Break DMG Scaling",
                                "dmgFormulaFinal": "Pure (No DMG%)",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Break DMG"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Rappa_Rappa_PassiveAbility01": {
      "fileName": "Rappa_Rappa_PassiveAbility01",
      "childAbilityList": [
        "Rappa_Rappa_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        2,
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
          "modifier": "Rappa_Passive_Modifier"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
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
              "variableName": "_PassiveBreakCountBase",
              "value": {
                "operator": "Variables[0] (0) || Variables[1] (5) || ADD || RETURN",
                "displayLines": "(0 + 5)",
                "constants": [],
                "variables": [
                  0,
                  5
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_PassiveBreakCountMax",
              "value": {
                "operator": "Variables[0] (10) || Variables[1] (5) || ADD || RETURN",
                "displayLines": "(10 + 5)",
                "constants": [],
                "variables": [
                  10,
                  5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_PassiveBreakCountBase",
              "value": {
                "operator": "Variables[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [],
                "variables": [
                  0
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_PassiveBreakCountMax",
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_PassiveBreakCountBase",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
              "stackLimit": {
                "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                "displayLines": "_PassiveBreakCountMax",
                "constants": [],
                "variables": [
                  "_PassiveBreakCountMax"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (_PassiveBreakCountBase) || RETURN",
                "displayLines": "_PassiveBreakCountBase",
                "constants": [],
                "variables": [
                  "_PassiveBreakCountBase"
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Rappa_Break_Modifier",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Exo-Toughness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Template_Rappa_PassiveBreak"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entering Exo-Toughness Bar [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Template_Rappa_PassiveBreak"
                }
              ]
            },
            {
              "eventTrigger": "Being Exo-Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Template_Rappa_PassiveBreak"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Passive_Modifier",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_DOT"
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_DOT"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Ninjutsu Inscription: Withered Leaf"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Rappa_Trace03"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "P6_Real_Ratio",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Rappa_Break_Modifier"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Rappa_Break_Modifier"
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
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
                      "target": "{{Caster}}"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Rappa_Rappa_Ability03_SP0_Part01": {
      "fileName": "Rappa_Rappa_Ability03_SP0_Part01",
      "skillTrigger": "Skill34",
      "abilityType": "Ultimate",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 10
          }
        }
      ],
      "references": []
    },
    "Rappa_Rappa_Ability03_Part02": {
      "fileName": "Rappa_Rappa_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO",
          "value": {
            "operator": "Variables[0] (DV_StockTempCount) || RETURN",
            "displayLines": "DV_StockTempCount",
            "constants": [],
            "variables": [
              "DV_StockTempCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO_RELOADED",
          "value": 1
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
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
            "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
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
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill11",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Show",
          "abilityName": "Basic ATK"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_UltraMode_BanSKL02_ForCaster"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "afterInjection": [],
          "priorityTag": "Character_HighPriorityAction"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Rappa_Rappa_Ability03_Part01": {
      "fileName": "Rappa_Rappa_Ability03_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability03_Camera",
        "Rappa_Rappa_Ability03_EnterReady",
        "Rappa_Rappa_Ability03_Part01",
        "Rappa_Rappa_Ability03_Part02",
        "Rappa_Rappa_Ability03_FPS_Camera",
        "Rappa_Rappa_Ability03_FPS_Camera_Steady",
        "Rappa_Rappa_Ability03_SP0_Part01"
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
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 10
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability03_Part02"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_AR_STATE_LIFETIME) || RETURN",
            "displayLines": "_AR_STATE_LIFETIME",
            "constants": [],
            "variables": [
              "_AR_STATE_LIFETIME"
            ]
          },
          "priorState": "Active"
        }
      ],
      "references": []
    },
    "Rappa_Rappa_Ability03_EnterReady": {
      "fileName": "Rappa_Rappa_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Rappa_Rappa_Ability02_Part02": {
      "fileName": "Rappa_Rappa_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Rappa_Rappa_Ability02_Part01": {
      "fileName": "Rappa_Rappa_Ability02_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability02_Camera",
        "Rappa_Rappa_Ability02_Part01",
        "Rappa_Rappa_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        10,
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
          "ability": "Rappa_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Rappa_Rappa_Ability13_Part02": {
      "fileName": "Rappa_Rappa_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_PassiveBreakCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO",
          "value": {
            "operator": "Variables[0] (_AMMO) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_AMMO - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_AMMO"
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 10,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_ForceStanceDamage"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_ForceStanceDamage"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "DV_Ultra_Damage_MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FinalBreakDamagePercentage",
              "value": {
                "operator": "Constants[0] (0.5) || Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[1] (30) || DIV || Constants[2] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (0.6) || Variables[2] (_PassiveBreakCountBase) || Variables[3] (DV_TempCount) || ADD || Variables[4] (0.5) || MUL || ADD || MUL || RETURN",
                "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * (0.6 + ((_PassiveBreakCountBase + DV_TempCount) * 0.5)))",
                "constants": [
                  0.5,
                  30,
                  2,
                  4
                ],
                "variables": [
                  "DV_Ultra_Damage_MaxStance",
                  0.6,
                  "_PassiveBreakCountBase",
                  "DV_TempCount",
                  0.5
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage_ForPassive"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageBreak": {
                  "operator": "Variables[0] (DV_FinalBreakDamagePercentage) || RETURN",
                  "displayLines": "DV_FinalBreakDamagePercentage",
                  "constants": [],
                  "variables": [
                    "DV_FinalBreakDamagePercentage"
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": {
                  "operator": "Variables[0] (2) || Variables[1] (_PassiveBreakCountBase) || Variables[2] (DV_TempCount) || ADD || Variables[3] (1) || MUL || ADD || Constants[0] (3) || MUL || RETURN",
                  "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    2,
                    "_PassiveBreakCountBase",
                    "DV_TempCount",
                    1
                  ]
                },
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage_ForPassive"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "_PassiveBreakCountBase",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "_PassiveBreakCount",
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
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
              "stackLimit": {
                "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                "displayLines": "_PassiveBreakCountMax",
                "constants": [],
                "variables": [
                  "_PassiveBreakCountMax"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (_PassiveBreakCountBase) || Variables[1] (_PassiveBreakCount) || ADD || RETURN",
                "displayLines": "(_PassiveBreakCountBase + _PassiveBreakCount)",
                "constants": [],
                "variables": [
                  "_PassiveBreakCountBase",
                  "_PassiveBreakCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_UltraMode_BanSKL02_ForCaster"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_Ability13_StanceDamagePreShow"
        },
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill01",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (1) || INVERT || RETURN",
            "displayLines": "-1",
            "constants": [
              1
            ],
            "variables": []
          }
        },
        "Trigger: Ability End",
        "Trigger: Skip Death Handling"
      ],
      "references": []
    },
    "Rappa_Rappa_Ability13_Part01": {
      "fileName": "Rappa_Rappa_Ability13_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability13_Part01",
        "Rappa_Rappa_Ability13_Part02",
        "Rappa_Rappa_Ability03_FPS_Hit3_Camera"
      ],
      "skillTrigger": "Skill13",
      "abilityType": "Basic ATK",
      "energy": 10,
      "toughnessList": [
        0,
        5,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 10
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability13_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_AR_STATE_LIFETIME",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ],
          "failed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        }
      ],
      "references": []
    },
    "Rappa_Rappa_Ability12_Part02": {
      "fileName": "Rappa_Rappa_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO",
          "value": {
            "operator": "Variables[0] (_AMMO) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_AMMO - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_AMMO"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Distance to Team Center",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DV_PositionOffsetRatio",
          "living": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "DamageType": "Imaginary",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (0.5) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 0.5))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        0.5
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (0.5) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 0.5))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        0.5
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_ForceStanceDamage"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_ForceStanceDamage"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill13",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_TempCount",
          "value": {
            "operator": "Variables[0] (_PassiveBreakCount) || RETURN",
            "displayLines": "_PassiveBreakCount",
            "constants": [],
            "variables": [
              "_PassiveBreakCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_Ability13_StanceDamagePreShow"
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": []
    },
    "Rappa_Rappa_Ability12_Part01": {
      "fileName": "Rappa_Rappa_Ability12_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability12_Part01",
        "Rappa_Rappa_Ability12_Part02",
        "Rappa_Rappa_Ability03_FPS_Hit2_Camera"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 10
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Rappa_Rappa_Ability11_Part02": {
      "fileName": "Rappa_Rappa_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO",
          "value": {
            "operator": "Variables[0] (DV_StockTempCount) || RETURN",
            "displayLines": "DV_StockTempCount",
            "constants": [],
            "variables": [
              "DV_StockTempCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO_RELOADED",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_AMMO",
          "value": {
            "operator": "Variables[0] (_AMMO) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_AMMO - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_AMMO"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Distance to Team Center",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DV_PositionOffsetRatio",
          "living": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "DamageType": "Imaginary",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (0.5) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 0.5))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        0.5
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (0.5) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 0.5))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        0.5
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_ForceStanceDamage"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_ForceStanceDamage"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill12",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": []
    },
    "Rappa_Rappa_Ability11_Part01": {
      "fileName": "Rappa_Rappa_Ability11_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability11_Part01",
        "Rappa_Rappa_Ability11_Part02",
        "Rappa_Rappa_Ability03_FPS_Hit1_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 10
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Rappa_Rappa_Ability01_Part02": {
      "fileName": "Rappa_Rappa_Ability01_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.5,
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.5,
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Rappa_Rappa_Ability01_Part01": {
      "fileName": "Rappa_Rappa_Ability01_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability01_Camera",
        "Rappa_Rappa_Ability01_Part01",
        "Rappa_Rappa_Ability01_Part02"
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
          "ability": "Rappa_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Rappa_Modifiers": {
      "fileName": "Rappa_Modifiers",
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
          "for": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_CurrentLayer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentRatio",
                  "value": {
                    "operator": "Variables[0] (0.5) || Variables[1] (_CurrentLayer) || MUL || RETURN",
                    "displayLines": "(0.5 * _CurrentLayer)",
                    "constants": [],
                    "variables": [
                      0.5,
                      "_CurrentLayer"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentValue",
                  "value": {
                    "operator": "Variables[0] (1) || Variables[1] (_CurrentLayer) || MUL || RETURN",
                    "displayLines": "(1 * _CurrentLayer)",
                    "constants": [],
                    "variables": [
                      1,
                      "_CurrentLayer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The next time the third hit of \"Ningu: Demonbane Petalblade\" is launched, the additionally dealt Break DMG multiplier increases by <span class=\"descriptionNumberColor\">_CurrentRatio</span>, and the Toughness Reduction increases by <span class=\"descriptionNumberColor\">_CurrentValue</span>.",
          "type": "Buff",
          "statusName": "Ninja Tech: Endurance Gauge"
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_AbilityEidolon4[<span class=\"descriptionNumberColor\">Lost Is the Nindō Devoured by Time</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
          "type": "Buff",
          "statusName": "Lost Is the Nindō Devoured by Time"
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_AbilityEidolon1[<span class=\"descriptionNumberColor\">Returned Is the Revenant With No Ferry Toll</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - SkillRank_Rank01_P1_Ratio)"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_P1_Ratio</span> of the enemy targets' DEF. After exiting \"Sealform,\" regenerates <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P2_Value</span> Energy.",
          "type": "Buff",
          "statusName": "Returned Is the Revenant With No Ferry Toll"
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Ability03_Eidolon2_StanceDamagePreShow_Imaginary",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_Ability13_StanceDamagePreShow",
                  "invertCondition": true
                },
                {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Primary-Target}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "mustBeAlive2": true
                }
              ]
            },
            "percent": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Ability13_StanceDamagePreShow",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "Modifier: UI Preview",
                  "show": "Hide",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "toughnessType": "Imaginary",
                  "baseToughnessDMG": {
                    "operator": "Variables[0] (2) || Variables[1] (_PassiveBreakCountBase) || Variables[2] (DV_TempCount) || ADD || Variables[3] (1) || MUL || ADD || Constants[0] (3) || MUL || RETURN",
                    "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      2,
                      "_PassiveBreakCountBase",
                      "DV_TempCount",
                      1
                    ]
                  },
                  "toughnessForcedReductionPreview": 1,
                  "isForcedReduction": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Ability03_StanceDamagePreShow_NoImaginary",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                }
              ]
            },
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (P6_Real_Ratio) || RETURN",
              "displayLines": "P6_Real_Ratio",
              "constants": [],
              "variables": [
                "P6_Real_Ratio"
              ]
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_PointB3_Enemy[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Break DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Rappa_PointB3_Enemy_Aura",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_TotalRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">MDF_TotalRatio</span>.",
          "type": "Debuff",
          "statusName": "Ninjutsu Inscription: Withered Leaf"
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_PointB3_Enemy_Aura",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Break DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Rappa_PointB3_Enemy[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
                        "justAddedOrActive": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "DV_TotalRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TotalRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (0.02) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue2 + 0.02)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      0.02
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Rappa_PointB3_Enemy[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_TotalRatio": {
                      "operator": "Variables[0] (DV_TotalRatio) || RETURN",
                      "displayLines": "DV_TotalRatio",
                      "constants": [],
                      "variables": [
                        "DV_TotalRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Trace03_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Multipler",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Constants[0] (0.01) || MUL || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue * 0.01))",
                    "constants": [
                      0.01
                    ],
                    "variables": [
                      "FLOOR",
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.01) || MUL || RETURN",
                    "displayLines": "(MDF_Multipler * 0.01)",
                    "constants": [],
                    "variables": [
                      "MDF_Multipler",
                      0.01
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValue2",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.08) || RETURN",
                      "displayLines": "0.08",
                      "constants": [],
                      "variables": [
                        0.08
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Trace03",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Rappa_Trace03_Sub"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Rappa_Trace03_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Rappa_Trace03_Sub",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttackReal",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentAttackReal",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (2400) || Constants[0] (100) || ADD || RETURN",
                      "displayLines": "(2400 + 100)",
                      "constants": [
                        100
                      ],
                      "variables": [
                        2400
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Rappa_Trace03_Sub"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Rappa_Trace03_Sub",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttackReal) || Variables[1] (2400) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttackReal - 2400)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttackReal",
                                2400
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "Rappa_Trace03_Sub",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttackReal) || Variables[1] (2400) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttackReal - 2400)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttackReal",
                                2400
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Rappa_PointB3_Enemy_Aura",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_PointB2_Enemy",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Rappa_UltraAttack_Damage"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalStanceDamage",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "Rappa_UltraAttack_Damage"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "BeingDealSuperBreakDamage",
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                          "displayLines": "MDF_PropertyValue2",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue2"
                          ]
                        },
                        "StanceValue": {
                          "operator": "Variables[0] (MDF_TotalStanceDamage) || RETURN",
                          "displayLines": "MDF_TotalStanceDamage",
                          "constants": [],
                          "variables": [
                            "MDF_TotalStanceDamage"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Taking Toughness DMG [Owner]: Start",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceSuperBreakDamage"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_ForceSuperBreakDamage"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_HitStanceDamage",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalStanceDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalStanceDamage) || Variables[1] (MDF_HitStanceDamage) || ADD || RETURN",
                        "displayLines": "(MDF_TotalStanceDamage + MDF_HitStanceDamage)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalStanceDamage",
                          "MDF_HitStanceDamage"
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
          "name": "Modifier Construction",
          "for": "Rappa_ForceStanceDamage_ForPassive",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_ForceStanceDamage",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (P6_Real_Ratio) || RETURN",
                    "displayLines": "P6_Real_Ratio",
                    "constants": [],
                    "variables": [
                      "P6_Real_Ratio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_AMMO_RELOADED"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_Explosive",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_UltraMode_BanSKL03_ForCaster",
          "execute": [
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_UltraMode_BanSKL02_ForCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_AMMO_RELOADED"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
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
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "display": "Show",
                      "abilityName": "Basic ATK"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Rappa_UltraMode_BanSKL02_ForCaster"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill11",
                      "skillSlot": "Basic ATK"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "StanceBreakAddedRatioForShow",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_Ability03_StanceDamagePreShow_NoImaginary"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Rappa_Ability03_Eidolon2_StanceDamagePreShow_Imaginary"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_AMMO",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_AMMO_RELOADED",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_AR_STATE_LIFETIME) || RETURN",
                        "displayLines": "_AR_STATE_LIFETIME",
                        "constants": [],
                        "variables": [
                          "_AR_STATE_LIFETIME"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AMMO_RELOADED",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Rappa_UltraMode_BanSKL03_ForCaster"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_AR_STATE_LIFETIME",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Rappa_UltraMode_BanSKL03_ForCaster"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AMMO",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
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
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Ability Enhance Button",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "display": "Show",
                          "abilityName": "Basic ATK"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Rappa_UltraMode_BanSKL02_ForCaster"
                        },
                        {
                          "name": "Update Ability Binding",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityName": "Skill11",
                          "skillSlot": "Basic ATK"
                        }
                      ]
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
          "latentQueue": [
            "_AMMO_RELOADED"
          ],
          "description": "Increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Nindō Supreme: Aishiteru",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Rappa_PointB2_Enemy",
              "haloStatus": true,
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Ninjutsu Inscription: Sea Echo"
              },
              "valuePerStack": {
                "MDF_PropertyValue2": {
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
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_AbilityEidolon1[<span class=\"descriptionNumberColor\">Returned Is the Revenant With No Ferry Toll</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "AbilityRank_Eidolon1_P1_Ratio": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Rappa_AbilityEidolon4[<span class=\"descriptionNumberColor\">Lost Is the Nindō Devoured by Time</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Rappa_Functions": {
      "fileName": "Rappa_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Template_Rappa_PassiveBreak",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_PassiveBreakCount",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || RETURN",
                  "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)",
                  "constants": [],
                  "variables": [
                    "_PassiveBreakCountMax",
                    "_PassiveBreakCountBase"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PassiveBreakCount",
                  "value": {
                    "operator": "Variables[0] (_PassiveBreakCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_PassiveBreakCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_PassiveBreakCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                    "displayLines": "_PassiveBreakCountMax",
                    "constants": [],
                    "variables": [
                      "_PassiveBreakCountMax"
                    ]
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
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
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_Rappa_BreakCount",
                  "value": {
                    "operator": "Variables[0] (DV_Rappa_BreakCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DV_Rappa_BreakCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_Rappa_BreakCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_StockTempCount",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Ninjutsu Inscription: Sky High"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_StockTempCount",
                      "value": {
                        "operator": "Variables[0] (_PassiveBreakCount) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(_PassiveBreakCount + 1)",
                        "constants": [],
                        "variables": [
                          "_PassiveBreakCount",
                          1
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_StockTempCount",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || RETURN",
                          "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)",
                          "constants": [],
                          "variables": [
                            "_PassiveBreakCountMax",
                            "_PassiveBreakCountBase"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                            "displayLines": "_PassiveBreakCountMax",
                            "constants": [],
                            "variables": [
                              "_PassiveBreakCountMax"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || Variables[2] (_PassiveBreakCount) || SUB || RETURN",
                            "displayLines": "((_PassiveBreakCountMax - _PassiveBreakCountBase) - _PassiveBreakCount)",
                            "constants": [],
                            "variables": [
                              "_PassiveBreakCountMax",
                              "_PassiveBreakCountBase",
                              "_PassiveBreakCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_PassiveBreakCount",
                          "value": {
                            "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || RETURN",
                            "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)",
                            "constants": [],
                            "variables": [
                              "_PassiveBreakCountMax",
                              "_PassiveBreakCountBase"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                            "displayLines": "_PassiveBreakCountMax",
                            "constants": [],
                            "variables": [
                              "_PassiveBreakCountMax"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_PassiveBreakCount",
                          "value": {
                            "operator": "Variables[0] (_PassiveBreakCount) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(_PassiveBreakCount + 1)",
                            "constants": [],
                            "variables": [
                              "_PassiveBreakCount",
                              1
                            ]
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
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}