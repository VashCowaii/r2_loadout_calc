const configAbility = {
  "fileName": "1314726962_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-574057329\">Modifier_FantasticStory_BaseAbility_2210_ExceedSP</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__407711717\">Modifier_FantasticStory_BaseAbility_2210_ReturnSP</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-574057329\">Modifier_FantasticStory_BaseAbility_2210_ExceedSP</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-574057329\">Modifier_FantasticStory_BaseAbility_2210_ExceedSP</a>",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__743343064\">Modifier_FantasticStory_BaseAbility_2210_AddSP</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-574057329\">Modifier_FantasticStory_BaseAbility_2210_ExceedSP</a>",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__202641087\">Modifier_FantasticStory_BaseAbility_2210_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Improvisation</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Every time a DoT is received, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2214_ADF_2</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics_Improvisation"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1954932294\">Modifier_FantasticStory_BaseAbility_2210_Plus4AddOn</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Anyone]: Any",
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
                    "team": "Enemy Team"
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
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>",
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
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2214_ADF_2) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2214_ADF_2)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2214_ADF_2"
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2214_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2214_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2214_ADF_2"
                        ]
                      },
                      "type": "FeverSpecial",
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2214_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2214_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2214_ADF_2"
                        ]
                      },
                      "type": "FeverSpecial"
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
        "DV_FantasticStory_PlusAbility_2212",
        "DV_FantasticStory_PlusAbility_2213",
        "DV_FantasticStory_PlusAbility_2214"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"202641087\">Modifier_FantasticStory_BaseAbility_2210_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Improvisation</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1718519168\">Modifier_FantasticStory_BaseAbility_2210_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Tirade</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2213_ADF_3</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics_Tirade"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-51359151\">Modifier_FantasticStory_BaseAbility_2210_Plus3AddOn</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2213_ADF_3) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2213_ADF_3 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2213_ADF_3",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2213_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2213_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2213_ADF_3"
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2213_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2213_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2213_ADF_3"
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
        "DV_FantasticStory_PlusAbility_2212",
        "DV_FantasticStory_PlusAbility_2213"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1718519168\">Modifier_FantasticStory_BaseAbility_2210_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Tirade</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1476176126\">Modifier_FantasticStory_BaseAbility_2210_plus3_sub2</a>[<span class=\"descriptionNumberColor\">Tirade</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1685066087\">Modifier_FantasticStory_BaseAbility_2210_Plus2AddOn_ForShow</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1157326881\">Modifier_FantasticStory_BaseAbility_2210_plus2_sub2</a>[<span class=\"descriptionNumberColor\">Delirium</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2212_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2212_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2212_ADF_2"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ]
        }
      ],
      "description": "After using Basic ATK or Skill, gains <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2212_ADF_2</span> Punchline. During Surging Grit, DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2212_ADF_1</span>.",
      "type": "Buff",
      "statusName": "Delirium"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-22819003\">Modifier_FantasticStory_BaseAbility_2210_Plus2AddOn_Sub</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Delirium</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
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
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DV_TargetCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2212_ADF_3 ) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2212_ADF_3  * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2212_ADF_3 ",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2212_ADF_3 ) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2212_ADF_3 )",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2212_ADF_3 "
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2212_ADF_3 ) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2212_ADF_3 )",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2212_ADF_3 "
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
      "description": "After using Basic ATK or Skill to attack, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2212_ADF_3</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics_Delirium"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1858169160\">Modifier_FantasticStory_BaseAbility_2210_Plus2AddOn</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2212"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-22819003\">Modifier_FantasticStory_BaseAbility_2210_Plus2AddOn_Sub</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Delirium</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1157326881\">Modifier_FantasticStory_BaseAbility_2210_plus2_sub2</a>[<span class=\"descriptionNumberColor\">Delirium</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1087815718\">Modifier_FantasticStory_BaseAbility_2210_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Euphoria</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When consuming Skill Points, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2211_ADF_3</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics_Euphoria"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2047403447\">Modifier_FantasticStory_BaseAbility_2210_Plus1AddOn</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
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
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2211_ADF_3) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2211_ADF_3)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2211_ADF_3"
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2211_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2211_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2211_ADF_3"
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2211_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2211_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2211_ADF_3"
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
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1087815718\">Modifier_FantasticStory_BaseAbility_2210_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Euphoria</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__919958753\">Modifier_FantasticStory_BaseAbility_2210_plus4_sub</a>[<span class=\"descriptionNumberColor\">Improvisation</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "Deathrattle"
      ],
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
                      "value": "DV_FantasticStory_PlusAbility_2214_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Value SUM",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_DotNumber",
              "value": "STAT_DOT",
              "valueType": "Amount",
              "includeTargetsInLimbo": true
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (_DotNumber) || RETURN",
                "displayLines": "_DotNumber",
                "constants": [],
                "variables": [
                  "_DotNumber"
                ]
              },
              "adjustment": "Add"
            }
          ]
        }
      ],
      "description": "Increases DoT taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2214_ADF_1</span>. When defeated, allies gain 1 Punchline for each DoT effect this target is afflicted with.",
      "type": "Debuff",
      "statusName": "Improvisation"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1476176126\">Modifier_FantasticStory_BaseAbility_2210_plus3_sub2</a>[<span class=\"descriptionNumberColor\">Tirade</span>]",
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
                  "Break DMG"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_BreakFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
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
                    "value1": "DV_BreakFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2213_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2213_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2213_ADF_2"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_BreakFlag",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2213",
        "DV_FantasticStory_PlusAbility_2212"
      ],
      "description": "After dealing Break DMG with an attack, gains <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2213_ADF_2</span> Punchline.",
      "type": "Buff",
      "statusName": "Tirade"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-207238664\">Modifier_FantasticStory_BaseAbility_2210_plus3_sub</a>[<span class=\"descriptionNumberColor\">Tirade</span>]",
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
                      "value": "DV_FantasticStory_PlusAbility_2213_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Break DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2213_ADF_1</span>.",
      "type": "Debuff",
      "statusName": "Tirade"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__721629239\">Modifier_FantasticStory_BaseAbility_2210_plus2_sub</a>",
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
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2212_ADF_1) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_2212_ADF_1",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_2212_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__560315892\">Modifier_FantasticStory_BaseAbility_2210_plus1_sub2</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2211_ADF_2) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_2211_ADF_2",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_2211_ADF_2"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2084646258\">Modifier_FantasticStory_BaseAbility_2210_plus1_sub</a>[<span class=\"descriptionNumberColor\">Euphoria</span>]",
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
                  "Elation DMG"
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
                      "value": "DV_FantasticStory_PlusAbility_2211_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Elation DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2211_ADF_1</span>",
      "type": "Debuff",
      "statusName": "Euphoria"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1871573228\">Modifier_FantasticStory_BaseAbility_2210_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "DV_Ratio"
      ],
      "latentQueue": [],
      "description": "Each time Punchline is gained, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1855869842\">Modifier_FantasticStory_BaseAbility_2210_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "This stage has a special Elation Skill. When entering Aha Instant, deals <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2210_BeforeFever_P1_MaxCount</span> instance(s) of Elation DMG to a random enemy target. When an enemy target is defeated, obtains <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2210_BeforeFever_P3_ElationPoint</span> Punchline point(s).",
      "type": "Buff",
      "statusName": "Concordant Truce"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1219408339\">Modifier_FantasticStory_BaseAbility_2210_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
      "type": "Debuff",
      "statusName": "Surging Grit"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>",
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
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2084646258\">Modifier_FantasticStory_BaseAbility_2210_plus1_sub</a>[<span class=\"descriptionNumberColor\">Euphoria</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2211",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Battle Event ID",
                  "ID": 70001,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"560315892\">Modifier_FantasticStory_BaseAbility_2210_plus1_sub2</a>",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2211",
            "compareType": "=",
            "value2": 1
          },
          "includeBattleEvent": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"721629239\">Modifier_FantasticStory_BaseAbility_2210_plus2_sub</a>",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2212",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-207238664\">Modifier_FantasticStory_BaseAbility_2210_plus3_sub</a>[<span class=\"descriptionNumberColor\">Tirade</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2213",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"919958753\">Modifier_FantasticStory_BaseAbility_2210_plus4_sub</a>[<span class=\"descriptionNumberColor\">Improvisation</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2214",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1932926267\">Modifier_FantasticStory_BaseAbility_2210_ListenBEDelay</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-812002117\">Modifier_FantasticStory_BaseAbility_2210_aura</a>"
            }
          ]
        },
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