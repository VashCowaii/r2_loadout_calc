const configAbility = {
  "fileName": "4013016_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-726340599\">Enemy_W4_Claymore_01_LocalLegend_ElationListener</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1804376736\">W4_Claymore_01_LocalLegend_BattleScoreMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-223570948\">W4_Claymore_01_LocalLegend_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1804376736\">W4_Claymore_01_LocalLegend_BattleScoreMark</a>"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "No Time to Die",
                      "desc": "Trigger the enemy boss's \"Fight in Unity\" once in combat against Synergy Duo on any difficulty",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1977157728\">Enemy_W4_Claymore_01_LocalLegend_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "<=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "scope": "AITag",
              "variableName": "_LocalLegend_PreSelectFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Selected Target}}"
                },
                "living": true,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      {
                        "name": "Sort Sequence",
                        "TargetList": [
                          "Sort by AITag Params DamageCarry[Trimmed]",
                          {
                            "name": "Sort by Matching Weakness",
                            "matchFirst": true,
                            "defenders": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        ]
                      },
                      {
                        "name": "Target Index",
                        "indexType": "First"
                      }
                    ]
                  },
                  "scope": "AITag",
                  "variableName": "_LocalLegend_PreSelectFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Selected Target}}"
                    },
                    "value1": "DamageCarry",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "AITag"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}-{{EVENT[RoT] Dark Praetor: Selected Target}}"
                          },
                          {
                            "name": "Sort Sequence",
                            "TargetList": [
                              "Sort by AITag Params DamageCarry[Trimmed]",
                              {
                                "name": "Sort by Matching Weakness",
                                "matchFirst": true,
                                "defenders": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                }
                              }
                            ]
                          },
                          {
                            "name": "Target Index",
                            "indexType": "First"
                          }
                        ]
                      },
                      "scope": "AITag",
                      "variableName": "_LocalLegend_PreSelectFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}-{{EVENT[RoT] Dark Praetor: Selected Target}}"
                          },
                          {
                            "name": "Sort Sequence",
                            "TargetList": [
                              "Sort by AITag Params DamageCarry[Trimmed]",
                              {
                                "name": "Sort by Matching Weakness",
                                "matchFirst": true,
                                "defenders": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                }
                              }
                            ]
                          },
                          {
                            "name": "Target Index",
                            "indexType": "First"
                          }
                        ]
                      },
                      "scope": "AITag",
                      "variableName": "_LocalLegend_PreSelectFlag",
                      "value": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
            }
          ],
          "priorityLevel": -11
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
              "blockTeams": "Player Team",
              "entityType": "All"
            },
            {
              "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
              "blockTeams": "Neutral Team",
              "entityType": "All"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
            }
          ],
          "priorityLevel": -11
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
              "blockTeams": "Player Team",
              "entityType": "All"
            },
            {
              "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
              "blockTeams": "Neutral Team",
              "entityType": "All"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1733208615\">Enemy_W4_Claymore_01_LocalLegend_WhiteSummon</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": 30
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1813832219\">Enemy_W4_Claymore_01_LocalLegend_BlackSummon</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": 30
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span> and DMG received reduces by <span class=\"descriptionNumberColor\">MDF_ShowValue2</span>.",
      "type": "Other",
      "statusName": "Fight in Unity",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] (_DamageAddedRatio) || RETURN",
                "displayLines": "_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "_DamageAddedRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue2",
              "value": {
                "operator": "Variables[0] (_DamageReduceRatio) || RETURN",
                "displayLines": "_DamageReduceRatio",
                "constants": [],
                "variables": [
                  "_DamageReduceRatio"
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
                "operator": "Variables[0] (_DamageAddedRatio) || RETURN",
                "displayLines": "_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "_DamageAddedRatio"
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
                "operator": "Variables[0] (_DamageReduceRatio) || RETURN",
                "displayLines": "_DamageReduceRatio",
                "constants": [],
                "variables": [
                  "_DamageReduceRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]",
      "description": "This target can only attack the \"Titankin\" and can only be attacked by the \"Titankin.\"",
      "type": "Other",
      "statusName": "Fury Duel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]",
      "description": "This target can only attack the \"Titankin\" and can only be attacked by the \"Titankin.\"",
      "type": "Other",
      "statusName": "Fury Duel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]",
      "description": "This target can only attack \"Black Tide Creature\" and can only be attacked by \"Black Tide Creature.\"",
      "type": "Other",
      "statusName": "Black Tide Duel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]",
      "description": "This target can only attack \"Black Tide Creature\" and can only be attacked by \"Black Tide Creature.\"",
      "type": "Other",
      "statusName": "Black Tide Duel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Toggle Field Targets",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Toggle Field Targets",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]: Start[?]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    }
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "RuanMei_TriggerImprintEffect",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Toggle Field Targets",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Toggle Field Targets",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]: Start[?]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    }
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "RuanMei_TriggerImprintEffect",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1806977974\">Enemy_W4_Claymore_01_LocalLegend_Fatigue</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
      "stackType": "Replace",
      "description": "When this target deals DMG to enemy targets, the DMG received by enemy targets is reduced by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. This state is removed when the \"Corrosion\" state is removed.",
      "type": "Other",
      "effectName": "DMG Reduction",
      "statusName": "DMG Reduction",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": "MDF_ShowValue1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-23920605\">Enemy_W4_Claymore_01_LocalLegend_Status</a>",
      "modifierFlags": [
        "STAT_AITargetHigherPriority"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Stage ID",
                "ID": 426011,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-883767978\">Monster_W4_Claymore_01_LocalLegend_DamageAdd</a>",
                  "valuePerStack": {
                    "MDF_DamageAdded": {
                      "operator": "Variables[0] (UnusedUnderThisBase_10626) || RETURN",
                      "displayLines": "UnusedUnderThisBase_10626",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_10626"
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1542972511\">W4_Claymore_01_ListenTogether</a>"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Enemy"
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
                      "target": "{{Parameter Target}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "<=",
                "value2": 1,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
                  "priorityTag": "DefaultEnemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnterBattle",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "skillType": "ControlSkill03",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "SelectTarget"
                      },
                      "afterInjection": [],
                      "priorityTag": "SummonInstance"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill03",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "SelectTarget"
                  },
                  "afterInjection": [],
                  "priorityTag": "SummonInstance"
                }
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "variableName": "_CurrentHPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 0,
                      "count": 0,
                      "ID": "#1%"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CurrentHPRatio",
                        "compareType": "<=",
                        "value2": 0.01
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": 0,
                          "count": 1,
                          "ID": "#1%"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": 0,
                          "count": {
                            "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentHPRatio) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_CurrentHPRatio * 100))",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "WHOLE",
                              "_CurrentHPRatio"
                            ]
                          },
                          "ID": "#1%"
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
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "variableName": "_CurrentHPRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 0,
                      "count": 0,
                      "ID": "#1%"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CurrentHPRatio",
                        "compareType": "<=",
                        "value2": 0.01
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": 0,
                          "count": 1,
                          "ID": "#1%"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": 0,
                          "count": {
                            "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentHPRatio) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_CurrentHPRatio * 100))",
                            "constants": [
                              100
                            ],
                            "variables": [
                              "WHOLE",
                              "_CurrentHPRatio"
                            ]
                          },
                          "ID": "#1%"
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
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1806977974\">Enemy_W4_Claymore_01_LocalLegend_Fatigue</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (_AttackDownRatio) || RETURN",
                      "displayLines": "_AttackDownRatio",
                      "constants": [],
                      "variables": [
                        "_AttackDownRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1806977974\">Enemy_W4_Claymore_01_LocalLegend_Fatigue</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
                      "casterAssign": "TargetSelf"
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
                  "target": "{{Parameter Target}}.[[getCreator]]"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: Begin [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1542972511\">W4_Claymore_01_ListenTogether</a>"
            }
          ]
        },
        {
          "eventTrigger": "Departed State: End [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1495116910\">W4_Claymore_01_ListenDouble</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
      "modifierFlags": [
        "DisableAction"
      ],
      "description": "Restores a certain amount of HP and returns to battle during the next action.",
      "type": "Other",
      "statusName": "Indomitable Battle",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Recover",
              "priorityTag": "EnemyBuffSelf",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 1.0011718e-7
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase3"
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
                "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1767801569\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP02</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                    "value1": "InsertCheck02",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                    "invertCondition": true
                  }
                ]
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "_DelayRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Light Praetor: 3}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1121280189\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260100,
                        "compareType": ">=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260106,
                        "compareType": "<=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S4_1_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
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
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
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
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "mode": "Inc"
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Insert",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Light Praetor: 3}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                "invertCondition": true
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "_DelayRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260120,
                    "compareType": ">=",
                    "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260126,
                    "compareType": "<=",
                    "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-883767978\">Monster_W4_Claymore_01_LocalLegend_DamageAdd</a>",
      "stackType": "Replace",
      "stackData": [
        "MDF_DamageAdded"
      ],
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1777684731\">Standard_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_DamageAdded) || MUL || RETURN",
                  "displayLines": "(MDF_Layer * MDF_DamageAdded)",
                  "constants": [],
                  "variables": [
                    "MDF_Layer",
                    "MDF_DamageAdded"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1956673523\">MModifier_Monster_W4_Claymore_LocalLegend03_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
      "description": "Charging. Dispelled upon Weakness Break.",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Charging",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: Light Characters}}.[[addMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
          "aliveOnly": "True",
          "haloStatus": true
        }
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Characters}}.[[addMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1919435705\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP02</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                    "value1": "InsertCheck02",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                    "invertCondition": true
                  }
                ]
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "_DelayRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1663989605\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260100,
                        "compareType": ">=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260106,
                        "compareType": "<=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S4_1_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
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
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
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
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "mode": "Inc"
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_LocalLegend03_PassiveAbility_Insert",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                "invertCondition": true
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "_DelayRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "variableName": "_DelayRatio",
                  "value": {
                    "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                    "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                    "constants": [],
                    "variables": [
                      "_DelayRatio",
                      "_DelayAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260120,
                    "compareType": ">=",
                    "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260126,
                    "compareType": "<=",
                    "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__983561949\">W4_Claymore_LocalLegend_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BattleScoreCount"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "BattleScoreCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 12,
              "maxValue": 9999,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Qliphoth Counter",
                      "desc": "In a battle of any difficulty against the Greatsword Guardian, ally characters must restore \"HP Count\" a total of #1 times.",
                      "rarity": "Low",
                      "params": [
                        12
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
      "for": "<a class=\"gModGreen\" id=\"mod__-468473895\">Monster_W4_Claymore_LocalLegend_Status</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Claymore_LocalLegend_Ability06_Part01",
              "priorityTag": "STAGE_Enemy",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -90
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
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-55819136\">MModifier_Monster_W4_Claymore_LocalLegend_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
      "description": "Target is immediately knocked down after receiving <span class=\"descriptionNumberColor\">MDF_EntityScore</span> attack(s).",
      "type": "Other",
      "statusName": "HP Count",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_EntityScore",
                    "compareType": "<=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DamageLock",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Indirect DMG",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                      "value": "(MDF_MaxHp * 2)"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                      "value": 0
                    }
                  ]
                }
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
              "variableName": "_EntityScore",
              "value": {
                "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                "displayLines": "MDF_EntityScore",
                "constants": [],
                "variables": [
                  "MDF_EntityScore"
                ]
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1159891085\">Modifier_SpecialBattleAbility_DeathCountDown_Monster_CalNumber</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DamageLock",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "value1": "_EntityScore",
                    "compareType": ">=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "\"HP Count\" decreased"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_EntityScore",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageLock",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DamageLock",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DamageLock",
              "value": 0
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1159891085\">Modifier_SpecialBattleAbility_DeathCountDown_Monster_CalNumber</a>",
          "parse": [
            {
              "name": "Update Hit-Count Energy Bar",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "Left": {
                "operator": "Variables[0] (_EntityScore) || RETURN",
                "displayLines": "_EntityScore",
                "constants": [],
                "variables": [
                  "_EntityScore"
                ]
              },
              "Past": {
                "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                "displayLines": "MDF_EntityScore",
                "constants": [],
                "variables": [
                  "MDF_EntityScore"
                ]
              },
              "assignState": "True"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EntityScore",
              "value": {
                "operator": "Variables[0] (_EntityScore) || RETURN",
                "displayLines": "_EntityScore",
                "constants": [],
                "variables": [
                  "_EntityScore"
                ]
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_EntityScore",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 100,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1159891085\">Modifier_SpecialBattleAbility_DeathCountDown_Monster_CalNumber</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__809636038\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_DeadFlag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__842194945\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Servant</a>",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Enemy"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getSummoner]]"
                  },
                  "variableName": "MDF_AddStore",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_MonsterChangeCnt02",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "BattleScoreCount",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1311672660\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
      "description": "Target is immediately knocked down after receiving <span class=\"descriptionNumberColor\">MDF_EntityScore</span> attack(s).",
      "type": "Other",
      "statusName": "HP Count",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_TurnReset",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnReset",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastEntityScore",
                  "value": {
                    "operator": "Variables[0] (_EntityScore) || RETURN",
                    "displayLines": "_EntityScore",
                    "constants": [],
                    "variables": [
                      "_EntityScore"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_EntityScore",
                        "compareType": "<=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"809636038\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_DeadFlag</a>"
                      }
                    ]
                  },
                  {
                    "name": "Is Indirect DMG",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                      "value": "(MDF_MaxHp * 1000)"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                      "value": 0
                    }
                  ]
                }
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
              "variableName": "_EntityScore",
              "value": {
                "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                "displayLines": "MDF_EntityScore",
                "constants": [],
                "variables": [
                  "MDF_EntityScore"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_MaxEntityScore",
              "value": {
                "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                "displayLines": "MDF_EntityScore",
                "constants": [],
                "variables": [
                  "MDF_EntityScore"
                ]
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "MDF_AddStore"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_LastEntityScore",
              "value": {
                "operator": "Variables[0] (_EntityScore) || RETURN",
                "displayLines": "_EntityScore",
                "constants": [],
                "variables": [
                  "_EntityScore"
                ]
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Enemy"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_AddStore",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_MonsterChangeCnt02",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "BattleScoreCount",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_EntityScore",
                "compareType": ">=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "\"HP Count\" decreased"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_EntityScore",
                  "value": -1,
                  "max": 100
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is HP-Locked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_EntityScore",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": 10
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Get Revived [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_EntityScore",
              "value": 1
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "_MonsterChangeCnt02",
              "context": "TargetEntity",
              "value": 1
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "BattleScoreCount",
              "value": 1
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EntityScore",
              "value": {
                "operator": "Variables[0] (_EntityScore) || RETURN",
                "displayLines": "_EntityScore",
                "constants": [],
                "variables": [
                  "_EntityScore"
                ]
              }
            },
            {
              "name": "Update Hit-Count Energy Bar",
              "Left": {
                "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                "displayLines": "MDF_EntityScore",
                "constants": [],
                "variables": [
                  "MDF_EntityScore"
                ]
              },
              "Past": {
                "operator": "Variables[0] (MDF_LastEntityScore) || RETURN",
                "displayLines": "MDF_LastEntityScore",
                "constants": [],
                "variables": [
                  "MDF_LastEntityScore"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_LastEntityScore",
              "value": {
                "operator": "Variables[0] (_EntityScore) || RETURN",
                "displayLines": "_EntityScore",
                "constants": [],
                "variables": [
                  "_EntityScore"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Character"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variable": "_MonsterChangeCnt",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_LevelMinEntityScore",
                  "scope": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_EntityScore",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_LevelMinEntityScore) || RETURN",
                      "displayLines": "MDF_LevelMinEntityScore",
                      "constants": [],
                      "variables": [
                        "MDF_LevelMinEntityScore"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_MonsterChangeCnt",
                      "value": {
                        "operator": "Variables[0] (_EntityScore) || RETURN",
                        "displayLines": "_EntityScore",
                        "constants": [],
                        "variables": [
                          "_EntityScore"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_EntityScore",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 100,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (_MonsterChangeCnt02) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_MonsterChangeCnt02 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_MonsterChangeCnt02"
                ]
              },
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260010,
                        "compareType": ">=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260016,
                        "compareType": "<=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_BattleTarget_LocalLegend_S1_2_Check",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (_MonsterChangeCnt) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_MonsterChangeCnt - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_MonsterChangeCnt"
                ]
              },
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260010,
                        "compareType": ">=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260016,
                        "compareType": "<=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_BattleTarget_LocalLegend_S1_3_Check",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (_MonsterChangeCnt02) || RETURN",
                "displayLines": "_MonsterChangeCnt02",
                "constants": [],
                "variables": [
                  "_MonsterChangeCnt02"
                ]
              },
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260010,
                        "compareType": ">=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260016,
                        "compareType": "<=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_BattleTarget_LocalLegend_S1_2_Check",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 4
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (_MonsterChangeCnt) || RETURN",
                "displayLines": "_MonsterChangeCnt",
                "constants": [],
                "variables": [
                  "_MonsterChangeCnt"
                ]
              },
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260010,
                        "compareType": ">=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260016,
                        "compareType": "<=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_BattleTarget_LocalLegend_S1_3_Check",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 4
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_AddStore",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_EntityScore",
                  "value": 1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_AddStore",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1468533169\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Status</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_SelfP2_LifeCount) || RETURN",
                          "displayLines": "_SelfP2_LifeCount",
                          "constants": [],
                          "variables": [
                            "_SelfP2_LifeCount"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_Shooter_00"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                  "valuePerStack": {
                    "MDF_EntityScore": {
                      "operator": "Variables[0] (_Shooter_LifeCount) || RETURN",
                      "displayLines": "_Shooter_LifeCount",
                      "constants": [],
                      "variables": [
                        "_Shooter_LifeCount"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_AML_Minion03_01"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                  "valuePerStack": {
                    "MDF_EntityScore": {
                      "operator": "Variables[0] (_Minion03_LifeCount) || RETURN",
                      "displayLines": "_Minion03_LifeCount",
                      "constants": [],
                      "variables": [
                        "_Minion03_LifeCount"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_Scholar_00"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                  "valuePerStack": {
                    "MDF_EntityScore": {
                      "operator": "Variables[0] (_Scholar_LifeCount) || RETURN",
                      "displayLines": "_Scholar_LifeCount",
                      "constants": [],
                      "variables": [
                        "_Scholar_LifeCount"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_Strongman_00"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                  "valuePerStack": {
                    "MDF_EntityScore": {
                      "operator": "Variables[0] (_Strongman_LifeCount) || RETURN",
                      "displayLines": "_Strongman_LifeCount",
                      "constants": [],
                      "variables": [
                        "_Strongman_LifeCount"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_Shooter_00"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Shooter_LifeCount) || RETURN",
                          "displayLines": "_Shooter_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Shooter_LifeCount"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_AML_Minion03_01"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Minion03_LifeCount) || RETURN",
                          "displayLines": "_Minion03_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Minion03_LifeCount"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_Scholar_00"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Scholar_LifeCount) || RETURN",
                          "displayLines": "_Scholar_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Scholar_LifeCount"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_Strongman_00"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Strongman_LifeCount) || RETURN",
                          "displayLines": "_Strongman_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Strongman_LifeCount"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-707065504\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Status</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "_MonsterChangeCnt",
              "value": {
                "operator": "Variables[0] (_Avatar_LifeCount) || RETURN",
                "displayLines": "_Avatar_LifeCount",
                "constants": [],
                "variables": [
                  "_Avatar_LifeCount"
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1311672660\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                  "valuePerStack": {
                    "MDF_EntityScore": {
                      "operator": "Variables[0] (_Avatar_LifeCount) || RETURN",
                      "displayLines": "_Avatar_LifeCount",
                      "constants": [],
                      "variables": [
                        "_Avatar_LifeCount"
                      ]
                    },
                    "MDF_BattleTarget_S1_2_Param": {
                      "operator": "Variables[0] (_BattleTarget_S1_2_Param) || RETURN",
                      "displayLines": "_BattleTarget_S1_2_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S1_2_Param"
                      ]
                    },
                    "MDF_BattleTarget_S1_3_Param": {
                      "operator": "Variables[0] (_BattleTarget_S1_3_Param) || RETURN",
                      "displayLines": "_BattleTarget_S1_3_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S1_3_Param"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Memosprites}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"842194945\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Servant</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1311672660\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                  "valuePerStack": {
                    "MDF_EntityScore": {
                      "operator": "Variables[0] (_Avatar_LifeCount) || RETURN",
                      "displayLines": "_Avatar_LifeCount",
                      "constants": [],
                      "variables": [
                        "_Avatar_LifeCount"
                      ]
                    },
                    "MDF_BattleTarget_S1_2_Param": {
                      "operator": "Variables[0] (_BattleTarget_S1_2_Param) || RETURN",
                      "displayLines": "_BattleTarget_S1_2_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S1_2_Param"
                      ]
                    },
                    "MDF_BattleTarget_S1_3_Param": {
                      "operator": "Variables[0] (_BattleTarget_S1_3_Param) || RETURN",
                      "displayLines": "_BattleTarget_S1_3_Param",
                      "constants": [],
                      "variables": [
                        "_BattleTarget_S1_3_Param"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"842194945\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Servant</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-55819136\">MModifier_Monster_W4_Claymore_LocalLegend_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
      "description": "Charging. Dispelled upon Weakness Break.",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Charging",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "aliveOnly": "True",
          "haloStatus": true
        }
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Departed State: End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__544728190\">MModifier_Monster_W4_Claymore_LocalLegend_Part3</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-479922792\">Monster_W4_Claymore_LocalLegend_PartController_LockHP</a>",
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
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260010,
                        "compareType": ">=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260016,
                        "compareType": "<=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S1_1_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "MDF_AddStore",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_MonsterChangeCnt02",
                      "context": "TargetEntity",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "BattleScoreCount",
                      "value": 1
                    }
                  ]
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_LocalLegend_PassiveAbility_Insert",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}.[[getSummoner]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}