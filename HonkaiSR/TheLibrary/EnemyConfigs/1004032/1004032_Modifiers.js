const configAbility = {
  "fileName": "1004032_Modifiers",
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
      "for": "Monster_W1_Bronya_IF_02_PartController",
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
                    "modifier": "Monster_W1_Gepard_IF_03_PartController"
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
                      "modifier": "Enemy_IF_LimboMark[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Bronya_LimboFlag",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "MoreOneMorePerTurn"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "Gepard_LimboFlag",
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
                              "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_Insert",
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
                              "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_EnhanceSwitch",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "priorityTag": "MonsterChangeState",
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
                  "variableName": "Bronya_LimboFlag",
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
                    "modifier": "Monster_W1_Gepard_IF_03_PartController"
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
                      "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_EnhanceSwitch",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "MonsterChangeState",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_IF_02_Part2EnhanceInti",
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
                  "modifier": "Enemy_W1_Bronya_IF_02_EnhancePerTurn[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                      "displayLines": "{[SkillP04[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[2]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                      "displayLines": "{[SkillP04[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[3]]}"
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
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "PhaseFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_IF_02_AssistantSpeed[<span class=\"descriptionNumberColor\">Defense</span>]",
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
                "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedDownRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_SpeedDownRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_SpeedDownRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedDownRatio"
      ],
      "latentQueue": [
        "Gepard_LimboFlag",
        "Bronya_LimboFlag",
        "isMainAttack",
        "AIFlag",
        "PhaseFlag"
      ],
      "description": "Decreases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedDownRatio</span> when the character is in Support mode.",
      "type": "Other",
      "statusName": "Defense"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_IF_02_WeaknessProtect",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_IF_02_MainHaloEffect[<span class=\"descriptionNumberColor\">Charge</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]"
        },
        {
          "eventTrigger": "Action End [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Gepard_LimboFlag",
        "Bronya_LimboFlag",
        "isMainAttack",
        "AIFlag",
        "PhaseFlag"
      ],
      "description": "The character is currently in the Main attack state.",
      "type": "Other",
      "effectName": "Main Attack",
      "statusName": "Charge"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_IF_02_EnhancePerTurn[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
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
                  "modifier": "Enemy_W1_Bronya_IF_02_EnhancePerTurn[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                      "displayLines": "{[SkillP04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[0]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                      "displayLines": "{[SkillP04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[1]]}"
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
                  "modifier": "Enemy_W1_Bronya_IF_02_EnhancePerTurn[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                      "displayLines": "{[SkillP04[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[2]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                      "displayLines": "{[SkillP04[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[3]]}"
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
      ],
      "stackData": [
        "MDF_SpeedUpPerLayer",
        "MDF_AttackUpPerLayer"
      ],
      "latentQueue": [
        "PhaseFlag",
        "AIFlag"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpPerLayer</span> and ATK by <span class=\"descriptionNumberColor\">MDF_AttackUpPerLayer</span>. All stacks are lost when Weakness is broken.",
      "type": "Buff",
      "effectName": "Enhance",
      "statusName": "Carried By Inertia",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_IF_02_Enhance[<span class=\"descriptionNumberColor\">Shared Hatred</span>]",
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
      ],
      "stackData": [
        "MDF_SpeedUp"
      ],
      "latentQueue": [
        "PhaseFlag"
      ],
      "description": "Greatly enhances this unit, increasing SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUp</span>. When in this state, Bronya can summon even more Silvermane Cannoneers.",
      "type": "Buff",
      "effectName": "Enhance",
      "statusName": "Shared Hatred"
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_BattleScore2",
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
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Gepard_BattleScore2_Flag"
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
                    "name": "Character ID",
                    "ID": 1101,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Bronya"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": []
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
      "for": "Bronya_BattleScore1",
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
              "variableName": "Bronya_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W1_Soldier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Bronya_BattleScore1_Flag",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 4
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
                "name": "Compare: Variable",
                "value1": "Bronya_BattleScore1_Flag",
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
                      "title": "\"Thank You for Your Service\"",
                      "desc": "Defeat Bronya without defeating the Silvermane Guards",
                      "rarity": "Low"
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
      "for": "Enemy_W1_Bronya_Ability02[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
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
                "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                "displayLines": "MDF_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "TEST_DarkTeamBackRow",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start"
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                    "value1": "Team_Row_Count",
                    "compareType": ">=",
                    "value2": 1,
                    "activeRow": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Bronya_PassiveAbility_Formation2",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "row": 1
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
      "for": "Enemy_W1_Bronya_PassiveAbility_NoLockStance",
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}