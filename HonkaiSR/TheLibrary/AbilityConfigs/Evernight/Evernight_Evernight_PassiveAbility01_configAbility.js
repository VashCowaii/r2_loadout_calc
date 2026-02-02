const configAbility = {
  "fileName": "Evernight_Evernight_PassiveAbility01",
  "childAbilityList": [
    "Evernight_Evernight_PassiveAbility01"
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
      "name": "Define Custom Variable",
      "variableName": "_Partner_Count_Max",
      "value": {
        "operator": "Variables[0] (16) || RETURN",
        "displayLines": "16",
        "constants": [],
        "variables": [
          16
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_SummonServantPreshow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_LoseHPPreshow"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "displaySubType": "Fraction",
      "displayShowIcon": "False",
      "maximum": {
        "operator": "Variables[0] (_Partner_Count_Max) || RETURN",
        "displayLines": "_Partner_Count_Max",
        "constants": [],
        "variables": [
          "_Partner_Count_Max"
        ]
      },
      "assignState": "True",
      "bar#": "Number"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Dark the Night, Still the Moon",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_PointB1_Crit[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_PointB1_Aura",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_Cost": {
              "operator": "Variables[0] (0.05) || RETURN",
              "displayLines": "0.05",
              "constants": [],
              "variables": [
                0.05
              ]
            },
            "MDF_LifeTime": {
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
          "modifier": "Evernight_Eidolon2_Crit[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
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
      "modifier": "Evernight_EnergyBar"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_Passive_Endurance_Control"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_Passive"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Evernight_PL_Layer",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_HPChange",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "S03_Duration",
      "value": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
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
          "variableName": "S03_Duration",
          "value": {
            "operator": "Variables[0] (S03_Duration) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(S03_Duration + 2)",
            "constants": [],
            "variables": [
              "S03_Duration",
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Evernight_00_Extra_Energy",
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
          "modifier": "Evernight_Eidolon1_ListenDamage"
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
          "modifier": "Evernight_Eidolon4_Aura"
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
          "modifier": "Evernight_Eidolon6_Aura"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rouse the Flame, Lull the Light"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_PointB2_EnterBattle"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_ViewMode_Control"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Evernight_EnergyBar",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_Partner_Count",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 99999,
              "whenEnteringRange": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Partner_Count) || RETURN",
                    "displayLines": "_Partner_Count",
                    "constants": [],
                    "variables": [
                      "_Partner_Count"
                    ]
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Partner_Count) || RETURN",
                    "displayLines": "_Partner_Count",
                    "constants": [],
                    "variables": [
                      "_Partner_Count"
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
      "for": "Evernight_Passive_Endurance_Control",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Memosprite_EvernightServant_TriggerNormal",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
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
                      "target": "{{Caster's Memosprite}}"
                    },
                    "modifier": "Memosprite_EvernightServant_TriggerNormal",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Partner_Count_Show",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (16) || RETURN",
                      "displayLines": "16",
                      "constants": [],
                      "variables": [
                        16
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true,
                  "toRemove": [
                    "DisableAction",
                    "STAT_CTRL"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_Passive_Endurance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
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
          "variableName": "_Partner_Count",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": {
                "operator": "Variables[0] (16) || RETURN",
                "displayLines": "16",
                "constants": [],
                "variables": [
                  16
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_Passive_Endurance"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Memosprite_EvernightServant_TriggerNormal"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_Passive_Endurance"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Memosprite_EvernightServant_TriggerNormal"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (16) || RETURN",
                "displayLines": "16",
                "constants": [],
                "variables": [
                  16
                ]
              },
              "maxValue": 99999,
              "whenEnteringRange": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true,
                  "toRemove": [
                    "DisableAction",
                    "STAT_CTRL"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_Passive_Endurance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                    }
                  ]
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true,
                  "toRemove": [
                    "DisableAction",
                    "STAT_CTRL"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_Passive_Endurance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
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
      "for": "Evernight_Passive_Endurance",
      "modifierFlags": [
        "EnduranceLogicOnly"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Passive",
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Join Targets",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        {
                          "name": "Target Name",
                          "target": "{{All Memosprites}}"
                        }
                      ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Rouse the Flame, Lull the Light"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_Partner_Count_Show",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          1,
                          "_Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "_Partner_Count",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          1,
                          "_Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
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
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_TryCreateServant",
                  "variables": {
                    "DV_Partner_Count": {
                      "operator": "Variables[0] (_Partner_Count) || RETURN",
                      "displayLines": "_Partner_Count",
                      "constants": [],
                      "variables": [
                        "_Partner_Count"
                      ]
                    },
                    "DV_Delay": -1,
                    "DV_HP_Ratio": 0
                  }
                }
              ]
            }
          ],
          "priorityLevel": -92
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_PointB2_EnterBattle",
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_Partner_Count_Show",
                  "value": {
                    "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                    "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                    "constants": [],
                    "variables": [
                      1,
                      "_Evernight_00_Extra_Energy"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "variableName": "_Partner_Count",
                  "value": {
                    "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                    "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                    "constants": [],
                    "variables": [
                      1,
                      "_Evernight_00_Extra_Energy"
                    ]
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (70) || RETURN",
                    "displayLines": "70",
                    "constants": [],
                    "variables": [
                      70
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Evernight_PL_Layer"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Eidolon1_ListenDamage",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Anyone]: Any",
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Memosprites}}"
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
                  "variableName": "_Rank01_Rat",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variableName": "_Alive_Count",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Alive_Count",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Alive_Count",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Alive_Count",
                    "compareType": ">",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Alive_Count",
                      "value": 4
                    }
                  ]
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_Alive_Count) || RETURN",
                    "displayLines": "_Alive_Count",
                    "constants": [],
                    "variables": [
                      "_Alive_Count"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank01_Rat",
                          "value": {
                            "operator": "Variables[0] (1.5) || RETURN",
                            "displayLines": "1.5",
                            "constants": [],
                            "variables": [
                              1.5
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank01_Rat",
                          "value": {
                            "operator": "Variables[0] (1.3) || RETURN",
                            "displayLines": "1.3",
                            "constants": [],
                            "variables": [
                              1.3
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank01_Rat",
                          "value": {
                            "operator": "Variables[0] (1.25) || RETURN",
                            "displayLines": "1.25",
                            "constants": [],
                            "variables": [
                              1.25
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank01_Rat",
                          "value": {
                            "operator": "Variables[0] (1.2) || RETURN",
                            "displayLines": "1.2",
                            "constants": [],
                            "variables": [
                              1.2
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseAbilityMultiplier</span>&nbsp;",
                      "value": "_Rank01_Rat"
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
        "_Evernight_PL_Layer"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Eidolon4_Aura",
      "stackData": [],
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
          },
          "modifier": "Evernight_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Wake Up, the Tomorrow is Yours</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue_1": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "MDF_PropertyValue_2": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Eidolon6_Aura",
      "stackData": [],
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Evernight_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Like This, Always</span>]",
          "haloStatus": true,
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
      "name": "Modifier Construction",
      "for": "Evernight_ViewMode_Control",
      "execute": [
        {
          "eventTrigger": "Enter View-Mode [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CL_Is_S03_Ready",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CL_Is_S03_Ready",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Evernight_PL_Layer"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_LoseHPPreshow",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}