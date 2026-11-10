const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Ruan Mei",
  "trimCharacterName": "RuanMei",
  "abilityList": [
    "RuanMei_Modifiers",
    "RuanMei_LocalPlayer_StandardAbility_AttackBreak",
    "RuanMei_LocalPlayer_RuanMei_TechniqueUsage",
    "RuanMei_LocalPlayer_RuanMei_NormalAtk01",
    "RuanMei_RuanMei_TechniqueInLevel_Insert",
    "RuanMei_RuanMei_TechniqueInLevel",
    "RuanMei_RuanMei_PassiveAbility01",
    "RuanMei_RuanMei_TriggerImprintEffect",
    "RuanMei_RuanMei_Ability03_Part02",
    "RuanMei_RuanMei_Ability03_Part01",
    "RuanMei_RuanMei_Ability03_EnterReady",
    "RuanMei_RuanMei_Ability02_Part02",
    "RuanMei_RuanMei_Ability02_Part01",
    "RuanMei_RuanMei_Ability01_Part02",
    "RuanMei_RuanMei_Ability01_Part01",
    "RuanMei_RuanMei_TechniqueInRougeLevel"
  ],
  "abilityObject": {
    "RuanMei_Modifiers": {
      "fileName": "RuanMei_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-524458531\">ADV_StageAbility_Maze_RuanMei_RogueExtraEffect</a>",
          "counter": 1,
          "stackType": "Merge",
          "onBattlePrep": [
            {
              "name": "IF",
              "conditions": "Has SU Buff Aspect"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__158695251\">ADV_StageAbility_Maze_RuanMei_RogueIgnoreWeakness</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "EnterBattleAdvantage"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-818714077\">ADV_StageAbility_Maze_RuanMei</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DamageAddedRatio_Friend</span>. Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">Skill02_P2_StanceBreakAddedRatio_Friend</span>.",
          "type": "Buff",
          "effectName": "Boost DMG and Weakness Break Efficiency",
          "statusName": "Overtone"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1426523\">RuanMei_Ability02_DamageUp</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Candle Lights on Still Waters"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "statValue": {
                        "displayLines": "(0.32 + SkillTree_PointB3_BreakDamageAddedValue)"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "statValue": {
                        "displayLines": "0.32"
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
          "for": "<a class=\"gModGreen\" id=\"mod__520440377\">RuanMei_ResetImprint</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__379919533\">RuanMei_PassiveArea_Enemy</a>[<span class=\"descriptionNumberColor\">Thanatoplum Rebloom</span>]",
          "modifierFlags": [
            "BreakExtend",
            "RemoveWhenCasterDead"
          ],
          "description": "When enemy targets attempt to recover from the Weakness Break state, prolong the duration of their Weakness Break state and deal Ice Break DMG to them.",
          "type": "Debuff",
          "effectName": "Weakness Break Extension",
          "statusName": "Thanatoplum Rebloom",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
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
                        "modifier": "<a class=\"gModGreen\" id=\"520440377\">RuanMei_ResetImprint</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_RuanMei_PassiveArea_Count",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"520440377\">RuanMei_ResetImprint</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DV_RuanMei_PassiveArea_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 0,
                      "variableName": "DV_RuanMei_PassiveArea_Count"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DV_NeedDettachEffect",
                  "scope": "TargetEntity"
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
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 1,
                  "variableName": "DV_RuanMei_PassiveArea_Count"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_BreakAttackToDelay",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((MDF_BreakAttackToDelay * 0.2) + 0.1)"
                  },
                  "variableName": "MDF_BreakAttackToDelay"
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": -1,
                  "adjustmentType": "Advance"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "RuanMei_TriggerImprintEffect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "On Dispel/Cleanse",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                }
              ]
            },
            {
              "eventTrigger": "On Extend Break Animation",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "RuanMei_TriggerImprintEffect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": true
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_RuanMei_PassiveArea_Count",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "value": 0,
                      "variableName": "DV_NeedDettachEffect"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-882985814\">RuanMei_PassiveArea_EnemyCD</a>",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__806368907\">RuanMei_PassiveArea_PenetrateUP</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "statValue": {
                    "displayLines": "Ability03_P1_PenetrateRatio"
                  }
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1242682284\">RuanMei_Ability03_Area_Eidolon1_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "valuePerStack": {
                        "Ability03_P1_PenetrateRatio": {
                          "displayLines": "0.25"
                        },
                        "AbilityRank_Eidolon1_P1_IgnoreDEFRatio_Friend": {
                          "displayLines": "0.2"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1476311818\">RuanMei_Ability03_Area_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "valuePerStack": {
                        "Ability03_P1_PenetrateRatio": {
                          "displayLines": "0.25"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1385395722\">RuanMei_PassiveArea</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"806368907\">RuanMei_PassiveArea_PenetrateUP</a>",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "Ability03_P1_PenetrateRatio": {
                  "displayLines": "0.25"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"806368907\">RuanMei_PassiveArea_PenetrateUP</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-995060554\">RuanMei_Ability03_Area_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1476311818\">RuanMei_Ability03_Area_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1242682284\">RuanMei_Ability03_Area_Eidolon1_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>"
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
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "statValue": {
                    "displayLines": "Ability03_P1_PenetrateRatio"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.2"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "duration": {
                        "displayLines": "(2 + 1)"
                      }
                    }
                  ],
                  "failed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "0.2"
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                          "duration": {
                            "displayLines": "2"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-995060554\">RuanMei_Ability03_Area_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                          "duration": {
                            "displayLines": "2"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Attack Targets}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"379919533\">RuanMei_PassiveArea_Enemy</a>[<span class=\"descriptionNumberColor\">Thanatoplum Rebloom</span>]"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"520440377\">RuanMei_ResetImprint</a>"
                            }
                          ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__353149410\">RuanMei_Eidolon4_Passive_BreakDamageAddedUp</a>[<span class=\"descriptionNumberColor\">Chatoyant Éclat</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_BreakDamageAdded</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Chatoyant Éclat",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"614915339\">RuanMei_Eidolon4_PassiveStackProperty</a>",
                  "valuePerStack": {
                    "AbilityRank_Eidolon4_P1_BreakDamageAdded": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1703049476\">RuanMei_Eidolon4_PassiveListenBreak</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"614915339\">RuanMei_Eidolon4_PassiveStackProperty</a>",
                  "valuePerStack": {
                    "AbilityRank_Eidolon4_P1_BreakDamageAdded": {
                      "displayLines": "1"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"353149410\">RuanMei_Eidolon4_Passive_BreakDamageAddedUp</a>[<span class=\"descriptionNumberColor\">Chatoyant Éclat</span>]",
                  "duration": {
                    "displayLines": "3"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__614915339\">RuanMei_Eidolon4_PassiveStackProperty</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "SkillRank_Rank04_P1_BreakDamageAdded"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
                    "displayLines": "SkillRank_Rank04_P1_BreakDamageAdded"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
          "description": "When dealing DMG to enemy targets with Weakness Break, increases ATK by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_AttackUpRatio</span>.",
          "type": "Buff",
          "statusName": "Reedside Promenade",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                          "value": "AbilityRank_Eidolon2_P1_AttackUpRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1212418869\">RuanMei_Tree03_BreakDamageAddedValueShow</a>",
          "stackType": "ReplaceByCaster",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "enteringRange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_BreakDamageAddedValue - 1.2) / 0.1)) * 0.06)"
                      },
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                        "compareType": "<",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "SkillTree_PointB3_BreakDamageAddedValue"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "0.36"
                            },
                            "contextScope": "ContextCaster"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "0.36"
                              },
                              "variableName": "SkillTree_PointB3_BreakDamageAddedValue"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(SkillTree_PointB3_BreakDamageAddedValue + 0.32)"
                      },
                      "variableName": "Skill02_P1_DamageAddedRatioFinal"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
                          "valuePerStack": {
                            "Ability02_P1_DamageAddedRatio_Friend": {
                              "displayLines": "Skill02_P1_DamageAddedRatioFinal"
                            },
                            "Ability02_P2_StanceBreakAddedRatio_Friend": {
                              "displayLines": "0.5"
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_BreakDamageAddedValue - 1.2) / 0.1)) * 0.06)"
                      },
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                        "compareType": "<",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "SkillTree_PointB3_BreakDamageAddedValue"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "0.36"
                            },
                            "contextScope": "ContextCaster"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "0.36"
                              },
                              "variableName": "SkillTree_PointB3_BreakDamageAddedValue"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(SkillTree_PointB3_BreakDamageAddedValue + 0.32)"
                      },
                      "variableName": "Skill02_P1_DamageAddedRatioFinal"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
                          "valuePerStack": {
                            "Ability02_P1_DamageAddedRatio_Friend": {
                              "displayLines": "Skill02_P1_DamageAddedRatioFinal"
                            },
                            "Ability02_P2_StanceBreakAddedRatio_Friend": {
                              "displayLines": "0.5"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-780236472\">RuanMei_Tree02_RecoverSP</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "Trace_PointB2_P1_SP"
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">SkillTree_PointB1_P1_BreakDamageAdded</span>.",
          "type": "Buff",
          "statusName": "Inert Respiration",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
                    "displayLines": "SkillTree_PointB1_P1_BreakDamageAdded"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "RuanMei_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "RuanMei_LocalPlayer_StandardAbility_AttackBreak",
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
    "RuanMei_LocalPlayer_RuanMei_TechniqueUsage": {
      "fileName": "RuanMei_LocalPlayer_RuanMei_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Is Game Mode",
            "modes": [
              "RogueExplore",
              "ChessRogue",
              "RelicRogue",
              "TournRogue",
              "MagicRogue"
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Adventure Lineup}}"
              },
              "modifier": null,
              "ID": "130302()",
              "duration": -1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "130303(Avatar_RuanMei_00_SkillMazeInRougeLevel)",
              "duration": -1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "130301(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "RuanMei_LocalPlayer_RuanMei_NormalAtk01": {
      "fileName": "RuanMei_LocalPlayer_RuanMei_NormalAtk01",
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
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
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
    "RuanMei_RuanMei_TechniqueInLevel_Insert": {
      "fileName": "RuanMei_RuanMei_TechniqueInLevel_Insert",
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
          "ability": "RuanMei_Ability02_Part01",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "RuanMei_RuanMei_TechniqueInLevel": {
      "fileName": "RuanMei_RuanMei_TechniqueInLevel",
      "childAbilityList": [
        "RuanMei_RuanMei_TechniqueInLevel",
        "RuanMei_RuanMei_TechniqueInLevel_Insert"
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
          "modifier": "<a class=\"gModGreen\" id=\"-2101676749\">RuanMei_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2101676749\">RuanMei_Maze_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Multiply(by 0 if undefined)"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill02",
                  "forceAction": true,
                  "afterInjection": [],
                  "runsAfterBattleEnd": true
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
    "RuanMei_RuanMei_PassiveAbility01": {
      "fileName": "RuanMei_RuanMei_PassiveAbility01",
      "childAbilityList": [
        "RuanMei_RuanMei_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1969840009\">RuanMei_Passive</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "3"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Days Wane, Thoughts Wax"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-780236472\">RuanMei_Tree02_RecoverSP</a>",
              "valuePerStack": {
                "Trace_PointB2_P1_SP": {
                  "displayLines": "5"
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
          "stackType": "Refresh",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillP01_P1_SpeedUpRatio</span>.",
          "type": "Buff",
          "statusName": "Somatotypical Helix",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.1"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__894337794\">RuanMei_Passive_TriggerBreakDamage</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "DV_Passive_Damage_MaxStance",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "warningType": "MaxToughness",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((((DV_Passive_Damage_MaxStance / 30) + 2) / 4) * SkillP01_FinalBreakDamagePercentage_set)"
                  },
                  "variableName": "SkillP01_FinalBreakDamagePercentage_set"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "displayLines": "SkillP01_FinalBreakDamagePercentage_set"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__402849385\">RuanMei_Passive_ListenBeingBreakOrHit</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Base Break Damage",
                      "variableName": "_BreakBaseDamage",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_BreakDamageAddedRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(1.2 + 2)"
                          },
                          "variableName": "_SkillP01_FinalBreakDamagePercentage"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1.2"
                          },
                          "variableName": "_SkillP01_FinalBreakDamagePercentage"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"894337794\">RuanMei_Passive_TriggerBreakDamage</a>",
                      "valuePerStack": {
                        "MDF_BreakBaseDamage_set": {
                          "displayLines": "_BreakBaseDamage"
                        },
                        "MDF_BreakDamageAddedRatio_set": {
                          "displayLines": "_BreakDamageAddedRatio"
                        },
                        "AbilityP01_FinalBreakDamagePercentage_set": {
                          "displayLines": "_SkillP01_FinalBreakDamagePercentage"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1969840009\">RuanMei_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"806368907\">RuanMei_PassiveArea_PenetrateUP</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"461506636\">RuanMei_Ability02_Area</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "Skill02_EnergyBarCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"461506636\">RuanMei_Ability02_Area</a>",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Skill02_EnergyBarCount"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_EnergyBarCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "Skill02_EnergyBarCount"
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
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
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Inert Respiration"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                      "valuePerStack": {
                        "Trace_PointB1_P1_BreakDamageAdded": {
                          "displayLines": "0.2"
                        }
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Inert Respiration"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                          "valuePerStack": {
                            "Trace_PointB1_P1_BreakDamageAdded": {
                              "displayLines": "0.2"
                            }
                          }
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                          "valuePerStack": {
                            "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                              "displayLines": "0.4"
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
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
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1703049476\">RuanMei_Eidolon4_PassiveListenBreak</a>"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"402849385\">RuanMei_Passive_ListenBeingBreakOrHit</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"894337794\">RuanMei_Passive_TriggerBreakDamage</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                      "valuePerStack": {
                        "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                          "displayLines": "0.4"
                        }
                      }
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"614915339\">RuanMei_Eidolon4_PassiveStackProperty</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1703049476\">RuanMei_Eidolon4_PassiveListenBreak</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Candle Lights on Still Waters"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1212418869\">RuanMei_Tree03_BreakDamageAddedValueShow</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.32"
                      },
                      "variableName": "Skill02_P1_DamageAddedRatioFinal"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"402849385\">RuanMei_Passive_ListenBeingBreakOrHit</a>"
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
    "RuanMei_RuanMei_TriggerImprintEffect": {
      "fileName": "RuanMei_RuanMei_TriggerImprintEffect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Next Injected Action Is Owned",
            "invertCondition": true
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1922337227\">RuanMei_DelayHint</a>",
          "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "DV_Ultra_Damage_MaxStance",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "warningType": "MaxToughness",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((((DV_Ultra_Damage_MaxStance / 30) + 2) / 4) * 0.5)"
          },
          "variableName": "Skill03_FinalBreakDamagePercentage"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageBreak": {
              "displayLines": "Skill03_FinalBreakDamagePercentage"
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "MDF_BreakAttackToDelay"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "scope": "TargetEntity",
          "value": 1,
          "variableName": "DV_NeedDettachEffect"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1922337227\">RuanMei_DelayHint</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "RuanMei_RuanMei_Ability03_Part02": {
      "fileName": "RuanMei_RuanMei_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
              "duration": {
                "displayLines": "(2 + 1)"
              },
              "valuePerStack": {
                "Ability03_P1_PenetrateRatio": {
                  "displayLines": "0.25"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "Ability03_P1_PenetrateRatio": {
                  "displayLines": "0.25"
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
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1242682284\">RuanMei_Ability03_Area_Eidolon1_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">Skill03_P1_PenetrateRatio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_P1_IgnoreDEFRatio_Friend</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1476311818\">RuanMei_Ability03_Area_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">Skill03_P1_PenetrateRatio</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#Skill03_P1_PenetrateRatio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_IgnoreDEFRatio</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_LifeTime",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
                          "value": {
                            "displayLines": "MDF_LifeTime"
                          },
                          "valueType": "Duration"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-995060554\">RuanMei_Ability03_Area_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#Skill03_P1_PenetrateRatio</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_LifeTime",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
                          "value": {
                            "displayLines": "MDF_LifeTime"
                          },
                          "valueType": "Duration"
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
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "RuanMei_RuanMei_Ability03_Part01": {
      "fileName": "RuanMei_RuanMei_Ability03_Part01",
      "childAbilityList": [
        "RuanMei_RuanMei_Ability03_Camera",
        "RuanMei_RuanMei_Ability03_EnterReady",
        "RuanMei_RuanMei_Ability03_Part01",
        "RuanMei_RuanMei_Ability03_Part02",
        "RuanMei_RuanMei_TriggerImprintEffect"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "RuanMei_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "RuanMei_RuanMei_Ability03_EnterReady": {
      "fileName": "RuanMei_RuanMei_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "RuanMei_RuanMei_Ability02_Part02": {
      "fileName": "RuanMei_RuanMei_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"461506636\">RuanMei_Ability02_Area</a>",
          "duration": {
            "displayLines": "3"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "3"
          },
          "maximum": {
            "displayLines": "3"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2101676749\">RuanMei_Maze_Modifier</a>"
          },
          "passed": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2101676749\">RuanMei_Maze_Modifier</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1509368163\">RuanMei_Ability02_Area_Caster</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DamageAddedRatioFinal</span>. Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">#Skill02_P2_StanceBreakAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Boost DMG and Weakness Break Efficiency",
          "statusName": "Overtone",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_LifeTime",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"461506636\">RuanMei_Ability02_Area</a>",
                          "value": {
                            "displayLines": "MDF_LifeTime"
                          },
                          "valueType": "Duration"
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "MDF_LifeTime"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1526325038\">RuanMei_Ability02_StanceBreakAdded</a>",
          "stackType": "Refresh",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "statValue": {
                    "displayLines": "Ability02_StanceBreakAddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__461506636\">RuanMei_Ability02_Area</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1526325038\">RuanMei_Ability02_StanceBreakAdded</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"118087020\">RuanMei_Ability02_Eidolon1_AttackUp</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1509368163\">RuanMei_Ability02_Area_Caster</a>[<span class=\"descriptionNumberColor\">Overtone</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]"
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
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1526325038\">RuanMei_Ability02_StanceBreakAdded</a>",
                  "valuePerStack": {
                    "Ability02_StanceBreakAddedRatio": {
                      "displayLines": "0.5"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1509368163\">RuanMei_Ability02_Area_Caster</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
                  "duration": {
                    "displayLines": "3"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
                  "valuePerStack": {
                    "Ability02_P1_DamageAddedRatio_Friend": {
                      "displayLines": "Skill02_P1_DamageAddedRatioFinal"
                    },
                    "Ability02_P2_StanceBreakAddedRatio_Friend": {
                      "displayLines": "0.5"
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
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1426523\">RuanMei_Ability02_DamageUp</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1526325038\">RuanMei_Ability02_StanceBreakAdded</a>",
                      "valuePerStack": {
                        "Ability02_StanceBreakAddedRatio": {
                          "displayLines": "0.5"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
                      "valuePerStack": {
                        "Ability02_P1_DamageAddedRatio_Friend": {
                          "displayLines": "Skill02_P1_DamageAddedRatioFinal"
                        },
                        "Ability02_P2_StanceBreakAddedRatio_Friend": {
                          "displayLines": "0.5"
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
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "RuanMei_RuanMei_Ability02_Part01": {
      "fileName": "RuanMei_RuanMei_Ability02_Part01",
      "childAbilityList": [
        "RuanMei_RuanMei_Ability02_Camera",
        "RuanMei_RuanMei_Ability02_Part01",
        "RuanMei_RuanMei_Ability02_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "RuanMei_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "RuanMei_RuanMei_Ability01_Part02": {
      "fileName": "RuanMei_RuanMei_Ability01_Part02",
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
            "DamageType": "Ice",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "RuanMei_RuanMei_Ability01_Part01": {
      "fileName": "RuanMei_RuanMei_Ability01_Part01",
      "childAbilityList": [
        "RuanMei_RuanMei_Ability01_Camera",
        "RuanMei_RuanMei_Ability01_Part01",
        "RuanMei_RuanMei_Ability01_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "RuanMei_Ability01_Part02",
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
    },
    "RuanMei_RuanMei_TechniqueInRougeLevel": {
      "fileName": "RuanMei_RuanMei_TechniqueInRougeLevel",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1378168590\">RuanMei_Maze_Modifier_BeforeStanceBreak</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__319066734\">RuanMei_Maze_Modifier_StanceBreakAdd</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": 10001,
              "execute": [
                "Modifier Deletes Itself"
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Base Break Damage",
                      "variableName": "BreakBaseDamage",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MaxStance",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "warningType": "MaxToughness",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(((MaxStance / 30) + 2) / 4)"
                      },
                      "variableName": "BreakDamageRatio"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "BreakDamageAddedRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((BreakBaseDamage * BreakDamageRatio) * (1 + BreakDamageAddedRatio))"
                      },
                      "variableName": "RuanMei_BreakDamage"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "DamageBreak": {
                          "displayLines": "(BreakDamageRatio * RuanMei_BreakDamage)"
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Break DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-50472691\">RuanMei_Maze_Modifier_StanceBreakAdd_EnterBattleRemove</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": 10001,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"319066734\">RuanMei_Maze_Modifier_StanceBreakAdd</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1378168590\">RuanMei_Maze_Modifier_BeforeStanceBreak</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-50472691\">RuanMei_Maze_Modifier_StanceBreakAdd_EnterBattleRemove</a>"
                }
              ]
            },
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
                        "name": "Compare: Variable",
                        "value1": "FinishRoomNum",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(FinishRoomNum * 2)"
                          },
                          "variableName": "BuffNumber"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"319066734\">RuanMei_Maze_Modifier_StanceBreakAdd</a>",
                      "valuePerStack": {
                        "MDF_StanceBreakAdded": {
                          "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))"
                        },
                        "MDF_BreakDamageUp": {
                          "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))"
                        }
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1987343235\">StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier</a>",
                          "adjustmentType": "+",
                          "variableName": "Stance_Added_Ratio",
                          "value": {
                            "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))"
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
      }
    }
  }
}