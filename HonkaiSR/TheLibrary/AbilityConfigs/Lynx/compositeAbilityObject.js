const compositeAbilityObject = {
  "fullCharacterName": "Lynx",
  "trimCharacterName": "Lynx",
  "abilityList": [
    "Lynx_Lynx_TechniqueInLevel",
    "Lynx_Lynx_PassiveAbility01",
    "Lynx_Lynx_Ability03_Part02",
    "Lynx_Lynx_Ability03_Part01",
    "Lynx_Lynx_Ability03_EnterReady",
    "Lynx_Lynx_Ability02_Part02",
    "Lynx_Lynx_Ability02_Part01",
    "Lynx_Lynx_Ability01_Part02",
    "Lynx_Lynx_Ability01_Part01",
    "Lynx_Modifiers"
  ],
  "abilityObject": {
    "Lynx_Lynx_TechniqueInLevel": {
      "fileName": "Lynx_Lynx_TechniqueInLevel",
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
          "to": "Caster",
          "modifier": "StageAbility_Maze_Lynx_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Lynx_Modifier",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Survival in the Extreme"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "All Team Members(In Context)",
                          "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
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
                            "MDF_HOT_HOTPercentage": {
                              "operator": "Variables[0] (0.036) || RETURN",
                              "displayLines": "0.036",
                              "constants": [],
                              "variables": [
                                0.036
                              ]
                            },
                            "MDF_HOT_HealValue": {
                              "operator": "Variables[0] (96) || RETURN",
                              "displayLines": "96",
                              "constants": [],
                              "variables": [
                                96
                              ]
                            },
                            "MDF_HOT_AggroUp_HOTPercentage": {
                              "operator": "Variables[0] (0.044999998) || RETURN",
                              "displayLines": "0.044999998",
                              "constants": [],
                              "variables": [
                                0.044999998
                              ]
                            },
                            "MDF_HOT_AggroUp_HealValue": {
                              "operator": "Variables[0] (120) || RETURN",
                              "displayLines": "120",
                              "constants": [],
                              "variables": [
                                120
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "All Team Members(In Context)",
                          "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "valuePerStack": {
                            "MDF_HOT_HOTPercentage": {
                              "operator": "Variables[0] (0.036) || RETURN",
                              "displayLines": "0.036",
                              "constants": [],
                              "variables": [
                                0.036
                              ]
                            },
                            "MDF_HOT_HealValue": {
                              "operator": "Variables[0] (96) || RETURN",
                              "displayLines": "96",
                              "constants": [],
                              "variables": [
                                96
                              ]
                            },
                            "MDF_HOT_AggroUp_HOTPercentage": {
                              "operator": "Variables[0] (0.044999998) || RETURN",
                              "displayLines": "0.044999998",
                              "constants": [],
                              "variables": [
                                0.044999998
                              ]
                            },
                            "MDF_HOT_AggroUp_HealValue": {
                              "operator": "Variables[0] (120) || RETURN",
                              "displayLines": "120",
                              "constants": [],
                              "variables": [
                                120
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
    "Lynx_Lynx_PassiveAbility01": {
      "fileName": "Lynx_Lynx_PassiveAbility01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Advance Surveying"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Lynx_Tree01_Listen"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Exploration Techniques"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Lynx_Tree02_Resistance",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.35) || RETURN",
                  "displayLines": "0.35",
                  "constants": [],
                  "variables": [
                    0.35
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
              "to": "Caster",
              "modifier": "Lynx_Eidolon1_ListenBeforeDealHeal01"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Lynx_Eidolon1_ListenBeforeDealHeal02",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_Target_HpRatio) || RETURN",
                      "displayLines": "MDF_Target_HpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_Target_HpRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_Eidolon1_ListenBeforeDealHeal01",
          "modifierFlags": [
            "MuteDotCasterCallBack"
          ],
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
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
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.2) || RETURN",
                        "displayLines": "0.2",
                        "constants": [],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Snapshot(Calculation Instance Completed)",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Lynx_Eidolon1_ListenBeforeDealHeal02",
                  "valuePerStack": {
                    "MDF_Target_HpRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_PropertyValue": {
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_Tree01_Listen",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context)",
                  "modifier": "Lynx_Tree01_OnBeforeBeingAttacked",
                  "valuePerStack": {
                    "MDF_Lynx_PointB1_AddSpValue": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Lynx_Tree01_OnBeforeBeingAttacked",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Lynx_Tree01_OnBeforeBeingAttacked",
                      "valuePerStack": {
                        "MDF_Lynx_PointB1_AddSpValue": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
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
    "Lynx_Lynx_Ability03_Part02": {
      "fileName": "Lynx_Lynx_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": "All Team Members(In Context)",
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
          "name": "Heal",
          "target": "All Team Members(In Context)",
          "healPercent": {
            "operator": "Variables[0] (0.135) || RETURN",
            "displayLines": "0.135",
            "constants": [],
            "variables": [
              0.135
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (360) || RETURN",
            "displayLines": "360",
            "constants": [],
            "variables": [
              360
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Survival in the Extreme"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
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
                "MDF_HOT_HOTPercentage": {
                  "operator": "Variables[0] (0.036) || RETURN",
                  "displayLines": "0.036",
                  "constants": [],
                  "variables": [
                    0.036
                  ]
                },
                "MDF_HOT_HealValue": {
                  "operator": "Variables[0] (96) || RETURN",
                  "displayLines": "96",
                  "constants": [],
                  "variables": [
                    96
                  ]
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "operator": "Variables[0] (0.044999998) || RETURN",
                  "displayLines": "0.044999998",
                  "constants": [],
                  "variables": [
                    0.044999998
                  ]
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "operator": "Variables[0] (120) || RETURN",
                  "displayLines": "120",
                  "constants": [],
                  "variables": [
                    120
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_HOT_HOTPercentage": {
                  "operator": "Variables[0] (0.036) || RETURN",
                  "displayLines": "0.036",
                  "constants": [],
                  "variables": [
                    0.036
                  ]
                },
                "MDF_HOT_HealValue": {
                  "operator": "Variables[0] (96) || RETURN",
                  "displayLines": "96",
                  "constants": [],
                  "variables": [
                    96
                  ]
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "operator": "Variables[0] (0.044999998) || RETURN",
                  "displayLines": "0.044999998",
                  "constants": [],
                  "variables": [
                    0.044999998
                  ]
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "operator": "Variables[0] (120) || RETURN",
                  "displayLines": "120",
                  "constants": [],
                  "variables": [
                    120
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": "Skill Target List",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": "Use Prior Target(s) Defined",
            "target2": "Caster",
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Lynx_Lynx_Ability03_Part01": {
      "fileName": "Lynx_Lynx_Ability03_Part01",
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
          "from": "Caster",
          "ability": "Lynx_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Lynx_Lynx_Ability03_EnterReady": {
      "fileName": "Lynx_Lynx_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Lynx_Lynx_Ability02_Part02": {
      "fileName": "Lynx_Lynx_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "MDF_Lynx_MaxHpValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "MDF_Lynx_MaxHpConvert",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction"
                    ],
                    "target": "Single Target (Primary)"
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": "Single Target (Primary)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Single Target (Primary)",
                  "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]",
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
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || Variables[4] (200) || ADD || RETURN",
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075,
                        0.06,
                        200
                      ]
                    },
                    "MDF_HPAddValueConvert": {
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || RETURN",
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075,
                        0.06
                      ]
                    },
                    "MDF_HPDelta": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    },
                    "MDF_AggroUp": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    },
                    "MDF_AddStatusResistance": {
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
                  "name": "Add Events/Bonuses",
                  "to": "Single Target (Primary)",
                  "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]",
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
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || Variables[4] (200) || ADD || RETURN",
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075,
                        0.06,
                        200
                      ]
                    },
                    "MDF_HPAddValueConvert": {
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || RETURN",
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075,
                        0.06
                      ]
                    },
                    "MDF_HPDelta": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    },
                    "MDF_AggroUp": 0,
                    "MDF_AddStatusResistance": {
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
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction"
                    ],
                    "target": "Single Target (Primary)"
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": "Single Target (Primary)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Single Target (Primary)",
                  "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]",
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
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || Variables[3] (200) || ADD || RETURN",
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075,
                        200
                      ]
                    },
                    "MDF_HPAddValueConvert": {
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || RETURN",
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075
                      ]
                    },
                    "MDF_HPDelta": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
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
                  "to": "Single Target (Primary)",
                  "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]",
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
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || Variables[3] (200) || ADD || RETURN",
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075,
                        200
                      ]
                    },
                    "MDF_HPAddValueConvert": {
                      "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || RETURN",
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)",
                      "constants": [],
                      "variables": [
                        "MDF_Lynx_MaxHpValue",
                        "MDF_Lynx_MaxHpConvert",
                        0.075
                      ]
                    },
                    "MDF_HPDelta": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    },
                    "MDF_AggroUp": 0
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
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
            }
          ]
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
              "to": "Single Target (Primary)",
              "modifier": "Lynx_Eidolon4_AddAttackRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.03) || MUL || RETURN",
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.03)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.03
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Heal",
          "target": "Single Target (Primary)",
          "healPercent": {
            "operator": "Variables[0] (0.12) || RETURN",
            "displayLines": "0.12",
            "constants": [],
            "variables": [
              0.12
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (320) || RETURN",
            "displayLines": "320",
            "constants": [],
            "variables": [
              320
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Survival in the Extreme"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
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
                "MDF_HOT_HOTPercentage": {
                  "operator": "Variables[0] (0.036) || RETURN",
                  "displayLines": "0.036",
                  "constants": [],
                  "variables": [
                    0.036
                  ]
                },
                "MDF_HOT_HealValue": {
                  "operator": "Variables[0] (96) || RETURN",
                  "displayLines": "96",
                  "constants": [],
                  "variables": [
                    96
                  ]
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "operator": "Variables[0] (0.044999998) || RETURN",
                  "displayLines": "0.044999998",
                  "constants": [],
                  "variables": [
                    0.044999998
                  ]
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "operator": "Variables[0] (120) || RETURN",
                  "displayLines": "120",
                  "constants": [],
                  "variables": [
                    120
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_HOT_HOTPercentage": {
                  "operator": "Variables[0] (0.036) || RETURN",
                  "displayLines": "0.036",
                  "constants": [],
                  "variables": [
                    0.036
                  ]
                },
                "MDF_HOT_HealValue": {
                  "operator": "Variables[0] (96) || RETURN",
                  "displayLines": "96",
                  "constants": [],
                  "variables": [
                    96
                  ]
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "operator": "Variables[0] (0.044999998) || RETURN",
                  "displayLines": "0.044999998",
                  "constants": [],
                  "variables": [
                    0.044999998
                  ]
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "operator": "Variables[0] (120) || RETURN",
                  "displayLines": "120",
                  "constants": [],
                  "variables": [
                    120
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": "Single Target (Primary)"
          }
        },
        {
          "name": "Find New Target",
          "from": "Skill Target List",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": "Use Prior Target(s) Defined",
            "target2": "Caster",
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Lynx_Lynx_Ability02_Part01": {
      "fileName": "Lynx_Lynx_Ability02_Part01",
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
          "from": "Caster",
          "ability": "Lynx_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Lynx_Lynx_Ability01_Part02": {
      "fileName": "Lynx_Lynx_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
    "Lynx_Lynx_Ability01_Part01": {
      "fileName": "Lynx_Lynx_Ability01_Part01",
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
          "from": "Caster",
          "ability": "Lynx_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Lynx_Modifiers": {
      "fileName": "Lynx_Modifiers",
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
          "for": "Lynx_Eidolon4_AddAttackRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Resists 1 debuff.",
          "type": "Buff",
          "statusName": "Debuff RES"
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_Tree02_Resistance",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": "Caster",
                  "statName": "STAT_CTRL",
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
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_Tree01_OnBeforeBeingAttacked",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                            "target": "Owner of this Modifier",
                            "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (MDF_Lynx_PointB1_AddSpValue) || RETURN",
                        "displayLines": "MDF_Lynx_PointB1_AddSpValue",
                        "constants": [],
                        "variables": [
                          "MDF_Lynx_PointB1_AddSpValue"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Lynx_PointB1_AddSpValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_HOT_HOTPercentage) || Variables[1] (MDF_HOT_AggroUp_HOTPercentage) || ADD || RETURN",
                        "displayLines": "(MDF_HOT_HOTPercentage + MDF_HOT_AggroUp_HOTPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_HOT_HOTPercentage",
                          "MDF_HOT_AggroUp_HOTPercentage"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_HOT_HealValue) || Variables[1] (MDF_HOT_AggroUp_HealValue) || ADD || RETURN",
                        "displayLines": "(MDF_HOT_HealValue + MDF_HOT_AggroUp_HealValue)",
                        "constants": [],
                        "variables": [
                          "MDF_HOT_HealValue",
                          "MDF_HOT_AggroUp_HealValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_HOT_HOTPercentage) || RETURN",
                        "displayLines": "MDF_HOT_HOTPercentage",
                        "constants": [],
                        "variables": [
                          "MDF_HOT_HOTPercentage"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_HOT_HealValue) || RETURN",
                        "displayLines": "MDF_HOT_HealValue",
                        "constants": [],
                        "variables": [
                          "MDF_HOT_HealValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_HOT_HOTPercentage",
            "MDF_HOT_HealValue",
            "MDF_HOT_AggroUp_HOTPercentage",
            "MDF_HOT_AggroUp_HealValue"
          ],
          "latentQueue": [],
          "description": "Restores a certain amount of HP at the start of each turn.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Healing Over Time"
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPAddValueConvert) || RETURN",
                    "displayLines": "MDF_HPAddValueConvert",
                    "constants": [],
                    "variables": [
                      "MDF_HPAddValueConvert"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                    "displayLines": "MDF_HPDelta",
                    "constants": [],
                    "variables": [
                      "MDF_HPDelta"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AddStatusResistance) || RETURN",
                    "displayLines": "MDF_AddStatusResistance",
                    "constants": [],
                    "variables": [
                      "MDF_AddStatusResistance"
                    ]
                  }
                },
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
                      "popUpText": "Increases Max HP by #1[i] and Effect RES by #2[i]%, and greatly increases the chance of being attacked by enemies."
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "stackData": [
            "MDF_PropertyValue",
            "MDF_HPAddValueConvert",
            "MDF_HPDelta",
            "MDF_AggroUp",
            "MDF_AddStatusResistance"
          ],
          "latentQueue": [],
          "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Effect RES by <span class=\"descriptionNumberColor\">MDF_AddStatusResistance</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Survival Response"
        },
        {
          "name": "Modifier Construction",
          "for": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPAddValueConvert) || RETURN",
                    "displayLines": "MDF_HPAddValueConvert",
                    "constants": [],
                    "variables": [
                      "MDF_HPAddValueConvert"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                    "displayLines": "MDF_HPDelta",
                    "constants": [],
                    "variables": [
                      "MDF_HPDelta"
                    ]
                  }
                },
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
                      "popUpText": "Increases Max HP by #1[i] and greatly increases the chance of being attacked by enemies."
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "stackData": [
            "MDF_PropertyValue",
            "MDF_HPAddValueConvert",
            "MDF_HPDelta",
            "MDF_AggroUp"
          ],
          "latentQueue": [],
          "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Survival Response"
        }
      ],
      "references": []
    }
  }
}