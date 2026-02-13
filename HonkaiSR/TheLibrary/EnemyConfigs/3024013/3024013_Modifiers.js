const configAbility = {
  "fileName": "3024013_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1220035238\">MModifier_Standard_IF_SetMaxBonusCount</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-28298755\">MModifier_W2_Argenti_IF_BattleAlert</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1220035238\">MModifier_Standard_IF_SetMaxBonusCount</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1220035238\">MModifier_Standard_IF_SetMaxBonusCount</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"529665307\">Enemy_W2_Argenti_IF_EX02_DefendState</a>[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<=",
                    "value2": 4,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel"
                    }
                  ]
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
                "modifier": "<a class=\"gModGreen\" id=\"12795323\">Enemy_W2_Argenti_IF_EX02_AttackState</a>[<span class=\"descriptionNumberColor\">Golden Harvest</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<=",
                    "value2": 4,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel"
                    }
                  ]
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
                "modifier": "<a class=\"gModGreen\" id=\"-1777994335\">Enemy_W2_Argenti_IF_EX02_UltraState</a>[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  "noTargetFound": [
                    {
                      "name": "Update Enemy InfoPanel"
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
                "name": "Skill Name",
                "skillName": "Skill11"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Defeat summoned enemies to dispel Toughness Protection",
                  "type": "Warning"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill12"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Attack the boss after defeating the Taunting unit",
                  "type": "Warning"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill13"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Stop summoned enemies from taking action to weaken the boss",
                  "type": "Warning"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Update Enemy InfoPanel"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1784319990\">Enemy_W2_Argenti_IF_EX_EnemyCount_Sub</a>[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddRatio) || Variables[1] (Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddRatio * Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddRatio",
                  "Layer"
                ]
              }
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
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span> and reduces DMG received by <span class=\"descriptionNumberColor\">MDF_TokenDMGRduceRatio</span>.",
      "type": "Buff",
      "statusName": "Stellar Aegis",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1397396521\">Enemy_W2_Argenti_IF_EX_EnemyCount</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2048079831\">EnemyCount_AddModifier</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"2048079831\">EnemyCount_AddModifier</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"2048079831\">EnemyCount_AddModifier</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2048079831\">EnemyCount_AddModifier</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1784319990\">Enemy_W2_Argenti_IF_EX_EnemyCount_Sub</a>[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1784319990\">Enemy_W2_Argenti_IF_EX_EnemyCount_Sub</a>[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__806413908\">Enemy_W2_Argenti_IF_EX_ExtraEnhanceController</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1868433770\">Enemy_W2_Argenti_IF_EX_ExtraPowerUpController</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1877378713\">Enemy_W2_Argenti_IF_EX_PowerController</a>",
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
                "value1": "MDF_IF_BOSS_PowerFlag01",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IF_BOSS_AllPowerFlag",
                  "value": {
                    "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_IF_BOSS_AllPowerFlag + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_IF_BOSS_AllPowerFlag"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IF_BOSS_PowerFlag01",
                  "value": 1
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"806413908\">Enemy_W2_Argenti_IF_EX_ExtraEnhanceController</a>"
              },
              "passed": [
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
                        "value2": 0.5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_IF_BOSS_PowerFlag02",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_AllPowerFlag",
                      "value": {
                        "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || RETURN",
                        "displayLines": "MDF_IF_BOSS_AllPowerFlag",
                        "constants": [],
                        "variables": [
                          "MDF_IF_BOSS_AllPowerFlag"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_PowerFlag02",
                      "value": 1
                    }
                  ]
                },
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
                        "value1": "MDF_IF_BOSS_PowerFlag03",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_AllPowerFlag",
                      "value": {
                        "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || Constants[0] (3) || ADD || RETURN",
                        "displayLines": "(MDF_IF_BOSS_AllPowerFlag + 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "MDF_IF_BOSS_AllPowerFlag"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_PowerFlag03",
                      "value": 1
                    }
                  ]
                },
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
                        "value2": 0.5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_IF_BOSS_PowerFlag04",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_AllPowerFlag",
                      "value": {
                        "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || RETURN",
                        "displayLines": "MDF_IF_BOSS_AllPowerFlag",
                        "constants": [],
                        "variables": [
                          "MDF_IF_BOSS_AllPowerFlag"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_PowerFlag04",
                      "value": 1
                    }
                  ]
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
                "modifier": "<a class=\"gModGreen\" id=\"-169910900\">Enemy_W2_Argenti_IF_EX_PowerAdd</a>"
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || RETURN",
                    "displayLines": "MDF_IF_BOSS_AllPowerFlag",
                    "constants": [],
                    "variables": [
                      "MDF_IF_BOSS_AllPowerFlag"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                              "invertCondition": true
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 2
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                          "valuePerStack": {
                            "MDF_LightPowerUp": {
                              "operator": "Variables[0] ({[Skill17[0]]}) || RETURN",
                              "displayLines": "{[Skill17[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill17[0]]}"
                              ]
                            },
                            "MDF_DamageAddedRatio": {
                              "operator": "Variables[0] ({[Skill17[1]]}) || RETURN",
                              "displayLines": "{[Skill17[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill17[1]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-169910900\">Enemy_W2_Argenti_IF_EX_PowerAdd</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1645398218\">Enemy_W2_Argenti_IF_EX_PowerAddMax</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                  "valuePerStack": {
                    "MDF_LightPowerUp": {
                      "operator": "Variables[0] ({[Skill17[0]]}) || RETURN",
                      "displayLines": "{[Skill17[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill17[0]]}"
                      ]
                    },
                    "MDF_DamageAddedRatio": {
                      "operator": "Variables[0] ({[Skill17[1]]}) || RETURN",
                      "displayLines": "{[Skill17[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill17[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1645398218\">Enemy_W2_Argenti_IF_EX_PowerAddMax</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1999138756\">Enemy_W2_Argenti_IF_EX_PowerUpLight</a>[<span class=\"descriptionNumberColor\">Soul Enhancement</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_LightPowerUp) || Variables[1] (Layer) || MUL || RETURN",
                "displayLines": "(MDF_LightPowerUp * Layer)",
                "constants": [],
                "variables": [
                  "MDF_LightPowerUp",
                  "Layer"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] (MDF_LightPowerUp) || RETURN",
                "displayLines": "MDF_LightPowerUp",
                "constants": [],
                "variables": [
                  "MDF_LightPowerUp"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Soul Enhancement",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1768656268\">Enemy_W2_Argenti_IF_EX_PowerUpDark</a>[<span class=\"descriptionNumberColor\">Regain Enhancement</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[Skill16[0]]}) || Variables[1] (Layer) || MUL || RETURN",
                "displayLines": "({[Skill16[0]]} * Layer)",
                "constants": [],
                "variables": [
                  "{[Skill16[0]]}",
                  "Layer"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] ({[Skill16[0]]}) || RETURN",
                "displayLines": "{[Skill16[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill16[0]]}"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Regain Enhancement",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1645398218\">Enemy_W2_Argenti_IF_EX_PowerAddMax</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-169910900\">Enemy_W2_Argenti_IF_EX_PowerAdd</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
      "stackType": "Multiple",
      "modifierFlags": [
        "STAT_SpeedUp",
        "Deathrattle",
        "KeepOnDeathrattle",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1914692042\">Enemy_W2_Argenti_IF_Power_Mute</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Monster_IF_InsertCount02",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "priorityTag": "MonsterBuffOthers_Elation",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
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
              "abilityName": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Camera_Sub"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part01_Assist"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part02_Assist"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                "displayLines": "MDF_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio"
                ]
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true,
              "toRemove": [
                "STAT_CTRL",
                "DisableAction",
                "Break"
              ]
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1869945151\">Enemy_W2_Argenti_IF_Power_Trigger</a>"
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1999138756\">Enemy_W2_Argenti_IF_EX_PowerUpLight</a>[<span class=\"descriptionNumberColor\">Soul Enhancement</span>]",
                      "valuePerStack": {
                        "MDF_LightPowerUp": {
                          "operator": "Variables[0] (MDF_LightPowerUp) || RETURN",
                          "displayLines": "MDF_LightPowerUp",
                          "constants": [],
                          "variables": [
                            "MDF_LightPowerUp"
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
        }
      ],
      "stackData": [
        "MDF_LightPowerUp",
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [
        "MDF_IF_BOSS_PowerFlag01",
        "MDF_IF_BOSS_PowerFlag02",
        "MDF_IF_BOSS_PowerFlag03",
        "MDF_IF_BOSS_PowerFlag04"
      ],
      "description": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
      "type": "Buff",
      "effectName": "Soulfreed",
      "statusName": "Soulfreed"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1869945151\">Enemy_W2_Argenti_IF_Power_Trigger</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1914692042\">Enemy_W2_Argenti_IF_Power_Mute</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-274903726\">Monster_W2_Argenti_IF_AccumulatePower</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1011475287\">W2_Argenti_BattleScore2</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
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
              "variableName": "W2_Argenti_00_BattleSore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Argenti_00_BattleSore2_Flag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "The Things I Do for Beauty",
                      "desc": "In the battle against Argenti, none of The Speartip, The Shield, and The Honored have entered the Soulfreed state",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
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
                  "scope": "TargetEntity",
                  "variableName": "W2_Argenti_00_BattleSore2_Flag",
                  "value": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__1174449239\">W2_ArgentiTotem_02_BattleScore1</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-444895536\">W2_ArgentiTotem_01_BattleScore1</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__64663457\">W2_ArgentiTotem_BattleScore1</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1028252906\">W2_Argenti_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"64663457\">W2_ArgentiTotem_BattleScore1</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-444895536\">W2_ArgentiTotem_01_BattleScore1</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1174449239\">W2_ArgentiTotem_02_BattleScore1</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "My Heart and Actions Are Utterly Unclouded",
                      "desc": "In the battle against Argenti, defeat The Speartip, The Shield, and The Honored while they are in the Soulfreed state",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2119201708\">Enemy__W2_Argenti_IF_NoWeakness</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                "displayLines": "MDF_DefenceAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DefenceAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-309668248\">Enemy_W2_Argenti_IF_Protect</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "=",
                "value2": 5,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2119201708\">Enemy__W2_Argenti_IF_NoWeakness</a>",
                  "valuePerStack": {
                    "MDF_DefenceAddedRatio": {
                      "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                      "displayLines": "MDF_DefenceAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DefenceAddedRatio"
                      ]
                    }
                  }
                }
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
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "<",
                "value2": 5,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2119201708\">Enemy__W2_Argenti_IF_NoWeakness</a>"
                },
                "Modifier Deletes Itself"
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
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "=",
                "value2": 5,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2119201708\">Enemy__W2_Argenti_IF_NoWeakness</a>",
                  "valuePerStack": {
                    "MDF_DefenceAddedRatio": {
                      "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                      "displayLines": "MDF_DefenceAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DefenceAddedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2119201708\">Enemy__W2_Argenti_IF_NoWeakness</a>"
                },
                "Modifier Deletes Itself"
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
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "<",
                "value2": 5,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2119201708\">Enemy__W2_Argenti_IF_NoWeakness</a>"
                },
                "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1247661801\">WEnemy_W2_Argenti_IF_DamageSplit_Ohters</a>",
      "stackType": "ReplaceByCaster",
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
                "name": "NOT",
                "condition": {
                  "name": "Is Joint-Attack",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              },
              "passed": [
                {
                  "name": "Share DMG Taken",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "selfSplit": 0.2,
                  "targetSplit": 0.8
                }
              ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__413160387\">WEnemy_W2_Argenti_IF_DamageSplit_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1247661801\">WEnemy_W2_Argenti_IF_DamageSplit_Ohters</a>",
                  "casterAssign": "CasterSelf"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1247661801\">WEnemy_W2_Argenti_IF_DamageSplit_Ohters</a>",
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1247661801\">WEnemy_W2_Argenti_IF_DamageSplit_Ohters</a>",
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1695625384\">Monster_W2_Argenti_IF_SuperArmorController</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                  "displayLines": "MDF_SuperArmorDamageResistance",
                  "constants": [],
                  "variables": [
                    "MDF_SuperArmorDamageResistance"
                  ]
                }
              }
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Stage Ability",
              "abilityName": "BattleEventAbility_IF_BOSS_Standard_BeingBreak",
              "parameters": {}
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
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_SuperArmorBreakActionDelay"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeTakenRatio": {
                  "operator": "Variables[0] (MDF_SuperArmorBreakDamageTakenRatio) || RETURN",
                  "displayLines": "MDF_SuperArmorBreakDamageTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_SuperArmorBreakDamageTakenRatio"
                  ]
                }
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
                    "value2": 4
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "abilityName": "BattleEventAbility_IF_BOSS_Standard_BeingBreak",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "BOSS_BreakDelay": 0
                  },
                  "allowAbilityTriggers": false
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                  "displayLines": "MDF_SuperArmorDamageResistance",
                  "constants": [],
                  "variables": [
                    "MDF_SuperArmorDamageResistance"
                  ]
                }
              }
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1909918465\">Enemy_W2_Argenti_IF_Summon_Enhance_Shield</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2029398801\">Enemy_W2_Argenti_IF_Summon_Enhance_Sword</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__899890368\">Monster_W2_Argenti_IF_FlowerTeam</a>",
      "stackType": "Replace",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Matching Team Count",
                    "countType": "Count3"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Matching Team Count",
                    "countType": "Count2"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Matching Team Count",
                    "countType": "Count1"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Matching Team Count"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1546767870\">Monster_W2_Argenti_IF_FlowerPower</a>[<span class=\"descriptionNumberColor\">Wreath</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "FlowerPower",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "FlowerPower",
              "context": "TargetEntity",
              "value": 1,
              "max": 100
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "FlowerPower",
              "value": 0
            }
          ]
        }
      ],
      "description": "Every stack additionally adds one instance of DMG dealt for Undeniable Fate.",
      "type": "Buff",
      "effectName": "Wreath",
      "statusName": "Wreath",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__787300501\">Enemy_W2_Argenti_IF_Boss_EnhanceByRecycle</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[Skill16[0]]}) || Variables[1] (Layer) || MUL || RETURN",
                "displayLines": "({[Skill16[0]]} * Layer)",
                "constants": [],
                "variables": [
                  "{[Skill16[0]]}",
                  "Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1334735657\">Enemy_W2_Argenti_IF_Boss_Enhance</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BreakMark",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "BreakMark",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BreakMark",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1817558624\">Argenti_KillAllMonsters</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BreakMark",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Monster_IF_InsertCount",
        "Monster_IF_InsertCameraFlag",
        "Monster_IF_InsertCount02",
        "Monster_IF_InsertCameraFlag02"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1295467555\">Monster_W2_Argenti_IF_Sword04</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Fire"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Ice"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Fire",
                  "value": -0.2
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Ice",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1379355650\">Monster_W2_Argenti_IF_Sword03</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Physical"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Imaginary"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Physical",
                  "value": -0.2
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Imaginary",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1396133269\">Monster_W2_Argenti_IF_Sword02</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Fire"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Ice"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Fire",
                  "value": -0.2
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Ice",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1345800412\">Monster_W2_Argenti_IF_Sword01</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Physical"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Imaginary"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Physical",
                  "value": -0.2
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Imaginary",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1702120198\">Monster_W2_Argenti_IF_SwordBase</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": []
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1867785861\">Monster_W2_Argenti_IF_Summon04</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1750342528\">Monster_W2_Argenti_IF_Summon03</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1767120147\">Monster_W2_Argenti_IF_Summon02</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1783897766\">Monster_W2_Argenti_IF_Summon01</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1888942295\">Monster_Argenti_Attack_Sign</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-401873404\">Monster_Standard_AllDamageReduce</a>",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The knight's prayers completely ascended the soul. This is regarded as equal to \"Soulfreed.\"",
      "type": "Buff",
      "effectName": "Soul Ascension",
      "statusName": "Soul Ascension"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
      "type": "Buff",
      "effectName": "Soulfreed",
      "statusName": "Soulfreed"
    }
  ],
  "references": []
}