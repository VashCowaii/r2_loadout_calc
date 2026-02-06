const configAbility = {
  "fileName": "-838314705_Modifiers",
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
      "for": "Enemy_W2_Cocolia_IF_DyingSound",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Cocolia_IF_SoundController",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
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
                    "compareType": "<=",
                    "value2": 4
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_DyingSound"
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
                    "compareType": "<=",
                    "value2": 4
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
                  "modifier": "Enemy_W2_Cocolia_IF_DyingSound"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Standard_MinionsTag_IF",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Monster_APShow"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Monster_APShow"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
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
                "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_TokenDMGAddRatioPerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_TokenDMGAddRatioPerLayer",
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">MDF_TokenDMGAddRatioPerLayer</span>.",
      "type": "Other",
      "statusName": "Nightmare of Battlegrounds",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "Summon02Flag"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "NewStartFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "FrenzeyInit"
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
                "value1": "_Layer",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
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
                      "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
                      "valuePerStack": {
                        "MDF_TokenDMGAddRatioPerLayer": {
                          "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || RETURN",
                          "displayLines": "MDF_TokenDMGAddRatioPerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_TokenDMGAddRatioPerLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Layer) || RETURN",
                        "displayLines": "_Layer",
                        "constants": [],
                        "variables": [
                          "_Layer"
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
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_StartActionDelay",
                  "value": {
                    "operator": "Variables[0] (MDF_FrenzyStartDelay) || RETURN",
                    "displayLines": "MDF_FrenzyStartDelay",
                    "constants": [],
                    "variables": [
                      "MDF_FrenzyStartDelay"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "FrenzeyInit"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "NewStartFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "NewStartFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_StartActionDelay",
                  "value": "ParamValue2"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "FrenzeyInit"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "_CurrentActionDelay",
              "value": "ParamValue2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Layer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxFrenzyLayer) || RETURN",
                  "displayLines": "MDF_MaxFrenzyLayer",
                  "constants": [],
                  "variables": [
                    "MDF_MaxFrenzyLayer"
                  ]
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CurrentActionDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_FrenzyIntervalDelay) || RETURN",
                      "displayLines": "MDF_FrenzyIntervalDelay",
                      "constants": [],
                      "variables": [
                        "MDF_FrenzyIntervalDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ThresholdActionDelay",
                      "value": {
                        "operator": "Variables[0] (MDF_FrenzyIntervalDelay) || Variables[1] (_CurrentActionDelay) || ADD || RETURN",
                        "displayLines": "(MDF_FrenzyIntervalDelay + _CurrentActionDelay)",
                        "constants": [],
                        "variables": [
                          "MDF_FrenzyIntervalDelay",
                          "_CurrentActionDelay"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Layer",
                      "value": {
                        "operator": "Variables[0] (_Layer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_Layer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team Unselectables}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
                      "valuePerStack": {
                        "MDF_TokenDMGAddRatioPerLayer": {
                          "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || RETURN",
                          "displayLines": "MDF_TokenDMGAddRatioPerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_TokenDMGAddRatioPerLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Layer) || RETURN",
                        "displayLines": "_Layer",
                        "constants": [],
                        "variables": [
                          "_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team Unselectables}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]",
                      "valuePerStack": {
                        "MDF_TokenDMGAddRatioPerLayer": {
                          "operator": "Variables[0] (MDF_TokenDMGAddRatioPerLayer) || RETURN",
                          "displayLines": "MDF_TokenDMGAddRatioPerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_TokenDMGAddRatioPerLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Layer) || RETURN",
                        "displayLines": "_Layer",
                        "constants": [],
                        "variables": [
                          "_Layer"
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
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "FrenzeyInit",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ThresholdActionDelay",
              "value": {
                "operator": "Variables[0] (_ThresholdActionDelay) || Variables[1] (_StartActionDelay) || ADD || RETURN",
                "displayLines": "(_ThresholdActionDelay + _StartActionDelay)",
                "constants": [],
                "variables": [
                  "_ThresholdActionDelay",
                  "_StartActionDelay"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Layer",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_Frenzy[<span class=\"descriptionNumberColor\">Nightmare of Battlegrounds</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_MinionsTag_IF"
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_SuperArmorBreak_Mark",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_MinionsSuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
      "modifierFlags": [
        "STAT_SuperArmorBreak",
        "STAT_AITargetKeepActionDelay"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "StanceBreakState_Effect"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "StanceBreakState_Effect"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "StanceBreakState_Effect"
                }
              ]
            }
          ]
        }
      ],
      "description": "Currently, %CasterName is in the \"Safeguard Breach\" state, this unit's DMG received increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Safeguard Breach",
      "statusName": "Safeguard Breach"
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_MinionsSuperArmor_MuteHitH_IF",
      "modifierFlags": [
        "MuteHitH"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
      "modifierFlags": [
        "STAT_SuperArmor"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": "Thin"
                      },
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LargeMonster",
                          "LargeAvatar",
                          "LargeFakeAvatar"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ]
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 5
                      }
                    ]
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                "displayLines": "MDF_AllDamageTypeResistance",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeResistance"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MinionsSuperArmor_MuteHitH_IF"
            }
          ]
        }
      ],
      "description": "Currently, %CasterName is in the \"Steadfast Safeguard\" state, this unit's DMG received decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistance</span>.",
      "type": "Buff",
      "effectName": "Steadfast Safeguard",
      "statusName": "Steadfast Safeguard"
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
      "modifierFlags": [
        "STAT_SuperArmorBreak",
        "STAT_AITargetKeepActionDelay"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "StanceBreakState_Effect"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "StanceBreakState_Effect"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "StanceBreakState_Effect"
                }
              ]
            }
          ]
        }
      ],
      "description": "Takes <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> more DMG. Dispels this effect when recovering from Weakness Break state.",
      "type": "Other",
      "effectName": "Safeguard Breach",
      "statusName": "Safeguard Breach"
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
      "modifierFlags": [
        "MuteHitH",
        "STAT_SuperArmor"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": "Thin"
                      },
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LargeMonster",
                          "LargeAvatar",
                          "LargeFakeAvatar"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ]
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 5
                      }
                    ]
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                "displayLines": "MDF_AllDamageTypeResistance",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeResistance"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistance</span>. This effect is removed when Weakness is Broken. When Weakness Broken, this unit has its action additionally delayed and takes increased DMG.",
      "type": "Other",
      "effectName": "Steadfast Safeguard",
      "statusName": "Steadfast Safeguard"
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_StrongChallengeEX_SuperArmorController_MultiNew",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Standard_MinionsTag_IF"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                  "displayLines": "MDF_IF_BOSS_Standard_Defence",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_Standard_Defence"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                  "displayLines": "MDF_IF_BOSS_Standard_Defence",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_Standard_Defence"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_SoundController"
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New",
              "parameters": {}
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi_New",
              "parameters": {}
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
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
            }
          ]
        },
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
                    "compareType": "<=",
                    "value2": 4
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
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
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
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Standard_MinionsSuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                      "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_WeaknessDMGUpRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Standard_MinionsSuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                      "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_WeaknessDMGUpRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi_New",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "priorityTag": "LevelPerformMonster",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "BOSS_BreakDelay_01": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_01) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay_01 * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay_01"
                      ]
                    },
                    "BOSS_BreakDelay_02": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_02) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay_02 * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay_02"
                      ]
                    },
                    "BOSS_BreakDelay_03": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_03) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay_03 * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay_03"
                      ]
                    },
                    "BOSS_BreakDelay_04": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_04) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay_04 * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay_04"
                      ]
                    },
                    "BOSS_BreakDelay_05": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay_05) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay_05 * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay_05"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
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
              "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Standard_SuperArmorBreak_Mark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Standard_MinionsSuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Standard_SuperArmorBreak_Mark"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
      "for": "Standard_StrongChallengeEX_SuperArmorController_Multi",
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
              "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                  "displayLines": "MDF_IF_BOSS_Standard_Defence",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_Standard_Defence"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_SoundController"
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi",
              "parameters": {}
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera_Multi",
              "parameters": {}
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
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
            }
          ]
        },
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
                    "compareType": "<=",
                    "value2": 4
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
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
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
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ActionDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Speed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "PushDelay",
                  "value": {
                    "operator": "Constants[0] (10) || Variables[0] (MDF_IF_BOSS_BreakDelay) || MUL || Variables[1] (_ActionDelay) || SUB || Constants[0] (10) || DIV || RETURN",
                    "displayLines": "(((10 * MDF_IF_BOSS_BreakDelay) - _ActionDelay) / 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "MDF_IF_BOSS_BreakDelay",
                      "_ActionDelay"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                      "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_WeaknessDMGUpRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak_Multi",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "priorityTag": "LevelPerformMonster",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "BOSS_BreakDelay": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
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
              "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Cocolia_IF_SuperArmorController",
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
              "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                  "displayLines": "MDF_IF_BOSS_Standard_Defence",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_Standard_Defence"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_SoundController"
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
              "parameters": {}
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_Camera",
              "parameters": {}
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
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
            }
          ]
        },
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
                    "compareType": "<=",
                    "value2": 4
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
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
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
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Standard_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Standard_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Standard_Defence"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ActionDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Speed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "PushDelay",
                  "value": {
                    "operator": "Constants[0] (10) || Variables[0] (MDF_IF_BOSS_BreakDelay) || MUL || Variables[1] (_ActionDelay) || SUB || Constants[0] (10) || DIV || RETURN",
                    "displayLines": "(((10 * MDF_IF_BOSS_BreakDelay) - _ActionDelay) / 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "MDF_IF_BOSS_BreakDelay",
                      "_ActionDelay"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                      "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_WeaknessDMGUpRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": -1,
                      "adjustmentType": "Advance"
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "LevelPerformMonster",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "BOSS_BreakDelay": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || Constants[0] (10) || MUL || RETURN",
                      "displayLines": "(MDF_IF_BOSS_BreakDelay * 10)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
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
              "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Cocolia_IF_SuperArmor_FakeBreak"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_BEMark_HP",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_BEMark_DispelCTRL",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_BEMark_SpeedUp"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_BEMark_ActionDelay",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_BEMark_BP",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_BEMark_SP",
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}