const configAbility = {
  "fileName": "Saber_Saber_PassiveAbility01",
  "childAbilityList": [
    "Saber_Activity_FateStory_Saber_Insert_Camera",
    "Saber_Activity_FateStory_Saber_Insert_Part01",
    "Saber_Activity_FateStory_Saber_Insert_Part02",
    "Saber_Saber_PassiveAbility01"
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
      "modifier": "Saber_AIFlag"
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "DV_SurgePoint",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_SurgePointMax",
      "value": 99
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
        "displayLines": "DV_SurgePoint",
        "constants": [],
        "variables": [
          "DV_SurgePoint"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
        "displayLines": "DV_SurgePointMax",
        "constants": [],
        "variables": [
          "DV_SurgePointMax"
        ]
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 4
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Saber_PassiveAbility01"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Knight of the Dragon"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Trace01_Bonus[<span class=\"descriptionNumberColor\">Knight of the Dragon</span>]",
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
        "name": "Trace Activated",
        "conditionList": "Blessing of the Lake"
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
              "name": "Define Custom Variable",
              "variableName": "Saber_00_EntityMaxStockSP",
              "value": {
                "operator": "Variables[0] (200) || RETURN",
                "displayLines": "200",
                "constants": [],
                "variables": [
                  200
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Saber_00_EntityMaxStockSP",
              "value": {
                "operator": "Variables[0] (120) || RETURN",
                "displayLines": "120",
                "constants": [],
                "variables": [
                  120
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Passive_ReturnSpValue"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Passive_StockSpValue"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Crown of the Star"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Trace03"
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
          "modifier": "Saber_Eidolon1"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Eidolon4[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]"
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
          "modifier": "Saber_Eidolon6"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Saber_Trace03_CD",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Trace03",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
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
                  "modifier": "Saber_Trace03_Bonus[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Trace02",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_PassiveAbility01",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Saber_SurgeCheck",
              "variables": {
                "_MaxSP": 0,
                "_C_SP": 0,
                "DV_SurgePointShow": 0,
                "_SP_R": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
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
                  "modifier": "Saber_Passive_Bonus[<span class=\"descriptionNumberColor\">Dragon Reactor Core</span>]",
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
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "DV_SurgePoint",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Crown of the Star"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
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
                      "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.01) || RETURN",
                          "displayLines": "0.01",
                          "constants": [],
                          "variables": [
                            0.01
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Saber_SurgeCheck",
              "variables": {
                "_MaxSP": 0,
                "_C_SP": 0,
                "DV_SurgePointShow": 0,
                "_SP_R": 0
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
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "DV_SurgePoint",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                    "displayLines": "DV_SurgePoint",
                    "constants": [],
                    "variables": [
                      "DV_SurgePoint"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                    "displayLines": "DV_SurgePointMax",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointMax"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Crown of the Star"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
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
                      "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.01) || RETURN",
                          "displayLines": "0.01",
                          "constants": [],
                          "variables": [
                            0.01
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Blessing of the Lake"
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
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
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
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_MaxSP) || Variables[1] (0.6) || MUL || RETURN",
                    "displayLines": "(_MaxSP * 0.6)",
                    "constants": [],
                    "variables": [
                      "_MaxSP",
                      0.6
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
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Saber_SurgeCheck",
              "variables": {
                "_MaxSP": 0,
                "_C_SP": 0,
                "DV_SurgePointShow": 0,
                "_SP_R": 0
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "DV_SurgePoint",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_SurgePoint",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
                      "counter": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
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
                      "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]"
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Saber_SurgeCheck",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_SurgePoint",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
                      "counter": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
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
                      "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]"
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Saber_SurgeCheck",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
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
      "for": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "Currently possesses <span class=\"descriptionNumberColor\">MDF_Layer</span> point(s) of \"Core Resonance.\"",
      "type": "Other",
      "statusName": "Core Resonance"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Trace01_Bonus[<span class=\"descriptionNumberColor\">Knight of the Dragon</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
      "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Knight of the Dragon"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
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
                "value1": "Saber_00_EntityStockSPForShow",
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
                  "modifierName": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (Saber_00_EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(Saber_00_EntityStockSPForShow)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "Saber_00_EntityStockSPForShow"
                    ]
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
                  "modifierName": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "description": "<span class=\"descriptionNumberColor\">Saber_00_EntityStockSPForShow</span> overflow Energy accumulated.",
      "type": "Other",
      "statusName": "Blessing of the Lake"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Passive_StockSpValue",
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
                      "variableName": "Saber_00_EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Saber_00_EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (Saber_00_EntityCurrentSP) || Variables[1] (_SPChangeValue) || SUB || Variables[2] (_SPChangeValueRaw) || ADD || RETURN",
                        "displayLines": "((Saber_00_EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)",
                        "constants": [],
                        "variables": [
                          "Saber_00_EntityCurrentSP",
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
                      "variableName": "Saber_00_EntityMaxSP",
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
                        "value1": "Saber_00_EntityCurrentSP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (Saber_00_EntityMaxSP) || RETURN",
                          "displayLines": "Saber_00_EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "Saber_00_EntityMaxSP"
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
                          "variableName": "Saber_00_EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (Saber_00_EntityStockSP) || Variables[1] (Saber_00_EntityCurrentSP) || ADD || Variables[2] (Saber_00_EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((Saber_00_EntityStockSP + Saber_00_EntityCurrentSP) - Saber_00_EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "Saber_00_EntityStockSP",
                              "Saber_00_EntityCurrentSP",
                              "Saber_00_EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Saber_00_EntityStockSP",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (Saber_00_EntityMaxStockSP) || RETURN",
                              "displayLines": "Saber_00_EntityMaxStockSP",
                              "constants": [],
                              "variables": [
                                "Saber_00_EntityMaxStockSP"
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
                              "variableName": "Saber_00_EntityStockSP",
                              "value": {
                                "operator": "Variables[0] (Saber_00_EntityMaxStockSP) || RETURN",
                                "displayLines": "Saber_00_EntityMaxStockSP",
                                "constants": [],
                                "variables": [
                                  "Saber_00_EntityMaxStockSP"
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
                            "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                              "variable": "Saber_00_EntityStockSPForShow",
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
                                  "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                  "displayLines": "Saber_00_EntityStockSP",
                                  "constants": [],
                                  "variables": [
                                    "Saber_00_EntityStockSP"
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
                                  "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                  "valuePerStack": {
                                    "value_0_Saber_EntityStockSPForShow": {
                                      "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                      "displayLines": "Saber_00_EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "Saber_00_EntityStockSP"
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
                              "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                              "valuePerStack": {
                                "value_0_Saber_EntityStockSPForShow": {
                                  "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                  "displayLines": "Saber_00_EntityStockSP",
                                  "constants": [],
                                  "variables": [
                                    "Saber_00_EntityStockSP"
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Passive_ReturnSpValue",
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
                  "variableName": "Saber_00_EntityMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Temp_Return_SP",
                  "value": {
                    "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                    "displayLines": "Saber_00_EntityStockSP",
                    "constants": [],
                    "variables": [
                      "Saber_00_EntityStockSP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Saber_00_EntityStockSP",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]"
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.6"
                    }
                  ]
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "DV_SurgePoint",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                    "displayLines": "DV_SurgePoint",
                    "constants": [],
                    "variables": [
                      "DV_SurgePoint"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Crown of the Star"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
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
                      "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.01) || RETURN",
                          "displayLines": "0.01",
                          "constants": [],
                          "variables": [
                            0.01
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
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
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                "displayLines": "(MDF_Layer * MDF_PropertyValue)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases Wind RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Increases Wind RES PEN.",
      "statusName": "The Saga of Sixteen Winter Days"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Eidolon4[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.08) || RETURN",
                "displayLines": "0.08",
                "constants": [],
                "variables": [
                  0.08
                ]
              }
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
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Saber_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.04) || RETURN",
                      "displayLines": "0.04",
                      "constants": [],
                      "variables": [
                        0.04
                      ]
                    },
                    "MDF_Value_Base": {
                      "operator": "Variables[0] (0.08) || RETURN",
                      "displayLines": "0.08",
                      "constants": [],
                      "variables": [
                        0.08
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Wind RES PEN increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
      "type": "Buff",
      "statusName": "The Saga of Sixteen Winter Days"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Eidolon6",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                      "value": "0.2"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
              "counter": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
      "counter": 1,
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                      "function": "Add"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (300) || RETURN",
                        "displayLines": "300",
                        "constants": [],
                        "variables": [
                          300
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After using Ultimate <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), regenerates a fixed amount of <span class=\"descriptionNumberColor\">#SkillRank_Rank06_P3_Amount</span> Energy.",
      "type": "Other",
      "statusName": "The Long Fated Night"
    }
  ]
}