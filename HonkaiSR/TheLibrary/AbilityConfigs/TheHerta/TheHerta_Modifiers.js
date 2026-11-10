const configAbility = {
  "fileName": "TheHerta_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__276886007\">ADV_StageAbility_Maze_TheHerta_RogueExtraEffect</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1507655097\">ADV_StageAbility_Maze_TheHerta</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1324497127\">TheHerta_Ability21</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-424945107\">TheHerta_Trace02_MainTarget</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1073653973\">TheHerta_Eidolon6_Mark</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-269827168\">TheHerta_Eidolon2_Debuff</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-155397413\">TheHerta_Eidolon2_Bonus</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1847951860\">TheHerta_Eidolon1_Ice</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EntityStockSPForShow",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(EntityStockSPForShow)"
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
                  "modifierName": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1558664027\">TheHerta_Passive_StockSpValue</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_SPChangeValue"
            },
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_SPChangeValueRaw",
              "valueType": "RawDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_SPChangeValue",
                "compareType": "=",
                "value2": {
                  "displayLines": "_SPChangeValueRaw"
                }
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SPChangeValueRaw",
                    "compareType": ">",
                    "value2": 0
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
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "((EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)"
                      },
                      "variableName": "EntityCurrentSP"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EntityCurrentSP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "EntityMaxSP"
                        }
                      },
                      "passed": [
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
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "EntityStockSP",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "(EntityMaxSP * T_HERTA_OBJECT_UNUSED_9)"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value": {
                                "displayLines": "(EntityMaxSP * T_HERTA_OBJECT_UNUSED_9)"
                              },
                              "variableName": "EntityStockSP"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                              "variable": "EntityStockSPForShow",
                              "target2": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variable2": "_Current_Show_Value"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "_Current_Show_Value",
                                "compareType": "<",
                                "value2": {
                                  "displayLines": "EntityStockSP"
                                }
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                                  "valuePerStack": {
                                    "EntityStockSPForShow": {
                                      "displayLines": "EntityStockSP"
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
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
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
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-125980821\">TheHerta_Passive_ReturnSpValue</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start"
        },
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
                  "name": "Define Custom Variable with Stat",
                  "variableName": "EntityMaxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>"
                    }
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
                      "isFixed": "* ERR"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1149465899\">TheHerta_Passive_ReturnSpValue_Eidolon1</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__555212333\">TheHerta_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__184474088\">TheHerta_SKL03_Sort_Storge</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1940766665\">TheHerta_SKL02_Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__985102857\">TheHerta_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Wind Through Keyhole</span>]",
      "description": "The \"Wind Through Keyhole\" action advance effect cannot be triggered yet.",
      "type": "Other",
      "statusName": "Wind Through Keyhole"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-971879271\">TheHerta_Eidolon2_PreShow_42</a>",
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
              "name": "Compare: Variable",
              "value1": "Skill21_Layer",
              "compareType": ">=",
              "value2": 1
            },
            {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Primary-Target}}"
              },
              "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "compareType": ">=",
              "value2": 42,
              "valueType": "Layer"
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "(0 - MDF_PropertyValue)"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__489116474\">TheHerta_Eidolon2_PreShow</a>",
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
              "name": "Compare: Variable",
              "value1": "Skill21_Layer",
              "compareType": ">=",
              "value2": 1
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "(0 - MDF_PropertyValue)"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-696979317\">TheHerta_SKL02_Mark_Pre</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-682623552\">TheHerta_BPdamageNumber_UIconfig</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DV_HitCount",
                  "context": "TargetEntity",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_HitCount",
              "scope": "TargetEntity"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "value": 0,
              "variableName": "DV_HitCount"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill",
        "KeepOnDeathrattle"
      ],
      "description": "The Herta's Enhanced Skill will additionally deal DMG to all enemies based on the number of \"Interpretation\" stacks on the target.",
      "type": "Other",
      "statusName": "Interpretation",
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
              "modifier": "<a class=\"gModGreen\" id=\"-850819741\">TheHerta_Passive_MagicMark_42_Block_42</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]"
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
              "variableName": "MDF_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "MaxLayer",
              "variableName": "MagicMark_MaxCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "MaxLayer",
              "variableName": "MagicMark_MaxCount_Max",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Count",
                "compareType": ">=",
                "value2": 42
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [],
                      "trigger": "Trigger_Hint"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": ">=",
                    "value2": 21
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_TMP_VAL"
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TMP_VAL",
                "compareType": "<",
                "value2": {
                  "displayLines": "(MDF_Count * MagicMark_Ratio)"
                }
              },
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_TMP_VAL + 1)"
                  },
                  "variableName": "_TMP_VAL"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "_TMP_VAL"
              },
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Sequence",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                              },
                              {
                                "name": "Is Part Of",
                                "target1": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "compareType": "<",
                      "value2": {
                        "displayLines": "MagicMark_MaxCount_Max"
                      },
                      "valueType": "Layer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                },
                                {
                                  "name": "Is Part Of",
                                  "target1": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MagicMark_MaxCount_Max"
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "displayLines": "MagicMark_MaxCount_Max"
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "target1": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target2": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "sortByHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "MagicMark_MaxCount"
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "displayLines": "MagicMark_MaxCount_Max"
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                },
                                {
                                  "name": "Is Part Of",
                                  "target1": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MagicMark_MaxCount"
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "displayLines": "MagicMark_MaxCount_Max"
                          },
                          "addStacksPerTrigger": 1
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
          "eventTrigger": "Entity Left Battle [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_TMP_VAL"
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TMP_VAL",
                "compareType": "<",
                "value2": {
                  "displayLines": "(MDF_Count * MagicMark_Ratio)"
                }
              },
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_TMP_VAL + 1)"
                  },
                  "variableName": "_TMP_VAL"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "_TMP_VAL"
              },
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Sequence",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                              },
                              {
                                "name": "Is Part Of",
                                "target1": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "compareType": "<",
                      "value2": {
                        "displayLines": "MagicMark_MaxCount_Max"
                      },
                      "valueType": "Layer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                },
                                {
                                  "name": "Is Part Of",
                                  "target1": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MagicMark_MaxCount_Max"
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "displayLines": "MagicMark_MaxCount_Max"
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "target1": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target2": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "sortByHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "MagicMark_MaxCount"
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "displayLines": "MagicMark_MaxCount_Max"
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                },
                                {
                                  "name": "Is Part Of",
                                  "target1": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MagicMark_MaxCount"
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "displayLines": "MagicMark_MaxCount_Max"
                          },
                          "addStacksPerTrigger": 1
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
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Orig_Layer",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "MDF_Count_Burst"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [],
                  "trigger": "Trigger_Normal"
                },
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [],
                  "trigger": "State_Normal"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Orig_Layer",
                        "compareType": ">=",
                        "value2": 42
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [],
                      "trigger": "Level_Level3"
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
                            "value1": "Orig_Layer",
                            "compareType": ">=",
                            "value2": 21
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [],
                          "trigger": "Level_Level2"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [],
                          "trigger": "Level_Level1"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [],
                  "trigger": "Trigger_Burst"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            },
            {
              "name": "Define Custom Variable (VFX)",
              "value": 1,
              "variableName": "MDF_Count_Show"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "MDF_Count"
                        },
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable (VFX)",
                      "value": 0,
                      "variableName": "MDF_Count_Show"
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
                    "name": "Target is Unselectable",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK",
                        "Ultimate",
                        "Skill",
                        "Memosprite"
                      ],
                      "trigger": "Trigger_Normal"
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK",
                        "Ultimate",
                        "Skill",
                        "Memosprite"
                      ],
                      "trigger": "State_Normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">=",
                        "value2": 42
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate",
                            "Skill",
                            "Memosprite"
                          ],
                          "trigger": "Level_Level3"
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
                                "value1": "MDF_Count_Show",
                                "compareType": ">=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Count",
                                "compareType": ">=",
                                "value2": 21
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate",
                                "Skill",
                                "Memosprite"
                              ],
                              "trigger": "Level_Level2"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate",
                                "Skill",
                                "Memosprite"
                              ],
                              "trigger": "Level_Level1"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK",
                        "Ultimate",
                        "Skill",
                        "Memosprite"
                      ],
                      "trigger": "Trigger_Normal"
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK",
                        "Ultimate",
                        "Skill",
                        "Memosprite"
                      ],
                      "trigger": "State_Normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">=",
                        "value2": 42
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate",
                            "Skill",
                            "Memosprite"
                          ],
                          "trigger": "Level_Level3"
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
                                "value1": "MDF_Count_Show",
                                "compareType": ">=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Count",
                                "compareType": ">=",
                                "value2": 21
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate",
                                "Skill",
                                "Memosprite"
                              ],
                              "trigger": "Level_Level2"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate",
                                "Skill",
                                "Memosprite"
                              ],
                              "trigger": "Level_Level1"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Unselectable Adjustment [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_TMP_VAL"
            },
            {
              "name": "Looped Event",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TMP_VAL",
                "compareType": "<",
                "value2": {
                  "displayLines": "(MDF_Count * MagicMark_Ratio)"
                }
              },
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_TMP_VAL + 1)"
                  },
                  "variableName": "_TMP_VAL"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "_TMP_VAL"
              },
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Sequence",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                              },
                              {
                                "name": "Is Part Of",
                                "target1": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "compareType": "<",
                      "value2": {
                        "displayLines": "MagicMark_MaxCount_Max"
                      },
                      "valueType": "Layer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                },
                                {
                                  "name": "Is Part Of",
                                  "target1": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MagicMark_MaxCount_Max"
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "displayLines": "MagicMark_MaxCount_Max"
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "target1": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target2": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "sortByHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "MagicMark_MaxCount"
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "displayLines": "MagicMark_MaxCount_Max"
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                },
                                {
                                  "name": "Is Part Of",
                                  "target1": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MagicMark_MaxCount"
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "displayLines": "MagicMark_MaxCount_Max"
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__338292354\">TheHerta_Passive_MagicMark_42</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1353733302\">TheHerta_Passive_MagicMark_42_Delay</a>"
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Skill21_Layer",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "_TMP_VAL"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Skill"
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Skill21_Layer_Max",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "_TMP_MAX"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TMP_MAX",
                "compareType": ">",
                "value2": {
                  "displayLines": "_TMP_VAL"
                }
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "Skill21_Layer",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "(_TMP_VAL + 1)"
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "(_TMP_VAL + 1)"
                  },
                  "priorState": "Active"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases the multiplier of the DMG dealt by Ultimate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Other",
      "statusName": "Answer"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]",
      "counter": 1,
      "description": "Skill is enhanced to \"Hear Me Out.\"",
      "type": "Other",
      "statusName": "Inspiration"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-850819741\">TheHerta_Passive_MagicMark_42_Block_42</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__426098232\">TheHerta_Passive_MagicMark_42_Block</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1353733302\">TheHerta_Passive_MagicMark_42_Delay</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "The Sixteenth Key",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1044334207\">TheHerta_Eidolon4_Listen</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Erudition"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Erudition"
                    ],
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
                      "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_PropertyValue"
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
          "eventTrigger": "Character Path [Anyone]: Change",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Erudition"
                    ],
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
                      "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_PropertyValue"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1341843949\">TheHerta_PointB1_42</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-73718393\">TheHerta_Eidolon6_Bonus</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1505063883\">TheHerta_Herta_CD</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    }
  ],
  "references": []
}