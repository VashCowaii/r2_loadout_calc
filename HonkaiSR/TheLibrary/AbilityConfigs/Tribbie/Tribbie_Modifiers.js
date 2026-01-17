const configAbility = {
  "fileName": "Tribbie_Modifiers",
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
      "for": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After using Ultimate, Tribbie can launch Follow-Up ATK.",
      "type": "Other",
      "statusName": "Busy as Tribbie"
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Bonus_Debuff[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
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
      "description": "Received DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Guess Who Lives Here"
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Bonus_Buff",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
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
                    "modifier": "Tribbie_SKL03_Bonus_Mark",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamDark"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Attacked",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Tribbie_SKL03_Bonus_Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Count",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Attacked",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "PERF_CNT",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Tribbie_SKL03_Bonus_Mark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Tribbie_SKL03_Bonus_HighestHPMark"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Attacked",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Count"
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
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Count + 1)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_ExtraLoopCount) || ADD || RETURN",
                    "displayLines": "(MDF_Count + MDF_ExtraLoopCount)",
                    "constants": [],
                    "variables": [
                      "MDF_Count",
                      "MDF_ExtraLoopCount"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Tribbie_SKL03_Bonus_Mark",
                          "justAddedOrActive": true
                        }
                      },
                      "Shuffle Targets",
                      {
                        "name": "Sort by Stat",
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "living": true,
                        "sortByHighest": true
                      },
                      {
                        "name": "Return Target",
                        "value": 1
                      }
                    ]
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Tribbie_SKL03_Bonus_HighestHPMark"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "PursuedDamage_PerformanceDelay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Tribbie_SKL03_Bonus_Mark",
                              "justAddedOrActive": true
                            }
                          }
                        ]
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Tribbie_SKL03_Bonus_HighestHPMark",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
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
                              "target": "{{Tribbie's Highest HP Target}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Eidolon Activated",
                                "eidolon": 2
                              },
                              "passed": [
                                {
                                  "name": "Shot Fired"
                                },
                                {
                                  "name": "Shot Fired"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Shot Fired"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "Event": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                              "displayLines": "MDF_PropertyValue2",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue2"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
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
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Eidolon1Listener",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Anyone]: Any",
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
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamLight"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_TempDamage",
                  "value": "Result_FinalDamageBase",
                  "context": "ContextCaster"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_Rank01ExtraDamage",
                  "value": {
                    "operator": "Variables[0] (MDF_Rank01ExtraDamage) || Variables[1] (MDF_TempDamage) || ADD || RETURN",
                    "displayLines": "(MDF_Rank01ExtraDamage + MDF_TempDamage)",
                    "constants": [],
                    "variables": [
                      "MDF_Rank01ExtraDamage",
                      "MDF_TempDamage"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamLight"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_Rank01ExtraDamage",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_TempDamage",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamLight"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_Rank01ExtraDamage",
                  "value": {
                    "operator": "Variables[0] (MDF_Rank01ExtraDamage) || Variables[1] (0.24) || MUL || RETURN",
                    "displayLines": "(MDF_Rank01ExtraDamage * 0.24)",
                    "constants": [],
                    "variables": [
                      "MDF_Rank01ExtraDamage",
                      0.24
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Tribbie's Highest HP Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Rank01ExtraDamage) || RETURN",
                      "displayLines": "MDF_Rank01ExtraDamage",
                      "constants": [],
                      "variables": [
                        "MDF_Rank01ExtraDamage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "isConvertedDMG": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Bonus_AttackCount",
      "counter": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Bonus_HighestHPMark",
      "stackData": [],
      "latentQueue": [
        "MDF_Attacked",
        "PERF_CNT"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Bonus_Mark",
      "stackData": [],
      "latentQueue": [
        "MDF_Attacked"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
              },
              "modifier": "Tribbie_SKL03_PointB2_ListenHPChange"
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
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
              },
              "modifier": "Tribbie_SKL03_PointB2_ListenHPChange"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TotalBaseHP",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_MaxHP",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HPConvert",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Character"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalBaseHP",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalBaseHP) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                    "displayLines": "((MDF_TotalBaseHP + MDF_MaxHP) - MDF_HPConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalBaseHP",
                      "MDF_MaxHP",
                      "MDF_HPConvert"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_TotalBaseHP) || Variables[1] (0.09) || MUL || RETURN",
                "displayLines": "(MDF_TotalBaseHP * 0.09)",
                "constants": [],
                "variables": [
                  "MDF_TotalBaseHP",
                  0.09
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "isRefresh": true
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_PropertyValue",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Max HP Boost",
      "statusName": "Glass Ball with Wings!"
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_PointB2_ListenHPChange",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TotalHPChange",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_MaxHP",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HPConvert",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]  - {{Modifier Holder}}"
              },
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Character"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalHPChange",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                    "displayLines": "((MDF_TotalHPChange + MDF_MaxHP) - MDF_HPConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalHPChange",
                      "MDF_MaxHP",
                      "MDF_HPConvert"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (0.09) || MUL || RETURN",
                "displayLines": "(MDF_TotalHPChange * 0.09)",
                "constants": [],
                "variables": [
                  "MDF_TotalHPChange",
                  0.09
                ]
              }
            },
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
              "variableName": "MDF_PropertyValue",
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
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalHPChange",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPConvert",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalHPChange",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                        "displayLines": "((MDF_TotalHPChange + MDF_MaxHP) - MDF_HPConvert)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalHPChange",
                          "MDF_MaxHP",
                          "MDF_HPConvert"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (0.09) || MUL || RETURN",
                    "displayLines": "(MDF_TotalHPChange * 0.09)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalHPChange",
                      0.09
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
                  "variableName": "MDF_PropertyValue",
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
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalHPChange",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPConvert",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalHPChange",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                        "displayLines": "((MDF_TotalHPChange + MDF_MaxHP) - MDF_HPConvert)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalHPChange",
                          "MDF_MaxHP",
                          "MDF_HPConvert"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (0.09) || MUL || RETURN",
                    "displayLines": "(MDF_TotalHPChange * 0.09)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalHPChange",
                      0.09
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
                  "variableName": "MDF_PropertyValue",
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL03_Bonus[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue2",
        "MDF_PointB2_Value"
      ],
      "latentQueue": [],
      "description": "While the Zone exists, increases all enemies' DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and all allies deal Additional DMG when attacking enemies.",
      "type": "Other",
      "effectName": "Guess Who Lives Here",
      "statusName": "Guess Who Lives Here",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Tribbie_SKL03_Bonus_Debuff[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
              "displayLines": "MDF_PropertyValue2",
              "constants": [],
              "variables": [
                "MDF_PropertyValue2"
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
          "modifier": "Tribbie_SKL03_Bonus_Buff",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
              "displayLines": "MDF_PropertyValue2",
              "constants": [],
              "variables": [
                "MDF_PropertyValue2"
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
          "modifier": "Tribbie_SKL03_Eidolon1Listener",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Glass Ball with Wings!"
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL02_Bonus_Buff[<span class=\"descriptionNumberColor\">Numinosity</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Numinosity"
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Peace of Empathy Bond</span>]",
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
                  "value": "(0 - MDF_PropertyValue)"
                }
              ]
            }
          ]
        }
      ],
      "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the enemy target's DEF.",
      "type": "Buff",
      "effectName": "Peace of Empathy Bond",
      "statusName": "Peace of Empathy Bond"
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Numinosity",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}-{{Caster}}"
          },
          "modifier": "Tribbie_SKL02_Bonus_Buff[<span class=\"descriptionNumberColor\">Numinosity</span>]",
          "haloStatus": true,
          "includeBattleEvent": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "Tribbie_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Peace of Empathy Bond</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "includeBattleEvent": true,
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
      "name": "Modifier Construction",
      "for": "Tribbie_PointB1_DamageUpModifier[<span class=\"descriptionNumberColor\">Lamb Outside the Wall...</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
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
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (_Layer) || Variables[1] (0.72) || MUL || RETURN",
                "displayLines": "(_Layer * 0.72)",
                "constants": [],
                "variables": [
                  "_Layer",
                  0.72
                ]
              }
            },
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
      "stackData": [],
      "latentQueue": [
        "OnInsertAbort_Flg"
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillTree_PointB1_P1_Ratio</span>. This effect stacks up to <span class=\"descriptionNumberColor\">#SkillTree_PointB1_P2_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Lamb Outside the Wall...",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_Eidolon6_Bonus_Active",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Tribbie_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Morrow of Star Shine</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "The DMG dealt by Talent's Follow-Up ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Morrow of Star Shine"
    }
  ],
  "references": []
}