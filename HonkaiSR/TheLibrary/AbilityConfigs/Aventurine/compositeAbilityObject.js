const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Aventurine",
  "trimCharacterName": "Aventurine",
  "abilityList": [
    "Aventurine_Modifiers",
    "Aventurine_Aventurine_Trace02",
    "Aventurine_Aventurine_TechniqueInLevel_01",
    "Aventurine_Aventurine_TechniqueInLevel_00",
    "Aventurine_LocalPlayer_StandardAbility_AttackBreak",
    "Aventurine_LocalPlayer_Aventurine_TechniqueUsage",
    "Aventurine_LocalPlayer_Aventurine_NormalAtk01",
    "Aventurine_Aventurine_TechniqueInLevel",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
    "Aventurine_Aventurine_PassiveAbility01",
    "Aventurine_Aventurine_Ability03_Part02",
    "Aventurine_Aventurine_Ability03_Part01",
    "Aventurine_Aventurine_Ability03_EnterReady",
    "Aventurine_Aventurine_Ability02_Part02",
    "Aventurine_Aventurine_Ability02_Part01",
    "Aventurine_Aventurine_Ability01_Part02",
    "Aventurine_Aventurine_Ability01_Part01",
    "Aventurine_Aventurine_TechniqueInLevel_02",
    "Aventurine_Functions"
  ],
  "abilityObject": {
    "Aventurine_Modifiers": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
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
    },
    "Aventurine_Aventurine_Trace02": {
      "fileName": "Aventurine_Aventurine_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aventurine_Aventurine_TechniqueInLevel_01": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel_01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-691123302\">Aventurine_Maze_Modifier_01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-691123302\">Aventurine_Maze_Modifier_01</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-314126453\">Aventurine_Maze_Defence</a>[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.36"
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aventurine_Aventurine_TechniqueInLevel_00": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel_00",
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
          "modifier": "<a class=\"gModGreen\" id=\"-674345683\">Aventurine_Maze_Modifier_00</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-674345683\">Aventurine_Maze_Modifier_00</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-314126453\">Aventurine_Maze_Defence</a>[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.24"
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aventurine_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Aventurine_LocalPlayer_StandardAbility_AttackBreak",
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
    "Aventurine_LocalPlayer_Aventurine_TechniqueUsage": {
      "fileName": "Aventurine_LocalPlayer_Aventurine_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_no_ssr_times",
            "compareType": ">=",
            "value2": {
              "displayLines": "(UNKNOWN_PITY_OBJECT - 1)"
            },
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "value": 100,
              "variableName": "_random"
            }
          ],
          "failed": [
            {
              "name": "Define Variable with Random Value",
              "scope": "ContextAbility",
              "integer": true,
              "variableName": "_random",
              "min": 0,
              "max": 100
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((UNKNOWN_ODDS_1 + UNKNOWN_ODDS_2) + UNKNOWN_ODDS_3)"
          },
          "variableName": "_sum_probability"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_random",
            "compareType": "<",
            "value2": {
              "displayLines": "((UNKNOWN_ODDS_1 / _sum_probability) * 100)"
            },
            "contextScope": "ContextAbility"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_result"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_random",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(100 - ((UNKNOWN_ODDS_3 / _sum_probability) * 100))"
                },
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 2,
                  "variableName": "_result"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_result"
                },
                {
                  "name": "Define Variable with Random Value",
                  "scope": "ContextAbility",
                  "integer": true,
                  "variableName": "_random",
                  "min": 0,
                  "max": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_random",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "ContextAbility"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_random",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextAbility"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_result",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "value": 0,
              "variableName": "_no_ssr_times"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "value": {
                "displayLines": "(_no_ssr_times + 1)"
              },
              "variableName": "_no_ssr_times"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_result",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_result",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "130401(Avatar_Aventurine_00_SkillMazeInLevel_00)",
              "duration": -1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "buffID": 130402,
                    "modifier": null,
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "buffID": 130403,
                    "modifier": null,
                    "invertCondition": true
                  }
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "130404()",
              "duration": -1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "buffID": 130402,
                    "modifier": null
                  },
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "buffID": 130403,
                    "modifier": null
                  }
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_result",
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
                  "modifier": null,
                  "ID": "130402(Avatar_Aventurine_00_SkillMazeInLevel_01)",
                  "duration": -1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "buffID": 130403,
                        "modifier": null,
                        "invertCondition": true
                      }
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": null,
                  "ID": "130405()",
                  "duration": -1,
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "buffID": 130403,
                    "modifier": null
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
                  "modifier": null,
                  "ID": "130403(Avatar_Aventurine_00_SkillMazeInLevel_02)",
                  "duration": -1
                }
              ]
            }
          ]
        },
        "Submit Technique Use"
      ],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "value": 0,
          "variableName": "_no_ssr_times"
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aventurine_LocalPlayer_Aventurine_NormalAtk01": {
      "fileName": "Aventurine_LocalPlayer_Aventurine_NormalAtk01",
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
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            },
            {
              "name": "Shot Fired"
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            },
            {
              "name": "Shot Fired"
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
    "Aventurine_Aventurine_TechniqueInLevel": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel",
      "childAbilityList": [
        "Aventurine_Aventurine_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02": {
      "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "modifier": "<a class=\"gModGreen\" id=\"674084232\">Aventurine_Passive_AddDefence</a>[<span class=\"descriptionNumberColor\">Unexpected Hanging Paradox</span>]",
              "duration": {
                "displayLines": "2"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "3"
              },
              "variableName": "MDF_AttackCount"
            }
          ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1927939151\">Aventurine_Trace03_Trigger</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "MDF_Layer2",
          "modifierName": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
          "multiplier": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-346814527\">Aventurine_Passive_ShieldEnergy</a>",
          "addStacksPerTrigger": {
            "displayLines": "(MDF_Layer2 - 7)"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_AttackGap",
          "resetValue": {
            "displayLines": "(1 / (7 + MDF_AttackCount))"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "(7 + MDF_AttackCount)"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "0.25"
                    },
                    "dmgFormula": "DEF Scaling",
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "attackType": "Follow-up",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Aventurine_Aventurine_PassiveAbility01_InsertAbility": {
      "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Shot Loaded Right"
        },
        "Deleted bullshit",
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
          "ability": "Aventurine_PassiveAbility01_InsertAbilityPhase02",
          "isTrigger": true
        }
      ],
      "onAbort": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1927939151\">Aventurine_Trace03_Trigger</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Aventurine_Aventurine_PassiveAbility01": {
      "fileName": "Aventurine_Aventurine_PassiveAbility01",
      "childAbilityList": [
        "Aventurine_Aventurine_PassiveAbility01",
        "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
        "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
        "Aventurine_Aventurine_PassiveAbility01_InsertAbility_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 1,
      "toughnessList": [
        3.3333333333333335,
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
          "modifier": "<a class=\"gModGreen\" id=\"-106868585\">Aventurine_Passive</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 7,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Leverage"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1167695204\">Aventurine_Trace01</a>"
            }
          ]
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
    "Aventurine_Aventurine_Ability03_Part02": {
      "fileName": "Aventurine_Aventurine_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-989533278\">Aventurine_Ability03_CoinAdd</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-839248266\">Aventurine_Ability03_CritDmgIncrease</a>[<span class=\"descriptionNumberColor\">Unnerved</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "2.7"
            },
            "dmgFormula": "DEF Scaling",
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-969049614\">Aventurine_RecordCurrentShield</a>"
            },
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
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-626881481\">Aventurine_Heal_Mark</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Aventurine_Aventurine_Ability03_Part01": {
      "fileName": "Aventurine_Aventurine_Ability03_Part01",
      "childAbilityList": [
        "Aventurine_Aventurine_Ability03_Camera",
        "Aventurine_Aventurine_Ability03_EnterReady",
        "Aventurine_Aventurine_Ability03_Part01",
        "Aventurine_Aventurine_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
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
          "ability": "Aventurine_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 801501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1691894969\">Enemy_WMonster_W0_Boss_Unselectable</a>[<span class=\"descriptionNumberColor\">Vestige Valor</span>]",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 801502,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
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
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"461293746\">Monster_W2_Huanlong_Part1</a>"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"444516127\">Monster_W2_Huanlong_Part2</a>"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"427738508\">Monster_W2_Huanlong_Part3</a>"
                      }
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
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Aventurine_Aventurine_Ability03_EnterReady": {
      "fileName": "Aventurine_Aventurine_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Aventurine_Aventurine_Ability02_Part02": {
      "fileName": "Aventurine_Aventurine_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>"
        },
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
              "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
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
          "name": "Looped Event",
          "execute": [
            "Move to Next Listed Target",
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
                  "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
              "valuePerStack": {
                "MDF_CanTriggerShieldEffect": 1,
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
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0"
          },
          "variableName": "MDF_TeammateCount1"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Aventurine_Aventurine_Ability02_Part01": {
      "fileName": "Aventurine_Aventurine_Ability02_Part01",
      "childAbilityList": [
        "Aventurine_Aventurine_Ability02_Camera",
        "Aventurine_Aventurine_Ability02_Part01",
        "Aventurine_Aventurine_Ability02_Part02"
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
          "ability": "Aventurine_Ability02_Part02",
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
    "Aventurine_Aventurine_Ability01_Part02": {
      "fileName": "Aventurine_Aventurine_Ability01_Part02",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1438365222\">Aventurine_Eidolon2_ResistanceDown</a>[<span class=\"descriptionNumberColor\">Bounded Rationality</span>]",
              "duration": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.12"
                }
              }
            }
          ]
        },
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
              "displayLines": "1"
            },
            "dmgFormula": "DEF Scaling",
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
    "Aventurine_Aventurine_Ability01_Part01": {
      "fileName": "Aventurine_Aventurine_Ability01_Part01",
      "childAbilityList": [
        "Aventurine_Aventurine_Ability01_Camera",
        "Aventurine_Aventurine_Ability01_Part01",
        "Aventurine_Aventurine_Ability01_Part02"
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
          "ability": "Aventurine_Ability01_Part02",
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
    "Aventurine_Aventurine_TechniqueInLevel_02": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel_02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-707900921\">Aventurine_Maze_Modifier_02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-707900921\">Aventurine_Maze_Modifier_02</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-314126453\">Aventurine_Maze_Defence</a>[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.6"
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aventurine_Functions": {
      "fileName": "Aventurine_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-969049614\">Aventurine_RecordCurrentShield</a>",
          "parse": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "tmp_currentshield",
                      "scope": "ContextTaskTemplate"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "valueType": "CurrentShield",
                      "variableName": "tmp_currentshield",
                      "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                      "multiplier": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "AventurineShieldValue",
                      "resetValue": {
                        "displayLines": "tmp_currentshield"
                      },
                      "scope": "TargetEntity"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "AventurineShieldValue",
                      "resetValue": {
                        "displayLines": "0"
                      },
                      "scope": "TargetEntity"
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
  }
}