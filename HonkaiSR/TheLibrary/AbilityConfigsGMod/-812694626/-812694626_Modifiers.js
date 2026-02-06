const configAbility = {
  "fileName": "-812694626_Modifiers",
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
      "for": "MLevel_BattleEventAbility_RogueMuteAll",
      "modifierFlags": [
        "Stealth",
        "MuteDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Other"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage08[<span class=\"descriptionNumberColor\">undefined</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                "displayLines": "MDF_StanceBreakTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_ActionDelayRatio"
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage07[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "StanceBreakState"
              },
              "failed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "dispelCount": 1
                }
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage06_1_BlockDamage[<span class=\"descriptionNumberColor\">undefined</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "BlockDamage",
        "MuteBreak"
      ],
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
          "eventTrigger": "Being Attacked End [Owner]",
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
      ],
      "useEntitySnapshot": true,
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage06[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "StanceBreakState"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MLevel_RougeSpecialStage06_1_BlockDamage[<span class=\"descriptionNumberColor\">undefined</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage05_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_AttackAddedRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage05[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "MLevel_RougeSpecialStage05_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]",
              "stackLimit": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_AttackAddedRatio_PerLayer": {
                  "operator": "Variables[0] (MDF_AttackAddedRatio_PerLayer) || RETURN",
                  "displayLines": "MDF_AttackAddedRatio_PerLayer",
                  "constants": [],
                  "variables": [
                    "MDF_AttackAddedRatio_PerLayer"
                  ]
                }
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage04_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage04[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "MLevel_RougeSpecialStage04_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]"
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": {
                    "operator": "Variables[0] (MDF_TurnCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_TurnCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_TurnCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TurnCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_Turn) || RETURN",
                  "displayLines": "MDF_Turn",
                  "constants": [],
                  "variables": [
                    "MDF_Turn"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MLevel_RougeSpecialStage04_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                      "displayLines": "MDF_AttackAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AttackAddedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage03_1_Speed[<span class=\"descriptionNumberColor\">undefined</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio_PerLayer",
                  "ModifierLayers"
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
      ],
      "description": "Missing Description",
      "type": "Buff",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage03[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "StanceBreakState"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MLevel_RougeSpecialStage03_1_Speed[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_SpeedAddedRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_SpeedAddedRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage02_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage02[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
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
                "value2": {
                  "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                  "displayLines": "MDF_HPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MLevel_RougeSpecialStage02_1_Attack[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                      "displayLines": "MDF_AttackAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AttackAddedRatio"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_RougeSpecialStage01_UnWeakResistance[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Weak to Current DMG Hit",
                "weakTo": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "MDF_AllDamageTypeResistance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_Stage20132_NatashaMission_FrozenResistance[<span class=\"descriptionNumberColor\">Blizzard Immunity</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL_Frozen",
              "value": 1
            }
          ]
        }
      ],
      "description": "Cannot be Frozen.",
      "type": "Buff",
      "statusName": "Blizzard Immunity"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_Stage2013202[<span class=\"descriptionNumberColor\">Fragmentum Energy Surge</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
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
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span> and DEF +<span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Fragmentum Energy Surge"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_Stage2013201_UnWeakResistance[<span class=\"descriptionNumberColor\">undefined</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Weak to Current DMG Hit",
                "weakTo": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "MDF_AllDamageTypeResistance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "MLevel_Stage20123201_LevelAllDamageReduce[<span class=\"descriptionNumberColor\">Wildfire Reinforcements</span>]",
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
      ],
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Wildfire Reinforcements"
    }
  ],
  "references": []
}