const configAbility = {
  "fileName": "Aventurine_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1828815823\">ADV_StageAbility_Maze_Aventurine_SSR_2</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-343712064\">ADV_StageAbility_Maze_Aventurine_SR_2</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-492169293\">ADV_StageAbility_Maze_Aventurine_R_2</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-172812292\">ADV_StageAbility_Maze_Aventurine_SSR</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__543061849\">ADV_StageAbility_Maze_Aventurine_SR</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-685644514\">ADV_StageAbility_Maze_Aventurine_R</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-314126453\">Aventurine_Maze_Defence</a>[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "The Red or the Black",
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
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentDefence2",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__462082235\">Aventurine_ResistCtrlCD</a>[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "The Talent's Crowd Control debuff resist effect cannot be triggered yet.",
      "type": "Other",
      "statusName": "Shot Loaded Right",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2133893396\">Aventurine_ResistCtrl</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2133893396\">Aventurine_ResistCtrl</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "Debuff Immunity[?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"462082235\">Aventurine_ResistCtrlCD</a>[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"462082235\">Aventurine_ResistCtrlCD</a>[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
                  "duration": {
                    "displayLines": "2"
                  }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-545204368\">Aventurine_PointB3_ShieldMark</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2007691702\">Aventurine_Eidolon1_Status</a>[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Prisoner's Dilemma",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1024856711\">Aventurine_Trace03_Status</a>[<span class=\"descriptionNumberColor\">Bingo!</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After a teammate with \"Fortified Wager\" uses Follow-Up ATK, Aventurine gains 1 \"Blind Bet.\" This effect can be triggered <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> more time(s).",
      "type": "Other",
      "statusName": "Bingo!",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1822642729\">Aventurine_Trace03_AddShield</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1927939151\">Aventurine_Trace03_Trigger</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentDefence2",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield",
                        "invertCondition": true
                      },
                      {
                        "name": "Target Has Lowest/Highest Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "partOf": {
                          "name": "Target Sequence",
                          "TargetList": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Shield",
                                "invertCondition": true
                              }
                            }
                          ]
                        },
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "minOrMax": "Min"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      {
                        "name": "Target Has Lowest/Highest Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "partOf": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                        "minOrMax": "Min"
                      }
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-545204368\">Aventurine_PointB3_ShieldMark</a>"
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-969049614\">Aventurine_RecordCurrentShield</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_InitShieldValue": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.072) + 96)"
                    },
                    "MDF_MaxShieldRatio": {
                      "displayLines": "2"
                    },
                    "MDF_ForceShield": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "duration": 3,
                  "valuePerStack": {
                    "MDF_InitShieldValue": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.072) + 96)"
                    },
                    "MDF_MaxShieldRatio": {
                      "displayLines": "2"
                    },
                    "MDF_ForceShield": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
                    }
                  }
                }
              ]
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
                "modifier": "<a class=\"gModGreen\" id=\"-545204368\">Aventurine_PointB3_ShieldMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-969049614\">Aventurine_RecordCurrentShield</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "duration": 3,
                  "valuePerStack": {
                    "MDF_InitShieldValue": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.072) + 96)"
                    },
                    "MDF_MaxShieldRatio": {
                      "displayLines": "2"
                    },
                    "MDF_ForceShield": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
                    }
                  }
                }
              ]
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-545204368\">Aventurine_PointB3_ShieldMark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_TeammateCount1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Random Event",
                          "odds": [
                            0.2,
                            0.2,
                            0.2
                          ],
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "value": 2,
                              "variableName": "MDF_TeammateCount1"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 3,
                              "variableName": "MDF_TeammateCount1"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 4,
                              "variableName": "MDF_TeammateCount1"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
                  "valuePerStack": {
                    "MDF_CanTriggerShieldEffect": 0,
                    "MDF_ResistanceRatio": {
                      "displayLines": "0.5"
                    },
                    "MDF_TeammateCount": {
                      "displayLines": "MDF_TeammateCount1"
                    },
                    "MDF_CritDmg1": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1211629419\">Aventurine_StackableShield</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Shield"
      ],
      "stackData": [
        "MDF_InitShieldValue",
        "MDF_MaxShieldRatio",
        "MDF_ForceShield"
      ],
      "type": "Buff",
      "effectName": "Shield",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2007691702\">Aventurine_Eidolon1_Status</a>[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2143791995\">Aventurine_Ability02_ShieldEffect2</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2127014376\">Aventurine_Ability02_ShieldEffect3</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2050509587\">Aventurine_Ability02_ShieldEffect4</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-447417403\">Aventurine_Ability02_BlackJack</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2133893396\">Aventurine_ResistCtrl</a>"
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            },
            {
              "name": "Stack Shield",
              "stackValue": {
                "displayLines": "MDF_InitShieldValue"
              },
              "stackLimit": {
                "displayLines": "(MDF_ForceShield * MDF_MaxShieldRatio)"
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
                "displayLines": "0.5"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"462082235\">Aventurine_ResistCtrlCD</a>[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2133893396\">Aventurine_ResistCtrl</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)"
              },
              "variableName": "MDF_InsertLeftValue"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Bingo!"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_InsertLeftValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1024856711\">Aventurine_Trace03_Status</a>[<span class=\"descriptionNumberColor\">Bingo!</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-447417403\">Aventurine_Ability02_BlackJack</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"2143791995\">Aventurine_Ability02_ShieldEffect2</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1240934840\">Aventurine_RemoveAttackValue</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_Fatigue"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1071693817\">Aventurine_Eidolon6_Sub</a>[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
      "type": "Buff",
      "statusName": "Stag Hunt Game",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_AttackAddRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1670112654\">Aventurine_Eidolon6</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_ShieldCount"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_ShieldCount + 1)"
                          },
                          "variableName": "MDF_ShieldCount"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ShieldCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_AttackAddedRatio",
                      "resetValue": {
                        "displayLines": "(MDF_ShieldCount * 0.5)"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_AttackAddedRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "1.5"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1071693817\">Aventurine_Eidolon6_Sub</a>[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddRatio": {
                              "displayLines": "1.5"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1071693817\">Aventurine_Eidolon6_Sub</a>[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddRatio": {
                              "displayLines": "(MDF_ShieldCount * 0.5)"
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
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_ShieldCount"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_ShieldCount + 1)"
                          },
                          "variableName": "MDF_ShieldCount"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ShieldCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_AttackAddedRatio",
                      "resetValue": {
                        "displayLines": "(MDF_ShieldCount * 0.5)"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_AttackAddedRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "1.5"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1071693817\">Aventurine_Eidolon6_Sub</a>[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddRatio": {
                              "displayLines": "1.5"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1071693817\">Aventurine_Eidolon6_Sub</a>[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddRatio": {
                              "displayLines": "(MDF_ShieldCount * 0.5)"
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1071693817\">Aventurine_Eidolon6_Sub</a>[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1728845008\">Aventurine_Eidolon4_CountDown</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1636557416\">Aventurine_Eidolon4</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1636557416\">Aventurine_Eidolon4</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1245057354\">Aventurine_Eidolon2_Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1438365222\">Aventurine_Eidolon2_ResistanceDown</a>[<span class=\"descriptionNumberColor\">Bounded Rationality</span>]",
      "stackType": "ReplaceByCaster",
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "Bounded Rationality",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-422728063\">Aventurine_Trace01_Sub</a>[<span class=\"descriptionNumberColor\">Leverage</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "statusName": "Leverage",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue * 0.01))"
              },
              "variableName": "MDF_Multipler"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Multipler * 0.02)"
              },
              "variableName": "MDF_PropertyValue2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_PropertyValue2",
                "compareType": ">=",
                "value2": {
                  "displayLines": "0.48"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.48"
                  },
                  "variableName": "MDF_PropertyValue2"
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1167695204\">Aventurine_Trace01</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-741151706\">Aventurine_Trace01_Sub</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-741151706\">Aventurine_Trace01_Sub</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentDefence",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentDefenceConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_CurrentDefence - MDF_CurrentDefenceConvert)"
              },
              "variableName": "MDF_CurrentDefence2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CurrentDefence2",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(1600 + 100)"
                }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-422728063\">Aventurine_Trace01_Sub</a>[<span class=\"descriptionNumberColor\">Leverage</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-422728063\">Aventurine_Trace01_Sub</a>[<span class=\"descriptionNumberColor\">Leverage</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(MDF_CurrentDefence2 - 1600)"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-422728063\">Aventurine_Trace01_Sub</a>[<span class=\"descriptionNumberColor\">Leverage</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(MDF_CurrentDefence2 - 1600)"
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-422728063\">Aventurine_Trace01_Sub</a>[<span class=\"descriptionNumberColor\">Leverage</span>]"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-741151706\">Aventurine_Trace01_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__674084232\">Aventurine_Passive_AddDefence</a>[<span class=\"descriptionNumberColor\">Unexpected Hanging Paradox</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_DefencePercentage</span>",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "Unexpected Hanging Paradox",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_BaseDefence",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.4"
              },
              "variableName": "MDF_DefencePercentage"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "0.4"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-839248266\">Aventurine_Ability03_CritDmgIncrease</a>[<span class=\"descriptionNumberColor\">Unnerved</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increase the CRIT DMG dealt by allies to this unit by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "The received CRIT DMG increases",
      "statusName": "Unnerved",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "MDF_PropertyValue"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-989533278\">Aventurine_Ability03_CoinAdd</a>",
      "type": "Buff",
      "effectName": "Blind Bet received: <unbreak>#1[i]</unbreak> Point(s)",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Variable with Random Value",
              "scope": "ContextModifier",
              "integer": true,
              "variableName": "MDF_Coin",
              "min": 1,
              "max": {
                "displayLines": "(7 + 1)"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
              "addStacksPerTrigger": {
                "displayLines": "MDF_Coin"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2050509587\">Aventurine_Ability02_ShieldEffect4</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Fortified Wager: Clubs",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2127014376\">Aventurine_Ability02_ShieldEffect3</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Fortified Wager: Diamonds",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2143791995\">Aventurine_Ability02_ShieldEffect2</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Fortified Wager: Hearts",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-447417403\">Aventurine_Ability02_BlackJack</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 2 points of Blind Bet.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Fortified Wager: Spades",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1566932811\">Aventurine_Ability02_ShieldEffect</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_CanTriggerShieldEffect",
        "MDF_ResistanceRatio",
        "MDF_TeammateCount",
        "MDF_CritDmg1"
      ],
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
                "value1": "MDF_TeammateCount",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextModifier"
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
                    "value1": "MDF_CanTriggerShieldEffect",
                    "compareType": "=",
                    "value2": 1
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "displayLines": "MDF_ResistanceRatio"
                  }
                },
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-447417403\">Aventurine_Ability02_BlackJack</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2143791995\">Aventurine_Ability02_ShieldEffect2</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2127014376\">Aventurine_Ability02_ShieldEffect3</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2050509587\">Aventurine_Ability02_ShieldEffect4</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                      "statValue": {
                        "displayLines": "MDF_CritDmg1"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2007691702\">Aventurine_Eidolon1_Status</a>[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_CritDmg1"
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
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                      "statValue": {
                        "displayLines": "MDF_CritDmg1"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2007691702\">Aventurine_Eidolon1_Status</a>[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_CritDmg1"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TeammateCount",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "ContextModifier"
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
                        "value1": "MDF_CanTriggerShieldEffect",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "displayLines": "MDF_ResistanceRatio"
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"2143791995\">Aventurine_Ability02_ShieldEffect2</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2127014376\">Aventurine_Ability02_ShieldEffect3</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2050509587\">Aventurine_Ability02_ShieldEffect4</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-447417403\">Aventurine_Ability02_BlackJack</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
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
                        "value1": "MDF_TeammateCount",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "ContextModifier"
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
                            "value1": "MDF_CanTriggerShieldEffect",
                            "compareType": "=",
                            "value2": 1
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "displayLines": "MDF_ResistanceRatio"
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"2127014376\">Aventurine_Ability02_ShieldEffect3</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2143791995\">Aventurine_Ability02_ShieldEffect2</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2050509587\">Aventurine_Ability02_ShieldEffect4</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-447417403\">Aventurine_Ability02_BlackJack</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
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
                            "value1": "MDF_CanTriggerShieldEffect",
                            "compareType": "=",
                            "value2": 1
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "displayLines": "MDF_ResistanceRatio"
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-2050509587\">Aventurine_Ability02_ShieldEffect4</a>[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1192823436\">Aventurine_Ability02_ForceContrlShield</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-346814527\">Aventurine_Passive_ShieldEnergy</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "stackLimit": 10,
      "execute": [
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Layer",
                "compareType": ">=",
                "value2": 7,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Layer"
                  },
                  "maximum": 7,
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 2,
                  "cooldown": 0
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Layer"
                  },
                  "maximum": 7,
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": 7,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
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
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": 7,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": 7,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
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
      "for": "<a class=\"gModGreen\" id=\"mod__1431725730\">Aventurine_Passive_AddEnergyMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__890966085\">Aventurine_Passive_OnAfterBeingAttacked</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Bingo!"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_InsertAttackCount",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "3"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_IsInsert"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1024856711\">Aventurine_Trace03_Status</a>[<span class=\"descriptionNumberColor\">Bingo!</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1431725730\">Aventurine_Passive_AddEnergyMark</a>",
                      "addStacksPerTrigger": {
                        "displayLines": "(MDF_BlackJackEnergy + 1)"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1431725730\">Aventurine_Passive_AddEnergyMark</a>",
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_IsInsert"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "priorityLevel": -100,
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
                    "value1": "MDF_IsInsert",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_InsertAttackCount + 1)"
                  },
                  "variableName": "MDF_InsertAttackCount"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1024856711\">Aventurine_Trace03_Status</a>[<span class=\"descriptionNumberColor\">Bingo!</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_InsertAttackCount",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "3"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1024856711\">Aventurine_Trace03_Status</a>[<span class=\"descriptionNumberColor\">Bingo!</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1431725730\">Aventurine_Passive_AddEnergyMark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer2",
                  "modifierName": "<a class=\"gModGreen\" id=\"1431725730\">Aventurine_Passive_AddEnergyMark</a>",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
                  "addStacksPerTrigger": {
                    "displayLines": "MDF_Layer2"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1431725730\">Aventurine_Passive_AddEnergyMark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-106868585\">Aventurine_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_InsertAttackCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Bingo!"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1024856711\">Aventurine_Trace03_Status</a>[<span class=\"descriptionNumberColor\">Bingo!</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1245057354\">Aventurine_Eidolon2_Mark</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "3"
              },
              "variableName": "MDF_InsertAttackLimit"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"890966085\">Aventurine_Passive_OnAfterBeingAttacked</a>",
              "valuePerStack": {
                "MDF_BlackJackEnergy": {
                  "displayLines": "1"
                }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1670112654\">Aventurine_Eidolon6</a>"
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
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"890966085\">Aventurine_Passive_OnAfterBeingAttacked</a>",
                  "valuePerStack": {
                    "MDF_BlackJackEnergy": {
                      "displayLines": "1"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -79,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Hot Hand"
                  },
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
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CurrentDefence2",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-969049614\">Aventurine_RecordCurrentShield</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_InitShieldValue": {
                      "displayLines": "(1 * ((MDF_CurrentDefence2 * 0.24) + 320))"
                    },
                    "MDF_MaxShieldRatio": {
                      "displayLines": "2"
                    },
                    "MDF_ForceShield": {
                      "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
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
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "MDF_TeammateCount1"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Random Event",
                              "odds": [
                                0.2,
                                0.2,
                                0.2
                              ],
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "MDF_TeammateCount1"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 3,
                                  "variableName": "MDF_TeammateCount1"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 4,
                                  "variableName": "MDF_TeammateCount1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
                          "valuePerStack": {
                            "MDF_ResistanceRatio": {
                              "displayLines": "0.5"
                            },
                            "MDF_TeammateCount": {
                              "displayLines": "MDF_TeammateCount1"
                            },
                            "MDF_CritDmg1": {
                              "displayLines": "0.2"
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
      ]
    }
  ],
  "references": []
}