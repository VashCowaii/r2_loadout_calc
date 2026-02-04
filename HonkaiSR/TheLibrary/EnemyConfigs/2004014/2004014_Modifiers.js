const configAbility = {
  "fileName": "2004014_Modifiers",
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
      "for": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_Part03EnhanceEffect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_LowHP",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "value2": {
                      "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                      "displayLines": "MDF_LowHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_LowHPRatio"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
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
                  "variableName": "FinalPhase",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "FinalPhaseFirstCheck",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 0
                },
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
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LowHPRatio"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_MindControlCheck",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
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
                  "modifier": "Monster_W2_Kafka_RL_MindControlStanceResistance"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ShowHint04",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ShowHint04",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ShowHint04",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ShowHint04",
                      "value": 1
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
      "for": "Monster_W2_Kafka_RL_MindControlStanceResistance",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]",
      "modifierFlags": [
        "DispelPriorityHigh"
      ],
      "description": "Triggered at the next Revelation. Can be removed before that action.",
      "type": "Debuff",
      "effectName": "Psychological Suggestion",
      "statusName": "Psychological Suggestion"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]",
      "modifierFlags": [
        "DispelPriorityHigh"
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
              "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "ShowHint04"
      ],
      "description": "Cannot deal DMG to Kafka. Will become Dominated when the next \"Revelation\" occurs. Can be dispelled.",
      "type": "Debuff",
      "effectName": "Revelation",
      "statusName": "Psychological Suggestion Revelation"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]",
      "modifierFlags": [
        "DispelPriorityHigh",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BattleEventFlag",
        "MindControlCount",
        "ShowHint04",
        "FinalPhase"
      ],
      "description": "Triggered at the next Revelation. Can be removed before that action.",
      "type": "Debuff",
      "effectName": "Psychological Suggestion",
      "statusName": "Psychological Suggestion"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
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
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_MeleeAttack",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DamageUpFlag",
                "compareType": ">",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DamageUpFlag"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_ListenElectric",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "list": [
                      "Lightning"
                    ]
                  },
                  {
                    "name": "Is Joint-Attack",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MeleeAttack"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DamageUpFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
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
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_Power",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W2_Kafka_RL_ListenElectric",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                  "displayLines": "MDF_DamageUpRatio_PerLayer",
                  "constants": [],
                  "variables": [
                    "MDF_DamageUpRatio_PerLayer"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
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
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_RL_ListenElectric",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_ListenElectric",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
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
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_Ability04_Target",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_Pursuit",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
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
                    "value1": "PursuitCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_Endurance",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseChange"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_RL_PartController",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_Endurance"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_RL_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_Endurance"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_RL_PassiveAbility_Insert2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
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
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W3_Dinosaur_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Terrathorn</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag_IF",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Each hit of Bonepiercing Odium deals an additional instance of DMG. Each stack increases this instance of additional DMG.",
      "type": "Buff",
      "statusName": "Terrathorn",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W3_Dinosaur_MonsterAssistBonus",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Elite01_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Crystallite</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_XP_Elite01_01_AIFlag",
              "value": 1
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
                "modifier": "XP_Ice_Elite_Powerful_Modifier[<span class=\"descriptionNumberColor\">Freezing Point</span>]"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Increases the action delay effect for Everwinter Rain. This effect is stackable.",
      "type": "Buff",
      "statusName": "Crystallite",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Elite01_MonsterAssistBonus",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "XP_Elite_Fire_Ability07_AttackUp_Modifier[<span class=\"descriptionNumberColor\">Molten</span>]",
              "valuePerStack": {
                "Modifier_AttackAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
                  "displayLines": "UnusedUnderThisBase_27",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_27"
                  ]
                }
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
                "modifier": "XP_Fire_Elite_Burning_Modifier_2[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_MonsterAssist",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__19",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__19"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_XP_Elite01_Ability03_Part01_Assist"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_XP_Elite01_Ability03_Part02_Assist"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__21) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__21",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__21"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_XP_Elite01_01_Ability02_Part01_Assist"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_XP_Elite01_01_Ability02_Part02_Assist"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__20"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_Dinosaur_Ability06_Part01_Assist"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_Dinosaur_Ability06_Part02Crazy_Assist"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__22",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__22"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_Dinosaur_01_Ability04_Part01_Assist"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_Dinosaur_01_Ability04_Part02_Assist"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_MonsterAssistControl",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Kafka_IF03_MonsterAssist"
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
                  "modifier": "Monster_W2_Kafka_IF03_MonsterAssist"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_DoubleSpeed",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": 0.5
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_PartController",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AI_SkillIF01",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CD_SkillIF01",
                  "value": 1
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "Monster_W2_Kafka_IF03_Summon",
                  "variableName": "MDF_Wait",
                  "value": 2
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "Enemy_W2_Kafka_IF_AssistController",
                  "variableName": "MDF_DotCurCount",
                  "value": {
                    "operator": "Variables[0] ({[SkillIF01[3]]}) || RETURN",
                    "displayLines": "{[SkillIF01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillIF01[3]]}"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__19",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__19"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__21) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__21",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__21"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Kafka_IF_SummonDeathrattle"
                    },
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
                  "name": "Define Custom Variable",
                  "variableName": "MaxMinions",
                  "value": 4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxMinions_Left",
                  "value": 2
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxMinions_Right",
                  "value": 2
                },
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_Endurance"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Monster_W2_Kafka_IF03_Summon",
                      "variableName": "MDF_Wait",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_SkillIF01",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__20",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__20"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__22",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__22"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Kafka_IF_SummonDeathrattle"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_Summon",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Wait",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "Break",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Wait",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_SkillIF01",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Wait",
                      "value": {
                        "operator": "Variables[0] (MDF_Wait) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Wait + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Wait"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_Kafka_IF_SummonMonster_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_Kafka_IF_SummonMonster_P2_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Wait",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Wait",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AI_SkillIF01",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Wait",
                      "value": {
                        "operator": "Variables[0] (MDF_Wait) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Wait + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Wait"
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
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeTaken",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                "displayLines": "MDF_AllDamageTransferRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTransferRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeAdded",
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
                "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                "displayLines": "MDF_AllDamageTransferRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTransferRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]",
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
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real"
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
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real",
              "valuePerStack": {
                "MDF_AllDamageTransferRatio": {
                  "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                  "displayLines": "MDF_AllDamageTransferRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTransferRatio"
                  ]
                }
              }
            }
          ]
        }
      ],
      "description": "When not yet Weakness Broken, reduces DMG received by <span class=\"descriptionNumberColor\">MDF_AllDamageTransferRatio</span>. Upon taking action, this effect is equally distributed to other enemy units.",
      "type": "Buff",
      "statusName": "DMG Reduction Distribution"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real",
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
                "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                "displayLines": "MDF_AllDamageTransferRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTransferRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTransferRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
      "modifierFlags": [
        "KeepOnDeathrattle"
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
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeAdded"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeTaken"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "variableName": "MDF_CharCount",
              "livingTargets": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]",
              "valuePerStack": {
                "MDF_AllDamageTransferRatio": {
                  "operator": "Variables[0] (MDF_AllDamageTransferRatio) || Variables[1] (MDF_CharCount) || DIV || RETURN",
                  "displayLines": "(MDF_AllDamageTransferRatio / MDF_CharCount)",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTransferRatio",
                    "MDF_CharCount"
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]",
                "invertCondition": true,
                "includePreDeath": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]"
                }
              ]
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
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real"
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
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real",
              "valuePerStack": {
                "MDF_AllDamageTransferRatio": {
                  "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                  "displayLines": "MDF_AllDamageTransferRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTransferRatio"
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
      "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real",
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
                "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                "displayLines": "MDF_AllDamageTransferRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTransferRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTransferRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Standard_IF_AllDamageTransfer",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
              "valuePerStack": {
                "MDF_AllDamageTransferRatio": {
                  "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                  "displayLines": "MDF_AllDamageTransferRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTransferRatio"
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
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
                      ]
                    }
                  }
                }
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
                "name": "Modifier Was",
                "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce"
              },
              "passed": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                  "includeTargetsInLimbo": true,
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                      "valuePerStack": {
                        "MDF_AllDamageTransferRatio": {
                          "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                          "displayLines": "MDF_AllDamageTransferRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTransferRatio"
                          ]
                        }
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
      "name": "Modifier Construction",
      "for": "Enemy_W2_Kafka_IF_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_TokenDMGRduceRatio) || Variables[1] (Layer) || MUL || RETURN",
                "displayLines": "(MDF_TokenDMGRduceRatio * Layer)",
                "constants": [],
                "variables": [
                  "MDF_TokenDMGRduceRatio",
                  "Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases DMG received by <span class=\"descriptionNumberColor\">MDF_TokenDMGRduceRatio</span>. This effect is stackable.",
      "type": "Buff",
      "statusName": "Stellar Aegis",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Kafka_IF_EnemyCount",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "EnemyCount_AddModifier"
            }
          ]
        },
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "EnemyCount_AddModifier"
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "EnemyCount_AddModifier"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "EnemyCount_AddModifier",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "variableName": "_TeamNumber",
              "livingTargets": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TeamNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Enemy_W2_Kafka_IF_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
                  "valuePerStack": {
                    "MDF_DamageAddRatio": {
                      "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                      "displayLines": "MDF_ShowValue2",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue2"
                      ]
                    },
                    "MDF_TokenDMGRduceRatio": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_TeamNumber) || RETURN",
                    "displayLines": "_TeamNumber",
                    "constants": [],
                    "variables": [
                      "_TeamNumber"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShowValue1",
        "MDF_ShowValue2"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonKillBonus_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                "operator": "Variables[0] (MDF_KillBonus) || RETURN",
                "displayLines": "MDF_KillBonus",
                "constants": [],
                "variables": [
                  "MDF_KillBonus"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG increases by <span class=\"descriptionNumberColor\">MDF_KillBonus</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonKillBonus04[<span class=\"descriptionNumberColor\">Madden</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_KillBonus"
      ],
      "latentQueue": [],
      "description": "Enhanced by Boss Mirage, enters Charging state, and is dispelled upon being Weakness Broken.",
      "type": "Other",
      "effectName": "Madden",
      "statusName": "Madden"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonKillBonus03[<span class=\"descriptionNumberColor\">Madden</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "MModifier_Monster_W3_Dinosaur_Fury[<span class=\"descriptionNumberColor\">Boil</span>]"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_KillBonus"
      ],
      "latentQueue": [],
      "description": "Enhanced by Boss Mirage, enters Charging state, and is dispelled upon being Weakness Broken.",
      "type": "Other",
      "effectName": "Madden",
      "statusName": "Madden"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonKillBonus02[<span class=\"descriptionNumberColor\">Madden</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_KillBonus"
      ],
      "latentQueue": [],
      "description": "Enhanced by Boss Mirage, enters Freezing Point state, and is dispelled upon being Weakness Broken.",
      "type": "Other",
      "effectName": "Madden",
      "statusName": "Madden"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonKillBonus01[<span class=\"descriptionNumberColor\">Madden</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_KillBonus"
      ],
      "latentQueue": [],
      "description": "Enhanced by Boss Mirage, enters Spontaneous Combustion state, and is dispelled upon being Weakness Broken.",
      "type": "Other",
      "effectName": "Madden",
      "statusName": "Madden"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonKillBonus[<span class=\"descriptionNumberColor\">Madden</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "Enhanced by Boss Mirage, enters Special Attack mode, and is dispelled upon being Weakness Broken.",
      "type": "Other",
      "effectName": "Madden",
      "statusName": "Madden"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonHitDamageSplit",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "PartLoseHpValue"
                },
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                    "displayLines": "(0 - PartLoseHpValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PartLoseHpValue"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonWeak[<span class=\"descriptionNumberColor\">Rigidity</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Monster_W2_Kafka_IF03_SummonFenzy[<span class=\"descriptionNumberColor\">Sanguine Gaze</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_WeaknessAcross"
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
                "operator": "Variables[0] (MDF_WeakDMGReduceRatio) || RETURN",
                "displayLines": "MDF_WeakDMGReduceRatio",
                "constants": [],
                "variables": [
                  "MDF_WeakDMGReduceRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_WeakStatusProbReduceRatio) || MUL || RETURN",
                "displayLines": "(-1 * MDF_WeakStatusProbReduceRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_WeakStatusProbReduceRatio"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_Standard_IF_WeaknessAcross",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_WeakStanceSliceRatio) || RETURN",
                  "displayLines": "MDF_WeakStanceSliceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_WeakStanceSliceRatio"
                  ]
                }
              }
            }
          ]
        }
      ],
      "description": "Reduces DMG dealt by <span class=\"descriptionNumberColor\">MDF_WeakDMGReduceRatio</span> and decreases Effect Hit Rate by <span class=\"descriptionNumberColor\">MDF_WeakStatusProbReduceRatio</span>.",
      "type": "Debuff",
      "effectName": "Rigidity",
      "statusName": "Rigidity"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonFenzy[<span class=\"descriptionNumberColor\">Sanguine Gaze</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_FrenzyDMGTokenAddRatio) || RETURN",
                "displayLines": "MDF_FrenzyDMGTokenAddRatio",
                "constants": [],
                "variables": [
                  "MDF_FrenzyDMGTokenAddRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_FrenzySpeedAddRatio) || RETURN",
                "displayLines": "MDF_FrenzySpeedAddRatio",
                "constants": [],
                "variables": [
                  "MDF_FrenzySpeedAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_FrenzyDMGTokenAddRatio</span> and increases SPD by <span class=\"descriptionNumberColor\">MDF_FrenzySpeedAddRatio</span>.",
      "type": "Other",
      "effectName": "Sanguine Gaze",
      "statusName": "Sanguine Gaze"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonBreakShow[<span class=\"descriptionNumberColor\">Action delayed after Break</span>]",
      "description": "Action is additionally delayed after being Weakness Broken.",
      "type": "Other",
      "statusName": "Action delayed after Break"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonBreak",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDMGTokenAddRatio) || RETURN",
                "displayLines": "MDF_BreakDMGTokenAddRatio",
                "constants": [],
                "variables": [
                  "MDF_BreakDMGTokenAddRatio"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_BreakDelayRatio"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_SummonControl",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 3
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
                      "modifier": "Monster_W2_Kafka_IF03_SummonFenzy[<span class=\"descriptionNumberColor\">Sanguine Gaze</span>]",
                      "valuePerStack": {
                        "MDF_FrenzyDMGTokenAddRatio": {
                          "operator": "Variables[0] (MDF_FrenzyDMGTokenAddRatio) || RETURN",
                          "displayLines": "MDF_FrenzyDMGTokenAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_FrenzyDMGTokenAddRatio"
                          ]
                        },
                        "MDF_FrenzySpeedAddRatio": {
                          "operator": "Variables[0] (MDF_FrenzySpeedAddRatio) || RETURN",
                          "displayLines": "MDF_FrenzySpeedAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_FrenzySpeedAddRatio"
                          ]
                        },
                        "MDF_FrenzyStanceSliceRatio": {
                          "operator": "Variables[0] (MDF_FrenzyStanceSliceRatio) || RETURN",
                          "displayLines": "MDF_FrenzyStanceSliceRatio",
                          "constants": [],
                          "variables": [
                            "MDF_FrenzyStanceSliceRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
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
                    "compareType": "=",
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
                  "modifier": "Monster_W2_Kafka_IF03_SummonBreak",
                  "valuePerStack": {
                    "MDF_BreakDMGTokenAddRatio": {
                      "operator": "Variables[0] (MDF_BreakDMGTokenAddRatio) || RETURN",
                      "displayLines": "MDF_BreakDMGTokenAddRatio",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDMGTokenAddRatio"
                      ]
                    },
                    "MDF_BreakDelayRatio": {
                      "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                      "displayLines": "MDF_BreakDelayRatio",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDelayRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "OneMorePerTurn"
                }
              ]
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
                "modifier": "Enemy_W2_Cocolia_IF_SummonDie"
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
                    "value1": "Target__Toughness",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_StanceDMGPerTeamMate) || RETURN",
                        "displayLines": "MDF_StanceDMGPerTeamMate",
                        "constants": [],
                        "variables": [
                          "MDF_StanceDMGPerTeamMate"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W2_Cocolia_IF_SummonDie"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_WeakDMGReduceRatio",
        "MDF_WeakStatusProbReduceRatio",
        "MDF_WeakStanceSliceRatio",
        "MDF_BreakDMGTokenAddRatio",
        "MDF_BreakDelayRatio",
        "MDF_FrenzyDMGTokenAddRatio",
        "MDF_FrenzySpeedAddRatio",
        "MDF_FrenzyStanceSliceRatio",
        "MDF_StanceDMGPerTeamMate"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF03_Pursuit",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
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
                    "value1": "PursuitCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Electric"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Burn"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Target List}}"
                        },
                        "flagName": "STAT_DOT_Electric"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Target List}}"
                        },
                        "flagName": "STAT_DOT_Burn"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Target List}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
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
      "for": "Monster_W2_Kafka_IF02_Pursuit",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
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
                    "value1": "PursuitCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Part03WeaponEnhanceEffect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Part03EnhanceEffect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_LowHP",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "value2": {
                      "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                      "displayLines": "MDF_LowHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_LowHPRatio"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
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
                  "variableName": "FinalPhase",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 0
                },
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
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LowHPRatio"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_MindControlCheck",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
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
                  "modifier": "Monster_W2_Kafka_IF_MindControlStanceResistance"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF_MindControl_True"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF_MindControl_False"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ShowHint04",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                  },
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ShowHint04",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ShowHint04",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                  },
                  "noTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ShowHint04",
                      "value": 1
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
      "for": "Monster_W2_Kafka_IF_MindControlStanceResistance",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_MindControl_False",
      "modifierFlags": [
        "DispelPriorityHigh"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_MindControl_TrueEffect",
      "modifierFlags": [
        "DispelPriorityHigh"
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
              "modifier": "Monster_W2_Kafka_IF_MindControl_True"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "ShowHint04"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_MindControl_True",
      "modifierFlags": [
        "DispelPriorityHigh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MindControlCount",
        "ShowHint04",
        "FinalPhase"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_DamageUp",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
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
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_MeleeAttack",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DamageUpFlag",
                "compareType": ">",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DamageUpFlag"
                }
              ]
            }
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_ListenElectric",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "list": [
                      "Lightning"
                    ]
                  },
                  {
                    "name": "Is Joint-Attack",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MeleeAttack"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DamageUpFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
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
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Power",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W2_Kafka_IF_ListenElectric",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                  "displayLines": "MDF_DamageUpRatio_PerLayer",
                  "constants": [],
                  "variables": [
                    "MDF_DamageUpRatio_PerLayer"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF_ListenElectric",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_ListenElectric",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
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
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Ability04_Target",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Pursuit",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
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
                    "value1": "PursuitCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_Endurance",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseChange"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount",
        "AIFlag",
        "AI_SkillIF01",
        "CD_SkillIF01",
        "MDF_DotCurCount",
        "MaxMinions_Right",
        "InsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_PartController",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_Endurance"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_Endurance"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
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
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_HPRatioTriggerAOE",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextAbility",
              "variableName": "Kafka_AOEFlag",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextAbility",
              "variableName": "Kafka_HPExchangeFlag",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextAbility",
              "variableName": "Kafka_SummonFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_SummonControl",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "SummonCount"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Death [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_ContainJXDTag",
      "stackData": [],
      "latentQueue": [
        "MDF_HasTarget",
        "JustinBreak"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF_SummonRotation",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_P2ShieldBrokenTag"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_P2ShieldModifier",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                "displayLines": "MDF_CurrentCount",
                "constants": [],
                "variables": [
                  "MDF_CurrentCount"
                ]
              },
              "entityClass": "Enemy",
              "maximum": 6,
              "assignState": "True"
            },
            {
              "name": "Modify Weaknesses",
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
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 8032020,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Grunt: Security Personnel"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 8032010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Grunt: Field Personnel"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCount",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                    "displayLines": "MDF_CurrentCount",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 6
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "maximum": 6,
                      "assignState": "False"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF02_P2ShieldBrokenTag"
                    },
                    "Modifier Deletes Itself"
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
      "for": "Monster_W2_Kafka_IF02_PartController",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Battle Event ID",
                          "ID": 20005,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      }
                    ]
                  },
                  "advanceType": "Advance",
                  "multiAdd": -1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__24) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__24",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__24"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__25) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__25",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__25"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
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
                  "name": "Define Custom Variable",
                  "variableName": "MaxMinions",
                  "value": 4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxMinions_Left",
                  "value": 2
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxMinions_Right",
                  "value": 2
                },
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_Endurance"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
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
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag",
      "stackData": [],
      "latentQueue": [
        "MDF_HasTarget"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_SecondMonsterTag",
      "stackData": [],
      "latentQueue": [
        "MDF_Right",
        "MDF_Left"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_RightMonsterTag"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_LeftMonsterTag"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_BattleEventSummon",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_LoopCount",
              "value": {
                "operator": "Variables[0] (MaxMinions) || Variables[1] (MDF_PosL) || SUB || Variables[2] (MDF_PosR ) || SUB || RETURN",
                "displayLines": "((MaxMinions - MDF_PosL) - MDF_PosR )",
                "constants": [],
                "variables": [
                  "MaxMinions",
                  "MDF_PosL",
                  "MDF_PosR "
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_LoopCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_LoopCount) || RETURN",
                    "displayLines": "MDF_LoopCount",
                    "constants": [],
                    "variables": [
                      "MDF_LoopCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PosL",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MaxMinions_Left) || RETURN",
                          "displayLines": "MaxMinions_Left",
                          "constants": [],
                          "variables": [
                            "MaxMinions_Left"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__24) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__24",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__24"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PosL",
                          "value": {
                            "operator": "Variables[0] (MDF_PosL) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_PosL + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_PosL"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__25) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__25",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__25"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PosR",
                          "value": {
                            "operator": "Variables[0] (MDF_PosR ) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_PosR  + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_PosR "
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_RightMonsterTag"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Advance",
              "multiAdd": -1
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PosL",
                  "value": {
                    "operator": "Variables[0] (MDF_PosL) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_PosL - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_PosL"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PosR",
                  "value": {
                    "operator": "Variables[0] (MDF_PosR ) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_PosR  - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_PosR "
                    ]
                  }
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
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (MDF_PosR) || RETURN",
                  "displayLines": "MDF_PosR",
                  "constants": [],
                  "variables": [
                    "MDF_PosR"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "OneMorePerTurn"
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
      "for": "Monster_W2_Kafka_CharmTargetMark",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "PursuitCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_CharmMark",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_CharmOneAttack",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_CharmDisableAction",
      "modifierFlags": [
        "DisableAction"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_Charm[<span class=\"descriptionNumberColor\">Dominated</span>]",
      "stackType": "Refresh",
      "modifierFlags": [
        "STAT_CTRL",
        "AvatarBreak",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Dominated",
              "living": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W2_Kafka_CharmDisableAction"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Controlled Action [Owner]: Start",
          "execute": [
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
                    "name": "Target Filter",
                    "conditions": {
                      "name": "NOT",
                      "condition": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    }
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_CharmTargetMark"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                },
                {
                  "name": "Use Controlled Ability",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W2_Kafka_CharmTargetMark"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PursuitCheck"
            },
            "Reset Triggers: Attack"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        }
      ],
      "description": "Makes a single target unable to take action. Target will use Basic ATK to attack a random ally of theirs. If an ability is cast on the target to remove a debuff, the Dominated status will be removed first.",
      "type": "Debuff",
      "effectName": "Dominated",
      "statusName": "Dominated"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_CharmControl",
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Ability Hits",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target 2}}"
              },
              "variableName": "SkillMaxHit"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_15) || Variables[1] (SkillMaxHit) || DIV || RETURN",
                  "displayLines": "(UnusedUnderThisBase_15 / SkillMaxHit)",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_15",
                    "SkillMaxHit"
                  ]
                },
                "Toughness": null,
                "keepDMGType": true,
                "inheritTargetFrom": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                },
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            "Trigger: Attack End"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_EnhanceElectricMark",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_EnhanceElectricDamage",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Electric",
              "value": 1
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_Enhance",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_CharmTargetMark"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_CharmOneAttack"
                    }
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
                  "modifier": "Monster_W2_Kafka_CharmOneAttack"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W2_Kafka_CharmOneAttack"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_Pursuit",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PursuitCount",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
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
                    "value1": "PursuitCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PursuitCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "PursuitCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 10
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PursuitCount",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PursuitCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Is Current Ability Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "PursuitCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 10
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Count"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    }
  ],
  "references": []
}