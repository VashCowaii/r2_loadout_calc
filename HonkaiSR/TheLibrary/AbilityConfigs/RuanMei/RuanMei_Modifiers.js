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
      "for": "<a class=\"gModGreen\" id=\"mod__104142449\">RuanMei_Ability02_Area_Friend</a>[<span class=\"descriptionNumberColor\">Overtone</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "Skill02_P1_DamageAddedRatio_Friend",
        "Skill02_P2_StanceBreakAddedRatio_Friend"
      ],
      "latentQueue": [],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.32) || Variables[1] (SkillTree_PointB3_BreakDamageAddedValue) || ADD || RETURN",
                    "displayLines": "(0.32 + SkillTree_PointB3_BreakDamageAddedValue)",
                    "constants": [],
                    "variables": [
                      0.32,
                      "SkillTree_PointB3_BreakDamageAddedValue"
                    ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.32) || RETURN",
                    "displayLines": "0.32",
                    "constants": [],
                    "variables": [
                      0.32
                    ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__520440377\">RuanMei_ResetImprint</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__379919533\">RuanMei_PassiveArea_Enemy</a>[<span class=\"descriptionNumberColor\">Thanatoplum Rebloom</span>]",
      "modifierFlags": [
        "BreakExtend",
        "RemoveWhenCasterDead"
      ],
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
          "eventTrigger": "Turn End [Anyone]",
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
                  "variableName": "DV_RuanMei_PassiveArea_Count",
                  "value": 0
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
              "scope": "TargetEntity",
              "variableName": "DV_NeedDettachEffect"
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
              "variableName": "DV_RuanMei_PassiveArea_Count",
              "value": 1
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_BreakAttackToDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BreakAttackToDelay",
              "value": {
                "operator": "Variables[0] (MDF_BreakAttackToDelay) || Variables[1] (0.2) || MUL || Variables[2] (0.1) || ADD || RETURN",
                "displayLines": "((MDF_BreakAttackToDelay * 0.2) + 0.1)",
                "constants": [],
                "variables": [
                  "MDF_BreakAttackToDelay",
                  0.2,
                  0.1
                ]
              }
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
              "priorityTag": "LevelPerformAvatar",
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
              "priorityTag": "LevelPerformAvatar",
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
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DV_NeedDettachEffect",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "description": "When enemy targets attempt to recover from the Weakness Break state, prolong the duration of their Weakness Break state and deal Ice Break DMG to them.",
      "type": "Debuff",
      "effectName": "Weakness Break Extension",
      "statusName": "Thanatoplum Rebloom"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-882985814\">RuanMei_PassiveArea_EnemyCD</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Ability03_P1_PenetrateRatio) || RETURN",
                "displayLines": "Ability03_P1_PenetrateRatio",
                "constants": [],
                "variables": [
                  "Ability03_P1_PenetrateRatio"
                ]
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
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    },
                    "AbilityRank_Eidolon1_P1_IgnoreDEFRatio_Friend": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
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
                  "modifier": "<a class=\"gModGreen\" id=\"1476311818\">RuanMei_Ability03_Area_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                  "valuePerStack": {
                    "Ability03_P1_PenetrateRatio": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
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
      "for": "<a class=\"gModGreen\" id=\"mod__1385395722\">RuanMei_PassiveArea</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Ability03_P1_PenetrateRatio) || RETURN",
                "displayLines": "Ability03_P1_PenetrateRatio",
                "constants": [],
                "variables": [
                  "Ability03_P1_PenetrateRatio"
                ]
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
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
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
                  "modifier": "<a class=\"gModGreen\" id=\"678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                    "displayLines": "(2 + 1)",
                    "constants": [],
                    "variables": [
                      2,
                      1
                    ]
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
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
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
                      "modifier": "<a class=\"gModGreen\" id=\"678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
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
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
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
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
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
      ],
      "stackData": [
        "Skill03_P1_PenetrateRatio"
      ],
      "latentQueue": [],
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
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
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
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__353149410\">RuanMei_Eidolon4_Passive_BreakDamageAddedUp</a>[<span class=\"descriptionNumberColor\">Chatoyant Éclat</span>]",
      "stackType": "ReplaceByCaster",
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
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_BreakDamageAdded</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Chatoyant Éclat"
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
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
              "modifier": "<a class=\"gModGreen\" id=\"353149410\">RuanMei_Eidolon4_Passive_BreakDamageAddedUp</a>[<span class=\"descriptionNumberColor\">Chatoyant Éclat</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__614915339\">RuanMei_Eidolon4_PassiveStackProperty</a>",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (SkillRank_Rank04_P1_BreakDamageAdded) || RETURN",
                "displayLines": "SkillRank_Rank04_P1_BreakDamageAdded",
                "constants": [],
                "variables": [
                  "SkillRank_Rank04_P1_BreakDamageAdded"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "SkillRank_Rank04_P1_BreakDamageAdded"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
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
      ],
      "stackData": [
        "SkillRank_Rank02_P1_AttackUpRatio"
      ],
      "latentQueue": [],
      "description": "When dealing DMG to enemy targets with Weakness Break, increases ATK by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_AttackUpRatio</span>.",
      "type": "Buff",
      "statusName": "Reedside Promenade"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__68128116\">RuanMei_Ability03_Eidolon1_DefenceIgnore</a>",
      "stackType": "ReplaceByCaster",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "Skill03_P1_PenetrateRatio"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1212418869\">RuanMei_Tree03_BreakDamageAddedValueShow</a>",
      "stackType": "ReplaceByCaster",
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[2] (1.2) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.06) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_BreakDamageAddedValue - 1.2) / 0.1)) * 0.06)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "SkillTree_PointB3_BreakDamageAddedValue",
                      1.2,
                      0.1,
                      0.06
                    ]
                  }
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
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "value": 0
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
                          "operator": "Variables[0] (0.36) || RETURN",
                          "displayLines": "0.36",
                          "constants": [],
                          "variables": [
                            0.36
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                          "value": {
                            "operator": "Variables[0] (0.36) || RETURN",
                            "displayLines": "0.36",
                            "constants": [],
                            "variables": [
                              0.36
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill02_P1_DamageAddedRatioFinal",
                  "value": {
                    "operator": "Variables[0] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[1] (0.32) || ADD || RETURN",
                    "displayLines": "(SkillTree_PointB3_BreakDamageAddedValue + 0.32)",
                    "constants": [],
                    "variables": [
                      "SkillTree_PointB3_BreakDamageAddedValue",
                      0.32
                    ]
                  }
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
                          "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                          "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                          "constants": [],
                          "variables": [
                            "Skill02_P1_DamageAddedRatioFinal"
                          ]
                        },
                        "Ability02_P2_StanceBreakAddedRatio_Friend": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[2] (1.2) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.06) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_BreakDamageAddedValue - 1.2) / 0.1)) * 0.06)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "SkillTree_PointB3_BreakDamageAddedValue",
                      1.2,
                      0.1,
                      0.06
                    ]
                  }
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
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "value": 0
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
                          "operator": "Variables[0] (0.36) || RETURN",
                          "displayLines": "0.36",
                          "constants": [],
                          "variables": [
                            0.36
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                          "value": {
                            "operator": "Variables[0] (0.36) || RETURN",
                            "displayLines": "0.36",
                            "constants": [],
                            "variables": [
                              0.36
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill02_P1_DamageAddedRatioFinal",
                  "value": {
                    "operator": "Variables[0] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[1] (0.32) || ADD || RETURN",
                    "displayLines": "(SkillTree_PointB3_BreakDamageAddedValue + 0.32)",
                    "constants": [],
                    "variables": [
                      "SkillTree_PointB3_BreakDamageAddedValue",
                      0.32
                    ]
                  }
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
                          "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                          "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                          "constants": [],
                          "variables": [
                            "Skill02_P1_DamageAddedRatioFinal"
                          ]
                        },
                        "Ability02_P2_StanceBreakAddedRatio_Friend": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-780236472\">RuanMei_Tree02_RecoverSP</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (Trace_PointB2_P1_SP) || RETURN",
                "displayLines": "Trace_PointB2_P1_SP",
                "constants": [],
                "variables": [
                  "Trace_PointB2_P1_SP"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        }
      ],
      "stackData": [
        "SkillTree_PointB2_P1_SP"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (SkillTree_PointB1_P1_BreakDamageAdded) || RETURN",
                "displayLines": "SkillTree_PointB1_P1_BreakDamageAdded",
                "constants": [],
                "variables": [
                  "SkillTree_PointB1_P1_BreakDamageAdded"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "SkillTree_PointB1_P1_BreakDamageAdded"
      ],
      "latentQueue": [],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">SkillTree_PointB1_P1_BreakDamageAdded</span>.",
      "type": "Buff",
      "statusName": "Inert Respiration"
    }
  ],
  "references": []
}