const compositeAbilityObject = {
  "fullCharacterName": 20085023,
  "trimCharacterName": 20085023,
  "abilityList": [
    "20085023_FarmRelicAbility_104315",
    "20085023_FarmRelicAbility_104314",
    "20085023_FarmRelicAbility_104313",
    "20085023_FarmRelicAbility_104312",
    "20085023_FarmRelicAbility_104311",
    "20085023_FarmRelicAbility_104310",
    "20085023_FarmRelicAbility_104309",
    "20085023_FarmRelicAbility_104308",
    "20085023_FarmRelicAbility_104307",
    "20085023_FarmRelicAbility_104306",
    "20085023_FarmRelicAbility_104305",
    "20085023_FarmRelicAbility_104304",
    "20085023_FarmRelicAbility_104303",
    "20085023_FarmRelicAbility_104302",
    "20085023_FarmRelicAbility_104301",
    "20085023_Modifiers"
  ],
  "abilityObject": {
    "20085023_FarmRelicAbility_104315": {
      "fileName": "20085023_FarmRelicAbility_104315",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923747614\">MFarmRelic_104315</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1118999312\">FarmRelicAbility_104315_Sub</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1128664963\">FarmRelicAbility_104315_TaskTemplate</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1128664963\">FarmRelicAbility_104315_TaskTemplate</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1128664963\">FarmRelicAbility_104315_TaskTemplate</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1887078258\">Standard_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1537044997\">Standard_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1969217848\">Standard_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-192876579\">Standard_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1410888443\">Standard_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"533883510\">Standard_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1176142950\">Standard_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary RES Reduction</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.15
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
          "for": "<a class=\"gModGreen\" id=\"mod__1923747614\">MFarmRelic_104315</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1118999312\">FarmRelicAbility_104315_Sub</a>",
                      "casterAssign": "TargetSelf"
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
    },
    "20085023_FarmRelicAbility_104314": {
      "fileName": "20085023_FarmRelicAbility_104314",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940525233\">MFarmRelic_104314</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-772982810\">MFarmRelic_104314_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_SummonCount) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddedRatio * MDF_SummonCount)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio",
                      "MDF_SummonCount"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each ally summon increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, current number of summons: <span class=\"descriptionNumberColor\">MDF_SummonCount</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940525233\">MFarmRelic_104314</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                    }
                  ]
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Owner Changed [Owner]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__739278249\">FarmRelicAbility_104314_Template</a>",
              "parse": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] + {{Battle Event List}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Memosprite"
                          },
                          {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "expectedType": "Summon"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SummonCount",
                          "value": {
                            "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_SummonCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_SummonCount"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-772982810\">MFarmRelic_104314_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_SummonCount": {
                      "operator": "Variables[0] (MDF_SummonCount) || RETURN",
                      "displayLines": "MDF_SummonCount",
                      "constants": [],
                      "variables": [
                        "MDF_SummonCount"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "20085023_FarmRelicAbility_104313": {
      "fileName": "20085023_FarmRelicAbility_104313",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1957302852\">MFarmRelic_104313</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__741582093\">MFarmRelic_104313_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
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
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || Variables[1] (DamageAddedRatio) || MUL || RETURN",
                    "displayLines": "(ModifierLayers * DamageAddedRatio)",
                    "constants": [],
                    "variables": [
                      "ModifierLayers",
                      "DamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">DamageAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "stackLimit": 10,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__55814789\">MFarmRelic_104313_HealTakenRatio</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"741582093\">MFarmRelic_104313_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "DamageAddedRatio": 0.06,
                    "MaxLayer": 10
                  }
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
                  "value": 0.3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1957302852\">MFarmRelic_104313</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"55814789\">MFarmRelic_104313_HealTakenRatio</a>"
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
    },
    "20085023_FarmRelicAbility_104312": {
      "fileName": "20085023_FarmRelicAbility_104312",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1974080471\">MFarmRelic_104312</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1290780977\">FarmRelicAbility_104312_Sub2</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 10,
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
          "for": "<a class=\"gModGreen\" id=\"mod__592903321\">FarmRelicAbility_104312_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_DamageTakenRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1974080471\">MFarmRelic_104312</a>",
          "execute": [
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"592903321\">FarmRelicAbility_104312_Sub</a>",
                      "valuePerStack": {
                        "MDF_DamageTakenRatio": 0.3
                      }
                    }
                  ]
                },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1290780977\">FarmRelicAbility_104312_Sub2</a>"
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
    },
    "20085023_FarmRelicAbility_104311": {
      "fileName": "20085023_FarmRelicAbility_104311",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1990858090\">MFarmRelic_104311</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1990858090\">MFarmRelic_104311</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-858410577\">Standard_EliteField_Elite</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageReduce": 0.6,
                        "MDF_DamageByRatio": 0.15
                      },
                      "casterAssign": "TargetSelf"
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
    },
    "20085023_FarmRelicAbility_104310": {
      "fileName": "20085023_FarmRelicAbility_104310",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2007635709\">MFarmRelic_104310</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2058515140\">MFarmRelic_104310_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-43160834\">Standard_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.5
                  }
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-43160834\">Standard_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2007635709\">MFarmRelic_104310</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1910965732\">Standard_StanceBreakAddedRatio</a>[<span class=\"descriptionNumberColor\">Weakness Break Efficiency Boost</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0.5
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2058515140\">MFarmRelic_104310_Sub</a>"
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
    },
    "20085023_FarmRelicAbility_104309": {
      "fileName": "20085023_FarmRelicAbility_104309",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1789379567\">MFarmRelic_104309</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_1 * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_1",
                      "_Layer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Layer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">MDF_1</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_2</span> time(s).",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-76327950\">MFarmRelic_104309_Sub</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Value SUM",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DOT_Layer",
                      "value": "STAT_DOT",
                      "valueType": "Amount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DOT_Layer",
                        "compareType": ">",
                        "value2": 5
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DOT_Layer",
                          "value": 5
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "Modifier_Layer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                          "multiplier": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Modifier_Layer",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DOT_Layer) || Variables[1] (Modifier_Layer) || SUB || RETURN",
                        "displayLines": "(DOT_Layer - Modifier_Layer)",
                        "constants": [],
                        "variables": [
                          "DOT_Layer",
                          "Modifier_Layer"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Value SUM",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DOT_Layer",
                      "value": "STAT_DOT",
                      "valueType": "Amount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DOT_Layer",
                        "compareType": ">",
                        "value2": 5
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DOT_Layer",
                          "value": 5
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "Modifier_Layer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                          "multiplier": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Modifier_Layer",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DOT_Layer) || Variables[1] (Modifier_Layer) || SUB || RETURN",
                        "displayLines": "(DOT_Layer - Modifier_Layer)",
                        "constants": [],
                        "variables": [
                          "DOT_Layer",
                          "Modifier_Layer"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1789379567\">MFarmRelic_104309</a>",
          "execute": [
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-76327950\">MFarmRelic_104309_Sub</a>"
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
    },
    "20085023_FarmRelicAbility_104308": {
      "fileName": "20085023_FarmRelicAbility_104308",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1772601948\">MFarmRelic_104308</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__789627689\">MFarmRelic_104308_Sub</a>",
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
                          "value": 0.5
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -0.15
                    }
                  ]
                }
              ]
            }
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -0.15
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1772601948\">MFarmRelic_104308</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"789627689\">MFarmRelic_104308_Sub</a>"
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
    },
    "20085023_FarmRelicAbility_104307": {
      "fileName": "20085023_FarmRelicAbility_104307",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1890045281\">MFarmRelic_104307</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1343540511\">MFarmRelic_104307_DOT</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": 3,
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": 1.5
                      },
                      "stackFlag": "Level"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1890045281\">MFarmRelic_104307</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Hardlevel_HP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "TempAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (TempAttack) || Constants[0] (93) || MUL || Variables[1] (Hardlevel_HP) || SUB || RETURN",
                    "displayLines": "((TempAttack * 93) - Hardlevel_HP)",
                    "constants": [
                      93
                    ],
                    "variables": [
                      "TempAttack",
                      "Hardlevel_HP"
                    ]
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1343540511\">MFarmRelic_104307_DOT</a>"
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
    },
    "20085023_FarmRelicAbility_104306": {
      "fileName": "20085023_FarmRelicAbility_104306",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1873267662\">MFarmRelic_104306</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1205325421\">MFarmRelic_104306_DamageAddedRatio</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": 0.75
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
          "for": "<a class=\"gModGreen\" id=\"mod__1873267662\">MFarmRelic_104306</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1205325421\">MFarmRelic_104306_DamageAddedRatio</a>"
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
    },
    "20085023_FarmRelicAbility_104305": {
      "fileName": "20085023_FarmRelicAbility_104305",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856490043\">MFarmRelic_104305</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1133771252\">MFarmRelic_104305_DamageAddedRatio</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageQuantum</span>&nbsp;",
                  "value": 0.75
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1856490043\">MFarmRelic_104305</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1133771252\">MFarmRelic_104305_DamageAddedRatio</a>"
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
    },
    "20085023_FarmRelicAbility_104304": {
      "fileName": "20085023_FarmRelicAbility_104304",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1839712424\">MFarmRelic_104304</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1027100945\">MFarmRelic_104304_DamageAddedRatio</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Additional DMG"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": 0.75
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": 0.75
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageDOT</span>&nbsp;",
                  "value": 0.75
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1839712424\">MFarmRelic_104304</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1027100945\">MFarmRelic_104304_DamageAddedRatio</a>"
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
    },
    "20085023_FarmRelicAbility_104303": {
      "fileName": "20085023_FarmRelicAbility_104303",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1957155757\">MFarmRelic_104303</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__463229890\">MFarmRelic_104303_DamageAddedRatio</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": 0.75
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Shield%</span>&nbsp;",
                  "value": 0.3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1957155757\">MFarmRelic_104303</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"463229890\">MFarmRelic_104303_DamageAddedRatio</a>"
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
    },
    "20085023_FarmRelicAbility_104302": {
      "fileName": "20085023_FarmRelicAbility_104302",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940378138\">MFarmRelic_104302</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1342550721\">MFarmRelic_104302_DamageAddedRatio</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageLightning</span>&nbsp;",
                  "value": 0.75
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940378138\">MFarmRelic_104302</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1342550721\">MFarmRelic_104302_DamageAddedRatio</a>"
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
    },
    "20085023_FarmRelicAbility_104301": {
      "fileName": "20085023_FarmRelicAbility_104301",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923600519\">MFarmRelic_104301</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1992918968\">MFarmRelic_104301_DamageAddedRatio</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamagePhysical</span>&nbsp;",
                  "value": 0.75
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1923600519\">MFarmRelic_104301</a>",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1992918968\">MFarmRelic_104301_DamageAddedRatio</a>"
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
    },
    "20085023_Modifiers": {
      "fileName": "20085023_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-299648287\">Standard_EliteField_Servant</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_DamageByRatio) || RETURN",
                    "displayLines": "MDF_DamageByRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageByRatio"
                    ]
                  }
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Reduces all DMG taken by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Upon defeat, a certain percentage of %CasterName's Max HP will be lost.",
          "type": "Buff",
          "effectName": "Fate's Convergence",
          "statusName": "Fate's Convergence"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-858410577\">Standard_EliteField_Elite</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
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
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-299648287\">Standard_EliteField_Servant</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    },
                    "MDF_DamageByRatio": {
                      "operator": "Variables[0] (MDF_DamageByRatio) || RETURN",
                      "displayLines": "MDF_DamageByRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageByRatio"
                      ]
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-299648287\">Standard_EliteField_Servant</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageReduce": {
                          "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                          "displayLines": "MDF_AllDamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageReduce"
                          ]
                        },
                        "MDF_DamageByRatio": {
                          "operator": "Variables[0] (MDF_DamageByRatio) || RETURN",
                          "displayLines": "MDF_DamageByRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageByRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageReduce",
            "MDF_DamageByRatio"
          ],
          "latentQueue": [],
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Causes other enemy targets to obtain \"Fate's Convergence.\"",
          "type": "Buff",
          "effectName": "Binding Obligation",
          "statusName": "Binding Obligation"
        }
      ],
      "references": []
    }
  }
}