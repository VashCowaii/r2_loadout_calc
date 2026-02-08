const compositeAbilityObject = {
  "fullCharacterName": "Huohuo",
  "trimCharacterName": "Huohuo",
  "abilityList": [
    "Huohuo_Huohuo_Eidolon2_Insert",
    "Huohuo_Huohuo_Trace02",
    "Huohuo_Huohuo_TechniqueInLevel",
    "Huohuo_Huohuo_PassiveAbility01",
    "Huohuo_Huohuo_Ability03_Part02",
    "Huohuo_Huohuo_Ability03_Part01",
    "Huohuo_Huohuo_Ability03_EnterReady",
    "Huohuo_Huohuo_Ability02_Part02",
    "Huohuo_Huohuo_Ability02_Part01",
    "Huohuo_Huohuo_Ability01_Part02",
    "Huohuo_Huohuo_Ability01_Part01",
    "Huohuo_Modifiers"
  ],
  "abilityObject": {
    "Huohuo_Huohuo_Eidolon2_Insert": {
      "fileName": "Huohuo_Huohuo_Eidolon2_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1608829904\">Huohuo_Passive</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Huohuo_Rank02_ReviveCount",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Huohuo_Passive_HotCount",
                  "value": -1,
                  "max": 2
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "function": "Add",
                  "valueType": "Duration"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Huohuo_Rank02_ReviveCount",
                  "value": -1,
                  "max": 2
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "silent": true
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "healer": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (AADF_1) || RETURN",
                    "displayLines": "AADF_1",
                    "constants": [],
                    "variables": [
                      "AADF_1"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Huohuo_Rank02_ReviveCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "failed": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                    }
                  ]
                }
              ],
              "failed": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Huohuo_Huohuo_Trace02": {
      "fileName": "Huohuo_Huohuo_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1538917301\">M_Huohuo_Trace02</a>",
          "valuePerStack": {
            "MDF_Resistance": {
              "operator": "Variables[0] (0.35) || RETURN",
              "displayLines": "0.35",
              "constants": [],
              "variables": [
                0.35
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1538917301\">M_Huohuo_Trace02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": {
                    "operator": "Variables[0] (MDF_Resistance) || RETURN",
                    "displayLines": "MDF_Resistance",
                    "constants": [],
                    "variables": [
                      "MDF_Resistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Resistance"
          ],
          "latentQueue": []
        }
      ]
    },
    "Huohuo_Huohuo_TechniqueInLevel": {
      "fileName": "Huohuo_Huohuo_TechniqueInLevel",
      "childAbilityList": [
        "Huohuo_Huohuo_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1900641722\">StageAbility_Maze_Huohuo_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1017323248\">Huohuo_Maze_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Horror-Struck</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttackDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Reduces ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Horror-Struck",
          "statusName": "Horror-Struck"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1900641722\">StageAbility_Maze_Huohuo_Modifier</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1017323248\">Huohuo_Maze_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Horror-Struck</span>]",
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
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
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
    "Huohuo_Huohuo_PassiveAbility01": {
      "fileName": "Huohuo_Huohuo_PassiveAbility01",
      "childAbilityList": [
        "Huohuo_Huohuo_PassiveAbility01",
        "Huohuo_Huohuo_Eidolon2_Insert"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1608829904\">Huohuo_Passive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"679515294\">Huohuo_Eidolon1PreShow</a>"
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
              "bar#": 3
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
              "name": "Define Custom Variable",
              "variableName": "Huohuo_Rank02_ReviveCount",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1683962968\">Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
              "valuePerStack": {
                "MDF_HealRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_ReviveCount": {
                  "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                  "displayLines": "Huohuo_Rank02_ReviveCount",
                  "constants": [],
                  "variables": [
                    "Huohuo_Rank02_ReviveCount"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__679515294\">Huohuo_Eidolon1PreShow</a>",
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
              "Skill"
            ],
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.12(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1045223345\">Huohuo_PointB1_SelfSPRatio</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_SPRatio</span>.",
          "type": "Buff",
          "effectName": "Energy Regeneration Rate Boost",
          "statusName": "Energy Regeneration Rate Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1608829904\">Huohuo_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2048047648\">Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageAddedRatio": {
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
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(2 + 1)",
                            "constants": [],
                            "variables": [
                              2,
                              1
                            ]
                          },
                          "valuePerStack": {
                            "MDF_HPRatio": {
                              "operator": "Variables[0] (0.044999998) || RETURN",
                              "displayLines": "0.044999998",
                              "constants": [],
                              "variables": [
                                0.044999998
                              ]
                            },
                            "MDF_HPValue": {
                              "operator": "Variables[0] (120) || RETURN",
                              "displayLines": "120",
                              "constants": [],
                              "variables": [
                                120
                              ]
                            },
                            "MDF_LowHP": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "MDF_DispelNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
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
                          "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "valuePerStack": {
                            "MDF_HPRatio": {
                              "operator": "Variables[0] (0.044999998) || RETURN",
                              "displayLines": "0.044999998",
                              "constants": [],
                              "variables": [
                                0.044999998
                              ]
                            },
                            "MDF_HPValue": {
                              "operator": "Variables[0] (120) || RETURN",
                              "displayLines": "120",
                              "constants": [],
                              "variables": [
                                120
                              ]
                            },
                            "MDF_LowHP": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "MDF_DispelNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Fearful to Act"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "operator": "Variables[0] (0.044999998) || RETURN",
                          "displayLines": "0.044999998",
                          "constants": [],
                          "variables": [
                            0.044999998
                          ]
                        },
                        "MDF_HPValue": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        },
                        "MDF_LowHP": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_DispelNum": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
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
    "Huohuo_Huohuo_Ability03_Part02": {
      "fileName": "Huohuo_Huohuo_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Memosprites and Self)}}"
          },
          "valuePercent": {
            "operator": "Variables[0] (0.2) || RETURN",
            "displayLines": "0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-678196241\">Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_AttackUP": {
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
    "Huohuo_Huohuo_Ability03_Part01": {
      "fileName": "Huohuo_Huohuo_Ability03_Part01",
      "childAbilityList": [
        "Huohuo_Huohuo_Ability03_Camera",
        "Huohuo_Huohuo_Ability03_EnterReady",
        "Huohuo_Huohuo_Ability03_Part01",
        "Huohuo_Huohuo_Ability03_Part02"
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Huohuo_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Huohuo_Huohuo_Ability03_EnterReady": {
      "fileName": "Huohuo_Huohuo_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Huohuo_Huohuo_Ability02_Part02": {
      "fileName": "Huohuo_Huohuo_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.21) || RETURN",
            "displayLines": "0.21",
            "constants": [],
            "variables": [
              0.21
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (560) || RETURN",
            "displayLines": "560",
            "constants": [],
            "variables": [
              560
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.168) || RETURN",
            "displayLines": "0.168",
            "constants": [],
            "variables": [
              0.168
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (448) || RETURN",
            "displayLines": "448",
            "constants": [],
            "variables": [
              448
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
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
    "Huohuo_Huohuo_Ability02_Part01": {
      "fileName": "Huohuo_Huohuo_Ability02_Part01",
      "childAbilityList": [
        "Huohuo_Huohuo_Ability02_Camera",
        "Huohuo_Huohuo_Ability02_Part01",
        "Huohuo_Huohuo_Ability02_Part02"
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
          "ability": "Huohuo_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Huohuo_Huohuo_Ability01_Part02": {
      "fileName": "Huohuo_Huohuo_Ability01_Part02",
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
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.4,
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
    "Huohuo_Huohuo_Ability01_Part01": {
      "fileName": "Huohuo_Huohuo_Ability01_Part01",
      "childAbilityList": [
        "Huohuo_Huohuo_Ability01_Camera",
        "Huohuo_Huohuo_Ability01_Part01",
        "Huohuo_Huohuo_Ability01_Part02"
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
          "ability": "Huohuo_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Huohuo_Modifiers": {
      "fileName": "Huohuo_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2094716401\">Huohuo_Eidolon2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Huohuo_Rank02_ReviveCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variable": "Huohuo_Rank02_ReviveCount",
                      "target2": null,
                      "variable2": "MDF_ReviveCount"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "Passive_HealMark_LifeTime",
                      "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": {
                          "operator": "Variables[0] (MIN) || Variables[1] (MDF_ReviveCount) || Variables[2] (Passive_HealMark_LifeTime) || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_ReviveCount, Passive_HealMark_LifeTime)",
                          "constants": [],
                          "variables": [
                            "MIN",
                            "MDF_ReviveCount",
                            "Passive_HealMark_LifeTime"
                          ]
                        }
                      },
                      "abilityName": "Huohuo_Eidolon2_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "AvatarReviveOthers",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "AADF_1": {
                          "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                          "displayLines": "MDF_HealPercentage",
                          "constants": [],
                          "variables": [
                            "MDF_HealPercentage"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1683962968\">Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
          "stackType": "ReplaceByCaster",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Huohuo_Rank02_ReviveCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 3,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ReviveCount",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                        "displayLines": "Huohuo_Rank02_ReviveCount",
                        "constants": [],
                        "variables": [
                          "Huohuo_Rank02_ReviveCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Huohuo_Rank02_ReviveCount",
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
                            "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>",
                          "valuePerStack": {
                            "MDF_HealPercentage": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "MDF_ReviveCount": {
                              "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                              "displayLines": "Huohuo_Rank02_ReviveCount",
                              "constants": [],
                              "variables": [
                                "Huohuo_Rank02_ReviveCount"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members with Unselectables}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Huohuo_Rank02_ReviveCount",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            "Modifier Deletes Itself"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HealRatio",
            "MDF_ReviveCount"
          ],
          "latentQueue": [],
          "description": "If Huohuo possesses Divine Provision when an ally is struck by a killing blow, the ally will not be knocked down, and their HP will immediately be restored by an amount equal to <span class=\"descriptionNumberColor\">MDF_HealRatio</span> of their Max HP. This reduces the duration of Divine Provision by 1 turn. The remaining trigger count is <span class=\"descriptionNumberColor\">MDF_ReviveCount</span>.",
          "type": "Buff",
          "statusName": "Sealed in Tail, Wraith Subdued"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2048047648\">Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddedRatio"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2047385879\">Huohuo_DealHeal</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHPRatio"
                    },
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.8) || Constants[0] (1) || Variables[1] (CurrentHPRatio) || SUB || MUL || RETURN",
                        "displayLines": "(0.8 * (1 - CurrentHPRatio))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          0.8,
                          "CurrentHPRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-678196241\">Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUP) || RETURN",
                    "displayLines": "MDF_AttackUP",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUP"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackUP"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackUP</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2038615352\">Huohuo_Passive_ModifySP</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1648992961\">Huohuo_Passive_SPMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1278530083\">Huohuo_Passive_HealHP</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Stress Reaction to Horror"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Huohuo_Passive_DispelCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "dispelCount": {
                        "operator": "Variables[0] (_DispelNum) || RETURN",
                        "displayLines": "_DispelNum",
                        "constants": [],
                        "variables": [
                          "_DispelNum"
                        ]
                      },
                      "dispelOrder": "LastAdded",
                      "counterKey": "_DispelNumSuccess"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Huohuo_Passive_DispelCount",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                        "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                        "constants": [],
                        "variables": [
                          "Huohuo_Passive_DispelCount",
                          "_DispelNumSuccess"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (HPRatio) || RETURN",
                    "displayLines": "HPRatio",
                    "constants": [],
                    "variables": [
                      "HPRatio"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (HPValue) || RETURN",
                    "displayLines": "HPValue",
                    "constants": [],
                    "variables": [
                      "HPValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[living]].[[sortByHPCurrent]]"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Stress Reaction to Horror"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Huohuo_Passive_DispelCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "dispelCount": {
                            "operator": "Variables[0] (_DispelNum) || RETURN",
                            "displayLines": "_DispelNum",
                            "constants": [],
                            "variables": [
                              "_DispelNum"
                            ]
                          },
                          "dispelOrder": "LastAdded",
                          "counterKey": "_DispelNumSuccess"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Huohuo_Passive_DispelCount",
                          "value": {
                            "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                            "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                            "constants": [],
                            "variables": [
                              "Huohuo_Passive_DispelCount",
                              "_DispelNumSuccess"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (HPRatio) || RETURN",
                        "displayLines": "HPRatio",
                        "constants": [],
                        "variables": [
                          "HPRatio"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (HPValue) || RETURN",
                        "displayLines": "HPValue",
                        "constants": [],
                        "variables": [
                          "HPValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Stress Reaction to Horror"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Huohuo_Passive_DispelCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "dispelCount": {
                            "operator": "Variables[0] (_DispelNum) || RETURN",
                            "displayLines": "_DispelNum",
                            "constants": [],
                            "variables": [
                              "_DispelNum"
                            ]
                          },
                          "dispelOrder": "LastAdded",
                          "counterKey": "_DispelNumSuccess"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Huohuo_Passive_DispelCount",
                          "value": {
                            "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                            "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                            "constants": [],
                            "variables": [
                              "Huohuo_Passive_DispelCount",
                              "_DispelNumSuccess"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (HPRatio) || RETURN",
                        "displayLines": "HPRatio",
                        "constants": [],
                        "variables": [
                          "HPRatio"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (HPValue) || RETURN",
                        "displayLines": "HPValue",
                        "constants": [],
                        "variables": [
                          "HPValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[living]].[[sortByHPCurrent]]"
                      },
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Stress Reaction to Horror"
                          },
                          "passed": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              },
                              "isFixed": "* ERR"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Huohuo_Passive_DispelCount",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "dispelCount": {
                                "operator": "Variables[0] (_DispelNum) || RETURN",
                                "displayLines": "_DispelNum",
                                "constants": [],
                                "variables": [
                                  "_DispelNum"
                                ]
                              },
                              "dispelOrder": "LastAdded",
                              "counterKey": "_DispelNumSuccess"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Huohuo_Passive_DispelCount",
                              "value": {
                                "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                                "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                                "constants": [],
                                "variables": [
                                  "Huohuo_Passive_DispelCount",
                                  "_DispelNumSuccess"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (HPRatio) || RETURN",
                            "displayLines": "HPRatio",
                            "constants": [],
                            "variables": [
                              "HPRatio"
                            ]
                          },
                          "healFlat": {
                            "operator": "Variables[0] (HPValue) || RETURN",
                            "displayLines": "HPValue",
                            "constants": [],
                            "variables": [
                              "HPValue"
                            ]
                          },
                          "formula": "Heal from Healer's MaxHP"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Huohuo_Passive_HotCount",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "LifeTime",
                  "variableName": "Huohuo_Passive_HotCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "multiplier": 1
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
                  "valueType": "LifeTime",
                  "variableName": "Huohuo_Passive_HotCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Huohuo_Passive_HotCount) || RETURN",
                    "displayLines": "Huohuo_Passive_HotCount",
                    "constants": [],
                    "variables": [
                      "Huohuo_Passive_HotCount"
                    ]
                  },
                  "priorState": "Active"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Huohuo_Passive_DispelCount",
                  "value": {
                    "operator": "Variables[0] (6) || RETURN",
                    "displayLines": "6",
                    "constants": [],
                    "variables": [
                      6
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DispelCount",
                  "value": {
                    "operator": "Variables[0] (Huohuo_Passive_DispelCount) || RETURN",
                    "displayLines": "Huohuo_Passive_DispelCount",
                    "constants": [],
                    "variables": [
                      "Huohuo_Passive_DispelCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Huohuo_Rank02_ReviveCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_ReviveCount": {
                          "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                          "displayLines": "Huohuo_Rank02_ReviveCount",
                          "constants": [],
                          "variables": [
                            "Huohuo_Rank02_ReviveCount"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Huohuo_Passive_DispelCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 7,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DispelCount",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Passive_DispelCount) || RETURN",
                        "displayLines": "Huohuo_Passive_DispelCount",
                        "constants": [],
                        "variables": [
                          "Huohuo_Passive_DispelCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Huohuo_Passive_HotCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 4,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Passive_HotCount) || RETURN",
                        "displayLines": "Huohuo_Passive_HotCount",
                        "constants": [],
                        "variables": [
                          "Huohuo_Passive_HotCount"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPRatio",
            "MDF_HPValue",
            "MDF_LowHP",
            "MDF_DispelNum"
          ],
          "latentQueue": [],
          "description": "When an ally's turn starts or when an ally uses their Ultimate, restores HP for that ally by an amount equal to <span class=\"descriptionNumberColor\">MDF_HPRatio</span> of Huohuo's Max HP plus <span class=\"descriptionNumberColor\">MDF_HPValue</span>. At the same time, every ally currently at <span class=\"descriptionNumberColor\">MDF_LowHP</span> HP percentage or lower receives healing once. When Divine Provision is triggered to provide healing for allies, dispel 1 debuff from the said ally. This effect's remaining trigger count is <span class=\"descriptionNumberColor\">MDF_DispelCount</span>.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Divine Provision",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1278530083\">Huohuo_Passive_HealHP</a>",
              "haloStatus": true,
              "valuePerStack": {
                "HPRatio": {
                  "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                  "displayLines": "MDF_HPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPRatio"
                  ]
                },
                "HPValue": {
                  "operator": "Variables[0] (MDF_HPValue) || RETURN",
                  "displayLines": "MDF_HPValue",
                  "constants": [],
                  "variables": [
                    "MDF_HPValue"
                  ]
                },
                "_DispelNum": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
              "modifier": "<a class=\"gModGreen\" id=\"-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    }
  }
}