const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Lynx",
  "trimCharacterName": "Lynx",
  "abilityList": [
    "Lynx_Modifiers",
    "Lynx_LocalPlayer_StandardAbility_AttackBreak",
    "Lynx_LocalPlayer_Lynx_TechniqueUsage",
    "Lynx_LocalPlayer_Lynx_NormalAtk01",
    "Lynx_Lynx_TechniqueInLevel",
    "Lynx_Lynx_PassiveAbility01",
    "Lynx_Lynx_Ability03_Part02",
    "Lynx_Lynx_Ability03_Part01",
    "Lynx_Lynx_Ability03_EnterReady",
    "Lynx_Lynx_Ability02_Part02",
    "Lynx_Lynx_Ability02_Part01",
    "Lynx_Lynx_Ability01_Part02",
    "Lynx_Lynx_Ability01_Part01"
  ],
  "abilityObject": {
    "Lynx_Modifiers": {
      "fileName": "Lynx_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__148301289\">ADV_StageAbility_Maze_Lynx</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-96135638\">Lynx_Eidolon4_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1832848148\">Lynx_Eidolon2_Resist</a>[<span class=\"descriptionNumberColor\">Debuff RES</span>]",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "description": "Resists 1 debuff.",
          "type": "Buff",
          "statusName": "Debuff RES",
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1832848148\">Lynx_Eidolon2_Resist</a>[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1819426834\">Lynx_Tree02_Resistance</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1804592669\">Lynx_Tree01_OnBeforeBeingAttacked</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "MDF_Lynx_PointB1_AddSpValue"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "displayLines": "(MDF_HOT_HOTPercentage + MDF_HOT_AggroUp_HOTPercentage)"
                      },
                      "healFlat": {
                        "displayLines": "(MDF_HOT_HealValue + MDF_HOT_AggroUp_HealValue)"
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "displayLines": "MDF_HOT_HOTPercentage"
                      },
                      "healFlat": {
                        "displayLines": "MDF_HOT_HealValue"
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Effect RES by <span class=\"descriptionNumberColor\">MDF_AddStatusResistance</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Survival Response",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1832848148\">Lynx_Eidolon2_Resist</a>[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_HPAddValueConvert"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_HPDelta"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AddStatusResistance"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AggroUp",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Effect RES by <span class=\"descriptionNumberColor\">MDF_AddStatusResistance</span>, and greatly increases the chance of being attacked by enemies."
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AggroUp"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Survival Response",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1832848148\">Lynx_Eidolon2_Resist</a>[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_HPAddValueConvert"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_HPDelta"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AggroUp",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and greatly increases the chance of being attacked by enemies."
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AggroUp"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Lynx_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Lynx_LocalPlayer_StandardAbility_AttackBreak",
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
    "Lynx_LocalPlayer_Lynx_TechniqueUsage": {
      "fileName": "Lynx_LocalPlayer_Lynx_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "111001(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Lynx_LocalPlayer_Lynx_NormalAtk01": {
      "fileName": "Lynx_LocalPlayer_Lynx_NormalAtk01",
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
              "name": "Overworld Attack Instance"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            },
            {
              "name": "Overworld Attack Instance"
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
    "Lynx_Lynx_TechniqueInLevel": {
      "fileName": "Lynx_Lynx_TechniqueInLevel",
      "childAbilityList": [
        "Lynx_Lynx_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
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
          "modifier": "<a class=\"gModGreen\" id=\"-872415748\">StageAbility_Maze_Lynx_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-872415748\">StageAbility_Maze_Lynx_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Survival in the Extreme"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                          "duration": {
                            "displayLines": "(2 + 1)"
                          },
                          "valuePerStack": {
                            "MDF_HOT_HOTPercentage": {
                              "displayLines": "0.036"
                            },
                            "MDF_HOT_HealValue": {
                              "displayLines": "96"
                            },
                            "MDF_HOT_AggroUp_HOTPercentage": {
                              "displayLines": "0.044999998"
                            },
                            "MDF_HOT_AggroUp_HealValue": {
                              "displayLines": "120"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "valuePerStack": {
                            "MDF_HOT_HOTPercentage": {
                              "displayLines": "0.036"
                            },
                            "MDF_HOT_HealValue": {
                              "displayLines": "96"
                            },
                            "MDF_HOT_AggroUp_HOTPercentage": {
                              "displayLines": "0.044999998"
                            },
                            "MDF_HOT_AggroUp_HealValue": {
                              "displayLines": "120"
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Lynx_Lynx_PassiveAbility01": {
      "fileName": "Lynx_Lynx_PassiveAbility01",
      "childAbilityList": [
        "Lynx_Lynx_PassiveAbility01"
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Advance Surveying"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"199115984\">Lynx_Tree01_Listen</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Exploration Techniques"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1819426834\">Lynx_Tree02_Resistance</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.35"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1732085386\">Lynx_Eidolon1_ListenBeforeDealHeal01</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1715307767\">Lynx_Eidolon1_ListenBeforeDealHeal02</a>",
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
                      "displayLines": "MDF_Target_HpRatio"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "displayLines": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1732085386\">Lynx_Eidolon1_ListenBeforeDealHeal01</a>",
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
                      "displayLines": "0.5"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "displayLines": "0.2"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1715307767\">Lynx_Eidolon1_ListenBeforeDealHeal02</a>",
                  "valuePerStack": {
                    "MDF_Target_HpRatio": {
                      "displayLines": "0.5"
                    },
                    "MDF_PropertyValue": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__199115984\">Lynx_Tree01_Listen</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1804592669\">Lynx_Tree01_OnBeforeBeingAttacked</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_Lynx_PointB1_AddSpValue": {
                  "displayLines": "2"
                }
              }
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
    "Lynx_Lynx_Ability03_Part02": {
      "fileName": "Lynx_Lynx_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "displayLines": "1"
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "displayLines": "0.135"
          },
          "healFlat": {
            "displayLines": "360"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Survival in the Extreme"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "displayLines": "(2 + 1)"
              },
              "valuePerStack": {
                "MDF_HOT_HOTPercentage": {
                  "displayLines": "0.036"
                },
                "MDF_HOT_HealValue": {
                  "displayLines": "96"
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "displayLines": "0.044999998"
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "displayLines": "120"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_HOT_HOTPercentage": {
                  "displayLines": "0.036"
                },
                "MDF_HOT_HealValue": {
                  "displayLines": "96"
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "displayLines": "0.044999998"
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "displayLines": "120"
                }
              }
            }
          ]
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
    "Lynx_Lynx_Ability03_Part01": {
      "fileName": "Lynx_Lynx_Ability03_Part01",
      "childAbilityList": [
        "Lynx_Lynx_Ability03_EnterReady",
        "Lynx_Lynx_Ability03_Part01",
        "Lynx_Lynx_Ability03_Part02",
        "Lynx_Lynx_Ability03_Camera"
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
          "ability": "Lynx_Ability03_Part02",
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
    "Lynx_Lynx_Ability03_EnterReady": {
      "fileName": "Lynx_Lynx_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Lynx_Lynx_Ability02_Part02": {
      "fileName": "Lynx_Lynx_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_Lynx_MaxHpValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_Lynx_MaxHpConvert",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    }
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)"
                    },
                    "MDF_HPAddValueConvert": {
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))"
                    },
                    "MDF_HPDelta": {
                      "displayLines": "200"
                    },
                    "MDF_AggroUp": {
                      "displayLines": "5"
                    },
                    "MDF_AddStatusResistance": {
                      "displayLines": "0.3"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)"
                    },
                    "MDF_HPAddValueConvert": {
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))"
                    },
                    "MDF_HPDelta": {
                      "displayLines": "200"
                    },
                    "MDF_AggroUp": 0,
                    "MDF_AddStatusResistance": {
                      "displayLines": "0.3"
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    }
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Preservation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)"
                    },
                    "MDF_HPAddValueConvert": {
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)"
                    },
                    "MDF_HPDelta": {
                      "displayLines": "200"
                    },
                    "MDF_AggroUp": {
                      "displayLines": "5"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)"
                    },
                    "MDF_HPAddValueConvert": {
                      "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)"
                    },
                    "MDF_HPDelta": {
                      "displayLines": "200"
                    },
                    "MDF_AggroUp": 0
                  }
                }
              ]
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1832848148\">Lynx_Eidolon2_Resist</a>[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-96135638\">Lynx_Eidolon4_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.03)"
                }
              }
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
            "displayLines": "0.12"
          },
          "healFlat": {
            "displayLines": "320"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Survival in the Extreme"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "displayLines": "(2 + 1)"
              },
              "valuePerStack": {
                "MDF_HOT_HOTPercentage": {
                  "displayLines": "0.036"
                },
                "MDF_HOT_HealValue": {
                  "displayLines": "96"
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "displayLines": "0.044999998"
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "displayLines": "120"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_HOT_HOTPercentage": {
                  "displayLines": "0.036"
                },
                "MDF_HOT_HealValue": {
                  "displayLines": "96"
                },
                "MDF_HOT_AggroUp_HOTPercentage": {
                  "displayLines": "0.044999998"
                },
                "MDF_HOT_AggroUp_HealValue": {
                  "displayLines": "120"
                }
              }
            }
          ]
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
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
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
    "Lynx_Lynx_Ability02_Part01": {
      "fileName": "Lynx_Lynx_Ability02_Part01",
      "childAbilityList": [
        "Lynx_Lynx_Ability02_Part01",
        "Lynx_Lynx_Ability02_Part02",
        "Lynx_Lynx_Ability02_Camera_Self",
        "Lynx_Lynx_Ability02_Camera_Other"
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
          "ability": "Lynx_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      }
    },
    "Lynx_Lynx_Ability01_Part02": {
      "fileName": "Lynx_Lynx_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Lynx_Lynx_Ability01_Part01": {
      "fileName": "Lynx_Lynx_Ability01_Part01",
      "childAbilityList": [
        "Lynx_Lynx_Ability01_Part01",
        "Lynx_Lynx_Ability01_Part02",
        "Lynx_Lynx_Ability01_Camera"
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
          "ability": "Lynx_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
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