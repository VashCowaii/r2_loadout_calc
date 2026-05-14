const configAbility = {
  "fileName": "Evanescia_Evanescia_PassiveAbility01",
  "childAbilityList": [
    "Evanescia_Evanescia_PassiveAbility01",
    "Evanescia_EvanesciaCombat_Insert_SelectTarget",
    "Evanescia_EvanesciaCombat_Insert_Part01",
    "Evanescia_EvanesciaCombat_Insert_Part02",
    "Evanescia_EvanesciaCombat_Insert_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "EvanesciaEnergy",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "EvanesciaSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (MIN) || Variables[1] (EvanesciaEnergy) || Constants[0] (100) || PARAM_2 || FUNCTION || RETURN",
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(EvanesciaEnergy, 100)",
        "constants": [
          100
        ],
        "variables": [
          "MIN",
          "EvanesciaEnergy"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EvanesciaSP",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "AddValue": {
              "operator": "Variables[0] (EvanesciaSP) || RETURN",
              "displayLines": "EvanesciaSP",
              "constants": [],
              "variables": [
                "EvanesciaSP"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        11505
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1685170340\">Evanescia_Passive</a>"
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "AccumulatedEcho",
      "context": "ContextCaster",
      "value": {
        "operator": "Variables[0] (MIN) || Variables[1] (240) || Variables[2] (EvanesciaSP) || PARAM_2 || FUNCTION || RETURN",
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(240, EvanesciaSP)",
        "constants": [],
        "variables": [
          "MIN",
          240,
          "EvanesciaSP"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AccumulatedEcho",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (240) || RETURN",
          "displayLines": "240",
          "constants": [],
          "variables": [
            240
          ]
        }
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1152920824\">_T_Evanescia_TriggerWonded</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1685170340\">Evanescia_Passive</a>",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has DMG Instance Tag",
                "tag": "Evanescia_Ultra"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_Evanescia_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_Evanescia_ElationEchoPoint",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Punchline</span>&nbsp;",
                      "value": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(_Evanescia_MaxSP, _Evanescia_ElationEchoPoint)"
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
              "modifier": "<a class=\"gModGreen\" id=\"1630345914\">Evanescia_Passive_CritToElation</a>[<span class=\"descriptionNumberColor\">Youth: Halcyon Evermore</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Watch All Revels"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1871447404\">Evanescia_Trace01_CritChance</a>",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"-143754898\">MReference_CriticalChanceUp</a>",
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
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EvanesciaEnergy",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (AccumulatedEcho) || RETURN",
                "displayLines": "AccumulatedEcho",
                "constants": [],
                "variables": [
                  "AccumulatedEcho"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (240) || RETURN",
                "displayLines": "240",
                "constants": [],
                "variables": [
                  240
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 5
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
                  "modifier": "<a class=\"gModGreen\" id=\"-800917122\">Evanescia_Eidolon1</a>[<span class=\"descriptionNumberColor\">Home: A Prayer in Dance</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-817694741\">Evanescia_Eidolon2</a>[<span class=\"descriptionNumberColor\">Voyage: A Wish for Everbloom</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-717029027\">Evanescia_Eidolon4</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"611817179\">Evanescia_Eidolon6_ElationDamageExtra</a>[<span class=\"descriptionNumberColor\">Maiden: A Step into Dreams</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-952189456\">Evanescia_Eidolon6_UltraEnergyRefund</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1567859554\">Evanescia_Eidolon6_EchoPointLifeTime</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]"
        },
        {
          "eventTrigger": "Attack Start [Owner]"
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "HitCaster",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Sort by Elation Participant ID"
                  }
                ]
              },
              "ifTargetFound": [
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
                      "name": "Define Custom Variable",
                      "variableName": "HitCaster",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HitCaster",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"443021726\">Evanescia_ElationMark</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -85
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "ElationEchoPoint"
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Best All Blooms"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
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
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "ElationEchoPoint",
                  "target2": null,
                  "variable2": "ElationEchoTemp"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variables": {
                    "AddValue": {
                      "operator": "Variables[0] (ElationEchoTemp) || Variables[1] (0.5) || MUL || RETURN",
                      "displayLines": "(ElationEchoTemp * 0.5)",
                      "constants": [],
                      "variables": [
                        "ElationEchoTemp",
                        0.5
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TotalEchoPointFromTeammate",
                  "context": "ContextCaster",
                  "value": {
                    "operator": "Variables[0] (ElationEchoTemp) || Variables[1] (0.5) || MUL || RETURN",
                    "displayLines": "(ElationEchoTemp * 0.5)",
                    "constants": [],
                    "variables": [
                      "ElationEchoTemp",
                      0.5
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "AddValue": {
                          "operator": "Variables[0] (ElationEchoTemp) || Variables[1] (0.5) || MUL || Variables[2] (1) || MUL || RETURN",
                          "displayLines": "((ElationEchoTemp * 0.5) * 1)",
                          "constants": [],
                          "variables": [
                            "ElationEchoTemp",
                            0.5,
                            1
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "TotalEchoPointFromTeammate",
                      "context": "ContextCaster",
                      "value": {
                        "operator": "Variables[0] (ElationEchoTemp) || Variables[1] (0.5) || MUL || Variables[2] (1) || MUL || RETURN",
                        "displayLines": "((ElationEchoTemp * 0.5) * 1)",
                        "constants": [],
                        "variables": [
                          "ElationEchoTemp",
                          0.5,
                          1
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
          "eventTrigger": "Certified Banger Gain [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Watch All Revels"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
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
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_ElationPoint"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_ElationPoint",
                        "compareType": ">=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"443021726\">Evanescia_ElationMark</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modify Param Value for Param Target",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_ElationPoint) || MUL || Variables[1] (0.5) || MUL || RETURN",
                        "displayLines": "((-1 * _ElationPoint) * 0.5)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_ElationPoint",
                          0.5
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_ElationPoint"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "AddValue": {
                          "operator": "Variables[0] (_ElationPoint) || Variables[1] (0.5) || MUL || RETURN",
                          "displayLines": "(_ElationPoint * 0.5)",
                          "constants": [],
                          "variables": [
                            "_ElationPoint",
                            0.5
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_ElationPoint"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "TotalEchoPointFromTeammate",
                      "context": "ContextCaster",
                      "value": {
                        "operator": "Variables[0] (_ElationPoint) || Variables[1] (0.5) || MUL || RETURN",
                        "displayLines": "(_ElationPoint * 0.5)",
                        "constants": [],
                        "variables": [
                          "_ElationPoint",
                          0.5
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
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "AddValue": {
                              "operator": "Variables[0] (_ElationPoint) || Variables[1] (0.5) || MUL || Variables[2] (0.5) || MUL || RETURN",
                              "displayLines": "((_ElationPoint * 0.5) * 0.5)",
                              "constants": [],
                              "variables": [
                                "_ElationPoint",
                                0.5,
                                0.5
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TotalEchoPointFromTeammate",
                          "context": "ContextCaster",
                          "value": {
                            "operator": "Variables[0] (_ElationPoint) || Variables[1] (0.5) || MUL || Variables[2] (0.5) || MUL || RETURN",
                            "displayLines": "((_ElationPoint * 0.5) * 0.5)",
                            "constants": [],
                            "variables": [
                              "_ElationPoint",
                              0.5,
                              0.5
                            ]
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
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "AccumulatedEcho",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccumulatedEcho",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (240) || RETURN",
                      "displayLines": "240",
                      "constants": [],
                      "variables": [
                        240
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1152920824\">_T_Evanescia_TriggerWonded</a>"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (AccumulatedEcho) || RETURN",
                    "displayLines": "AccumulatedEcho",
                    "constants": [],
                    "variables": [
                      "AccumulatedEcho"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "old_EvanesciaSP",
                  "value": {
                    "operator": "Variables[0] (EvanesciaSP) || RETURN",
                    "displayLines": "EvanesciaSP",
                    "constants": [],
                    "variables": [
                      "EvanesciaSP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EvanesciaSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "change_EvanesciaSP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SPChangeFromSync",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SPChangeFromSync",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EvanesciaSP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (old_EvanesciaSP) || RETURN",
                          "displayLines": "old_EvanesciaSP",
                          "constants": [],
                          "variables": [
                            "old_EvanesciaSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EchoChangeFromSync",
                          "value": 1
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "AddValue": {
                              "operator": "Variables[0] (EvanesciaSP) || Variables[1] (old_EvanesciaSP) || SUB || RETURN",
                              "displayLines": "(EvanesciaSP - old_EvanesciaSP)",
                              "constants": [],
                              "variables": [
                                "EvanesciaSP",
                                "old_EvanesciaSP"
                              ]
                            }
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
                    "value1": "change_EvanesciaSP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "AccumulatedEcho",
                      "context": "ContextCaster",
                      "value": {
                        "operator": "Variables[0] (MIN) || Variables[1] (240) || Variables[2] (change_EvanesciaSP) || PARAM_2 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(240, change_EvanesciaSP)",
                        "constants": [],
                        "variables": [
                          "MIN",
                          240,
                          "change_EvanesciaSP"
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
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "old_EvanesciaEnergy",
                  "value": {
                    "operator": "Variables[0] (EvanesciaEnergy) || RETURN",
                    "displayLines": "EvanesciaEnergy",
                    "constants": [],
                    "variables": [
                      "EvanesciaEnergy"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EvanesciaEnergy",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "change_EvanesciaEnergy"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EchoChangeFromSync",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EchoChangeFromSync",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EvanesciaEnergy",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (old_EvanesciaEnergy) || RETURN",
                          "displayLines": "old_EvanesciaEnergy",
                          "constants": [],
                          "variables": [
                            "old_EvanesciaEnergy"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SPChangeFromSync",
                          "value": 1
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (MIN) || Variables[1] (change_EvanesciaEnergy) || Constants[0] (100) || PARAM_2 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(change_EvanesciaEnergy, 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "MIN",
                              "change_EvanesciaEnergy"
                            ]
                          },
                          "isFixed": "* ERR"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}