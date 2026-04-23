const configAbility = {
  "fileName": "GlobalAbilities_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__253720974\">ClearAvatarArea_ByAbility</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1136407126\">Standard_Departed_Sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": true
            }
          ]
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
        "casterFilter": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__123456163\">Standard_Departed</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Standard_Departed"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Standard_Departed",
              "state": false
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
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
                        "name": "Modifier Has Flag",
                        "flagName": "TeamAction"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "AttackSign"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
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
            "target": "{{Modifier Holder}}.[[addBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>",
          "aliveOnly": "False",
          "haloStatus": true,
          "includeBattleEvent": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1176583887\">Standard_TriggerDeparted</a>",
      "execute": [
        {
          "eventTrigger": "Departed State: Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>"
            }
          ]
        },
        {
          "eventTrigger": "Departed State: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1581220157\">TriggerStanceCountDown_Monster</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "CanBeAddedToServant"
      ],
      "execute": [
        {
          "eventTrigger": "Caused Depleted Toughness [Owner][?]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "TargetCurrentToughness",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1088674520\">StanceCountDown_Physical</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-184331160\">StanceCountDown_Ice</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1895171535\">StanceCountDown_Fire</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1032587311\">StanceCountDown_Wind</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"983067753\">StanceCountDown_Thunder</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1968828018\">StanceCountDown_Imaginary</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1123715482\">StanceCountDown_Quantum</a>",
                      "variables": {}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"801909437\">TT_TriggerBreak</a>"
            }
          ]
        },
        {
          "eventTrigger": "Cause Exo-Weakness Break [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"801909437\">TT_TriggerBreak</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__801909437\">TT_TriggerBreak</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"485608192\">StanceBreak_Physical</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-687043424\">StanceBreak_Ice</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"483030905\">StanceBreak_Fire</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1573629529\">StanceBreak_Wind</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1796036529\">StanceBreak_Thunder</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-433289498\">StanceBreak_Imaginary</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"789833122\">StanceBreak_Quantum</a>",
                  "variables": {}
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2041921887\">TriggerStanceCountDown_Test</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "CanBeAddedToServant"
      ],
      "execute": [
        {
          "eventTrigger": "Caused Depleted Toughness [Owner][?]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "TargetCurrentToughness",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1088674520\">StanceCountDown_Physical</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-184331160\">StanceCountDown_Ice</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1895171535\">StanceCountDown_Fire</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1032587311\">StanceCountDown_Wind</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"983067753\">StanceCountDown_Thunder</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1968828018\">StanceCountDown_Imaginary</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1123715482\">StanceCountDown_Quantum</a>",
                      "variables": {}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"485608192\">StanceBreak_Physical</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-687043424\">StanceBreak_Ice</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"483030905\">StanceBreak_Fire</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1573629529\">StanceBreak_Wind</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1796036529\">StanceBreak_Thunder</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-433289498\">StanceBreak_Imaginary</a>",
                  "variables": {}
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"789833122\">StanceBreak_Quantum</a>",
                  "variables": {}
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
      "for": "<a class=\"gModGreen\" id=\"mod__-205377483\">Local_SPAdd</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 9001013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_AddValue) || RETURN",
                    "displayLines": "MDF_AddValue",
                    "constants": [],
                    "variables": [
                      "MDF_AddValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddValue"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}