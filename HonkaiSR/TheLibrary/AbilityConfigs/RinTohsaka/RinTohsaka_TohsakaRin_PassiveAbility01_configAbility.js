const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_PassiveAbility01",
  "childAbilityList": [
    "RinTohsaka_TohsakaRin_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 10,
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
      "modifier": "<a class=\"gModGreen\" id=\"-79948077\">TohsakaRin_Passive01Modifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-53931784\">TohsakaRin_GemStoneNumListener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"330484321\">TohsakaRin_Passive_Sub_EnergyBar_BattlePoint</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_CostGemNum",
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
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_ActiveGemNum",
      "value": {
        "operator": "Variables[0] (15) || RETURN",
        "displayLines": "15",
        "constants": [],
        "variables": [
          15
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_MaxGemNum",
      "value": 999
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "EnergyBar_GemNum",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "EnergyBar_GemNum_Shadow",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "EnergyBar_GemNum",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
        "displayLines": "EnergyBar_GemNum",
        "constants": [],
        "variables": [
          "EnergyBar_GemNum"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (EnergyBar_ActiveGemNum) || RETURN",
        "displayLines": "EnergyBar_ActiveGemNum",
        "constants": [],
        "variables": [
          "EnergyBar_ActiveGemNum"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Elegant Conduct"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1033518323\">TohsakaRin_PointB1_AddMaxBP</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Ladylike Poise"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"843650548\">TohsakaRin_PointB2_Listen</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1790400214\">TohsakaRin_Passive_S02Enhance_Listener</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1863098959\">TohsakaRin_Eidolon2_SelfAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1630247172\">TohsakaRin_Eidolon2_TeamAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (1.3) || RETURN",
              "displayLines": "1.3",
              "constants": [],
              "variables": [
                1.3
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1424670314\">TohsakaRin_Eidolon2_Listen</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-889730965\">TohsakaRin_Eidolon6_Penetrate</a>[<span class=\"descriptionNumberColor\">Nailed It This Time!</span>]",
          "valuePerStack": {
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
          "modifier": "<a class=\"gModGreen\" id=\"1161328360\">TohsakaRin_Eidolon1_Enhance</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1424670314\">TohsakaRin_Eidolon2_Listen</a>",
      "execute": [
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1630247172\">TohsakaRin_Eidolon2_TeamAbilityBonus</a>[<span class=\"descriptionNumberColor\">Dimensional Traveler</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (1.3) || RETURN",
                      "displayLines": "1.3",
                      "constants": [],
                      "variables": [
                        1.3
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
      "for": "<a class=\"gModGreen\" id=\"mod__843650548\">TohsakaRin_PointB2_Listen</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
              "invertCondition": true
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-973289523\">TohsakaRin_Passive_S02Enhance</a>"
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.2(SPD Change)"
        }
      },
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
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
                  {
                    "name": "Skill Name",
                    "skillName": "Skill21"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
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
          ]
        },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1935988058\">TohsakaRin_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Ladylike Poise</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
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
          "priorityLevel": -80
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__330484321\">TohsakaRin_Passive_Sub_EnergyBar_BattlePoint</a>",
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxLayer",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxLayer",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "Define Custom Variable with SkillPoint Changes",
              "variableName": "_BPAddValue",
              "type": "UnclampedDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_BPAddValue",
                    "compareType": "<",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
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
                            "name": "Compare: Variable",
                            "value1": "MDF_MaxLayer",
                            "compareType": ">",
                            "value2": 1
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
                          "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.7) || RETURN",
                              "displayLines": "0.7",
                              "constants": [],
                              "variables": [
                                0.7
                              ]
                            },
                            "MDF_CurrentMaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
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
                              "operator": "Variables[0] (0.7) || RETURN",
                              "displayLines": "0.7",
                              "constants": [],
                              "variables": [
                                0.7
                              ]
                            },
                            "MDF_CurrentMaxLayer": 1
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "_BPAddValue",
                      "value": {
                        "operator": "Variables[0] (_BPAddValue) || INVERT || RETURN",
                        "displayLines": "-_BPAddValue",
                        "constants": [],
                        "variables": [
                          "_BPAddValue"
                        ]
                      }
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (_BPAddValue) || RETURN",
                        "displayLines": "_BPAddValue",
                        "constants": [],
                        "variables": [
                          "_BPAddValue"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Add to Value (Default)",
                          "variableName": "EnergyBar_GemNum",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum_Shadow",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                            "displayLines": "EnergyBar_GemNum_Shadow",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum_Shadow"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_GemNum_Shadow",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                            "displayLines": "EnergyBar_GemNum_Shadow",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum_Shadow"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_BPAddValue",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
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
                                "name": "Compare: Variable",
                                "value1": "MDF_MaxLayer",
                                "compareType": ">",
                                "value2": 1
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
                              "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (0.7) || RETURN",
                                  "displayLines": "0.7",
                                  "constants": [],
                                  "variables": [
                                    0.7
                                  ]
                                },
                                "MDF_CurrentMaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
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
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"945078119\">TohsakaRin_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Gem Magecraft</span>]",
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
                                  "operator": "Variables[0] (0.7) || RETURN",
                                  "displayLines": "0.7",
                                  "constants": [],
                                  "variables": [
                                    0.7
                                  ]
                                },
                                "MDF_CurrentMaxLayer": 1
                              }
                            }
                          ]
                        },
                        {
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (_BPAddValue) || RETURN",
                            "displayLines": "_BPAddValue",
                            "constants": [],
                            "variables": [
                              "_BPAddValue"
                            ]
                          },
                          "Event": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Add to Value (Default)",
                              "variableName": "EnergyBar_GemNum",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "EnergyBar_GemNum_Shadow",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                                "displayLines": "EnergyBar_GemNum_Shadow",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum_Shadow"
                                ]
                              },
                              "priorState": "Normal"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                                "displayLines": "EnergyBar_GemNum",
                                "constants": [],
                                "variables": [
                                  "EnergyBar_GemNum"
                                ]
                              },
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
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_GemNum_Shadow",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 0.5,
              "whenEnteringRange": [
                {
                  "name": "Update Displayed Energy Bar",
                  "enhancedColor": "False"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "enhancedColor": "False"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.5,
              "maxValue": 9999,
              "whenEnteringRange": [
                {
                  "name": "Update Displayed Energy Bar",
                  "enhancedColor": "True"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "enhancedColor": "True"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-79948077\">TohsakaRin_Passive01Modifier</a>",
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
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "EnergyBar_GemNum",
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
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum_Shadow",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                        "displayLines": "EnergyBar_GemNum_Shadow",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum_Shadow"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1015,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Archer"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Archer_in_Team",
                  "value": 1
                },
                "Deleted bullshit"
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1015,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Archer"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Archer_in_Team",
                  "value": 1
                },
                "Deleted bullshit"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1033518323\">TohsakaRin_PointB1_AddMaxBP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-171150355\">TohsakaRin_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Elegant Conduct</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "MDF_Penetrate": {
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1015,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Archer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Rin: Archer}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-171150355\">TohsakaRin_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Elegant Conduct</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (1.5) || RETURN",
                          "displayLines": "1.5",
                          "constants": [],
                          "variables": [
                            1.5
                          ]
                        },
                        "MDF_Penetrate": {
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
              ]
            }
          ],
          "priorityLevel": -80
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1790400214\">TohsakaRin_Passive_S02Enhance_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
            }
          ],
          "priorityLevel": 10001
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2068213753\">TohsakaRin_CheckAbility21</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2068213753\">TohsakaRin_CheckAbility21</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (7) || RETURN",
                      "displayLines": "7",
                      "constants": [],
                      "variables": [
                        7
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (EnergyBar_ActiveGemNum) || RETURN",
                      "displayLines": "EnergyBar_ActiveGemNum",
                      "constants": [],
                      "variables": [
                        "EnergyBar_ActiveGemNum"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum_Shadow",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-973289523\">TohsakaRin_Passive_S02Enhance</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": ">=",
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
                      "name": "Define Custom Variable with Skill Points",
                      "variableName": "TMP_CUR_BP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnergyBar_CostGemNum_Real",
                      "value": {
                        "operator": "Variables[0] (TMP_CUR_BP) || Variables[1] (2) || SUB || Variables[2] (2) || MUL || Variables[3] (EnergyBar_GemNum) || ADD || RETURN",
                        "displayLines": "(((TMP_CUR_BP - 2) * 2) + EnergyBar_GemNum)",
                        "constants": [],
                        "variables": [
                          "TMP_CUR_BP",
                          2,
                          2,
                          "EnergyBar_GemNum"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnergyBar_CostGemNum_Real",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "DamageCarry",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (Tohsakarin_00_DamageCarry) || RETURN",
                          "displayLines": "Tohsakarin_00_DamageCarry",
                          "constants": [],
                          "variables": [
                            "Tohsakarin_00_DamageCarry"
                          ]
                        },
                        "contextScope": "AITag"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnergyBar_CostGemNum_Real",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                            "displayLines": "EnergyBar_GemNum",
                            "constants": [],
                            "variables": [
                              "EnergyBar_GemNum"
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
                    "value1": "EnergyBar_CostGemNum_Real",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__320) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__320",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__320"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_UseSkill21",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_UseSkill21",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum_Shadow",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_UseSkill21",
                      "value": 1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AI_UseSkill21",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-973289523\">TohsakaRin_Passive_S02Enhance</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-53931784\">TohsakaRin_GemStoneNumListener</a>",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_GemNum",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": {
                "operator": "Variables[0] (EnergyBar_MaxGemNum) || RETURN",
                "displayLines": "EnergyBar_MaxGemNum",
                "constants": [],
                "variables": [
                  "EnergyBar_MaxGemNum"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1015,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Archer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 10
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Tohsakarin_00_DamageCarry",
                      "value": 10
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Rin: Archer}}"
                      },
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Tohsakarin_00_DamageCarry",
                      "value": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Rin: Archer}}"
                      },
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 10
                    }
                  ]
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (EnergyBar_MaxGemNum) || RETURN",
                "displayLines": "EnergyBar_MaxGemNum",
                "constants": [],
                "variables": [
                  "EnergyBar_MaxGemNum"
                ]
              },
              "maxValue": 999,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 100
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Tohsakarin_00_DamageCarry",
                  "value": 100
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Rin: Archer}}"
                  },
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 10
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"253442980\">TohsakaRin_GemStone_Show</a>[<span class=\"descriptionNumberColor\">Gem Energy</span>]"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}