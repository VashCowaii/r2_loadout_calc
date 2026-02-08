const compositeAbilityObject = {
  "fullCharacterName": 1709666649,
  "trimCharacterName": 1709666649,
  "abilityList": [
    "1709666649_Modifiers"
  ],
  "abilityObject": {
    "1709666649_Modifiers": {
      "fileName": "1709666649_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-262937871\">MLevel_WB_3002529_Sub</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_3) || RETURN",
                    "displayLines": "MDF_3",
                    "constants": [],
                    "variables": [
                      "MDF_3"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1445330380\">MLevel_WB_3002529</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-262937871\">MLevel_WB_3002529_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        },
                        "MDF_3": {
                          "operator": "Variables[0] (MDF_3) || RETURN",
                          "displayLines": "MDF_3",
                          "constants": [],
                          "variables": [
                            "MDF_3"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-262937871\">MLevel_WB_3002529_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-262937871\">MLevel_WB_3002529_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        },
                        "MDF_3": {
                          "operator": "Variables[0] (MDF_3) || RETURN",
                          "displayLines": "MDF_3",
                          "constants": [],
                          "variables": [
                            "MDF_3"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-262937871\">MLevel_WB_3002529_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2079541158\">MLevel_WB_3002528_Sub</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "TempValue",
                  "multiplier": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TempValue",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_2) || RETURN",
                      "displayLines": "MDF_2",
                      "constants": [],
                      "variables": [
                        "MDF_2"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (TempValue) || RETURN",
                        "displayLines": "TempValue",
                        "constants": [],
                        "variables": [
                          "TempValue"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_2) || RETURN",
                        "displayLines": "MDF_2",
                        "constants": [],
                        "variables": [
                          "MDF_2"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackLimit": 20,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1428552761\">MLevel_WB_3002528</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2079541158\">MLevel_WB_3002528_Sub</a>",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    },
                    "MDF_2": {
                      "operator": "Variables[0] (MDF_2) || RETURN",
                      "displayLines": "MDF_2",
                      "constants": [],
                      "variables": [
                        "MDF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-677194305\">MLevel_WB_3002527_Sub</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "TempValue",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TempValue",
                  "value": {
                    "operator": "Variables[0] (TempValue) || Variables[1] (MDF_2) || MUL || Variables[1] (MDF_2) || SUB || RETURN",
                    "displayLines": "((TempValue * MDF_2) - MDF_2)",
                    "constants": [],
                    "variables": [
                      "TempValue",
                      "MDF_2"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TempValue",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || Variables[1] (TempValue) || SUB || RETURN",
                        "displayLines": "(MDF_1 - TempValue)",
                        "constants": [],
                        "variables": [
                          "MDF_1",
                          "TempValue"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1613106570\">MLevel_WB_3002527</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackLimit": 20,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1613106570\">MLevel_WB_3002527</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-677194305\">MLevel_WB_3002527_Sub</a>",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    },
                    "MDF_2": {
                      "operator": "Variables[0] (MDF_2) || RETURN",
                      "displayLines": "MDF_2",
                      "constants": [],
                      "variables": [
                        "MDF_2"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-677194305\">MLevel_WB_3002527_Sub</a>",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    },
                    "MDF_2": {
                      "operator": "Variables[0] (MDF_2) || RETURN",
                      "displayLines": "MDF_2",
                      "constants": [],
                      "variables": [
                        "MDF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1596328951\">MLevel_WB_3002526</a>",
          "stackType": "Multiple",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - MDF_1)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1646661808\">MLevel_WB_3002525</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2000244981\">MLevel_WB_3002523_Sub</a>",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2000244981\">MLevel_WB_3002523_Sub</a>",
          "stackType": "Multiple",
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_1) || SUB || RETURN",
                    "displayLines": "(0 - MDF_1)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_1"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1545996094\">MLevel_WB_3002523</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
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
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2000244981\">MLevel_WB_3002523_Sub</a>",
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1545996094\">MLevel_WB_3002523</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1579551332\">MLevel_WB_3002521</a>",
          "stackType": "Multiple",
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
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1602125537\">MLevel_WB_3002503_Sub</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_1",
                  "multiplier": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 10,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__869583684\">MLevel_WB_3002503</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Speed1",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target TAKING DMG}}"
                  },
                  "variableName": "MDF_Speed2",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DMGUpValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Speed1) || Variables[1] (MDF_Speed2) || SUB || RETURN",
                    "displayLines": "(MDF_Speed1 - MDF_Speed2)",
                    "constants": [],
                    "variables": [
                      "MDF_Speed1",
                      "MDF_Speed2"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DMGUpValue",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DMGUpValue",
                      "value": {
                        "operator": "Variables[0] (MDF_DMGUpValue) || Variables[1] (MDF_1) || MUL || RETURN",
                        "displayLines": "(MDF_DMGUpValue * MDF_1)",
                        "constants": [],
                        "variables": [
                          "MDF_DMGUpValue",
                          "MDF_1"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DMGUpValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                              "value": "MDF_2"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                              "value": "MDF_DMGUpValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__77193482\">MLevel_WB_3002502_Sub</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_1",
                  "multiplier": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 10,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__886361303\">MLevel_WB_3002502</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TempValue",
                  "value": {
                    "operator": "Variables[0] (TempValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TempValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TempValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TempValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TempValue",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"77193482\">MLevel_WB_3002502_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1242915997\">MLevel_WB_3002501_Sub</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Value) || RETURN",
                      "displayLines": "MDF_Value",
                      "constants": [],
                      "variables": [
                        "MDF_Value"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__903138922\">MLevel_WB_3002501</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target TAKING DMG}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1242915997\">MLevel_WB_3002501_Sub</a>",
                      "valuePerStack": {
                        "MDF_Value": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__892870251\">MLevel_WB_3002429</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-360289157\">Standard_LevelAllDamageAddedRatio</a>",
                  "duration": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__876092632\">MLevel_WB_3002428</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_1) || SUB || RETURN",
                        "displayLines": "(0 - MDF_1)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_1"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_2) || RETURN",
                        "displayLines": "MDF_2",
                        "constants": [],
                        "variables": [
                          "MDF_2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__859315013\">MLevel_WB_3002427</a>",
          "stackType": "Multiple",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_1) || SUB || RETURN",
                    "displayLines": "(0 - MDF_1)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__842537394\">MLevel_WB_3002426</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "TempValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1147160586\">Standard_DOT_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_3) || RETURN",
                        "displayLines": "MDF_3",
                        "constants": [],
                        "variables": [
                          "MDF_3"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Bleed_DamageValue": {
                          "operator": "Variables[0] (TempValue) || Variables[1] (MDF_2) || MUL || RETURN",
                          "displayLines": "(TempValue * MDF_2)",
                          "constants": [],
                          "variables": [
                            "TempValue",
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__825759775\">MLevel_WB_3002425</a>",
          "stackType": "Multiple",
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_1) || SUB || RETURN",
                    "displayLines": "(0 - MDF_1)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__808982156\">MLevel_WB_3002424</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Preservation"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || Variables[1] (MDF_2) || ADD || RETURN",
                        "displayLines": "(MDF_1 + MDF_2)",
                        "constants": [],
                        "variables": [
                          "MDF_1",
                          "MDF_2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || RETURN",
                        "displayLines": "MDF_1",
                        "constants": [],
                        "variables": [
                          "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__792204537\">MLevel_WB_3002423</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Preservation"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || Variables[1] (MDF_2) || ADD || RETURN",
                        "displayLines": "(MDF_1 + MDF_2)",
                        "constants": [],
                        "variables": [
                          "MDF_1",
                          "MDF_2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || RETURN",
                        "displayLines": "MDF_1",
                        "constants": [],
                        "variables": [
                          "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__775426918\">MLevel_WB_3002422</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Preservation"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || Variables[1] (MDF_2) || ADD || RETURN",
                        "displayLines": "(MDF_1 + MDF_2)",
                        "constants": [],
                        "variables": [
                          "MDF_1",
                          "MDF_2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || RETURN",
                        "displayLines": "MDF_1",
                        "constants": [],
                        "variables": [
                          "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__758649299\">MLevel_WB_3002421</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
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
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                      "duration": 1,
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-768810398\">MLevel_WB_3002403_Sub</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_1",
                  "multiplier": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 10,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1220712385\">MLevel_WB_3002403</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_LastHPRatio"
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentHPRatio",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_LastHPRatio) || RETURN",
                      "displayLines": "MDF_LastHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_LastHPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AccumulateDMGRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_AccumulateDMGRatio) || Variables[1] (MDF_LastHPRatio) || ADD || Variables[2] (MDF_CurrentHPRatio) || SUB || RETURN",
                        "displayLines": "((MDF_AccumulateDMGRatio + MDF_LastHPRatio) - MDF_CurrentHPRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_AccumulateDMGRatio",
                          "MDF_LastHPRatio",
                          "MDF_CurrentHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_AccumulateDMGRatio",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AccumulateDMGRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_AccumulateDMGRatio) || Variables[1] (MDF_1) || SUB || RETURN",
                            "displayLines": "(MDF_AccumulateDMGRatio - MDF_1)",
                            "constants": [],
                            "variables": [
                              "MDF_AccumulateDMGRatio",
                              "MDF_1"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-768810398\">MLevel_WB_3002403_Sub</a>",
                          "valuePerStack": {
                            "MDF_2": {
                              "operator": "Variables[0] (MDF_2) || RETURN",
                              "displayLines": "MDF_2",
                              "constants": [],
                              "variables": [
                                "MDF_2"
                              ]
                            }
                          },
                          "casterAssign": "CasterSelf"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentHPRatio) || RETURN",
                    "displayLines": "MDF_CurrentHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentHPRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1237490004\">MLevel_WB_3002402</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Target Has Lowest/Highest Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "partOf": {
                      "name": "Target Name",
                      "target": "{{All Team Members}}"
                    },
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                    "minOrMax": "Min"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1788719875\">Standard_Protect_AbilityRetarget</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_1) || RETURN",
                        "displayLines": "MDF_1",
                        "constants": [],
                        "variables": [
                          "MDF_1"
                        ]
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1364052196\">MLevel_WB_3002401_Sub</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Redirect Targeting",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "affectedTeam": "EnemyTeam"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1187157147\">MLevel_WB_3002401</a>",
          "counter": 1,
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1364052196\">MLevel_WB_3002401_Sub</a>",
                      "duration": {
                        "operator": "Variables[0] (MDF_2) || RETURN",
                        "displayLines": "MDF_2",
                        "constants": [],
                        "variables": [
                          "MDF_2"
                        ]
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1364052196\">MLevel_WB_3002401_Sub</a>",
                      "duration": {
                        "operator": "Variables[0] (MDF_2) || RETURN",
                        "displayLines": "MDF_2",
                        "constants": [],
                        "variables": [
                          "MDF_2"
                        ]
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1282754163\">MLevel_WB_3002229</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
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
                      "variableName": "TempValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1797420881\">Standard_Protect_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_ShowValue": {
                          "operator": "Variables[0] (MDF_1) || Variables[1] (TempValue) || MUL || RETURN",
                          "displayLines": "(MDF_1 * TempValue)",
                          "constants": [],
                          "variables": [
                            "MDF_1",
                            "TempValue"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1299531782\">MLevel_WB_3002228</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Receiving Heal Start [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1517640829\">MLevel_WB_3002227</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;",
                          "value": "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-618173059\">MLevel_WB_3002226_Sub</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1534418448\">MLevel_WB_3002226</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Quick-Time Event"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                          "value": "MDF_1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-618173059\">MLevel_WB_3002226_Sub</a>",
                  "valuePerStack": {
                    "MDF_2": {
                      "operator": "Variables[0] (MDF_2) || RETURN",
                      "displayLines": "MDF_2",
                      "constants": [],
                      "variables": [
                        "MDF_2"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-618173059\">MLevel_WB_3002226_Sub</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1484085591\">MLevel_WB_3002225</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1500863210\">MLevel_WB_3002224</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1450530353\">MLevel_WB_3002223</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1467307972\">MLevel_WB_3002222</a>",
          "stackType": "Multiple",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1416975115\">MLevel_WB_3002221</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_1) || RETURN",
                        "displayLines": "MDF_1",
                        "constants": [],
                        "variables": [
                          "MDF_1"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1585045495\">MLevel_WB_3002203</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_1) || RETURN",
                        "displayLines": "MDF_1",
                        "constants": [],
                        "variables": [
                          "MDF_1"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1601823114\">MLevel_WB_3002202</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                          "value": "MDF_1"
                        },
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;",
                          "value": "MDF_2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-518795370\">MLevel_WB_3002201_Sub</a>",
          "stackType": "Replace",
          "functionalTurn": "AnyOneTurn",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1618600733\">MLevel_WB_3002201</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "(MDF_1 * (TempValue - 1))"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_1) || Variables[1] (TempValue) || Constants[0] (1) || SUB || MUL || RETURN",
                        "displayLines": "(MDF_1 * (TempValue - 1))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_1",
                          "TempValue"
                        ]
                      }
                    }
                  ]
                }
              ]
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-518795370\">MLevel_WB_3002201_Sub</a>",
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "TempValue",
                      "modifierName": "<a class=\"gModGreen\" id=\"-518795370\">MLevel_WB_3002201_Sub</a>",
                      "multiplier": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1854833192\">MLevel_WB_3002129</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"1237033920\">Standard_LevelAllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1871610811\">MLevel_WB_3002128</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Caused Depleted Toughness [Owner][?]",
              "execute": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1821277954\">MLevel_WB_3002127</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__861848812\">MLevel_WB_3002126_Sub</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1838055573\">MLevel_WB_3002126</a>",
          "stackType": "Multiple",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"861848812\">MLevel_WB_3002126_Sub</a>",
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"861848812\">MLevel_WB_3002126_Sub</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1787722716\">MLevel_WB_3002125</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1804500335\">MLevel_WB_3002124</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1754167478\">MLevel_WB_3002123</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1770945097\">MLevel_WB_3002122</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_1) || SUB || RETURN",
                    "displayLines": "(0 - MDF_1)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 2,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1720612240\">MLevel_WB_3002121</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-125220040\">MLevel_WB_3002103</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-108442421\">MLevel_WB_3002102</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "MDF_1"
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
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": -1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-91664802\">MLevel_WB_3002101</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__166508431\">MLevel_WB_3002029</a>",
          "stackType": "Multiple",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-646295095\">MLevel_WB_3002028_Sub</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__149730812\">MLevel_WB_3002028</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-646295095\">MLevel_WB_3002028_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-646295095\">MLevel_WB_3002028_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-646295095\">MLevel_WB_3002028_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-646295095\">MLevel_WB_3002028_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__267174145\">MLevel_WB_3002027</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "BuffFlag1",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Is a Crit"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_1) || RETURN",
                          "displayLines": "MDF_1",
                          "constants": [],
                          "variables": [
                            "MDF_1"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_2) || RETURN",
                        "displayLines": "MDF_2",
                        "constants": [],
                        "variables": [
                          "MDF_2"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffFlag1",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BuffFlag1",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__250396526\">MLevel_WB_3002026</a>",
          "stackType": "Multiple",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-146098050\">MLevel_WB_3002025_Sub</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__233618907\">MLevel_WB_3002025</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-146098050\">MLevel_WB_3002025_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-146098050\">MLevel_WB_3002025_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-146098050\">MLevel_WB_3002025_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-146098050\">MLevel_WB_3002025_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__216841288\">MLevel_WB_3002024</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "TempValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": {
                        "operator": "Variables[0] (MaxHP) || Variables[1] (MDF_1) || MUL || RETURN",
                        "displayLines": "(MaxHP * MDF_1)",
                        "constants": [],
                        "variables": [
                          "MaxHP",
                          "MDF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__122496948\">MLevel_WB_3002023_Sub</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_2) || RETURN",
                    "displayLines": "MDF_2",
                    "constants": [],
                    "variables": [
                      "MDF_2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_3) || RETURN",
                    "displayLines": "MDF_3",
                    "constants": [],
                    "variables": [
                      "MDF_3"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__334284621\">MLevel_WB_3002023</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"122496948\">MLevel_WB_3002023_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        },
                        "MDF_3": {
                          "operator": "Variables[0] (MDF_3) || RETURN",
                          "displayLines": "MDF_3",
                          "constants": [],
                          "variables": [
                            "MDF_3"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"122496948\">MLevel_WB_3002023_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_1) || RETURN",
                      "displayLines": "MDF_1",
                      "constants": [],
                      "variables": [
                        "MDF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"122496948\">MLevel_WB_3002023_Sub</a>",
                      "valuePerStack": {
                        "MDF_2": {
                          "operator": "Variables[0] (MDF_2) || RETURN",
                          "displayLines": "MDF_2",
                          "constants": [],
                          "variables": [
                            "MDF_2"
                          ]
                        },
                        "MDF_3": {
                          "operator": "Variables[0] (MDF_3) || RETURN",
                          "displayLines": "MDF_3",
                          "constants": [],
                          "variables": [
                            "MDF_3"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"122496948\">MLevel_WB_3002023_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__317507002\">MLevel_WB_3002022</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__300729383\">MLevel_WB_3002021</a>",
          "stackType": "Multiple",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2079451187\">MLevel_WB_3002003</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BuffFlag1",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffFlag2",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BuffFlag1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BuffFlag2",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BuffFlag2",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "MDF_1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BuffFlag1",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2062673568\">MLevel_WB_3002002</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
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
                        "name": "Compare: Variable",
                        "value1": "BuffFlag1",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Basic ATK"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "MDF_1"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffFlag2",
                      "value": 1
                    }
                  ]
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
                    "value1": "BuffFlag2",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffFlag1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffFlag2",
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
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BuffFlag1",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2113006425\">MLevel_WB_3002001</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "TempValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1797420881\">Standard_Protect_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": 2,
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] (MDF_2) || Variables[1] (TempValue) || MUL || RETURN",
                      "displayLines": "(MDF_2 * TempValue)",
                      "constants": [],
                      "variables": [
                        "MDF_2",
                        "TempValue"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_1) || SUB || RETURN",
                    "displayLines": "(0 - MDF_1)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_1"
                    ]
                  }
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