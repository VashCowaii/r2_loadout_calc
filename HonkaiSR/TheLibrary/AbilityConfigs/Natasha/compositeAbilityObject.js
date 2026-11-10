const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Natasha",
  "trimCharacterName": "Natasha",
  "abilityList": [
    "Natasha_Modifiers",
    "Natasha_Natasha_Trace02",
    "Natasha_Natasha_Eidolon4",
    "Natasha_Natasha_Eidolon1",
    "Natasha_LocalPlayer_StandardAbility_AttackBreak",
    "Natasha_LocalPlayer_Natasha_TechniqueUsage",
    "Natasha_LocalPlayer_Natasha_NormalAtk01",
    "Natasha_Natasha_Eidolon1_InsertAbility_Part02",
    "Natasha_Natasha_Eidolon1_InsertAbility_Part01",
    "Natasha_Natasha_TechniqueInLevel",
    "Natasha_Natasha_PassiveAbility01",
    "Natasha_Natasha_Ability03_Part02",
    "Natasha_Natasha_Ability03_Part01",
    "Natasha_Natasha_Ability03_EnterReady",
    "Natasha_Natasha_Ability02_Part02",
    "Natasha_Natasha_Ability02_Part01",
    "Natasha_Natasha_Ability01_Part02",
    "Natasha_Natasha_Ability01_Part01"
  ],
  "abilityObject": {
    "Natasha_Modifiers": {
      "fileName": "Natasha_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1196866712\">ADV_StageAbility_Maze_Natasha</a>",
          "counter": 1,
          "stackType": "Merge",
          "duration": 20
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1227965702\">Natasha_BPAbility_DefenceRatioUp</a>[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "DEF Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__453099626\">Natasha_Passive_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_Fatigue"
          ],
          "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> less DMG to your team.",
          "type": "Debuff",
          "effectName": "Weaken",
          "statusName": "Weaken",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1462346849\">Natasha_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "useEntitySnapshot": true,
          "description": "Restores a certain amount of HP at the start of each turn.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Healing Over Time",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "displayLines": "MDF_ShowValue1"
                      },
                      "healFlat": {
                        "displayLines": "MDF_ShowValue2"
                      },
                      "formula": "Heal from Healer's MaxHP"
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
    "Natasha_Natasha_Trace02": {
      "fileName": "Natasha_Natasha_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-202375119\">M_Trace_HealRatioUp</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.1"
            }
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_Natasha_Eidolon4": {
      "fileName": "Natasha_Natasha_Eidolon4",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1974553501\">Natasha_Eidolon4_Check</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1974553501\">Natasha_Eidolon4_Check</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "5"
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_Natasha_Eidolon1": {
      "fileName": "Natasha_Natasha_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1397815058\">Natasha_Eidolon1_Check</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1397815058\">Natasha_Eidolon1_Check</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                      "displayLines": "0.3"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Natasha_Eidolon1_InsertAbility_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterHealSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Natasha_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_LocalPlayer_Natasha_TechniqueUsage": {
      "fileName": "Natasha_LocalPlayer_Natasha_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "110501(SkillMaze)"
                    }
                  ]
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "110501(SkillMaze)"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "110501(SkillMaze)"
                    }
                  ]
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "110501(SkillMaze)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Natasha_LocalPlayer_Natasha_NormalAtk01": {
      "fileName": "Natasha_LocalPlayer_Natasha_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "from": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "to": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "Distance_Between_Entities",
                "compareType": "<=",
                "value2": 7.5
              },
              "passed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Overworld Attack Instance",
                      "onHit": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              "Compare Projectile Visual Lifetime",
                              {
                                "name": "Target Exists",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Achievement",
                              "relatedAchievements": [
                                {
                                  "title": "Full Metal Racket",
                                  "desc": "Enter a battle by attacking a distant enemy or destroy a destructible object at a distance with Natasha during exploration",
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
                  "projectileFinished": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired",
                  "execute": [
                    {
                      "name": "Overworld Attack Instance",
                      "onAttack": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              "Compare Projectile Visual Lifetime",
                              {
                                "name": "Target Exists",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Achievement",
                              "relatedAchievements": [
                                {
                                  "title": "Full Metal Racket",
                                  "desc": "Enter a battle by attacking a distant enemy or destroy a destructible object at a distance with Natasha during exploration",
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
                  "projectileFinished": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onAttack": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          "Compare Projectile Visual Lifetime",
                          {
                            "name": "Target Exists",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Full Metal Racket",
                              "desc": "Enter a battle by attacking a distant enemy or destroy a destructible object at a distance with Natasha during exploration",
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
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Natasha_Natasha_Eidolon1_InsertAbility_Part02": {
      "fileName": "Natasha_Natasha_Eidolon1_InsertAbility_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "displayLines": "0.15"
          },
          "healFlat": {
            "displayLines": "400"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1397815058\">Natasha_Eidolon1_Check</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_Natasha_Eidolon1_InsertAbility_Part01": {
      "fileName": "Natasha_Natasha_Eidolon1_InsertAbility_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Natasha_Eidolon1_InsertAbility_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_Natasha_TechniqueInLevel": {
      "fileName": "Natasha_Natasha_TechniqueInLevel",
      "childAbilityList": [
        "Natasha_Natasha_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2040265582\">Technique_Natasha_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2040265582\">Technique_Natasha_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Technique Modifies Current Wave",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
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
                              "displayLines": "0.8"
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Technique",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ]
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"453099626\">Natasha_Passive_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
                      "duration": {
                        "displayLines": "1"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.3"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Natasha_Natasha_PassiveAbility01": {
      "fileName": "Natasha_Natasha_PassiveAbility01",
      "childAbilityList": [
        "Natasha_Natasha_PassiveAbility01"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"969873178\">Fuka_Beginner_PassiveAbility_Bonus_1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1542765315\">Fuka_Beginner_PassiveAbility_Bonus_1_ForSnapshitEntity</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "MDF_PropertyValue"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "displayLines": "0.5"
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
          "for": "<a class=\"gModGreen\" id=\"mod__969873178\">Fuka_Beginner_PassiveAbility_Bonus_1</a>",
          "modifierFlags": [
            "MuteDotCasterCallBack"
          ],
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "0.3"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "displayLines": "0.5"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Snapshot(Calculation Instance Completed)",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1542765315\">Fuka_Beginner_PassiveAbility_Bonus_1_ForSnapshitEntity</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.3"
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_Natasha_Ability03_Part02": {
      "fileName": "Natasha_Natasha_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "displayLines": "0.3"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-251008638\">Natasha_Eidolon2_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                  "duration": {
                    "displayLines": "1"
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "displayLines": "0.06"
                    },
                    "MDF_ShowValue2": {
                      "displayLines": "160"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "displayLines": "0.138"
          },
          "healFlat": {
            "displayLines": "368"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-251008638\">Natasha_Eidolon2_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_ShowValue1",
            "MDF_ShowValue2"
          ],
          "description": "Restores a certain amount of HP at the start of each turn.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Healing Over Time",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "displayLines": "MDF_ShowValue1"
                      },
                      "healFlat": {
                        "displayLines": "MDF_ShowValue2"
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Natasha_Natasha_Ability03_Part01": {
      "fileName": "Natasha_Natasha_Ability03_Part01",
      "childAbilityList": [
        "Natasha_Natasha_Ability03_Camera",
        "Natasha_Natasha_Ability03_EnterReady",
        "Natasha_Natasha_Ability03_Part01",
        "Natasha_Natasha_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Natasha_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Natasha_Natasha_Ability03_EnterReady": {
      "fileName": "Natasha_Natasha_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Natasha_Natasha_Ability02_Part02": {
      "fileName": "Natasha_Natasha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Soothe"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "dispelCount": {
                "displayLines": "1"
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "displayLines": "0.105"
          },
          "healFlat": {
            "displayLines": "280"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Recuperation"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "1"
              },
              "variableName": "SkillTree_LifeTime"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "SkillTree_LifeTime"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1462346849\">Natasha_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "displayLines": "(2 + SkillTree_LifeTime)"
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "displayLines": "0.072"
            },
            "MDF_ShowValue2": {
              "displayLines": "192"
            }
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Natasha_Natasha_Ability02_Part01": {
      "fileName": "Natasha_Natasha_Ability02_Part01",
      "childAbilityList": [
        "Natasha_Natasha_Ability02_Camera_Self",
        "Natasha_Natasha_Ability02_Camera_Other",
        "Natasha_Natasha_Ability02_Part01",
        "Natasha_Natasha_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Natasha_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      }
    },
    "Natasha_Natasha_Ability01_Part02": {
      "fileName": "Natasha_Natasha_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
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
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "0.4"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ]
            },
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Natasha_Natasha_Ability01_Part01": {
      "fileName": "Natasha_Natasha_Ability01_Part01",
      "childAbilityList": [
        "Natasha_Natasha_Ability01_Camera",
        "Natasha_Natasha_Ability01_Part01",
        "Natasha_Natasha_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Natasha_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    }
  }
}