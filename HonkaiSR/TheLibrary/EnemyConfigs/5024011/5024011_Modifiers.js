const configAbility = {
  "fileName": "5024011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1275502108\">Monster_W5_Ripper_BattleScore2Count</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1951383355\">Monster_W5_Ripper_BattleScore1Count</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1520070084\">W5_Ripper_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1275502108\">Monster_W5_Ripper_BattleScore2Count</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Full Sanity",
                      "desc": "In the battle against \"Paramount Bliss Inverted: Illwish Archlotus,\" no characters were converted into Happiness Puppets by triggering \"Happiness\"",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1570402941\">W5_Ripper_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Entity Put Into Limbo [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Marionette Evil",
                      "desc": "In the battle against \"Paramount Bliss Inverted: Illwish Archlotus,\" an ally character is converted into a \"Happiness Puppet,\" then deals \"Right on Target\" and defeats any target",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__209501789\">Monster_W5_Ripper_Main_HPTrigger2</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_ActionCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_ActionCount",
                  "value": 1
                }
              ]
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
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_HPTriggerCompareRatio) || RETURN",
                  "displayLines": "MDF_HPTriggerCompareRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPTriggerCompareRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPTriggerRatio",
        "MDF_HPTriggerCompareRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__159168932\">Monster_W5_Ripper_Main_HPTrigger1</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_ActionCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_ActionCount",
                  "value": 1
                }
              ]
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
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_HPTriggerCompareRatio) || RETURN",
                  "displayLines": "MDF_HPTriggerCompareRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPTriggerCompareRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPTriggerRatio",
        "MDF_HPTriggerCompareRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-383684220\">Monster_W5_Ripper_MainBETrigger1</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1116201071\">Monster_W5_Ripper_MainPerform</a>",
      "modifierFlags": [
        "STAT_ForceActionable"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1617541886\">Monster_W5_Ripper_ForceAutoLock</a>",
      "modifierFlags": [
        "TauntForAutoLock"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
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
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__132804093\">Monster_W5_Ripper_PlayerUltraAbility</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valuePercent": 1,
              "isFixed": "(Fixed)"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__344113408\">Monster_W5_Ripper_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
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
      ],
      "description": "While \"Paramount Bliss Inverted: Illwish Lotus\" is in the Charging state, this unit's Toughness cannot be reduced.",
      "type": "Other",
      "effectName": "Weakness Protected",
      "statusName": "Weakness Protected"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2100417822\">Monster_W5_Ripper_Main2_DisabltAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-671604741\">Monster_W5_Ripper_Main2LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 1.0011718e-7
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2042265236\">Monster_W5_Ripper_Main2</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Main2Check",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 8009,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1055849459\">Modifier_Story42_PlayerBoy_InsertAfterAbility</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>"
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
                        "name": "Character ID",
                        "ID": 8010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"667898961\">Modifier_Story42_PlayerGirl_InsertAfterAbility</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Main2Check",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1055849459\">Modifier_Story42_PlayerBoy_InsertAfterAbility</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"667898961\">Modifier_Story42_PlayerGirl_InsertAfterAbility</a>"
                  }
                ]
              }
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2100417822\">Monster_W5_Ripper_Main2_DisabltAction</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 8009,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "{NICKNAME}"
                  },
                  {
                    "name": "Character ID",
                    "ID": 8010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "{NICKNAME}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-671604741\">Monster_W5_Ripper_Main2LockHP</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_Ripper_SpecialWin_Insert2",
              "priorityTag": "EnemyPhaseChange",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                        "name": "Character ID",
                        "ID": 8009,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      }
                    ]
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Main2Check",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
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
                    "value1": "Main2Check",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_TalkSentence_11_Check",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TalkSentence_11_Check",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2100417822\">Monster_W5_Ripper_Main2_DisabltAction</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>",
                  "valuePerStack": {
                    "MDF_LockHpActionDecreaseRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[6]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[6]]}"
                      ]
                    },
                    "MDF_LockHpUpLimitRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[7]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[7]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[7]]}"
                      ]
                    },
                    "MDF_DamageReduceRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[8]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[8]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[8]]}"
                      ]
                    },
                    "MDF_LastLockHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[9]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[9]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[9]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"159168932\">Monster_W5_Ripper_Main_HPTrigger1</a>",
                  "valuePerStack": {
                    "MDF_HPTriggerRatio": 0.25,
                    "MDF_HPTriggerCompareRatio": 0.2
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 8009,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      }
                    ]
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Main2Check",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
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
                    "value1": "Main2Check",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Main2Check",
                      "value": 2
                    }
                  ]
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
                "value1": "Main2Check",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1116201071\">Monster_W5_Ripper_MainPerform</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1055849459\">Modifier_Story42_PlayerBoy_InsertAfterAbility</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"667898961\">Modifier_Story42_PlayerGirl_InsertAfterAbility</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Main2Check",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Main2Check",
                  "value": 4
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 8009,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-671604741\">Monster_W5_Ripper_Main2LockHP</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Main2Check",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Main2Check",
                  "value": 3
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
      "for": "<a class=\"gModGreen\" id=\"mod__62518190\">Monster_W5_Ripper_Main</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"200611719\">Modifier_BattleEventAbility_TVBroadcast_Neutral</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 1.0011718e-7
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.3
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 1.0011718e-7
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_Ripper_SpecialWin_Insert1",
              "priorityTag": "EnemyPhaseChange",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1788107220\">Monster_W5_Ripper_Ability06_SpecialFlesh</a>",
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-98226572\">Monster_W5_Ripper_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Teasing</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_DamageTakenUpRatio_PerLayer"
      ],
      "latentQueue": [
        "MDF_InsertCheck"
      ],
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Teasing",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1642182695\">Monster_W5_Ripper_Flesh_UITop</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
      "stackType": "Prolong",
      "modifierFlags": [
        "STAT_CTRL",
        147,
        "AvatarBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Modifier-Specific Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
              "variableName": "MDF_SummonFlag",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1642182695\">Monster_W5_Ripper_Flesh_UITop</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"34096710\">Monster_W5_Ripper_FleshEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_FleshElationPoint",
        "MDF_FleshExtraChance",
        "MDF_FleshExtraElationPoint",
        "MDF_AttackEnemyChance",
        "MDF_DamagePercentage",
        "MDF_MaxDamageRatio",
        "MDF_MinDamageRatio",
        "MDF_ExtraDamageMultiple",
        "MDF_EnemyExtraDamageMultiple"
      ],
      "latentQueue": [
        "MainCount"
      ],
      "description": "Cannot take action. At the start of each turn, randomly enters either \"Outrage\" or \"Dominance\" state and gains Punchline. Has a chance to trigger \"Right on Target,\" granting allies more Punchline.",
      "type": "Debuff",
      "effectName": "Happiness Puppet",
      "statusName": "Happiness Puppet"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__34096710\">Monster_W5_Ripper_FleshEffect</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ripper: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1648139352\">Monster_W5_Ripper_MindControl</a>",
              "valuePerStack": {
                "MDF_FleshElationPoint": {
                  "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                  "displayLines": "MDF_FleshElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_FleshElationPoint"
                  ]
                },
                "MDF_FleshExtraChance": {
                  "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                  "displayLines": "MDF_FleshExtraChance",
                  "constants": [],
                  "variables": [
                    "MDF_FleshExtraChance"
                  ]
                },
                "MDF_FleshExtraElationPoint": {
                  "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                  "displayLines": "MDF_FleshExtraElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_FleshExtraElationPoint"
                  ]
                },
                "MDF_AttackEnemyChance": {
                  "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                  "displayLines": "MDF_AttackEnemyChance",
                  "constants": [],
                  "variables": [
                    "MDF_AttackEnemyChance"
                  ]
                },
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                  "displayLines": "MDF_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_DamagePercentage"
                  ]
                },
                "MDF_MaxDamageRatio": {
                  "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                  "displayLines": "MDF_MaxDamageRatio",
                  "constants": [],
                  "variables": [
                    "MDF_MaxDamageRatio"
                  ]
                },
                "MDF_MinDamageRatio": {
                  "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                  "displayLines": "MDF_MinDamageRatio",
                  "constants": [],
                  "variables": [
                    "MDF_MinDamageRatio"
                  ]
                },
                "MDF_ExtraDamageMultiple": {
                  "operator": "Variables[0] (MDF_ExtraDamageMultiple) || RETURN",
                  "displayLines": "MDF_ExtraDamageMultiple",
                  "constants": [],
                  "variables": [
                    "MDF_ExtraDamageMultiple"
                  ]
                },
                "MDF_EnemyExtraDamageMultiple": {
                  "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                  "displayLines": "MDF_EnemyExtraDamageMultiple",
                  "constants": [],
                  "variables": [
                    "MDF_EnemyExtraDamageMultiple"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_FleshElationPoint",
        "MDF_FleshExtraChance",
        "MDF_FleshExtraElationPoint",
        "MDF_AttackEnemyChance",
        "MDF_DamagePercentage",
        "MDF_MaxDamageRatio",
        "MDF_MinDamageRatio",
        "MDF_ExtraDamageMultiple",
        "MDF_EnemyExtraDamageMultiple"
      ],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-100211662\">Monster_W5_Ripper_AddFleshImmediately</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
              "duration": {
                "operator": "Variables[0] (FleshLifeTime) || RETURN",
                "displayLines": "FleshLifeTime",
                "constants": [],
                "variables": [
                  "FleshLifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_FleshElationPoint": {
                  "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                  "displayLines": "MDF_FleshElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_FleshElationPoint"
                  ]
                },
                "MDF_FleshExtraChance": {
                  "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                  "displayLines": "MDF_FleshExtraChance",
                  "constants": [],
                  "variables": [
                    "MDF_FleshExtraChance"
                  ]
                },
                "MDF_FleshExtraElationPoint": {
                  "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                  "displayLines": "MDF_FleshExtraElationPoint",
                  "constants": [],
                  "variables": [
                    "MDF_FleshExtraElationPoint"
                  ]
                },
                "MDF_AttackEnemyChance": {
                  "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                  "displayLines": "MDF_AttackEnemyChance",
                  "constants": [],
                  "variables": [
                    "MDF_AttackEnemyChance"
                  ]
                },
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                  "displayLines": "MDF_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_DamagePercentage"
                  ]
                },
                "MDF_MaxDamageRatio": {
                  "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                  "displayLines": "MDF_MaxDamageRatio",
                  "constants": [],
                  "variables": [
                    "MDF_MaxDamageRatio"
                  ]
                },
                "MDF_MinDamageRatio": {
                  "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                  "displayLines": "MDF_MinDamageRatio",
                  "constants": [],
                  "variables": [
                    "MDF_MinDamageRatio"
                  ]
                },
                "MDF_ExtraDamageMultiple": {
                  "operator": "Variables[0] (MDF_ExtraDamageMultiple) || RETURN",
                  "displayLines": "MDF_ExtraDamageMultiple",
                  "constants": [],
                  "variables": [
                    "MDF_ExtraDamageMultiple"
                  ]
                },
                "MDF_EnemyExtraDamageMultiple": {
                  "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                  "displayLines": "MDF_EnemyExtraDamageMultiple",
                  "constants": [],
                  "variables": [
                    "MDF_EnemyExtraDamageMultiple"
                  ]
                }
              },
              "casterAssign": "CasterSelf",
              "success": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ripper: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1275502108\">Monster_W5_Ripper_BattleScore2Count</a>"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                  "variableName": "MDF_SummonFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"34096710\">Monster_W5_Ripper_FleshEffect</a>",
                  "valuePerStack": {
                    "MDF_FleshElationPoint": {
                      "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                      "displayLines": "MDF_FleshElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_FleshElationPoint"
                      ]
                    },
                    "MDF_FleshExtraChance": {
                      "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                      "displayLines": "MDF_FleshExtraChance",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraChance"
                      ]
                    },
                    "MDF_FleshExtraElationPoint": {
                      "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                      "displayLines": "MDF_FleshExtraElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraElationPoint"
                      ]
                    },
                    "MDF_AttackEnemyChance": {
                      "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                      "displayLines": "MDF_AttackEnemyChance",
                      "constants": [],
                      "variables": [
                        "MDF_AttackEnemyChance"
                      ]
                    },
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "MDF_MaxDamageRatio": {
                      "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                      "displayLines": "MDF_MaxDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MaxDamageRatio"
                      ]
                    },
                    "MDF_MinDamageRatio": {
                      "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                      "displayLines": "MDF_MinDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinDamageRatio"
                      ]
                    },
                    "MDF_ExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_ExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_ExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_ExtraDamageMultiple"
                      ]
                    },
                    "MDF_EnemyExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_EnemyExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_EnemyExtraDamageMultiple"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "failed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                  "variableName": "MDF_SummonFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1116502173\">Monster_W5_Ripper_EnhanceImmediately</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"523858959\">WMonster_W5_RipperPart_Enhance</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-709845994\">Monster_W5_Ripper_SummonImmediately</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 5022010,
                  "locationType": "KeepOnEdge"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "LastModifierLayers",
              "value": {
                "operator": "Variables[0] (ModifierLayers) || RETURN",
                "displayLines": "ModifierLayers",
                "constants": [],
                "variables": [
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (LastModifierLayers) || RETURN",
                  "displayLines": "LastModifierLayers",
                  "constants": [],
                  "variables": [
                    "LastModifierLayers"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SummonOrder",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DelayRatio",
                              "value": {
                                "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                                "displayLines": "{[Skill04[5]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill04[5]]}"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DelayRatio",
                              "value": {
                                "operator": "Variables[0] ({[Skill04[6]]}) || RETURN",
                                "displayLines": "{[Skill04[6]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill04[6]]}"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (MDF_DelayRatio) || RETURN",
                            "displayLines": "MDF_DelayRatio",
                            "constants": [],
                            "variables": [
                              "MDF_DelayRatio"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                                "displayLines": "SummonList_ADF_1",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_1"
                                ]
                              },
                              "locationType": "KeepOnEdge"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SummonOrder",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "variableName": "Buff_DamageUpRatio",
                          "value": {
                            "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                            "displayLines": "{[PassiveSkill01[3]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[3]]}"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "variableName": "Buff_MaxLayer",
                          "value": {
                            "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                            "displayLines": "{[PassiveSkill01[4]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[4]]}"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
                          "addStacksPerTrigger": -1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "ModifierLayers",
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
                              "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
              "addStacksPerTrigger": 0
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-287768944\">Monster_W5_Ripper_Summon</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase] [Anyone]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_Ripper_SummonMonster_Ability",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyBuffOthers",
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalDamageUpRatio) || RETURN",
                "displayLines": "MDF_CriticalDamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_CriticalDamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CriticalDamageUpRatio</span> and becomes immune to the \"Happiness Puppet\" effect for the duration.",
      "type": "Buff",
      "effectName": "Inverted Severance",
      "statusName": "Inverted Severance"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
      "stackType": "ReplaceButKeepLifeTime",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W5_Ripper_FleshChange"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "FleshLifeTime",
              "value": {
                "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                "displayLines": "{[Skill06[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[2]]}"
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
              "variableName": "Buff_DamageUpRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[3]]}"
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
              "variableName": "Buff_MaxLayer",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[4]]}"
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
              "variableName": "MDF_FleshElationPoint",
              "value": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
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
              "variableName": "MDF_FleshExtraChance",
              "value": {
                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                "displayLines": "{[Skill06[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[4]]}"
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
              "variableName": "MDF_FleshExtraElationPoint",
              "value": {
                "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                "displayLines": "{[Skill06[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[5]]}"
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
              "variableName": "MDF_AttackEnemyChance",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[0]]}"
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
              "variableName": "MDF_DamagePercentage",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[1]]}"
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
              "variableName": "MDF_MaxDamageRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[2]]}"
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
              "variableName": "MDF_MinDamageRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[3]]}"
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
              "variableName": "MDF_ExtraDamageMultiple",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[4]]}"
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
              "variableName": "MDF_EnemyExtraDamageMultiple",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[5]]}"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 5
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AttackFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_AddLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_AddLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_AddLayer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackFlag",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                        "displayLines": "MDF_AddLayer",
                        "constants": [],
                        "variables": [
                          "MDF_AddLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DieFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DieFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_SummonCount) || RETURN",
                "displayLines": "MDF_SummonCount",
                "constants": [],
                "variables": [
                  "MDF_SummonCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SummonOrder",
              "value": 0
            }
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                  "displayLines": "MDF_MaxLayer",
                  "constants": [],
                  "variables": [
                    "MDF_MaxLayer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ConversionFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ConversionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Ripper_FleshChange",
                      "priorityTag": "EnemyBuffOthers",
                      "allowAbilityTriggers": false
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
              "name": "Define Custom Variable",
              "variableName": "LastModifierLayers",
              "value": {
                "operator": "Variables[0] (ModifierLayers) || RETURN",
                "displayLines": "ModifierLayers",
                "constants": [],
                "variables": [
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "LastModifierLayers",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
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
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "LastModifierLayers",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Init",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Init",
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
                "value1": "ModifierLayers",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill04[8]]}) || RETURN",
                    "displayLines": "{[Skill04[8]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[8]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CriticalDamageUpRatio": {
                      "operator": "Variables[0] ({[Skill04[7]]}) || RETURN",
                      "displayLines": "{[Skill04[7]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[7]]}"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
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
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
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
                    "value1": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "addStacksPerTrigger": -1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                "compareType": "=",
                "value2": 0,
                "valueType": "Layer"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                  "addStacksPerTrigger": -1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxLayer",
        "MDF_AddLayer",
        "MDF_SummonCount"
      ],
      "latentQueue": [
        "MainCount",
        "ParasitismLayer"
      ],
      "description": "At the start of each turn, gains <span class=\"descriptionNumberColor\">MDF_AddLayer</span> stack(s). Loses 1 stack when an enemy summons \"Illwish Lotus\" or after attacking an enemy target, and loses an additional stack after eliminating an enemy target. At the end of the turn, if stacks are greater than or equal to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span>, the character will be converted into a \"Happiness Puppet.\" When stacks reach <span class=\"descriptionNumberColor\">MDF_RemoveLayer</span>, this state is dispelled and the \"Inverted Severance\" effect is inflicted.",
      "type": "Other",
      "effectName": "Happiness",
      "statusName": "Happiness",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-693038758\">Monster_W5_Ripper_ChargeEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "modifier": "<a class=\"gModGreen\" id=\"344113408\">Monster_W5_Ripper_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"344113408\">Monster_W5_Ripper_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__127164036\">Monster_W5_Ripper_Endurance</a>",
      "modifierFlags": [
        "Endurance"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1759914466\">Monster_W5_Ripper_PartController</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"127164036\">Monster_W5_Ripper_Endurance</a>"
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
                      "abilityName": "Monster_W5_Ripper_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "allowAbilityTriggers": false
                    }
                  ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"127164036\">Monster_W5_Ripper_Endurance</a>"
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
                      "abilityName": "Monster_W5_Ripper_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2048207253\">Monster_W5_Ripper_Charm_Attack</a>",
      "execute": [
        {
          "eventTrigger": "Controlled Action [Owner]: End",
          "execute": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                "displayLines": "MDF_FleshElationPoint",
                "constants": [],
                "variables": [
                  "MDF_FleshElationPoint"
                ]
              },
              "adjustment": "Add"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__662835406\">Monster_W5_Ripper_Charm_CriticalAttack</a>",
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]"
        },
        {
          "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Bit_Limbo",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Marionette Evil",
                      "desc": "In the battle against \"Paramount Bliss Inverted: Illwish Archlotus,\" an ally character is converted into a \"Happiness Puppet,\" then deals \"Right on Target\" and defeats any target",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Controlled Action [Owner]: End",
          "execute": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                "displayLines": "MDF_FleshExtraElationPoint",
                "constants": [],
                "variables": [
                  "MDF_FleshExtraElationPoint"
                ]
              },
              "adjustment": "Add"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1866931109\">Monster_W5_Ripper_Crazy_Attack</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                "displayLines": "MDF_FleshElationPoint",
                "constants": [],
                "variables": [
                  "MDF_FleshElationPoint"
                ]
              },
              "adjustment": "Add"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>",
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
                "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                "displayLines": "MDF_EnemyExtraDamageMultiple",
                "constants": [],
                "variables": [
                  "MDF_EnemyExtraDamageMultiple"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-656989940\">Monster_W5_Ripper_Crazy_CriticalAttack</a>",
      "execute": [
        {
          "eventTrigger": "Attacker Finalizes ATK Data",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": ">",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>",
              "valuePerStack": {
                "MDF_EnemyExtraDamageMultiple": {
                  "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                  "displayLines": "MDF_EnemyExtraDamageMultiple",
                  "constants": [],
                  "variables": [
                    "MDF_EnemyExtraDamageMultiple"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Attack Targets of Modifier Holder}}"
                },
                "compareType": ">",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                    "displayLines": "MDF_FleshElationPoint",
                    "constants": [],
                    "variables": [
                      "MDF_FleshElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                }
              ],
              "failed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                    "displayLines": "MDF_FleshExtraElationPoint",
                    "constants": [],
                    "variables": [
                      "MDF_FleshExtraElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1648139352\">Monster_W5_Ripper_MindControl</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackEnemyChance",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                  "displayLines": "MDF_AttackEnemyChance",
                  "constants": [],
                  "variables": [
                    "MDF_AttackEnemyChance"
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                      "displayLines": "MDF_FleshExtraChance",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraChance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
                      "duration": 1,
                      "success": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-656989940\">Monster_W5_Ripper_Crazy_CriticalAttack</a>",
                          "valuePerStack": {
                            "MDF_FleshElationPoint": {
                              "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                              "displayLines": "MDF_FleshElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_FleshElationPoint"
                              ]
                            },
                            "MDF_FleshExtraElationPoint": {
                              "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                              "displayLines": "MDF_FleshExtraElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_FleshExtraElationPoint"
                              ]
                            },
                            "MDF_EnemyExtraDamageMultiple": {
                              "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                              "displayLines": "MDF_EnemyExtraDamageMultiple",
                              "constants": [],
                              "variables": [
                                "MDF_EnemyExtraDamageMultiple"
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
                      "duration": 1,
                      "success": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1866931109\">Monster_W5_Ripper_Crazy_Attack</a>",
                          "valuePerStack": {
                            "MDF_FleshElationPoint": {
                              "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                              "displayLines": "MDF_FleshElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_FleshElationPoint"
                              ]
                            },
                            "MDF_FleshExtraElationPoint": {
                              "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                              "displayLines": "MDF_FleshExtraElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_FleshExtraElationPoint"
                              ]
                            },
                            "MDF_EnemyExtraDamageMultiple": {
                              "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                              "displayLines": "MDF_EnemyExtraDamageMultiple",
                              "constants": [],
                              "variables": [
                                "MDF_EnemyExtraDamageMultiple"
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
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
                    "chance": {
                      "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                      "displayLines": "MDF_FleshExtraChance",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraChance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_MindControlDamagePercentage": {
                          "operator": "Variables[0] (MDF_ExtraDamageMultiple) || Variables[1] (MDF_DamagePercentage) || MUL || RETURN",
                          "displayLines": "(MDF_ExtraDamageMultiple * MDF_DamagePercentage)",
                          "constants": [],
                          "variables": [
                            "MDF_ExtraDamageMultiple",
                            "MDF_DamagePercentage"
                          ]
                        },
                        "MDF_MaxDamageRatio": {
                          "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                          "displayLines": "MDF_MaxDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MaxDamageRatio"
                          ]
                        },
                        "MDF_MinDamageRatio": {
                          "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                          "displayLines": "MDF_MinDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MinDamageRatio"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf",
                      "success": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"662835406\">Monster_W5_Ripper_Charm_CriticalAttack</a>",
                          "valuePerStack": {
                            "MDF_FleshExtraElationPoint": {
                              "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                              "displayLines": "MDF_FleshExtraElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_FleshExtraElationPoint"
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_MindControlDamagePercentage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        },
                        "MDF_MaxDamageRatio": {
                          "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                          "displayLines": "MDF_MaxDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MaxDamageRatio"
                          ]
                        },
                        "MDF_MinDamageRatio": {
                          "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                          "displayLines": "MDF_MinDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MinDamageRatio"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf",
                      "success": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2048207253\">Monster_W5_Ripper_Charm_Attack</a>",
                          "valuePerStack": {
                            "MDF_FleshElationPoint": {
                              "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                              "displayLines": "MDF_FleshElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_FleshElationPoint"
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
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
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_FleshElationPoint",
        "MDF_FleshExtraChance",
        "MDF_FleshExtraElationPoint",
        "MDF_AttackEnemyChance",
        "MDF_DamagePercentage",
        "MDF_MaxDamageRatio",
        "MDF_MinDamageRatio",
        "MDF_ExtraDamageMultiple",
        "MDF_EnemyExtraDamageMultiple"
      ],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1092487556\">Monster_W5_Ripper_HeartEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-764241521\">Monster_W5_Ripper_HeartEffectPrepare</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1092487556\">Monster_W5_Ripper_HeartEffect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
      "description": "Triggers after <span class=\"descriptionNumberColor\">MDF_Count</span> more enemy targets are eliminated, increasing the DMG taken by all enemies and removing the \"Wicked Grin\" effect from \"Paramount Bliss Inverted: Illwish Archlotus.\"",
      "type": "Other",
      "statusName": "Laughter's End"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1728959136\">Monster_W5_Ripper_Passive</a>",
      "execute": [
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCount",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_CurrentCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                    "displayLines": "MDF_CurrentCount",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                    "displayLines": "MDF_TriggerSummonCount",
                    "constants": [],
                    "variables": [
                      "MDF_TriggerSummonCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_TriggerSummonCount) || Variables[1] (MDF_CurrentCount) || SUB || RETURN",
                    "displayLines": "(MDF_TriggerSummonCount - MDF_CurrentCount)",
                    "constants": [],
                    "variables": [
                      "MDF_TriggerSummonCount",
                      "MDF_CurrentCount"
                    ]
                  }
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
                    "value1": "MDF_CurrentCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                      "displayLines": "MDF_TriggerSummonCount",
                      "constants": [],
                      "variables": [
                        "MDF_TriggerSummonCount"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_InsertCheck",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertCheck",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Ripper_TriggerSummon",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyBuffOthers",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                    "displayLines": "MDF_TriggerSummonCount",
                    "constants": [],
                    "variables": [
                      "MDF_TriggerSummonCount"
                    ]
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_OnceCheck",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnceCheck",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                    "displayLines": "MDF_TriggerSummonCount",
                    "constants": [],
                    "variables": [
                      "MDF_TriggerSummonCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
                  "valuePerStack": {
                    "MDF_Count": {
                      "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                      "displayLines": "MDF_TriggerSummonCount",
                      "constants": [],
                      "variables": [
                        "MDF_TriggerSummonCount"
                      ]
                    }
                  }
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__246"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
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
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 6
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        }
      ],
      "stackData": [
        "MDF_TriggerSummonCount"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}