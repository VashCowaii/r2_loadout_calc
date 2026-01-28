const compositeAbilityObject = {
  "fullCharacterName": "Sunday",
  "trimCharacterName": "Sunday",
  "abilityList": [
    "Sunday_Sunday_10_TechniqueInLevel",
    "Sunday_Sunday_10_PassiveAbility01",
    "Sunday_Sunday_10_Ability03_Part02",
    "Sunday_Sunday_10_Ability03_Part01",
    "Sunday_Sunday_10_Ability03_EnterReady",
    "Sunday_Sunday_10_Ability02_Part02",
    "Sunday_Sunday_10_Ability02_Part01",
    "Sunday_Sunday_10_Ability01_Part02",
    "Sunday_Sunday_10_Ability01_Part01",
    "Sunday_Modifiers"
  ],
  "abilityObject": {
    "Sunday_Sunday_10_TechniqueInLevel": {
      "fileName": "Sunday_Sunday_10_TechniqueInLevel",
      "childAbilityList": [
        "Sunday_Sunday_10_TechniqueInLevel"
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
          "modifier": "Sunday_10_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
          "description": "The next time this unit uses an ability on an ally target, the target's DMG dealt increases.",
          "type": "Other",
          "statusName": "The Glorious Mysteries"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Maze_Modifier",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
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
    "Sunday_Sunday_10_PassiveAbility01": {
      "fileName": "Sunday_Sunday_10_PassiveAbility01",
      "childAbilityList": [
        "Sunday_Sunday_10_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
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
          "modifier": "Sunday_Passive"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sunday_10_Eidolon4Modifier"
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
              "variableName": "_P01_LifeTime",
              "value": {
                "operator": "Variables[0] (3) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(3 + 1)",
                "constants": [],
                "variables": [
                  3,
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_P01_LifeTime",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
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
          "modifier": "Sunday_10_Ability02_PreshowForLongling"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Sunday_10_Ability02_PreshowForSummonUnit"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Sunday_10_Ability02_Preshow"
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
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MW_Sunday_Listen_ModifyBEAction",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}.[[getBattleEvents]]"
            },
            "skillType": [
              "Basic ATK",
              "Skill",
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] ([object Object]) || SUB || RETURN",
                "displayLines": "(0 - [object Object])",
                "constants": [
                  0
                ],
                "variables": [
                  {}
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Eidolon4Modifier",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_Eidolon2_UltraTag"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_Eidolon2Modifier",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sunday_Eidolon2_UltraTag"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_PointB2Modifier",
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (25) || RETURN",
                        "displayLines": "25",
                        "constants": [],
                        "variables": [
                          25
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_Passive",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Jing Yuan"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1112,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Topaz & Numby"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Sunday_TempAddAITag"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Exalted Sweep"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sunday_PointB2Modifier"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sunday_Eidolon2Modifier"
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
                      "variableName": "_SkillP01_StackingLayer",
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
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SkillP01_StackingLayer",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Jing Yuan"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1112,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Topaz & Numby"
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
                      "modifier": "Sunday_TempAddAITag"
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
          "for": "Sunday_TempAddAITag",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Sunday_Sunday_10_Ability03_Part02": {
      "fileName": "Sunday_Sunday_10_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_MAXSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill03_AddSPAmount",
          "value": {
            "operator": "Variables[0] (_MAXSP) || Variables[1] (0.2) || MUL || RETURN",
            "displayLines": "(_MAXSP * 0.2)",
            "constants": [],
            "variables": [
              "_MAXSP",
              0.2
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rest Day's Longing"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Skill03_AddSPAmount",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (40) || RETURN",
                  "displayLines": "40",
                  "constants": [],
                  "variables": [
                    40
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Skill03_AddSPAmount",
                  "value": {
                    "operator": "Variables[0] (40) || RETURN",
                    "displayLines": "40",
                    "constants": [],
                    "variables": [
                      40
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Sunday_Eidolon2_UltraTag"
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sunday_Eidolon2_UltraTag"
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Variables[0] (_Skill03_AddSPAmount) || RETURN",
            "displayLines": "_Skill03_AddSPAmount",
            "constants": [],
            "variables": [
              "_Skill03_AddSPAmount"
            ]
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sunday_10_Ability03_Link_ForCaster",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
                  },
                  "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_PropertyBase": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
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
                  "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_PropertyBase": {
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
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "Sunday_10_MazeBonus[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
                  },
                  "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
                  "duration": {
                    "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                    "displayLines": "_P01_LifeTime",
                    "constants": [],
                    "variables": [
                      "_P01_LifeTime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                    "displayLines": "_SkillP01_StackingLayer",
                    "constants": [],
                    "variables": [
                      "_SkillP01_StackingLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
                  "duration": {
                    "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                    "displayLines": "_P01_LifeTime",
                    "constants": [],
                    "variables": [
                      "_P01_LifeTime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                    "displayLines": "_SkillP01_StackingLayer",
                    "constants": [],
                    "variables": [
                      "_SkillP01_StackingLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
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
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Ability03_Link_Damage",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "MW_Sunday_Passive"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Custom Damage Type",
                          "initialTypePreRead": "Physical",
                          "sourceType": "ReadTargetType",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
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
          "for": "Sunday_10_Ability03_Link_ForCaster",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "_lifeTime",
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
                    "value1": "_lifeTime",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_lifeTime) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_lifeTime - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_lifeTime"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "priorState": "Normal"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "_lifeTime",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_lifeTime) || RETURN",
                    "displayLines": "_lifeTime",
                    "constants": [],
                    "variables": [
                      "_lifeTime"
                    ]
                  },
                  "priorState": "Active"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_ownerCritDamage",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_PropertyFinal",
                          "value": {
                            "operator": "Variables[0] (_ownerCritDamage) || Variables[1] (0.3) || MUL || Variables[2] (0.12) || ADD || RETURN",
                            "displayLines": "((_ownerCritDamage * 0.3) + 0.12)",
                            "constants": [],
                            "variables": [
                              "_ownerCritDamage",
                              0.3,
                              0.12
                            ]
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]",
                          "variableName": "MDF_PropertyFinal",
                          "value": {
                            "operator": "Variables[0] (_PropertyFinal) || RETURN",
                            "displayLines": "_PropertyFinal",
                            "constants": [],
                            "variables": [
                              "_PropertyFinal"
                            ]
                          }
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
    "Sunday_Sunday_10_Ability03_Part01": {
      "fileName": "Sunday_Sunday_10_Ability03_Part01",
      "childAbilityList": [
        "Sunday_Sunday_10_Ability03_Camera",
        "Sunday_Sunday_10_Ability03_EnterReady",
        "Sunday_Sunday_10_Ability03_Part01",
        "Sunday_Sunday_10_Ability03_Part02"
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
          "ability": "Sunday_10_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Sunday_Sunday_10_Ability03_EnterReady": {
      "fileName": "Sunday_Sunday_10_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Sunday_Sunday_10_Ability02_Part02": {
      "fileName": "Sunday_Sunday_10_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Haven in Palm"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "type": "Character"
              },
              "passed": [
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
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
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
                }
              ],
              "failed": [
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
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Character"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}.[[getMemoAndSummon]]"
                },
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}} + {{Summoner/Memosprite of Ability Target(ST)}}"
                  },
                  "modifier": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.3) || Variables[1] (0.5) || ADD || RETURN",
                      "displayLines": "(0.3 + 0.5)",
                      "constants": [],
                      "variables": [
                        0.3,
                        0.5
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
                    "target": "{{Ability Target(ST)}} + {{Summoner/Memosprite of Ability Target(ST)}}"
                  },
                  "modifier": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
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
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || Variables[1] (0.5) || ADD || RETURN",
                  "displayLines": "(0.3 + 0.5)",
                  "constants": [],
                  "variables": [
                    0.3,
                    0.5
                  ]
                }
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
              "target": "{{Caster}}"
            },
            "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "Sunday_10_MazeBonus[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Target is Pathstrider",
            "path": [
              "Harmony"
            ],
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Target is Pathstrider",
            "path": [
              "Harmony"
            ],
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getMemoAndSummon]] - {{Ability Target(ST)}}.[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "refPoint": "After"
            },
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "refPoint": "After"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Character"
          },
          "passed": [
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
                    "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
                  },
                  "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
                  "duration": {
                    "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                    "displayLines": "_P01_LifeTime",
                    "constants": [],
                    "variables": [
                      "_P01_LifeTime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                    "displayLines": "_SkillP01_StackingLayer",
                    "constants": [],
                    "variables": [
                      "_SkillP01_StackingLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
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
                    "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
                  },
                  "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
                  "duration": {
                    "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                    "displayLines": "_P01_LifeTime",
                    "constants": [],
                    "variables": [
                      "_P01_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
                  "duration": {
                    "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                    "displayLines": "_P01_LifeTime",
                    "constants": [],
                    "variables": [
                      "_P01_LifeTime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                    "displayLines": "_SkillP01_StackingLayer",
                    "constants": [],
                    "variables": [
                      "_SkillP01_StackingLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
                  "duration": {
                    "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                    "displayLines": "_P01_LifeTime",
                    "constants": [],
                    "variables": [
                      "_P01_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Sunday_10_Eidolon1_SuperBonus[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.16) || RETURN",
                          "displayLines": "0.16",
                          "constants": [],
                          "variables": [
                            0.16
                          ]
                        },
                        "MDF_PropertyRatio02": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Sunday_10_Eidolon1_SuperBonusForServant[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
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
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Ability02_Property[<span class=\"descriptionNumberColor\">Benison of Paper and Rites</span>]",
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
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Benison of Paper and Rites"
        }
      ]
    },
    "Sunday_Sunday_10_Ability02_Part01": {
      "fileName": "Sunday_Sunday_10_Ability02_Part01",
      "childAbilityList": [
        "Sunday_Sunday_10_Ability02_Camera",
        "Sunday_Sunday_10_Ability02_Part01",
        "Sunday_Sunday_10_Ability02_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sunday_10_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        }
      ],
      "references": []
    },
    "Sunday_Sunday_10_Ability01_Part02": {
      "fileName": "Sunday_Sunday_10_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Shot Fired"
        },
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Sunday_Sunday_10_Ability01_Part01": {
      "fileName": "Sunday_Sunday_10_Ability01_Part01",
      "childAbilityList": [
        "Sunday_Sunday_10_Ability01_Camera",
        "Sunday_Sunday_10_Ability01_Part01",
        "Sunday_Sunday_10_Ability01_Part02"
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
          "ability": "Sunday_10_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Sunday_Modifiers": {
      "fileName": "Sunday_Modifiers",
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
          "for": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CritialChance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CritialChance",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CritialDamage_Add",
                      "value": {
                        "operator": "Variables[0] (_CritialChance) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_CritialChance - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_CritialChance"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CritialDamage_Add",
                      "value": {
                        "operator": "Variables[0] (_CritialDamage_Add) || Constants[0] (2) || MUL || RETURN",
                        "displayLines": "(_CritialDamage_Add * 2)",
                        "constants": [
                          2
                        ],
                        "variables": [
                          "_CritialDamage_Add"
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
                        "operator": "Variables[0] (_CritialDamage_Add) || RETURN",
                        "displayLines": "_CritialDamage_Add",
                        "constants": [],
                        "variables": [
                          "_CritialDamage_Add"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">_CritialDamage_Add</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Dawn of Sidereal Cacophony"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_CriticalChanceConvertListen",
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
                  "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CritialChance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CritialChance",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Change in Crit RATE [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CritialChance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CritialChance",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sunday_10_CriticalChanceConvert[<span class=\"descriptionNumberColor\">Dawn of Sidereal Cacophony</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_CritUp[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sunday_10_CriticalChanceConvertListen"
                    }
                  ]
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
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
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_CritValue) || MUL || RETURN",
                        "displayLines": "(MDF_Layer * MDF_CritValue)",
                        "constants": [],
                        "variables": [
                          "MDF_Layer",
                          "MDF_CritValue"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CritValue) || RETURN",
                        "displayLines": "MDF_CritValue",
                        "constants": [],
                        "variables": [
                          "MDF_CritValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sunday_10_CriticalChanceConvertListen",
                      "valuePerStack": {
                        "_CritialChance": 0
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_CritValue"
          ],
          "latentQueue": [],
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "The Sorrowing Body"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Ability02_PreshowForSummonUnit",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}.[[removeMemosprite]].[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Target is Pathstrider",
              "path": [
                "Harmony"
              ],
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Ability02_PreshowForLongling",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}.[[removeMemosprite]].[[getMemoAndSummon]] - {{Player's Aim Target List}}.[[removeMemosprite]].[[getMemoAndSummon]].[[removeBattleEventsFromOthers]]"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Target is Pathstrider",
              "path": [
                "Harmony"
              ],
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Ability02_Preshow",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}} + {{Player Team All(with Unselectable)V2}}.[[getAttachedSummon]]"
                  }
                }
              ]
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
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}} + {{Player Team All(with Unselectable)V2}}.[[getAttachedSummon]]"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}} + {{Player Team All(with Unselectable)V2}}.[[getAttachedSummon]]"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}.[[getMemoAndSummon]]"
                    },
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player's Aim Target List}}.[[getAttachedSummon]] + {{Player's Aim Target List}}.[[getMemosprite]]"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}} - {{Player's Aim Target List}}.[[getMemosprite]]"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Target is Pathstrider",
              "path": [
                "Harmony"
              ],
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Eidolon1_SuperBonusForServant[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
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
                      "value": "(0 - MDF_PropertyRatio)"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF.",
          "type": "Buff",
          "effectName": "Millennium's Quietus",
          "statusName": "Millennium's Quietus"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Eidolon1_SuperBonus[<span class=\"descriptionNumberColor\">Millennium's Quietus</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Damage Tags",
                        "damageTag": [
                          "Summon-Tag DMG"
                        ]
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(0 - MDF_PropertyRatio02)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(0 - MDF_PropertyRatio)"
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
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Jing Yuan"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1222,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Lingsha"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1112,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Topaz & Numby"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF. When a summon deals DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio02</span> of the enemy targets' DEF."
                    }
                  ]
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getAttachedSummon]]"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Jing Yuan"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1222,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Lingsha"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1112,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Topaz & Numby"
                          }
                        ],
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF. When a summon deals DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio02</span> of the enemy targets' DEF."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Jing Yuan"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1222,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Lingsha"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1112,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Topaz & Numby"
                          }
                        ],
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Update Modifier Description",
                          "popUpText": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF. When a summon deals DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio02</span> of the enemy targets' DEF."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Jing Yuan"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1222,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Lingsha"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1112,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Topaz & Numby"
                          }
                        ],
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Update Modifier Description",
                          "popUpText": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_PropertyRatio02"
          ],
          "latentQueue": [],
          "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of enemy targets' DEF.",
          "type": "Buff",
          "effectName": "Millennium's Quietus",
          "statusName": "Millennium's Quietus"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_MazeBonus[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "The Glorious Mysteries"
        },
        {
          "name": "Modifier Construction",
          "for": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CheckAllLinkerDie",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}} - {{Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Sunday_10_Ability03_Link[<span class=\"descriptionNumberColor\">The Beatified</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CheckAllLinkerDie",
                      "value": 1
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
                    "value1": "MDF_CheckAllLinkerDie",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Sunday_10_Ability03_Link_ForCaster"
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": 0,
                          "priorState": "Normal"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_lifeTime",
                          "value": 0
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_ownerCritDamage",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyFinal",
                  "value": {
                    "operator": "Variables[0] (_ownerCritDamage) || Variables[1] (MDF_PropertyRatio) || MUL || Variables[2] (MDF_PropertyBase) || ADD || RETURN",
                    "displayLines": "((_ownerCritDamage * MDF_PropertyRatio) + MDF_PropertyBase)",
                    "constants": [],
                    "variables": [
                      "_ownerCritDamage",
                      "MDF_PropertyRatio",
                      "MDF_PropertyBase"
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
                    "operator": "Variables[0] (MDF_PropertyFinal) || RETURN",
                    "displayLines": "MDF_PropertyFinal",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyFinal"
                    ]
                  },
                  "isRefresh": true
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
                      "popUpText": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyFinal</span>. DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_AddDamage</span>."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
                        ]
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
              "variableName": "MDF_PropertyFinal",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99999,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyFinal) || RETURN",
                        "displayLines": "MDF_PropertyFinal",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyFinal"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_PropertyBase"
          ],
          "latentQueue": [],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyFinal</span>.",
          "type": "Buff",
          "effectName": "The Beatified",
          "statusName": "The Beatified"
        }
      ],
      "references": []
    }
  }
}