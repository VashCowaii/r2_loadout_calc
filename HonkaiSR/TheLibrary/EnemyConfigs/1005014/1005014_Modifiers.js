const configAbility = {
  "fileName": "1005014_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__2040913929\">Monster_W1_CocoliaP2_IF_IcePower</a>",
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
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "valueType": "Layer",
                  "variableName": "DamageUpLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (DamageUpLayer) || RETURN",
                    "displayLines": "DamageUpLayer",
                    "constants": [],
                    "variables": [
                      "DamageUpLayer"
                    ]
                  }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_Confine"
                      }
                    ]
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
        "Cocolia_AICounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__155177783\">Monster_W1_CocoliaP2_IF_BOSS_PowerUp</a>",
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
                "operator": "Variables[0] (MDF_Cocolia_IF_BOSS_AllDamageReduce) || RETURN",
                "displayLines": "MDF_Cocolia_IF_BOSS_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_Cocolia_IF_BOSS_AllDamageReduce"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Cocolia_IF_BOSS_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_Cocolia_IF_BOSS_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_Cocolia_IF_BOSS_AllDamageTypeAddedRatio"
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
                "operator": "Variables[0] (MDF_Cocolia_IF_BOSS_SpeedAddedRatio) || RETURN",
                "displayLines": "MDF_Cocolia_IF_BOSS_SpeedAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_Cocolia_IF_BOSS_SpeedAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-805859015\">Enemy_W1_CocoliaP2_EnvironmentEffect_02</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"30904515\">Enemy_W1_CocoliaP2_IF_ImaginaryPhaseEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1981362800\">Enemy_W1_CocoliaP2_FinalPhase_SpeedUp</a>"
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
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_Cocolia_IF_BOSS_AllDamageReduce",
        "MDF_Cocolia_IF_BOSS_AllDamageTypeAddedRatio",
        "MDF_Cocolia_IF_BOSS_SpeedAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1347217799\">Monster_W1_CocoliaP2_IF_BOSS_Basic</a>",
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
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": 0.4
            }
          ]
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
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "=",
                    "value2": 1,
                    "livingTargets": true
                  }
                ]
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1386398687\">Monster_IF_BOSS_Standard_Weakness</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                "constants": [],
                "variables": [
                  "MDF_IF_BOSS_WeaknessDMGUpRatio"
                ]
              }
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
                "modifier": "<a class=\"gModGreen\" id=\"-678754407\">StageAbility_IF_Boss_WeakMark</a>",
                "invertCondition": true
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_IF_BOSS_WeaknessDMGUpRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_IF_BOSS_WeaknessDMGUpRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__842410926\">Monster_IF_BOSS_Standard_Defence</a>",
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
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__52) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__52",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__52"
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
      "for": "<a class=\"gModGreen\" id=\"mod__338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]",
      "description": "Takes <span class=\"descriptionNumberColor\">MDF_IF_BOSS_Common_Defence</span> less DMG. When Weakness is broken, action is additionally delayed by <span class=\"descriptionNumberColor\">MDF_IF_BOSS_BreakDelay</span> and takes <span class=\"descriptionNumberColor\">MDF_IF_BOSS_WeaknessDMGUpRatio</span> more DMG.",
      "type": "Other",
      "effectName": "Enhance",
      "statusName": "Mind Shadow"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"842410926\">Monster_IF_BOSS_Standard_Defence</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || RETURN",
                  "displayLines": "MDF_IF_BOSS_BreakDelay",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_BreakDelay"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                  "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_WeaknessDMGUpRatio"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] (MDF_IF_BOSS_Common_Defence) || RETURN",
                  "displayLines": "MDF_IF_BOSS_Common_Defence",
                  "constants": [],
                  "variables": [
                    "MDF_IF_BOSS_Common_Defence"
                  ]
                }
              }
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "BattleEventAbility_IF_BOSS_Standard_BeingBreak",
              "parameters": {}
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
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
                  "modifier": "<a class=\"gModGreen\" id=\"842410926\">Monster_IF_BOSS_Standard_Defence</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]",
                  "valuePerStack": {
                    "MDF_IF_BOSS_BreakDelay": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || RETURN",
                      "displayLines": "MDF_IF_BOSS_BreakDelay",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay"
                      ]
                    },
                    "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                      "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                      "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_WeaknessDMGUpRatio"
                      ]
                    },
                    "MDF_IF_BOSS_Standard_Defence": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Common_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Common_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Common_Defence"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"350611631\">MWMonster_Difficult_LimboMark</a>",
                    "invertCondition": true
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
                    "BOSS_BreakDelay": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || RETURN",
                      "displayLines": "MDF_IF_BOSS_BreakDelay",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay"
                      ]
                    }
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
                    "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"842410926\">Monster_IF_BOSS_Standard_Defence</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]",
                  "valuePerStack": {
                    "MDF_IF_BOSS_BreakDelay": {
                      "operator": "Variables[0] (MDF_IF_BOSS_BreakDelay) || RETURN",
                      "displayLines": "MDF_IF_BOSS_BreakDelay",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_BreakDelay"
                      ]
                    },
                    "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                      "operator": "Variables[0] (MDF_IF_BOSS_WeaknessDMGUpRatio) || RETURN",
                      "displayLines": "MDF_IF_BOSS_WeaknessDMGUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_WeaknessDMGUpRatio"
                      ]
                    },
                    "MDF_IF_BOSS_Standard_Defence": {
                      "operator": "Variables[0] (MDF_IF_BOSS_Common_Defence) || RETURN",
                      "displayLines": "MDF_IF_BOSS_Common_Defence",
                      "constants": [],
                      "variables": [
                        "MDF_IF_BOSS_Common_Defence"
                      ]
                    }
                  }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-936728969\">MModifier_CocoliaP2_IF_BattleAlert</a>",
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
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
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
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill02"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Defeat summoned enemies to weaken the boss",
                  "type": "Warning"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-772818912\">MModifier_CocoliaP1_IF_BattleAlert</a>",
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
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
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
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill02"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Defeat summoned enemies to weaken the boss",
                  "type": "Warning"
                }
              ]
            },
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
                  "name": "Update Enemy InfoPanel",
                  "text": "Inflict Weakness Break on Gepard to dispel Shield",
                  "type": "Warning"
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Update Enemy InfoPanel",
                  "text": "Inflict Weakness Break on Gepard to dispel Shield",
                  "type": "Warning"
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Shield",
                "invertCondition": true
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
                  "ifTargetFound": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat summoned enemies to weaken the boss",
                      "type": "Warning"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Update Enemy InfoPanel"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-691854564\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub02</a>[<span class=\"descriptionNumberColor\">Tenacious Resolve</span>]",
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
                "operator": "Constants[0] (1) || Variables[0] (MDF_TokenDamageAddRatio) || MUL || RETURN",
                "displayLines": "(1 * MDF_TokenDamageAddRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_TokenDamageAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_TokenDamageAddRatio</span>.",
      "type": "Debuff",
      "statusName": "Tenacious Resolve"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-641521707\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub01</a>[<span class=\"descriptionNumberColor\">Tenacious Resolve</span>]",
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
                "operator": "Variables[0] (MDF_TokenDamageReduceRatio) || RETURN",
                "displayLines": "MDF_TokenDamageReduceRatio",
                "constants": [],
                "variables": [
                  "MDF_TokenDamageReduceRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_TokenDamageReduceRatio</span>.",
      "type": "Buff",
      "statusName": "Tenacious Resolve"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1907872435\">WeaknessCount</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1907872435\">WeaknessCount</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1907872435\">WeaknessCount</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1907872435\">WeaknessCount</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "_WeaknessCount",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Fire"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Thunder"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Physical"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Wind"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Quantum"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Ice"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Imaginary"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeaknessCount",
                  "value": {
                    "operator": "Variables[0] (_WeaknessCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_WeaknessCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_WeaknessCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TotalRatioCount",
              "value": {
                "operator": "Variables[0] (MDF_TokenDamageReduceRatio) || Variables[1] (MDF_TokenDamageAddRatioPerlayer) || Variables[2] (_WeaknessCount) || MUL || SUB || RETURN",
                "displayLines": "(MDF_TokenDamageReduceRatio - (MDF_TokenDamageAddRatioPerlayer * _WeaknessCount))",
                "constants": [],
                "variables": [
                  "MDF_TokenDamageReduceRatio",
                  "MDF_TokenDamageAddRatioPerlayer",
                  "_WeaknessCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TotalRatioCount",
                "compareType": "NOT=",
                "value2": {
                  "operator": "Variables[0] (_PreTotalRatioCount) || RETURN",
                  "displayLines": "_PreTotalRatioCount",
                  "constants": [],
                  "variables": [
                    "_PreTotalRatioCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-641521707\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub01</a>[<span class=\"descriptionNumberColor\">Tenacious Resolve</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-691854564\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub02</a>[<span class=\"descriptionNumberColor\">Tenacious Resolve</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PreTotalRatioCount",
                  "value": {
                    "operator": "Variables[0] (_TotalRatioCount) || RETURN",
                    "displayLines": "_TotalRatioCount",
                    "constants": [],
                    "variables": [
                      "_TotalRatioCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TotalRatioCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-641521707\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub01</a>[<span class=\"descriptionNumberColor\">Tenacious Resolve</span>]",
                      "valuePerStack": {
                        "MDF_TokenDamageReduceRatio": {
                          "operator": "Variables[0] (_TotalRatioCount) || RETURN",
                          "displayLines": "_TotalRatioCount",
                          "constants": [],
                          "variables": [
                            "_TotalRatioCount"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TotalRatioCount",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-691854564\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub02</a>[<span class=\"descriptionNumberColor\">Tenacious Resolve</span>]",
                      "valuePerStack": {
                        "MDF_TokenDamageAddRatio": {
                          "operator": "Constants[0] (1) || INVERT || Variables[0] (_TotalRatioCount) || MUL || RETURN",
                          "displayLines": "(-1 * _TotalRatioCount)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "_TotalRatioCount"
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
      ],
      "stackData": [
        "MDF_TokenDamageReduceRatio",
        "MDF_TokenDamageAddRatioPerlayer"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-776077682\">Enemy_W2_CocoliaP2_IF_WeaknessSplit</a>",
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
              "valueList": []
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-263483217\">Enemy_W2_Cocolia_IF_Weakness_Wind</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"814286618\">Enemy_W2_Cocolia_IF_Weakness_Quantum</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1103725233\">Enemy_W2_Cocolia_IF_Weakness_Fire</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"673638889\">Enemy_W2_Cocolia_IF_Weakness_Thunder</a>"
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
                  "target": "{{Caster's Minions}}"
                },
                "compareType": "<=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-426543761\">Enemy_W1_CocoliaP2_IF_SplitWeakness_Show</a>[<span class=\"descriptionNumberColor\">Devious Metamorphosis</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-426543761\">Enemy_W1_CocoliaP2_IF_SplitWeakness_Show</a>[<span class=\"descriptionNumberColor\">Devious Metamorphosis</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (Ice_Lance_ID) || RETURN",
                  "displayLines": "Ice_Lance_ID",
                  "constants": [],
                  "variables": [
                    "Ice_Lance_ID"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1707572711\">Enemy_W2_CocoliaP2_IF_SummonDieA</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-822615197\">Enemy_W1_CocoliaP2_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (Ice_Lance_ID_2) || RETURN",
                  "displayLines": "Ice_Lance_ID_2",
                  "constants": [],
                  "variables": [
                    "Ice_Lance_ID_2"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1741127949\">Enemy_W2_CocoliaP2_IF_SummonDieC</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-822615197\">Enemy_W1_CocoliaP2_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (Ice_Lance_ID_3) || RETURN",
                  "displayLines": "Ice_Lance_ID_3",
                  "constants": [],
                  "variables": [
                    "Ice_Lance_ID_3"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1623684616\">Enemy_W2_CocoliaP2_IF_SummonDieD</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-822615197\">Enemy_W1_CocoliaP2_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (Ice_Lance_ID_4) || RETURN",
                  "displayLines": "Ice_Lance_ID_4",
                  "constants": [],
                  "variables": [
                    "Ice_Lance_ID_4"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1724350330\">Enemy_W2_CocoliaP2_IF_SummonDieB</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-822615197\">Enemy_W1_CocoliaP2_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1876053600\">Enemy_W2_Cocolia_IF_WeaknessSplit</a>",
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
              "valueList": []
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-263483217\">Enemy_W2_Cocolia_IF_Weakness_Wind</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"814286618\">Enemy_W2_Cocolia_IF_Weakness_Quantum</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1103725233\">Enemy_W2_Cocolia_IF_Weakness_Fire</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"673638889\">Enemy_W2_Cocolia_IF_Weakness_Thunder</a>"
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
                  "target": "{{Caster's Minions}}"
                },
                "compareType": "<=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1094163808\">Enemy_W1_CocoliaP1_IF_SplitWeakness_Show</a>[<span class=\"descriptionNumberColor\">Devious Metamorphosis</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1094163808\">Enemy_W1_CocoliaP1_IF_SplitWeakness_Show</a>[<span class=\"descriptionNumberColor\">Devious Metamorphosis</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (Ice_Lance_ID_2) || RETURN",
                  "displayLines": "Ice_Lance_ID_2",
                  "constants": [],
                  "variables": [
                    "Ice_Lance_ID_2"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-263483217\">Enemy_W2_Cocolia_IF_Weakness_Wind</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"814286618\">Enemy_W2_Cocolia_IF_Weakness_Quantum</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1280711081\">Enemy_W2_Cocolia_IF_SummonDieA</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-145483550\">Enemy_W1_CocoliaP1_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (Ice_Lance_ID) || RETURN",
                  "displayLines": "Ice_Lance_ID",
                  "constants": [],
                  "variables": [
                    "Ice_Lance_ID"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1103725233\">Enemy_W2_Cocolia_IF_Weakness_Fire</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"673638889\">Enemy_W2_Cocolia_IF_Weakness_Thunder</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1230378224\">Enemy_W2_Cocolia_IF_SummonDieB</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-145483550\">Enemy_W1_CocoliaP1_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-822615197\">Enemy_W1_CocoliaP2_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "A Weakness Type has been transferred from Annihilator of Desolation Mistral: Mother of Deception to this unit. The Weakness Type will be returned when this unit is defeated.",
      "type": "Other",
      "statusName": "Scapegoat of Sins"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-426543761\">Enemy_W1_CocoliaP2_IF_SplitWeakness_Show</a>[<span class=\"descriptionNumberColor\">Devious Metamorphosis</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "The Weakness Type has been transferred to Lance of the Eternal Freeze.",
      "type": "Other",
      "statusName": "Devious Metamorphosis"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-145483550\">Enemy_W1_CocoliaP1_IF_SplitWeakness_ShowSub</a>[<span class=\"descriptionNumberColor\">Scapegoat of Sins</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "A Weakness Type has been transferred from Annihilator of Desolation Mistral to this unit. The Weakness Type will be returned when this unit is defeated.",
      "type": "Other",
      "statusName": "Scapegoat of Sins"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1094163808\">Enemy_W1_CocoliaP1_IF_SplitWeakness_Show</a>[<span class=\"descriptionNumberColor\">Devious Metamorphosis</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "The Weakness Type has been transferred to Ice Edge.",
      "type": "Other",
      "statusName": "Devious Metamorphosis"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__673638889\">Enemy_W2_Cocolia_IF_Weakness_Thunder</a>",
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
              "valueList": [
                "Thunder"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1103725233\">Enemy_W2_Cocolia_IF_Weakness_Fire</a>",
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
              "valueList": [
                "Fire"
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
      "for": "<a class=\"gModGreen\" id=\"mod__814286618\">Enemy_W2_Cocolia_IF_Weakness_Quantum</a>",
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
              "valueList": [
                "Quantum"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-263483217\">Enemy_W2_Cocolia_IF_Weakness_Wind</a>",
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
              "valueList": [
                "Wind"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1623684616\">Enemy_W2_CocoliaP2_IF_SummonDieD</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1741127949\">Enemy_W2_CocoliaP2_IF_SummonDieC</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1724350330\">Enemy_W2_CocoliaP2_IF_SummonDieB</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1707572711\">Enemy_W2_CocoliaP2_IF_SummonDieA</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1230378224\">Enemy_W2_Cocolia_IF_SummonDieB</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1280711081\">Enemy_W2_Cocolia_IF_SummonDieA</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_Boss_Cocolia_IF_Weapon_Death_Part01_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_Boss_Cocolia_IF_Weapon_Death_Part02_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_Boss_Cocolia_IF_Weapon_Death_Camera_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_Boss_Cocolia_IF_Weapon_Death_Part01_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterDeathRattle",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__515238365\">Enemy_W2_Cocolia_IF_ReduceHealTakenRatio_PLY</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_HPHealReduceRatio) || MUL || RETURN",
                "displayLines": "(-1 * MDF_HPHealReduceRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_HPHealReduceRatio"
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
      "for": "<a class=\"gModGreen\" id=\"mod__293106177\">Enemy_W2_Cocolia_IF_ReduceHealTakenRatio</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"515238365\">Enemy_W2_Cocolia_IF_ReduceHealTakenRatio_PLY</a>",
              "stackLimit": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_HPHealReduceRatio": {
                  "operator": "Variables[0] (MDF_HPHealReduceRatio) || RETURN",
                  "displayLines": "MDF_HPHealReduceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPHealReduceRatio"
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
      "for": "<a class=\"gModGreen\" id=\"mod__222390491\">Enemy_W2_Cocolia_IF_ExtraStance</a>",
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
              "variableName": "_MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_MaxStance) || Variables[1] (MDF_ExtraStanceRatio) || MUL || RETURN",
                "displayLines": "(_MaxStance * MDF_ExtraStanceRatio)",
                "constants": [],
                "variables": [
                  "_MaxStance",
                  "MDF_ExtraStanceRatio"
                ]
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "addFlat": {
                "operator": "Variables[0] (_MaxStance) || Variables[1] (MDF_ExtraStanceRatio) || MUL || RETURN",
                "displayLines": "(_MaxStance * MDF_ExtraStanceRatio)",
                "constants": [],
                "variables": [
                  "_MaxStance",
                  "MDF_ExtraStanceRatio"
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
                "modifier": "<a class=\"gModGreen\" id=\"-1225888494\">Enemy_W2_Cocolia_IF_SummonDie</a>"
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
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1225888494\">Enemy_W2_Cocolia_IF_SummonDie</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ExtraStanceRatio",
        "MDF_StanceDMGPerTeamMate"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1225888494\">Enemy_W2_Cocolia_IF_SummonDie</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1783900265\">Enemy_W2_Cocolia_IF_ExtraFrozenDamageRatio</a>",
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
                "value": "Summon01Flag"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#Skill04_P4_FrozenDamagePerTurn",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraFrozenDamageRatio) || RETURN",
                    "displayLines": "MDF_ExtraFrozenDamageRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraFrozenDamageRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#Skill07_P1_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraFrozenDamageRatio) || RETURN",
                    "displayLines": "MDF_ExtraFrozenDamageRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraFrozenDamageRatio"
                    ]
                  }
                }
              ]
            },
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
                  "variableName": "#SkillP02_P2_Frozen_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraFrozenDamageRatio) || RETURN",
                    "displayLines": "MDF_ExtraFrozenDamageRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraFrozenDamageRatio"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ExtraFrozenDamageRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-294089461\">Enemy_W2_Cocolia_IF_NoWeakness</a>",
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
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1542024358\">Enemy_W2_Cocolia_IF_Protect</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"794422055\">NoBreakTeamMateCheck</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"794422055\">NoBreakTeamMateCheck</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"794422055\">NoBreakTeamMateCheck</a>"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"794422055\">NoBreakTeamMateCheck</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__794422055\">NoBreakTeamMateCheck</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-294089461\">Enemy_W2_Cocolia_IF_NoWeakness</a>"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-294089461\">Enemy_W2_Cocolia_IF_NoWeakness</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__225344728\">Monster_W1_CocoliaP1_IF_02_Revive</a>",
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
                "value1": "CurrentHP",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"366780116\">Enemy_W2_Cocolia_IF_SummonDeathrattle</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1982647452\">Enemy_W2_Yanqing_01_ChangePhaseDestroy</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1982647452\">Enemy_W2_Yanqing_01_ChangePhaseDestroy</a>"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  }
                },
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
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
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_CocoliaP1_IF_02_ChangePhase_Insert_Part03",
                          "priorityTag": "PROG_MonsterLowest",
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
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 4
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2038881084\">Monster_W1_CocoliaP1_IF_02_AccumulatePower</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1074608302\">Monster_W1_CocoliaP1_IF_02_SetMonsterPhase</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1853250756\">Enemy_W2_CocoliaPart_IF_WeaknessClear</a>",
      "stackType": "Refresh",
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
              "valueList": []
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__525621287\">W1_CocoliaP2_BattleScore1</a>",
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
              "variableName": "W1_CocoliaP2_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_CocoliaP2_BattleScore1_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Hot-Blooded",
                      "desc": "Defeat Cocolia, Mother of Deception, without any ally being Frozen at any point of the battle in Echo of War",
                      "rarity": "High"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL_Frozen"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_CocoliaP2_BattleScore1_Flag",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1786871953\">Enemy_W1_CocoliaP2_MarkPlayer10</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1780808632\">Enemy_W1_CocoliaP2_MarkPlayer10_Controller</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 8003,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Trailblazer - Preservation[M]"
                  },
                  {
                    "name": "Character ID",
                    "ID": 8004,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Trailblazer - Preservation[F]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1786871953\">Enemy_W1_CocoliaP2_MarkPlayer10</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Cocolia_AICounter",
        "Cocolia_Tips_Taunt"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__438243406\">MLevelEntity_Colossus_MainBattlePerform_SpecialActionAvatarMarker</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1317377468\">MLevelEntity_Colossus_MainBattlePerform_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 8003,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Trailblazer - Preservation[M]"
                  },
                  {
                    "name": "Character ID",
                    "ID": 8004,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Trailblazer - Preservation[F]"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "LevelEntity_Colossus_MainBattlePerform_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "LevelPerformAvatar",
                  "canHitNonTargets": true,
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
      "for": "<a class=\"gModGreen\" id=\"mod__377799243\">MLevelEntity_Colossus_MainBattlePerform</a>",
      "modifierFlags": [
        "STAT_ForceActionable"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "LevelEntity_Colossus_MainBattlePerform_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Colossus_Ability03_Camera_02"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "SpecialActionState"
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": 0.01
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"438243406\">MLevelEntity_Colossus_MainBattlePerform_SpecialActionAvatarMarker</a>"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1317377468\">MLevelEntity_Colossus_MainBattlePerform_Listener</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"438243406\">MLevelEntity_Colossus_MainBattlePerform_SpecialActionAvatarMarker</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1361193715\">Enemy_W1_CocoliaP2_SpinSpeedController</a>",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Cocolia_AICounter",
        "Cocolia_Tips_Taunt"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2030503230\">Enemy_W1_CocoliaP2_EnvironmentEffect_ALL</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Cocolia_AICounter",
        "Cocolia_Tips_Taunt"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-805859015\">Enemy_W1_CocoliaP2_EnvironmentEffect_02</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1052811320\">Enemy_W1_CocoliaP2_Ability10_Aiming</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
              }
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
                "target": "{{Caster}}"
              },
              "phase": "PhaseNormal"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Cocolia_AICounter",
              "value": 7
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Harbinger of Annihilation",
      "statusName": "Harbinger of Annihilation"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1444596959\">Enemy_W1_CocoliaP2_Weekly</a>",
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}