const compositeAbilityObject = {
  "fullCharacterName": "Hysilens",
  "trimCharacterName": "Hysilens",
  "abilityList": [
    "Hysilens_Harscyline_TechniqueInLevel",
    "Hysilens_Harscyline_PassiveAbility01",
    "Hysilens_Harscyline_Ability03_Part02",
    "Hysilens_Harscyline_Ability03_Part01",
    "Hysilens_Harscyline_Ability03_EnterReady",
    "Hysilens_Harscyline_Ability02_Part02",
    "Hysilens_Harscyline_Ability02_Part01",
    "Hysilens_Harscyline_Ability01_Part02",
    "Hysilens_Harscyline_Ability01_Part01",
    "Hysilens_Modifiers",
    "Hysilens_Functions"
  ],
  "abilityObject": {
    "Hysilens_Harscyline_TechniqueInLevel": {
      "fileName": "Hysilens_Harscyline_TechniqueInLevel",
      "childAbilityList": [
        "Hysilens_Harscyline_TechniqueInLevel"
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
          "modifier": "StageAbility_Maze_Harscyline_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Harscyline_Modifier",
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
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "Event": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Harscyline_RandomDOT_Maze"
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
    "Hysilens_Harscyline_PassiveAbility01": {
      "fileName": "Hysilens_Harscyline_PassiveAbility01",
      "childAbilityList": [
        "Hysilens_Harscyline_PassiveAbility01"
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
          "name": "Define Custom Variable",
          "variableName": "Skill03_HaloLifeTime",
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
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
            "displayLines": "Skill03_HaloLifeTime",
            "constants": [],
            "variables": [
              "Skill03_HaloLifeTime"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
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
              "variableName": "Skill03_TriggerDotMaxCount",
              "value": {
                "operator": "Variables[0] (12) || RETURN",
                "displayLines": "12",
                "constants": [],
                "variables": [
                  12
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_TriggerDotMaxCount",
              "value": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
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
              "name": "Define Custom Variable",
              "variableName": "Skill03_DOTDamagePercentage",
              "value": {
                "operator": "Variables[0] (0.8) || Variables[1] (0.2) || ADD || RETURN",
                "displayLines": "(0.8 + 0.2)",
                "constants": [],
                "variables": [
                  0.8,
                  0.2
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_DOTDamagePercentage",
              "value": {
                "operator": "Variables[0] (0.8) || RETURN",
                "displayLines": "0.8",
                "constants": [],
                "variables": [
                  0.8
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Gladius of Conquest"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Harscyline_Ability03_Halopre"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Harscyline_PassiveRandomDOT"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Fiddle of Pearls"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Harscyline_PointB3"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Harscyline_DOTDamageUpPre",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "operator": "Variables[0] (1.16) || RETURN",
                  "displayLines": "1.16",
                  "constants": [],
                  "variables": [
                    1.16
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
          "for": "Harscyline_PointB3",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Harscyline_PointB3_Sub"
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenEnteringRange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Harscyline_PointB3_Sub"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Harscyline_PointB3_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Harscyline_PointB3_Sub",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SkillTree_PointB3_StatusProbabilityPlusConvertValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SkillTree_PointB3_StatusProbabilityConvertValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": {
                    "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityPlusConvertValue) || Variables[1] (SkillTree_PointB3_StatusProbabilityConvertValue) || SUB || RETURN",
                    "displayLines": "(SkillTree_PointB3_StatusProbabilityPlusConvertValue - SkillTree_PointB3_StatusProbabilityConvertValue)",
                    "constants": [],
                    "variables": [
                      "SkillTree_PointB3_StatusProbabilityPlusConvertValue",
                      "SkillTree_PointB3_StatusProbabilityConvertValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_StatusProbabilityValue) || Variables[2] (0.6) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.15) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_StatusProbabilityValue - 0.6) / 0.1)) * 0.15)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "SkillTree_PointB3_StatusProbabilityValue",
                      0.6,
                      0.1,
                      0.15
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_StatusProbabilityValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.9) || RETURN",
                          "displayLines": "0.9",
                          "constants": [],
                          "variables": [
                            0.9
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                          "value": {
                            "operator": "Variables[0] (0.9) || RETURN",
                            "displayLines": "0.9",
                            "constants": [],
                            "variables": [
                              0.9
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
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Harscyline_Ability03_HaloStatus"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                          },
                          "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                              "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                              "constants": [],
                              "variables": [
                                "SkillTree_PointB3_StatusProbabilityValue"
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
                          "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                              "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                              "constants": [],
                              "variables": [
                                "SkillTree_PointB3_StatusProbabilityValue"
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_FirstHitFlag"
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_PassiveRandomDOT",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Anyone]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "invertCondition": true
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Harscyline_FirstHitFlag",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Harscyline_RandomDOT_PassiveRandomDOT"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_FirstHitFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Harscyline_FirstHitFlag"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_Ability03_Halopre",
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
                      "modifier": "Harscyline_Ability03_HaloStatus",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DOTDamagePercentageTemp": {
                          "operator": "Variables[0] (Skill03_DOTDamagePercentage) || RETURN",
                          "displayLines": "Skill03_DOTDamagePercentage",
                          "constants": [],
                          "variables": [
                            "Skill03_DOTDamagePercentage"
                          ]
                        },
                        "MDF_TriggerDOTMaxCountTemp": {
                          "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
                          "displayLines": "Skill03_TriggerDotMaxCount",
                          "constants": [],
                          "variables": [
                            "Skill03_TriggerDotMaxCount"
                          ]
                        },
                        "MDF_DefenceDownRatioTemp": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        },
                        "MDF_ResistanceDownRatioTemp": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_AttackDownRatioTemp": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
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
    "Hysilens_Harscyline_Ability03_Part02": {
      "fileName": "Hysilens_Harscyline_Ability03_Part02",
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
          "modifier": "Harscyline_Ability03_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Harscyline_Ability03_HaloStatus",
          "duration": {
            "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
            "displayLines": "Skill03_HaloLifeTime",
            "constants": [],
            "variables": [
              "Skill03_HaloLifeTime"
            ]
          },
          "valuePerStack": {
            "MDF_DOTDamagePercentageTemp": {
              "operator": "Variables[0] (Skill03_DOTDamagePercentage) || RETURN",
              "displayLines": "Skill03_DOTDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_DOTDamagePercentage"
              ]
            },
            "MDF_TriggerDOTMaxCountTemp": {
              "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
              "displayLines": "Skill03_TriggerDotMaxCount",
              "constants": [],
              "variables": [
                "Skill03_TriggerDotMaxCount"
              ]
            },
            "MDF_DefenceDownRatioTemp": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "MDF_ResistanceDownRatioTemp": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_AttackDownRatioTemp": {
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "The Bubble of Banquets"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "flagName": "STAT_DOT"
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": {
                "operator": "Variables[0] (1.5) || RETURN",
                "displayLines": "1.5",
                "constants": [],
                "variables": [
                  1.5
                ]
              }
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
          "modifier": "Harscyline_Ability03_Flag"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Hysilens_Harscyline_Ability03_Part01": {
      "fileName": "Hysilens_Harscyline_Ability03_Part01",
      "childAbilityList": [
        "Hysilens_Harscyline_Ability03_Camera",
        "Hysilens_Harscyline_Ability03_Part01",
        "Hysilens_Harscyline_Ability03_Part02",
        "Hysilens_Harscyline_Ability03_EnterReady"
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
          "ability": "Harscyline_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Hysilens_Harscyline_Ability03_EnterReady": {
      "fileName": "Hysilens_Harscyline_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Hysilens_Harscyline_Ability02_Part02": {
      "fileName": "Hysilens_Harscyline_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Harscyline_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Overtone Hum: Chorus After Dark Tides</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
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
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.4) || RETURN",
              "displayLines": "1.4",
              "constants": [],
              "variables": [
                1.4
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Hysilens_Harscyline_Ability02_Part01": {
      "fileName": "Hysilens_Harscyline_Ability02_Part01",
      "childAbilityList": [
        "Hysilens_Harscyline_Ability02_Camera",
        "Hysilens_Harscyline_Ability02_Part01",
        "Hysilens_Harscyline_Ability02_Part02"
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
          "ability": "Harscyline_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Hysilens_Harscyline_Ability01_Part02": {
      "fileName": "Hysilens_Harscyline_Ability01_Part02",
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
            "DamageType": "Physical",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
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
    "Hysilens_Harscyline_Ability01_Part01": {
      "fileName": "Hysilens_Harscyline_Ability01_Part01",
      "childAbilityList": [
        "Hysilens_Harscyline_Ability01_Camera",
        "Hysilens_Harscyline_Ability01_Part01",
        "Hysilens_Harscyline_Ability01_Part02"
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
          "ability": "Harscyline_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Hysilens_Modifiers": {
      "fileName": "Hysilens_Modifiers",
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
          "for": "Harscyline_Eidolon1_DamageUp",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSourceCreator]]"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "ModifyDamageData_IndependentDamageAddedRatio",
                      "variables": {
                        "parameter[0]_IndependentDamageAddedRatio": {
                          "operator": "Variables[0] (MDF_PropertyRatio) || Constants[0] (1) || SUB || RETURN",
                          "displayLines": "(MDF_PropertyRatio - 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "MDF_PropertyRatio"
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
          "name": "Modifier Construction",
          "for": "Harscyline_DOTDamageUpPre",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Harscyline_Eidolon1_DamageUp",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (1.16) || RETURN",
                      "displayLines": "1.16",
                      "constants": [],
                      "variables": [
                        1.16
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Poison2[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Wind Shear",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Burn2[<span class=\"descriptionNumberColor\">Burn</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage_Defence",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamageValue",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage_Defence",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamageValue",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Burn",
          "statusName": "Burn",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Electric2[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Tear2[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                      "displayLines": "MDF_DamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Wind Shear",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage_Defence",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Burn_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamageValue",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage_Defence",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamageValue",
                        "_Layer"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Burn",
          "statusName": "Burn",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamagePercentage * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage",
                        "_Layer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(MDF_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_TriggerDotFlag",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_PassiveDot_Part1Listen",
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
                    "name": "Compare: Variable",
                    "value1": "MDF_TriggerEffectFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_DotHitCount) || RETURN",
                        "displayLines": "MDF_DotHitCount",
                        "constants": [],
                        "variables": [
                          "MDF_DotHitCount"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Scoring_Hars_Count",
                          "value": {
                            "operator": "Variables[0] (Scoring_Hars_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Scoring_Hars_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Scoring_Hars_Count"
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] (MDF_DOTDamagePercentage) || RETURN",
                              "displayLines": "MDF_DOTDamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_DOTDamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": 91
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Action Start [Owner]",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Harscyline_TriggerDotFlag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TriggerEffectFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DotHitCount",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Harscyline_TriggerDotFlag"
                      },
                      {
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
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                          "displayLines": "MDF_MaxLimit",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLimit"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DotHitCount",
                      "value": {
                        "operator": "Variables[0] (MDF_DotHitCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_DotHitCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_DotHitCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TriggerEffectFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_PassiveDot_Trigger",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 1
                }
              ],
              "priorityLevel": -11
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
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                          "displayLines": "MDF_MaxLimit",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLimit"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CanTriggerDot",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "Memosprite_CyreneServant_AmazingBonus_Harscyline[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]"
                              },
                              {
                                "name": "Character ID",
                                "ID": 1415,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Cyrene"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
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
                            "modifier": "Harscyline_Ability03_Flag",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Harscyline_TriggerDotFlag",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_isPhase1",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextModifier"
                          }
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
                            "value1": "MDF_isPhase1",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextModifier"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Harscyline_TriggerDotFlag"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DotHitCount",
                          "value": {
                            "operator": "Variables[0] (MDF_DotHitCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_DotHitCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_DotHitCount"
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
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                          "displayLines": "MDF_MaxLimit",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLimit"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DotHitCount",
                          "value": {
                            "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                            "displayLines": "MDF_MaxLimit",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLimit"
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "Harscyline_Ability03_Flag",
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_DotHitCount) || RETURN",
                        "displayLines": "MDF_DotHitCount",
                        "constants": [],
                        "variables": [
                          "MDF_DotHitCount"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Scoring_Hars_Count",
                          "value": {
                            "operator": "Variables[0] (Scoring_Hars_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Scoring_Hars_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Scoring_Hars_Count"
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] (MDF_DOTDamagePercentage) || RETURN",
                              "displayLines": "MDF_DOTDamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_DOTDamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isPhase1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CanTriggerDot",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isPhase1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DotHitCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CanTriggerDot",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
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
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Harscyline_TriggerDotFlag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isPhase1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DotHitCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CanTriggerDot",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
          "statusName": "The Fiddle of Pearls"
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_HaloDebuff[<span class=\"descriptionNumberColor\">Maelstrom Rhapsody</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "STAT_DefenceDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_DefenceDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_DefenceDownRatio"
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_AttackDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_AttackDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_AttackDownRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDownRatio) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDownRatio)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDownRatio"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Enemy targets within the Zone have their ATK decreased by <span class=\"descriptionNumberColor\">MDF_AttackDownRatio</span>, DEF decreased by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>, and All-Type RES decreased by <span class=\"descriptionNumberColor\">MDF_ResistanceDownRatio</span>. For every 1 instance of DoT they receive, they will take Physical DoT equal to <span class=\"descriptionNumberColor\">MDF_DOTDamagePercentage</span> of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to <span class=\"descriptionNumberColor\">MDF_TriggerDOTMaxCount</span> time(s). And it cannot repeatedly trigger this effect."
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Enemy targets within the Zone have their ATK decreased by <span class=\"descriptionNumberColor\">MDF_AttackDownRatio</span> and DEF decreased by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>. For every 1 instance of DoT they receive, they will take Physical DoT equal to <span class=\"descriptionNumberColor\">MDF_DOTDamagePercentage</span> of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to <span class=\"descriptionNumberColor\">MDF_TriggerDOTMaxCount</span> time(s). And it cannot repeatedly trigger this effect.",
          "type": "Debuff",
          "statusName": "Maelstrom Rhapsody"
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Overtone Hum: Chorus After Dark Tides</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Overtone Hum: Chorus After Dark Tides"
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_Maze_Flag"
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_Ability03_Flag",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Harscyline_Ability03_HaloStatus",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Caster}}"
                  },
                  "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": {
                    "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
                    "displayLines": "Skill03_HaloLifeTime",
                    "constants": [],
                    "variables": [
                      "Skill03_HaloLifeTime"
                    ]
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "MDF_Layer",
                  "modifierName": "Harscyline_Ability03_HaloStatus",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
                    "displayLines": "Skill03_HaloLifeTime",
                    "constants": [],
                    "variables": [
                      "Skill03_HaloLifeTime"
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
                    "conditionList": "The Gladius of Conquest"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "adjustmentType": "+"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "MDF_Layer",
                  "modifierName": "Harscyline_Ability03_HaloStatus",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
                    "displayLines": "Skill03_HaloLifeTime",
                    "constants": [],
                    "variables": [
                      "Skill03_HaloLifeTime"
                    ]
                  },
                  "priorState": "Active",
                  "bar#": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Harscyline_Maze_Flag"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "The Gladius of Conquest"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Harscyline_Maze_Flag"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DOTDamagePercentageTemp",
            "MDF_TriggerDOTMaxCountTemp",
            "MDF_DefenceDownRatioTemp",
            "MDF_ResistanceDownRatioTemp",
            "MDF_AttackDownRatioTemp"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Harscyline_PassiveDot_Trigger",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_MaxLimit": {
                  "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
                  "displayLines": "Skill03_TriggerDotMaxCount",
                  "constants": [],
                  "variables": [
                    "Skill03_TriggerDotMaxCount"
                  ]
                },
                "MDF_DOTDamagePercentage": {
                  "operator": "Variables[0] (MDF_DOTDamagePercentageTemp) || RETURN",
                  "displayLines": "MDF_DOTDamagePercentageTemp",
                  "constants": [],
                  "variables": [
                    "MDF_DOTDamagePercentageTemp"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Harscyline_PassiveDot_Part1Listen",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_MaxLimit": {
                  "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
                  "displayLines": "Skill03_TriggerDotMaxCount",
                  "constants": [],
                  "variables": [
                    "Skill03_TriggerDotMaxCount"
                  ]
                },
                "MDF_DOTDamagePercentage": {
                  "operator": "Variables[0] (MDF_DOTDamagePercentageTemp) || RETURN",
                  "displayLines": "MDF_DOTDamagePercentageTemp",
                  "constants": [],
                  "variables": [
                    "MDF_DOTDamagePercentageTemp"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Harscyline_HaloDebuff[<span class=\"descriptionNumberColor\">Maelstrom Rhapsody</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DOTDamagePercentage": {
                  "operator": "Variables[0] (MDF_DOTDamagePercentageTemp) || RETURN",
                  "displayLines": "MDF_DOTDamagePercentageTemp",
                  "constants": [],
                  "variables": [
                    "MDF_DOTDamagePercentageTemp"
                  ]
                },
                "MDF_TriggerDOTMaxCount": {
                  "operator": "Variables[0] (MDF_TriggerDOTMaxCountTemp) || RETURN",
                  "displayLines": "MDF_TriggerDOTMaxCountTemp",
                  "constants": [],
                  "variables": [
                    "MDF_TriggerDOTMaxCountTemp"
                  ]
                },
                "MDF_DefenceDownRatio": {
                  "operator": "Variables[0] (MDF_DefenceDownRatioTemp) || RETURN",
                  "displayLines": "MDF_DefenceDownRatioTemp",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceDownRatioTemp"
                  ]
                },
                "MDF_ResistanceDownRatio": {
                  "operator": "Variables[0] (MDF_ResistanceDownRatioTemp) || RETURN",
                  "displayLines": "MDF_ResistanceDownRatioTemp",
                  "constants": [],
                  "variables": [
                    "MDF_ResistanceDownRatioTemp"
                  ]
                },
                "MDF_AttackDownRatio": {
                  "operator": "Variables[0] (MDF_AttackDownRatioTemp) || RETURN",
                  "displayLines": "MDF_AttackDownRatioTemp",
                  "constants": [],
                  "variables": [
                    "MDF_AttackDownRatioTemp"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Caster}}"
              },
              "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "The Fiddle of Pearls"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                  "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                  "constants": [],
                  "variables": [
                    "SkillTree_PointB3_StatusProbabilityValue"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Hysilens_Functions": {
      "fileName": "Hysilens_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Harscyline_DOT_MaskCheck",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Tear_Mask",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Electric_Mask",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Burn_Mask",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Poison_Mask",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Mask",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Tear_Mask",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Tear_Mask",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Electric_Mask",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Electric_Mask",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Burn_Mask",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Burn_Mask",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Poison_Mask",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Poison_Mask",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Mask",
              "value": {
                "operator": "Variables[0] (DOT_Tear_Mask) || Variables[1] (DOT_Electric_Mask) || ADD || Variables[2] (DOT_Burn_Mask) || ADD || Variables[3] (DOT_Poison_Mask) || ADD || RETURN",
                "displayLines": "(((DOT_Tear_Mask + DOT_Electric_Mask) + DOT_Burn_Mask) + DOT_Poison_Mask)",
                "constants": [],
                "variables": [
                  "DOT_Tear_Mask",
                  "DOT_Electric_Mask",
                  "DOT_Burn_Mask",
                  "DOT_Poison_Mask"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DOT_Mask",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Tear_Mask",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Electric_Mask",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Burn_Mask",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DOT_Poison_Mask",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Harscyline_RandomDOT_Maze",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Harscyline_DOT_MaskCheck"
                },
                {
                  "name": "Random Event",
                  "odds": [
                    {
                      "operator": "Variables[0] (DOT_Tear_Mask) || RETURN",
                      "displayLines": "DOT_Tear_Mask",
                      "constants": [],
                      "variables": [
                        "DOT_Tear_Mask"
                      ]
                    },
                    {
                      "operator": "Variables[0] (DOT_Electric_Mask) || RETURN",
                      "displayLines": "DOT_Electric_Mask",
                      "constants": [],
                      "variables": [
                        "DOT_Electric_Mask"
                      ]
                    },
                    {
                      "operator": "Variables[0] (DOT_Burn_Mask) || RETURN",
                      "displayLines": "DOT_Burn_Mask",
                      "constants": [],
                      "variables": [
                        "DOT_Burn_Mask"
                      ]
                    },
                    {
                      "operator": "Variables[0] (DOT_Poison_Mask) || RETURN",
                      "displayLines": "DOT_Poison_Mask",
                      "constants": [],
                      "variables": [
                        "DOT_Poison_Mask"
                      ]
                    }
                  ],
                  "execute": [
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                            "Modifier_Tear_DamageRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Modifier_Tear_MaxPercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Tear2[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                            "Modifier_Tear_DamageRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Modifier_Tear_MaxPercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                            "Modifier_Tear_DamageRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Modifier_Tear_MaxPercentage": {
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
                    },
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                            "Modifier_Electric_DamagePercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Electric2[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                            "Modifier_Electric_DamagePercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                            "Modifier_Electric_DamagePercentage": {
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
                    },
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                            "Modifier_Burn_DamagePercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Burn2[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                            "Modifier_Burn_DamagePercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                            "Modifier_Burn_DamagePercentage": {
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
                    },
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                            "Modifier_Poison_DamagePercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Poison2[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                            "Modifier_Poison_DamagePercentage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                            "Modifier_Poison_DamagePercentage": {
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Harscyline_RandomDOT_PassiveRandomDOT",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Harscyline_DOT_MaskCheck"
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (DOT_Tear_Mask) || RETURN",
                  "displayLines": "DOT_Tear_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Tear_Mask"
                  ]
                },
                {
                  "operator": "Variables[0] (DOT_Electric_Mask) || RETURN",
                  "displayLines": "DOT_Electric_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Electric_Mask"
                  ]
                },
                {
                  "operator": "Variables[0] (DOT_Burn_Mask) || RETURN",
                  "displayLines": "DOT_Burn_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Burn_Mask"
                  ]
                },
                {
                  "operator": "Variables[0] (DOT_Poison_Mask) || RETURN",
                  "displayLines": "DOT_Poison_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Poison_Mask"
                  ]
                }
              ],
              "execute": [
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Tear2[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
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
                },
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Electric2[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                        "Modifier_Electric_DamagePercentage": {
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
                },
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                        "Modifier_Burn_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Burn2[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                        "Modifier_Burn_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                        "Modifier_Burn_DamagePercentage": {
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
                },
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Poison2[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                        "Modifier_Poison_DamagePercentage": {
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
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}