const configAbility = {
  "fileName": "Castorice_Castorice_PassiveAbility_1",
  "childAbilityList": [
    "Castorice_Castorice_PassiveAbility_1"
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
      "modifier": "<a class=\"gModGreen\" id=\"-197237378\">Castorice_Passive</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Contained Dark Tide"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"950021136\">Castorice_PointB1_HealTaxes</a>"
        },
        {
          "name": "Define Custom Variable",
          "scope": "AITag",
          "variableName": "OverHeal",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "AITag",
          "variableName": "OverHeal",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Inverted Torch"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"115720497\">Memosprite_Castorice_PointB2_OnListen</a>",
          "valuePerStack": {
            "Castorice_PointB2_HPRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "Castorice_PointB2_SpeedRatio": {
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
          "modifier": "<a class=\"gModGreen\" id=\"2083586529\">Castorice_Eidolon2_OnListenValueChange</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1698152191\">Castorice_Eidolon4_Listen</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"332176292\">Castorice_Eidolon6_OnListen</a>",
          "valuePerStack": {
            "MDF_QuantumPenetrate": {
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1345662684\">Castorice_RefreshMaxSpecialSPFlag</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Castorice_Passive_Count) || RETURN",
        "displayLines": "Castorice_Passive_Count",
        "constants": [],
        "variables": [
          "Castorice_Passive_Count"
        ]
      },
      "displaySubType": "Percent",
      "displayShowIcon": "False",
      "maximum": {
        "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
        "displayLines": "Castorice_Passive_MaxCount",
        "constants": [],
        "variables": [
          "Castorice_Passive_MaxCount"
        ]
      },
      "assignState": "True",
      "bar#": "Number"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__332176292\">Castorice_Eidolon6_OnListen</a>",
      "stackData": [
        "MDF_QuantumPenetrate"
      ],
      "latentQueue": [
        "OverHeal"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-459849199\">Castorice_Eidolon6_QuantumPenetrate</a>[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_QuantumPenetrate) || RETURN",
              "displayLines": "MDF_QuantumPenetrate",
              "constants": [],
              "variables": [
                "MDF_QuantumPenetrate"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-459849199\">Castorice_Eidolon6_QuantumPenetrate</a>[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_QuantumPenetrate) || RETURN",
              "displayLines": "MDF_QuantumPenetrate",
              "constants": [],
              "variables": [
                "MDF_QuantumPenetrate"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1698152191\">Castorice_Eidolon4_Listen</a>",
      "stackData": [],
      "latentQueue": [
        "OverHeal"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1861384440\">Castorice_Eidolon4_HealTakenRatio</a>[<span class=\"descriptionNumberColor\">Rest in Songs of Gloom</span>]",
          "aliveOnly": "False",
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
      "for": "<a class=\"gModGreen\" id=\"mod__958490815\">Castorice_Passive02_OnListenHPChange</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Castorice_AttackFlag",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeAddedRatio"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeAddedRatio"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeAddedRatio"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeAddedRatio"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            }
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
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1345662684\">Castorice_RefreshMaxSpecialSPFlag</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Castorice_RefreshMaxSpecialSPFlag",
              "value": 1
            }
          ],
          "priorityLevel": 10001
        }
      ],
      "stackData": [],
      "latentQueue": [
        "OverHeal"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-197237378\">Castorice_Passive</a>",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Switch to Action/Ability Context"
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 0,
              "adjustment": "Set",
              "ignoreBlock": true
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Castorice_RefreshMaxSpecialSPFlag",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2134704616\">Castorice_RefreshMaxSpecialSP</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "Current_LostHP"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-604294216\">Castorice_Ability03_Field</a>",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1401999190\">Castorice_AddSpecialSP</a>",
                          "variables": {
                            "_FixedAddValue": {
                              "operator": "Variables[0] (Current_LostHP) || INVERT || RETURN",
                              "displayLines": "-Current_LostHP",
                              "constants": [],
                              "variables": [
                                "Current_LostHP"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Memosprite}}"
                            },
                            "compareType": ">",
                            "value2": 0,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "variableName": "Passive_CastoriceServant_CurrentHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                            },
                            {
                              "name": "Set HP Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "setValue": {
                                "operator": "Variables[0] (Passive_CastoriceServant_CurrentHP) || Variables[1] (ABS) || Variables[2] (Current_LostHP) || PARAM_1 || FUNCTION || ADD || RETURN",
                                "displayLines": "(Passive_CastoriceServant_CurrentHP + &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(Current_LostHP))",
                                "constants": [],
                                "variables": [
                                  "Passive_CastoriceServant_CurrentHP",
                                  "ABS",
                                  "Current_LostHP"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Current_LostHP",
                      "value": 0
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Castorice_SkillMaze_Flag",
                    "compareType": "<=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1401999190\">Castorice_AddSpecialSP</a>",
                  "variables": {
                    "_FixedAddValue": {
                      "operator": "Variables[0] (Castorice_Passive_MaxCount) || Variables[1] (0.3) || MUL || RETURN",
                      "displayLines": "(Castorice_Passive_MaxCount * 0.3)",
                      "constants": [],
                      "variables": [
                        "Castorice_Passive_MaxCount",
                        0.3
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Leave Battle"
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Castorice_Passive_Count",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999999,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "Castorice_DeltaAdd"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-604294216\">Castorice_Ability03_Field</a>",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Castorice_Passive_Count) || RETURN",
                        "displayLines": "Castorice_Passive_Count",
                        "constants": [],
                        "variables": [
                          "Castorice_Passive_Count"
                        ]
                      },
                      "displaySubType": "Percent",
                      "displayShowIcon": "False",
                      "maximum": {
                        "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                        "displayLines": "Castorice_Passive_MaxCount",
                        "constants": [],
                        "variables": [
                          "Castorice_Passive_MaxCount"
                        ]
                      },
                      "assignState": "True",
                      "bar#": "Number"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_DeltaAdd",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-272315266\">Castorice_CheckCurrentSpecialSPChange</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-272315266\">Castorice_CheckCurrentSpecialSPChange</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2134704616\">Castorice_RefreshMaxSpecialSP</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "Castorice_TeamLevel",
              "value": 0
            },
            {
              "name": "Define Custom Variable with WorldLevel",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Castorice_WorldLevel"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Castorice_WorldLevel",
                "compareType": "<",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      {
                        "name": "Sort by Stat",
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
                        "living": true,
                        "sortByHighest": true
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "Castorice_Level",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Castorice_Passive_MaxCount",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (Castorice_Level) || Variables[1] (Castorice_Level) || MUL || Constants[0] (5.3125) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((Castorice_Level * Castorice_Level) * 5.3125))",
                        "constants": [
                          5.3125
                        ],
                        "variables": [
                          "FLOOR",
                          "Castorice_Level"
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_Passive_MaxCount",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Constants[0] (80) || Constants[0] (80) || MUL || Constants[1] (5.3125) || MUL || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((80 * 80) * 5.3125))",
                    "constants": [
                      80,
                      5.3125
                    ],
                    "variables": [
                      "FLOOR"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Castorice_Passive_MaxCount",
                "compareType": "<=",
                "value2": 2000
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_Passive_MaxCount",
                  "value": 2000
                }
              ]
            },
            {
              "name": "Update Character Data Entry",
              "energyCost": {
                "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                "displayLines": "Castorice_Passive_MaxCount",
                "constants": [],
                "variables": [
                  "Castorice_Passive_MaxCount"
                ]
              },
              "skills": [
                {
                  "name": "Skill Data Entry",
                  "skillTrigger": "Skill03",
                  "energyCost": {
                    "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                    "displayLines": "Castorice_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_MaxCount"
                    ]
                  },
                  "parameters": {
                    "5": {
                      "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                      "displayLines": "Castorice_Passive_MaxCount",
                      "constants": [],
                      "variables": [
                        "Castorice_Passive_MaxCount"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill03"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Energy Cost",
                  "propertyAction": "Remove",
                  "value": {
                    "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                    "displayLines": "Castorice_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_MaxCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                "displayLines": "Castorice_Passive_MaxCount",
                "constants": [],
                "variables": [
                  "Castorice_Passive_MaxCount"
                ]
              },
              "isRefresh": true
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Passive_CastoriceServant_CurrentSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Passive_CastoriceServant_CurrentExtraSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Castorice_Passive_Count",
              "value": {
                "operator": "Variables[0] (Passive_CastoriceServant_CurrentSpecialSP) || Variables[1] (Passive_CastoriceServant_CurrentExtraSpecialSP) || ADD || RETURN",
                "displayLines": "(Passive_CastoriceServant_CurrentSpecialSP + Passive_CastoriceServant_CurrentExtraSpecialSP)",
                "constants": [],
                "variables": [
                  "Passive_CastoriceServant_CurrentSpecialSP",
                  "Passive_CastoriceServant_CurrentExtraSpecialSP"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-604294216\">Castorice_Ability03_Field</a>",
                "invertCondition": true,
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "maximum": {
                    "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                    "displayLines": "Castorice_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_MaxCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-272315266\">Castorice_CheckCurrentSpecialSPChange</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "Castorice_ChangeValue"
            },
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_Passive_Count",
              "value": {
                "operator": "Variables[0] (Castorice_ChangeValue) || Variables[1] (Castorice_Passive_Count) || ADD || RETURN",
                "displayLines": "(Castorice_ChangeValue + Castorice_Passive_Count)",
                "constants": [],
                "variables": [
                  "Castorice_ChangeValue",
                  "Castorice_Passive_Count"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "skipWhenMindControlled": false,
              "variableName": "Castorice_ChangeValue",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"958490815\">Castorice_Passive02_OnListenHPChange</a>",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"445281600\">Castorice_LoseHPPreShow</a>",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PreShowMaxHP": 0,
            "MDF_PreShowCurrentHP": 0,
            "MDF_LoseHPRatio01": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_LoseHPRatio02": {
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
    }
  ]
}