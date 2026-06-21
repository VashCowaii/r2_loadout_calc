const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20006,
  "trimCharacterName": 20006,
  "abilityList": [
    "20006_Modifiers",
    "20006_BattleEventAbility_Monster_W1_Gepard_IF_03_SwitchTimer"
  ],
  "abilityObject": {
    "20006_Modifiers": {
      "fileName": "20006_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__514811508\">Enemy_W1_Gepard_IF_03_Part2EnhanceInti</a>",
          "stackType": "Refresh",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7848) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7848",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7848"
                          ]
                        },
                        "MDF_AttackUpPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7867) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7867",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7867"
                          ]
                        }
                      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__2141633429\">Monster_W1_Gepard_IF_03_PartController</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "Gepard_LimboFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Level Entity}}"
                            },
                            "value1": "Bronya_LimboFlag",
                            "compareType": "=",
                            "value2": 1
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
                                "value1": "InsertCheck",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Set Enemy Phase",
                                  "mode": "Inc"
                                },
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Dispel Debuffs",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "silent": true
                                },
                                {
                                  "name": "Set Enemy Phase",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "mode": "Inc"
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{All Team Members(Exclude Self)}}"
                                  },
                                  "searchRandom": true,
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": {
                                      "operator": "Variables[0] (SummonID01) || RETURN",
                                      "displayLines": "SummonID01",
                                      "constants": [],
                                      "variables": [
                                        "SummonID01"
                                      ]
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": null
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Force Entity Death",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_Insert",
                                  "priorityTag": "EnemyPhaseChange",
                                  "ownerState": "Mask_AliveOrLimbo",
                                  "targetState": "Mask_AliveOrLimbo",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "InsertCheck",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Set HP Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "setValue": 1
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "Lock HP",
                                  "threshold": 0.0009999999,
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "conditionActive": {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Sequence",
                                    "Sequence": [
                                      {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "Shuffle Targets",
                                      {
                                        "name": "Return Target",
                                        "value": 1
                                      }
                                    ]
                                  },
                                  "priorityTag": "EnemyChangeState",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Gepard_LimboFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "Shuffle Targets",
                              {
                                "name": "Return Target",
                                "value": 1
                              }
                            ]
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1559306113\">Enemy_W1_Gepard_IF_03_WeaknessProtect</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "AllType"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
          "stackType": "Replace",
          "stackData": [
            "MDF_SpeedUpPerLayer",
            "MDF_AttackUpPerLayer"
          ],
          "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpPerLayer</span> and ATK by <span class=\"descriptionNumberColor\">MDF_AttackUpPerLayer</span>. All stacks are lost when Weakness is broken.",
          "type": "Buff",
          "effectName": "Enhance",
          "statusName": "Will of Steel",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7852) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7852",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7852"
                          ]
                        },
                        "MDF_AttackUpPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7851) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7851",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7851"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7848) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7848",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7848"
                          ]
                        },
                        "MDF_AttackUpPerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_7867) || RETURN",
                          "displayLines": "UnusedUnderThisBase_7867",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_7867"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_SpeedUpPerLayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpPerLayer",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUpPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_AttackUpPerLayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUpPerLayer",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1430608043\">Enemy_W1_Gepard_IF_03_Enhance</a>[<span class=\"descriptionNumberColor\">Thick and Thin</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Greatly enhances this unit, increasing SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUp</span>. When in this state, Frigid Waterfall has a slight chance to Freeze the attacked target.",
          "type": "Buff",
          "effectName": "Enhance",
          "statusName": "Thick and Thin",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                    "displayLines": "MDF_SpeedUp",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUp"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]",
          "modifierFlags": [
            "DisableHealHP",
            "DisableAction",
            "MuteSpeed"
          ],
          "latentQueue": [
            "Gepard_LimboFlag"
          ],
          "description": "Enters Downed state, waiting for recovery.",
          "type": "Other",
          "effectName": "Downed",
          "statusName": "Valor Via Setbacks",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1241486816\">Enemy_W1_Gepard_IF_03_ListenBeingAttacked</a>",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1584296027\">Enemy_W1_Gepard_IF_03_BlockDamage</a>"
                    }
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ReturnAttackCounter",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1584296027\">Enemy_W1_Gepard_IF_03_BlockDamage</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ReturnAttackCounter",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Gepard_IF_03_Ability04_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1584296027\">Enemy_W1_Gepard_IF_03_BlockDamage</a>",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "BlockDamageExcludeDot",
            "MuteBreak"
          ],
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
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
        }
      ],
      "references": []
    },
    "20006_BattleEventAbility_Monster_W1_Gepard_IF_03_SwitchTimer": {
      "fileName": "20006_BattleEventAbility_Monster_W1_Gepard_IF_03_SwitchTimer",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Delay",
          "multiAdd": 0.5
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1645184672\">Modifier_BattleEventAbility_Monster_W1_Gepard_IF_03_SwitchTimer</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1095610784\">Modifier_BattleEventAbility_Monster_W1_Gepard_IF_03_DelayModify</a>",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1645184672\">Modifier_BattleEventAbility_Monster_W1_Gepard_IF_03_SwitchTimer</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "isMainAttack",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_Switch",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_Switch",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -12
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "Bronya_LimboFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "Gepard_LimboFlag",
                        "compareType": "=",
                        "value2": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1095610784\">Modifier_BattleEventAbility_Monster_W1_Gepard_IF_03_DelayModify</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1095610784\">Modifier_BattleEventAbility_Monster_W1_Gepard_IF_03_DelayModify</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}