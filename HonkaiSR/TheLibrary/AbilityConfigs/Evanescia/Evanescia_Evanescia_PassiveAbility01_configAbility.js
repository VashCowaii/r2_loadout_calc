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
      "variableName": "EvanesciaEnergy",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "EvanesciaSP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(EvanesciaEnergy, 100)"
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
              "displayLines": "EvanesciaSP"
            }
          }
        }
      ]
    },
    {
      "name": "Preload Battle Event(s)",
      "beID": [
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
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(240, EvanesciaSP)"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AccumulatedEcho",
        "compareType": ">=",
        "value2": {
          "displayLines": "240"
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
                  "variableName": "_Evanescia_MaxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_Evanescia_ElationEchoPoint",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                      "displayLines": "0.3"
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "EvanesciaEnergy",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "AccumulatedEcho"
              },
              "maximum": {
                "displayLines": "240"
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
          "priorityLevel": -85,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "HitCaster"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "Sort by Elation Participant ID"
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
                      "value": 1,
                      "variableName": "HitCaster"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_ElationPoint",
                  "scope": "CallbackTemporary"
                },
                {
                  "name": "Define Custom Variable with Changes to Certified Banger",
                  "variableName": "_ElationPoint",
                  "type": "OriginalCurrentValue"
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
                        "displayLines": "((-1 * _ElationPoint) * 0.5)"
                      }
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
                          "displayLines": "(_ElationPoint * 0.5)"
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
                        "displayLines": "(_ElationPoint * 0.5)"
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
                              "displayLines": "((_ElationPoint * 0.5) * 0.5)"
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
                            "displayLines": "((_ElationPoint * 0.5) * 0.5)"
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
          "eventTrigger": "Certified Banger [Anyone]: Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Best All Blooms"
                  },
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
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
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "ElationEchoTemp",
                  "scope": "ContextCaster"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ElationEchoTemp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_MergeElationEchoPointMDF",
                      "scope": "CallbackTemporary"
                    },
                    {
                      "name": "IF",
                      "conditions": "Unknown Elation CONDITION1 (Not always an error)[2: PierceCost]",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "_MergeElationEchoPointMDF"
                        }
                      ]
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
                          "displayLines": "(ElationEchoTemp * 0.5)"
                        },
                        "TryMergeMDF": {
                          "displayLines": "_MergeElationEchoPointMDF"
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
                        "displayLines": "(ElationEchoTemp * 0.5)"
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
                              "displayLines": "((ElationEchoTemp * 0.5) * 1)"
                            },
                            "TryMergeMDF": {
                              "displayLines": "_MergeElationEchoPointMDF"
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
                            "displayLines": "((ElationEchoTemp * 0.5) * 1)"
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
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "includeMaxValueInRange": true,
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccumulatedEcho",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "240"
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
                    "displayLines": "AccumulatedEcho"
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "triggerClampedChanges": true,
              "onChange": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "EvanesciaSP"
                  },
                  "variableName": "old_EvanesciaSP"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "EvanesciaSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                      "value": 0,
                      "variableName": "SPChangeFromSync"
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
                          "displayLines": "old_EvanesciaSP"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "EchoChangeFromSync"
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
                              "displayLines": "(EvanesciaSP - old_EvanesciaSP)"
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
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(240, change_EvanesciaSP)"
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "triggerClampedChanges": true,
              "onChange": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "EvanesciaEnergy"
                  },
                  "variableName": "old_EvanesciaEnergy"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "EvanesciaEnergy",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                      "value": 0,
                      "variableName": "EchoChangeFromSync"
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
                          "displayLines": "old_EvanesciaEnergy"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "SPChangeFromSync"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(change_EvanesciaEnergy, 100)"
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