const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1005013,
  "trimCharacterName": 1005013,
  "abilityList": [
    "1005013_Modifiers",
    "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02",
    "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
    "1005013_Monster_W1_CocoliaP2_IF_PassiveAbilityInitiate",
    "1005013_Monster_W1_CocoliaP2_IF_AbilityP02",
    "1005013_Monster_W1_CocoliaP2_IF_Ability11_ChangePhase",
    "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part02",
    "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part01",
    "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part02",
    "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part01",
    "1005013_Monster_W1_CocoliaP2_Ability08_Part02",
    "1005013_Monster_W1_CocoliaP2_Ability08_Part01",
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02_Insert",
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Camera_Insert",
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02",
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01",
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert",
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Camera_Insert",
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02",
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01",
    "1005013_Monster_W1_CocoliaP2_Ability04_Part02",
    "1005013_Monster_W1_CocoliaP2_Ability04_Part01",
    "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part02",
    "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part01",
    "1005013_Monster_W1_CocoliaP2_Ability01_Part02",
    "1005013_Monster_W1_CocoliaP2_Ability01_Part01",
    "1005013_BattleEventAbility_IF_BOSS_Standard_BeingBreak",
    "1005013_LevelEntity_Colossus_MainBattlePerform_Insert",
    "1005013_Functions",
    "1005013_Handling"
  ],
  "abilityObject": {
    "1005013_Modifiers": {
      "fileName": "1005013_Modifiers",
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
          ]
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1386398687\">Monster_IF_BOSS_Standard_Weakness</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_IF_BOSS_WeaknessDMGUpRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
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
          ]
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
                      "priorityTag": "EnemyBattleCry",
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
          ]
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
          ]
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                      "priorityTag": "STAGE_Character",
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
              "eventTrigger": "Turn [Owner]: Action-End Phase",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1361193715\">Enemy_W1_CocoliaP2_SpinSpeedController</a>",
          "execute": [
            {
              "eventTrigger": "Being Limbo [Owner]"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2030503230\">Enemy_W1_CocoliaP2_EnvironmentEffect_ALL</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-805859015\">Enemy_W1_CocoliaP2_EnvironmentEffect_02</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
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
                  "name": "Change Entity Turn-State",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Harbinger of Annihilation",
          "statusName": "Harbinger of Annihilation",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1444596959\">Enemy_W1_CocoliaP2_Weekly</a>"
        }
      ],
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-313787691\">Enemy_W1_CocoliaP2_IF_Battle2Invisible</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_AbilityPerform01_Camera",
        "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
        "1005013_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02"
      ],
      "skillTrigger": "SkillPerform01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02"
        },
        "Deleted bullshit"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-313787691\">Enemy_W1_CocoliaP2_IF_Battle2Invisible</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-313787691\">Enemy_W1_CocoliaP2_IF_Battle2Invisible</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "1005013_Monster_W1_CocoliaP2_IF_PassiveAbilityInitiate": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_PassiveAbilityInitiate",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_IF_PassiveAbilityInitiate"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1347217799\">Monster_W1_CocoliaP2_IF_BOSS_Basic</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1203311995\">Monster_W1_CocoliaP2_IF_BOSS_SummonCount</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"525621287\">W1_CocoliaP2_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1069495639\">Enemy_W1_CocoliaP2_IF_RemoveOneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Cocolia_AICounter",
          "value": 1
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Cocolia_Tips_Taunt",
          "value": 1
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2030503230\">Enemy_W1_CocoliaP2_EnvironmentEffect_ALL</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1361193715\">Enemy_W1_CocoliaP2_SpinSpeedController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2040913929\">Monster_W1_CocoliaP2_IF_IcePower</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"896717086\">Enemy_W1_CocoliaP2_IF_AbilityShow</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__896717086\">Enemy_W1_CocoliaP2_IF_AbilityShow</a>",
          "latentQueue": [
            "Cocolia_AICounter",
            "Cocolia_Tips_Taunt"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill11"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1069495639\">Enemy_W1_CocoliaP2_IF_RemoveOneMore</a>",
          "execute": [
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3
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
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        }
                      ]
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__144674722\">Enemy_W1_CocoliaP2_ImaginaryAbilityTarget_Anti</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1203311995\">Monster_W1_CocoliaP2_IF_BOSS_SummonCount</a>",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Monster_W1_CocoliaP2_00_SummonCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 2
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
                  "variableName": "Monster_W1_CocoliaP2_00_SummonRecord",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    "1005013_Monster_W1_CocoliaP2_IF_AbilityP02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_AbilityP02",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_IF_AbilityP02"
      ],
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability11_ChangePhase": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability11_ChangePhase",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_IF_Ability11_ChangePhase"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "SkillPerform02",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-805859015\">Enemy_W1_CocoliaP2_EnvironmentEffect_02</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"30904515\">Enemy_W1_CocoliaP2_IF_ImaginaryPhaseEffect</a>"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "PhaseNormal"
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"155177783\">Monster_W1_CocoliaP2_IF_BOSS_PowerUp</a>",
                  "valuePerStack": {
                    "MDF_Cocolia_IF_BOSS_AllDamageReduce": {
                      "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
                      "displayLines": "{[Skill11[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill11[0]]}"
                      ]
                    },
                    "MDF_Cocolia_IF_BOSS_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
                      "displayLines": "{[Skill11[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill11[1]]}"
                      ]
                    },
                    "MDF_Cocolia_IF_BOSS_SpeedAddedRatio": {
                      "operator": "Variables[0] ({[Skill11[2]]}) || RETURN",
                      "displayLines": "{[Skill11[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill11[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"964527705\">Enemy_W1_CocoliaP2_PartController</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Cocolia_ChangePhase_InsertController"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__288944780\">Enemy_W1_CocoliaP2_IF_Instance_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1281903716\">Enemy_W1_CocoliaP2_IF_FinalPhase_SpeedUp</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedDelta) || RETURN",
                    "displayLines": "MDF_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedDelta"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__30904515\">Enemy_W1_CocoliaP2_IF_ImaginaryPhaseEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        }
      ]
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1052811320\">Enemy_W1_CocoliaP2_Ability10_Aiming</a>"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W1_CocoliaP2_00_SummonRecord",
          "value": 0
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseAim"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability10_Camera",
        "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part01",
        "1005013_Monster_W1_CocoliaP2_IF_Ability10_Part02"
      ],
      "skillTrigger": "Skill10",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1681589484\">Enemy_W1_CocoliaP2_Ability08_Charge</a>[<span class=\"descriptionNumberColor\">The Creation's Prelude</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill09[0]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "40%"
          }
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability09_Camera",
        "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part01",
        "1005013_Monster_W1_CocoliaP2_IF_Ability09_Extra_Part02"
      ],
      "skillTrigger": "Skill09",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability09_Extra_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_Ability08_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-689411232\">Enemy_W1_CocoliaP2_Ability08_Charge_Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1681589484\">Enemy_W1_CocoliaP2_Ability08_Charge</a>[<span class=\"descriptionNumberColor\">The Creation's Prelude</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-689411232\">Enemy_W1_CocoliaP2_Ability08_Charge_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1681589484\">Enemy_W1_CocoliaP2_Ability08_Charge</a>[<span class=\"descriptionNumberColor\">The Creation's Prelude</span>]",
          "description": "The next attack will cause Last Choir of Genesis to all targets.",
          "type": "Other",
          "effectName": "The Creation's Prelude",
          "statusName": "The Creation's Prelude",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "PhaseNormal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-689411232\">Enemy_W1_CocoliaP2_Ability08_Charge_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-689411232\">Enemy_W1_CocoliaP2_Ability08_Charge_Effect</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-689411232\">Enemy_W1_CocoliaP2_Ability08_Charge_Effect</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Cocolia_AICounter",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    "1005013_Monster_W1_CocoliaP2_Ability08_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_Ability08_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability08_Camera",
        "1005013_Monster_W1_CocoliaP2_Ability08_Part01",
        "1005013_Monster_W1_CocoliaP2_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseCharge"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02_Insert": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1000891728\">Enemy_W1_CocoliaP2_Instance_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1000891728\">Enemy_W1_CocoliaP2_Instance_DisableAction</a>"
        },
        {
          "name": "Use Operation"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
            "displayLines": "{[Skill07[1]]}",
            "constants": [],
            "variables": [
              "{[Skill07[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
              "displayLines": "{[Skill07[2]]}",
              "constants": [],
              "variables": [
                "{[Skill07[2]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"144674722\">Enemy_W1_CocoliaP2_ImaginaryAbilityTarget_Anti</a>"
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__455471882\">Enemy_W1_CocoliaP2_Confine</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                },
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
          ]
        }
      ]
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1667812127\">CocoliaP2_Position</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability07_Part02_Insert",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Camera_Insert": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability07_Camera_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1000891728\">Enemy_W1_CocoliaP2_Instance_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1000891728\">Enemy_W1_CocoliaP2_Instance_DisableAction</a>"
        },
        {
          "name": "Use Operation"
        },
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
            "displayLines": "{[Skill07[1]]}",
            "constants": [],
            "variables": [
              "{[Skill07[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
              "displayLines": "{[Skill07[2]]}",
              "constants": [],
              "variables": [
                "{[Skill07[2]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"144674722\">Enemy_W1_CocoliaP2_ImaginaryAbilityTarget_Anti</a>"
        },
        "Trigger: Attack End",
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
            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__455471882\">Enemy_W1_CocoliaP2_Confine</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                },
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
          ]
        }
      ]
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability07_Camera",
        "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01",
        "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02",
        "1005013_Monster_W1_CocoliaP2_IF_Ability07_Camera_Insert",
        "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
        "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part02_Insert"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1667812127\">CocoliaP2_Position</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1052811320\">Enemy_W1_CocoliaP2_Ability10_Aiming</a>"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
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
          "variableName": "_NotBreakCount",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break",
            "invertCondition": true
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
            "modifier": "<a class=\"gModGreen\" id=\"2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_NotBreakCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                    "displayLines": "{[SkillP02[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_7797) || RETURN",
                    "displayLines": "UnusedUnderThisBase_7797",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_7797"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                      "displayLines": "{[SkillP02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP02[1]]}"
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
                "value1": "_NotBreakCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                    "displayLines": "{[SkillP02[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_7786) || RETURN",
                    "displayLines": "UnusedUnderThisBase_7786",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_7786"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                      "displayLines": "{[SkillP02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP02[1]]}"
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
                "value1": "_NotBreakCount",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                    "displayLines": "{[SkillP02[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_7798) || RETURN",
                    "displayLines": "UnusedUnderThisBase_7798",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_7798"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                      "displayLines": "{[SkillP02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP02[1]]}"
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
                "value1": "_NotBreakCount",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                    "displayLines": "{[SkillP02[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_7799) || RETURN",
                    "displayLines": "UnusedUnderThisBase_7799",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_7799"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                      "displayLines": "{[SkillP02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP02[1]]}"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1667812127\">CocoliaP2_Position</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Camera_Insert": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability06_Camera_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1052811320\">Enemy_W1_CocoliaP2_Ability10_Aiming</a>"
        },
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "({[Skill06[0]]} * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": {
            "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
            "displayLines": "{[SkillP02[2]]}",
            "constants": [],
            "variables": [
              "{[SkillP02[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
            "displayLines": "{[SkillP02[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP02[0]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        },
        "Trigger: Attack End",
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
            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability06_Camera",
        "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01",
        "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02",
        "1005013_Monster_W1_CocoliaP2_IF_Ability06_Camera_Insert",
        "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
        "1005013_Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1667812127\">CocoliaP2_Position</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_Ability04_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_Ability04_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_Ability04_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability04_Camera",
        "1005013_Monster_W1_CocoliaP2_Ability04_Part01",
        "1005013_Monster_W1_CocoliaP2_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
            "value2": 1
          }
        },
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
            "value2": 1
          }
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
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_W1_CocoliaP2_00_SummonMonsterID01",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"765200134\">Enemy_W1_CocoliaP2_IF_Summon01</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_W1_CocoliaP2_00_SummonMonsterID02",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"748422515\">Enemy_W1_CocoliaP2_IF_Summon02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability02_Camera",
        "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part01",
        "1005013_Monster_W1_CocoliaP2_IF_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_Ability01_Part02": {
      "fileName": "1005013_Monster_W1_CocoliaP2_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1005013_Monster_W1_CocoliaP2_Ability01_Part01": {
      "fileName": "1005013_Monster_W1_CocoliaP2_Ability01_Part01",
      "childAbilityList": [
        "1005013_Monster_W1_CocoliaP2_Ability01_Camera",
        "1005013_Monster_W1_CocoliaP2_Ability01_Part01",
        "1005013_Monster_W1_CocoliaP2_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CocoliaP2_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1005013_BattleEventAbility_IF_BOSS_Standard_BeingBreak": {
      "fileName": "1005013_BattleEventAbility_IF_BOSS_Standard_BeingBreak",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Target__Toughness",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"842410926\">Monster_IF_BOSS_Standard_Defence</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"338689764\">Monster_IF_BOSS_Standard_BreakBonus_Show</a>[<span class=\"descriptionNumberColor\">Mind Shadow</span>]"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "advanceType": "Set",
              "multiAdd": "BOSS_BreakDelay"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1386398687\">Monster_IF_BOSS_Standard_Weakness</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "valuePerStack": {
                "MDF_IF_BOSS_WeaknessDMGUpRatio": 1
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "value": 120,
              "isFixed": "(Fixed)"
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 3,
              "adjustmentType": "+"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1005013_LevelEntity_Colossus_MainBattlePerform_Insert": {
      "fileName": "1005013_LevelEntity_Colossus_MainBattlePerform_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1317377468\">MLevelEntity_Colossus_MainBattlePerform_Listener</a>"
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1755008882\">Enemy_W1_CocoliaP2_Battle3LockHP</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Battle Event ID",
                "ID": 60001,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Colossus_Ability03_Pre",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Use Operation"
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Target has Extra-Turn Queued",
            "target": {
              "name": "Target Name",
              "target": "{{All Unselectable Targets}}"
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1005013_Functions": {
      "fileName": "1005013_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1667812127\">CocoliaP2_Position</a>",
          "parse": []
        }
      ],
      "references": []
    },
    "1005013_Handling": {
      "fileName": "1005013_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "W1_CocoliaP2_00_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill02",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill02",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill10",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AccumulateFlag",
                      "value": 1
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill10"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill02",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill06",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]",
                        "target": null
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 5
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AccumulateFlag",
                      "value": 0
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill06"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill02",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 12
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill11"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill07",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill07",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 12
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Monster_W1_CocoliaP2_00_SummonRecord",
                      "value": 0
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill07"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 11,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill08",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 13
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AccumulateFlag",
                      "value": 1
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill08"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 12,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill09",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 11
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AccumulateFlag",
                      "value": 0
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill09"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 13,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}