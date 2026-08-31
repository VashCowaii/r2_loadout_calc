const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 8034010,
  "trimCharacterName": 8034010,
  "abilityList": [
    "8034010_Modifiers",
    "8034010_Monster_W3_Aventurine_PassiveAbility_BGM",
    "8034010_Monster_W3_Aventurine_PassiveAbility_Insert_Part01",
    "8034010_Monster_W3_Aventurine_PassiveAbility_Insert",
    "8034010_Monster_W3_Aventurine_Passive01",
    "8034010_Monster_W3_Aventurine_Ability10_Part02",
    "8034010_Monster_W3_Aventurine_Ability10_Part01",
    "8034010_Monster_W3_Aventurine_Ability09_Part02",
    "8034010_Monster_W3_Aventurine_Ability09_Part01",
    "8034010_Monster_W3_Aventurine_Ability08_Part02",
    "8034010_Monster_W3_Aventurine_Ability08_Part01",
    "8034010_Monster_W3_Aventurine_Ability07_Part02",
    "8034010_Monster_W3_Aventurine_Ability07_Part01",
    "8034010_Monster_W3_Aventurine_Ability06_Part02",
    "8034010_Monster_W3_Aventurine_Ability06_Part01",
    "8034010_Monster_W3_Aventurine_Ability05_Part02",
    "8034010_Monster_W3_Aventurine_Ability05_Part01",
    "8034010_Monster_W3_Aventurine_Ability04_Part02",
    "8034010_Monster_W3_Aventurine_Ability04_Part01",
    "8034010_Monster_W3_Aventurine_Ability03_Part02",
    "8034010_Monster_W3_Aventurine_Ability03_Part01",
    "8034010_Monster_W3_Aventurine_Ability02_Part02",
    "8034010_Monster_W3_Aventurine_Ability02_Part01",
    "8034010_Monster_W3_Aventurine_Ability01_Part02",
    "8034010_Monster_W3_Aventurine_Ability01_Part01",
    "8034010_Handling"
  ],
  "abilityObject": {
    "8034010_Modifiers": {
      "fileName": "8034010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2036502588\">Monster_W3_Aventurine_ResetOffset</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2052817755\">W3_Aventurine_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Aventurine_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2146147148\">Monster_W3_Aventurine_DamageUp</a>[<span class=\"descriptionNumberColor\">Favored by Fortune</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Aventurine_BattleScore2_Flag",
                      "value": {
                        "operator": "Variables[0] (Aventurine_BattleScore2_Flag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Aventurine_BattleScore2_Flag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Aventurine_BattleScore2_Flag"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Aventurine_BattleScore2_Flag",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "All My People, All My People...",
                              "desc": "In the battle against Ten Stonehearts: Aventurine of Stratagems, have #1 characters in the team win in the same round of Gamble",
                              "rarity": "Low",
                              "params": [
                                4
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
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Aventurine_BattleScore2_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Aborted",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Aventurine_BattleScore2_Flag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2069595374\">W3_Aventurine_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Aventurine_BattleScore1_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Aventurine_BattleScore1_Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastLayer",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
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
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_CurrentLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentLayer",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_LastLayer) || Constants[0] (6) || ADD || RETURN",
                          "displayLines": "(MDF_LastLayer + 6)",
                          "constants": [
                            6
                          ],
                          "variables": [
                            "MDF_LastLayer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Aventurine_BattleScore1_Flag",
                          "value": {
                            "operator": "Variables[0] (Aventurine_BattleScore1_Flag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Aventurine_BattleScore1_Flag + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Aventurine_BattleScore1_Flag"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentLayer) || RETURN",
                        "displayLines": "MDF_CurrentLayer",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentLayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Aventurine_BattleScore1_Flag",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Boxcars",
                              "desc": "In the battle against Ten Stonehearts: Aventurine of Stratagems, cause at least #1 \"All or Nothings\" to simultaneously roll a #2 with a single attack",
                              "rarity": "Low",
                              "params": [
                                2,
                                6
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1639857943\">Monster_W3_Aventurine_GlobalMainIntensity</a>",
          "duration": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-941439932\">Monster_W3_Aventurine_MainEndSelf</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-29408526\">Monster_W3_Aventurine_MainEnd</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2006695469\">Monster_W3_Aventurine_BattlePerform</a>",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__66",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "ENEMIES_OBJECT_UNUSED__66",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__423329944\">Monster_W3_Aventurine_Deathrattle</a>",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_LockHP",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Change Entity Turn-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase4"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_LockHP",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LockHP",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-29408526\">Monster_W3_Aventurine_MainEnd</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-941439932\">Monster_W3_Aventurine_MainEndSelf</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      "failed": [
                        {
                          "name": "Change Entity Turn-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "phase": "Phase3"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DeathCheck",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "DeathCheck",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1774461591\">Monster_W3_Aventurine_Endurance</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Aventurine_PassiveAbility_Insert_Part01",
                          "priorityTag": "EnemyDeathEffect",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__942058812\">Monster_W3_Aventurine_GamblingExtraTurn</a>",
          "execute": [
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__549807086\">Monster_W3_Aventurine_Ability04_NoGambling</a>[<span class=\"descriptionNumberColor\">Look, Don't Speak</span>]",
          "description": "Characters who have not taken part in the Gamble will be inflicted with Strong Reverberation until the end of the Gamble. This effect cannot be immunized against or resisted.",
          "type": "Other",
          "statusName": "Look, Don't Speak",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1724913010\">Standard_Shake_IgnoreImmune</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (MDF_ShakeActionDelayRatio) || RETURN",
                      "displayLines": "MDF_ShakeActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "MDF_ShakeActionDelayRatio"
                      ]
                    }
                  }
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1724913010\">Standard_Shake_IgnoreImmune</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__451530541\">Monster_W3_Aventurine_Main</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2006695469\">Monster_W3_Aventurine_BattlePerform</a>"
                },
                {
                  "name": "Mute Last Kill",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
          "stackType": "Replace",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 2,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 5,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 6,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 7,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 8,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                    "compareType": "=",
                    "value2": 9,
                    "valueType": "Layer"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
                        "compareType": ">=",
                        "value2": 10,
                        "valueType": "Layer"
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
                      "valueType": "Layer",
                      "variableName": "DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((DiceResult_RL / 10))",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "WHOLE",
                          "DiceResult_RL"
                        ]
                      }
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (DiceResult_RL) || RETURN",
                        "displayLines": "DiceResult_RL",
                        "constants": [],
                        "variables": [
                          "DiceResult_RL"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 8
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 9
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "DiceResult_RL",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DiceResult_RL",
                      "value": {
                        "operator": "Variables[0] (DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                        "displayLines": "(DiceResult_RL % 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "DiceResult_RL"
                        ]
                      }
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (DiceResult_RL) || RETURN",
                        "displayLines": "DiceResult_RL",
                        "constants": [],
                        "variables": [
                          "DiceResult_RL"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 5
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 6
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 7
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 8
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 9
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "DiceResult",
                  "multiplier": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__610327898\">Monster_W3_Aventurine_Part2Effect</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__149453017\">Monster_W3_Aventurine_Ability07Result</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Aventurine_Ability10_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyBuffOthers",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1403664698\">Monster_W3_Aventurine_TargetDice</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1835393477\">Monster_W3_Aventurine_Ability03Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1871436959\">Monster_W3_Aventurine_Unselectable</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                }
              ]
            },
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2146147148\">Monster_W3_Aventurine_DamageUp</a>[<span class=\"descriptionNumberColor\">Favored by Fortune</span>]",
          "stackType": "Replace",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Favored by Fortune",
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
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                    "displayLines": "MDF_DamageUpRatio_PerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2016354343\">Monster_W3_Aventurine_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Down on Your Luck</span>]",
          "stackType": "Replace",
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Down on Your Luck",
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
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio_PerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1868976135\">Monster_W3_Aventurine_WeakProtect</a>",
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__949876985\">Monster_W3_Aventurine_Result</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DiceResult",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 2
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.25
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 3
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.333
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 4
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 5
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 6
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
                  "failed": [
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
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.166
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.2
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 2
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.25
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 3
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.333
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 4
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Random Chance",
                                            "chance": 0.5
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 5
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 6
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
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.133
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.154
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 2
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.182
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 3
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.222
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 4
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Random Chance",
                                            "chance": 0.286
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 5
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 6
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
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DiceResult",
                  "value": {
                    "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                    "displayLines": "MDF_DiceResult",
                    "constants": [],
                    "variables": [
                      "MDF_DiceResult"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-403740223\">Monster_W3_Aventurine_LuckyResult</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DiceResult",
                  "value": 6
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DiceResult",
                  "value": {
                    "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                    "displayLines": "MDF_DiceResult",
                    "constants": [],
                    "variables": [
                      "MDF_DiceResult"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-245963951\">Monster_W3_Aventurine_Sign</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "scope": "TargetEntity",
                      "variableName": "GamblingInsertCheck",
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
          "for": "<a class=\"gModGreen\" id=\"mod__137355695\">Monster_W3_Aventurine_SignPhase1</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "scope": "TargetEntity",
                      "variableName": "GamblingInsertCheck",
                      "value": 1
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_UseUltra",
                      "value": 1
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
          "description": "Attack \"All or Nothing\" to obtain a number. The currently obtained number is <span class=\"descriptionNumberColor\">MDF_GamblingResult</span>.",
          "type": "Other",
          "effectName": "Gamble",
          "statusName": "Gamble",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                  },
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "searchRandom": true,
                      "maxTargets": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                  },
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "searchRandom": true,
                      "maxTargets": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastGamblingResult",
                      "value": {
                        "operator": "Variables[0] (MDF_GamblingResult) || RETURN",
                        "displayLines": "MDF_GamblingResult",
                        "constants": [],
                        "variables": [
                          "MDF_GamblingResult"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_GamblingResult",
                      "modifierName": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
                      "value": {
                        "operator": "Variables[0] (MDF_GamblingResult) || RETURN",
                        "displayLines": "MDF_GamblingResult",
                        "constants": [],
                        "variables": [
                          "MDF_GamblingResult"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}.[[getSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_GamblingResult) || Variables[1] (MDF_LastGamblingResult) || SUB || RETURN",
                            "displayLines": "(MDF_GamblingResult - MDF_LastGamblingResult)",
                            "constants": [],
                            "variables": [
                              "MDF_GamblingResult",
                              "MDF_LastGamblingResult"
                            ]
                          },
                          "casterAssign": "CasterSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
          "description": "Attack \"All or Nothing\" to obtain a number. The currently obtained number is <span class=\"descriptionNumberColor\">MDF_GamblingResult</span>.",
          "type": "Other",
          "effectName": "Gamble",
          "statusName": "Gamble",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
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
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                  },
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "searchRandom": true,
                      "maxTargets": 1
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
                      "counter": {
                        "operator": "Variables[0] (MDF_GamblingResult) || RETURN",
                        "displayLines": "MDF_GamblingResult",
                        "constants": [],
                        "variables": [
                          "MDF_GamblingResult"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                  },
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "W3_Aventurine_00"
                      },
                      "searchRandom": true,
                      "maxTargets": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastGamblingResult",
                      "value": {
                        "operator": "Variables[0] (MDF_GamblingResult) || RETURN",
                        "displayLines": "MDF_GamblingResult",
                        "constants": [],
                        "variables": [
                          "MDF_GamblingResult"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_GamblingResult",
                      "modifierName": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DiceResult",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MDF_GamblingResult) || RETURN",
                              "displayLines": "MDF_GamblingResult",
                              "constants": [],
                              "variables": [
                                "MDF_GamblingResult"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Success",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Success",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
                      "value": {
                        "operator": "Variables[0] (MDF_GamblingResult) || RETURN",
                        "displayLines": "MDF_GamblingResult",
                        "constants": [],
                        "variables": [
                          "MDF_GamblingResult"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_GamblingResult",
                        "compareType": "<=",
                        "value2": 9
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Add Target by Unique Identifier",
                                  "identifier": "W3_Aventurine_00"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Add Target by Unique Identifier",
                                  "identifier": "W3_Aventurine_00"
                                },
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MDF_GamblingResult",
                                "compareType": "<=",
                                "value2": 99
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_LastGamblingResult",
                                    "compareType": "<=",
                                    "value2": 99
                                  }
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MDF_LastGamblingResult",
                                "compareType": "<=",
                                "value2": 9
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}.[[getMemosprite]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_GamblingResult) || Variables[1] (MDF_LastGamblingResult) || SUB || RETURN",
                            "displayLines": "(MDF_GamblingResult - MDF_LastGamblingResult)",
                            "constants": [],
                            "variables": [
                              "MDF_GamblingResult",
                              "MDF_LastGamblingResult"
                            ]
                          },
                          "casterAssign": "CasterSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1404098919\">Monster_W3_Aventurine_LuckyBonus</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1774461591\">Monster_W3_Aventurine_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "latentQueue": [
            "MDF_LockHP",
            "DeathCheck"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1598640789\">Monster_W3_Aventurine_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1774461591\">Monster_W3_Aventurine_Endurance</a>"
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
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Aventurine_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        }
      ],
      "references": []
    },
    "8034010_Monster_W3_Aventurine_PassiveAbility_BGM": {
      "fileName": "8034010_Monster_W3_Aventurine_PassiveAbility_BGM",
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1507066763\">Monster_W3_Aventurine_ResetStageBGM</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1507066763\">Monster_W3_Aventurine_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "8034010_Monster_W3_Aventurine_PassiveAbility_Insert_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_PassiveAbility_Insert": {
      "fileName": "8034010_Monster_W3_Aventurine_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1868976135\">Monster_W3_Aventurine_WeakProtect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
        },
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
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610327898\">Monster_W3_Aventurine_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1774461591\">Monster_W3_Aventurine_Endurance</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"423329944\">Monster_W3_Aventurine_Deathrattle</a>"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 7
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1598640789\">Monster_W3_Aventurine_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Passive01": {
      "fileName": "8034010_Monster_W3_Aventurine_Passive01",
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"2069595374\">W3_Aventurine_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2052817755\">W3_Aventurine_BattleScore2</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 803401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 8034011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Ten Stonehearts: Aventurine of Stratagems (Complete)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
          }
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1415592617\">Monster_W3_Aventurine_IF</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1737633510\">Monster_W3_Aventurine_AIChange</a>"
            }
          ]
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "W3_Aventurine_00",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
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
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1415592617\">Monster_W3_Aventurine_IF</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-292606061\">Monster_W3_Aventurine_IF_PartController</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1399378766\">Monster_W3_Aventurine_PartController_RL</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1598640789\">Monster_W3_Aventurine_PartController</a>"
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
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1737633510\">Monster_W3_Aventurine_AIChange</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start Action-End Phase",
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
                        "team": "Enemy Team",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "GamblingInsertCheck",
                        "compareType": ">=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
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
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}.[[removeMemosprite]]"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "WaitInsert",
                                "compareType": "=",
                                "value2": 0,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "WaitInsert",
                                  "value": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "GamblingInsertCheck",
                                  "value": 0
                                },
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  },
                                  "searchRandom": true,
                                  "maxTargets": 1,
                                  "ifTargetFound": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W3_AventurinePart_Ability04_Part01",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "priorityTag": "EnemyBuffOthers",
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
                                      "name": "Add Target by Unique Identifier",
                                      "identifier": "W3_AventurinePart_00_RL"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W3_Aventurine_Ability09_Part01_RL",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "priorityTag": "EnemyBuffOthers",
                                      "canHitNonTargets": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W3_Aventurine_Ability09_Part01",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "priorityTag": "EnemyBuffOthers",
                                      "canHitNonTargets": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ]
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
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
                        "team": "Enemy Team",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "GamblingInsertCheck",
                        "compareType": ">=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
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
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Current Action Holder Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1403664698\">Monster_W3_Aventurine_TargetDice</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "WaitInsert",
                                    "compareType": "=",
                                    "value2": 0,
                                    "contextScope": "TargetEntity"
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
                                  "scope": "TargetEntity",
                                  "variableName": "WaitInsert",
                                  "value": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "GamblingInsertCheck",
                                  "value": 0
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "SpecialDie",
                                  "value": 1
                                },
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  },
                                  "searchRandom": true,
                                  "maxTargets": 1,
                                  "ifTargetFound": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W3_AventurinePart_Ability04_Part01",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "priorityTag": "EnemyBuffOthers",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                    },
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
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
                        "team": "Enemy Team",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "GamblingInsertCheck",
                        "compareType": ">=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                      }
                    ]
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
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "WaitInsert",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "WaitInsert",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "GamblingInsertCheck",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "SpecialDie",
                              "value": 1
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W3_AventurinePart_Ability04_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "priorityTag": "EnemyBuffOthers",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
                                }
                              ]
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2036502588\">Monster_W3_Aventurine_ResetOffset</a>"
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
      ]
    },
    "8034010_Monster_W3_Aventurine_Ability10_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "AvatarDiceResult",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Win_Flag",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "AvatarDiceResult",
              "modifierName": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DiceResult",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (AvatarDiceResult) || RETURN",
                  "displayLines": "AvatarDiceResult",
                  "constants": [],
                  "variables": [
                    "AvatarDiceResult"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Win_Flag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Win_Flag",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "WaitInsert",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Aventurine: Skill10 Target}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (DiceResult) || RETURN",
                  "displayLines": "DiceResult",
                  "constants": [],
                  "variables": [
                    "DiceResult"
                  ]
                },
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MaxSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MaxSpecialSP) || Variables[1] (CurrentSpecialSP) || SUB || RETURN",
                        "displayLines": "(MaxSpecialSP - CurrentSpecialSP)",
                        "constants": [],
                        "variables": [
                          "MaxSpecialSP",
                          "CurrentSpecialSP"
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2146147148\">Monster_W3_Aventurine_DamageUp</a>[<span class=\"descriptionNumberColor\">Favored by Fortune</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                    "displayLines": "{[Skill05[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[2]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                      "displayLines": "{[Skill05[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (DiceResult) || RETURN",
              "displayLines": "DiceResult",
              "constants": [],
              "variables": [
                "DiceResult"
              ]
            },
            "valueType": "Layer"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (DiceResult) || RETURN",
                  "displayLines": "DiceResult",
                  "constants": [],
                  "variables": [
                    "DiceResult"
                  ]
                },
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (DiceResult) || RETURN",
              "displayLines": "DiceResult",
              "constants": [],
              "variables": [
                "DiceResult"
              ]
            },
            "valueType": "Layer"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "ifTargetFound": [
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
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (DiceResult) || RETURN",
                          "displayLines": "DiceResult",
                          "constants": [],
                          "variables": [
                            "DiceResult"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2016354343\">Monster_W3_Aventurine_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Down on Your Luck</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                    "displayLines": "{[Skill05[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[3]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "maxTargets": 1,
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
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (DiceResult) || RETURN",
                      "displayLines": "DiceResult",
                      "constants": [],
                      "variables": [
                        "DiceResult"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                    "invertCondition": true
                  }
                ]
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
              }
            ]
          }
        },
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DiceResult",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610327898\">Monster_W3_Aventurine_Part2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Aventurine: Skill07 Target}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0
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
                "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "Challenge"
                  },
                  {
                    "name": "Stage Type",
                    "stageType": "VerseSimulation"
                  },
                  {
                    "name": "Stage Type",
                    "stageType": "StrongChallengeActivity"
                  },
                  {
                    "name": "Stage Type",
                    "stageType": "RogueRelic"
                  },
                  {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871436959\">Monster_W3_Aventurine_Unselectable</a>"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability10_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability10_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability10_Camera",
        "8034010_Monster_W3_Aventurine_Ability10_Part01",
        "8034010_Monster_W3_Aventurine_Ability10_Part02"
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
          "ability": "Monster_W3_Aventurine_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-941439932\">Monster_W3_Aventurine_MainEndSelf</a>",
            "invertCondition": true
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability09_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "WaitInsert",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (DiceResult) || RETURN",
              "displayLines": "DiceResult",
              "constants": [],
              "variables": [
                "DiceResult"
              ]
            },
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "variableName": "MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "variableName": "CurrentSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MaxSpecialSP) || Variables[1] (CurrentSpecialSP) || SUB || RETURN",
                    "displayLines": "(MaxSpecialSP - CurrentSpecialSP)",
                    "constants": [],
                    "variables": [
                      "MaxSpecialSP",
                      "CurrentSpecialSP"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ],
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "valuePercent": 1,
                  "isFixed": "(Fixed)"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2146147148\">Monster_W3_Aventurine_DamageUp</a>[<span class=\"descriptionNumberColor\">Favored by Fortune</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (DiceResult) || RETURN",
                  "displayLines": "DiceResult",
                  "constants": [],
                  "variables": [
                    "DiceResult"
                  ]
                },
                "valueType": "Layer"
              },
              "failed": [
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
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Aventurine_Ability06_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "priorityTag": "EnemyAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2016354343\">Monster_W3_Aventurine_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Down on Your Luck</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                    "displayLines": "{[Skill05[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[3]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                      "displayLines": "{[Skill05[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
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
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1868976135\">Monster_W3_Aventurine_WeakProtect</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (DiceResult) || RETURN",
                  "displayLines": "DiceResult",
                  "constants": [],
                  "variables": [
                    "DiceResult"
                  ]
                },
                "valueType": "Layer"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[addMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[addMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}.[[addMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"549807086\">Monster_W3_Aventurine_Ability04_NoGambling</a>[<span class=\"descriptionNumberColor\">Look, Don't Speak</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DiceResult",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871436959\">Monster_W3_Aventurine_Unselectable</a>"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability09_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability09_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability09_Camera",
        "8034010_Monster_W3_Aventurine_Ability09_Part01",
        "8034010_Monster_W3_Aventurine_Ability09_Part02"
      ],
      "skillTrigger": "Skill09",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Aventurine_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability08_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1404098919\">Monster_W3_Aventurine_LuckyBonus</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-403740223\">Monster_W3_Aventurine_LuckyResult</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 9002231,
              "locationType": "BeforeCaster"
            },
            {
              "name": "Enemy Entry",
              "enemyID": 9002231,
              "locationType": "BeforeCaster"
            },
            {
              "name": "Enemy Entry",
              "enemyID": 9002231,
              "locationType": "AfterCaster"
            },
            {
              "name": "Enemy Entry",
              "enemyID": 9002231,
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability08_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability08_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability08_Camera",
        "8034010_Monster_W3_Aventurine_Ability08_Part01",
        "8034010_Monster_W3_Aventurine_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W3_Aventurine_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability07_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Aventurine: Skill07 Target}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 4
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Aventurine: Skill07 Target}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 3
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Aventurine: Skill07 Target}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Aventurine: Skill07 Target}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610327898\">Monster_W3_Aventurine_Part2Effect</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1868976135\">Monster_W3_Aventurine_WeakProtect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1404098919\">Monster_W3_Aventurine_LuckyBonus</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
                "HitSplit": 0.2,
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
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
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
                "HitSplit": 0.23,
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
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
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
                "HitSplit": 0.26,
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
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
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
                "HitSplit": 0.31,
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
            }
          ]
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
            "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
        },
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-403740223\">Monster_W3_Aventurine_LuckyResult</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610327898\">Monster_W3_Aventurine_Part2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability07_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability07_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability07_Camera",
        "8034010_Monster_W3_Aventurine_Ability07_Part01",
        "8034010_Monster_W3_Aventurine_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W3_Aventurine_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability06_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability06_Part02",
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
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
              "displayLines": "{[Skill06[2]]}",
              "constants": [],
              "variables": [
                "{[Skill06[2]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability06_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability06_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability06_Camera",
        "8034010_Monster_W3_Aventurine_Ability06_Part01",
        "8034010_Monster_W3_Aventurine_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Aventurine_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability05_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<",
            "value2": 3
          },
          "ifTargetFound": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1403664698\">Monster_W3_Aventurine_TargetDice</a>"
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID",
              "summonLocation": "Last"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1403664698\">Monster_W3_Aventurine_TargetDice</a>"
          },
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (DiceResult) || RETURN",
            "displayLines": "DiceResult",
            "constants": [],
            "variables": [
              "DiceResult"
            ]
          }
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"149453017\">Monster_W3_Aventurine_Ability07Result</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871436959\">Monster_W3_Aventurine_Unselectable</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability05_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability05_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability05_Camera",
        "8034010_Monster_W3_Aventurine_Ability05_Part01",
        "8034010_Monster_W3_Aventurine_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W3_Aventurine_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability04_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<",
            "value2": 3
          },
          "ifTargetFound": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1403664698\">Monster_W3_Aventurine_TargetDice</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"137355695\">Monster_W3_Aventurine_SignPhase1</a>",
          "duration": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"549807086\">Monster_W3_Aventurine_Ability04_NoGambling</a>[<span class=\"descriptionNumberColor\">Look, Don't Speak</span>]",
              "valuePerStack": {
                "MDF_ShakeActionDelayRatio": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                  "displayLines": "{[Skill04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1261439200\">Monster_W3_Aventurine_ResultCount</a>",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (DiceResult) || RETURN",
            "displayLines": "DiceResult",
            "constants": [],
            "variables": [
              "DiceResult"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "In Action State",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "SpecialActionState"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "WaitInsert",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "WaitInsert",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "GamblingInsertCheck",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_AventurinePart_Ability04_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "EnemyBuffOthers",
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
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_AventurinePart_00_RL"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Aventurine_Ability09_Part01_RL",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "priorityTag": "EnemyBuffOthers",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_Aventurine_Ability09_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "priorityTag": "EnemyBuffOthers",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871436959\">Monster_W3_Aventurine_Unselectable</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability04_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability04_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability04_Camera",
        "8034010_Monster_W3_Aventurine_Ability04_Part01",
        "8034010_Monster_W3_Aventurine_Ability04_Part02"
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
          "ability": "Monster_W3_Aventurine_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "filter": {
          "name": "Target Name",
          "target": "{{Player Team All}}.[[removeMemosprite]]"
        }
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability03_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1430761430\">Monster_W3_AventurinePart_LuckyResult</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
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
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "value": {
            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill03[1]]}) || MUL || RETURN",
            "displayLines": "(-1 * {[Skill03[1]]})",
            "constants": [
              1
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "popUpText": "Energy Reduced"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1835393477\">Monster_W3_Aventurine_Ability03Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability03_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability03_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability03_Camera",
        "8034010_Monster_W3_Aventurine_Ability03_Part01",
        "8034010_Monster_W3_Aventurine_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W3_Aventurine_Ability03_Part02",
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
    "8034010_Monster_W3_Aventurine_Ability02_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "modifier": "<a class=\"gModGreen\" id=\"451530541\">Monster_W3_Aventurine_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              }
            ]
          }
        },
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
              "name": "Looped Event",
              "maxLoops": 1,
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Random Highest Aggro}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.55
                      },
                      "passed": [
                        {
                          "name": "Shot Fired"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Shot Fired"
                        }
                      ]
                    },
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
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (WHOLE) || Variables[1] ({[Skill02[1]]}) || PARAM_1 || FUNCTION || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>({[Skill02[1]]}) - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "WHOLE",
                  "{[Skill02[1]]}"
                ]
              },
              "Event": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Shot Fired"
                        },
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
                              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                              "displayLines": "{[Skill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Shot Fired"
                        },
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
                              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                              "displayLines": "{[Skill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                    }
                  ],
                  "noTargetFound": [
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
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Shot Fired"
                            },
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
                                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                  "displayLines": "{[Skill02[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired"
                            },
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
                                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                  "displayLines": "{[Skill02[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "Trigger: Attack End",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": 1,
                  "Event": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemies by Taunt OR Random Highest Aggro}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.55
                          },
                          "passed": [
                            {
                              "name": "Shot Fired"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired"
                            }
                          ]
                        },
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
                              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                              "displayLines": "{[Skill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] ({[Skill02[2]]}) || PARAM_1 || FUNCTION || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>({[Skill02[2]]}) - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "WHOLE",
                      "{[Skill02[2]]}"
                    ]
                  },
                  "Event": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Shot Fired"
                            },
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
                                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                  "displayLines": "{[Skill02[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired"
                            },
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
                                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                  "displayLines": "{[Skill02[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        }
                      ],
                      "noTargetFound": [
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
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Shot Fired"
                                },
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
                                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                      "displayLines": "{[Skill02[0]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[Skill02[0]]}"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Basic ATK",
                                    "EnergyGainPercent": "100%"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Shot Fired"
                                },
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
                                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                      "displayLines": "{[Skill02[0]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[Skill02[0]]}"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Basic ATK",
                                    "EnergyGainPercent": "100%"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Trigger: Attack End",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": 1,
                  "Event": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemies by Taunt OR Random Highest Aggro}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.55
                          },
                          "passed": [
                            {
                              "name": "Shot Fired"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired"
                            }
                          ]
                        },
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
                              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                              "displayLines": "{[Skill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] ({[Skill02[2]]}) || PARAM_1 || FUNCTION || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>({[Skill02[2]]}) - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "WHOLE",
                      "{[Skill02[2]]}"
                    ]
                  },
                  "Event": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Shot Fired"
                            },
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
                                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                  "displayLines": "{[Skill02[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired"
                            },
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
                                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                  "displayLines": "{[Skill02[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                        }
                      ],
                      "noTargetFound": [
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
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Shot Fired"
                                },
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
                                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                      "displayLines": "{[Skill02[0]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[Skill02[0]]}"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Basic ATK",
                                    "EnergyGainPercent": "100%"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Shot Fired"
                                },
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
                                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                      "displayLines": "{[Skill02[0]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[Skill02[0]]}"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Basic ATK",
                                    "EnergyGainPercent": "100%"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Trigger: Attack End",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1348734063\">Monster_W3_Aventurine_Ability02AlreadyAttack</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill02Level",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability02_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability02_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability02_Camera",
        "8034010_Monster_W3_Aventurine_Ability02_Part01",
        "8034010_Monster_W3_Aventurine_Ability02_Part02"
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
          "ability": "Monster_W3_Aventurine_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability01_Part02": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1430761430\">Monster_W3_AventurinePart_LuckyResult</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
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
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8034010_Monster_W3_Aventurine_Ability01_Part01": {
      "fileName": "8034010_Monster_W3_Aventurine_Ability01_Part01",
      "childAbilityList": [
        "8034010_Monster_W3_Aventurine_Ability01_Camera",
        "8034010_Monster_W3_Aventurine_Ability01_Part01",
        "8034010_Monster_W3_Aventurine_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_W3_Aventurine_Ability01_Part02",
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
    "8034010_Handling": {
      "fileName": "8034010_Handling",
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
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "Decision01",
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
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
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
              "option": "Decision01",
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
                      "value": 3
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
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
              "option": "Decision01",
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
                      "value": 4
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 4
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
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
                          "name": "Use Ability Option",
                          "skillName": "Skill04"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "Decision01",
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
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
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
              "option": "Decision01",
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
                      "value": 3
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
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
              "option": "Decision01",
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
                      "value": 4
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
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
              "option": "Decision01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 4
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 5
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "Decision01",
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
                      "value": 6
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Aventurine: Skill07 Target}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill07"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
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
              "option": "Decision01",
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
                      "value": 3
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "Decision01",
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
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
                    }
                  ]
                }
              ],
              "weight": 0.5,
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.5,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
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