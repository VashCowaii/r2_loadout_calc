const configAbility = {
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
}