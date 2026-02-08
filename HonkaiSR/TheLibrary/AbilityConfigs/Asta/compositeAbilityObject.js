const compositeAbilityObject = {
  "fullCharacterName": "Asta",
  "trimCharacterName": "Asta",
  "abilityList": [
    "Asta_Asta_Trace02",
    "Asta_Asta_TechniqueInLevel",
    "Asta_Asta_PassiveAbility_1",
    "Asta_Asta_Ability03_Part02",
    "Asta_Asta_Ability03_Part01",
    "Asta_Asta_Ability03_EnterReady",
    "Asta_Asta_Ability02_Part02",
    "Asta_Asta_Ability02_Part01",
    "Asta_Asta_Ability01_Part02",
    "Asta_Asta_Ability01_Part01",
    "Asta_Modifiers"
  ],
  "abilityObject": {
    "Asta_Asta_Trace02": {
      "fileName": "Asta_Asta_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-895121187\">M_Asta_Tree02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-895121187\">M_Asta_Tree02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-653161821\">Asta_FireAddedRatio</a>",
                  "onlyRemoveOwnersInstance": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-653161821\">Asta_FireAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-653161821\">Asta_FireAddedRatio</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        }
                      }
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
    "Asta_Asta_TechniqueInLevel": {
      "fileName": "Asta_Asta_TechniqueInLevel",
      "childAbilityList": [
        "Asta_Asta_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1978268527\">StageAbility_Maze_Asta_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1978268527\">StageAbility_Maze_Asta_Modifier</a>",
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    "Trigger: Attack End"
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
    "Asta_Asta_PassiveAbility_1": {
      "fileName": "Asta_Asta_PassiveAbility_1",
      "childAbilityList": [
        "Asta_Asta_PassiveAbility_1"
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
          "modifier": "<a class=\"gModGreen\" id=\"-89645956\">M_Asta_Passive</a>",
          "valuePerStack": {
            "MDF_CostLayer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_MaxCount": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1558109509\">Asta_Eidolon2Flag</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1587956839\">Asta_AbilityPreShowModifier</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Update Ability Description",
              "popUpText": "Deals minor Fire DMG to single enemy targets with 6 Bounces in total.",
              "skillTrigger": "Skill02"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1587956839\">Asta_AbilityPreShowModifier</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1589111502\">Asta_Ultimate_SpeedUP</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "50(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-89645956\">M_Asta_Passive</a>",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1558109509\">Asta_Eidolon2Flag</a>"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_CostLayer) || Variables[2] (1) || SUB || SUB || RETURN",
                            "displayLines": "(MDF_Count - (MDF_CostLayer - 1))",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "MDF_CostLayer",
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_CostLayer) || SUB || RETURN",
                            "displayLines": "(MDF_Count - MDF_CostLayer)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              "MDF_CostLayer"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Count",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] (0.14) || RETURN",
                              "displayLines": "0.14",
                              "constants": [],
                              "variables": [
                                0.14
                              ]
                            },
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
                              ]
                            },
                            "MDF_BonusLayer": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_SPRatio": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_CostLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                          "value": 0
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": 0,
                          "maximum": {
                            "operator": "Variables[0] (5) || RETURN",
                            "displayLines": "5",
                            "constants": [],
                            "variables": [
                              5
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": "Fire"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Constants[0] (2) || ADD || RETURN",
                            "displayLines": "(MDF_Count + 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "MDF_Count"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Count",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                              "displayLines": "MDF_MaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_MaxCount"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Count",
                              "value": {
                                "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                                "displayLines": "MDF_MaxCount",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxCount"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] (0.14) || RETURN",
                              "displayLines": "0.14",
                              "constants": [],
                              "variables": [
                                0.14
                              ]
                            },
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
                              ]
                            },
                            "MDF_BonusLayer": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_SPRatio": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_CostLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_Count"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Count",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                              "displayLines": "MDF_MaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_MaxCount"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Count",
                              "value": {
                                "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                                "displayLines": "MDF_MaxCount",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxCount"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] (0.14) || RETURN",
                              "displayLines": "0.14",
                              "constants": [],
                              "variables": [
                                0.14
                              ]
                            },
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
                              ]
                            },
                            "MDF_BonusLayer": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_SPRatio": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_CostLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
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
          "stackData": [
            "MDF_CostLayer",
            "MDF_MaxCount"
          ],
          "latentQueue": []
        }
      ]
    },
    "Asta_Asta_Ability03_Part02": {
      "fileName": "Asta_Asta_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1589111502\">Asta_Ultimate_SpeedUP</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
              "operator": "Variables[0] (50) || RETURN",
              "displayLines": "50",
              "constants": [],
              "variables": [
                50
              ]
            }
          }
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
              "modifier": "<a class=\"gModGreen\" id=\"1558109509\">Asta_Eidolon2Flag</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1589111502\">Asta_Ultimate_SpeedUP</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
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
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        }
      ]
    },
    "Asta_Asta_Ability03_Part01": {
      "fileName": "Asta_Asta_Ability03_Part01",
      "childAbilityList": [
        "Asta_Asta_Ability03_Camera",
        "Asta_Asta_Ability03_EnterReady",
        "Asta_Asta_Ability03_Part01",
        "Asta_Asta_Ability03_Part02"
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
          "ability": "Asta_Ability03_Part02"
        }
      ],
      "references": []
    },
    "Asta_Asta_Ability03_EnterReady": {
      "fileName": "Asta_Asta_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Asta_Asta_Ability02_Part02": {
      "fileName": "Asta_Asta_Ability02_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "Bounce_Count",
              "value": 5
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "Bounce_Count",
              "value": 4
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Bounce_Count) || RETURN",
            "displayLines": "Bounce_Count",
            "constants": [],
            "variables": [
              "Bounce_Count"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
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
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Asta_Asta_Ability02_Part01": {
      "fileName": "Asta_Asta_Ability02_Part01",
      "childAbilityList": [
        "Asta_Asta_Ability02_Camera",
        "Asta_Asta_Ability02_Part01",
        "Asta_Asta_Ability02_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Asta_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Asta_Asta_Ability01_Part02": {
      "fileName": "Asta_Asta_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sparks"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (0.8) || RETURN",
                "displayLines": "0.8",
                "constants": [],
                "variables": [
                  0.8
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.5) || MUL || RETURN",
                  "displayLines": "(1 * 0.5)",
                  "constants": [],
                  "variables": [
                    1,
                    0.5
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
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
            "DamageType": "Fire",
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
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Asta_Asta_Ability01_Part01": {
      "fileName": "Asta_Asta_Ability01_Part01",
      "childAbilityList": [
        "Asta_Asta_Ability01_Camera",
        "Asta_Asta_Ability01_Part01",
        "Asta_Asta_Ability01_Part02"
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
          "ability": "Asta_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Asta_Modifiers": {
      "fileName": "Asta_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
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
          ],
          "description": "Energy Regeneration Rate +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Energy Regeneration Rate Boost",
          "statusName": "Energy Regeneration Rate Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1558109509\">Asta_Eidolon2Flag</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                  "value": {
                    "operator": "Variables[0] (MDF_Charge_Count) || RETURN",
                    "displayLines": "MDF_Charge_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Charge_Count"
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
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Charge_Count) || MUL || RETURN",
                    "displayLines": "(MDF_AttackAddedRatio * MDF_Charge_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio",
                      "MDF_Charge_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to 5 stacks.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Charging"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "counter": 5,
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Constellation"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_AttackAddedRatio * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_AttackAddedRatio",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DefenceAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_DefenceAddedRatio * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_DefenceAddedRatio",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span> and DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>, up to 5 stacks."
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_AttackAddedRatio * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_AttackAddedRatio",
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
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                      "displayLines": "MDF_AttackAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AttackAddedRatio"
                      ]
                    },
                    "MDF_Charge_Count": {
                      "operator": "Variables[0] (MDF_Count) || RETURN",
                      "displayLines": "MDF_Count",
                      "constants": [],
                      "variables": [
                        "MDF_Count"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
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
                        "value1": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_BuffLayer) || RETURN",
                          "displayLines": "MDF_BuffLayer",
                          "constants": [],
                          "variables": [
                            "MDF_BuffLayer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_SPRatio) || RETURN",
                              "displayLines": "MDF_SPRatio",
                              "constants": [],
                              "variables": [
                                "MDF_SPRatio"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Count",
                  "multiplier": 1
                },
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
                      "modifier": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                          "displayLines": "MDF_AttackAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AttackAddedRatio"
                          ]
                        },
                        "MDF_Charge_Count": {
                          "operator": "Variables[0] (MDF_Count) || RETURN",
                          "displayLines": "MDF_Count",
                          "constants": [],
                          "variables": [
                            "MDF_Count"
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
            "MDF_AttackAddedRatio",
            "MDF_DefenceAddedRatio",
            "MDF_BuffLayer",
            "MDF_SPRatio",
            "MDF_CostLayer"
          ],
          "latentQueue": [],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to 5 stacks.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Charging"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-653161821\">Asta_FireAddedRatio</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;",
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
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}