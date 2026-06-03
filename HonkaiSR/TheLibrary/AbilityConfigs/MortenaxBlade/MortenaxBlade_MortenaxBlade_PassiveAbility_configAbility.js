const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_PassiveAbility",
  "childAbilityList": [
    "MortenaxBlade_MortenaxBlade_PassiveAbility",
    "MortenaxBlade_MortenaxBlade_PassiveAbility_Exit",
    "MortenaxBlade_MortenaxBlade_PassiveAbility_NormalExit"
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
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "G_EnergyCount",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"531384583\">MortenaxBlade_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1979209612\">G_MortenaxBlade_EnergyCountListen</a>"
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
          "variableName": "G_EPMax",
          "value": {
            "operator": "Variables[0] (7) || RETURN",
            "displayLines": "7",
            "constants": [],
            "variables": [
              7
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "G_EPMax",
          "value": {
            "operator": "Variables[0] (9) || RETURN",
            "displayLines": "9",
            "constants": [],
            "variables": [
              9
            ]
          }
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (G_EnergyCount) || RETURN",
        "displayLines": "G_EnergyCount",
        "constants": [],
        "variables": [
          "G_EnergyCount"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (G_EPMax) || RETURN",
        "displayLines": "G_EPMax",
        "constants": [],
        "variables": [
          "G_EPMax"
        ]
      },
      "assignState": "True",
      "priorState": "Disable",
      "bar#": 2
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1604386325\">MortenaxBlade_LoseHPPreShow</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Bone, Hardened ad Nauseam"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356958636\">MortenaxBlade_PointB1_StockSpValue</a>",
          "valuePerStack": {
            "_PointB1_StockSpValue": {
              "operator": "Variables[0] (80) || RETURN",
              "displayLines": "80",
              "constants": [],
              "variables": [
                80
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
          "modifier": "<a class=\"gModGreen\" id=\"-241849908\">MortenaxBlade_PointB1_ReturnSpValue</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-828664514\">G_MortenaxBlade_CheckToPlayAutoBP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-241849908\">MortenaxBlade_PointB1_ReturnSpValue</a>",
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MortenaxBlade_00_EntityMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Temp_Return_SP",
                  "value": {
                    "operator": "Variables[0] (MortenaxBlade_00_EntityStockSP) || RETURN",
                    "displayLines": "MortenaxBlade_00_EntityStockSP",
                    "constants": [],
                    "variables": [
                      "MortenaxBlade_00_EntityStockSP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MortenaxBlade_00_EntityStockSP",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_Temp_Return_SP) || RETURN",
                    "displayLines": "_Temp_Return_SP",
                    "constants": [],
                    "variables": [
                      "_Temp_Return_SP"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "description": "<span class=\"descriptionNumberColor\">MortenaxBlade_00_EntityStockSPForShow</span> overflow Energy accumulated.",
      "type": "Other",
      "statusName": "Bone, Hardened ad Nauseam",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MortenaxBlade_00_EntityStockSPForShow",
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (MortenaxBlade_00_EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(MortenaxBlade_00_EntityStockSPForShow)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "MortenaxBlade_00_EntityStockSPForShow"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                  "variableName": "MortenaxBlade_00_EntityStockSPForShow",
                  "value": 1
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-356958636\">MortenaxBlade_PointB1_StockSpValue</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "_PointB1_StockSpValue"
      ],
      "execute": [
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_SPChangeValue"
            },
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
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_SPChangeValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_SPChangeValueRaw",
              "type": "RawDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_SPChangeValue",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (_SPChangeValueRaw) || RETURN",
                  "displayLines": "_SPChangeValueRaw",
                  "constants": [],
                  "variables": [
                    "_SPChangeValueRaw"
                  ]
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_PointB1_EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_PointB1_EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (_PointB1_EntityCurrentSP) || Variables[1] (_SPChangeValue) || SUB || Variables[2] (_SPChangeValueRaw) || ADD || RETURN",
                        "displayLines": "((_PointB1_EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)",
                        "constants": [],
                        "variables": [
                          "_PointB1_EntityCurrentSP",
                          "_SPChangeValue",
                          "_SPChangeValueRaw"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MortenaxBlade_00_EntityMaxSP",
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
                        "value1": "_PointB1_EntityCurrentSP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MortenaxBlade_00_EntityMaxSP) || RETURN",
                          "displayLines": "MortenaxBlade_00_EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "MortenaxBlade_00_EntityMaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MortenaxBlade_00_EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (MortenaxBlade_00_EntityStockSP) || Variables[1] (_PointB1_EntityCurrentSP) || ADD || Variables[2] (MortenaxBlade_00_EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((MortenaxBlade_00_EntityStockSP + _PointB1_EntityCurrentSP) - MortenaxBlade_00_EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "MortenaxBlade_00_EntityStockSP",
                              "_PointB1_EntityCurrentSP",
                              "MortenaxBlade_00_EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MortenaxBlade_00_EntityStockSP",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (_PointB1_StockSpValue) || RETURN",
                              "displayLines": "_PointB1_StockSpValue",
                              "constants": [],
                              "variables": [
                                "_PointB1_StockSpValue"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MortenaxBlade_00_EntityStockSP",
                              "value": {
                                "operator": "Variables[0] (_PointB1_StockSpValue) || RETURN",
                                "displayLines": "_PointB1_StockSpValue",
                                "constants": [],
                                "variables": [
                                  "_PointB1_StockSpValue"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                              "variable": "MortenaxBlade_00_EntityStockSPForShow",
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
                                  "operator": "Variables[0] (MortenaxBlade_00_EntityStockSP) || RETURN",
                                  "displayLines": "MortenaxBlade_00_EntityStockSP",
                                  "constants": [],
                                  "variables": [
                                    "MortenaxBlade_00_EntityStockSP"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                                  "valuePerStack": {
                                    "MortenaxBlade_EntityStockSPForShow": {
                                      "operator": "Variables[0] (WHOLE) || Variables[1] (MortenaxBlade_00_EntityStockSP) || PARAM_1 || FUNCTION || RETURN",
                                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(MortenaxBlade_00_EntityStockSP)",
                                      "constants": [],
                                      "variables": [
                                        "WHOLE",
                                        "MortenaxBlade_00_EntityStockSP"
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
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                              "valuePerStack": {
                                "MortenaxBlade_EntityStockSPForShow": {
                                  "operator": "Variables[0] (WHOLE) || Variables[1] (MortenaxBlade_00_EntityStockSP) || PARAM_1 || FUNCTION || RETURN",
                                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(MortenaxBlade_00_EntityStockSP)",
                                  "constants": [],
                                  "variables": [
                                    "WHOLE",
                                    "MortenaxBlade_00_EntityStockSP"
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
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1604386325\">MortenaxBlade_LoseHPPreShow</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "skillType": [
                    "Skill"
                  ],
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.1) || MUL || RETURN",
                    "displayLines": "(MDF_MaxHP * 0.1)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      0.1
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
      "for": "<a class=\"gModGreen\" id=\"mod__531384583\">MortenaxBlade_Passive</a>",
      "stackType": "ReplaceByCaster",
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
                    "name": "Trace Activated",
                    "conditionList": "Bone, Hardened ad Nauseam"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Energy%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    }
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
                  "variableName": "_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_MaxSP) || Variables[1] (0.75) || MUL || RETURN",
                    "displayLines": "(_MaxSP * 0.75)",
                    "constants": [],
                    "variables": [
                      "_MaxSP",
                      0.75
                    ]
                  },
                  "adjustment": "Set"
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Leave Battle"
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