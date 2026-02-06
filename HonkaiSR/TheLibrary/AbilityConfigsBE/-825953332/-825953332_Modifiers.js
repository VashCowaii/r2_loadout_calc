const configAbility = {
  "fileName": "-825953332_Modifiers",
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
      "for": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
      "stackType": "ReplaceByCaster",
      "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
      "type": "Other",
      "effectName": "Energy Overflow",
      "statusName": "Energy Overflow"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_ReturnSP",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EntityStockSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                      "displayLines": "(EntityMaxSP - _CurrentSP)",
                      "constants": [],
                      "variables": [
                        "EntityMaxSP",
                        "_CurrentSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || RETURN",
                        "displayLines": "EntityStockSP",
                        "constants": [],
                        "variables": [
                          "EntityStockSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityStockSP",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(EntityMaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "EntityMaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityStockSP",
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                        "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "EntityStockSP",
                          "EntityMaxSP",
                          "_CurrentSP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "operator": "Variables[0] (EntityStockSP) || RETURN",
                          "displayLines": "EntityStockSP",
                          "constants": [],
                          "variables": [
                            "EntityStockSP"
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
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_TriggerFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_AddSP",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": {
                    "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (EntityMaxSP) || Variables[2] (BattleEvent_P1_ADF_Get) || MUL || ADD || RETURN",
                    "displayLines": "(EntityCurrentSP + (EntityMaxSP * BattleEvent_P1_ADF_Get))",
                    "constants": [],
                    "variables": [
                      "EntityCurrentSP",
                      "EntityMaxSP",
                      "BattleEvent_P1_ADF_Get"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EntityCurrentSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EntityMaxSP) || RETURN",
                      "displayLines": "EntityMaxSP",
                      "constants": [],
                      "variables": [
                        "EntityMaxSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityMaxSP) || Variables[1] (BattleEvent_P1_ADF_Get) || MUL || RETURN",
                        "displayLines": "(EntityMaxSP * BattleEvent_P1_ADF_Get)",
                        "constants": [],
                        "variables": [
                          "EntityMaxSP",
                          "BattleEvent_P1_ADF_Get"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityStockSP",
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                        "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                        "constants": [],
                        "variables": [
                          "EntityStockSP",
                          "EntityCurrentSP",
                          "EntityMaxSP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "operator": "Variables[0] (EntityStockSP) || RETURN",
                          "displayLines": "EntityStockSP",
                          "constants": [],
                          "variables": [
                            "EntityStockSP"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EntityCurrentSP",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P1_ADF_Get"
      ],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_TriggerFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When receiving an attack or losing HP, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_3</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Sanity"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                "invertCondition": true
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
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2113_ADF_3) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2113_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2113_ADF_3"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                          "displayLines": "DV_EnterFeverValue",
                          "constants": [],
                          "variables": [
                            "DV_EnterFeverValue"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2113_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_CountSum"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                            "displayLines": "DV_EnterFeverValue",
                            "constants": [],
                            "variables": [
                              "DV_EnterFeverValue"
                            ]
                          },
                          "delta": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2113_ADF_3"
                            ]
                          },
                          "type": "Special"
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
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2113_ADF_3) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2113_ADF_3)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2113_ADF_3"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2113_ADF_3"
                        ]
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2113_ADF_3"
                        ]
                      },
                      "type": "Special"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2111",
        "DV_FantasticStory_PlusAbility_2112",
        "DV_FantasticStory_PlusAbility_2113"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_2</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics: Gnosis"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Technique"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_TargetCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2112_ADF_2) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2112_ADF_2 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2112_ADF_2",
                      "DV_TargetCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2112_ADF_2) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2112_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2112_ADF_2"
                        ]
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2112_ADF_2) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2112_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2112_ADF_2"
                        ]
                      },
                      "type": "Special"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": {
                    "operator": "Variables[0] (DV_TargetCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DV_TargetCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_TargetCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_TargetCount",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2111",
        "DV_FantasticStory_PlusAbility_2112"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using Skill or launching a Follow-Up ATK, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2111_ADF_1</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Evince"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn",
      "stackType": "ReplaceByCaster",
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_InsertFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_InsertFlag",
              "value": 0
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_InsertFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DV_TargetCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2111_ADF_1) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2111_ADF_1 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2111_ADF_1",
                      "DV_TargetCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2111_ADF_1) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2111_ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2111_ADF_1"
                        ]
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2111_ADF_1) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2111_ADF_1)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2111_ADF_1"
                        ]
                      },
                      "type": "Special"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2111"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_plus3_sub[<span class=\"descriptionNumberColor\">Sanity</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "CurrentHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_1) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_1",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2113_ADF_1"
                    ]
                  },
                  "consumeFloor": 1
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
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2113_ADF_2"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        }
      ],
      "description": "Consumes this unit's current HP by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_1</span> when using a Skill. After using Skill, restores <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_2</span> HP equal to this unit's Max HP.",
      "type": "Buff",
      "statusName": "Sanity"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub2[<span class=\"descriptionNumberColor\">Gnosis</span>]",
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
                  "Break DMG"
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
                      "value": "DV_FantasticStory_PlusAbility_2112_ADF_3"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_3</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Gnosis"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_plus1_sub[<span class=\"descriptionNumberColor\">Evince</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
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
                  "name": "Define Custom Variable",
                  "variableName": "DV_InsertFlag",
                  "value": 1
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
              "variableName": "DV_InsertFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_InsertFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Bomb_Layer",
                      "modifierName": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Bomb_Damage",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                        "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) * Bomb_Layer)",
                        "constants": [],
                        "variables": [
                          "BattleEvent_BaseHP",
                          "DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio",
                          "Bomb_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Bomb_Damage_Adjoin",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                        "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)",
                        "constants": [],
                        "variables": [
                          "BattleEvent_BaseHP",
                          "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
                          "Bomb_Layer"
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
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Bomb DMG"
                        ],
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                          "displayLines": "Bomb_Damage_Adjoin",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage_Adjoin"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Bomb DMG"
                        ],
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Use Skills or launching a Follow-Up ATK against enemy targets with \"Shatter\" can immediately trigger \"Shatter.\"",
      "type": "Buff",
      "statusName": "Evince"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "DV_Ratio"
      ],
      "latentQueue": [],
      "description": "After using Basic ATK or Ultimate to attack enemy targets, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "When using a Basic ATK or an Ultimate to attack an enemy target, inflicts the target with \"Shatter,\" stacking up to <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer</span> time(s). At the start of the target's turn or when the target is defeated, deals a set amount of DMG to the target and adjacent targets based on the number of \"Shatter\" stacks.",
      "type": "Buff",
      "statusName": "Concordant Truce"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
                "operator": "Variables[0] (DV_Ratio_Get) || RETURN",
                "displayLines": "DV_Ratio_Get",
                "constants": [],
                "variables": [
                  "DV_Ratio_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "DV_Ratio_Get"
      ],
      "latentQueue": [],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
      "type": "Debuff",
      "statusName": "Surging Grit"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_aura",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_CountSum",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTemp) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_CountSumTemp",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_CountSumTemp"
                ]
              }
            },
            {
              "name": "Update Surging Grit[PF]",
              "current": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_CountSum"
                ]
              },
              "max": {
                "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                "displayLines": "DV_EnterFeverValue",
                "constants": [],
                "variables": [
                  "DV_EnterFeverValue"
                ]
              },
              "delta": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_CountSum"
                ]
              },
              "type": "FeverBack"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_TriggerFlag"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus1_sub[<span class=\"descriptionNumberColor\">Evince</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2111",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2112",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub2[<span class=\"descriptionNumberColor\">Gnosis</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2112",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus3_sub[<span class=\"descriptionNumberColor\">Sanity</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2113",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_CurrentDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                  "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_CountSumTempMax"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "operator": "Variables[0] (DV_CurrentDelay) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(DV_CurrentDelay * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "DV_CurrentDelay"
                    ]
                  },
                  "max": 100,
                  "extra": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                    ]
                  },
                  "phaseType": "P1",
                  "reachedLimit": true
                }
              ],
              "failed": [
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "operator": "Variables[0] (DV_CurrentDelay) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(DV_CurrentDelay * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "DV_CurrentDelay"
                    ]
                  },
                  "max": 100,
                  "extra": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                    ]
                  },
                  "phaseType": "P1"
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