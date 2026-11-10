const configAbility = {
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
}