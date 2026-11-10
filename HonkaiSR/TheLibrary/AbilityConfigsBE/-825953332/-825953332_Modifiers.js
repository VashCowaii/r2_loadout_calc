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
      "for": "<a class=\"gModGreen\" id=\"mod__51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
      "stackType": "ReplaceByCaster",
      "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
      "type": "Other",
      "effectName": "Energy Overflow",
      "statusName": "Energy Overflow"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-384544290\">Modifier_FantasticStory_BaseAbility_2110_ReturnSP</a>",
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
                  "variableName": "_CurrentSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EntityStockSP",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "(EntityMaxSP - _CurrentSP)"
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
                        "displayLines": "EntityStockSP"
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "EntityStockSP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
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
                        "displayLines": "(EntityMaxSP - _CurrentSP)"
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)"
                      },
                      "variableName": "EntityStockSP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "displayLines": "EntityStockSP"
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
      "for": "<a class=\"gModGreen\" id=\"mod__773567825\">Modifier_FantasticStory_BaseAbility_2110_AddSP</a>",
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
                  "variableName": "EntityCurrentSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "EntityMaxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "(EntityCurrentSP + (EntityMaxSP * BattleEvent_P1_ADF_Get))"
                  },
                  "variableName": "EntityCurrentSP"
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
                      "displayLines": "EntityMaxSP"
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
                        "displayLines": "(EntityMaxSP * BattleEvent_P1_ADF_Get)"
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
                      "value": {
                        "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)"
                      },
                      "variableName": "EntityStockSP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "displayLines": "EntityStockSP"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "EntityCurrentSP"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1805319333\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When receiving an attack or losing HP, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_3</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Sanity"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1058073602\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1805319333\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
          "haloStatus": true
        }
      ],
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
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
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
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2113_ADF_3)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "DV_EnterFeverValue"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3"
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                          },
                          "max": {
                            "displayLines": "DV_EnterFeverValue"
                          },
                          "delta": {
                            "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3"
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
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2113_ADF_3)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "DV_EnterFeverValue"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3"
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                      },
                      "max": {
                        "displayLines": "DV_EnterFeverValue"
                      },
                      "delta": {
                        "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__612720754\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_2</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics: Gnosis"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1928021681\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"612720754\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
          "haloStatus": true
        }
      ],
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_TargetCount"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2112_ADF_2 * DV_TargetCount))"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "DV_EnterFeverValue"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2112_ADF_2)"
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                      },
                      "max": {
                        "displayLines": "DV_EnterFeverValue"
                      },
                      "delta": {
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2112_ADF_2)"
                      },
                      "type": "Special"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_TargetCount"
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
                "target1": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_TargetCount + 1)"
                  },
                  "variableName": "DV_TargetCount"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DV_TargetCount"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-31325999\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using Skill or launching a Follow-Up ATK, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2111_ADF_1</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Evince"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1363213920\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-31325999\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
          "haloStatus": true
        }
      ],
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                  "value": 1,
                  "variableName": "DV_InsertFlag"
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
              "value": 0,
              "variableName": "DV_InsertFlag"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "variableName": "DV_TargetCount",
                  "targetAttacker": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2111_ADF_1 * DV_TargetCount))"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "DV_EnterFeverValue"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2111_ADF_1)"
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                      },
                      "max": {
                        "displayLines": "DV_EnterFeverValue"
                      },
                      "delta": {
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2111_ADF_1)"
                      },
                      "type": "Special"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_TargetCount"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1184097523\">Modifier_FantasticStory_BaseAbility_2110_plus3_sub</a>[<span class=\"descriptionNumberColor\">Sanity</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Consumes this unit's current HP by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_1</span> when using a Skill. After using Skill, restores <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_2</span> HP equal to this unit's Max HP.",
      "type": "Buff",
      "statusName": "Sanity",
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
                    "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_1"
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
                    "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_2"
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2052424996\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub2</a>[<span class=\"descriptionNumberColor\">Gnosis</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_3</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Gnosis",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1595223290\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__547730031\">Modifier_FantasticStory_BaseAbility_2110_plus1_sub</a>[<span class=\"descriptionNumberColor\">Evince</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Use Skills or launching a Follow-Up ATK against enemy targets with \"Shatter\" can immediately trigger \"Shatter.\"",
      "type": "Buff",
      "statusName": "Evince",
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
                  "value": 1,
                  "variableName": "DV_InsertFlag"
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
              "value": 0,
              "variableName": "DV_InsertFlag"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]"
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
                      "modifierName": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) * Bomb_Layer)"
                      },
                      "variableName": "Bomb_Damage"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)"
                      },
                      "variableName": "Bomb_Damage_Adjoin"
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
                          "displayLines": "Bomb_Damage"
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
                          "displayLines": "Bomb_Damage_Adjoin"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1732946835\">Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using Basic ATK or Ultimate to attack enemy targets, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1102093119\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When using a Basic ATK or an Ultimate to attack an enemy target, inflicts the target with \"Shatter,\" stacking up to <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer</span> time(s). At the start of the target's turn or when the target is defeated, deals a set amount of DMG to the target and adjacent targets based on the number of \"Shatter\" stacks.",
      "type": "Buff",
      "statusName": "Concordant Truce"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
      "type": "Debuff",
      "statusName": "Surging Grit",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "statValue": {
                "displayLines": "DV_Ratio_Get"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"547730031\">Modifier_FantasticStory_BaseAbility_2110_plus1_sub</a>[<span class=\"descriptionNumberColor\">Evince</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1595223290\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2052424996\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub2</a>[<span class=\"descriptionNumberColor\">Gnosis</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1184097523\">Modifier_FantasticStory_BaseAbility_2110_plus3_sub</a>[<span class=\"descriptionNumberColor\">Sanity</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2113",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "DV_FantasticStory_BaseAbility_CountSumTemp"
              },
              "variableName": "DV_FantasticStory_BaseAbility_CountSum"
            },
            {
              "name": "Update Surging Grit[PF]",
              "current": {
                "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
              },
              "max": {
                "displayLines": "DV_EnterFeverValue"
              },
              "delta": {
                "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
              },
              "type": "FeverBack"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1391985236\">Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "DV_CurrentDelay",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                "compareType": ">=",
                "value2": {
                  "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax"
                }
              },
              "passed": [
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "displayLines": "(DV_CurrentDelay * 10)"
                  },
                  "max": 100,
                  "extra": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)"
                  },
                  "phaseType": "P1",
                  "reachedLimit": true
                }
              ],
              "failed": [
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "displayLines": "(DV_CurrentDelay * 10)"
                  },
                  "max": 100,
                  "extra": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)"
                  },
                  "phaseType": "P1"
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