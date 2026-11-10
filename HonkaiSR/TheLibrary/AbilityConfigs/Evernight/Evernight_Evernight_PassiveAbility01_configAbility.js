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
      "value": {
        "displayLines": "16"
      },
      "variableName": "_Partner_Count_Max"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1910251570\">Evernight_SummonServantPreshow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-397490275\">Evernight_LoseHPPreshow</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "displaySubType": "Fraction",
      "displayShowIcon": "False",
      "maximum": {
        "displayLines": "_Partner_Count_Max"
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
          "modifier": "<a class=\"gModGreen\" id=\"1710373270\">Evernight_PointB1_Crit</a>[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.35"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"557640561\">Evernight_PointB1_Aura</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            },
            "MDF_Cost": {
              "displayLines": "0.05"
            },
            "MDF_LifeTime": {
              "displayLines": "2"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1701896777\">Evernight_Eidolon2_Crit</a>[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.4"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1478400557\">Evernight_EnergyBar</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1552058759\">Evernight_Passive_Endurance_Control</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"208363119\">Evernight_Passive</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Evernight_PL_Layer"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2043260870\">Evernight_HPChange</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "2"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "2"
      },
      "variableName": "S03_Duration"
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
          "value": {
            "displayLines": "(S03_Duration + 2)"
          },
          "variableName": "S03_Duration"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2"
          },
          "variableName": "_Evernight_00_Extra_Energy"
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
          "modifier": "<a class=\"gModGreen\" id=\"531716506\">Evernight_Eidolon1_ListenDamage</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1433121158\">Evernight_Eidolon4_Aura</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1327507720\">Evernight_Eidolon6_Aura</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1315509793\">Evernight_PointB2_EnterBattle</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1224536114\">Evernight_ViewMode_Control</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1478400557\">Evernight_EnergyBar</a>",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_Partner_Count",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 99999,
              "enteringRange": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "_Partner_Count"
                  }
                }
              ],
              "onChange": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "_Partner_Count"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1552058759\">Evernight_Passive_Endurance_Control</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-373711832\">Memosprite_EvernightServant_TriggerNormal_NoEnemy</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Partner_Count_Show",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "16"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1513194905\">Evernight_Passive_Endurance</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-373711832\">Memosprite_EvernightServant_TriggerNormal_NoEnemy</a>"
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
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": {
                "displayLines": "16"
              },
              "enteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1513194905\">Evernight_Passive_Endurance</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-373711832\">Memosprite_EvernightServant_TriggerNormal_NoEnemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>"
                }
              ],
              "onChange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1513194905\">Evernight_Passive_Endurance</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-373711832\">Memosprite_EvernightServant_TriggerNormal_NoEnemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "displayLines": "16"
              },
              "maxValue": 99999,
              "enteringRange": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"1513194905\">Evernight_Passive_Endurance</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-373711832\">Memosprite_EvernightServant_TriggerNormal_NoEnemy</a>"
                    }
                  ]
                }
              ],
              "onChange": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"1513194905\">Evernight_Passive_Endurance</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-373711832\">Memosprite_EvernightServant_TriggerNormal_NoEnemy</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1513194905\">Evernight_Passive_Endurance</a>",
      "modifierFlags": [
        "EnduranceLogicOnly",
        "CLEANSE_CONTROL_ANY"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__208363119\">Evernight_Passive</a>",
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
                    "target1": {
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
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)"
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
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)"
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "5"
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
          "priorityLevel": -92,
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
                  "functionName": "<a class=\"gTempYellow\" id=\"1497424763\">function_Evernight_TryCreateServant</a>",
                  "variables": {
                    "DV_Partner_Count": {
                      "displayLines": "_Partner_Count"
                    },
                    "DV_Delay": -1,
                    "DV_HP_Ratio": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1315509793\">Evernight_PointB2_EnterBattle</a>",
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                    "displayLines": "(1 + _Evernight_00_Extra_Energy)"
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
                    "displayLines": "(1 + _Evernight_00_Extra_Energy)"
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "70"
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
      "for": "<a class=\"gModGreen\" id=\"mod__531716506\">Evernight_Eidolon1_ListenDamage</a>",
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Memosprites}}"
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
                  "value": 1,
                  "variableName": "_Rank01_Rat"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "_Alive_Count",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "living": true
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
                      "value": 1,
                      "variableName": "_Alive_Count"
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
                      "value": 4,
                      "variableName": "_Alive_Count"
                    }
                  ]
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "_Alive_Count"
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1.5"
                          },
                          "variableName": "_Rank01_Rat"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1.3"
                          },
                          "variableName": "_Rank01_Rat"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1.25"
                          },
                          "variableName": "_Rank01_Rat"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1.2"
                          },
                          "variableName": "_Rank01_Rat"
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
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                      "value": "_Rank01_Rat"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1433121158\">Evernight_Eidolon4_Aura</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"86729012\">Evernight_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">Wake Up, the Tomorrow is Yours</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue_1": {
              "displayLines": "0.25"
            },
            "MDF_PropertyValue_2": {
              "displayLines": "0.25"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1327507720\">Evernight_Eidolon6_Aura</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"376015846\">Evernight_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">Like This, Always</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.2"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1224536114\">Evernight_ViewMode_Control</a>",
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-397490275\">Evernight_LoseHPPreshow</a>",
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
                  "variableName": "MDF_MaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                    "displayLines": "(MDF_MaxHP * 0.1)"
                  }
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